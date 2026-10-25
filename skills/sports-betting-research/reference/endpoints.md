# sports-betting-research — endpoint reference

> Generated from `scripts/tools.json` by `scripts/generate.mjs` — do not edit by hand.

Only the endpoints used by this workflow. Call them via `scripts/crawlora.sh` (see SKILL.md).

All paths are relative to the API base `https://api.crawlora.net/api/v1` and require the header `x-api-key: $CRAWLORA_API_KEY`. Path params like `{id}` are substituted into the URL; `GET` params go in the query string; `POST` params go in a JSON body.

**187 endpoints across 5 platform group(s).**

## DraftKings Sportsbook (12)

### `draftkings_event`

- **HTTP:** `GET /draftkings/sportsbook/event`
- **What:** DraftKings Sportsbook event. Returns one event's metadata (league id, sport id, teams, status, start time). `event_id` is a numeric DraftKings event identifier (find it from an event's DraftKings Sportsbook page, or from the `id` field of an event returned by /draftkings/sportsbook/odds). The returned `league_id` is accepted by /draftkings/sportsbook/odds and /draftkings/sportsbook/futures. This endpoint does not include betting markets/odds.
- **Params:** `event_id` (string, **required**) — Numeric DraftKings event id

### `draftkings_event_context`

- **HTTP:** `GET /draftkings/sportsbook/event-context`
- **What:** DraftKings Sportsbook event context. Returns public sport, league, and event navigation identifiers for a numeric DraftKings event id. Use it to associate an event with DraftKings Sportsbook's public sport and league navigation.
- **Params:** `event_id` (string, **required**) — Numeric DraftKings event id

### `draftkings_event_markets`

- **HTTP:** `GET /draftkings/sportsbook/event-markets`
- **What:** DraftKings Sportsbook event markets. Returns one event's betting markets and selections for a specific market category. `event_id` is a numeric DraftKings event identifier (find it from the `id` field of an event returned by /draftkings/sportsbook/odds). `subcategory_id` selects the market category (e.g. game lines, a player-prop category, an alternate-line category) -- find one from the `subcategory_id` field on a market returned by /draftkings/sportsbook/odds. An empty `markets` list is a valid response when the category has no markets currently posted for this event.
- **Params:** `event_id` (string, **required**) — Numeric DraftKings event id; `subcategory_id` (string, **required**) — Numeric DraftKings market subcategory id

### `draftkings_featured_leagues`

- **HTTP:** `GET /draftkings/sportsbook/featured-leagues`
- **What:** DraftKings Sportsbook featured leagues. Returns public DraftKings Sportsbook leagues currently marked as featured in its sport navigation. Each item includes its numeric `id`, capability `tags`, live-offer status, and upstream featured ordering. Use the `id` as `league_id` with /draftkings/sportsbook/odds and /draftkings/sportsbook/futures.
- **Params:** _none_

### `draftkings_futures`

- **HTTP:** `GET /draftkings/sportsbook/futures`
- **What:** DraftKings Sportsbook futures. Returns league-level futures markets and selections for a specific DraftKings market category. `league_id` is a numeric DraftKings league identifier and `subcategory_id` is a numeric futures category identifier. An empty `events` list is a valid response when the category has no markets currently posted for that league.
- **Params:** `league_id` (string, **required**) — Numeric DraftKings league id; `subcategory_id` (string, **required**) — Numeric DraftKings futures market subcategory id

### `draftkings_league_events`

- **HTTP:** `GET /draftkings/sportsbook/league-events`
- **What:** DraftKings Sportsbook league event directory. Returns a DraftKings Sportsbook league's current public event directory, including event IDs, teams or other participants, start times, status, and public availability tags. Supply a numeric `league_id` from /draftkings/sportsbook/leagues, /draftkings/sportsbook/quick-links, /draftkings/sportsbook/featured-leagues, or /draftkings/sportsbook/event. This endpoint does not include betting markets or odds.
- **Params:** `league_id` (string, **required**) — Numeric DraftKings league id

### `draftkings_leagues`

- **HTTP:** `GET /draftkings/sportsbook/leagues`
- **What:** DraftKings Sportsbook sports and leagues. Returns DraftKings Sportsbook's current public sport and league directory. Each league `id` is accepted as `league_id` by /draftkings/sportsbook/odds and /draftkings/sportsbook/futures.
- **Params:** _none_

### `draftkings_live`

- **HTTP:** `GET /draftkings/sportsbook/live`
- **What:** DraftKings Sportsbook live events. Returns the live events currently shown by DraftKings Sportsbook, including score state, period, primary markets, and market categories that can be used with /draftkings/sportsbook/event-markets. An empty `events` list is valid when DraftKings has no live events at request time.
- **Params:** _none_

### `draftkings_odds`

