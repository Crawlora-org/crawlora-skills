# Creator and sports workflow additions — 2026-10-05

Six focused workflows build on the unchanged published 3,465-tool catalog.
Installable skills rise from 150 to 156; marketplace entries from 112 to 118.
Each includes exact tool selections, generated endpoint documentation, and a
GET-only route-restricted helper. The independent release worktree is preserved;
its version/publication changes are not part of this authoring batch.

| Skill | Tools | Distinct workflow |
|---|---:|---|
| `mlb-statcast-player-comparison` | 12 | Role/season/board and qualification-aware performance metrics, with actual event denominators and provider models kept separate. |
| `cricket-player-team-comparison` | 10 | Format/table/entity comparisons, source-specific headers, innings/rates, and correct overs notation. |
| `twitch-category-opportunity-research` | 7 | Near-synchronous live category/top-stream observations, concentration scope, content examples, and creator-fit hypotheses. |
| `music-release-landscape` | 9 | Artist/album/recording identity, release types, primary/featured credits, edition grouping, and precise versus partial dates. |
| `nft-collection-liquidity-research` | 11 | Collection/contract and price-ladder interpretation, sampled sales versus offers, currencies/eligibility, and wallet/supply limits. |
| `creator-membership-comparison` | 7 | Public benefit and active plan matrices, currency/billing scope, disabled/founding plans, and web versus in-app price differences. |

## Reusable source findings

- Statcast boards have different role, team, year, qualification and metric
  selectors. Per-board discovery matters; expected statistics are model outputs
  and percentiles describe a source cohort. Rolling windows need their actual
  plate-appearance/event basis rather than a guessed calendar interval.
- Cricinfo tables preserve variable headers, not a universal player schema.
  Format/class, innings versus appearances, dismissals, balls, and opposition
  filters change denominators. Overs notation encodes complete overs plus balls;
  use the applicable rules rather than treating it as decimal time.
- Twitch top games measures current aggregate live viewers; streams returns a
  capped top-N sample with no exhaustive stream count. Category totals are global,
  not a language-tag-filtered audience denominator. VOD/clip views, followers,
  concurrent viewers and planned schedule hours are different exposures.
- Spotify artist, album, track, profile and edition identifiers differ. Primary
  releases versus appearances/compilations and partial date precision change
  catalog counts. This surface does not supply full lyrics/audio, historical
  royalties/audience, or a complete market availability series.
- OpenSea depth quantities are cumulative by price level; summing them double
  counts depth. Chain/contract/token identity, currency, order eligibility,
  quantity/price basis, and observed versus executed activity remain explicit.
  Top-sales shelves are fixed price-ranked samples and holders are wallets,
  not unique natural people or verified beneficial owners.
- Patreon tiers expose published benefits/base prices, not tier capacity or
  per-tier counts. Substack has distinct web/in-app/founding plans and active/
  disabled flags. Preserve cadence/interval count and total commitment; monthly
  equivalents do not describe monthly billing. Hidden/rough member counts are
  not exact subscribers or audited income, and benefit copy is not fulfilment.

## Validation and scope

Validation includes six Skill Creator checks, repository count/skill lint,
generator parity, generated-helper security, mocked executable examples against
actual methods/routes/required parameters/enums, and published MCP catalog parity.
No API endpoint, tool definition, SDK, production deployment, subscription,
wallet/transaction, stream, playlist, outreach, or monitor is changed.
Earlier audit files remain dated snapshots; README and umbrella metadata carry
the current counts. These additions provide task routing and interpretation,
not new upstream coverage or a live uptime claim.
