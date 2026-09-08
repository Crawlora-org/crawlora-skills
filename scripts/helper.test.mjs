import { test } from "node:test";
import assert from "node:assert/strict";
import { mkdtempSync, writeFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";

const helper = fileURLToPath(new URL("../lib/crawlora.sh", import.meta.url));
function request(args) {
  const dir = mkdtempSync(join(tmpdir(), "crawlora-helper-"));
  try {
    // Capture argument boundaries instead of making a network request.
    writeFileSync(join(dir, "curl"), '#!/bin/sh\nprintf "%s\\n" "$@"\n', { mode: 0o755 });
    const result = spawnSync("/bin/bash", [helper, ...args], {
      encoding: "utf8",
      env: { ...process.env, PATH: `${dir}:${process.env.PATH}`, CRAWLORA_API_KEY: "test-key", CRAWLORA_API_BASE: "https://example.test/api/v1" },
    });
    assert.equal(result.status, 0, result.stderr);
    return result.stdout.trimEnd().split("\n");
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
}

test("GET detail without query parameters works with the system Bash", () => {
  assert.deepEqual(request(["/google/map/place/example"]), [
    "-fsS", "-G", "-H", "x-api-key: test-key", "https://example.test/api/v1/google/map/place/example",
  ]);
});

test("GET preserves spaces and repeated query keys as separate curl arguments", () => {
  const args = request(["/search", "q=coffee & tea", "category=one", "category=two"]);
  assert.deepEqual(args.slice(4), [
    "--data-urlencode", "q=coffee & tea", "--data-urlencode", "category=one",
    "--data-urlencode", "category=two", "https://example.test/api/v1/search",
  ]);
});

test("POST preserves flat JSON bodies", () => {
  const body = '{"keyword":"coffee cambridge","language":"en","country":"us"}';
  const args = request(["-X", "POST", "/google/map/search", body]);
  assert.deepEqual(args.slice(-3), ["-d", body, "https://example.test/api/v1/google/map/search"]);
});

test("POST supports -d and defaults an omitted body to an empty object", () => {
  assert.deepEqual(request(["-X", "POST", "/test"]).slice(-3), ["-d", "{}", "https://example.test/api/v1/test"]);
  assert.deepEqual(request(["-X", "POST", "/test", "-d", '{"url":"https://example.com"}']).slice(-3), [
    "-d", '{"url":"https://example.com"}', "https://example.test/api/v1/test",
  ]);
});