- **HTTP:** `GET /draftkings/sportsbook/odds`
- **What:** DraftKings Sportsbook odds. Returns the primary betting markets (moneyline, spread, total) for every upcoming event in a DraftKings Sportsbook league. `league_id` is a numeric DraftKings league identifier (find it from a league's DraftKings Sportsbook page). An empty `events` list is a valid response when nothing is currently scheduled.
- **Params:** `league_id` (string, **required**) — Numeric DraftKings league id

### `draftkings_quick_links`

- **HTTP:** `GET /draftkings/sportsbook/quick-links`
- **What:** DraftKings Sportsbook quick links. Returns the ordered league shortcuts currently prioritized on DraftKings Sportsbook's public home page. Each item includes a numeric `league_id` accepted by /draftkings/sportsbook/odds and /draftkings/sportsbook/futures.
- **Params:** _none_

### `draftkings_team`

- **HTTP:** `GET /draftkings/sportsbook/team`
- **What:** DraftKings Sportsbook team. Returns stable team metadata embedded in a public DraftKings Sportsbook team page. Supply `team_id`, `sport`, and `slug` from an item returned by /draftkings/sportsbook/teams. Allowed `sport` values: `football`, `hockey`, `basketball`, `baseball`.
- **Params:** `slug` (string, **required**) — Lowercase DraftKings team slug; `sport` (string, **required**) — Sport: football, hockey, basketball, baseball; `team_id` (string, **required**) — Numeric DraftKings team id

### `draftkings_teams`

- **HTTP:** `GET /draftkings/sportsbook/teams`
- **What:** DraftKings Sportsbook league teams. Returns the teams listed on DraftKings Sportsbook's public Teams page for one league. Allowed `league` values: `nfl`, `nhl`, `nba`, `cbb`, `mlb`, `cfb`.
- **Params:** `league` (string, **required**) — League: nfl, nhl, nba, cbb, mlb, cfb

## ESPN (9)

### `espn_athlete`

- **HTTP:** `GET /espn/athlete`
- **What:** ESPN athlete. Returns one athlete's bio/overview (name, position, jersey, physicals, current team). The `sport` enum accepts `football`, `basketball`, `baseball`, `hockey`, and `soccer`. The `league` enum accepts `nfl`, `college-football`, `nba`, `wnba`, `mens-college-basketball`, `womens-college-basketball`, `mlb`, `nhl`, `eng.1`, `esp.1`, `ita.1`, `ger.1`, `fra.1`, `usa.1`, and `uefa.champions`; it must be valid for the chosen sport.
- **Params:** `athlete` (string, **required**) — Numeric ESPN athlete (player) id; `league` (string, **required**) — League key (must be valid for the sport); `sport` (string, **required**) — Sport key

### `espn_game_summary`

- **HTTP:** `GET /espn/game-summary`
- **What:** ESPN game summary. Returns one game's matchup, betting odds, and boxscore stat totals. The `sport` enum accepts `football`, `basketball`, `baseball`, `hockey`, and `soccer`. The `league` enum accepts `nfl`, `college-football`, `nba`, `wnba`, `mens-college-basketball`, `womens-college-basketball`, `mlb`, `nhl`, `eng.1`, `esp.1`, `ita.1`, `ger.1`, `fra.1`, `usa.1`, and `uefa.champions`; it must be valid for the chosen sport. Get an `event` id from the scoreboard endpoint.
- **Params:** `event` (string, **required**) — Numeric ESPN event (game) id; `league` (string, **required**) — League key (must be valid for the sport); `sport` (string, **required**) — Sport key

### `espn_news`

- **HTTP:** `GET /espn/news`
- **What:** ESPN league news. Returns recent news articles (headline, description, link) for a league. The `sport` enum accepts `football`, `basketball`, `baseball`, `hockey`, and `soccer`. The `league` enum accepts `nfl`, `college-football`, `nba`, `wnba`, `mens-college-basketball`, `womens-college-basketball`, `mlb`, `nhl`, `eng.1`, `esp.1`, `ita.1`, `ger.1`, `fra.1`, `usa.1`, and `uefa.champions`; it must be valid for the chosen sport.
- **Params:** `league` (string, **required**) — League key (must be valid for the sport); `sport` (string, **required**) — Sport key

### `espn_rankings`

- **HTTP:** `GET /espn/rankings`
- **What:** ESPN poll rankings. Returns poll rankings (e.g. AP Top 25) for a college league. Rankings are only published for college leagues: the `sport` enum accepts `football` and `basketball`, and the `league` enum accepts `college-football`, `mens-college-basketball`, and `womens-college-basketball`.
- **Params:** `league` (string, **required**) — College league key; `sport` (string, **required**) — Sport key

### `espn_scoreboard`

- **HTTP:** `GET /espn/scoreboard`
- **What:** ESPN scoreboard. Returns games (scores, schedule, status, and odds when available) for a sport and league. The `sport` enum accepts `football`, `basketball`, `baseball`, `hockey`, and `soccer`. The `league` enum accepts `nfl`, `college-football`, `nba`, `wnba`, `mens-college-basketball`, `womens-college-basketball`, `mlb`, `nhl`, `eng.1`, `esp.1`, `ita.1`, `ger.1`, `fra.1`, `usa.1`, and `uefa.champions`; it must be valid for the chosen sport. The `seasontype` enum accepts `1` (preseason), `2` (regular season), `3` (postseason), and `4` (offseason).
- **Params:** `dates` (string, optional) — Date or range as YYYYMMDD, YYYYMMDD-YYYYMMDD, or YYYY; defaults to the current scoreboard; `league` (string, **required**) — League key (must be valid for the sport); `seasontype` (integer, optional) — Season type; `sport` (string, **required**) — Sport key; `week` (integer, optional) — Week number (football leagues)

### `espn_standings`

- **HTTP:** `GET /espn/standings`
- **What:** ESPN standings. Returns league standings grouped by conference/division. The `sport` enum accepts `football`, `basketball`, `baseball`, `hockey`, and `soccer`. The `league` enum accepts `nfl`, `college-football`, `nba`, `wnba`, `mens-college-basketball`, `womens-college-basketball`, `mlb`, `nhl`, `eng.1`, `esp.1`, `ita.1`, `ger.1`, `fra.1`, `usa.1`, and `uefa.champions`; it must be valid for the chosen sport. The `seasontype` enum accepts `1` (preseason), `2` (regular season), and `3` (postseason).
- **Params:** `league` (string, **required**) — League key (must be valid for the sport); `season` (integer, optional) — Four-digit season year; defaults to the current season; `seasontype` (integer, optional) — Season type; `sport` (string, **required**) — Sport key

### `espn_team`

- **HTTP:** `GET /espn/team`
- **What:** ESPN team detail. Returns one team's detail (identity, colors, record, standing summary). The `sport` enum accepts `football`, `basketball`, `baseball`, `hockey`, and `soccer`. The `league` enum accepts `nfl`, `college-football`, `nba`, `wnba`, `mens-college-basketball`, `womens-college-basketball`, `mlb`, `nhl`, `eng.1`, `esp.1`, `ita.1`, `ger.1`, `fra.1`, `usa.1`, and `uefa.champions`; it must be valid for the chosen sport.
- **Params:** `league` (string, **required**) — League key (must be valid for the sport); `sport` (string, **required**) — Sport key; `team` (string, **required**) — Team id (numeric) or abbreviation

### `espn_team_roster`

- **HTTP:** `GET /espn/team-roster`
- **What:** ESPN team roster. Returns a team's roster (players with position, jersey, age, and experience) plus head coach. The `sport` enum accepts `football`, `basketball`, `baseball`, `hockey`, and `soccer`. The `league` enum accepts `nfl`, `college-football`, `nba`, `wnba`, `mens-college-basketball`, `womens-college-basketball`, `mlb`, `nhl`, `eng.1`, `esp.1`, `ita.1`, `ger.1`, `fra.1`, `usa.1`, and `uefa.champions`; it must be valid for the chosen sport.
- **Params:** `league` (string, **required**) — League key (must be valid for the sport); `sport` (string, **required**) — Sport key; `team` (string, **required**) — Team id (numeric) or abbreviation

### `espn_teams`

- **HTTP:** `GET /espn/teams`
- **What:** ESPN team list. Returns the full team list for a sport and league. The `sport` enum accepts `football`, `basketball`, `baseball`, `hockey`, and `soccer`. The `league` enum accepts `nfl`, `college-football`, `nba`, `wnba`, `mens-college-basketball`, `womens-college-basketball`, `mlb`, `nhl`, `eng.1`, `esp.1`, `ita.1`, `ger.1`, `fra.1`, `usa.1`, and `uefa.champions`; it must be valid for the chosen sport.
- **Params:** `league` (string, **required**) — League key (must be valid for the sport); `sport` (string, **required**) — Sport key

## FanDuel (53)

### `fanduel_research`

- **HTTP:** `GET /fanduel/research`
- **What:** FanDuel Research recent RSS items. Returns channel metadata and the recent item summaries from FanDuel Research's official RSS feed. `summary` is the feed description, not a full article body; this endpoint does not fetch linked article pages.
- **Params:** _none_

### `fanduel_research_article`

- **HTTP:** `GET /fanduel/research/article`
- **What:** FanDuel Research article. Returns one FanDuel Research article in full: its details plus the body rendered as `blocks` (paragraphs, headings, list items, tables, and embedded Sportsbook markets with their event, market and selection ids) and as plain `text`. Content the renderer cannot show, such as embedded HTML, is counted in `omitted_blocks` instead of being dropped silently. An unknown slug returns 404.
- **Params:** `article` (string, **required**) — Article slug from the `articles` route (`articles[].slug`)

### `fanduel_research_articles`

- **HTTP:** `GET /fanduel/research/articles`
- **What:** FanDuel Research articles. Returns a page of FanDuel Research articles (predictions, picks, prop bets, guides), newest first, without their bodies: title, description, sport, author, publish time, link, thumbnail and tags. Filter by sport, sub-category (needs a sport; cannot be combined with a date window), team (needs a sport), author, hero type and publish window. Page with `cursor` while `has_more` is true; the service reports no total.
- **Params:** `author` (string, optional) — Author id (a UUID) from the `authors` route; `cursor` (string, optional) — Continue from the previous response's `next_cursor`; `exclude_sport` (string, optional) — Drop these sports (repeat the parameter or comma-separate), same slugs as `sport`; `hero_type` (string, optional) — Hero media: `IMAGE` or `JWPLAYER` (video); `hide_deprioritized` (boolean, optional) — `true` to hide content the site ranks down; it also reorders the list; `limit` (integer, optional) — Articles per page, 1 to 50; default 20; `player` (integer, optional) — A player's `number_fire_id` (`subject.number_fire_id` of the `player-news` route); keeps articles about that player. An unknown id, or one of a different `sport`, returns `400`; `published_after` (string, optional) — Earliest publish time, RFC 3339 or `YYYY-MM-DD`; `published_before` (string, optional) — Latest publish time, RFC 3339 or `YYYY-MM-DD`; not earlier than `published_after`; `sport` (string, optional) — Sport or topic slug from the `sports` route; default all sports; `sub_category` (string, optional) — Topic slug from the `sub-categories` route; needs `sport` and must belong to it; `team` (integer, optional) — A team's `number_fire_id` from the `sports` route (`sport` selects the list); needs `sport`. An id of another sport returns `400`

### `fanduel_research_author`

- **HTTP:** `GET /fanduel/research/author`
- **What:** FanDuel Research author. Returns one FanDuel Research author: id, slug, bio, images, social accounts, and the sports and topics they write for. An unknown slug returns 404.
- **Params:** `author` (string, **required**) — Author slug from the `authors` route, such as `fanduel-staff`

### `fanduel_research_authors`

- **HTTP:** `GET /fanduel/research/authors`
- **What:** FanDuel Research authors. Returns a page of FanDuel Research authors with their id, slug, bio, social accounts and the sports and topics they write for. Filter by sport; page with `cursor` while `has_more` is true. The author `id` filters the `articles` route.
- **Params:** `cursor` (string, optional) — Continue from the previous response's `next_cursor`; `limit` (integer, optional) — Authors per page, 1 to 50; default 20; `sport` (string, optional) — Sport or topic slug from the `sports` route

### `fanduel_research_featured_articles`

- **HTTP:** `GET /fanduel/research/featured-articles`
- **What:** FanDuel Research featured articles. Returns the articles the FanDuel Research editors feature on a sport's page (about ten per sport, such as the week's best bets for the NFL), each with title, description, author, publish time, link and tags. It is a curated list, not the newest-first feed of the `articles` route: for most sports it differs from the latest articles. A sport with nothing featured (Women's Soccer and Sports Betting 101 on 2026-10-24) returns an empty list. The service has no homepage variant, so `sport` is required.
- **Params:** `sport` (string, **required**) — Sport or topic slug from the `sports` route

### `fanduel_research_fixtures`

- **HTTP:** `GET /fanduel/research/fixtures`
- **What:** FanDuel Research live fixtures. Returns the games on today's slate and in progress for the NBA, NFL, NHL and MLB with status (`SCHEDULED`, `IN_PROGRESS`, `FINAL`), the game clock, each team's score and win probability, the TV network, the Sportsbook event link and the money line, spread and total prices with their market and selection ids. A team's `side` is `home` or `away` when it can be read from the event link. Pass `sport` to keep one league; a league with no games returns an empty list.
- **Params:** `sport` (string, optional) — Keep one league

### `fanduel_research_nfl_schedule`

- **HTTP:** `GET /fanduel/research/nfl-schedule`
- **What:** FanDuel Research NFL schedule. Returns one week of NFL games with kickoff time, stadium and roof type, weather, TV network, closing spread and total, status and game clock, and for each team its record, win probability, rankings, average yards, the game's box totals and its passing, rushing and receiving leaders. Games that have not finished also carry the Sportsbook event id, link and the money line, spread and total with the market and selection ids. `season_type` is `PRE`, `REGULAR` or `POST`; `week` is `0` to `4` for `PRE`, `1` to `18` for `REGULAR` and `1` to `5` for `POST`. A week with no games returns an empty list.
- **Params:** `season_type` (string, optional) — Season phase; default `REGULAR`; `week` (integer, **required**) — Week number; `0` to `4` for PRE (`0` is the Hall of Fame game), `1` to `18` for REGULAR, `1` to `5` for POST

### `fanduel_research_player_news`

- **HTTP:** `GET /fanduel/research/player-news`
- **What:** FanDuel Research player news and injuries. Returns short player and team updates, newest first: the fact, the analysis, the news type and the player (name, position, team, `number_fire_id`, and the Sportsbook roster page, whose slug ends in the same id). With `news_type=INJURY` it is a league-wide injury feed. Available for the NFL, NBA, MLB and NHL; the news types each sport has are listed by the `sports` route (the NFL has no `LINEUP`, MLB no `OUTLOOK`, the NHL only `INJURY`, `TRANSACTION` and `GAME_UPDATE`). Filter by team, or by player (id and position together).
- **Params:** `cursor` (string, optional) — Continue from the previous response's `next_cursor`; `include_non_primary` (boolean, optional) — `true` to include updates where the subject is not the main player; `limit` (integer, optional) — Updates per page, 1 to 100; default 25; `news_type` (string, optional) — Update type: `INJURY`, `RECAP`, `TRANSACTION`, `LINEUP`, `GAME_UPDATE`, `OUTLOOK`; a type the sport lacks returns `400` and lists the ones it has; `player` (integer, optional) — A player's `number_fire_id`; needs `position`; `position` (string, optional) — The player's position code; needs `player`; `sport` (string, **required**) — Sport slug; `team` (integer, optional) — A team's `number_fire_id` from the `sports` route

### `fanduel_research_quick_picks_daily`

- **HTTP:** `GET /fanduel/research/podcasts/quick-picks-daily`
- **What:** FanDuel Research Quick Picks Daily episode archive. Returns one page of public Quick Picks Daily program clip metadata from Omny Studio's read-only Consumer API. Follow `next_cursor` to continue; use `in_rss_playlist` to distinguish clips in the default podcast feed and `published_at` to judge freshness. The endpoint returns listening-page links and metadata, not audio files.
- **Params:** `cursor` (string, optional) — Cursor from a previous response's `data.next_cursor`; omit for the first page

### `fanduel_research_sports`

- **HTTP:** `GET /fanduel/research/sports`
- **What:** FanDuel Research sports and topics. Lists the 23 sports and topics of the FanDuel Research site (NFL, NBA, MLB, NHL, college football and basketball, golf, tennis, soccer, MMA, horse racing, casino, FanDuel Predicts and more) with the slug the other research routes take, the position codes, the team count and the player-news types each has. Pass `sport` to also get that sport's teams with the `number_fire_id` values the team filters take.
- **Params:** `sport` (string, optional) — Sport or topic slug; adds the sport's teams

### `fanduel_research_sub_categories`

- **HTTP:** `GET /fanduel/research/sub-categories`
- **What:** FanDuel Research topics. Lists the topics articles can be filtered by (predictions, best prop bets today, FanDuel picks, fantasy football, NFL draft, Kentucky Derby, Breeders' Cup, World Cup and more), each with the sport it belongs to. A topic only filters articles of its own sport.
- **Params:** _none_

### `fanduel_sportsbook_autocomplete`

- **HTTP:** `GET /fanduel/sportsbook/autocomplete`
- **What:** FanDuel Sportsbook search suggestions. Returns the suggestions the Sportsbook's search box offers while a user types: players, teams and competitions that match the prefix. Each suggestion has its plain `text` and a `highlighted` form that wraps the matched characters in `<em>` tags. Use `search/tabs` for the full results of a chosen suggestion.
- **Params:** `limit` (integer, optional) — Suggestions to return, 1 to 50; default 5; `q` (string, **required**) — Prefix to complete, 2 to 100 characters, without `<` or `>`

### `fanduel_sportsbook_builder`

- **HTTP:** `GET /fanduel/sportsbook/builder`
- **What:** FanDuel Sportsbook bet builder. Returns the Sportsbook's bet-builder content for one event: the `groups` and `cards` (bet templates such as who will win, player lines, bullseye ranges, player podium, either-player and head-to-head groups) with their selectable options, the `players` and `teams` on offer, the `periods` and every priceable `choice` with its `choice_id` and description. Choices carry no odds here; price them with `builder/quotes` using this response's `ramp_event_id`. `head-to-head` and `player-combos` return `404` when the event has no cards for that experience.
- **Params:** `event_id` (integer, **required**) — Event id from the `builder/events` route (`events[].event_id`); `experience` (string, optional) — Builder experience: `yourway` (default), `head-to-head`, `player-combos`, `bullseye`, `player-podium`, `or-bets`; `state` (string, optional) — Market code, including `on` for Ontario; default `nj`

### `fanduel_sportsbook_builder_events`

- **HTTP:** `GET /fanduel/sportsbook/builder/events`
- **What:** FanDuel Sportsbook bet builder events. Lists the events a bet-builder experience covers (currently NFL and NBA games), grouped by competition, with start times and team logos. Use an `event_id` from here with the `builder` route.
- **Params:** `experience` (string, optional) — Builder experience: `yourway` (default), `head-to-head`, `player-combos`, `bullseye`, `player-podium`, `or-bets`; `state` (string, optional) — Market code, including `on` for Ontario; default `nj`

### `fanduel_sportsbook_builder_quotes`

- **HTTP:** `GET /fanduel/sportsbook/builder/quotes`
- **What:** FanDuel Sportsbook bet builder quotes. Prices bet-builder choices as single bets and returns, for each, the live decimal, American and fractional odds. A choice the pricing service does not know is returned in `failures` (for example `CHOICE_NOT_FOUND`) instead of failing the request. This is the price of each choice on its own: the combined price of several choices is a separate call that requires an account and is not available.
- **Params:** `choice_id` (array, **required**) — Choice ids from the builder response (`choices[].choice_id`); 1 to 25, repeated or comma-separated; `ramp_event_id` (integer, **required**) — The builder response's `ramp_event_id` (not its `event_id`); `state` (string, optional) — Market code, including `on` for Ontario; default `nj`

### `fanduel_sportsbook_competition`

- **HTTP:** `GET /fanduel/sportsbook/competition`
- **What:** FanDuel Sportsbook competition schedule and futures. Returns one competition's schedule and futures (tabs `schedule` and `futures`) with markets and odds. Get `competition_id` from the `competitions` of a league or sport response.
- **Params:** `competition_id` (integer, **required**) — Competition id from a league, sport or home response `competitions`; `event_type_id` (string, **required**) — Sport id: 6423 American Football; 1 Soccer; 7522 Basketball; 3 Golf; 7511 Baseball; 7524 Ice Hockey; 2 Tennis; 26420387 Mixed Martial Arts; 2593174 Table Tennis; 3503 Darts; 6 Boxing; 5 Rugby Union; 4 Cricket; 8 Motor Sport; 1477 Rugby League; 6422 Snooker; 468328 Handball; 28608997 Lacrosse; 998917 Volleyball, 4726642 Surfing, 10 Special Bets and 2378961 Politics; availability differs by market (Volleyball is also offered in NJ, PA, CO and AZ), and a sport a market does not offer returns 404; `exclude_markets` (boolean, optional) — Return events without their markets (a cheap event listing); `market_types` is still returned; `market_type` (string, optional) — Keep only these market types (repeat the parameter or comma-separate), for example `MONEY_LINE`. Valid values are listed in the response `market_types`; unmatched types return no markets; `state` (string, optional) — U.S. market to query (prices and offered markets differ by state); default nj; `tab` (string, optional) — Show only one tab of this page: a tab slug from the response `tabs[].slug` (the lowercase-hyphenated tab title, such as `games` or `player-props`). An unknown slug returns 400 listing the page's tabs

### `fanduel_sportsbook_event`

- **HTTP:** `GET /fanduel/sportsbook/event`
- **What:** FanDuel Sportsbook event markets. Returns one event with the markets and odds of one tab (game lines, player props, quarters, same-game-parlay markets and more). `tabs` lists every tab the event offers, each with the `slug` accepted by `tab`; the default is `popular`, which holds the most markets. An unknown tab returns 400 listing the valid slugs; an ended event returns 404.
- **Params:** `event_id` (integer, **required**) — Event id from any Sportsbook events listing; `market_type` (string, optional) — Keep only these market types (repeat the parameter or comma-separate), for example `MONEY_LINE`. Valid values are listed in the response `market_types`; unmatched types return no markets; `state` (string, optional) — U.S. market to query (prices and offered markets differ by state); default nj; `tab` (string, optional) — Tab slug from the response `tabs[].slug` (for example `popular`, `passing-props`, `1st-half`, `td-scorer-props`); default `popular`. Tabs differ by sport

### `fanduel_sportsbook_event_box_score`

- **HTTP:** `GET /fanduel/sportsbook/event/box-score`
- **What:** FanDuel Sportsbook live box score. Returns an event's box score grouped by stat category (for football passing, rushing, receiving, kicking, defense) with column labels and player names joined in. `available` is false until the provider has a box score.
- **Params:** `event_id` (integer, **required**) — Event id from any Sportsbook events listing

### `fanduel_sportsbook_event_play_by_play`

- **HTTP:** `GET /fanduel/sportsbook/event/play-by-play`
- **What:** FanDuel Sportsbook live play-by-play. Returns an event's play-by-play feed. The `feed` object keeps the provider's sport-specific structure (drives and plays for football). `available` is false until play-by-play exists for the event.
- **Params:** `current` (boolean, optional) — Return only the play in progress (a much smaller payload for polling a live game); default false; `event_id` (integer, **required**) — Event id from any Sportsbook events listing

### `fanduel_sportsbook_event_players`

- **HTTP:** `GET /fanduel/sportsbook/event/players`
- **What:** FanDuel Sportsbook event teams and player roster. Returns the teams (names, abbreviations, colors, logos) and player roster (name, team, jersey number, position) the live-data provider holds for an event.
- **Params:** `event_id` (integer, **required**) — Event id from any Sportsbook events listing

### `fanduel_sportsbook_event_score`

- **HTTP:** `GET /fanduel/sportsbook/event/score`
- **What:** FanDuel Sportsbook live score and status. Returns an event's live status (`scheduled`, `inprogress`, ...), the data-availability flags for box score, play-by-play and quick bets, and the live score with the period breakdown and game clock once play has started.
- **Params:** `event_id` (integer, **required**) — Event id from any Sportsbook events listing

### `fanduel_sportsbook_event_stats`

- **HTTP:** `GET /fanduel/sportsbook/event/stats`
- **What:** FanDuel Sportsbook event betting splits and form. Returns one event's public betting split (share of bets and of money on each side of the spread) and each team's last five results, with team colors. Events without published stats return 404.
- **Params:** `event_id` (integer, **required**) — Event id from any Sportsbook events listing

### `fanduel_sportsbook_events_status`

- **HTTP:** `GET /fanduel/sportsbook/events/status`
- **What:** FanDuel Sportsbook events status. Returns the live state of up to 30 events in one call: `status` (for example `ACTIVE`), `game_phase` (for example `PRE_PLAY`) and the three logical clocks that change when prices, status or structure change, which makes it a cheap way to poll many events. Ids the Sportsbook does not know are listed in `not_found` instead of failing the call.
- **Params:** `event_id` (array, **required**) — Event ids, 1 to 30, repeated or comma-separated; `state` (string, optional) — Market code, including `on` for Ontario; default `nj`

### `fanduel_sportsbook_home`

- **HTTP:** `GET /fanduel/sportsbook/home`
- **What:** FanDuel Sportsbook homepage odds. Returns the Sportsbook homepage's featured events with their markets and current American, decimal and fractional odds, grouped by the homepage's tabs. Filter with `tab`, `competition_id` and `market_type`.
- **Params:** `competition_id` (integer, optional) — Keep only events of this competition id (from the response `competitions`); `exclude_markets` (boolean, optional) — Return events without their markets (a cheap event listing); `market_types` is still returned; `market_type` (string, optional) — Keep only these market types (repeat the parameter or comma-separate), for example `MONEY_LINE`. Valid values are listed in the response `market_types`; unmatched types return no markets; `state` (string, optional) — U.S. market to query (prices and offered markets differ by state); default nj; `tab` (string, optional) — Show only one tab of this page: a tab slug from the response `tabs[].slug` (the lowercase-hyphenated tab title, such as `games` or `player-props`). An unknown slug returns 400 listing the page's tabs

### `fanduel_sportsbook_league`

- **HTTP:** `GET /fanduel/sportsbook/league`
- **What:** FanDuel Sportsbook league page odds. Returns a featured league page (for example nfl, nba, mlb) with its events, markets and odds, grouped by the page's tabs such as Games, Player Props, Win Totals or Super Bowl. `custom_page_id` values come from the sports route's `popular_links`; an unknown id returns 404.
- **Params:** `competition_id` (integer, optional) — Keep only events of this competition id (from the response `competitions`); `custom_page_id` (string, **required**) — League page id such as `nfl`, `nba`, `mlb`, `ncaaf`, `ncaab`, `nhl`, `wnba`, `pga`, `ncaaw`. Tournament and event pages appear and disappear during the year, and a retired page returns 404; list the current ones with the sports route; `exclude_markets` (boolean, optional) — Return events without their markets (a cheap event listing); `market_types` is still returned; `market_type` (string, optional) — Keep only these market types (repeat the parameter or comma-separate), for example `MONEY_LINE`. Valid values are listed in the response `market_types`; unmatched types return no markets; `state` (string, optional) — U.S. market to query (prices and offered markets differ by state); default nj; `tab` (string, optional) — Show only one tab of this page: a tab slug from the response `tabs[].slug` (the lowercase-hyphenated tab title, such as `games` or `player-props`). An unknown slug returns 400 listing the page's tabs

### `fanduel_sportsbook_live`

- **HTTP:** `GET /fanduel/sportsbook/live`
- **What:** FanDuel Sportsbook live betting events. Returns events that are in play now for one sport, with their live markets and odds. `tabs` lists every sport with its live-event count (`live_count`); pass `event_type_id` to load another sport. Without it the Sportsbook's default sport is returned and reported in `event_type_id`.
- **Params:** `event_type_id` (string, optional) — Sport id: 6423 American Football; 1 Soccer; 7522 Basketball; 3 Golf; 7511 Baseball; 7524 Ice Hockey; 2 Tennis; 26420387 Mixed Martial Arts; 2593174 Table Tennis; 3503 Darts; 6 Boxing; 5 Rugby Union; 4 Cricket; 8 Motor Sport; 1477 Rugby League; 6422 Snooker; 468328 Handball; 28608997 Lacrosse; 998917 Volleyball, 4726642 Surfing, 10 Special Bets and 2378961 Politics; availability differs by market (Volleyball is also offered in NJ, PA, CO and AZ), and a sport a market does not offer returns 404; `exclude_markets` (boolean, optional) — Return events without their markets (a cheap event listing); `market_types` is still returned; `market_type` (string, optional) — Keep only these market types (repeat the parameter or comma-separate), for example `MONEY_LINE`. Valid values are listed in the response `market_types`; unmatched types return no markets; `state` (string, optional) — U.S. market to query (prices and offered markets differ by state); default nj

### `fanduel_sportsbook_live_count`

- **HTTP:** `GET /fanduel/sportsbook/live-count`
- **What:** FanDuel Sportsbook live event count. Returns the number of events in play in a market, the figure the Sportsbook's homepage shows beside its Live link. It differs by market (for example about 130 in NJ, 107 in PA, 36 in NY and 185 in Ontario on one afternoon) and moves as games start and end, which makes it a cheap way to watch activity. Use the `live` route to list the events.
- **Params:** `state` (string, optional) — Market code, including `on` for Ontario; default `nj`

### `fanduel_sportsbook_live_data`

- **HTTP:** `GET /fanduel/sportsbook/live-data`
- **What:** FanDuel Sportsbook live state for any sport. Returns live state for up to 20 events from the Sportsbook's in-play service, which covers every sport: tennis sets, games, points and server; soccer score, cards and corners; basketball and hockey period scores and remaining time, with live progress of player-prop markets where the sport has them. `details` keeps the provider's sport-specific structure; `home_score` and `away_score` are filled when the sport reports a single score. Scheduled events return `live: false`; ids with no entry are listed in `missing`.
- **Params:** `event_id` (string, **required**) — Event id from any Sportsbook events listing; repeat the parameter or comma-separate, 1 to 20 ids

### `fanduel_sportsbook_live_scores`

- **HTTP:** `GET /fanduel/sportsbook/live-scores`
- **What:** FanDuel Sportsbook live scores and stats for many events. Returns the live score and stats of up to 100 events in one call, from the Sportsbook's game-state service. Each event has `home_score` and `away_score`, the `period` and `current_period`, the time left in the period (`period_remaining_milliseconds`, basketball), the available `media_types` (for example `LIVE_VIDEO`, `MATCH_STATS`) and a sport-specific `details` block with per-period points, cards, corners or a timeline. `sport` is the Sportsbook's own name for the details block, in which `football` is soccer and `americanFootball` is the NFL and college football. An event the service has no live state for is listed in `not_found` instead of failing the call; use `event/score`, `event/box-score` and `event/play-by-play` for one event in depth.
- **Params:** `event_id` (array, **required**) — Event ids, 1 to 100, repeated or comma-separated; `state` (string, optional) — Market code, including `on` for Ontario; default `nj`

### `fanduel_sportsbook_market_prices`

- **HTTP:** `GET /fanduel/sportsbook/market-prices`
- **What:** FanDuel Sportsbook current market prices. Refreshes the current prices of up to 70 markets by market id, using the price feed the Sportsbook itself polls. Returns each market's status and every selection's American, decimal and fractional odds in the order requested; market ids the Sportsbook returns nothing for are listed in `missing`. Get market ids from the event and page routes (`markets[].market_id`).
- **Params:** `market_id` (string, **required**) — Market id such as `734.191539418`; repeat the parameter or comma-separate, 1 to 70 ids; `state` (string, optional) — U.S. market to query (prices and offered markets differ by state); default nj

### `fanduel_sportsbook_parlays`

- **HTTP:** `GET /fanduel/sportsbook/parlays`
- **What:** FanDuel Sportsbook Parlay Hub. Returns the Sportsbook's Parlay Hub: popular parlays, same-game parlays (SGP) and SGP+ combinations, each with the number of tickets placed on it (`total_bets`), combined odds, the legs and an editor's narrative when there is one. `view` picks the list: `popular` (the homepage list), `all` (every card, filterable by `type`), `next-to-start` (grouped by the events starting soonest) or `event` (popular cards for one event). The Sportsbook returns at most 50 cards per request. `filters` lists the competition groups its own filter bar offers. A request returns at most 50 cards (`card_cap`); `truncated` is true when it filled that cap, and narrower `type`, sport, competition or decimal-odds filters reveal the cards beyond it.
- **Params:** `competition_id` (string, optional) — Competition filter for `view=all` and `view=next-to-start` (repeat or comma-separate, up to 20 ids); the groups in the response `filters` list valid ids; `event_id` (integer, optional) — Event id, required for `view=event` and rejected otherwise; `event_type_id` (string, optional) — Sport filter for `view=all` and `view=next-to-start`: 6423 American Football; 1 Soccer; 7522 Basketball; 3 Golf; 7511 Baseball; 7524 Ice Hockey; 2 Tennis; 26420387 Mixed Martial Arts; 2593174 Table Tennis; 3503 Darts; 6 Boxing; 5 Rugby Union; 4 Cricket; 8 Motor Sport; 1477 Rugby League; 6422 Snooker; 468328 Handball; 28608997 Lacrosse; 998917 Volleyball, 4726642 Surfing, 10 Special Bets and 2378961 Politics; availability differs by market (Volleyball is also offered in NJ, PA, CO and AZ), and a sport a market does not offer returns 404; `max_odds` (number, optional) — Maximum combined decimal odds (1.01 to 10000) for `view=all` and `view=next-to-start`; `min_odds` (number, optional) — Minimum combined decimal odds (1.01 to 10000) for `view=all` and `view=next-to-start`; `state` (string, optional) — Market to query; default nj; `type` (string, optional) — Card type filter for `view=all` (repeat or comma-separate): `PARLAY` (multi-event parlay), `SGP` (same-game parlay), `SGP_PLUS` (SGP combined across games); `view` (string, optional) — Which list: `popular` (default), `all`, `next-to-start` or `event`

### `fanduel_sportsbook_player`

- **HTTP:** `GET /fanduel/sportsbook/player`
- **What:** FanDuel Sportsbook player overview. Returns a player's overview page: name, position, team, the season, and recent news with the player's updates. NFL players also carry `season_totals` and a `game_log`; NBA players carry `stats` (career and per-season lines) and `projections`. Available for NFL and NBA players; an unknown player id, or a player newly added to a roster whose page is still empty, returns 404.
- **Params:** `league` (string, **required**) — League: `nfl`, `nba`; `player` (string, **required**) — Player slug ending in its id, such as `josh-allen-53775`; take it from the `players` route (`players[].slug`) or `team/roster` (`players[].slug`)

### `fanduel_sportsbook_player_news`

- **HTTP:** `GET /fanduel/sportsbook/player/news`
- **What:** FanDuel Sportsbook player news. Returns a page of a player's news (title, summary, author, time, link). Without `cursor` it is the player page's own first 15 articles; while `has_more` is true, pass `next_cursor` as `cursor` to continue, 1 to 50 articles at a time (default 25). Available for NFL and NBA players; a player with no coverage returns an empty list.
- **Params:** `cursor` (string, optional) — Continue from the previous response's `next_cursor`; omit for the first page; `league` (string, **required**) — League: `nfl`, `nba`; `limit` (integer, optional) — Articles per page after the first, 1 to 50; default 25. Only valid together with `cursor`; `player` (string, **required**) — Player slug ending in its id, such as `josh-allen-53775`; take it from the `players` route (`players[].slug`) or `team/roster` (`players[].slug`)

### `fanduel_sportsbook_player_props`

- **HTTP:** `GET /fanduel/sportsbook/player/props`
- **What:** FanDuel Sportsbook player props. Returns a player's prop markets for upcoming games, with event, market and selection ids and the current odds of each selection. A player with no listed props returns an empty `events` list. Available for NFL and NBA players.
- **Params:** `league` (string, **required**) — League: `nfl`, `nba`; `player` (string, **required**) — Player slug ending in its id, such as `josh-allen-53775`; take it from the `players` route (`players[].slug`) or `team/roster` (`players[].slug`)

### `fanduel_sportsbook_player_stats`

- **HTTP:** `GET /fanduel/sportsbook/player/stats`
- **What:** FanDuel Sportsbook player statistics. Returns a player's career and per-season statistics. The groups differ by sport (NFL: career rows plus regular-season and post-season weeks; NBA: regular-season and playoff careers plus preseason, regular-season and play-in seasons) and are passed through with snake_case keys. Available for NFL and NBA players.
- **Params:** `league` (string, **required**) — League: `nfl`, `nba`; `player` (string, **required**) — Player slug ending in its id, such as `josh-allen-53775`; take it from the `players` route (`players[].slug`) or `team/roster` (`players[].slug`)

### `fanduel_sportsbook_players`

- **HTTP:** `GET /fanduel/sportsbook/players`
- **What:** FanDuel Sportsbook player directory. Searches the players that have Sportsbook player pages: about 2,400 in the NFL and 480 in the NBA. Each entry has the `slug` that the player routes take, the numeric `player_id` and a `name` spelled from the slug (without punctuation or accents; `team/roster` has the exact spelling). `q` matches every word against the slug, results are in slug order, and `total` counts all matches so `limit` and `offset` can page through them.
- **Params:** `league` (string, **required**) — League: `nfl`, `nba`; `limit` (integer, optional) — Players per page, 1 to 200; default 50; `offset` (integer, optional) — Players to skip; default 0; `q` (string, optional) — Words to find in the player name, such as `josh allen`; omit to list everyone

### `fanduel_sportsbook_promotions`

- **HTTP:** `GET /fanduel/sportsbook/promotions`
- **What:** FanDuel Sportsbook promotions. Lists the public promotions the Sportsbook shows to an anonymous visitor on its homepage, a league page or a sport page, with each promotion's tags, offer link, end time and artwork, and the carousel placement that orders them. Offers differ by `state` and by page. `tags` is the census of promotion tags on the page and is always unfiltered, so valid `tag` values are discoverable.
- **Params:** `context` (string, optional) — Which page's promotions: `home` (default), `league` or `sport`; `custom_page_id` (string, optional) — League page id, required for `context=league` (for example `nfl`); `event_type_id` (string, optional) — Sport id, required for `context=sport`: 6423 American Football; 1 Soccer; 7522 Basketball; 3 Golf; 7511 Baseball; 7524 Ice Hockey; 2 Tennis; 26420387 Mixed Martial Arts; 2593174 Table Tennis; 3503 Darts; 6 Boxing; 5 Rugby Union; 4 Cricket; 8 Motor Sport; 1477 Rugby League; 6422 Snooker; 468328 Handball; 28608997 Lacrosse; 998917 Volleyball, 4726642 Surfing, 10 Special Bets and 2378961 Politics; availability differs by market (Volleyball is also offered in NJ, PA, CO and AZ), and a sport a market does not offer returns 404; `state` (string, optional) — Market to query (offers differ by state); default nj; `tag` (string, optional) — Keep only promotions with one of these tags (repeat the parameter or comma-separate), for example `nfl` or `basketball`; valid tags are listed in the response `tags`

### `fanduel_sportsbook_schedule`

- **HTTP:** `GET /fanduel/sportsbook/schedule`
- **What:** FanDuel Sportsbook league schedule. Returns a league's games with teams, start time, status, venue, broadcast network and scores. The NFL is selected by `week` (default: the current week; the response lists every week id in `weeks`) or by `date` and `end_date`; college football by `date` and `end_date` (default: today, UTC); the NBA and MLB by `date` (default: today, UTC). Available for the NFL, NBA, MLB and college football.
- **Params:** `date` (string, optional) — First day as `YYYY-MM-DD`. Required form for the NBA and MLB (default today, UTC); optional for the NFL and college football; `end_date` (string, optional) — NFL and college football only: last day as `YYYY-MM-DD`, at most 31 days after `date`; default is `date` alone; `league` (string, **required**) — League: `nfl`, `nba`, `mlb`, `college-football`; `week` (string, optional) — NFL only: week id from the response `weeks` list, such as `7`; default is the current week. Cannot be combined with `date`

### `fanduel_sportsbook_search`

- **HTTP:** `GET /fanduel/sportsbook/search`
- **What:** FanDuel Sportsbook search. Searches the Sportsbook's events and competitions by text (team, player-event or league names such as `lakers` or `nfl`). Events come back in the search index's relevance order with the sport, competition and start time; competitions come back with a match count. Use the returned `event_id` and `competition_id` with the event and competition routes.
- **Params:** `event_type_id` (string, optional) — Limit results to one sport: 6423 American Football; 1 Soccer; 7522 Basketball; 3 Golf; 7511 Baseball; 7524 Ice Hockey; 2 Tennis; 26420387 Mixed Martial Arts; 2593174 Table Tennis; 3503 Darts; 6 Boxing; 5 Rugby Union; 4 Cricket; 8 Motor Sport; 1477 Rugby League; 6422 Snooker; 468328 Handball; 28608997 Lacrosse; 998917 Volleyball, 4726642 Surfing, 10 Special Bets and 2378961 Politics; availability differs by market (Volleyball is also offered in NJ, PA, CO and AZ), and a sport a market does not offer returns 404; `limit` (integer, optional) — Maximum events returned, 1 to 50; default 20; `q` (string, **required**) — Search text, 2 to 100 characters; `state` (string, optional) — U.S. market to query (prices and offered markets differ by state); default nj; `type` (string, optional) — What to search: `all` (events and competitions), `event` or `competition`; default all

### `fanduel_sportsbook_search_tabs`

- **HTTP:** `GET /fanduel/sportsbook/search/tabs`
- **What:** FanDuel Sportsbook grouped search. Returns the Sportsbook's own search results, grouped into sport tabs (for example `Basketball`, `Ice Hockey`, `American Football`) and 20 per page. `tabs` lists the sports that have matches and the selected one is returned in `tab`; pass a tab title as `tab` to read another sport. A query without `tab` also lists competition `pills` for the selected sport, and passing `pill` with `tab` keeps only that competition. `found` counts the matches in the selected tab (and pill), `total_results` the matches across the whole query, and `next_start_index` is the `start_index` of the next page while more remain. Events and competitions are returned without markets; use the `search` route for markets.
- **Params:** `pill` (string, optional) — Competition title from the response `pills[].title`, such as `NBA`; needs `tab`; `q` (string, **required**) — Search text, 3 to 100 characters, without `<` or `>`; `start_index` (integer, optional) — Index of the first result, 0 to 9999, in steps of 20; default 0; `state` (string, optional) — Market code, including `on` for Ontario; default `nj`; `tab` (string, optional) — Sport tab title from a previous response's `tabs[].title`, such as `Basketball`; default is the tab with the most relevant matches; `timezone` (string, optional) — IANA time zone for result times, such as `America/New_York`; default `UTC`

### `fanduel_sportsbook_sport`

- **HTTP:** `GET /fanduel/sportsbook/sport`
- **What:** FanDuel Sportsbook sport page odds. Returns every league, event and market the Sportsbook shows for one sport, with current odds, grouped by the sport page's tabs. Get `event_type_id` from the sports route.
- **Params:** `competition_id` (integer, optional) — Keep only events of this competition id (from the response `competitions`); `event_type_id` (string, **required**) — Sport id: 6423 American Football; 1 Soccer; 7522 Basketball; 3 Golf; 7511 Baseball; 7524 Ice Hockey; 2 Tennis; 26420387 Mixed Martial Arts; 2593174 Table Tennis; 3503 Darts; 6 Boxing; 5 Rugby Union; 4 Cricket; 8 Motor Sport; 1477 Rugby League; 6422 Snooker; 468328 Handball; 28608997 Lacrosse; 998917 Volleyball, 4726642 Surfing, 10 Special Bets and 2378961 Politics; availability differs by market (Volleyball is also offered in NJ, PA, CO and AZ), and a sport a market does not offer returns 404; `exclude_markets` (boolean, optional) — Return events without their markets (a cheap event listing); `market_types` is still returned; `market_type` (string, optional) — Keep only these market types (repeat the parameter or comma-separate), for example `MONEY_LINE`. Valid values are listed in the response `market_types`; unmatched types return no markets; `state` (string, optional) — U.S. market to query (prices and offered markets differ by state); default nj; `tab` (string, optional) — Show only one tab of this page: a tab slug from the response `tabs[].slug` (the lowercase-hyphenated tab title, such as `games` or `player-props`). An unknown slug returns 400 listing the page's tabs

### `fanduel_sportsbook_sports`

- **HTTP:** `GET /fanduel/sportsbook/sports`
- **What:** FanDuel Sportsbook sports and league pages. Returns the Sportsbook's navigation: the sports with their `event_type_id` (the set a market offers changes: on 2026-10-24 NJ and CO listed 19, PA and AZ 18, NY only 12, and Ontario 22 on 2026-10-23), the featured league pages (each with the `custom_page_id` accepted by the league route), quick links, teaser-bet competitions, and the 28 supported markets (27 U.S. states and Ontario, `state`) the other routes can query. Use it to discover valid `event_type_id` and `custom_page_id` values.
- **Params:** `state` (string, optional) — U.S. market to query (prices and offered markets differ by state); default nj

### `fanduel_sportsbook_standings`

- **HTTP:** `GET /fanduel/sportsbook/standings`
- **What:** FanDuel Sportsbook league standings. Returns a league's standings, one row per team with the team's identity and the record groups the Sportsbook shows for that league: conference, division and league rankings with home, road and streak records (NFL and NBA), games back, last ten and home and away records (MLB), or conference record, points and AP ranking (college football). Available for the NFL, NBA, MLB and college football.
- **Params:** `league` (string, **required**) — League: `nfl`, `nba`, `mlb`, `college-football`

### `fanduel_sportsbook_stats`

- **HTTP:** `GET /fanduel/sportsbook/stats`
- **What:** FanDuel Sportsbook betting splits and form for upcoming events. Lists every event the Sportsbook currently publishes stats for: the share of bets and of money wagered on each side of the spread, and each team's last five results. Filter to one competition with `competition_id`.
- **Params:** `competition_id` (integer, optional) — Keep only this competition id (for example 12282733 for the NFL)

### `fanduel_sportsbook_team_depth_chart`

- **HTTP:** `GET /fanduel/sportsbook/team/depth-chart`
- **What:** FanDuel Sportsbook team depth chart. Returns a team's depth chart (rank, position, college, age and draft details) and its statistical leaders. Available for the NFL only; other leagues return 400 listing their pages.
- **Params:** `league` (string, **required**) — League: `nfl`, `nba`, `mlb`, `college-football`, `college-basketball`; `team` (string, **required**) — Team slug from the `teams` route (`groups[].teams[].slug`), such as `arizona-cardinals`

### `fanduel_sportsbook_team_news`

- **HTTP:** `GET /fanduel/sportsbook/team/news`
- **What:** FanDuel Sportsbook team news. Returns a page of a team's news (title, summary, author, time, link) and player updates. Without `cursor` it is the team page's own first 15 articles. While `has_more` is true, pass the response's `next_cursor` as `cursor` to continue through the archive, 1 to 50 articles at a time (default 25); an NFL team has more than 1,000. Teams in MLB and the college leagues currently have no news, which returns an empty list.
- **Params:** `cursor` (string, optional) — Continue from the previous response's `next_cursor`; omit for the first page; `league` (string, **required**) — League: `nfl`, `nba`, `mlb`, `college-football`, `college-basketball`; `limit` (integer, optional) — Articles per page after the first, 1 to 50; default 25. Only valid together with `cursor`; `team` (string, **required**) — Team slug from the `teams` route (`groups[].teams[].slug`), such as `arizona-cardinals`

### `fanduel_sportsbook_team_odds`

- **HTTP:** `GET /fanduel/sportsbook/team/odds`
- **What:** FanDuel Sportsbook team odds page. Returns a team's odds page: futures prices for its league's championship (Super Bowl, NBA Finals, World Series, national championship), its upcoming games with money line, spread and total for both sides, and player props with selection ids and odds. Available for every league; props appear for the NFL and NBA only.
- **Params:** `league` (string, **required**) — League: `nfl`, `nba`, `mlb`, `college-football`, `college-basketball`; `team` (string, **required**) — Team slug from the `teams` route (`groups[].teams[].slug`), such as `arizona-cardinals`

### `fanduel_sportsbook_team_roster`

- **HTTP:** `GET /fanduel/sportsbook/team/roster`
- **What:** FanDuel Sportsbook team roster and injuries. Returns a team's roster with each player's roster `status` (for example `ACT`, `PRA`, `IR`, `IRD`, `UFA`, `TWO-WAY`) and `injury_status` (observed `Q` and `O`; empty when healthy). `statuses`, `injury_statuses` and `positions` count the whole roster so valid filter values are discoverable. Available for the NFL and NBA only.
- **Params:** `injured_only` (boolean, optional) — Return only players with an injury designation; default false; `league` (string, **required**) — League: `nfl`, `nba`, `mlb`, `college-football`, `college-basketball`; `position` (string, optional) — Keep only this position code, such as `QB`; valid codes are listed in the response `positions`; `status` (string, optional) — Keep only this roster status code, such as `IR`; valid codes are listed in the response `statuses`; `team` (string, **required**) — Team slug from the `teams` route (`groups[].teams[].slug`), such as `arizona-cardinals`

### `fanduel_sportsbook_team_schedule`

- **HTTP:** `GET /fanduel/sportsbook/team/schedule`
- **What:** FanDuel Sportsbook team schedule and results. Returns a team's schedule by season block (preseason, regular season) with opponent, venue, home/away, result and opponent record, plus its previous and next game. Available for the NFL and NBA only.
- **Params:** `league` (string, **required**) — League: `nfl`, `nba`, `mlb`, `college-football`, `college-basketball`; `team` (string, **required**) — Team slug from the `teams` route (`groups[].teams[].slug`), such as `arizona-cardinals`

### `fanduel_sportsbook_team_stats`

- **HTTP:** `GET /fanduel/sportsbook/team/stats`
- **What:** FanDuel Sportsbook team statistics. Returns a team's season statistics. The groups differ by sport (scoring, offense, defense and special teams for the NFL; totals and averages for the NBA), so `stats` is an object with snake_case keys. Available for the NFL and NBA only.
- **Params:** `league` (string, **required**) — League: `nfl`, `nba`, `mlb`, `college-football`, `college-basketball`; `team` (string, **required**) — Team slug from the `teams` route (`groups[].teams[].slug`), such as `arizona-cardinals`

### `fanduel_sportsbook_teams`

- **HTTP:** `GET /fanduel/sportsbook/teams`
- **What:** FanDuel Sportsbook team index. Lists a league's teams grouped by conference or division, each with its season record against the spread, on the money line and on the over/under, its colors, head coach where published, and its next game. `sections` lists the team pages the league has (all six for the NFL; odds and news only for MLB and the college leagues). Team `slug` values feed the other team routes.
- **Params:** `league` (string, optional) — League: `nfl` (default), `nba`, `mlb`, `college-football`, `college-basketball`

### `fanduel_sportsbook_trending`

- **HTTP:** `GET /fanduel/sportsbook/trending`
- **What:** FanDuel Sportsbook trending searches. Returns the terms the Sportsbook's search box shows as trending (about ten players, teams and clubs). With `enriched=true` each term is resolved to the event it points at, with the competition, event name and id, entity type (for example `PLAYER`), image and the time the entry expires. The list was identical in every market tested, so the route takes no state.
- **Params:** `enriched` (boolean, optional) — Resolve each term to its event, competition and entity; default false

## Flashscore (4)

### `flashscore_match_odds`

- **HTTP:** `GET /flashscore/match-odds`
- **What:** Flashscore match bookmaker odds comparison. Returns bookmaker odds for a match in one viewer market, grouped by betting type and scope with every bookmaker's priced outcomes, opening odds, handicap or total lines, and a selection label. Bookmakers and prices depend on the market, so pick geo (and subdivision for US or CA) from flashscore-odds-geos. A market with no licensed bookmakers returns empty lists. Promotional bonus text is not included.
- **Params:** `betting_type` (string, optional) — Optional filter to one betting type; `geo` (string, optional) — Viewer market country code from flashscore-odds-geos; defaults to GB; `id` (string, **required**) — Eight-character Flashscore match id; `scope` (string, optional) — Optional filter to one scope; `subdivision` (string, optional) — US state (with geo US) or Canadian province (with geo CA) code from flashscore-odds-geos; rejected with any other geo

### `flashscore_odds_geos`

- **HTTP:** `GET /flashscore/odds-geos`
- **What:** Flashscore odds markets, subdivisions and odds enums. Lists every country code accepted by flashscore-match-odds and flashscore-match-tv (with whether bookmakers were found for it when verified), the US states and Canadian provinces that change the bookmaker list, and every betting type, scope and handicap type that can appear in odds responses.
- **Params:** _none_

### `flashscore_team_outright_odds`

- **HTTP:** `GET /flashscore/team-outright-odds`
- **What:** Flashscore team title odds. Returns the title odds bookmakers list for a team in one viewer market, grouped by the competitions it is priced in (league, cup, European competition) with every bookmaker's price and last movement. Pick geo (and subdivision for US or CA) from flashscore-odds-geos. A team with no listed title odds returns empty lists; a player id returns not found.
- **Params:** `geo` (string, optional) — Viewer market country code from flashscore-odds-geos; defaults to GB; `id` (string, **required**) — Eight-character Flashscore team id; `subdivision` (string, optional) — US state (with geo US) or Canadian province (with geo CA) code from flashscore-odds-geos; rejected with any other geo

### `flashscore_tournament_outright_odds`

- **HTTP:** `GET /flashscore/tournament-outright-odds`
- **What:** Flashscore competition winner odds. Returns the title odds bookmakers list for one competition season in one viewer market, grouped by participant with every bookmaker's price and last movement. The provider lists only the top favourites (three in every competition checked), so this is a favourites market, not the full field. Bookmakers depend on the market: pick geo (and subdivision for US or CA) from flashscore-odds-geos. A market with no listed odds returns empty lists. Use the season-level tournament_id from event competition blocks or flashscore-tournament-archive-seasons.
- **Params:** `geo` (string, optional) — Viewer market country code from flashscore-odds-geos; defaults to GB; `subdivision` (string, optional) — US state (with geo US) or Canadian province (with geo CA) code from flashscore-odds-geos; rejected with any other geo; `tournament_id` (string, **required**) — Eight-character season-level tournament id (tournament_id of an event competition block or of a season)

## SofaScore (109)

### `sofascore_categories`

- **HTTP:** `GET /sofascore/categories`
- **What:** SofaScore categories for a sport. Returns every category (country or region, such as England or International) SofaScore lists for a sport, with id, name, slug, flag, optional two-letter code, and priority, highest priority first. Use a category `id` with category-tournaments (its competitions) and with scheduled-events (its fixtures on a date). The `sport` enum accepts `american-football`, `aussie-rules`, `badminton`, `bandy`, `baseball`, `basketball`, `beach-volley`, `cricket`, `darts`, `esports`, `floorball`, `football`, `futsal`, `handball`, `ice-hockey`, `mma`, `minifootball`, `padel`, `rugby`, `snooker`, `table-tennis`, `tennis`, `volleyball`, and `waterpolo`. Slugs are not unique across categories, so identify a category by `id`.
- **Params:** `sport` (string, **required**) — Sport key

### `sofascore_category_tournaments`

- **HTTP:** `GET /sofascore/category-tournaments`
- **What:** SofaScore competitions in a category. Returns the competitions (unique tournaments) inside one category, most followed first. Each `id` is the competition id the tournament-seasons, standings, tournament-rounds, and round-events endpoints take. Get the category `id` from the categories endpoint. An empty `tournaments` list is a valid response: some categories exist without any competitions. Returns 404 for an unknown category id.
- **Params:** `id` (string, **required**) — Numeric SofaScore category id from the categories endpoint

### `sofascore_draft`

- **HTTP:** `GET /sofascore/draft`
- **What:** SofaScore league draft. Returns the draft attached to a league season: the upcoming or just-held `draft` and the `previous_draft`, each with its year, start and end time, status, the draft `rounds` (the valid `round` values for draft-picks) and whether the lottery is complete. The `league` enum accepts `nba` and `nfl`. Get `season` from tournament-seasons (NBA competition id 132, NFL 9464). A season without a draft, or a season id that does not belong to the league, returns 404. A season whose draft is not scheduled yet returns only `previous_draft`.
- **Params:** `league` (string, **required**) — League whose draft to return; `season` (string, **required**) — Numeric SofaScore season id of the league

### `sofascore_draft_picks`

- **HTTP:** `GET /sofascore/draft-picks`
- **What:** SofaScore league draft picks. Returns one round of a league draft: each pick with the overall and in-round number, the drafting team, and the drafted prospect (name, position, college or club, top-prospect flag and the player id when SofaScore has one), plus the teams that hold no pick in that round. The `league` enum accepts `nba` (rounds 1 and 2) and `nfl` (rounds 1 to 7); other rounds return 400. Get `year` from the draft endpoint's `draft.year` and `previous_draft.year`; SofaScore keeps only recent drafts, so an older year returns 404. Returns 404 when SofaScore has no picks for that year and round.
- **Params:** `league` (string, **required**) — League whose draft to return; `round` (integer, **required**) — Draft round: 1 to 2 for nba, 1 to 7 for nfl; `year` (string, **required**) — Four-digit draft year

### `sofascore_esports_game`

- **HTTP:** `GET /sofascore/esports-game`
- **What:** SofaScore esports game detail. Returns one resource of one esports game from SofaScore, chosen with `part`: `statistics` (team totals such as kills, towers and barracks for Dota 2, gold and drakes for League of Legends), `lineups` (every player with hero or champion and per-player statistics such as net worth, gold or ADR), `bans` (banned heroes or champions per side) and `rounds` (Counter-Strike round history with outcome, winner and side per round, including overtime). Only the requested block is returned. Get the game id from sofascore-event-esports-games. Statistics and bans exist for Dota 2 and League of Legends only (404 for Counter-Strike), rounds fill for Counter-Strike only (an empty list otherwise) and lineups work for all three. Returns 404 when SofaScore has no such data for the game.
- **Params:** `id` (string, **required**) — Numeric SofaScore esports game id from sofascore-event-esports-games; `part` (string, **required**) — Which resource of the game to return

### `sofascore_event`

- **HTTP:** `GET /sofascore/event`
- **What:** SofaScore event detail. Returns one SofaScore match by event id: home and away teams and scores, status, start time, tournament, attendance and winner code, plus venue and referee when SofaScore has them. An unknown or malformed id surfaces as an upstream error.
- **Params:** `id` (string, **required**) — Numeric SofaScore event (match) id

### `sofascore_event_at_bat_pitches`

- **HTTP:** `GET /sofascore/event-at-bat-pitches`
- **What:** SofaScore event at-bat pitches. Returns every pitch of one baseball at-bat from SofaScore, in pitch order: the ball-strike-out count, outcome code, pitch type and name, speed in kilometres per hour, zone, plate location, strike-zone bounds, batter and pitcher hand, the score, and for balls put in play the hit type, trajectory, hardness and location plus runner movements and fielder credits. Get the at-bat id (`at_bat_id`) from sofascore-event-at-bats for the same event. Returns 404 when SofaScore has no pitches for that at-bat, which includes an at-bat id that does not belong to the event.
- **Params:** `at_bat_id` (string, **required**) — Numeric at-bat id from sofascore-event-at-bats for the same event; `id` (string, **required**) — Numeric SofaScore baseball event (match) id

### `sofascore_event_at_bats`

- **HTTP:** `GET /sofascore/event-at-bats`
- **What:** SofaScore event at-bats. Returns a baseball match's at-bat timeline from SofaScore, in play order: for each plate appearance the inning and half (`top` or `bottom`), pitcher, hitter, their teams, when it ended and the home and away win probabilities before and after it. Use an at-bat `id` with sofascore-event-at-bat-pitches to read its pitches. Returns 404 when SofaScore has no at-bat data for the match, which includes matches that have not started and sports other than baseball.
- **Params:** `id` (string, **required**) — Numeric SofaScore baseball event (match) id

### `sofascore_event_average_positions`

- **HTTP:** `GET /sofascore/event-average-positions`
- **What:** SofaScore event average positions. Returns every player's average position on the pitch during a football match (`average_x` and `average_y` on SofaScore's 0-100 pitch scale, plus the number of touches behind it) for the home and away sides, and the substitutions with their minute. Returns 404 when SofaScore has no positional data for the match, which includes unstarted matches and sports other than football.
- **Params:** `id` (string, **required**) — Numeric SofaScore event (match) id

### `sofascore_event_baseball_top_performers`

- **HTTP:** `GET /sofascore/event-baseball-top-performers`
- **What:** SofaScore event baseball top performers. Returns a baseball match's top performers from SofaScore: each pitcher or batter (`role`) with a rating, their team and a snake_case map of the statistics that earned the mention (for example pitching strike outs, batting home runs and runs batted in). Returns 404 when SofaScore has no top performers for the match, which includes matches that have not started and sports other than baseball.
- **Params:** `id` (string, **required**) — Numeric SofaScore baseball event (match) id

### `sofascore_event_best_players`

- **HTTP:** `GET /sofascore/event-best-players`
- **What:** SofaScore event best players. Returns a match's best-rated players per side, the overall top-rated list, and the player of the match (each with team and value) from SofaScore. Covers football (value is the match rating, label `rating`) and ice hockey (label `pts`, value the points scored; a goalkeeper with no points has no numeric `value` and carries SofaScore's dash in `value_text`). The basketball, baseball and tennis matches checked returned no summary. Returns 404 when SofaScore has no best-players summary for the match, which includes matches that have not started, sports without one and fixtures without rated players.
- **Params:** `id` (string, **required**) — Numeric SofaScore event (match) id

