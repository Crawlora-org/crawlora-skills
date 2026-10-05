# Media and market workflow additions — 2026-10-05

Six workflows are added over the unchanged published 3,465-tool catalog.
Installable skills rise from 138 to 144; marketplace entries rise from 100 to
106. Each skill selects exact tools and bundles a generated endpoint reference
and restricted helper. All catalog-backed coverage from earlier batches remains.

| Skill | Tools | Distinct deliverable |
|---|---:|---|
| `book-market-positioning` | 15 | Comparable-title/topic/format map, work-versus-edition identity, sampled reception, and qualified publishing hypotheses. |
| `film-box-office-comparison` | 13 | Matched theatrical gross tables with original/reissue, territory, period, estimates, and denominator controls. |
| `streaming-availability-comparison` | 8 | Title/episode offers by country/provider, separated by monetization/presentation and missing viewing conditions. |
| `forecast-consensus-comparison` | 17 | Proposition/rule matching, source scales, outcome identity, aggregation/price basis, and dated forecast divergence. |
| `sec-insider-transaction-analysis` | 7 | Issuer/owner/filing ledger with classified reported transactions, date windows, caps, amendments, and economic interpretation limits. |
| `chain-store-footprint-analysis` | 13 | Branch identity reconciliation, matched areas, observed counts/overlap, amenities, and incomplete source coverage. |

## Reusable source and authoring findings

- Goodreads book IDs and work IDs differ. Editions resolve the work internally;
  dataset author filters can match any credited contributor, not only the primary
  author. The seeded book index is incomplete, and ratings/editions cannot be
  added into a sales or unique-reader figure.
- Box Office Mojo titles, releases, and release groups have distinct IDs and
  scopes. Worldwide gross includes geographic components; lifetime figures may
  already include rereleases. Public page/dataset hydration and estimates versus
  finalized data affect comparability. Theatrical gross is not studio profit.
- JustWatch raw movie/show IDs differ from season/episode IDs. Offers take one
  to five countries per call; provider discovery is country-specific. A show-level
  listing does not prove every season/episode is included, and a subscription
  offer does not identify the user's plan/add-on or guaranteed playback rights.
- Forecast titles must match rules, deadlines, outcomes, and conditional scope
  before numeric comparison. Polymarket event/market/token IDs and Kalshi event/
  market/series tickers are distinct. Metaculus metadata can contain numeric/date
  scaling or changing option labels; the first center/array value is not always
  a binary probability. Source price fields and aggregation methods stay explicit.
- Live SEC insider data is a recent sample capped at 30; stored transaction-date
  history caps at 200 without pagination. Unknown/absent stored CIK history can
  return an empty series. Transaction code, acquired/disposed indicator, owner,
  and security class have different meanings; grants/exercises cannot silently
  become discretionary market purchases. Amendments and cross-source duplicates
  need accession/row evidence, not ingestion idempotence assumptions.
- Starbucks country is geography while market is host provenance. The live
  locator caps at 50 and separates geocode failure from no branches; stored
  grid-tiled coverage is a different source. Empty hours/amenities are not closure
  evidence, and mobile-order readiness differs from capability. McDonald's
  locator radius uses miles while dataset radii use meters. Overlapping search
  circles require deduplicated branches and an explicit union area.

## Validation and scope

Validation includes repository skill/count lint, six Skill Creator checks,
generator parity, generated-helper security, mocked executable examples against
actual methods/routes/parameters/enums, and published MCP catalog parity.
The footprint helper supports its documented GET/POST route pairs; the remaining
five workflows are GET-only. No underlying endpoint/tool contract, SDK, deployment,
transaction, subscription, outreach, or recurring monitor is changed.

These additions supply interpretation and routing rather than new upstream
coverage. Earlier audit files remain dated snapshots; README and umbrella
metadata carry the current installable/bundled counts. Popularity, footprint,
ratings, forecast snapshots, and gross figures retain their own denominators
and do not establish demand, outcomes, revenue, current positions, or legal facts.
