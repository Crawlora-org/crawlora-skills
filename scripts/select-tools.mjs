// Resolve a focused skill's explicit tool list without importing whole groups.
export function selectTools(catalog, names) {
  const byName = new Map(catalog.map((tool) => [tool.name, tool]));
  const selected = new Map();
  const seen = new Set();
  if (!names.length) throw new Error("A focused skill must select at least one tool");
  for (const name of names) {
    if (seen.has(name)) throw new Error(`Duplicate selected tool: ${name}`);
    seen.add(name);
    const tool = byName.get(name);
    if (!tool) throw new Error(`Unknown selected tool: ${name}`);
    const group = tool._http?.group || "Other";
    if (!selected.has(group)) selected.set(group, []);
    selected.get(group).push(tool);
  }
  for (const list of selected.values()) list.sort((a, b) => a.name.localeCompare(b.name));
  return selected;
}