### `sofascore_event_comments`

- **HTTP:** `GET /sofascore/event-comments`
- **What:** SofaScore event commentary. Returns a match's text commentary (minute, type, text, and the players involved, plus the running score on scoring lines) from SofaScore, newest first. Works for football and basketball matches that have commentary. An empty `comments` list is a valid response (a live match with no lines yet). Returns 404 when SofaScore has no commentary for the match, which includes matches that have not started.
- **Params:** `id` (string, **required**) — Numeric SofaScore event (match) id

### `sofascore_event_esports_games`

- **HTTP:** `GET /sofascore/event-esports-games`
- **What:** SofaScore event esports games. Returns the games (maps) of an esports match from SofaScore: each game's id, status, start time, length in seconds, winner, score per side (kills for Dota 2 and League of Legends, rounds with half and overtime split for Counter-Strike), the map for Counter-Strike, and whether complete statistics exist. Use a game `id` with sofascore-esports-game to read its statistics, lineups, bans or rounds. Returns 404 when SofaScore has no games for the event, which includes sports other than esports.
- **Params:** `id` (string, **required**) — Numeric SofaScore esports event (match) id

### `sofascore_event_graph`

- **HTTP:** `GET /sofascore/event-graph`
- **What:** SofaScore event momentum graph. Returns a match's momentum graph as minute and value points (positive values favour the home side) plus period length information, from SofaScore. Covers football, ice hockey and basketball. An empty `points` list is a valid response (a live match that has just started). Returns 404 when SofaScore has no momentum graph for the match, which includes matches that have not started and sports without one such as tennis and baseball.
- **Params:** `id` (string, **required**) — Numeric SofaScore event (match) id

