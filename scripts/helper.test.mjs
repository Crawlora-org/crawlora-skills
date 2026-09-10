import { test } from "node:test";
import assert from "node:assert/strict";
import { mkdtempSync, writeFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";

const helper = fileURLToPath(new URL("../lib/crawlora.sh", import.meta.url));
const publicHelper = fileURLToPath(new URL("../skills/crawlora/scripts/crawlora.sh", import.meta.url));
const amazonHelper = fileURLToPath(new URL("../skills/amazon-research/scripts/crawlora.sh", import.meta.url));
function request(args) {
  const dir = mkdtempSync(join(tmpdir(), "crawlora-helper-"));
  try {
    // Capture argument boundaries instead of making a network request.
    writeFileSync(join(dir, "curl"), '#!/bin/sh\nprintf "%s\\n" "$@"\n', { mode: 0o755 });
    const result = spawnSync("/bin/bash", [helper, ...args], {
      encoding: "utf8",
      env: { ...process.env, PATH: `${dir}:${process.env.PATH}`, CRAWLORA_API_KEY: "test-key" },
    });
    assert.equal(result.status, 0, result.stderr);
    return result.stdout.trimEnd().split("\n");
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
}

test("GET detail without query parameters works with the system Bash", () => {
  assert.deepEqual(request(["/google/map/place/example"]), [
    "-fsS", "-G", "-H", "x-api-key: test-key", "https://api.crawlora.net/api/v1/google/map/place/example",
  ]);
});

test("GET preserves spaces and repeated query keys as separate curl arguments", () => {
  const args = request(["/search", "q=coffee & tea", "category=one", "category=two"]);
  assert.deepEqual(args.slice(4), [
    "--data-urlencode", "q=coffee & tea", "--data-urlencode", "category=one",
    "--data-urlencode", "category=two", "https://api.crawlora.net/api/v1/search",
  ]);
});

test("POST preserves flat JSON bodies", () => {
  const body = '{"keyword":"coffee cambridge","language":"en","country":"us"}';
  const args = request(["-X", "POST", "/google/map/search", body]);
  assert.deepEqual(args.slice(-3), ["--data-binary", "@-", "https://api.crawlora.net/api/v1/google/map/search"]);
});

test("POST supports -d and defaults an omitted body to an empty object", () => {
  assert.deepEqual(request(["-X", "POST", "/test"]).slice(-3), ["--data-binary", "@-", "https://api.crawlora.net/api/v1/test"]);
  assert.deepEqual(request(["-X", "POST", "/test", "-d", '{"url":"https://example.com"}']).slice(-3), [
    "--data-binary", "@-", "https://api.crawlora.net/api/v1/test",
  ]);
});

test("POST treats an @-prefixed body as literal data", () => {
  assert.deepEqual(request(["-X", "POST", "/test", "@local-file"]).slice(-3), [
    "--data-binary", "@-", "https://api.crawlora.net/api/v1/test",
  ]);
});

test("rejects account monitor and usage-management paths", () => {
  const dir = mkdtempSync(join(tmpdir(), "crawlora-helper-"));
  try {
    writeFileSync(join(dir, "curl"), '#!/bin/sh\nexit 99\n', { mode: 0o755 });
    const result = spawnSync("/bin/bash", [publicHelper, "/monitors"], {
      encoding: "utf8",
      env: { ...process.env, PATH: `${dir}:${process.env.PATH}`, CRAWLORA_API_KEY: "test-key" },
    });
    assert.equal(result.status, 2);
    assert.match(result.stderr, /not in the crawlora skill catalog/);
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});

test("scoped helpers reject unrelated route families", () => {
  const dir = mkdtempSync(join(tmpdir(), "crawlora-helper-"));
  try {
    writeFileSync(join(dir, "curl"), '#!/bin/sh\nexit 99\n', { mode: 0o755 });
    const result = spawnSync("/bin/bash", [amazonHelper, "/google/search"], {
      encoding: "utf8",
      env: { ...process.env, PATH: `${dir}:${process.env.PATH}`, CRAWLORA_API_KEY: "test-key" },
    });
    assert.equal(result.status, 2);
    assert.match(result.stderr, /not in the amazon-research skill catalog/);
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});
