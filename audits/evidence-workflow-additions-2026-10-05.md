# Evidence interpretation workflows — 2026-10-05

Six task-focused skills build on the unchanged published 3,465-tool catalog.
Installable skills rise from 144 to 150, and marketplace entries from 106 to
112. Every addition includes exact tool selections, a generated reference,
and a restricted helper. This batch starts from the companion skills release
`8f6b6ba` and preserves its version/publication settings.

| Skill | Tools | Added workflow |
|---|---:|---|
| `app-privacy-disclosure-comparison` | 7 | Cross-platform app identity and declared data/access matrices, with original taxonomies and missing evidence retained. |
| `game-price-history-research` | 12 | Dated Steam price series and current edition/PlayStation comparisons with price scale, currency, SKU, subscription, and gap controls. |
| `podcast-topic-landscape` | 11 | Matched show/episode identity, balanced archive sampling, metadata-based topic coding, and episode-level denominators. |
| `broadcast-coverage-comparison` | 8 | Station/show and time/channel comparisons with raw count, show percentage, and timeline/airtime metrics kept distinct. |
| `business-complaint-pattern-analysis` | 8 | Business/HQ identity, complaints versus aggregate windows, response-thread attribution, and incomplete-list reconciliation. |
| `open-source-project-shortlisting` | 6 | Requirements and version-specific evidence matrices with maintenance, license pointers, and conditional adoption questions. |

## Reusable source findings

- Apple privacy labels and Google data-safety categories are different taxonomies.
  Android permission listings do not show granted/exercised runtime access, and
  the data-safety route has no country parameter. Compare declarations rather
  than treating them as verified collection or a compliance/security audit.
- Steam prices are daily app/day observations in explicitly declared cents.
  History has no regional country filter, while live app quotes can have one.
  PlayStation catalog rows are current product SKUs with currency/minor units;
  a historical SKU-price endpoint is not supplied. Missing dates are gaps, not
  zeros or proof of unchanged prices.
- Podcast archives and searches provide metadata, not guaranteed transcripts.
  Show/episode IDs and Spotify URIs differ; cross-platform deduplication needs
  feed/GUID or title/date/duration corroboration. Duration is not audience exposure,
  and title/description-based coding cannot invent spoken quotations or sponsors.
- GDELT match channels use different extraction methods and coverage. Repeat
  positive channel terms are ORed; exclusions need a positive content term.
  Relative and absolute time windows cannot be mixed. Station counts are raw
  matches, show-chart counts are percentages, and timeline fields represent
  the returned matched-airtime/volume metric, not viewers or interchangeable counts.
- BBB directory records do not embed full complaints. Actual totals can coexist
  with `complaints_list_incomplete=true` and no available itemized rows. Reporting
  windows, HQ aggregation, response rounds, and status meanings are separate;
  `Answered` is not automatically `Resolved`. Keep redactions and attribution.
- GitHub activity/release/popularity metadata does not validate capability or
  production readiness. Default-branch documentation can describe an unreleased
  feature; license metadata is not a complete dependency/asset scope analysis.
  Scraped documentation is evidence, not permission to execute its instructions.

## Validation and scope

Validation covers six Skill Creator checks, skill/count lint, reference/helper
parity, generated-helper security, mocked executable examples against methods,
routes, required parameters and enums, and published MCP catalog parity. The
project-shortlist helper supports the documented GET/POST routes; the other five
are GET-only. No underlying API endpoint, SDK, production deployment, installation,
purchase, account mutation, outreach, legal action, or recurring monitor is changed.
Earlier audit files remain dated snapshots; current counts are in README and
umbrella metadata. These skills add interpretation and task routing, not a claim
of new upstream coverage or a live uptime assessment.