### `sofascore_event_h2h`

- **HTTP:** `GET /sofascore/event-h2h`
- **What:** SofaScore event head-to-head. Returns the historical head-to-head win/draw record between a match's two teams (and managers, when available) from SofaScore.
- **Params:** `id` (string, **required**) — Numeric SofaScore event (match) id

### `sofascore_event_highlights`

- **HTTP:** `GET /sofascore/event-highlights`
- **What:** SofaScore event highlights. Returns the highlight videos attached to a match: title, subtitle (for example `Full Highlights`), video `url`, thumbnail, the publish time, whether it is the key highlight, and the countries it is restricted to when SofaScore limits it. `media_type_code` is SofaScore's own numeric code and is returned untranslated. Returns 404 when the match has no highlight videos, which includes matches that have not finished.
- **Params:** `id` (string, **required**) — Numeric SofaScore event (match) id

### `sofascore_event_incidents`

- **HTTP:** `GET /sofascore/event-incidents`
- **What:** SofaScore event incidents. Returns one match's goal, card, substitution, and period timeline from SofaScore. An empty `incidents` list is a valid response before kickoff.
- **Params:** `id` (string, **required**) — Numeric SofaScore event (match) id

### `sofascore_event_innings`

- **HTTP:** `GET /sofascore/event-innings`
- **What:** SofaScore event innings. Returns a cricket match's innings scorecards from SofaScore. Each innings has the batting and bowling teams, runs, wickets, overs in cricket notation (18.4 is 18 overs and 4 balls), extras (wides, no balls, byes, leg byes, penalty), every batter's line (runs, balls, fours, sixes, dismissal with the bowler and fielder, fall-of-wicket score and over), every bowler's figures (overs, maidens, runs, wickets, wides, no balls), the partnerships and a derived fall-of-wickets list. Works for T20, one-day and Test matches (a Test lists up to four innings). Returns 404 when SofaScore has no innings data for the match, which includes matches that have not started and sports other than cricket.
- **Params:** `id` (string, **required**) — Numeric SofaScore cricket event (match) id

