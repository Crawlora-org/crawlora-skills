import { test } from "node:test";
import assert from "node:assert/strict";
import { existsSync, mkdtempSync, readdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";

const ROOT = fileURLToPath(new URL("..", import.meta.url));
const SKILLS_DIR = join(ROOT, "skills");
const helperEntries = readdirSync(SKILLS_DIR, { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .map((entry) => ({
    name: entry.name,
    path: join(SKILLS_DIR, entry.name, "scripts/crawlora.sh"),
  }))
  .sort((a, b) => a.name.localeCompare(b.name));

function methodsFor(source) {
  const match = source.match(/case "\$method" in\n\s+([^)]*)\) ;;\n/);
  assert.ok(match, "generated helper must declare its allowed methods");
  return match[1].split("|").sort();
}

function representativePath(source) {
  const staticRoute = source.match(/^\s+(\/[^()\s*]+)\) route_allowed=true/m)?.[1];
  if (staticRoute) return staticRoute.replaceAll("\\", "");

  const regexRoute = source.match(/^\s+'(\^.*\$)'$/m)?.[1];
  assert.ok(regexRoute, "generated helper must contain a representative route");
  return regexRoute
    .replace(/^\^|\$$/g, "")
    .replaceAll("[^/]+", "probe")
    .replaceAll(/\\(.)/g, "$1");
}

function methodRouteSamples(source, method) {
  const escapedMethod = method.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const regex = new RegExp(`^\\s+'\\^${escapedMethod}:([^\\n]+)\\$'`, "gm");
  const routes = [...source.matchAll(regex)].map((match) =>
    match[1].replaceAll("[^/]+", "probe").replaceAll(/\\(.)/g, "$1"),
  );
  assert.ok(routes.length, `generated helper must contain a ${method} route regex`);
  return routes;
}

function invoke(helperPath, args, dir) {
  return spawnSync("/bin/bash", [helperPath, ...args], {
    encoding: "utf8",
    env: {
      ...process.env,
      PATH: `${dir}:${process.env.PATH}`,
      CRAWLORA_API_KEY: "test-key",
    },
  });
}

