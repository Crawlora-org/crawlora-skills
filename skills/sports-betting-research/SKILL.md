---
name: sports-betting-research
description: Compare public sportsbook odds, live states, and source-attributed sports-market commentary across FanDuel, DraftKings, ESPN, SofaScore, and Flashscore. Use for dated odds comparisons and context, not wagering, account actions, or financial advice.
---

# Sports betting research

Compare public sportsbook markets with independent event context. Keep odds,
lines, game status, and schedules timestamped and separate from predictions.

## When to use this skill

- Find upcoming or live events and their public sportsbook markets.
- Compare FanDuel and DraftKings market snapshots for a named event.
- Compare moneyline, spread, total, or proposition prices where published.
- Cross-check an event's teams, players, schedule, and status with ESPN or
  SofaScore before discussing a market.
- Build a time-stamped odds board for research or reporting.

## Research workflow

1. Discover sports and leagues with the selected provider's directory, then
   resolve its event and market IDs. FanDuel's state code selects a provider
   catalog; it does not establish where the user is eligible to wager.
2. Capture sportsbook market names, selections, odds, line values, timestamps,
   and suspended/closed state exactly as returned. Do not combine markets with
   different settlement rules.
3. Use ESPN or SofaScore for schedule and score context, matching by teams,
   date, league, and start time. Similar names are not proof of identity.
4. Compare snapshots only when collection time, locale, league, and market
   type are aligned. A price movement is observed change, not an explanation.
5. For Flashscore, first discover accepted viewer markets with
   `/flashscore/odds-geos`; keep its `geo` and optional subdivision separate
   from other providers' locale codes. Use `/flashscore/match-odds` for a
   matched event and `/flashscore/team-outright-odds` or
   `/flashscore/tournament-outright-odds` for source-reported outright markets.
   The outright feed is a limited displayed shortlist with no known continuation;
   do not present it as a complete futures book. Empty markets can mean no
   licensed bookmakers in that viewer market.

## FanDuel market and publisher context

Use the FanDuel sports directory to discover the available state-specific
sports and competition identifiers before requesting odds. The state value
selects the provider's returned catalog; it is not a statement about the user's
eligibility. Markets and coverage can vary by state.

Refresh FanDuel prices with market IDs returned by the earlier response. Keep
provider IDs, state codes, collection time, and market type attached. FanDuel
Research articles and player updates are publisher context; attribute their
picks to the publisher rather than presenting them as verified forecasts.

~~~sh
scripts/crawlora.sh /fanduel/sportsbook/sports state=nj
scripts/crawlora.sh /fanduel/sportsbook/home state=nj
scripts/crawlora.sh /fanduel/research/articles sport=nfl
~~~

## Examples

```sh
scripts/crawlora.sh /draftkings/sportsbook/leagues | jq '.'
scripts/crawlora.sh /draftkings/sportsbook/featured-leagues | jq '.'
scripts/crawlora.sh /draftkings/sportsbook/league-events league_id=<id> | jq '.'
scripts/crawlora.sh /draftkings/sportsbook/event-markets event_id=<id> | jq '.'
scripts/crawlora.sh /espn/scoreboard sport=football league=nfl | jq '.'
scripts/crawlora.sh /flashscore/odds-geos
# Resolve the event and geo from Flashscore before calling its market route.
scripts/crawlora.sh /flashscore/match-odds id=example-match-id geo=GB | jq '.'
scripts/crawlora.sh /flashscore/tournament-outright-odds tournament_id=example-season-id geo=GB | jq '.'
scripts/crawlora.sh /flashscore/match-odds id=example-match-id geo=GB
```

## Notes and limits

- Public, anonymous market snapshots only. No bets, deposits, withdrawals,
  account access, or payment actions occur.
- Sportsbook availability, prices, and legal access vary by jurisdiction and
  time. Verify material decisions with the licensed operator and local rules.
- FanDuel's state parameter selects a provider-returned market set; it is not
  a legal determination or proof of user eligibility.
- Odds are not forecasts or guaranteed returns. Do not present a snapshot as
  advice or infer insider information from a line change.

See [`reference/endpoints.md`](reference/endpoints.md) for the complete generated endpoint list.
