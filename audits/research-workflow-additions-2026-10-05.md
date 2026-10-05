# Six further research workflows — 2026-10-05

This batch adds six task-specific skills over the unchanged published
3,465-tool catalog. The repository grows from 132 to 138 installable skills,
and the marketplace bundle from 94 to 100. Each skill is independently
installable with exact tool selections, a generated reference, and a route-
and method-restricted helper.

| Skill | Tools | Added interpretation workflow |
|---|---:|---|
| `used-car-price-history-analysis` | 10 | Listing identity, first/change observations versus daily history, source backfill dates, price-change arithmetic, and matched vehicle evidence. |
| `investor-fit-research` | 12 | Firm/fund/company identity, public teaser coverage, supported/contradicted/unknown fit criteria, and conditional fundraising shortlists. |
| `developer-talent-discovery` | 12 | Dataset candidate discovery followed by public repository/contribution verification; popularity and profile flags remain distinct from capability or availability. |
| `institutional-ownership-research` | 5 | Manager versus issuer identity, latest filing scope, accession/date reconciliation, raw value units, top-N truncation, and comparable position definitions. |
| `patent-landscape-analysis` | 8 | Query/coverage ledgers, date semantics, family evidence, assignee normalization, and sample-versus-source breakdowns. |
| `flight-itinerary-comparison` | 4 | Airport/passenger/cabin matching, one-way versus departing-leg scope, segment timing, amenities, and price-basis/condition comparisons. |

## Source findings retained in the instructions

- Vehicle price history is not a crawl-per-day series. A first observation is
  not the original offer price; Cars.com native backfill can predate the crawl
  that discovered it. Missing/removed listings do not establish a completed sale.
- PitchBook investor and fund profiles expose partial public tables. A stated
  table total differs from visible row count, gated numeric cells stay unknown,
  and headquarters/status/vintage do not verify current investment mandate or
  deployable capital. Live profile calls require exactly one of `id` or `url`.
- GitHub profile/activity/popularity fields are discovery evidence, not a
  technical assessment. Stored location, company, and hireable status may be
  stale; repository language/fork/pinned status does not establish authorship,
  seniority, work eligibility, or willingness to accept contact.
- The live SEC holdings parser preserves information-table numeric values
  without a universal conversion multiplier. Verify each filing's units before
  absolute or cross-source value comparisons. Dimensionless weights can use a
  compatible full same-filing `total_value`; a truncated top-N subtotal is not
  a complete-portfolio denominator. Both live and stored holdings routes return
  latest filings, not structured arbitrary-quarter history.
- Google Patents top breakdowns cover its whole matching query, while collected
  pages can be a smaller sample. Patent family/grouping and assignee aliases
  need returned evidence. Coverage counts describe the index, not technology
  output, rights validity, or freedom to operate.
- USPTO BRS syntax differs from Google query/filter semantics. The shell helper
  rejects literal `@` query arguments, so BRS `@` date expressions require an
  available MCP tool or an equivalent Google structured-date query. This batch
  preserves the helper's local-file guard rather than weakening it.
- Agoda is one-way-only and supports child/infant passenger inputs; Expedia's
  exposed adult-only schema is not equivalent for those parties. Expedia still
  returns departing-leg offers for round-trip criteria and has no return-leg
  selection. Its MCP `option` is the flat REST JSON body; amenities use returned
  segment `cabin_code` as the body's `cabin_class`.

## Validation and scope

Checks include six Skill Creator validations, repository skill/count lint,
generator parity, generated-helper security checks, mocked executable examples
against published methods/routes/parameters/enums, and published MCP catalog
parity. The flight helper supports its documented GET/POST route pairs; the
other five are GET-only. No API endpoint, underlying tool definition, SDK,
production deployment, purchase, outreach, or account state is changed.

Earlier coverage and workflow audit files remain dated snapshots; README and
umbrella metadata carry the current installable/bundled counts. These skills
add analysis and routing, not new upstream coverage or a claim of live uptime.
