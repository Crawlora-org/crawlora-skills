import { test } from "node:test";
import assert from "node:assert/strict";
import { endpointReferenceFiles } from "./reference-files.mjs";

const renderGroups = (groups, _title, _intro, catalog) =>
  groups.map((group) => `${group}:${catalog.get(group).join(",")}`).join("\n");

test("splits opted-in endpoint references into linked platform files", () => {
  const catalog = new Map([
    ["A", ["tool-a"]],
    ["B", ["tool-b"]],
  ]);

  const outputs = endpointReferenceFiles({
    skill: "sports-scores-research",
    groupNames: ["A", "B"],
    title: "sports-scores-research — endpoint reference",
    intro: "Use the documented helper.",
    catalog,
    renderGroups,
    maxBytes: 10,
  });

  assert.equal(outputs.length, 3);
  assert.equal(outputs[0][0], "skills/sports-scores-research/reference/endpoints.md");
  assert.match(outputs[0][1], /\[A \(1\)\]\(endpoints\/01-a\.md\)/);
  assert.match(outputs[0][1], /\[B \(1\)\]\(endpoints\/02-b\.md\)/);
  assert.equal(outputs[1][0], "skills/sports-scores-research/reference/endpoints/01-a.md");
  assert.match(outputs[1][1], /tool-a/);
  assert.equal(outputs[2][0], "skills/sports-scores-research/reference/endpoints/02-b.md");
  assert.match(outputs[2][1], /tool-b/);
});

test("keeps ordinary endpoint references in one generated file", () => {
  const outputs = endpointReferenceFiles({
    skill: "small-skill",
    groupNames: ["A"],
    title: "small-skill — endpoint reference",
    intro: "Use the documented helper.",
    catalog: new Map([["A", ["tool-a"]]]),
    renderGroups,
    maxBytes: 100,
  });

  assert.equal(outputs.length, 1);
  assert.equal(outputs[0][0], "skills/small-skill/reference/endpoints.md");
});