### `sofascore_event_lineups`

- **HTTP:** `GET /sofascore/event-lineups`
- **What:** SofaScore event lineups. Returns one match's starting XI and substitutes per side, with formation. Returns 404 when SofaScore has no lineups for the match. A missing-lineup result may be reused for up to two minutes before checking again.
- **Params:** `id` (string, **required**) — Numeric SofaScore event (match) id

### `sofascore_event_managers`

- **HTTP:** `GET /sofascore/event-managers`
- **What:** SofaScore event managers. Returns the two managers (coaches) of a match with their SofaScore ids, names and slugs. The manager `id` works with the manager and manager-events endpoints. Returns 404 when SofaScore lists no managers for the match, which includes tennis matches.
- **Params:** `id` (string, **required**) — Numeric SofaScore event (match) id

### `sofascore_event_odds`

- **HTTP:** `GET /sofascore/event-odds`
- **What:** SofaScore event odds. Returns one match's betting markets and choices. Returns 404 when SofaScore has no odds for the match.
- **Params:** `id` (string, **required**) — Numeric SofaScore event (match) id

### `sofascore_event_player_heatmap`

- **HTTP:** `GET /sofascore/event-player-heatmap`
- **What:** SofaScore event player heatmap. Returns one player's touch locations in a football match as `points`, each an `x` and `y` on SofaScore's 0-100 pitch scale. Get `player_id` from event-lineups. Returns 404 when SofaScore has no heatmap for that player in that match, which includes players who did not play, unstarted matches and sports other than football.
- **Params:** `id` (string, **required**) — Numeric SofaScore event (match) id; `player_id` (string, **required**) — Numeric SofaScore player id that played in the match

### `sofascore_event_player_statistics`

- **HTTP:** `GET /sofascore/event-player-statistics`
- **What:** SofaScore event player statistics. Returns one player's statistics inside one football match (minutes, rating, passes, duels, shots, expected goals, and more) as a snake_case metric map. The set of metrics depends on the player's position, so absent metrics are omitted rather than zero. Get `player_id` from event-lineups. Returns 404 when SofaScore has no statistics for that player in that match.
- **Params:** `id` (string, **required**) — Numeric SofaScore event (match) id; `player_id` (string, **required**) — Numeric SofaScore player id that took part in the match

### `sofascore_event_point_by_point`

- **HTTP:** `GET /sofascore/event-point-by-point`
- **What:** SofaScore event point-by-point. Returns a racket-sport match's point-by-point timeline, with sets and games in play order. Tennis sets list games and each game lists every point with the running score (`0`, `15`, `30`, `40`, `A`, or a plain count in a tie-break), the server, the game winner, a `description` of `ace` or `double_fault` where SofaScore flags it, and break point (`break_point`) or set or match point (`set_or_match_point`) markers per player. Table tennis and badminton sets list their points directly. The ace flag is a lower bound of the match's real ace count. Darts matches are not covered. Returns 404 when SofaScore has no point-by-point data for the match, which includes matches that have not started and sports without it.
- **Params:** `id` (string, **required**) — Numeric SofaScore event (match) id

### `sofascore_event_pregame_form`

- **HTTP:** `GET /sofascore/event-pregame-form`
- **What:** SofaScore event pre-game form. Returns each side's form going into a match: league position, points (football) or win-loss record (basketball) in `value` with the `label` that names it, the average player rating where SofaScore has one, and the recent results (`W`, `D`, `L`) in the order SofaScore returns them. Covers football and basketball; returns 404 when SofaScore has no pre-game form for the match, which includes tennis matches.
- **Params:** `id` (string, **required**) — Numeric SofaScore event (match) id

### `sofascore_event_shotmap`

- **HTTP:** `GET /sofascore/event-shotmap`
- **What:** SofaScore event shot map. Returns every shot in a football or ice hockey match. Football shots carry the shooter, side, outcome (`shot_type`), situation, body part, expected goals (xG and xGOT), minute, and pitch and goal-mouth coordinates. Ice hockey shots carry the shooter, team, side, shot technique (`shot_type`, for example `wrist`), `outcome` (`made`, `saved`, `missed` or `blocked`), `strength` (`even`, `powerplay` or `shorthanded`), period and period clock, rink `coordinates` and, for most shots, `xg`. An empty `shots` list is a valid response (a live match with no shots yet). Returns 404 when SofaScore has no shot map for the match, which includes matches that have not started, basketball and other sports without one, and fixtures without expected-goals coverage.
- **Params:** `id` (string, **required**) — Numeric SofaScore event (match) id

### `sofascore_event_statistics`

- **HTTP:** `GET /sofascore/event-statistics`
- **What:** SofaScore event statistics. Returns one match's statistics (possession, shots, passes, and more, grouped and split by period). Returns 404 when SofaScore has no tracked statistics for the match.
- **Params:** `id` (string, **required**) — Numeric SofaScore event (match) id

### `sofascore_event_team_heatmap`

- **HTTP:** `GET /sofascore/event-team-heatmap`
- **What:** SofaScore event team heatmap. Returns one team's touch locations in a football match as `player_points` (outfield players) and `goalkeeper_points`, each point an `x` and `y` on SofaScore's 0-100 pitch scale. `team_id` must be the home or away team of the event; get both ids from the event endpoint. Returns 404 when SofaScore has no heatmap for that team in that match, which includes teams that did not play it, unstarted matches and sports other than football.
- **Params:** `id` (string, **required**) — Numeric SofaScore event (match) id; `team_id` (string, **required**) — Numeric SofaScore team id of the home or away side

### `sofascore_event_team_streaks`

- **HTTP:** `GET /sofascore/event-team-streaks`
- **What:** SofaScore event team streaks. Returns a match's team streaks and trends: `general` statements about each side's recent matches (for example `Wins` 6 or `No goals conceded` 4) and `head2head` statements about their meetings. Each item names the streak, a `value` that is either a run length (`6`) or a ratio (`5/5`), the `team` it refers to (`home`, `away` or `both`) and, where SofaScore reports it, whether the streak `continued` into this match. Returns 404 when SofaScore lists no streaks for the match, which includes tennis matches.
- **Params:** `id` (string, **required**) — Numeric SofaScore event (match) id

### `sofascore_event_tennis_power`

- **HTTP:** `GET /sofascore/event-tennis-power`
- **What:** SofaScore event tennis power. Returns a tennis match's per-game momentum series: for each game of each set a `value` (positive favours the home player or team, negative the away side) and whether a break of serve `break_occurred`. An empty `games` list is a valid response (a live match with no completed game yet). Returns 404 when SofaScore has no tennis power data for the match, which includes matches that have not started and sports other than tennis.
- **Params:** `id` (string, **required**) — Numeric SofaScore tennis event (match) id

### `sofascore_event_tv_channels`

- **HTTP:** `GET /sofascore/event-tv-channels`
- **What:** SofaScore event TV channels. Returns where a match is broadcast. `available_countries` lists every country that has a broadcast with its channel ids; those country codes are the valid values for `country`. With `country` set (a two-letter ISO 3166-1 alpha-2 code such as `GB`, any case) the response also resolves that country's `channels` to names, using one extra upstream call. A well-formed country code the match is not broadcast in returns 404, and so does a match with no broadcast information.
- **Params:** `country` (string, optional) — Two-letter ISO 3166-1 alpha-2 country code. Omit to list the broadcasting countries only; `id` (string, **required**) — Numeric SofaScore event (match) id

### `sofascore_event_votes`

- **HTTP:** `GET /sofascore/event-votes`
- **What:** SofaScore event votes. Returns a match's community vote tallies: the match result vote (`match_result` with `home`, `away`, `total` and `draw`, where `draw` is absent for two-way sports such as basketball and tennis), both teams to score, which team scores first and who should have won (when SofaScore has opened that vote). A block that holds no votes is omitted. Returns 404 when SofaScore has no votes for the match.
- **Params:** `id` (string, **required**) — Numeric SofaScore event (match) id

### `sofascore_live_events`

- **HTTP:** `GET /sofascore/live-events`
- **What:** SofaScore live events. Returns currently live events for a sport. The `sport` enum accepts `american-football`, `aussie-rules`, `badminton`, `bandy`, `baseball`, `basketball`, `beach-volley`, `cricket`, `darts`, `esports`, `floorball`, `football`, `futsal`, `handball`, `ice-hockey`, `mma`, `minifootball`, `padel`, `rugby`, `snooker`, `table-tennis`, `tennis`, `volleyball`, and `waterpolo`; the sports endpoint lists them. An empty `events` list is a valid response when nothing is live right now.
- **Params:** `sport` (string, **required**) — Sport key

### `sofascore_manager`

- **HTTP:** `GET /sofascore/manager`
- **What:** SofaScore manager detail. Returns a manager's (coach's) profile (nationality, birth date, preferred formation, current team and teams, and the career win/draw/loss and goals record). Get a manager id from sofascore-search results of type `manager`.
- **Params:** `id` (string, **required**) — Numeric SofaScore manager id

### `sofascore_manager_events`

- **HTTP:** `GET /sofascore/manager-events`
- **What:** SofaScore manager recent matches. Returns a page of the matches a manager (coach) has recently taken charge of, newest first, across all clubs they managed. Only past matches are available; SofaScore publishes no upcoming list for managers. Returns 404 for a page past the end of the manager's history.
- **Params:** `id` (string, **required**) — Numeric SofaScore manager id; `page` (integer, optional) — Zero-based page number

### `sofascore_mma_card`

- **HTTP:** `GET /sofascore/mma-card`
- **What:** SofaScore MMA card. Returns the bouts of one MMA fight card, main event first, narrowed with `part` to `all` bouts, the `maincard`, the `prelims` or the `earlyprelims`. Each bout has the fighters (country, nickname, ranking where 0 is the champion, record), weight class, scheduled rounds, status, and for finished bouts the winner, win type, final round and fight time. Get `org_id` and `card_id` from sofascore-mma-schedule. Returns 404 when the card is unknown or has no bouts in that segment (for example a card without early prelims).
- **Params:** `card_id` (string, **required**) — Numeric card id (card_id) from sofascore-mma-schedule; `org_id` (string, **required**) — Numeric SofaScore MMA organisation id; `part` (string, **required**) — Which segment of the card to return

### `sofascore_mma_schedule`

