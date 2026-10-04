#!/usr/bin/env node
// Compare generated skill references to the catalog, optionally including an API snapshot.
import { readFileSync, readdirSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

export function referencesToCoverage(references) {
  const coverage = new Map();
  for (const [skill, text] of Object.entries(references)) {
    if (skill === "crawlora") continue;
    for (const match of text.matchAll(/^### `([^`]+)`$/gm)) {
      if (!coverage.has(match[1])) coverage.set(match[1], new Set());
      coverage.get(match[1]).add(skill);
    }
  }
  return coverage;
}

export function summarizeCoverage(catalog, coverage) {
  const known = new Set(catalog.map(tool => tool.name));
  for (const name of coverage.keys()) {
    if (!known.has(name)) throw new Error(`Reference contains unknown tool: ${name}`);
  }
  if (known.size !== catalog.length) throw new Error("Duplicate catalog tool names");
  const groups = new Map();
  for (const tool of catalog) {
    const group = tool._http.group;
    if (!groups.has(group)) groups.set(group, { total: 0, covered: 0, skills: new Set() });
    const row = groups.get(group);
    row.total++;
    if (coverage.has(tool.name)) row.covered++;
    for (const skill of coverage.get(tool.name) || []) row.skills.add(skill);
  }
  return groups;
}

const routeKey = (method, path) => `${method.toUpperCase()} ${path}`;
const indexRoutes = catalog => {
  const index = new Map();
  for (const tool of catalog) {
    const key = routeKey(tool._http.method, tool._http.path);
    if (!index.has(key)) index.set(key, []);
    index.get(key).push(tool);
  }
  return index;
};

export function compareOperations(swagger, catalog, currentCatalog, coverage) {
  const published = indexRoutes(catalog);
  const current = indexRoutes(currentCatalog);
  const rows = [];
  const observed = new Set();
  for (const [path, methods] of Object.entries(swagger.paths)) {
    for (const [method, operation] of Object.entries(methods)) {
      if (!["get", "post", "put", "patch", "delete", "head", "options"].includes(method)) continue;
      const key = routeKey(method, path);
      observed.add(key);
      const tools = published.get(key) || [];
      const currentTools = current.get(key) || [];
      const skills = [...new Set(tools.flatMap(tool => [...(coverage.get(tool.name) || [])]))].sort();
      rows.push({
        method: method.toUpperCase(), path, group: operation.tags?.[0] || "Other",
        operation_id: operation.operationId || "",
        published_tools: tools.map(tool => tool.name).sort().join(", "),
        current_tools: currentTools.map(tool => tool.name).sort().join(", "),
        focused_skills: skills.join(", "),
        status: tools.length ? (skills.length ? "focused"
          : tools.every(tool => tool._http.group === "Usage") ? "account-only" : "uncovered-published")
          : currentTools.length ? "pending-catalog-sync" : "outside-exported-mcp",
        deprecated: Boolean(operation.deprecated),
      });
    }
  }
  for (const [label, index] of [["Published", published], ["Current", current]]) {
    for (const key of index.keys()) {
      if (!observed.has(key)) throw new Error(`${label} MCP route absent from Swagger: ${key}`);
    }
  }
  return rows.sort((a, b) => a.path.localeCompare(b.path) || a.method.localeCompare(b.method));
}

const cleanCell = value => String(value).replace(/[\t\r\n]/g, " ");
const escapeMarkdown = value => String(value).replaceAll("|", "\\|");

function main() {
  const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
  const args = process.argv.slice(2);
  const option = name => {
    const index = args.indexOf(name);
    return index < 0 ? null : args[index + 1];
  };
  const swaggerPath = option("--swagger");
  const currentPath = option("--current-catalog");
  const revision = option("--api-revision");
  const date = option("--date");
  if (!swaggerPath || !currentPath || !revision || !date || !/^\d{4}-\d{2}-\d{2}$/.test(date)) {
    throw new Error("Usage: node scripts/audit-coverage.mjs --swagger FILE --current-catalog FILE --api-revision SHA --date YYYY-MM-DD");
  }
  const catalog = JSON.parse(readFileSync(join(root, "scripts/tools.json"), "utf8"));
  const current = JSON.parse(readFileSync(currentPath, "utf8"));
  const swagger = JSON.parse(readFileSync(swaggerPath, "utf8"));
  const references = {};
  for (const dir of readdirSync(join(root, "skills"), { withFileTypes: true })) {
    if (dir.isDirectory() && dir.name !== "crawlora") {
      references[dir.name] = readFileSync(join(root, "skills", dir.name, "reference/endpoints.md"), "utf8");
    }
  }
  const coverage = referencesToCoverage(references);
  const groups = summarizeCoverage(catalog, coverage);
  const rows = compareOperations(swagger, catalog, current, coverage);
  const baseline = JSON.parse(readFileSync(join(root, "audits/baseline-2026-10-05.json"), "utf8"));
  const counts = new Map();
  for (const row of rows) counts.set(row.status, (counts.get(row.status) || 0) + 1);
  const byName = new Map(current.map(tool => [tool.name, tool]));
  const changed = catalog.filter(tool => JSON.stringify(tool) !== JSON.stringify(byName.get(tool.name)));
  const missing = current.filter(tool => !catalog.some(published => published.name === tool.name));
  const pendingGroups = new Map();
  for (const tool of missing) pendingGroups.set(tool._http.group, (pendingGroups.get(tool._http.group) || 0) + 1);
  const lines = [
    `# API and skills coverage review — ${date}`, "",
    `Source API revision: \`${revision}\`. Skills baseline: \`${baseline.skills_revision}\`.`, "",
    "This is a complete contract/routing comparison, not a live uptime or parser audit. " +
      "Generated references identify which focused skills can call each catalog tool; " +
      "they do not prove every workflow is equally useful or every endpoint currently succeeds.", "",
    `- Published catalog: **${catalog.length} tools / ${groups.size} groups**.`,
    `- Current source export: **${current.length} tools / ${new Set(current.map(tool => tool._http.group)).size} groups**.`,
    `- All Swagger operations reviewed: **${rows.length}**, including account/internal/deprecated routes.`,
    `- Focused tool coverage: **${baseline.focused_tools} → ${coverage.size}**. ` +
      `Installable skills: **${baseline.installable_skills} → ${Object.keys(references).length + 1}**.`,
    `- Source tools pending catalog sync: **${missing.length}**; existing definitions changed: **${changed.length}**.`,
    `- At the initial baseline, ${baseline.initial_missing_catalog_tools} source additions and ${baseline.initial_changed_definitions} changed definitions awaited synchronization. Companion release \`${baseline.catalog_sync_revision}\` landed during this audit; the final comparison uses that published catalog.`,
    "- Account Usage tools remain intentionally outside public-data research skills.", "",
    "The endpoint TSV uses method + path, preserves multiple tool aliases, and covers every Swagger " +
      "operation. `pending-catalog-sync` means the source export has a route absent from the vendored " +
      "catalog; it does not establish deployed availability. `outside-exported-mcp` includes account, " +
      "admin/internal, deprecated, and other unexported operations; it is not a platform skill gap.", "",
    "## Operation dispositions", "", "| Status | Operations |", "|---|---:|",
    ...[...counts].sort().map(([status, count]) => `| ${status} | ${count} |`), "",
    "## Every published platform group", "",
    "Coverage counts focused references only; the umbrella skill is excluded. Mixed groups such as " +
      "Google and Datasets are measured per tool rather than credited wholesale.", "",
    "| Group | Tools | Focused coverage | Skills |", "|---|---:|---:|---|",
    ...[...groups].sort(([a], [b]) => a.localeCompare(b)).map(([group, row]) =>
      `| ${escapeMarkdown(group)} | ${row.total} | ${row.covered} | ${[...row.skills].sort().join(", ") || "account-only"} |`), "",
    "## Source additions awaiting catalog publication", "",
    "| Group | Additional tools |", "|---|---:|",
    ...[...pendingGroups].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0])).map(([group, count]) =>
      `| ${escapeMarkdown(group)} | ${count} |`), "",
    ...(missing.length ? [] : ["No source-exported tools are absent from the published catalog.", ""]),
    "## Existing published definitions with source changes", "",
    ...changed.map(tool => `- \`${tool.name}\``), "",
    changed.length ? "Review these definitions at the next catalog sync before assuming the vendored contract matches current source."
      : "Published definitions match the source export. This skill-authoring batch leaves the companion release's catalog unchanged.", "",
  ];
  const out = join(root, "audits");
  mkdirSync(out, { recursive: true });
  writeFileSync(join(out, `coverage-${date}.md`), lines.join("\n"));
  const columns = ["method", "path", "group", "operation_id", "published_tools", "current_tools", "focused_skills", "status", "deprecated"];
  writeFileSync(join(out, `endpoints-${date}.tsv`), [columns.join("\t"), ...rows.map(row => columns.map(key => cleanCell(row[key])).join("\t"))].join("\n") + "\n");
  console.log(`${rows.length} API operations / ${groups.size} catalog groups reviewed; ${coverage.size}/${catalog.length} tools covered by focused skills`);
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) main();
