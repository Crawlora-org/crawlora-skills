# Decision and identity workflow additions — 2026-10-05

Six workflows build on the unchanged published 3,465-tool catalog.
Installable skills rise from 156 to 162; marketplace entries rise from 118 to
124. Each bundles exact tools, a generated reference, and a restricted helper.
The separate release worktree/publication changes are preserved and incorporated
through the normal rebase if they land during this authoring task.

| Skill | Added deliverable |
|---|---|
| `supply-chain-concentration-analysis` | Observed supplier/origin exposure with entity, period, shipment-unit and denominator reconciliation. |
| `job-posting-comparison` | Advertised-role requirement/compensation matrices with requisition/provider identity and transport-dependent missing fields. |
| `app-release-feedback-analysis` | Release/review attribution ledger and comparable sampled themes with version/date uncertainty and causal limits. |
| `youtube-content-gap-analysis` | Topic/format/channel sample maps and content hypotheses with actual caption evidence and unavailable-content counts. |
| `company-identity-reconciliation` | Reversible company/brand/registrant/employer ID mappings with aliases, relationships, conflicts and source provenance. |
| `pet-care-provider-shortlisting` | Service-specific provider shortlists with rate units, public claims/excerpts and questions for dates/qualification. |

## Reusable findings

- ImportYeti company-kind results support detail; supplier-kind results do not
  have a supplier-detail endpoint. Supplier/lifetime/recent/region figures may
  have different periods or measures. TEU, counts, weights, cartons and estimated
  freight spend are not procurement value. Empty tables can reflect extraction
  gaps; the HS/HTS surface is a selected top-ten list.
- Job dataset salary bounds require currency but supply no period selector.
  Normalize currency/period/base-versus-variable terms after collection; bounds
  use range overlap semantics. ATS/Indeed IDs and dataset IDs differ. Indeed
  GraphQL transport can omit remote, employment-type and benefit fields that
  page transport supplies; absence is not a negative feature statement.
- App Store releases can be joined to review version/date evidence, with market
  and rollout caveats. The selected Google Play surface does not supply complete
  historical release notes. Stored review searches have no date/version filter;
  local filtering, update timestamps and sampling rules remain explicit.
- YouTube metadata/captions support different coding bases. Discover caption
  languages and generated/translation context, preserve timestamps, and retain
  videos with unavailable captions as partial evidence. Search/view counts do
  not establish unmet audience demand or a guaranteed growth tactic.
- Brand homepage markup is not a corporate register. Legal registrant, parent,
  employer, brand, branch and profile IDs need a chosen identity scope. Related
  entities should remain related records rather than silent deduplication;
  shared logos/domains/infrastructure alone do not prove legal ownership.
- Rover has separate sitter and trainer routes and provider namespaces. Public
  starting rates use different service units and do not guarantee checkout cost.
  The selected endpoints expose no date-based booking inventory. Profiles expose
  review excerpts, not the complete history; badges/claims do not independently
  verify care quality, credentials, insurance or an animal's suitability.

## Validation and scope

Checks cover six Skill Creator validations, repository count/skill lint,
generator parity, generated-helper security, executable mocked examples against
methods/routes/required parameters/enums, and published MCP catalog parity.
Supply-chain, job-posting and company-identity helpers support their documented
GET/POST pairs; the other three are GET-only. No underlying API endpoint,
SDK, deployment, application, purchase, booking, outreach, identity database/CRM,
or recurring monitor is changed. Current counts live in README/umbrella metadata;
earlier audit files remain dated snapshots.
