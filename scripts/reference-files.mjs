const SPLIT_ENDPOINT_REFERENCES = new Set(["sports-scores-research"]);

const groupSlug = (group) => String(group)
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, "-")
  .replace(/^-+|-+$/g, "") || "platform";

/**
 * Keep large endpoint catalogs navigable and individually inspectable. The
 * sports-scores reference is split by platform because its 200 KB+ generated
 * file was not fully inspected by downstream readers.
 */
export function endpointReferenceFiles({
  skill,
  groupNames,
  title,
  intro,
  catalog,
  renderGroups,
  maxBytes = 200_000,
}) {
  const basePath = `skills/${skill}/reference`;
  const full = renderGroups(groupNames, title, intro, catalog);
  if (!SPLIT_ENDPOINT_REFERENCES.has(skill)) {
    return [[`${basePath}/endpoints.md`, full]];
  }

  const entries = groupNames.map((group, index) => {
    const filename = `${String(index + 1).padStart(2, "0")}-${groupSlug(group)}.md`;
    const tools = catalog.get(group) || [];
    const content = renderGroups([group], `${title} — ${group}`, intro, catalog);
    if (Buffer.byteLength(content, "utf8") > maxBytes) {
      throw new Error(`${skill}: ${group} endpoint reference exceeds ${maxBytes} bytes`);
    }
    return { group, filename, count: tools.length, content };
  });

  const total = entries.reduce((sum, entry) => sum + entry.count, 0);
  const index = [
    `# ${title}`,
    "",
    "> Generated from `scripts/tools.json` by `scripts/generate.mjs` — do not edit by hand.",
    "",
    intro,
    "",
    `**${total} endpoints across ${entries.length} platform group(s).**`,
    "",
    "The endpoint details are split into per-platform references:",
    "",
    ...entries.map(({ group, filename, count }) => `- [${group} (${count})](endpoints/${filename})`),
    "",
  ].join("\n");

  return [
    [`${basePath}/endpoints.md`, index],
    ...entries.map(({ filename, content }) => [`${basePath}/endpoints/${filename}`, content]),
  ];
}