function withFakeCurl(callback) {
  const dir = mkdtempSync(join(tmpdir(), "crawlora-security-"));
  try {
    const marker = join(dir, "curl-was-called");
    writeFileSync(
      join(dir, "curl"),
      `#!/bin/sh\ntouch "${marker}"\nexit 0\n`,
      { mode: 0o755 },
    );
    return callback(dir, marker);
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
}

test("every generated helper carries the shared security contract", () => {
  assert.ok(helperEntries.length > 0);
  for (const { name, path } of helperEntries) {
    const source = readFileSync(path, "utf8");
    const methods = methodsFor(source);

    assert.match(source, /documented Crawlora route set/, name);
    assert.match(source, /base="https:\/\/api\.crawlora\.net\/api\/v1"/, name);
    assert.doesNotMatch(source, /(?:^|\n)\s*(?:export\s+)?CRAWLORA_API_BASE\s*=/, name);
    assert.match(source, /curl -q -fsS\b/, name);
    assert.doesNotMatch(source, /\bcurl -fsS\b/, name);
    assert.match(source, /chmod 600 "\$curl_config"/, name);
    assert.match(source, /umask 077/, name);
    assert.match(source, /trap 'rm -f "\$curl_config"' EXIT/, name);
    assert.match(source, /route_allowed=false/, name);
    assert.doesNotMatch(source, /^\s+\/[^\n]*\*\) route_allowed=true/m, name);
    assert.match(source, /case "\$path" in[\s\S]*?\*\.\./, name);

    if (methods.length > 1) {
      assert.match(source, /route_method_allowed=false/, name);
      assert.match(source, /route_method_regexes=\(/, name);
      assert.match(source, /method is not allowed for this .* route/, name);
    }
    if (methods.length === 1 && methods[0] === "GET") {
      assert.doesNotMatch(source, /body=""|--data-binary/, name);
    }
  }
});

test("every generated helper rejects an undocumented route before curl", () => {
  withFakeCurl((dir, marker) => {
    for (const { name, path } of helperEntries) {
      const result = invoke(path, ["/__crawlora_security_probe__/not-in-catalog__"], dir);
      assert.equal(result.status, 2, `${name}: ${result.stderr}`);
      assert.match(result.stderr, /not in the .* skill catalog/, name);
      assert.equal(existsSync(marker), false, `${name}: curl ran for an undocumented route`);
    }
  });
});

test("GET-only helpers reject POST and mixed-method helpers reject a route's wrong method", () => {
  withFakeCurl((dir, marker) => {
    for (const { name, path } of helperEntries) {
      const source = readFileSync(path, "utf8");
      const methods = methodsFor(source);
      const route = representativePath(source);

      if (methods.length === 1 && methods[0] === "GET") {
        const result = invoke(path, ["-X", "POST", route, "{}"], dir);
        assert.equal(result.status, 2, `${name}: ${result.stderr}`);
        assert.match(result.stderr, /only GET are supported/, name);
        assert.equal(existsSync(marker), false, `${name}: curl ran for a rejected POST`);
      }

      if (methods.includes("GET") && methods.includes("POST")) {
        const getRoutes = methodRouteSamples(source, "GET");
        const postRoutes = methodRouteSamples(source, "POST");
        const getRoute = getRoutes.find((candidate) => !postRoutes.includes(candidate));
        const postRoute = postRoutes.find((candidate) => !getRoutes.includes(candidate));
        // If the same path is intentionally documented for both methods, there
        // is no wrong-method sample for that path. The generated anchored
        // method regex invariant above still protects the route table.
        if (!getRoute || !postRoute) continue;

        for (const [method, wrongRoute, args] of [
          ["POST", getRoute, ["{}"]],
          ["GET", postRoute, []],
        ]) {
          const result = invoke(path, ["-X", method, wrongRoute, ...args], dir);
          assert.equal(result.status, 2, `${name} ${method} ${wrongRoute}: ${result.stderr}`);
          assert.match(result.stderr, /method is not allowed/, name);
          assert.equal(existsSync(marker), false, `${name}: curl ran for a wrong-method route`);
        }
      }
    }
  });
});

test("ClawHub sync invokes the intended CLI and fails closed on old Node", () => {
  const sync = readFileSync(join(ROOT, "scripts/sync-directories.sh"), "utf8");
  assert.match(sync, /node_major=.*process\.versions\.node/);
  assert.match(sync, /CLAWHUB_BIN/);
  assert.match(sync, /CLAWHUB=\(npx --yes --package=clawhub@latest clawhub\)/);
  assert.doesNotMatch(sync, /npx -y clawhub@latest skill publish/);
  assert.match(sync, /npx --yes --package=skills@latest skills add/);
  assert.match(sync, /--skill '\*' --copy --agent codex -y/);
  assert.doesNotMatch(sync, /skills add .*--all/);
  assert.doesNotMatch(sync, /npx -y skills add/);
});

test("flagged marketplace skills declare their helper scope and explain data flow", () => {
  for (const name of ["luxury-resale-research", "shopify-research", "linkedin-research"]) {
    const skill = readFileSync(join(SKILLS_DIR, name, "SKILL.md"), "utf8");
    const normalized = skill.replace(/\s+/g, " ");
    const frontmatter = skill.match(/^---\n([\s\S]*?)\n---/);
    assert.ok(frontmatter, `${name}: frontmatter exists`);
    assert.match(
      frontmatter[1],
      /^allowed-tools: Bash\(scripts\/crawlora\.sh:\*\)$/m,
      `${name}: declares the constrained helper command`,
    );
    assert.doesNotMatch(frontmatter[1], /Bash\(\*\)/, `${name}: no unrestricted shell grant`);
    assert.match(normalized, /reads `CRAWLORA_API_KEY` and sends it as an `x-api-key` header over HTTPS to `api\.crawlora\.net`/);
    assert.match(normalized, /mode-600 curl config under `TMPDIR` and removes it when the command exits/);
    assert.match(normalized, /does not inspect other environment variables, enumerate files, install software, or run with elevated privileges/);
  }
});
