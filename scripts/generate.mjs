#!/usr/bin/env node
// Generate per-skill reference/ files and sync the bundled helper from tools.json.
//
// Source of truth: scripts/tools.json (vendored from the crawlora-mcp repo, itself
// generated from Crawlora's published API catalog). Each tool carries an `_http`
// block: { method, path, query[], pathParams[], body, group }.
//
// Run:  node scripts/generate.mjs          (writes files)
//       node scripts/generate.mjs --check   (parity check: exit 1 on any diff)
//
// Outputs:
//   skills/crawlora/reference/catalog.md                 (all groups, all endpoints)
//   skills/<skill>/reference/endpoints.md                (that skill's groups)
//   skills/<skill>/scripts/crawlora.sh                   (copy of lib/crawlora.sh)

import { readFileSync, writeFileSync, mkdirSync, readdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const CHECK = process.argv.includes("--check");

const tools = JSON.parse(readFileSync(join(ROOT, "scripts/tools.json"), "utf8"));
const all = Array.isArray(tools) ? tools : tools.tools || Object.values(tools)[0];

// Skill → list of _http.group names it covers. The umbrella skill covers all.
const SKILLS = {
  "product-price-research": ["Amazon", "eBay", "Shopify", "Shop.app"],
  "youtube-research": ["YouTube"],
  "app-review-mining": ["AppStore", "GooglePlay"],
  "serp-keyword-research": ["Google", "Bing", "Brave", "Google Trends"],
};

const groupsOf = (t) => (t._http && t._http.group) || "Other";
const byGroup = new Map();
for (const t of all) {
  const g = groupsOf(t);
  if (!byGroup.has(g)) byGroup.set(g, []);
  byGroup.get(g).push(t);
}
for (const list of byGroup.values()) list.sort((a, b) => a.name.localeCompare(b.name));

function params(t) {
  const props = (t.inputSchema && t.inputSchema.properties) || {};
  const required = new Set((t.inputSchema && t.inputSchema.required) || []);
  const names = Object.keys(props);
  if (names.length === 0) return "_none_";
  return names
    .map((n) => {
      const p = props[n] || {};
      const req = required.has(n) ? "**required**" : "optional";
      const desc = (p.description || "").replace(/\s+/g, " ").trim();
      return `\`${n}\` (${p.type || "string"}, ${req})${desc ? " — " + desc : ""}`;
    })
    .join("; ");
}

function endpointLine(t) {
  const h = t._http || {};
  const out = [];
  out.push(`### \`${t.name}\``);
  out.push("");
  out.push(`- **HTTP:** \`${h.method || "GET"} ${h.path || ""}\``);
  const desc = (t.description || "").replace(/\s+/g, " ").trim();
  if (desc) out.push(`- **What:** ${desc}`);
  out.push(`- **Params:** ${params(t)}`);
  out.push("");
  return out.join("\n");
}

function renderGroups(groupNames, title, intro) {
  const lines = [];
  lines.push(`# ${title}`);
  lines.push("");
  lines.push("> Generated from `scripts/tools.json` by `scripts/generate.mjs` — do not edit by hand.");
  lines.push("");
  lines.push(intro);
  lines.push("");
  lines.push(
    "All paths are relative to the API base `https://api.crawlora.net/api/v1` and require the header " +
      "`x-api-key: $CRAWLORA_API_KEY`. Path params like `{id}` are substituted into the URL; " +
      "`GET` params go in the query string; `POST` params go in a JSON body."
  );
  lines.push("");
  const total = groupNames.reduce((n, g) => n + (byGroup.get(g)?.length || 0), 0);
  lines.push(`**${total} endpoints across ${groupNames.length} platform group(s).**`);
  lines.push("");
  for (const g of groupNames) {
    const list = byGroup.get(g) || [];
    if (!list.length) continue;
    lines.push(`## ${g} (${list.length})`);
    lines.push("");
    for (const t of list) lines.push(endpointLine(t));
  }
  return lines.join("\n").replace(/\n{3,}/g, "\n\n").trimEnd() + "\n";
}

const outputs = [];

// Umbrella catalog: every group, alphabetized.
const allGroupNames = [...byGroup.keys()].sort((a, b) => a.localeCompare(b));
outputs.push([
  "skills/crawlora/reference/catalog.md",
  renderGroups(
    allGroupNames,
    "Crawlora endpoint catalog",
    "The complete Crawlora public-web-data API surface, grouped by platform. Use this to pick the " +
      "right endpoint for any job, then call it via `scripts/crawlora.sh` (see SKILL.md)."
  ),
]);

// Per-skill endpoint references.
for (const [skill, groups] of Object.entries(SKILLS)) {
  outputs.push([
    `skills/${skill}/reference/endpoints.md`,
    renderGroups(
      groups,
      `${skill} — endpoint reference`,
      `Endpoints this skill uses, grouped by platform. Call them via \`scripts/crawlora.sh\` (see SKILL.md).`
    ),
  ]);
}

// Sync the bundled helper into every skill folder.
const helper = readFileSync(join(ROOT, "lib/crawlora.sh"), "utf8");
// Directories only. A plain readdirSync picks up macOS .DS_Store and any
// other stray file, and the loop below then tries to mkdir inside it —
// ENOTDIR, mid-run, after some reference files have already been
// rewritten. validate.mjs already filters this way; match it.
const skillDirs = readdirSync(join(ROOT, "skills"), { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .map((entry) => entry.name);
for (const s of skillDirs) outputs.push([`skills/${s}/scripts/crawlora.sh`, helper]);

let diffs = 0;
for (const [rel, content] of outputs) {
  const abs = join(ROOT, rel);
  let current = null;
  try {
    current = readFileSync(abs, "utf8");
  } catch {}
  if (current === content) continue;
  diffs++;
  if (CHECK) {
    console.error(`DRIFT: ${rel} is out of date — run \`node scripts/generate.mjs\``);
  } else {
    mkdirSync(dirname(abs), { recursive: true });
    writeFileSync(abs, content);
    console.log(`wrote ${rel}`);
  }
}

if (CHECK && diffs > 0) {
  console.error(`\n${diffs} generated file(s) out of date.`);
  process.exit(1);
}
if (CHECK) console.log("generator parity OK — all generated files up to date.");
else console.log(`\ndone — ${outputs.length} file(s) checked, ${diffs} written.`);
