# Skill additions and next candidates — 2026-10-05

The review compared every published tool and every source Swagger operation,
including mixed platform groups. See [coverage](coverage-2026-10-05.md) and the
[method/path matrix](endpoints-2026-10-05.tsv) for the complete inventory.
Priorities below reflect workflow fit and implementation readiness, not measured
customer demand, traffic, or profitability.

## Built in this batch

| Skill | Published tools | Why it merits a focused workflow |
|---|---:|---|
| `fotmob-research` | 31 | Football identity, player-season IDs, stat discovery, cursor handling, transfer status, and broadcast markets need source-specific guidance. |
| `multi-sport-match-research` | 40 | Flashscore and LiveScore have incompatible IDs, sport codes, match paths, and pagination; a match comparison needs identity/time/status reconciliation. |
| `microsoft-store-research` | 14 | Department-dependent categories, charts-only subcategories, regional offers, mixed listing kinds, and review samples differ from mobile app stores. |
| `xbox-research` | 5 | Edition, compatible devices, accessibility, subscription evidence, and product kind need a game-specific shortlist. |
| `deal-discovery-research` | 24 | Query-scoped facets, coupon/rebate eligibility, expiry, community reports, and posted versus checkout prices need careful interpretation. |
| `substack-research` | 19 | Publications, writers, post archives, recommendations, and Notes use different identities and pagination. Existing influencer discovery covered only 10 tools. |
| `google-finance-research` | 20 | Exchange-qualified quote identity, units, periods, freshness, and source category IDs should not pull in unrelated Google tools. |
| `company-ranking-research` | 18 | Fortune edition-specific list/year/filter discovery and Forbes person profiles require different populations and measurement units. |
| `health-provider-research` | 16 | Specialty/location/query-scoped filters, office identity, insurer/plan labels, and awards need attribution and confirmation boundaries. |
| `prescription-price-research` | 20 | Drug label/form/strength/quantity/location must match before comparing pharmacy prices; this is price evidence, not medicine selection. |
| `rental-housing-research` | 20 | StreetEasy unit/building/market identity and Greystar community starting rents need geography, price-basis, and coverage distinctions. |

Six existing skills also expanded: `news-media-research` gained 189 publisher
groups, `sports-scores-research` gained Sportskeeda, `collectibles-market-research`
gained PSAStore/PristineMarketplace/Fanatics retail context,
`hiring-demand-analysis` gained a separate Google aggregated job-search sample,
`travel-accommodation-research` gained Vrbo, and `product-price-research`
gained AliExpress. Google's aggregated job search is distinct from its employer
careers skill and stored dataset denominators.

The 126 skills (88 marketplace bundle entries) now give all 3,460 non-Usage
published tools at least one focused reference. This is routing coverage;
adding an endpoint reference does not establish exhaustive workflow guidance,
current deployment, parser reliability, or live source availability.

## Catalog change during review

The initial `b21ddfa` baseline carried 3,209 tools. At the start, source API
revision `8232698d67f67356777288e6a5d5e0ccd8a2d4c6` exported 3,465 tools:
256 additions and 26 changed definitions were absent from that baseline.
The companion MCP/Skills catalog release landed during this review; the Skills
branch was rebased onto `d2537f8` and checked against the published MCP GitHub
catalog. The final tool definitions match source and publication exactly.
The skill-authoring batch does not change `scripts/tools.json` relative to that
release and does not publish a new MCP package or deploy endpoints.

RetailMeNot, StreetEasy/Greystar, Healthgrades, GoodRx, Vrbo, AliExpress, and
new publisher/sports surfaces were therefore incorporated in this batch, rather
than left as catalog-dependent recommendations. Group selections incorporate
existing providers' expanded surfaces; focused mixed-group selections stay
limited to the actual workflow.

## Optional narrower workflows using already published tools

- Football player scouting/form comparison: FotMob player-season IDs and match
  samples support a meaningful specialised output, but do not constitute a
  scouting recommendation without minutes, roles, and competition context.
- Newsletter topic landscape: Substack publication/post samples plus existing
  writer discovery can compare editorial topics without inventing readership.
- Sports viewing guide: FotMob market/channel discovery can produce a dated
  where-to-watch shortlist; listed broadcasts do not guarantee rights or access.
- Brand-mention sampling: existing social search, content, and comment tools can
  support bounded mention briefs. Do not promise monitoring or retrospective
  completeness from a one-off search; schedule only when requested.

These narrower skills should be justified by concrete usage beyond the new broad
skills. Existing competitor intelligence, customer feedback, local-business,
retail assortment, and creator workflows already cover adjacent generic jobs;
duplicating their descriptions would add little value.

## Reproduce the comparison

Use Node 22 (the CI version), regenerate skill references, and export the current
source MCP catalog to a temporary path without changing the published catalog.
Then run:

```sh
node scripts/generate.mjs --check
node scripts/audit-coverage.mjs --swagger "$API_SWAGGER" \
  --current-catalog "$CURRENT_MCP_EXPORT" --api-revision "$API_REVISION" \
  --date 2026-10-05
node scripts/validate.mjs
node --test scripts/*.test.mjs
```

Baseline counts and uncovered tool names are preserved in
[baseline-2026-10-05.json](baseline-2026-10-05.json). No production API calls,
account actions, package publication, or directory submissions are needed to
reproduce this contract comparison.
