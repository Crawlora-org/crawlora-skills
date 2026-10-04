# Six focused workflow additions — 2026-10-05

These skills build on the previously reviewed 3,465-tool published catalog.
No new API endpoint or catalog update is required. Each skill selects exact
tools, generates its own endpoint reference and restricted GET-only helper,
and is independently installable. Installable skills rise from 126 to 132;
the marketplace bundle rises from 88 to 94.

| Skill | Selected tools | Workflow-specific evidence boundary |
|---|---:|---|
| `relocation-cost-comparison` | 7 | Discover Numbeo city slugs; verify ambiguous currency symbols; compare the same household basket. US housing aggregates remain a separate dated geography, not rent quotes. |
| `brand-mention-research` | 9 | Resolve aliases, retain ambiguous/excluded hits, deduplicate posts, and separate comments from post denominators. Different platform/date filters do not establish equal coverage. |
| `congressional-disclosure-research` | 2 | Index House/Senate filings but parse only supported Senate HTML reports. Preserve owners, date types, ranges, raw rows, and possible Annual/PTR duplicates. |
| `newsletter-topic-landscape` | 8 | Match publication identity, sample archives with comparable rules, distinguish title/preview/full-text evidence, and disclose topic denominators and missing bodies. |
| `football-player-comparison` | 6 | Resolve each player's season entryId, match competition/role/period, and calculate rates only with the compatible numerator and actual minutes. |
| `football-viewing-guide` | 6 | Discover provider market codes, keep the seven-day schedule window explicit, preserve timezones and channels, and distinguish listings from viewing access. |

## Authoring and validation lessons

- A narrow skill should add a decision/output workflow beyond its broader source
  skill. These additions supply household budget scenarios, a mention evidence
  ledger, filing/transaction reconciliation, topic matrices, player-rate
  comparisons, or a dated viewing guide rather than simply duplicating endpoints.
- Check handwritten endpoint docs as well as catalog schemas. Individually
  optional fields can have conditional requirements (House requires `member`),
  and shared response schemas can advertise a broader type than the parser
  supports (the report parser only returns Senate content).
- Numbeo currency symbols do not establish an ISO currency. Rank indices and
  raw expense amounts have different units; item baskets need household quantities,
  dated conversion rates, missing-cost ledgers, and separate moving expenses.
- Filing dates and transaction dates are separate. House candidate years are
  election years; House list results lack exact filing dates. A report index hit
  does not supply transactions, and Annual/PTR overlap needs traceable reconciliation.
- Provider IDs, pagination, and discovery scopes are not interchangeable.
  FotMob player season IDs are player-specific; broadcast channels only describe
  a current market window; Substack categories and publication IDs differ.
- Social search time semantics differ. Reddit's `time` applies to top/comments
  sorting, TikTok exposes no date-filter input here, and YouTube has its own
  upload-date filter. Unknown dates and incomplete pages remain explicit gaps.

Validation includes repository skill lint, the Skill Creator validator for all
six additions, generator parity, exact published catalog parity, generated-helper
security checks, and mocked executable examples checked against actual methods,
routes, required fields, query parameters, and enums. No production API credit
spend or account mutation is needed for these authoring checks.

The earlier [coverage audit](coverage-2026-10-05.md) and
[endpoint matrix](endpoints-2026-10-05.tsv) remain dated snapshots of the first
review. The new workflow references add alternate task routing without changing
the underlying tool catalog or claiming that a live uptime audit occurred.
