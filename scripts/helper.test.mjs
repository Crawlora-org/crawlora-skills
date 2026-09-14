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
const earningsHelper = fileURLToPath(new URL("../skills/earnings-event-research/scripts/crawlora.sh", import.meta.url));
const googleTrendsHelper = fileURLToPath(new URL("../skills/google-trends-research/scripts/crawlora.sh", import.meta.url));
const appStoreHelper = fileURLToPath(new URL("../skills/app-store-research/scripts/crawlora.sh", import.meta.url));
const travelAccommodationHelper = fileURLToPath(new URL("../skills/travel-accommodation-research/scripts/crawlora.sh", import.meta.url));
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
  const args = request(["/google/map/place/example"]);
  assert.deepEqual(args.slice(0, 3), ["-fsS", "-G", "--config"]);
  assert.match(args[3], /crawlora-curl/);
  assert.equal(args.at(-1), "https://api.crawlora.net/api/v1/google/map/place/example");
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

test("GET rejects curl's local-file query shorthand", () => {
  const dir = mkdtempSync(join(tmpdir(), "crawlora-helper-"));
  try {
    writeFileSync(join(dir, "curl"), '#!/bin/sh\nexit 99\n', { mode: 0o755 });
    const result = spawnSync("/bin/bash", [helper, "/google/search", "q=@local-file"], {
      encoding: "utf8",
      env: { ...process.env, PATH: `${dir}:${process.env.PATH}`, CRAWLORA_API_KEY: "test-key" },
    });
    assert.equal(result.status, 2);
    assert.match(result.stderr, /@ is not allowed/);
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});

test("rejects API keys that could inject curl config directives", () => {
  const result = spawnSync("/bin/bash", [helper, "/google/search"], {
    encoding: "utf8",
    env: { ...process.env, CRAWLORA_API_KEY: "valid-key\nurl = https://evil.example" },
  });
  assert.equal(result.status, 2);
  assert.match(result.stderr, /invalid CRAWLORA_API_KEY format/);
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

test("scoped helpers require each dynamic parameter to be one path segment", () => {
  const dir = mkdtempSync(join(tmpdir(), "crawlora-helper-"));
  try {
    writeFileSync(join(dir, "curl"), '#!/bin/sh\nprintf "%s\\n" "$@"\n', { mode: 0o755 });
    const env = { ...process.env, PATH: `${dir}:${process.env.PATH}`, CRAWLORA_API_KEY: "test-key" };

    const valid = spawnSync("/bin/bash", [earningsHelper, "/yahoo-finance/ticker/AAPL/calendar"], {
      encoding: "utf8",
      env,
    });
    assert.equal(valid.status, 0, valid.stderr);
    assert.match(valid.stdout, /\/yahoo-finance\/ticker\/AAPL\/calendar$/m);

    const nested = spawnSync(
      "/bin/bash",
      [earningsHelper, "/yahoo-finance/ticker/AAPL/unexpected/calendar"],
      { encoding: "utf8", env },
    );
    assert.equal(nested.status, 2);
    assert.match(nested.stderr, /not in the earnings-event-research skill catalog/);
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});

test("static-only scoped helpers reject unknown routes", () => {
  const dir = mkdtempSync(join(tmpdir(), "crawlora-helper-"));
  try {
    writeFileSync(join(dir, "curl"), '#!/bin/sh\nexit 99\n', { mode: 0o755 });
    const result = spawnSync("/bin/bash", [googleTrendsHelper, "/google/trends/not-documented"], {
      encoding: "utf8",
      env: { ...process.env, PATH: `${dir}:${process.env.PATH}`, CRAWLORA_API_KEY: "test-key" },
    });
    assert.equal(result.status, 2);
    assert.match(result.stderr, /not in the google-trends-research skill catalog/);
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});

test("new GET-only skill helpers reject POST before curl", () => {
  const dir = mkdtempSync(join(tmpdir(), "crawlora-helper-"));
  try {
    writeFileSync(join(dir, "curl"), "#!/bin/sh\nexit 99\n", { mode: 0o755 });
    const result = spawnSync("/bin/bash", [appStoreHelper, "-X", "POST", "/appstore/search"], {
      encoding: "utf8",
      env: { ...process.env, PATH: `${dir}:${process.env.PATH}`, CRAWLORA_API_KEY: "test-key" },
    });
    assert.equal(result.status, 2);
    assert.match(result.stderr, /only GET/);
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});

test("travel helper enforces the documented method per route", () => {
  const dir = mkdtempSync(join(tmpdir(), "crawlora-helper-"));
  try {
    writeFileSync(join(dir, "curl"), "#!/bin/sh\nexit 99\n", { mode: 0o755 });
    for (const args of [
      ["-X", "POST", "/airbnb/search"],
      ["/hotels/search"],
    ]) {
      const result = spawnSync("/bin/bash", [travelAccommodationHelper, ...args], {
        encoding: "utf8",
        env: { ...process.env, PATH: `${dir}:${process.env.PATH}`, CRAWLORA_API_KEY: "test-key" },
      });
      assert.equal(result.status, 2);
      assert.match(result.stderr, /method is not allowed/);
    }
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});
