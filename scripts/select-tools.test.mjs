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

test("new workflows cover their intended surfaces without importing mixed-group neighbours", () => {
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
    const selected = [...selections[skill]].sort();
    if (skill === "multi-sport-match-research") {
      // This workflow is intentionally a match/score comparison subset of the
      // larger Flashscore and LiveScore catalogs. New provider routes such as
      // odds, player/team research, and sport-specific box scores belong to
      // other workflows and should not silently widen this one.
      const providerTools = new Set(catalog
        .filter(tool => allowed.includes(tool._http.group))
        .map(tool => tool.name));
      assert.ok(selected.every(name => providerTools.has(name)),
        `${skill} must only select Flashscore/LiveScore tools`);
      for (const name of [
        "flashscore_scores",
        "flashscore_match_stats",
        "flashscore_match_info",
        "livescore_scores",
        "livescore_live_scores",
        "livescore_match",
        "livescore_match_stats",
      ]) {
        assert.ok(selected.includes(name), `${skill} must retain ${name}`);
      }
      for (const prefix of ["flashscore_player_", "flashscore_team_"]) {
        assert.ok(!selected.some(name => name.startsWith(prefix)),
          `${skill} must not absorb ${prefix} routes`);
      }
      for (const name of ["flashscore_match_odds", "flashscore_match_box_score", "flashscore_match_darts"]) {
        assert.ok(!selected.includes(name), `${skill} must not absorb ${name}`);
      }
      continue;
    }
    const expected = skill === "prescription-price-research"
      ? ["goodrx_drugs", "goodrx_drug_options", "goodrx_drug_prices"]
      : catalog.filter(tool => allowed.includes(tool._http.group)).map(tool => tool.name).sort();
    assert.deepEqual(selected, expected.sort(), skill);
  }
  assert.deepEqual([...selections["google-finance-research"]].sort(), catalog.filter(tool => tool._http.path.startsWith("/google/finance/")).map(tool => tool.name).sort());
});

test("Flashscore match, team/player, odds, and viewing surfaces stay in distinct workflows", () => {
  const selections = JSON.parse(readFileSync(new URL("./skill-tools.json", import.meta.url)));
  const matchAnalysis = selections["flashscore-match-analysis"];
  assert.ok(matchAnalysis.includes("flashscore_match_player_stats"));
  assert.ok(matchAnalysis.includes("flashscore_match_box_score"));
  assert.ok(matchAnalysis.includes("flashscore_match_report"));
  assert.ok(!matchAnalysis.some(name => name.startsWith("flashscore_player_")));
  assert.ok(!matchAnalysis.some(name => name.startsWith("flashscore_team_")));

  const teamPlayers = selections["sports-team-player-research"];
  assert.ok(teamPlayers.includes("flashscore_team_squad"));
  assert.ok(teamPlayers.includes("flashscore_player_transfers"));
  assert.ok(teamPlayers.includes("flashscore_player_injuries"));

  const viewing = selections["football-viewing-guide"];
  assert.ok(viewing.includes("flashscore_match_tv"));
  assert.ok(viewing.includes("flashscore_odds_geos"));
  const bettingReference = readFileSync(new URL("../skills/sports-betting-research/reference/endpoints.md", import.meta.url), "utf8");
  const bettingFlashscoreTools = [...bettingReference.matchAll(/^### `(flashscore_[^`]+)`$/gm)].map(match => match[1]).sort();
  assert.deepEqual(bettingFlashscoreTools, [
    "flashscore_match_odds", "flashscore_odds_geos", "flashscore_team_outright_odds",
    "flashscore_tournament_outright_odds",
  ]);
});

test("TikTok mobile trend feeds and sound surfaces are routed to trend research", () => {
  const selections = JSON.parse(readFileSync(new URL("./skill-tools.json", import.meta.url)));
  const trendTools = selections["tiktok-trend-research"];
  for (const name of [
    "tiktok_mobile_feed", "tiktok_mobile_music_beats", "tiktok_mobile_music_collections",
    "tiktok_mobile_music_pick", "tiktok_mobile_music_posts", "tiktok_mobile_music_related",
    "tiktok_mobile_music_trending", "tiktok_mobile_search_music",
    "tiktok_mobile_trending_categories", "tiktok_mobile_trending_effects",
  ]) {
    assert.ok(trendTools.includes(name), `tiktok-trend-research must include ${name}`);
  }
  assert.ok(!trendTools.includes("tiktok_mobile_live_search"),
    "LIVE stream discovery belongs to the broader TikTok research skill");
});