- **HTTP:** `GET /sofascore/mma-schedule`
- **What:** SofaScore MMA schedule. Returns the main event of every fight card an MMA organisation holds in one calendar month, with the card id and name, fighters (country, nickname, ranking where 0 is the champion, record), weight class, scheduled rounds, status, and for finished fights the winner, win type and final round. Find organisation ids (UFC 19906, PFL 19910, ONE 20269, Rizin 19905, Fight Nation Championship 20463, KSW 19946, OKTAGON 20258, Absolute Championship Akhmat 20254, Cage Warriors 19909, Dana White's Contender Series 20264, Brave CF 20267, Jungle Fight 20253) with sofascore-categories (sport `mma`) and sofascore-category-tournaments (category 1708). Use the `card_id` with sofascore-mma-card to read every bout. Returns 404 when the organisation has no card in that month or the id is not an MMA organisation.
- **Params:** `month` (string, **required**) — Calendar month as YYYY-MM; `org_id` (string, **required**) — Numeric SofaScore MMA organisation id

### `sofascore_odds_dropping`

- **HTTP:** `GET /sofascore/odds-dropping`
- **What:** SofaScore dropping odds. Returns SofaScore's dropping odds list for a sport: about twenty upcoming events whose odds moved most, each as the usual event summary plus the `choice_name` and `percentage` SofaScore reports for the move (returned as supplied) and the market with opening and current prices (`change` is 1 above the opening price, -1 below it, 0 unchanged). The `sport` enum accepts `all` and the SofaScore sport keys; it defaults to `all`. A sport with no qualifying events at the moment (for example esports when probed) returns 404.
- **Params:** `sport` (string, optional) — Sport key, or all for every sport. Defaults to all

### `sofascore_odds_winning`

- **HTTP:** `GET /sofascore/odds-winning`
- **What:** SofaScore winning odds. Returns SofaScore's winning odds list for a sport: about twenty upcoming events whose favourite SofaScore highlights, each as the usual event summary plus `winning_odds` (fractional), the `expected` and `actual` percentages SofaScore reports for it (returned as supplied) and the full-time market with opening and current prices (`change` is 1 above the opening price, -1 below it, 0 unchanged). The `sport` enum accepts `all` and the SofaScore sport keys; it defaults to `all`. A sport with no qualifying events at the moment (for example baseball, cricket and esports when probed) returns 404.
- **Params:** `sport` (string, optional) — Sport key, or all for every sport. Defaults to all

### `sofascore_player`

- **HTTP:** `GET /sofascore/player`
- **What:** SofaScore player detail. Returns one SofaScore player by numeric `id`: name, short name, position, jersey number, date of birth, height, preferred foot, country, market value and currency, and the current team. `deceased` is `true` for historical players. An unknown or malformed id returns an upstream error.
- **Params:** `id` (string, **required**) — Numeric SofaScore player id

### `sofascore_player_attributes`

- **HTTP:** `GET /sofascore/player-attributes`
- **What:** SofaScore player attributes and characteristics. Returns a football player's attribute scores (0 to 100) for the current year and up to three earlier years (`year_shift` 0 to 3), the average scores for the player's position, and the player's characteristics: playing positions plus strengths and weaknesses, each with SofaScore's numeric `code`, a `key` and `name` such as finishing or aerial duels, and a `rank`. Outfield players carry attacking, technical, tactical, defending and creativity scores; goalkeepers carry saves, anticipation, ball_distribution, aerial and tactical. Combines two SofaScore requests. Returns 404 for players without attribute overviews, which includes non-football players.
- **Params:** `id` (string, **required**) — Numeric SofaScore player id

### `sofascore_player_events`

- **HTTP:** `GET /sofascore/player-events`
- **What:** SofaScore player matches with per-match numbers. Returns one page (30 matches) of a player's matches, each with the player's own numbers merged in: `statistics` (football: rating and minutes_played; basketball: points, rebounds, assists and more), `incident_counts` (goals, assists, yellow and red cards, penalty goals), `on_bench` for an unused substitute and `played_for_team_id` (club or national team). Page 0 is the most recent window and can include upcoming fixtures (status type `notstarted`); matches inside a page run oldest first. Follow `has_next_page` for older pages; a page past the end returns 404.
- **Params:** `id` (string, **required**) — Numeric SofaScore player id; `page` (integer, optional) — Zero-based page number. Defaults to 0

### `sofascore_player_last_year_summary`

- **HTTP:** `GET /sofascore/player-last-year-summary`
- **What:** SofaScore player form over the last year. Returns a player's form timeline over roughly the last year: `summary` entries, each with a `type`, a date and (where it applies) a competition. `event` is a rated match (the rating is in `value` as published and as a number in `rating`, the competition in `tournament_id`); `injury` is an injury period whose `value` is an opaque number; `missing` is a match the player missed; `transfer` is a transfer date. `tournaments` describes the competitions referenced. An empty `summary` is a valid response for a player with no rated appearance in the period.
- **Params:** `id` (string, **required**) — Numeric SofaScore player id

### `sofascore_player_national_team_statistics`

- **HTTP:** `GET /sofascore/player-national-team-statistics`
- **What:** SofaScore player national team record. Returns a player's national team record: for each national team the appearances, goals and debut date. An empty `teams` list is a valid response for a player who never played internationally.
- **Params:** `id` (string, **required**) — Numeric SofaScore player id

### `sofascore_player_penalty_history`

- **HTTP:** `GET /sofascore/player-penalty-history`
- **What:** SofaScore player penalty history. Returns the penalties a player has taken, newest first: the totals (`attempts`, `scored`) and, per penalty, the outcome (`goal`, `miss`, `post` or `save`), the zone of the goal (for example `low-right`, `high-left`, `close-high`), the x and y position in the goal mouth on SofaScore's 0 to 100 scale, the expected-goals value when available and the match. Returns 404 for players with no recorded penalties, such as most goalkeepers and defenders.
- **Params:** `id` (string, **required**) — Numeric SofaScore player id

### `sofascore_player_ratings`

- **HTTP:** `GET /sofascore/player-ratings`
- **What:** SofaScore player match ratings for a season. Returns a player's rating in every match of one competition season, newest first, with the opponent, home or away and the match. The `type` enum accepts `overall`, `home`, `away`, `regular_season` and `playoffs` and defaults to `overall`; football seasons answer `overall` and NBA seasons answer `regular_season` and `playoffs` (the types a season offers are listed by player-statistics-seasons). Returns 404 when SofaScore has no ratings of that type for the combination.
- **Params:** `id` (string, **required**) — Numeric SofaScore player id; `season` (string, **required**) — Numeric SofaScore season id from player-statistics-seasons; `tournament_id` (string, **required**) — Numeric SofaScore unique-tournament (competition) id from player-statistics-seasons; `type` (string, optional) — Statistics view

### `sofascore_player_season_heatmap`

- **HTTP:** `GET /sofascore/player-season-heatmap`
- **What:** SofaScore player season heatmap. Returns a football player's aggregated touch locations over one competition season: `points` with an `x`, `y` and touch `count` on SofaScore's 0-100 pitch scale, the number of `matches` behind it and the matched `events`. Get `tournament_id` and `season` from player-statistics-seasons. The response is large for a full league season. Returns 404 when SofaScore has no heatmap for that player, competition and season, which includes sports other than football and seasons the player did not play.
- **Params:** `id` (string, **required**) — Numeric SofaScore player id; `season` (string, **required**) — Numeric SofaScore season id; `tournament_id` (string, **required**) — Numeric SofaScore unique-tournament (competition) id

### `sofascore_player_season_statistics`

- **HTTP:** `GET /sofascore/player-season-statistics`
- **What:** SofaScore player season statistics. Returns a player's statistics for one competition season (appearances, rating, goals, assists, passing, duels, and more) as a snake_case metric map, plus the team and a rating breakdown when available. The `type` enum accepts `overall`, `home`, `away`, `regular_season`, and `playoffs` and defaults to `overall`; only the types listed for that season by player-statistics-seasons exist (football players have `overall`, `home`, `away`; basketball, ice hockey and baseball players have `regular_season` and `playoffs`). Returns 404 when SofaScore has no statistics of that type for the combination.
- **Params:** `id` (string, **required**) — Numeric SofaScore player id; `season` (string, **required**) — Numeric SofaScore season id from player-statistics-seasons; `tournament_id` (string, **required**) — Numeric SofaScore unique-tournament (competition) id from player-statistics-seasons; `type` (string, optional) — Statistics view

### `sofascore_player_statistical_rankings`

- **HTTP:** `GET /sofascore/player-statistical-rankings`
- **What:** SofaScore player ranking among all players in a season. Returns where a football player ranks against every other player of the competition season for about 78 statistics (goals, assists, rating, expected goals, passes, duels, distance covered and more): the `value`, the `rank` (tied values share a rank), the number of ranked players (`count`) and the tie-broken `order`. Statistics are snake_case and sorted alphabetically. The `type` enum accepts only `overall`, which is also the default; the other statistics views answer 404. Returns 404 for players without a ranking in that season, which includes basketball players.
- **Params:** `id` (string, **required**) — Numeric SofaScore player id; `season` (string, **required**) — Numeric SofaScore season id from player-statistics-seasons; `type` (string, optional) — Statistics view

### `sofascore_player_statistics_seasons`

- **HTTP:** `GET /sofascore/player-statistics-seasons`
- **What:** SofaScore player statistics seasons. Lists the competitions and seasons a player has statistics for, with the statistics `types` available for each season. Use a returned competition id (`unique_tournament_id`), season `id` and one of its `types` with player-season-statistics. The `types` values are `overall`, `home`, `away`, `regular_season`, and `playoffs`. Returns 404 for players with no tracked statistics (for example tennis players).
- **Params:** `id` (string, **required**) — Numeric SofaScore player id

### `sofascore_player_tournaments`

- **HTTP:** `GET /sofascore/player-tournaments`
- **What:** SofaScore player competitions. Lists every competition a player has played in, with id, name, slug, category, sport and gender. It includes competitions without season statistics (cups, friendlies, all-star games) that player-statistics-seasons leaves out. Returns 404 when SofaScore has no competitions for the player.
- **Params:** `id` (string, **required**) — Numeric SofaScore player id

### `sofascore_player_transfers`

- **HTTP:** `GET /sofascore/player-transfers`
- **What:** SofaScore player transfer history. Returns a player's transfer history (clubs moved from and to, date, fee, and SofaScore's numeric transfer type code), newest first. An empty `transfers` list is a valid response for a player who has never moved clubs. Returns 404 when SofaScore has no transfer record for the player (seen for ice hockey and baseball players). The `type_code` values are SofaScore's own opaque codes and are not translated.
- **Params:** `id` (string, **required**) — Numeric SofaScore player id

### `sofascore_ranking_types`

- **HTTP:** `GET /sofascore/ranking-types`
- **What:** SofaScore ranking catalogue. Lists every ranking available from the sofascore rankings endpoint: the numeric `type` id, a descriptive name, the sport, the gender and the kind of entity that is ranked (`team`, `player` or `unique_tournament`). Covers 32 rankings across football (league coefficients, FIFA national teams, club coefficients), rugby, tennis (ATP and WTA official and live rankings, UTR), padel and MMA (UFC and Fight Nation Championship divisions). The catalogue is a fixed list and costs no upstream request.
- **Params:** _none_

### `sofascore_rankings`

- **HTTP:** `GET /sofascore/rankings`
- **What:** SofaScore rankings. Returns one SofaScore ranking list: the rank, previous rank, points and the ranked team, player or competition, plus when the list was last updated. Choose the `type` id from sofascore-ranking-types, for example 5 for the ATP men's singles ranking or 2 for the FIFA men's national team ranking. Optional `limit` returns only the first rows of long lists (tennis lists hold 500 rows). MMA division rankings use rank 0 for the reigning champion.
- **Params:** `limit` (integer, optional) — Return only the first N rows, 1 to 500. Omit to return every row; `type` (integer, **required**) — Ranking id from sofascore-ranking-types

### `sofascore_referee`

- **HTTP:** `GET /sofascore/referee`
- **What:** SofaScore referee profile. Returns a referee's profile: name, country, sport, career matches officiated and career yellow, red and yellow-red card totals, plus date of birth and first league debut when SofaScore records them. Get the referee id from the `referee.id` of the sofascore-event endpoint or from a sofascore-search result of type referee. Returns 404 for an unknown id.
- **Params:** `id` (string, **required**) — Numeric SofaScore referee id

### `sofascore_referee_events`

- **HTTP:** `GET /sofascore/referee-events`
- **What:** SofaScore referee officiated matches. Returns one page (30 matches) of the matches a referee officiated, most recent first, across every competition. Follow `has_next_page` for older pages; a page past the end returns 404. Only past matches exist (no upcoming list), and the list includes canceled and postponed fixtures (their `status.type` says so), which the career match total of sofascore-referee does not count.
- **Params:** `id` (string, **required**) — Numeric SofaScore referee id; `page` (integer, optional) — Zero-based page number. Defaults to 0

### `sofascore_referee_statistics`

- **HTTP:** `GET /sofascore/referee-statistics`
- **What:** SofaScore referee card statistics. Returns a referee's record per competition: matches officiated, yellow cards, red cards, yellow-red cards and penalties awarded. The per-competition appearances add up to the career matches in sofascore-referee. An empty `competitions` list is valid for a referee with no recorded competitions.
- **Params:** `id` (string, **required**) — Numeric SofaScore referee id

### `sofascore_round_events`

- **HTTP:** `GET /sofascore/round-events`
- **What:** SofaScore round fixtures. Returns fixtures for one round of a competition season. Get `id` from search or category-tournaments, `season` from tournament-seasons, and the round values from tournament-rounds. Round numbers are not unique in cups, and knockout or named rounds return 404 unless the round's `slug` is passed (plus its `prefix` when tournament-rounds lists one): the UEFA Champions League has a qualifying and a league-phase round 1, and a playoff round 636 both with the `Qualification` prefix and without. Plain numbered league rounds need only `round`. `slug` is lowercase letters, digits, and hyphens (up to 64 characters); `prefix` is letters, digits, spaces, and hyphens (up to 64 characters) and is only valid together with `slug`.
- **Params:** `id` (string, **required**) — Numeric SofaScore unique-tournament (competition) id; `prefix` (string, optional) — Round prefix from tournament-rounds, for example Qualification; only valid together with slug; `round` (integer, **required**) — Round number; `season` (string, **required**) — Numeric SofaScore season id; `slug` (string, optional) — Round slug from tournament-rounds, for example round-of-16; required for knockout and named cup rounds

### `sofascore_scheduled_events`

- **HTTP:** `GET /sofascore/scheduled-events`
- **What:** SofaScore events scheduled in a category on a date. Returns the events (matches) in one category, such as a country, that start on a UTC date, ordered by start time. Get the category `id` from the categories endpoint (or `category_id` from scheduled-tournaments). `date` must be a real calendar date written `YYYY-MM-DD` and is a UTC day; to cover a local day in another timezone, request the neighbouring dates and filter on `start_timestamp`. An empty `events` list is a valid response when the category has no fixtures that day. Returns 404 for an unknown category id.
- **Params:** `category_id` (string, **required**) — Numeric SofaScore category id from the categories endpoint; `date` (string, **required**) — UTC calendar date, YYYY-MM-DD

### `sofascore_scheduled_tournaments`

- **HTTP:** `GET /sofascore/scheduled-tournaments`
- **What:** SofaScore tournaments scheduled on a date. Returns one page of the tournaments that have fixtures on a UTC date for a sport, each with the number of events starting that UTC day. This lists competitions, not matches: use scheduled-events with a tournament's `category_id` for the matches, or its `unique_tournament_id` with the tournament-seasons and round endpoints. `date` must be a real calendar date written `YYYY-MM-DD`. Pages are one-based; follow `has_next_page`. The `sport` enum accepts `american-football`, `aussie-rules`, `badminton`, `bandy`, `baseball`, `basketball`, `beach-volley`, `cricket`, `darts`, `esports`, `floorball`, `football`, `futsal`, `handball`, `ice-hockey`, `mma`, `minifootball`, `padel`, `rugby`, `snooker`, `table-tennis`, `tennis`, `volleyball`, and `waterpolo`. An empty `tournaments` list is a valid response for a date with no fixtures or a page past the last one.
- **Params:** `date` (string, **required**) — UTC calendar date, YYYY-MM-DD; `page` (integer, optional) — One-based page number; defaults to 1; `sport` (string, **required**) — Sport key

### `sofascore_search`

- **HTTP:** `GET /sofascore/search`
- **What:** SofaScore universal search. Searches SofaScore for teams, players, and competitions matching a free-text query. An empty `results` list is a valid response when nothing matches.
- **Params:** `q` (string, **required**) — Free-text search query

### `sofascore_search_typed`

- **HTTP:** `GET /sofascore/search-typed`
- **What:** SofaScore search by entity type. Searches SofaScore for one entity type and returns up to 20 ranked results per page: `events` (matches), `teams`, `players` (with team and position), `managers`, `referees`, `venues` (with city and capacity) and `unique_tournaments` (competitions with category). Page with the zero-based `page`; an empty page means there are no further results. The optional `sport` filter (any key listed by sofascore/sports, such as `football`, `basketball`, `tennis` or `mma`) narrows `teams`, `players`, `managers` and `unique_tournaments`, and is rejected for `events`, `referees` and `venues`, which ignore it. Use the returned ids with the matching endpoints (team, player, manager, venue, tournament-seasons, event).
- **Params:** `page` (integer, optional) — Zero-based page number. Defaults to 0; `q` (string, **required**) — Search text, up to 128 characters; `sport` (string, optional) — Restrict teams, players, managers or unique_tournaments to one sport; `type` (string, **required**) — Entity type to search

### `sofascore_season_events`

- **HTTP:** `GET /sofascore/season-events`
- **What:** SofaScore season fixtures and results. Returns one page (about 30 events) of every fixture or result of a competition season, with the round of each event. The `direction` enum accepts `next` (upcoming fixtures) and `last` (finished results). Follow `has_next_page` to read further pages: a page past the end, a direction with no events (for example `next` in a finished season) and a season id that does not belong to the competition all answer 404. Get `id` from search and `season` from tournament-seasons.
- **Params:** `direction` (string, **required**) — Upcoming fixtures or finished results; `id` (string, **required**) — Numeric SofaScore unique-tournament (competition) id; `page` (integer, optional) — Zero-based page number. Defaults to 0; `season` (string, **required**) — Numeric SofaScore season id

### `sofascore_sports`

- **HTTP:** `GET /sofascore/sports`
- **What:** SofaScore supported sports. Lists every sport key the SofaScore endpoints accept (the `sport` enum of live-events, categories, and scheduled-tournaments), with live and total event counts when available. The list is fixed and always complete; if the live counts cannot be read, `counts_available` is `false` and the per-sport counts are omitted instead of failing the call. Counts are also omitted for a sport the count feed does not cover (for example `mma`). Accepted sport keys: `american-football`, `aussie-rules`, `badminton`, `bandy`, `baseball`, `basketball`, `beach-volley`, `cricket`, `darts`, `esports`, `floorball`, `football`, `futsal`, `handball`, `ice-hockey`, `mma`, `minifootball`, `padel`, `rugby`, `snooker`, `table-tennis`, `tennis`, `volleyball`, `waterpolo`.
- **Params:** _none_

