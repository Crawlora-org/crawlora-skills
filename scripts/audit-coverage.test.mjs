import { test } from "node:test";
import assert from "node:assert/strict";
import { referencesToCoverage, summarizeCoverage, compareOperations } from "./audit-coverage.mjs";

const tool = (name, method, path, group = "Mixed") => ({ name, _http: { method, path, group } });

test("coverage counts exact tools within mixed groups and excludes the umbrella", () => {
  const catalog = [tool("maps", "GET", "/maps"), tool("finance", "GET", "/finance")];
  const coverage = referencesToCoverage({
    crawlora: "### `maps`\n### `finance`",
    places: "### `maps`\n### `maps`",
    prospects: "### `maps`",
  });
  const mixed = summarizeCoverage(catalog, coverage).get("Mixed");
  assert.equal(mixed.covered, 1);
  assert.equal(mixed.total, 2);
  assert.deepEqual([...mixed.skills].sort(), ["places", "prospects"]);
  assert.throws(() => summarizeCoverage(catalog, new Map([["removed", new Set()]])), /unknown tool/);
});

test("operation comparison preserves HTTP methods, aliases, pending routes, and unexported operations", () => {
  const published = [tool("list", "GET", "/shared"), tool("list_alias", "GET", "/shared")];
  const current = [...published, tool("create", "POST", "/shared")];
  const swagger = { paths: {
    "/shared": { get: { tags: ["Mixed"] }, post: { tags: ["Mixed"] } },
    "/admin/secret": { get: { deprecated: true } },
  } };
  const coverage = referencesToCoverage({ research: "### `list`\n### `list_alias`" });
  const rows = compareOperations(swagger, published, current, coverage);
  assert.equal(rows.length, 3);
  assert.equal(rows.find(row => row.method === "GET" && row.path === "/shared").published_tools, "list, list_alias");
  assert.equal(rows.find(row => row.method === "POST").status, "pending-catalog-sync");
  assert.equal(rows.find(row => row.path === "/admin/secret").status, "outside-exported-mcp");
  assert.equal(rows.find(row => row.path === "/admin/secret").deprecated, true);
  assert.throws(() => compareOperations({ paths: {} }, published, current, coverage), /absent from Swagger/);
});
