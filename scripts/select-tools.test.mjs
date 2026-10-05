import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { selectTools } from "./select-tools.mjs";

test("selects within mixed groups without unrelated endpoints or input mutation", () => {
  const catalog = [
    { name: "maps", _http: { group: "Google", path: "/maps" } },
    { name: "finance", _http: { group: "Google", path: "/finance" } },
    { name: "creators", _http: { group: "Datasets", path: "/creators" } },
  ];
  const before = structuredClone(catalog);
  const result = selectTools(catalog, ["creators", "maps"]);
  assert.deepEqual([...result.keys()], ["Datasets", "Google"]);
  assert.deepEqual(result.get("Google").map(t => t.name), ["maps"]);
  assert.equal(result.get("Google")[0], catalog[0]);
  assert.deepEqual(catalog, before);
});

test("fails closed on catalog drift and invalid selections", () => {
  const catalog = [{ name: "maps" }];
  assert.throws(() => selectTools(catalog, ["removed"]), /Unknown selected tool/);
  assert.throws(() => selectTools(catalog, ["maps", "maps"]), /Duplicate selected tool/);
  assert.throws(() => selectTools(catalog, []), /at least one tool/);
});

test("published workflow selections resolve and keep single-product workflows narrowly scoped", () => {
  const raw = JSON.parse(readFileSync(new URL("./tools.json", import.meta.url)));
  const catalog = Array.isArray(raw) ? raw : raw.tools;
  const selections = JSON.parse(readFileSync(new URL("./skill-tools.json", import.meta.url)));
  for (const names of Object.values(selections)) {
    assert.equal([...selectTools(catalog, names).values()].flat().length, names.length);
  }
  for (const [skill, prefix] of [["google-maps-research", "google_map_"], ["tiktok-ad-research", "tiktok_top_ads_"], ["google-trends-research", "google_trends_"]]) {
    assert.deepEqual([...selections[skill]].sort(), catalog.filter(t => t.name.startsWith(prefix)).map(t => t.name).sort());
  }
});

test("new workflows cover their complete published surface without importing mixed-group neighbours", () => {
  const catalog = JSON.parse(readFileSync(new URL("./tools.json", import.meta.url)));
  const selections = JSON.parse(readFileSync(new URL("./skill-tools.json", import.meta.url)));
  const groups = {
    "fotmob-research": ["FotMob"],
    "multi-sport-match-research": ["Flashscore", "LiveScore"],
    "microsoft-store-research": ["Microsoft Store"],
    "xbox-research": ["Xbox"],
    "deal-discovery-research": ["Slickdeals", "RetailMeNot"],
    "substack-research": ["Substack"],
    "company-ranking-research": ["Fortune", "Forbes"],
    "health-provider-research": ["Healthgrades"],
    "prescription-price-research": ["GoodRx"],
    "rental-housing-research": ["StreetEasy", "Greystar"],
  };
  for (const [skill, allowed] of Object.entries(groups)) {
    const expected = skill === "prescription-price-research"
      ? ["goodrx_drugs", "goodrx_drug_options", "goodrx_drug_prices"]
      : catalog.filter(tool => allowed.includes(tool._http.group)).map(tool => tool.name).sort();
    assert.deepEqual([...selections[skill]].sort(), expected.sort(), skill);
  }
  assert.deepEqual([...selections["google-finance-research"]].sort(), catalog.filter(tool => tool._http.path.startsWith("/google/finance/")).map(tool => tool.name).sort());
});
