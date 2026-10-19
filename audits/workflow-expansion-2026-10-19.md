# Four focused workflow additions — 2026-10-19

This batch follows the API/skill coverage review in
[`coverage-2026-10-19.md`](coverage-2026-10-19.md). The audit compares each
published MCP tool and Swagger operation with the focused skill references;
group-level coverage alone does not count as evidence. The four new skills
select 63 distinct tools across 65 total references.

| Skill | Tools | Workflow boundary |
|---|---:|---|
| `cross-corpus-research` | 19 | Build cited briefs from public web retrieval, research papers, and indexed developer documentation. Keep job status, source-level citations, partial retrieval, and corpus limitations explicit. |
| `flashscore-match-analysis` | 12 | Analyze match-level evidence such as box scores, player stats, momentum, point-by-point and darts details, plus reports and archived seasons. Team/player, betting, and broadcast workflows remain separate. |
| `medication-information-research` | 19 | Research public medication, condition, class, pet-medication, price-comparison, and health-education pages. Preserve source and date; do not turn descriptive content into diagnosis or treatment advice. |
| `sports-team-player-research` | 15 | Compare team and player profiles, fixtures, results, squad, injuries, match logs, news, and transfers while retaining source identifiers and dated evidence. |

## Focused expansions

- `serp-keyword-research` adds Baidu and Yandex search plus Baidu, Yandex,
  Qwant, and Startpage autocomplete, with provider-specific localization and
  challenge limits.
- `sports-betting-research` adds Flashscore odds-market geography discovery;
  it does not absorb unrelated match-analysis tools.
- `football-viewing-guide` adds Flashscore search, match TV listings, and odds
  geography discovery to the existing FotMob market and schedule workflow.
- TikTok research references the Mobile REST surface, including the full LIVE
  gifts and effects catalogues; `tiktok-trend-research` selects the ten mobile
  feed and music trend tools, including discovery effects, beats, collections,
  and related-post discovery.
- `prescription-price-research` now separates volatile, location-specific
  discount prices from slower-changing medication reference information.

The existing `multi-sport-match-research` workflow remains deliberately scoped;
specialized player/team, odds, box-score, and darts tools route to their own
workflows. This keeps tool count from substituting for a useful research method.

## Validation

The skills test suite covers exact tool selection, route and parameter examples,
and GET-only helper behavior. Repository validation, generated-file parity,
and the Skill Creator validator cover all 169 installable skills. Catalog and
coverage counts are recorded in the linked audit after the source API and MCP
catalog revisions are reconciled.