### `sofascore_stage`

- **HTTP:** `GET /sofascore/stage`
- **What:** SofaScore motorsport and cycling stage. Returns one stage from SofaScore's stage hierarchy: a season (Formula 1 2026), an event (a Grand Prix weekend, a NASCAR race, a rally, a cycling race), a session (practice, qualifying, sprint, race) or a cycling stage. The response has its type (`Season`, `Event`, `Practice`, `Qualifying`, `Qualifying part`, `Race`, `Sprint race`, `Sprint qualifying`, `Practice part`, `Stage`), status (`finished`, `notstarted`, `canceled`), start time, country, competition, parent stage (the season of an event, the event of a session), the winner once decided, and circuit, weather and race facts where published (laps, race distance, lap record, safety car, NASCAR cautions, rally special stages, cycling route). `info` fields are omitted when not published, never zero. A season has no status. Stage ids and competition ids are different id spaces. Returns 404 for an unknown stage id.
- **Params:** `id` (string, **required**) — Numeric SofaScore stage id from stage-schedule, stage-seasons or stage-substages

### `sofascore_stage_categories`

- **HTTP:** `GET /sofascore/stage-categories`
- **What:** SofaScore motorsport and cycling categories and competitions. Lists the categories SofaScore keeps for a stage sport, each with its competitions. For `motorsport` that is the racing series (Formula 1, MotoGP, Moto2, Moto3, Superbike, NASCAR with its Cup, Truck and Xfinity competitions, WRC, Formula E, Indycar, DTM); for `cycling` it is Cycling Men and Cycling Women. Use a competition `id` with stage-seasons to list its seasons. Some categories exist without any competition (for example Motocross, Speedway, WEC) and return an empty `competitions` list. Motorsport and cycling are not available on the match-based endpoints (live-events, categories, scheduled-events); they use the stage endpoints. The `sport` enum accepts `motorsport` and `cycling`.
- **Params:** `sport` (string, **required**) — Stage sport key

### `sofascore_stage_driver_performance`

- **HTTP:** `GET /sofascore/stage-driver-performance`
- **What:** SofaScore motorsport race progress per driver. Returns every competitor's progress through a finished race or rally. For circuit races (Formula 1, MotoGP and similar) `laps` lists the position at the end of each lap, starting with lap 0 for the grid, plus the tyre compound and a `pit_stop` flag where published; the lap a driver retired has `retired` set and no position. For rallies `stage_positions` lists the overall position after each special stage. The response also repeats the stage itself. It is published for races and sprints of some series (verified for Formula 1, MotoGP and WRC) and not for practice, qualifying, NASCAR, cycling, events or seasons, which return 404. Returns 404 for an unknown id.
- **Params:** `id` (string, **required**) — Numeric SofaScore stage id of a finished race, sprint or rally

### `sofascore_stage_featured`

- **HTTP:** `GET /sofascore/stage-featured`
- **What:** SofaScore featured motorsport and cycling events. Returns the events SofaScore features for a stage sport right now: a mix of the latest finished events (with `winner` and result facts such as laps and circuit) and the next upcoming ones, across series such as Formula 1, MotoGP, Moto2, Moto3, Superbike, NASCAR and cycling races. Each event carries its competition, season name, parent season stage and country. Use an event `id` with stage-substages for its sessions or stages and stage-standings for results. The `sport` enum accepts `motorsport` and `cycling`.
- **Params:** `sport` (string, **required**) — Stage sport key

### `sofascore_stage_schedule`

- **HTTP:** `GET /sofascore/stage-schedule`
- **What:** SofaScore motorsport and cycling events around a date. Returns the events SofaScore lists for a stage sport around a UTC date: Grand Prix weekends, NASCAR race weekends, rallies and cycling races, each with its country, competition, every session start time (`session_start_timestamps`) and the session SofaScore highlights (`session`: the live, next or latest one). The list is not a strict one-day filter. It holds the events in progress on the date plus the next upcoming ones, and a quiet date still returns the next events; use `on_date`, which is true when a session of the event starts inside the requested UTC day, to separate them. Schedule rows carry no event status or winner: use `session.status`, or pass the event `id` to stage for the event detail and to stage-substages for its sessions. `date` must be a real calendar date written `YYYY-MM-DD`. An empty `stages` list is valid when nothing is in progress or scheduled nearby. The `sport` enum accepts `motorsport` and `cycling`.
- **Params:** `date` (string, **required**) — UTC calendar date, YYYY-MM-DD; `sport` (string, **required**) — Stage sport key

### `sofascore_stage_seasons`

- **HTTP:** `GET /sofascore/stage-seasons`
- **What:** SofaScore seasons of a motorsport or cycling competition. Returns the seasons of one stage competition, newest first, for example Formula 1 2026 (id 214140) back to 1950. A season `id` is a stage id: pass it to stage-substages for the race calendar and to stage-standings for the championship table. The season still in progress has no `end_timestamp`. Get the competition `id` from stage-categories (for example 40 for Formula 1, 17 for MotoGP, 18 for the NASCAR Cup Series, 9 for Cycling Men). Competition ids and stage ids are different id spaces, so a competition id passed to stage returns an unrelated stage. Returns 404 for an unknown competition id.
- **Params:** `id` (string, **required**) — Numeric SofaScore competition id from stage-categories

### `sofascore_stage_standings`

- **HTTP:** `GET /sofascore/stage-standings`
- **What:** SofaScore motorsport and cycling stage standings. Returns one classification of a stage. For a race or sprint it is the result (position, grid, race time, gap, interval, laps, laps led, pit stops, tyre stints, fastest lap, points, retirement status); for practice and qualifying the timing order (`time` is the best lap); for a cycling stage the stage result with time gaps; for an event the event aggregate; for a season the championship table (points, victories, races started, pole positions, podiums, fastest laps; NASCAR adds top 5, top 10 and races not finished). `competitor` returns drivers and riders, `team` returns constructors and teams, which only some seasons and events publish (verified for the Formula 1 and MotoGP seasons and the Formula 1 event; races, NASCAR, WRC and cycling return 404 for `team`). Rows are in upstream order. `position` is omitted for competitors who did not finish or set no time, and `gap` is `DNF` for a retirement. The parent session of a split qualifying has no standings; use the ids of its parts from stage-substages. Fields a classification does not publish are omitted. Returns 404 for an unknown id, a stage that has no results yet, or a kind of stage without that classification. The `type` enum accepts `competitor` and `team`.
- **Params:** `id` (string, **required**) — Numeric SofaScore stage id of a season, event, session or cycling stage; `type` (string, **required**) — Classification kind

### `sofascore_stage_substages`

- **HTTP:** `GET /sofascore/stage-substages`
- **What:** SofaScore children of a motorsport or cycling stage. Returns the children of a stage in upstream order. For a season it is the race calendar: every event with status (`finished`, `notstarted`, `canceled`), dates, round, circuit and winner. For an event it is the sessions: practices, qualifying, sprint qualifying, sprint and race for a Grand Prix, the numbered stages of a cycling race or rally. Qualifying and practice sessions list their `parts`, and the part ids carry the timing results (the parent session of a split qualifying has no standings of its own). Use a child `id` with stage for detail, stage-standings for its results and stage-driver-performance for race progress. A race, session or cycling stage has no children and returns 404, as does an unknown id.
- **Params:** `id` (string, **required**) — Numeric SofaScore stage id of a season or an event

### `sofascore_standings`

- **HTTP:** `GET /sofascore/standings`
- **What:** SofaScore standings. Returns a league table for a competition season. The `type` enum accepts `total`, `home`, and `away`. Get `id` from search and `season` from tournament-seasons.
- **Params:** `id` (string, **required**) — Numeric SofaScore unique-tournament (competition) id; `season` (string, **required**) — Numeric SofaScore season id; `type` (string, **required**) — Standings variant

### `sofascore_team`

- **HTTP:** `GET /sofascore/team`
- **What:** SofaScore team detail. Returns one SofaScore team by numeric `id`: name, short name, country, sport, manager, venue with its city and capacity, primary colour, and national-team flag. `tournament_id` and `tournament_name` give the team's primary competition, such as its domestic league. An unknown id returns an upstream error.
- **Params:** `id` (string, **required**) — Numeric SofaScore team id

### `sofascore_team_achievements`

- **HTTP:** `GET /sofascore/team-achievements`
- **What:** SofaScore team trophies. Returns the trophies a team has won: the total and, per competition, the number won and the winning seasons (newest first, with the season id where SofaScore tracks it). Some competitions, such as US leagues, report a count with an empty or shorter `seasons` list. Returns 404 when SofaScore records no achievements for the team.
- **Params:** `id` (string, **required**) — Numeric SofaScore team id

### `sofascore_team_events`

- **HTTP:** `GET /sofascore/team-events`
- **What:** SofaScore team fixtures. Returns a page of a team's upcoming or recent fixtures. The `direction` enum accepts `next` and `last`. An empty `events` list is a valid response when there is no fixture on that page.
- **Params:** `direction` (string, **required**) — Fixture direction; `id` (string, **required**) — Numeric SofaScore team id; `page` (integer, optional) — Zero-based page number

### `sofascore_team_goal_distributions`

- **HTTP:** `GET /sofascore/team-goal-distributions`
- **What:** SofaScore team goals by match minute. Returns a football team's goals scored and conceded per block of match minutes (1-15, 16-30, 31-45, 46-60, 61-75, 76-90) for one competition season, in three views: `overall`, `home` and `away`, each with the matches played and the goal totals. A block with no goals is returned as 0. Returns 404 for non-football teams and for a team and season that do not belong together.
- **Params:** `id` (string, **required**) — Numeric SofaScore team id; `season` (string, **required**) — Numeric SofaScore season id; `tournament_id` (string, **required**) — Numeric SofaScore unique-tournament (competition) id of a football competition

### `sofascore_team_near_events`

- **HTTP:** `GET /sofascore/team-near-events`
- **What:** SofaScore team previous and next match. Returns a team's last played match and its next scheduled match with teams, competition, status, score and start time. Either side can be missing (a team with no upcoming fixture returns only `previous_event`). Returns 404 when SofaScore has neither. For full fixture lists use team-events.
- **Params:** `id` (string, **required**) — Numeric SofaScore team id

### `sofascore_team_of_the_week`

- **HTTP:** `GET /sofascore/team-of-the-week`
- **What:** SofaScore team of the week. Returns one team of the week: the formation and the selected players with their SofaScore rating, team and, for round and weekly selections, the match the rating was earned in. Get the `period` id from sofascore-team-of-the-week-periods; a period that does not belong to the given competition season is rejected with 400.
- **Params:** `id` (string, **required**) — Numeric SofaScore unique-tournament (competition) id; `period` (string, **required**) — Numeric period id from sofascore-team-of-the-week-periods; `season` (string, **required**) — Numeric SofaScore season id

### `sofascore_team_of_the_week_periods`

- **HTTP:** `GET /sofascore/team-of-the-week-periods`
- **What:** SofaScore team of the week periods. Lists the periods of a competition season for which SofaScore published a team of the week, newest first: league rounds (`round`), weekly time spans (`timespan`) and season-level selections (`season`, such as an NBA regular season or playoff team). Use a returned period `id` with sofascore-team-of-the-week. An empty list is valid when no team of the week has been published yet. Get `id` from search and `season` from tournament-seasons.
- **Params:** `id` (string, **required**) — Numeric SofaScore unique-tournament (competition) id; `season` (string, **required**) — Numeric SofaScore season id

### `sofascore_team_performance`

- **HTTP:** `GET /sofascore/team-performance`
- **What:** SofaScore team recent performance. Returns a team's most recent matches (about ten, oldest first) with SofaScore's per-match performance value in `points`: higher is better and a heavy defeat is negative. An event SofaScore gave no value for has no `points`. An empty `events` list is a valid response for a team with no recent matches.
- **Params:** `id` (string, **required**) — Numeric SofaScore team id

### `sofascore_team_player_statistics`

- **HTTP:** `GET /sofascore/team-player-statistics`
- **What:** SofaScore team player statistics. Returns the statistics of every player in a team's squad for one competition season, each as a snake_case metric map (appearances, minutes, rating, goals, assists, passing and duel metrics for football; points, rebounds and assists for basketball), in SofaScore's order. The `type` enum accepts `overall`, `home`, `away`, `regular_season` and `playoffs` and defaults to `overall`; only the types listed for that season by team-player-statistics-seasons exist (football `overall`, `home`, `away`; NBA `regular_season`, `playoffs`). A metric SofaScore did not record is omitted rather than returned as 0. Returns 404 when SofaScore has no statistics of that type for the combination.
- **Params:** `id` (string, **required**) — Numeric SofaScore team id; `season` (string, **required**) — Numeric SofaScore season id from team-player-statistics-seasons; `tournament_id` (string, **required**) — Numeric SofaScore unique-tournament (competition) id from team-player-statistics-seasons; `type` (string, optional) — Statistics view

### `sofascore_team_player_statistics_seasons`

- **HTTP:** `GET /sofascore/team-player-statistics-seasons`
- **What:** SofaScore team player statistics seasons. Lists the competitions and seasons for which SofaScore has per-player statistics for a team, with the statistics `types` available in each season (`overall`, `home`, `away`, `regular_season`, `playoffs`). Use it to find the `tournament_id`, `season` and `type` accepted by team-player-statistics and team-top-players. Football teams offer `overall`, `home` and `away`; NBA teams offer `regular_season` and `playoffs`. Returns 404 when SofaScore has no player statistics for the team.
- **Params:** `id` (string, **required**) — Numeric SofaScore team id

### `sofascore_team_players`

- **HTTP:** `GET /sofascore/team-players`
- **What:** SofaScore team players. Returns a team's full squad from SofaScore by team id: each player's name, position, jersey number, date of birth, height, country and preferred foot, plus SofaScore's market value estimate and its currency when available.
- **Params:** `id` (string, **required**) — Numeric SofaScore team id

### `sofascore_team_rankings`

- **HTTP:** `GET /sofascore/team-rankings`
- **What:** SofaScore team rankings. Returns every ranking a team or tennis player appears in: for a tennis player the ATP or WTA ranking, its live version and the UTR rating, for a football club the UEFA club coefficient by year. Each ranking carries its `type_id` (the same ids the rankings endpoint takes), name, sport, category and last update, and `rows` with the `position`, `points`, previous and best position where SofaScore reports them. Returns 404 when the id appears in no ranking.
- **Params:** `id` (string, **required**) — Numeric SofaScore team id (a tennis player id for tennis)

### `sofascore_team_season_statistics`

- **HTTP:** `GET /sofascore/team-season-statistics`
- **What:** SofaScore team season statistics. Returns a team's statistics for one competition season (goals, shots, passing, duels, discipline, and the matching conceded-side metrics) as a snake_case metric map. The `type` enum accepts `overall`, `home`, `away`, `regular_season`, and `playoffs` and defaults to `overall`; only the types listed for that season by team-statistics-seasons exist (football teams have `overall` only; basketball, ice hockey and baseball teams have `regular_season` and `playoffs`). Returns 404 when SofaScore has no statistics of that type for the combination.
- **Params:** `id` (string, **required**) — Numeric SofaScore team id; `season` (string, **required**) — Numeric SofaScore season id from team-statistics-seasons; `tournament_id` (string, **required**) — Numeric SofaScore unique-tournament (competition) id from team-statistics-seasons; `type` (string, optional) — Statistics view

### `sofascore_team_statistics_seasons`

- **HTTP:** `GET /sofascore/team-statistics-seasons`
- **What:** SofaScore team statistics seasons. Lists the competitions and seasons a team has statistics for, with the statistics `types` available for each season. Use a returned competition id (`unique_tournament_id`), season `id` and one of its `types` with team-season-statistics. The `types` values are `overall`, `home`, `away`, `regular_season`, and `playoffs`. Returns 404 for teams with no tracked statistics.
- **Params:** `id` (string, **required**) — Numeric SofaScore team id

### `sofascore_team_top_players`

- **HTTP:** `GET /sofascore/team-top-players`
- **What:** SofaScore team top players. Returns a team's best players for every statistic category SofaScore ranks within the team and season (rating, goals, assists, expected goals, tackles, saves and more for football; points, rebounds and assists for basketball), each as a ranked list with player, team and value. The category set depends on the sport, so the response lists every category it holds. The `type` enum accepts `overall`, `regular_season` and `playoffs`: football competitions publish `overall`, the NBA publishes `regular_season` and `playoffs`, and a type the competition does not publish answers 404. Optional `limit` caps the rows per category (up to 50); the payload is large without it.
- **Params:** `id` (string, **required**) — Numeric SofaScore team id; `limit` (integer, optional) — Rows per category, 1 to 50. Omit to return every row; `season` (string, **required**) — Numeric SofaScore season id from team-player-statistics-seasons; `tournament_id` (string, **required**) — Numeric SofaScore unique-tournament (competition) id from team-player-statistics-seasons; `type` (string, optional) — Statistics scope

