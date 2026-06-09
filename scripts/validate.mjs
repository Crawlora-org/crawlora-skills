#!/usr/bin/env node
// Lint every skill's SKILL.md: required frontmatter, valid `name`, description
// length, and body under 500 lines. Exits non-zero on any violation.

import { readFileSync, readdirSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const SKILLS_DIR = join(ROOT, "skills");

const NAME_RE = /^[a-z0-9]+(-[a-z0-9]+)*$/; // lowercase letters/numbers/hyphens
const MAX_BODY_LINES = 500;
const MAX_DESC = 1024; // Anthropic truncates skill descriptions; stay well under.

function parseFrontmatter(text, file, errors) {
  if (!text.startsWith("---")) {
    errors.push(`${file}: missing YAML frontmatter (must start with '---')`);
    return { fm: {}, bodyLines: text.split("\n").length };
  }
  const end = text.indexOf("\n---", 3);
  if (end === -1) {
    errors.push(`${file}: frontmatter not closed with '---'`);
    return { fm: {}, bodyLines: text.split("\n").length };
  }
  const fmRaw = text.slice(3, end).trim();
  const body = text.slice(end + 4);
  const fm = {};
  for (const line of fmRaw.split("\n")) {
    const m = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
    if (m) fm[m[1]] = m[2].trim();
  }
  return { fm, bodyLines: body.split("\n").length };
}

const errors = [];
const skills = readdirSync(SKILLS_DIR, { withFileTypes: true })
  .filter((d) => d.isDirectory())
  .map((d) => d.name)
  .sort();

if (skills.length === 0) errors.push("no skills found under skills/");

for (const skill of skills) {
  const file = `skills/${skill}/SKILL.md`;
  const abs = join(ROOT, file);
  if (!existsSync(abs)) {
    errors.push(`${file}: missing SKILL.md`);
    continue;
  }
  const text = readFileSync(abs, "utf8");
  const { fm, bodyLines } = parseFrontmatter(text, file, errors);

  if (!fm.name) errors.push(`${file}: frontmatter missing 'name'`);
  else if (!NAME_RE.test(fm.name))
    errors.push(`${file}: invalid name '${fm.name}' (lowercase letters/numbers/hyphens only)`);
  else if (fm.name !== skill)
    errors.push(`${file}: name '${fm.name}' must match the folder '${skill}'`);

  if (!fm.description) errors.push(`${file}: frontmatter missing 'description'`);
  else if (fm.description.length > MAX_DESC)
    errors.push(`${file}: description too long (${fm.description.length} > ${MAX_DESC})`);

  if (bodyLines > MAX_BODY_LINES)
    errors.push(`${file}: body too long (${bodyLines} > ${MAX_BODY_LINES} lines) — move detail to reference/`);

  // Self-containment: each skill must bundle its helper + a reference file.
  if (!existsSync(join(ROOT, `skills/${skill}/scripts/crawlora.sh`)))
    errors.push(`${file}: missing scripts/crawlora.sh (run node scripts/generate.mjs)`);
  const ref = skill === "crawlora" ? "reference/catalog.md" : "reference/endpoints.md";
  if (!existsSync(join(ROOT, `skills/${skill}/${ref}`)))
    errors.push(`${file}: missing ${ref} (run node scripts/generate.mjs)`);
}

if (errors.length) {
  console.error("SKILL validation FAILED:\n" + errors.map((e) => "  - " + e).join("\n"));
  process.exit(1);
}
console.log(`SKILL validation OK — ${skills.length} skills: ${skills.join(", ")}`);
