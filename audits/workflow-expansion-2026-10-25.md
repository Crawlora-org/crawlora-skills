# Research workflow expansion — 2026-10-25

## Catalog and method

This pass used the latest public Crawlora MCP catalog vendored at
scripts/tools.json. The repository's catalog-drift check matched the current
crawlora-mcp/main catalog at 3,829 tools across 480 groups. Before the edits,
focused references covered 3,701 tools; 128 published tools had no focused
workflow. Five Usage tools are account-facing and remain outside the public
research skills.

The uncovered public surface clustered into FanDuel, FUSSBALL.DE, Jumia, and
four DraftKings areas. The work groups these routes by the question they answer
instead of exposing one skill per platform:

| Workflow | Selected surface | Reason and boundary |
|---|---|---|
| ai-crawler-readiness | 3 AI-readiness dataset operations and web_scrape | Benchmark file and robots-policy signals. The dataset is a top-1M snapshot; blocked/error states stay unknown. No claim about AI citation visibility or search ranking. |
| horse-racing-research | 13 FanDuel Racing and 3 DraftKings Racing tools | Race cards, horse history, schedules, and results form a distinct race-day and retrospective workflow. Odds remain source snapshots, not picks. |
| fantasy-sports-research | DraftKings DFS/Pick6 and FanDuel Research projections | Rules, contest formats, slates, and provider projections are distinct from sportsbook odds. The skill does not construct lineups or recommend entries. |
| casino-game-research | DraftKings casino guides/categories and FanDuel casino catalogs | The endpoints expose public descriptions and selected game attributes. The skill is informational and excludes strategy, staking, and return claims. |
| german-amateur-football-research | 27 FUSSBALL.DE tools | Regional competition trees, nearby fixtures, clubs, tables, and player match records support a grassroots workflow separate from professional match coverage. |

Existing workflows were expanded where the routes fit their current tasks:

- sports-betting-research adds FanDuel sportsbook and non-projection Research
  tools, with state/catalog, timestamp, and editorial-attribution boundaries.
- prediction-markets-research adds DraftKings Predictions navigation,
  availability-map, and rules data. Those routes contain no market quotes.
- product-price-research adds Jumia country discovery, search, categories,
  and product detail, preserving storefront currency and country context.

## External source checks

- The [DFB amateur-football overview](https://www.dfb.de/mehr-fussball/amateurfussball)
  describes FUSSBALL.DE as the DFB-operated portal for amateur football and
  gives scale context of roughly 8 million members, more than 24,000 clubs,
  around 140,000 teams, and about 1.4 million matches per season.
- Jumia's [company overview](https://group.jumia.com/about/) describes its
  marketplace and reports 2025 scale figures. These support a regional retail
  workflow; they do not make prices comparable across storefront currencies.
- FanDuel's [Research projections](https://www.fanduel.com/research/nfl/fantasy/dfs-projections)
  and [Racing results](https://prd.racing.fanduel.com/tracks/results) pages
  confirm the public source surfaces used by the fantasy and horse-racing
  workflows. DraftKings' [DFS how-to guide](https://www.draftkings.com/how-to-play)
  and [contest-rules overview](https://help.draftkings.com/hc/en-us/articles/4405229758867-Fantasy-Sports-Contest-Rules-Scoring-Overview-US)
  support the rules and format flow.
- For AI-readiness interpretation, [Google's crawler documentation](https://developers.google.com/crawling/docs/crawlers-fetchers/google-common-crawlers)
  says Google-Extended does not affect Google Search inclusion or ranking.
  [Chrome Lighthouse documentation](https://developer.chrome.com/docs/lighthouse/agentic-browsing/llms-txt?hl=en)
  describes llms.txt as an emerging, currently optional convention. Neither
  source supports a promise of improved AI citations, traffic, or SEO.

## Deliberate publication boundary

The API source on webscraping-api/master contains an AliExpress trending
keyword route, but aliexpress_trending_searches is absent from the verified
public Crawlora MCP catalog used here. It is not added to the packaged product
skill until the tool is published in that catalog. This avoids generating a
helper route that users cannot call through the published contract.

## Coverage result

After regeneration, focused references cover 3,824 of the 3,829 published
tools. The five remaining tools are the account-usage routes and stay outside
public research workflows. There are no remaining uncovered public tool groups
in this catalog snapshot.

## Validation

- Public catalog parity matched 3,829 tools across 480 groups.
- Skill validation passed for 174 installable skills and 136 marketplace skills.
- Generated-reference parity and shared helper shell syntax passed.
- The repository Node test suite passed all 32 tests; the Skill Creator quick
  validator passed for each of the five new skills.
- Focused coverage finished at 3,824 of 3,829 tools; only the five Usage routes
  remain unassigned to public research skills.