### `sofascore_team_tournaments`

- **HTTP:** `GET /sofascore/team-tournaments`
- **What:** SofaScore team competitions. Lists the competitions a team plays in, each with id, name, slug, category and sport. By default (`all=false`) it returns the competitions the team currently takes part in; with `all=true` it returns every competition the team has been recorded in, including friendlies and older tournaments. Competition ids can be used as `tournament_id` elsewhere in the SofaScore endpoints; use team-player-statistics-seasons for the seasons that have statistics. Returns 404 when SofaScore has no competitions for the team.
- **Params:** `all` (boolean, optional) — false returns current competitions, true returns every recorded competition; `id` (string, **required**) — Numeric SofaScore team id

### `sofascore_team_transfers`

- **HTTP:** `GET /sofascore/team-transfers`
- **What:** SofaScore team transfers. Returns a team's recent incoming (`transfers_in`) and outgoing (`transfers_out`) transfers with player, clubs, date, fee, and SofaScore's numeric transfer type code. Empty lists are valid for a quiet transfer window. Returns 404 when SofaScore has no transfer record for the team (seen for ice hockey and baseball teams). The `type_code` values are SofaScore's own opaque codes and are not translated.
- **Params:** `id` (string, **required**) — Numeric SofaScore team id

### `sofascore_tennis_player_grand_slam_results`

- **HTTP:** `GET /sofascore/tennis-player-grand-slam-results`
- **What:** SofaScore tennis player grand slam results. Returns a tennis player's best round at each grand slam (Australian Open, Roland Garros, Wimbledon and US Open) for the last five editions: per edition the `year`, the `season_id`, the best `round` reached and whether the player won it (`winner`). A year without a `round` means no result is recorded for that edition. `id` is the SofaScore team id of a tennis player (tennis players are teams in SofaScore); get it from search or rankings. Returns 404 for ids that are not tennis players.
- **Params:** `id` (string, **required**) — Numeric SofaScore team id of a tennis player

### `sofascore_tournament_cuptree`

- **HTTP:** `GET /sofascore/tournament-cuptree`
- **What:** SofaScore competition knockout tree. Returns the knockout tree(s) of a cup or playoff competition season: every round with its ties, each tie's participants (team or player, seed, winner flag, the earlier tie it advanced from), result and score strings (a shoot-out is appended, such as `1 (4)`), match ids and start time, plus the final and third-place tie. Tennis competitions return two trees (main draw and qualifying). League seasons have no tree and answer 404, as does a season id that does not belong to the competition. Get `id` from search or tournaments-with-feature and `season` from tournament-seasons; pass the returned `event_ids` to the event endpoints.
- **Params:** `id` (string, **required**) — Numeric SofaScore unique-tournament (competition) id of a cup or playoff competition; `season` (string, **required**) — Numeric SofaScore season id

### `sofascore_tournament_info`

- **HTTP:** `GET /sofascore/tournament-info`
- **What:** SofaScore competition info. Returns a competition's metadata (name, sport, category, tier, title holder, most titles, current season dates, divisions above and below, linked competitions). When `season` is given it also returns that season's aggregates: number of competitors and, for football competitions, goals, home wins, away wins, draws, yellow and red cards and the promoted teams. Get `id` from search and `season` from tournament-seasons.
- **Params:** `id` (string, **required**) — Numeric SofaScore unique-tournament (competition) id; `season` (string, optional) — Numeric SofaScore season id. Omit for competition metadata only

### `sofascore_tournament_player_of_the_season`

- **HTTP:** `GET /sofascore/tournament-player-of-the-season`
- **What:** SofaScore player of the season. Returns the player SofaScore names player of the season for a finished competition season: the player, their team, shirt number, average rating, appearances and the statistics scope (`overall`, or `regular_season` for the NBA). A season that is still running, has not been awarded, or does not belong to the competition answers 404. Get `id` from search and `season` from tournament-seasons or tournament-winners.
- **Params:** `id` (string, **required**) — Numeric SofaScore unique-tournament (competition) id; `season` (string, **required**) — Numeric SofaScore season id of a finished season

### `sofascore_tournament_player_statistics`

- **HTTP:** `GET /sofascore/tournament-player-statistics`
- **What:** SofaScore season player statistics table. Returns one page of a football competition season's player statistics table, sortable by a statistic. `order` chooses the statistic to sort by, `direction` the sort direction (`desc` or `asc`), `accumulation` whether values are season totals, per-game averages or per-90-minute averages (`total`, `perGame`, `per90`), and `group` which statistic columns each row carries (`summary`, `attack`, `defence`, `passing`, `goalkeeper`). Page with `limit` (up to 100) and `offset`; `has_next_page` shows whether more rows follow. Optional filters narrow the table: `team` (team ids), `nationality` (SofaScore nationality codes), `position` (`G`, `D`, `M`, `F`), `min_appearances` and `min_minutes`; several filters combine (AND) and several values of one filter are alternatives (OR). The team ids and nationality codes of a season come from tournament-statistics-info. A filter that matches nobody returns an empty `players` list. Other sports return no rows (404). Get `id` from search and `season` from tournament-seasons.
- **Params:** `accumulation` (string, optional) — How statistics are accumulated. Defaults to total; `direction` (string, optional) — Sort direction. Defaults to desc; `group` (string, optional) — Statistic columns returned. Defaults to summary; `id` (string, **required**) — Numeric SofaScore unique-tournament (competition) id of a football competition; `limit` (integer, optional) — Rows per page, 1 to 100. Defaults to 20; `min_appearances` (integer, optional) — Keep players with at least this many appearances, 0 to 1000. Omit for no minimum; `min_minutes` (integer, optional) — Keep players with at least this many minutes played, 0 to 100000. Omit for no minimum; `nationality` (array, optional) — Nationality codes to keep, comma separated, up to 20 (codes from tournament-statistics-info); `offset` (integer, optional) — Rows to skip. Defaults to 0; `order` (string, optional) — Statistic to sort by. Defaults to rating; `position` (array, optional) — Position codes to keep, comma separated; `season` (string, **required**) — Numeric SofaScore season id; `team` (array, optional) — Team ids to keep, comma separated, up to 20 (ids from tournament-statistics-info or tournament-teams)

### `sofascore_tournament_rounds`

- **HTTP:** `GET /sofascore/tournament-rounds`
- **What:** SofaScore competition season rounds. Returns the rounds of a competition season and the current round. Round numbers are not unique in cups: the UEFA Champions League has both a qualifying and a league-phase round 1, and the same playoff round number with and without a `prefix`. To fetch a round's fixtures, pass its `round` to round-events together with its `slug` and, when present, its `prefix`; knockout and named rounds return 404 from round-events without the slug. Plain numbered rounds (a league's round 1 to 38) have no slug. Get `id` from category-tournaments or search and `season` from tournament-seasons. Returns 404 when SofaScore has no rounds for the season (for example a season that has not started).
- **Params:** `id` (string, **required**) — Numeric SofaScore unique-tournament (competition) id; `season` (string, **required**) — Numeric SofaScore season id from tournament-seasons

### `sofascore_tournament_seasons`

- **HTTP:** `GET /sofascore/tournament-seasons`
- **What:** SofaScore competition seasons. Returns the season list for a competition. Use a returned season id with the standings and round-events endpoints.
- **Params:** `id` (string, **required**) — Numeric SofaScore unique-tournament (competition) id

### `sofascore_tournament_statistics_info`

- **HTTP:** `GET /sofascore/tournament-statistics-info`
- **What:** SofaScore player statistics table filters. Returns what the tournament-player-statistics table of a football competition season can be filtered by: the season's teams (ids for the `team` filter), the nationality codes (for the `nationality` filter; SofaScore uses `EN`, `SX`, `WA` and `NX` for the home nations), the position codes `G`, `D`, `M` and `F` (for the `position` filter), and the statistic columns of each `group` value (`summary`, `attack`, `defence`, `passing`, `goalkeeper`). Other sports answer 404. Get `id` from search and `season` from tournament-seasons.
- **Params:** `id` (string, **required**) — Numeric SofaScore unique-tournament (competition) id of a football competition; `season` (string, **required**) — Numeric SofaScore season id

### `sofascore_tournament_team_of_the_season`

- **HTTP:** `GET /sofascore/tournament-team-of-the-season`
- **What:** SofaScore team of the season. Returns the team of the season SofaScore selected for a finished competition season: the formation, when it was created and the selected players (11 in football, 5 in basketball) with position, shirt number, team and average rating. A season that is still running, has no selection, or does not belong to the competition answers 404. Get `id` from search and `season` from tournament-seasons or tournament-winners.
- **Params:** `id` (string, **required**) — Numeric SofaScore unique-tournament (competition) id; `season` (string, **required**) — Numeric SofaScore season id of a finished season

### `sofascore_tournament_teams`

- **HTTP:** `GET /sofascore/tournament-teams`
- **What:** SofaScore teams of a competition season. Returns every team (or, for tennis and other individual sports, every player) entered in a competition season, with id, name, short name, name code, country, gender, type (`0` team, `1` individual player) and, for individual players, the current ranking. Use the team ids with team, team-players and the `team` filter of tournament-player-statistics. A season id that does not belong to the competition, or a field not yet decided, answers 404. Get `id` from search and `season` from tournament-seasons.
- **Params:** `id` (string, **required**) — Numeric SofaScore unique-tournament (competition) id; `season` (string, **required**) — Numeric SofaScore season id

### `sofascore_tournament_top_players`

- **HTTP:** `GET /sofascore/tournament-top-players`
- **What:** SofaScore season top players. Returns a competition season's top players for every statistic category SofaScore ranks (for football about 30 categories such as rating, goals, assists, expected goals, tackles and saves; for basketball points, rebounds, assists and more), each with the ranked players, their team and the value. The category set depends on the sport and competition, so the response lists every category it holds. The `type` enum accepts `overall`, `regular_season` and `playoffs`: football competitions publish `overall`, the NBA publishes `regular_season` and `playoffs`, and a type the competition does not publish answers 404. Optional `limit` caps the rows per category (up to 50). Get `id` from search and `season` from tournament-seasons.
- **Params:** `id` (string, **required**) — Numeric SofaScore unique-tournament (competition) id; `limit` (integer, optional) — Rows per category, 1 to 50. Omit to return every row; `season` (string, **required**) — Numeric SofaScore season id; `type` (string, optional) — Statistics scope. Defaults to overall

### `sofascore_tournament_top_teams`

- **HTTP:** `GET /sofascore/tournament-top-teams`
- **What:** SofaScore season top teams. Returns a competition season's top teams for every team statistic category SofaScore ranks (for football about 30 categories such as average rating, goals scored, possession, shots and clean sheets; for basketball points, pace, ratings and more), each with the ranked teams and the value. The category set depends on the sport and competition, so the response lists every category it holds. The `type` enum accepts `overall`, `regular_season` and `playoffs`: football competitions publish `overall`, the NBA publishes `regular_season`, and a type the competition does not publish answers 404. Optional `limit` caps the rows per category (up to 50). Get `id` from search and `season` from tournament-seasons.
- **Params:** `id` (string, **required**) — Numeric SofaScore unique-tournament (competition) id; `limit` (integer, optional) — Rows per category, 1 to 50. Omit to return every row; `season` (string, **required**) — Numeric SofaScore season id; `type` (string, optional) — Statistics scope. Defaults to overall

### `sofascore_tournament_venues`

- **HTTP:** `GET /sofascore/tournament-venues`
- **What:** SofaScore venues of a competition season. Returns every venue used by a competition season with id, name, capacity, city, state (US), coordinates and the `hidden` flag. Use the venue ids with venue and venue-events. A season id that does not belong to the competition answers 404. Get `id` from search and `season` from tournament-seasons.
- **Params:** `id` (string, **required**) — Numeric SofaScore unique-tournament (competition) id; `season` (string, **required**) — Numeric SofaScore season id

### `sofascore_tournament_winners`

- **HTTP:** `GET /sofascore/tournament-winners`
- **What:** SofaScore past winners of a competition. Returns one page (10 seasons, newest first) of a competition's past winners: the year, the season id and the winning team or player. Follow `has_next_page` and pass `page` (zero-based) for older seasons; a page past the last one and an unknown competition both answer 404. Get `id` from search; the returned `season_id` works with every season-scoped endpoint.
- **Params:** `id` (string, **required**) — Numeric SofaScore unique-tournament (competition) id; `page` (integer, optional) — Zero-based page number. Defaults to 0

### `sofascore_tournaments_with_feature`

- **HTTP:** `GET /sofascore/tournaments-with-feature`
- **What:** SofaScore competitions that carry a feature. Returns SofaScore's short list (up to 10) of the most followed competitions of a sport that carry one feature. The `feature` enum accepts `cuptree` (knockout tree, for tournament-cuptree), `standings` (league table), `totw` (team of the week) and `power_rankings`. The `sport` enum accepts `american-football`, `aussie-rules`, `badminton`, `bandy`, `baseball`, `basketball`, `beach-volley`, `cricket`, `darts`, `esports`, `floorball`, `football`, `futsal`, `handball`, `ice-hockey`, `minifootball`, `rugby`, `snooker`, `table-tennis`, `tennis`, `volleyball` and `waterpolo` (`mma` and `padel` are not supported). The list is fixed by SofaScore and cannot be paged or searched; a sport with no such competition returns an empty list. Use search-typed with `type` `unique_tournaments` to find other competitions.
- **Params:** `feature` (string, **required**) — Competition feature; `sport` (string, **required**) — Sport key

### `sofascore_trending_events`

- **HTTP:** `GET /sofascore/trending-events`
- **What:** SofaScore trending events. Returns the events trending in one country across every sport (live, recent and upcoming), each as the usual event summary plus its `sport` key. `country` is a two-letter ISO 3166-1 alpha-2 code such as `GB` or `US` (any case); SofaScore serves a trending list per country, and a code it does not serve returns 404. The list is about twenty events and changes through the day.
- **Params:** `country` (string, **required**) — Two-letter ISO 3166-1 alpha-2 country code

### `sofascore_trending_players`

- **HTTP:** `GET /sofascore/trending-players`
- **What:** SofaScore trending players. Returns a sport's trending top players: standout performers from recent matches with the player, team, the match and that match's numbers as a snake_case metric map (`rating`, `minutes_played`, `goals` and more; the metric set depends on the sport and position). The `sport` enum accepts `football` and `basketball`, the sports for which SofaScore publishes this list. Returns 404 when SofaScore has no trending players for the sport right now.
- **Params:** `sport` (string, **required**) — Sport key

### `sofascore_venue`

- **HTTP:** `GET /sofascore/venue`
- **What:** SofaScore venue. Returns one venue (stadium or arena): name, capacity, city, country, coordinates, its home teams, the venue-wide match totals (matches, goals, home and away win shares, and for football cards and corners per game) and a per-sport record in `sports`, most matches first. `hidden` venues, such as NBA arenas, have no venue-wide match list in venue-events and are listed per competition season instead. An unknown venue id answers 404. Get `id` from search-typed with `type` `venues`, from tournament-venues or from an event's venue.
- **Params:** `id` (string, **required**) — Numeric SofaScore venue id

### `sofascore_venue_events`

- **HTTP:** `GET /sofascore/venue-events`
- **What:** SofaScore matches at a venue. Returns one page (up to 30) of the matches played (`direction` `last`, newest page first) or scheduled (`next`) at a venue, as match summaries. Without `tournament` and `season` it lists every match at the venue, optionally narrowed by `sport` (`all`, or any key listed in the venue's `sports`, such as `football`, `rugby`, `basketball`, `mma`); with both it lists that competition season's matches at the venue and `sport` must be omitted. Hidden venues (see venue) have no venue-wide list and answer 404 without `tournament` and `season`. A direction with no matches, a sport the venue never hosted and a page past the last one also answer 404; follow `has_next_page`.
- **Params:** `direction` (string, **required**) — Upcoming matches or finished matches; `id` (string, **required**) — Numeric SofaScore venue id; `page` (integer, optional) — Zero-based page number. Defaults to 0; `season` (string, optional) — Numeric season id; with tournament, lists that competition season's matches at the venue; `sport` (string, optional) — Sport filter for the venue-wide list. Defaults to all; `tournament` (string, optional) — Numeric unique-tournament id; with season, lists that competition season's matches at the venue
