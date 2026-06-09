# Crawlora endpoint catalog

> Generated from `scripts/tools.json` by `scripts/generate.mjs` — do not edit by hand.

The complete Crawlora public-web-data API surface, grouped by platform. Use this to pick the right endpoint for any job, then call it via `scripts/crawlora.sh` (see SKILL.md).

All paths are relative to the API base `https://api.crawlora.net/api/v1` and require the header `x-api-key: $CRAWLORA_API_KEY`. Path params like `{id}` are substituted into the URL; `GET` params go in the query string; `POST` params go in a JSON body.

**321 endpoints across 33 platform group(s).**

## Airbnb (4)

### `airbnb_room`

- **HTTP:** `GET /airbnb/room/{id}`
- **What:** Get Airbnb room. Returns normalized Airbnb public room details.
- **Params:** `id` (string, **required**) — Room id

### `airbnb_room_calendar`

- **HTTP:** `GET /airbnb/room/{id}/calendar`
- **What:** Get Airbnb room calendar. Returns public calendar month hints parsed from Airbnb room bootstrap data.
- **Params:** `id` (string, **required**) — Room id

### `airbnb_room_reviews`

- **HTTP:** `GET /airbnb/room/{id}/reviews`
- **What:** Get Airbnb room reviews. Returns normalized Airbnb public review snippets.
- **Params:** `id` (string, **required**) — Room id; `page` (integer, optional) — 1-based page

### `airbnb_search`

- **HTTP:** `GET /airbnb/search`
- **What:** Search Airbnb stays. Returns normalized Airbnb public web search results.
- **Params:** `location` (string, **required**) — Location; `check_in` (string, optional) — Check-in date; `check_out` (string, optional) — Check-out date; `adults` (integer, optional) — Adult guests; `page` (integer, optional) — 1-based page; `currency` (string, optional) — Currency for bounded map search; `ne_lat` (number, optional) — Northeast latitude for bounded map search; `ne_lng` (number, optional) — Northeast longitude for bounded map search; `sw_lat` (number, optional) — Southwest latitude for bounded map search; `sw_lng` (number, optional) — Southwest longitude for bounded map search; `zoom` (integer, optional) — Map zoom for bounded map search

## Amazon (3)

### `amazon_product`

- **HTTP:** `GET /amazon/product/{asin}`
- **What:** Retrieve Amazon product details. Returns normalized product details for an Amazon ASIN on `amazon.com`, including pricing, availability, overview data, inline review samples, and descriptive content.
- **Params:** `asin` (string, **required**) — Amazon ASIN; `language` (string, optional) — Amazon language; `currency` (string, optional) — Amazon currency

### `amazon_search`

- **HTTP:** `GET /amazon/search`
- **What:** Search Amazon products. Returns normalized Amazon search result cards for `amazon.com`.
- **Params:** `k` (string, **required**) — Search keyword; `s` (string, optional) — Sort order; `page` (integer, optional) — 1-based page number

### `amazon_suggest`

- **HTTP:** `GET /amazon/suggest/{keyword}`
- **What:** Retrieve Amazon search suggestions. Returns typeahead keyword suggestions from Amazon's public suggestion API for `amazon.com`.
- **Params:** `keyword` (string, **required**) — Suggestion prefix

## ApplePodcasts (5)

### `apple_podcasts_charts`

- **HTTP:** `GET /apple-podcasts/charts`
- **What:** Retrieve Apple Podcasts chart rankings. Returns Apple Podcasts show chart rankings from public iTunes RSS JSON feeds. Supported collections are `toppodcasts` and `topaudiopodcasts`.
- **Params:** `collection` (string, optional) — Chart collection; `category` (integer, optional) — Numeric Apple podcast genre ID; `country` (string, optional) — Two-letter storefront country code; `limit` (integer, optional) — Number of chart items to return

### `apple_podcasts_episodes_search`

- **HTTP:** `GET /apple-podcasts/episodes/search`
- **What:** Search Apple Podcasts episodes. Returns normalized Apple Podcasts episodes from Apple's public iTunes Search API.
- **Params:** `term` (string, **required**) — Search term; `country` (string, optional) — Two-letter storefront country code; `lang` (string, optional) — Result language tag; `limit` (integer, optional) — Number of episodes per page; `page` (integer, optional) — Search page number (1-based)

### `apple_podcasts_search`

- **HTTP:** `GET /apple-podcasts/search`
- **What:** Search Apple Podcasts shows. Returns normalized Apple Podcasts shows from Apple's public iTunes Search API.
- **Params:** `term` (string, **required**) — Search term; `country` (string, optional) — Two-letter storefront country code; `lang` (string, optional) — Result language tag; `limit` (integer, optional) — Number of shows per page; `page` (integer, optional) — Search page number (1-based)

### `apple_podcasts_show`

- **HTTP:** `GET /apple-podcasts/show/{id}`
- **What:** Retrieve Apple Podcasts show details. Returns normalized show metadata from Apple's public iTunes Lookup API.
- **Params:** `id` (string, **required**) — Apple Podcasts show ID; `country` (string, optional) — Two-letter storefront country code; `lang` (string, optional) — Result language tag

### `apple_podcasts_show_episodes`

- **HTTP:** `GET /apple-podcasts/show/{id}/episodes`
- **What:** Retrieve Apple Podcasts show episodes. Returns a show and its public Apple Podcasts episodes from Apple's iTunes Lookup API.
- **Params:** `id` (string, **required**) — Apple Podcasts show ID; `country` (string, optional) — Two-letter storefront country code; `lang` (string, optional) — Result language tag; `limit` (integer, optional) — Number of episodes to return

## AppStore (10)

### `appstore_app`

- **HTTP:** `GET /appstore/app`
- **What:** Retrieve full App Store app details. Returns normalized app metadata from the App Store lookup API. Provide either `id` or `app_id`.
- **Params:** `id` (string, optional) — App Store track ID; `app_id` (string, optional) — App Store bundle ID; `country` (string, optional) — Two-letter storefront country code; `lang` (string, optional) — Result language tag; `ratings` (boolean, optional) — Include ratings histogram

### `appstore_developer`

- **HTTP:** `GET /appstore/developer/{dev_id}`
- **What:** Retrieve apps by developer ID. Returns App Store apps associated with a specific developer artist ID.
- **Params:** `dev_id` (string, **required**) — Developer artist ID; `country` (string, optional) — Two-letter storefront country code; `lang` (string, optional) — Result language tag

### `appstore_list`

- **HTTP:** `GET /appstore/list`
- **What:** Retrieve App Store collection rankings. Returns ranked App Store apps from an iTunes RSS collection, optionally expanded to full lookup details.
- **Params:** `collection` (string, optional) — Collection slug; `category` (integer, optional) — Numeric App Store category ID; `country` (string, optional) — Two-letter storefront country code; `lang` (string, optional) — Result language tag; `num` (integer, optional) — Number of apps to return; `full_detail` (boolean, optional) — Expand each app via lookup API

### `appstore_privacy`

- **HTTP:** `GET /appstore/privacy/{id}`
- **What:** Retrieve App Store privacy disclosures. Returns the app privacy cards shown on the App Store page, including data categories and purposes.
- **Params:** `id` (string, **required**) — App Store track ID; `country` (string, optional) — Two-letter storefront country code; `lang` (string, optional) — Result language tag

### `appstore_ratings`

- **HTTP:** `GET /appstore/ratings`
- **What:** Retrieve App Store ratings histogram. Returns total ratings count and the 1-5 star histogram shown on the App Store product page.
- **Params:** `id` (string, optional) — App Store track ID; `app_id` (string, optional) — App Store bundle ID; `country` (string, optional) — Two-letter storefront country code; `lang` (string, optional) — Result language tag

### `appstore_reviews`

- **HTTP:** `GET /appstore/reviews`
- **What:** Retrieve App Store reviews. Returns one page of customer reviews for an app. Provide either `id` or `app_id`.
- **Params:** `id` (string, optional) — App Store track ID; `app_id` (string, optional) — App Store bundle ID; `country` (string, optional) — Two-letter storefront country code; `page` (integer, optional) — Review page number (1-10); `sort` (string, optional) — Sort order; `lang` (string, optional) — Result language tag

### `appstore_search`

- **HTTP:** `GET /appstore/search`
- **What:** Search the App Store. Returns App Store search results for a term. Set `ids_only=true` to return only app IDs.
- **Params:** `term` (string, **required**) — Search term; `num` (integer, optional) — Number of apps per page; `page` (integer, optional) — Search page number (1-based); `country` (string, optional) — Two-letter storefront country code; `lang` (string, optional) — Result language tag; `ids_only` (boolean, optional) — Return only app IDs

### `appstore_similar`

- **HTTP:** `GET /appstore/similar`
- **What:** Retrieve "You Might Also Like" apps. Returns the related apps shown on the App Store product page. Provide either `id` or `app_id`.
- **Params:** `id` (string, optional) — App Store track ID; `app_id` (string, optional) — App Store bundle ID; `country` (string, optional) — Two-letter storefront country code; `lang` (string, optional) — Result language tag

### `appstore_suggest`

- **HTTP:** `GET /appstore/suggest/{term}`
- **What:** Retrieve App Store search suggestions. Returns suggested search terms for the given partial keyword.
- **Params:** `term` (string, **required**) — Partial search term; `country` (string, optional) — Two-letter storefront country code

### `appstore_version_history`

- **HTTP:** `GET /appstore/version-history/{id}`
- **What:** Retrieve App Store version history. Returns the version history entries shown in the App Store "What's New" section.
- **Params:** `id` (string, **required**) — App Store track ID; `country` (string, optional) — Two-letter storefront country code; `lang` (string, optional) — Result language tag

## Bing (5)

### `bing_images`

- **HTTP:** `GET /bing/images`
- **What:** Search Bing image results. Returns normalized Bing image search results for a query string. Locale defaults to country=us and lang=en-us. Results are fetched from public Bing image HTML/async pages and return 503 when Bing serves a challenge page or unusable HTML.
- **Params:** `q` (string, **required**) — Search query; `page` (integer, optional) — 1-based page number; defaults to 1; `count` (integer, optional) — Results per page; defaults to 10, clamped to 1..50; `country` (string, optional) — Two-letter country code; defaults to us; `lang` (string, optional) — Bing UI language; defaults to en-us

### `bing_news`

- **HTTP:** `GET /bing/news`
- **What:** Search Bing news results. Returns normalized Bing news search results for a query string. Locale defaults to country=us and lang=en-us. Results are fetched from public Bing news HTML/async pages and return 503 when Bing serves a challenge page or unusable HTML.
- **Params:** `q` (string, **required**) — Search query; `page` (integer, optional) — 1-based page number; defaults to 1; `count` (integer, optional) — Results per page; defaults to 10, clamped to 1..50; `country` (string, optional) — Two-letter country code; defaults to us; `lang` (string, optional) — Bing UI language; defaults to en-us

### `bing_search`

- **HTTP:** `GET /bing/search`
- **What:** Search Bing web results. Returns normalized Bing web search results for a query string, including organic results, optional context panel data, related queries, people-also-ask questions, news modules, video modules, and page-based pagination. Empty optional blocks are omitted from the JSON response. Locale defaults to country=us and lang=en-us. Results are fetched with the repo's Chrome-impersonated request client and return 503 when Bing serves a challenge page or unusable HTML.
- **Params:** `q` (string, **required**) — Search query; `page` (integer, optional) — 1-based page number; defaults to 1; `count` (integer, optional) — Results per page; defaults to 10, clamped to 1..50; `country` (string, optional) — Two-letter country code; defaults to us; `lang` (string, optional) — Bing UI language; defaults to en-us

### `bing_suggest`

- **HTTP:** `GET /bing/suggest`
- **What:** Suggest Bing search queries. Returns Bing autosuggest query completions for a query prefix. Locale defaults to country=us and lang=en-us. Suggestions are fetched from public Bing suggest endpoints and trimmed to the requested count.
- **Params:** `q` (string, **required**) — Search query prefix; `count` (integer, optional) — Suggestions to return; defaults to 10, clamped to 1..12; `country` (string, optional) — Two-letter country code; defaults to us; `lang` (string, optional) — Bing UI language; defaults to en-us

### `bing_videos`

- **HTTP:** `GET /bing/videos`
- **What:** Search Bing video results. Returns normalized Bing video search results for a query string. Locale defaults to country=us and lang=en-us. Results are fetched from public Bing video HTML/async pages and return 503 when Bing serves a challenge page or unusable HTML.
- **Params:** `q` (string, **required**) — Search query; `page` (integer, optional) — 1-based page number; defaults to 1; `count` (integer, optional) — Results per page; defaults to 10, clamped to 1..50; `country` (string, optional) — Two-letter country code; defaults to us; `lang` (string, optional) — Bing UI language; defaults to en-us

## Brand (1)

### `brand_retrieve`

- **HTTP:** `GET /brand/retrieve`
- **What:** Retrieve brand data by domain. Fetches a domain's homepage and extracts a normalized brand profile (title, description, colors, logos, backdrops, socials, links, and any schema.org organization data). Enrichment-only fields that are not present in the page markup are returned as null.
- **Params:** `domain` (string, **required**) — Domain to retrieve brand data for, e.g. context.dev; `force_language` (string, optional) — Accepted for compatibility; not applied in HTML-only mode; `maxSpeed` (boolean, optional) — Optimize for speed by skipping schema.org and footer-link extraction; `maxAgeMs` (integer, optional) — Cache freshness window in milliseconds, clamps to 1 day..1 year; `timeoutMS` (integer, optional) — Upstream fetch timeout in milliseconds, clamps to 1000..300000

## Brave (5)

### `brave_images`

- **HTTP:** `GET /brave/images`
- **What:** Search Brave image results. Returns normalized Brave image search results for a query string. Locale defaults to country=us and lang=en-us. Results are fetched from public Brave Search image HTML and return 503 when Brave serves a challenge page or unusable HTML.
- **Params:** `q` (string, **required**) — Search query; `offset` (integer, optional) — Zero-based Brave result page; defaults to 0; `count` (integer, optional) — Results to return; defaults to 10, clamped to 1..50; `country` (string, optional) — Brave result country; defaults to us; `lang` (string, optional) — Brave UI language; defaults to en-us

### `brave_news`

- **HTTP:** `GET /brave/news`
- **What:** Search Brave news results. Returns normalized Brave news search results for a query string. Locale defaults to country=us and lang=en-us. Results are fetched from public Brave Search news HTML and return 503 when Brave serves a challenge page or unusable HTML.
- **Params:** `q` (string, **required**) — Search query; `offset` (integer, optional) — Zero-based Brave result page; defaults to 0; `count` (integer, optional) — Results to return; defaults to 10, clamped to 1..50; `country` (string, optional) — Brave result country; defaults to us; `lang` (string, optional) — Brave UI language; defaults to en-us; `time_range` (string, optional) — Preset time filter: any, day, week, month, year, or custom; `date_from` (string, optional) — Custom start date in YYYY-MM-DD; requires date_to; `date_to` (string, optional) — Custom end date in YYYY-MM-DD; requires date_from

### `brave_search`

- **HTTP:** `GET /brave/search`
- **What:** Search Brave. Returns normalized web search results from Brave Search for a query string, along with offset-based pagination, related queries, discussions, videos, and the right-side knowledge card when Brave includes one. Use time_range for preset ranges or date_from/date_to for a custom YYYY-MM-DD range. Locale defaults to country=us and lang=en-us.
- **Params:** `q` (string, **required**) — Search query; `offset` (integer, optional) — Zero-based Brave result page; `country` (string, optional) — Brave result country; defaults to us; `lang` (string, optional) — Brave UI language; defaults to en-us; `time_range` (string, optional) — Preset time filter: any, day, week, month, year, or custom; `date_from` (string, optional) — Custom start date in YYYY-MM-DD; requires date_to; `date_to` (string, optional) — Custom end date in YYYY-MM-DD; requires date_from

### `brave_suggest`

- **HTTP:** `GET /brave/suggest`
- **What:** Suggest Brave search queries. Returns Brave autosuggest query completions for a query prefix. Locale defaults to country=us and lang=en-us. Suggestions are fetched from public Brave Search suggest JSON and trimmed to the requested count.
- **Params:** `q` (string, **required**) — Search query prefix; `count` (integer, optional) — Suggestions to return; defaults to 10, clamped to 1..12; `country` (string, optional) — Brave result country; defaults to us; `lang` (string, optional) — Brave UI language; defaults to en-us

### `brave_videos`

- **HTTP:** `GET /brave/videos`
- **What:** Search Brave video results. Returns normalized Brave video search results for a query string. Locale defaults to country=us and lang=en-us. Results are fetched from public Brave Search video HTML and return 503 when Brave serves a challenge page or unusable HTML.
- **Params:** `q` (string, **required**) — Search query; `offset` (integer, optional) — Zero-based Brave result page; defaults to 0; `count` (integer, optional) — Results to return; defaults to 10, clamped to 1..50; `country` (string, optional) — Brave result country; defaults to us; `lang` (string, optional) — Brave UI language; defaults to en-us; `time_range` (string, optional) — Preset time filter: any, day, week, month, year, or custom; `date_from` (string, optional) — Custom start date in YYYY-MM-DD; requires date_to; `date_to` (string, optional) — Custom end date in YYYY-MM-DD; requires date_from

## CoinGecko (21)

### `coingecko_categories`

- **HTTP:** `GET /coingecko/categories`
- **What:** CoinGecko categories. Returns normalized CoinGecko category rows from the public categories page. This endpoint supports the documented `vs_currency` enum.
- **Params:** `limit` (integer, optional) — Rows to return, default 100, max 100; `vs_currency` (string, optional) — Quote currency

### `coingecko_category_coins`

- **HTTP:** `GET /coingecko/category/{slug}/coins`
- **What:** CoinGecko category coins. Returns normalized coin rows from a CoinGecko public category page. This endpoint supports the documented `vs_currency` enum.
- **Params:** `slug` (string, **required**) — CoinGecko category slug such as stablecoins; `page` (integer, optional) — Page number, default 1; `limit` (integer, optional) — Rows to return, default 100, max 100; `vs_currency` (string, optional) — Quote currency

### `coingecko_chain`

- **HTTP:** `GET /coingecko/chains/{id}`
- **What:** CoinGecko chain detail. Returns normalized sections from a CoinGecko public chain detail page. Sections are omitted when not present. This endpoint supports the documented `vs_currency` enum.
- **Params:** `id` (string, **required**) — CoinGecko chain id such as ethereum; `limit` (integer, optional) — Rows per section to return, default 20, max 100; `vs_currency` (string, optional) — Quote currency

### `coingecko_chains`

- **HTTP:** `GET /coingecko/chains`
- **What:** CoinGecko chains. Returns normalized chain rows from the CoinGecko public website chains table. This endpoint supports the documented `vs_currency` enum.
- **Params:** `limit` (integer, optional) — Rows to return, default 100, max 100; `vs_currency` (string, optional) — Quote currency

### `coingecko_coin`

- **HTTP:** `GET /coingecko/coin/{id}`
- **What:** CoinGecko coin profile. Returns normalized CoinGecko profile, market stats, links, and categories for one coin id. This endpoint supports the documented `vs_currency` enum and is not intended for real-time trading.
- **Params:** `id` (string, **required**) — CoinGecko coin id such as bitcoin; `vs_currency` (string, optional) — Quote currency

### `coingecko_coin_analysis`

- **HTTP:** `GET /coingecko/coin/{id}/analysis`
- **What:** CoinGecko coin chart analysis. Returns derived price-chart metrics from CoinGecko public chart JSON. This endpoint supports the documented `vs_currency` enum and is not investment advice or real-time trading data.
- **Params:** `id` (string, **required**) — CoinGecko coin id such as bitcoin; `vs_currency` (string, optional) — Quote currency; `range` (string, optional) — Chart range; `include_annotations` (boolean, optional) — Fetch optional CoinGecko chart annotations

### `coingecko_exchange`

- **HTTP:** `GET /coingecko/exchange/{id}`
- **What:** CoinGecko exchange detail. Returns normalized profile stats and market rows from a CoinGecko public exchange page. This endpoint supports the documented `vs_currency` enum.
- **Params:** `id` (string, **required**) — CoinGecko exchange id such as binance; `limit` (integer, optional) — Rows to return, default 100, max 100; `vs_currency` (string, optional) — Quote currency

### `coingecko_exchanges`

- **HTTP:** `GET /coingecko/exchanges`
- **What:** CoinGecko exchanges. Returns normalized exchange rows from CoinGecko public website exchange tables. This endpoint supports the documented `vs_currency` enum.
- **Params:** `kind` (string, optional) — Exchange table kind, default spot; `page` (integer, optional) — Page number, default 1; `limit` (integer, optional) — Rows to return, default 100, max 100; `vs_currency` (string, optional) — Quote currency

### `coingecko_gainers_losers`

- **HTTP:** `GET /coingecko/gainers-losers`
- **What:** CoinGecko crypto gainers and losers. Returns normalized rows from CoinGecko's public crypto gainers and losers table. This endpoint supports the documented `vs_currency` enum.
- **Params:** `limit` (integer, optional) — Rows per section to return, default 20, max 100; `vs_currency` (string, optional) — Quote currency

### `coingecko_global`

- **HTTP:** `GET /coingecko/global`
- **What:** CoinGecko global market snapshot. Returns normalized global market metrics from CoinGecko's public charts page.
- **Params:** _none_

### `coingecko_global_charts`

- **HTTP:** `GET /coingecko/global/charts`
- **What:** CoinGecko global chart series. Returns normalized global chart series from public CoinGecko website JSON endpoints.
- **Params:** `kind` (string, optional) — Chart kind, default total_market_cap; `range` (string, optional) — Chart range, default 90d; `limit` (integer, optional) — Rows per series to return, default 120, max 500

### `coingecko_learn_articles`

- **HTTP:** `GET /coingecko/learn/articles`
- **What:** CoinGecko Learn articles. Returns normalized article cards from CoinGecko Learn public pages.
- **Params:** `category` (string, optional) — Learn category, default all; `limit` (integer, optional) — Rows to return, default 20, max 50

### `coingecko_markets`

- **HTTP:** `GET /coingecko/markets`
- **What:** CoinGecko markets. Returns normalized cryptocurrency market rows from CoinGecko public pages. This endpoint supports the documented `vs_currency` enum and is not intended for real-time trading.
- **Params:** `page` (integer, optional) — Page number, default 1; `limit` (integer, optional) — Rows to return, default 100, max 100; `vs_currency` (string, optional) — Quote currency

### `coingecko_new_coins`

- **HTTP:** `GET /coingecko/new-coins`
- **What:** CoinGecko new cryptocurrencies. Returns normalized rows from CoinGecko's public new cryptocurrencies table. This endpoint supports the documented `vs_currency` enum.
- **Params:** `page` (integer, optional) — Page number, default 1; `limit` (integer, optional) — Rows to return, default 100, max 100; `vs_currency` (string, optional) — Quote currency

### `coingecko_news`

- **HTTP:** `GET /coingecko/news`
- **What:** CoinGecko news cards. Returns normalized article cards from CoinGecko's public news page.
- **Params:** `limit` (integer, optional) — Rows to return, default 20, max 50

### `coingecko_nft_category`

- **HTTP:** `GET /coingecko/nft/category/{slug}`
- **What:** CoinGecko NFT category. Returns normalized NFT collection rows from a CoinGecko public NFT category page. This endpoint supports the documented `vs_currency` enum.
- **Params:** `slug` (string, **required**) — CoinGecko NFT category slug such as metaverse; `page` (integer, optional) — Page number, default 1; `limit` (integer, optional) — Rows to return, default 100, max 100; `vs_currency` (string, optional) — Quote currency

### `coingecko_nfts`

- **HTTP:** `GET /coingecko/nfts`
- **What:** CoinGecko NFT collections. Returns normalized NFT collection rows from the CoinGecko public website NFT table. This endpoint supports the documented `vs_currency` enum.
- **Params:** `page` (integer, optional) — Page number, default 1; `limit` (integer, optional) — Rows to return, default 100, max 100; `vs_currency` (string, optional) — Quote currency

### `coingecko_search`

- **HTTP:** `GET /coingecko/search`
- **What:** CoinGecko discovery search. Returns normalized CoinGecko search sections from the public website search JSON. Empty valid searches return empty arrays.
- **Params:** `q` (string, **required**) — Search query; `limit` (integer, optional) — Rows per section to return, default 10, max 50

### `coingecko_token_unlocks`

- **HTTP:** `GET /coingecko/token-unlocks`
- **What:** CoinGecko incoming token unlocks. Returns normalized rows from CoinGecko's public incoming token unlocks page.
- **Params:** `limit` (integer, optional) — Rows to return, default 100, max 100

### `coingecko_treasuries`

- **HTTP:** `GET /coingecko/treasuries`
- **What:** CoinGecko crypto treasuries. Returns normalized entity rows from CoinGecko's public crypto treasuries tables. This endpoint supports the documented `vs_currency` enum.
- **Params:** `asset` (string, optional) — Treasury asset filter, default all; `holder_type` (string, optional) — Treasury holder type filter, default all; `limit` (integer, optional) — Rows to return, default 100, max 100; `vs_currency` (string, optional) — Quote currency

### `coingecko_trending`

- **HTTP:** `GET /coingecko/trending`
- **What:** CoinGecko trending highlights. Returns deduped trending coins and categories from the public CoinGecko highlights page. This endpoint supports the documented `vs_currency` enum.
- **Params:** `limit` (integer, optional) — Rows per section to return, default 20, max 50; `vs_currency` (string, optional) — Quote currency

## Datasets (5)

### `datasets_google_map_businesses_facets`

- **HTTP:** `GET /datasets/google-map-businesses/facets`
- **What:** Facet stored Google Maps businesses. Returns terms aggregation counts for Google Maps businesses. Facet enum: `category`, `country`, `state`, `county`, `city`, `town`, `website_status`.
- **Params:** `facet` (string, **required**) — Facet enum: category, country, state, county, city, town, website_status; `q` (string, optional) — Full-text business search query, max 256 characters; `category` (string, optional) — Exact category filter, max 128 characters; `country` (string, optional) — Exact country filter, max 128 characters; `state` (string, optional) — Exact state filter, max 128 characters; `county` (string, optional) — Exact county filter, max 128 characters; `city` (string, optional) — Exact city filter, max 128 characters; `town` (string, optional) — Exact town filter, max 128 characters; `min_rating` (number, optional) — Minimum rating, 0 through 5; `min_review_count` (integer, optional) — Minimum review count; `has_website` (boolean, optional) — Filter by website presence; `has_phone` (boolean, optional) — Filter by phone presence; `lat` (number, optional) — Latitude for radius filtering; `lon` (number, optional) — Longitude for radius filtering; `radius_m` (integer, optional) — Radius in meters, 1 through 50000; requires lat and lon when supplied; `sort` (string, optional) — Sort enum: relevance, updated_at_desc, rating_desc, review_count_desc, distance_asc

### `datasets_google_map_businesses_item`

- **HTTP:** `GET /datasets/google-map-businesses/items/{place_id}`
- **What:** Get a stored Google Maps business. Returns one stored Google Maps business by Google place_id from dataset id enum value `google-map-businesses`.
- **Params:** `place_id` (string, **required**) — Google Place ID, max 256 characters

### `datasets_google_map_businesses_nearby`

- **HTTP:** `GET /datasets/google-map-businesses/nearby`
- **What:** Search nearby stored Google Maps businesses. Searches stored Google Maps businesses near a coordinate in dataset id enum value `google-map-businesses`.
- **Params:** `lat` (number, **required**) — Latitude; `lon` (number, **required**) — Longitude; `radius_m` (integer, **required**) — Radius in meters, max 50000; `category` (string, optional) — Exact category filter, max 128 characters; `min_rating` (number, optional) — Minimum rating, 0 through 5; `min_review_count` (integer, optional) — Minimum review count; `page` (integer, optional) — Page number, defaults to 1; `page_size` (integer, optional) — Page size, defaults to 20 and maxes at 100; page * page_size must be <= 10000

### `datasets_google_map_businesses_search`

- **HTTP:** `GET /datasets/google-map-businesses/search`
- **What:** Search stored Google Maps businesses. Searches Google Maps business records stored in Elasticsearch. Sort enum: `relevance`, `updated_at_desc`, `rating_desc`, `review_count_desc`, `distance_asc`.
- **Params:** `q` (string, optional) — Full-text business search query, max 256 characters; `category` (string, optional) — Exact category filter, max 128 characters; `country` (string, optional) — Exact country filter, max 128 characters; `state` (string, optional) — Exact state filter, max 128 characters; `county` (string, optional) — Exact county filter, max 128 characters; `city` (string, optional) — Exact city filter, max 128 characters; `town` (string, optional) — Exact town filter, max 128 characters; `min_rating` (number, optional) — Minimum rating, 0 through 5; `min_review_count` (integer, optional) — Minimum review count; `has_website` (boolean, optional) — Filter by website presence; `has_phone` (boolean, optional) — Filter by phone presence; `lat` (number, optional) — Latitude for radius filtering or distance sort; `lon` (number, optional) — Longitude for radius filtering or distance sort; `radius_m` (integer, optional) — Radius in meters, 1 through 50000; requires lat and lon when supplied; `sort` (string, optional) — Sort enum: relevance, updated_at_desc, rating_desc, review_count_desc, distance_asc; `page` (integer, optional) — Page number, defaults to 1; `page_size` (integer, optional) — Page size, defaults to 20 and maxes at 100; page * page_size must be <= 10000

### `datasets_list`

- **HTTP:** `GET /datasets`
- **What:** List stored scraped datasets. Lists available read-only scraped datasets. Initial dataset id enum: `google-map-businesses`.
- **Params:** _none_

## eBay (6)

### `ebay_item`

- **HTTP:** `GET /ebay/item/{item_id}`
- **What:** Get eBay item details. Returns normalized details for a public eBay item listing.
- **Params:** `item_id` (string, **required**) — eBay item ID

### `ebay_search`

- **HTTP:** `POST /ebay/search`
- **What:** Search eBay listings. Returns normalized eBay search results.
- **Params:** `option` (object, **required**) — eBay search payload

### `ebay_seller`

- **HTTP:** `GET /ebay/seller/{seller}`
- **What:** Get eBay seller profile. Returns normalized details for a public eBay seller profile.
- **Params:** `seller` (string, **required**) — eBay seller username

### `ebay_seller_about`

- **HTTP:** `GET /ebay/seller/{seller}/about`
- **What:** Get eBay seller about details. Returns normalized seller about information from the public eBay store about tab, including seller stats, top-rated status, optional location/member-since fields, and cleaned store categories.
- **Params:** `seller` (string, **required**) — eBay seller username

### `ebay_seller_feedback`

- **HTTP:** `GET /ebay/seller/{seller}/feedback`
- **What:** Get eBay seller feedback. Returns normalized seller feedback summary, detailed ratings, and recent review cards from the public eBay seller feedback tab.
- **Params:** `seller` (string, **required**) — eBay seller username; `page` (integer, optional) — Feedback page number; `per_page` (integer, optional) — Reviews per page

### `ebay_seller_shop`

- **HTTP:** `GET /ebay/seller/{seller}/shop`
- **What:** Get eBay seller shop listings. Returns normalized listings from the public eBay seller shop tab, with pagination backed by the store odtRefresh response.
- **Params:** `seller` (string, **required**) — eBay seller username; `page` (integer, optional) — Shop page number

## Geocoding (3)

### `geocoding_lookup`

- **HTTP:** `GET /geocoding/lookup`
- **What:** Lookup Nominatim OSM ids. Returns typed Nominatim JSONv2 places for comma-separated OSM ids such as W34633854,N123,R456.
- **Params:** `osm_ids` (string, **required**) — Comma-separated OSM ids such as W34633854,N123,R456; `accept_language` (string, optional) — Preferred result language, forwarded to Nominatim; `addressdetails` (boolean, optional) — Include address details, defaults to true; `extratags` (boolean, optional) — Include OSM extra tags; `namedetails` (boolean, optional) — Include multilingual name details

### `geocoding_reverse`

- **HTTP:** `GET /geocoding/reverse`
- **What:** Reverse geocode coordinates. Returns the nearest typed Nominatim JSONv2 place for latitude and longitude.
- **Params:** `lat` (number, **required**) — Latitude; `lon` (number, **required**) — Longitude; `zoom` (integer, optional) — Nominatim address zoom, defaults to 18; `accept_language` (string, optional) — Preferred result language, forwarded to Nominatim; `addressdetails` (boolean, optional) — Include address details, defaults to true; `extratags` (boolean, optional) — Include OSM extra tags; `namedetails` (boolean, optional) — Include multilingual name details

### `geocoding_search`

- **HTTP:** `GET /geocoding/search`
- **What:** Search Nominatim places. Returns typed Nominatim JSONv2 forward geocoding results. Use either q or structured fields, not both.
- **Params:** `q` (string, optional) — Free-text search query; `street` (string, optional) — Structured street or house number; `city` (string, optional) — Structured city; `county` (string, optional) — Structured county; `state` (string, optional) — Structured state; `country` (string, optional) — Structured country; `postalcode` (string, optional) — Structured postal code; `limit` (integer, optional) — Maximum results, defaults to 10 and clamps to 20; `countrycodes` (string, optional) — Comma-separated ISO 3166-1 alpha-2 country filters; `accept_language` (string, optional) — Preferred result language, forwarded to Nominatim; `addressdetails` (boolean, optional) — Include address details, defaults to true; `extratags` (boolean, optional) — Include OSM extra tags; `namedetails` (boolean, optional) — Include multilingual name details

## Google (5)

### `google_jobs`

- **HTTP:** `POST /google/jobs`
- **What:** Search Google Jobs. Returns normalized Google Jobs results parsed from public Google web responses.
- **Params:** `option` (object, **required**) — Google Jobs search payload

### `google_news`

- **HTTP:** `GET /google/news`
- **What:** Search Google News. Returns normalized Google News vertical results (title, source, link, age) parsed from the public Google News results page. Locale defaults to country=us and lang=en. Returns 503 when Google serves a challenge page or unusable HTML.
- **Params:** `q` (string, **required**) — Search query; `page` (integer, optional) — 1-based page number; defaults to 1; `count` (integer, optional) — Results per page; defaults to 10, clamped to 1..50; `country` (string, optional) — Two-letter country code; defaults to us; `lang` (string, optional) — Google UI language; defaults to en

### `google_search`

- **HTTP:** `POST /google/search`
- **What:** Google search API. Returns normalized Google web search results. Results are fetched through Rayobrowse-rendered Chrome with availability fanout and stale-cache fallback when available. The endpoint returns 503 when Google serves a challenge page or unusable HTML. Rate limit is enforced at 1 request per second, and if the limit is exceeded a 429 status code is returned with rate limit headers.
- **Params:** `searchOption` (object, **required**) — Search options

### `google_suggest`

- **HTTP:** `GET /google/suggest`
- **What:** Suggest Google search queries. Returns Google autosuggest query completions from the public unauthenticated suggest JSON endpoint.
- **Params:** `q` (string, **required**) — Search query prefix; `count` (integer, optional) — Suggestions to return; defaults to 10, clamped to 1..12; `country` (string, optional) — Google result country; defaults to us; `lang` (string, optional) — Google UI language; defaults to en

### `google_videos`

- **HTTP:** `GET /google/videos`
- **What:** Search Google video results. Returns normalized Google video vertical results (title, platform, link, duration, age) parsed from the public Google video results page. Locale defaults to country=us and lang=en. Returns 503 when Google serves a challenge page or unusable HTML.
- **Params:** `q` (string, **required**) — Search query; `page` (integer, optional) — 1-based page number; defaults to 1; `count` (integer, optional) — Results per page; defaults to 10, clamped to 1..50; `country` (string, optional) — Two-letter country code; defaults to us; `lang` (string, optional) — Google UI language; defaults to en

## Google Finance (20)

### `google_finance_analyst_articles`

- **HTTP:** `GET /google/finance/analyst-articles/{quote}`
- **What:** Google Finance analyst articles. Returns normalized analyst article results for a quote.
- **Params:** `quote` (string, **required**) — Quote identifier such as AAPL:NASDAQ

### `google_finance_chart`

- **HTTP:** `GET /google/finance/chart/{quote}`
- **What:** Google Finance chart data. Returns normalized chart points for a quote and window.
- **Params:** `quote` (string, **required**) — Quote identifier such as AAPL:NASDAQ; `window` (string, optional) — Window: 1d, 5d, 1m, 6m, ytd, 1y, 5y, max

### `google_finance_classification`

- **HTTP:** `GET /google/finance/classification/{quote}`
- **What:** Google Finance classification data. Returns normalized classification strings for a quote.
- **Params:** `quote` (string, **required**) — Quote identifier such as AAPL:NASDAQ

### `google_finance_company`

- **HTTP:** `GET /google/finance/company/{quote}`
- **What:** Google Finance company data. Returns normalized company information from Google Finance.
- **Params:** `quote` (string, **required**) — Quote identifier such as AAPL:NASDAQ

### `google_finance_context`

- **HTTP:** `GET /google/finance/context`
- **What:** Returns normalized Google Finance context search results.
- **Params:** `q` (string, **required**) — Search query

### `google_finance_financials`

- **HTTP:** `GET /google/finance/financials/{quote}`
- **What:** Google Finance financial statements. Returns normalized annual and quarterly financial rows when Google Finance has statement data for the quote.
- **Params:** `quote` (string, **required**) — Quote identifier such as AAPL:NASDAQ

### `google_finance_markets_category_news`

- **HTTP:** `GET /google/finance/markets/categories/{category}/news`
- **What:** Google Finance category news. Returns normalized news for a Google Finance category.
- **Params:** `category` (string, **required**) — Google Finance category id; `offset` (integer, optional) — Result offset

### `google_finance_markets_category_stocks`

- **HTTP:** `GET /google/finance/markets/categories/{category}/stocks`
- **What:** Google Finance category stocks. Returns normalized instruments for a Google Finance category.
- **Params:** `category` (string, **required**) — Google Finance category id; `offset` (integer, optional) — Result offset

### `google_finance_markets_earnings`

- **HTTP:** `GET /google/finance/markets/earnings`
- **What:** Google Finance earnings calendar. Returns normalized earnings calendar instruments.
- **Params:** _none_

### `google_finance_markets_featured`

- **HTTP:** `GET /google/finance/markets/featured`
- **What:** Google Finance featured stocks. Returns normalized featured instruments.
- **Params:** _none_

### `google_finance_markets_headline`

- **HTTP:** `GET /google/finance/markets/headline`
- **What:** Google Finance top headline. Returns the top Google Finance headline.
- **Params:** _none_

### `google_finance_markets_indices`

- **HTTP:** `GET /google/finance/markets/indices`
- **What:** Google Finance market indices. Returns normalized market index instruments.
- **Params:** _none_

### `google_finance_markets_movers`

- **HTTP:** `GET /google/finance/markets/movers`
- **What:** Google Finance market movers. Returns normalized market mover instruments.
- **Params:** `categories` (string, optional) — Comma-separated numeric categories; `count` (integer, optional) — Result count; `offset` (integer, optional) — Result offset

### `google_finance_markets_top`

- **HTTP:** `GET /google/finance/markets/top`
- **What:** Google Finance top stocks by metric. Returns normalized top instruments for a Google Finance metric.
- **Params:** `metric` (integer, optional) — Google Finance metric id; `page` (integer, optional) — Page number

### `google_finance_markets_trending`

- **HTTP:** `GET /google/finance/markets/trending`
- **What:** Google Finance trending stocks. Returns normalized trending instruments.
- **Params:** `limit` (integer, optional) — Result limit

### `google_finance_news`

- **HTTP:** `GET /google/finance/news/{quote}`
- **What:** Google Finance quote news. Returns normalized news articles for a quote.
- **Params:** `quote` (string, **required**) — Quote identifier such as AAPL:NASDAQ; `limit` (integer, optional) — Article limit

### `google_finance_quote`

- **HTTP:** `GET /google/finance/quote/{quote}`
- **What:** Google Finance Quote API. Fetches the latest quote data for a provided stock symbol from Google Finance https://www.google.com/finance/quote/AAPL:NASDAQ?hl=en.
- **Params:** `quote` (string, **required**) — Stock symbol to fetch the latest quote for (e.g., AAPL:NASDAQ, BTC-USD)

### `google_finance_related`

- **HTTP:** `GET /google/finance/related/{quote}`
- **What:** Google Finance related instruments. Returns normalized related instruments for a quote.
- **Params:** `quote` (string, **required**) — Quote identifier such as AAPL:NASDAQ

### `google_finance_search`

- **HTTP:** `GET /google/finance/search`
- **What:** Google Finance Search API. Fetches normalized search results for a provided keyword from Google Finance.
- **Params:** `q` (string, **required**) — Keyword to search for (e.g., Apple)

### `google_finance_ticker`

- **HTTP:** `GET /google/finance/ticker/{ticker}`
- **What:** Google Finance Ticker API. Fetches chart ticker data from Google Finance based on a provided ticker and window period.
- **Params:** `ticker` (string, **required**) — Ticker symbol to fetch data for example:AAPL:NASDAQ, BTC-USD; `window` (string, optional) — Time window for the ticker data (default: 1d), options: 1d, 5d, 1m, 6m, 1y, 5y, max

## Google Map (2)

### `google_map_place`

- **HTTP:** `GET /google/map/place/{place_id}`
- **What:** Google Maps place details API. Returns detailed information for a specified place_id. Rate limit is enforced at 1 request per second.
- **Params:** `place_id` (string, **required**) — Google Place ID

### `google_map_search`

- **HTTP:** `POST /google/map/search`
- **What:** Google Maps search API. Returns results from Google Maps based on search options. Rate limit is enforced at 1 request per second.
- **Params:** `mapSearchOption` (object, **required**) — Search options

## Google Trends (11)

### `google_trends_categories`

- **HTTP:** `GET /google/trends/categories`
- **What:** Google Trends categories. Returns supported top-level Google Trends category ids and labels for Trending Now category filters.
- **Params:** _none_

### `google_trends_enums`

- **HTTP:** `GET /google/trends/enums`
- **What:** Google Trends enum metadata. Returns supported Google Trends enum values for explore/trending filters, including locations, date ranges, search types, categories, statuses, and sort modes.
- **Params:** _none_

### `google_trends_explore`

- **HTTP:** `POST /google/trends/explore`
- **What:** Google Trends explore data. Returns normalized Google Trends keyword analytics from internal Trends widget requests: interest over time, interest by region, related queries, and related topics when available.
- **Params:** `request` (object, **required**) — Explore request

### `google_trends_explore_interest_by_region`

- **HTTP:** `POST /google/trends/explore/interest-by-region`
- **What:** Google Trends interest by region. Returns only the interest-by-region widget from the Google Trends Explore widget flow. Supports multiple comparison terms and returns an empty interest_by_region array when Google returns no rows.
- **Params:** `request` (object, **required**) — Explore request

### `google_trends_explore_interest_over_time`

- **HTTP:** `POST /google/trends/explore/interest-over-time`
- **What:** Google Trends interest over time. Returns only the interest-over-time timeline from the Google Trends Explore widget flow. Supports multiple comparison terms.
- **Params:** `request` (object, **required**) — Explore request

### `google_trends_explore_related_topics`

- **HTTP:** `POST /google/trends/explore/related-topics`
- **What:** Google Trends related topics. Returns only the related topics widget from the Google Trends Explore widget flow. Returns an empty related_topics array when Google returns no topic rows for the requested term/filter combination.
- **Params:** `request` (object, **required**) — Explore request

### `google_trends_explore_rising_queries`

- **HTTP:** `POST /google/trends/explore/rising-queries`
- **What:** Google Trends explore rising queries. Returns the Rising related queries widget for one or more Google Trends explore terms. Returns an empty queries array when Google returns no rows for the requested term/filter combination.
- **Params:** `request` (object, **required**) — Explore request

### `google_trends_explore_top_queries`

- **HTTP:** `POST /google/trends/explore/top-queries`
- **What:** Google Trends explore top queries. Returns the Top related queries widget for one or more Google Trends explore terms. Returns an empty queries array when Google returns no rows for the requested term/filter combination.
- **Params:** `request` (object, **required**) — Explore request

### `google_trends_locations`

- **HTTP:** `GET /google/trends/locations`
- **What:** Google Trends locations. Returns supported Google Trends location codes. Explore endpoints also accept WORLDWIDE.
- **Params:** _none_

### `google_trends_trending`

- **HTTP:** `GET /google/trends/trending`
- **What:** Google Trends trending now data. Returns normalized Google Trends Trending Now rows from the internal TrendsUi batch RPC replay.
- **Params:** `geo` (string, optional) — Country/territory location code; `hl` (string, optional) — Google Trends UI locale; `tz` (integer, optional) — Timezone offset minutes; `window` (string, optional) — Trend window; `time_range` (string, optional) — Alias for window; `category` (integer, optional) — Trending category id; `status` (string, optional) — Trend status filter; `sort_by` (string, optional) — Sort mode; `limit` (integer, optional) — Maximum rows to return

### `google_trends_trending_detail`

- **HTTP:** `POST /google/trends/trending/detail`
- **What:** Google Trends trending term detail. Returns the Explore detail widgets for a single trending term, including interest over time, regional interest, top/rising related queries, and related topics when Google returns them.
- **Params:** `request` (object, **required**) — Trending detail request

## GooglePlay (10)

### `googleplay_app`

- **HTTP:** `GET /googleplay/app`
- **What:** Retrieve full Google Play app details. Returns normalized app metadata from a Google Play details page, including installs, ratings, pricing, version info, developer metadata, media assets, release state, and selected user comments. Defaults: `country=us`, `lang=en`.
- **Params:** `app_id` (string, **required**) — Google Play package name; `country` (string, optional) — Two-letter storefront country code; `lang` (string, optional) — Two-letter language code

### `googleplay_categories`

- **HTTP:** `GET /googleplay/categories`
- **What:** Retrieve Google Play app categories. Returns category ids found in the Google Play apps navigation.
- **Params:** `country` (string, optional) — Two-letter country code; `lang` (string, optional) — Two-letter language code

### `googleplay_datasafety`

- **HTTP:** `GET /googleplay/datasafety`
- **What:** Retrieve Google Play data safety details. Returns the data safety information displayed on Google Play.
- **Params:** `app_id` (string, **required**) — Google Play app id; `lang` (string, optional) — Two-letter language code

### `googleplay_developer`

- **HTTP:** `GET /googleplay/developer/{dev_id}`
- **What:** Retrieve apps by Google Play developer. Returns apps published by a developer id or developer name.
- **Params:** `dev_id` (string, **required**) — Developer id or name; `num` (integer, optional) — Number of apps; `country` (string, optional) — Two-letter country code; `lang` (string, optional) — Two-letter language code; `full_detail` (boolean, optional) — Resolve each app to full detail

### `googleplay_list`

- **HTTP:** `GET /googleplay/list`
- **What:** Retrieve apps from a Google Play top collection. Returns apps from a Google Play collection and category.
- **Params:** `collection` (string, optional) — Collection: TOP_FREE, TOP_PAID, GROSSING; `category` (string, optional) — Category id; `age` (string, optional) — Family age range; `num` (integer, optional) — Number of apps; `country` (string, optional) — Two-letter country code; `lang` (string, optional) — Two-letter language code; `full_detail` (boolean, optional) — Resolve each app to full detail

### `googleplay_permissions`

- **HTTP:** `GET /googleplay/permissions`
- **What:** Retrieve Google Play app permissions. Returns Google Play permission groups or a short permission name list.
- **Params:** `app_id` (string, **required**) — Google Play app id; `country` (string, optional) — Two-letter country code; `lang` (string, optional) — Two-letter language code; `short` (boolean, optional) — Return only permission names

### `googleplay_reviews`

- **HTTP:** `GET /googleplay/reviews`
- **What:** Retrieve Google Play reviews. Returns one or more pages of app reviews. Set `paginate=true` to fetch only the requested page.
- **Params:** `app_id` (string, **required**) — Google Play app id; `sort` (string, optional) — Sort: helpfulness, newest, rating; `num` (integer, optional) — Number of reviews; `country` (string, optional) — Two-letter country code; `lang` (string, optional) — Two-letter language code; `paginate` (boolean, optional) — Only fetch the requested page; `next_pagination_token` (string, optional) — Token from a previous response

### `googleplay_search`

- **HTTP:** `GET /googleplay/search`
- **What:** Search Google Play. Returns Google Play search results for a term.
- **Params:** `term` (string, **required**) — Search term; `num` (integer, optional) — Number of apps; `country` (string, optional) — Two-letter country code; `lang` (string, optional) — Two-letter language code; `full_detail` (boolean, optional) — Resolve each app to full detail; `price` (string, optional) — Price filter: all, free, paid

### `googleplay_similar`

- **HTTP:** `GET /googleplay/similar`
- **What:** Retrieve similar Google Play apps. Returns apps from the "Similar apps" cluster on an app details page.
- **Params:** `app_id` (string, **required**) — Google Play app id; `num` (integer, optional) — Number of apps; `country` (string, optional) — Two-letter country code; `lang` (string, optional) — Two-letter language code; `full_detail` (boolean, optional) — Resolve each app to full detail

### `googleplay_suggest`

- **HTTP:** `GET /googleplay/suggest/{term}`
- **What:** Retrieve Google Play query suggestions. Returns up to 10 suggestions for a search term.
- **Params:** `term` (string, **required**) — Search term prefix; `country` (string, optional) — Two-letter country code; `lang` (string, optional) — Two-letter language code

## Instagram (3)

### `instagram_post`

- **HTTP:** `GET /instagram/post/{id}/{post_id}`
- **What:** Retrieve a specific Instagram post by user ID and post ID. Returns the media details of a specific post from an Instagram user.
- **Params:** `id` (string, **required**) — Instagram user ID; `post_id` (string, **required**) — Instagram post ID

### `instagram_profile`

- **HTTP:** `GET /instagram/profile/{username}`
- **What:** Retrieve an Instagram user profile by username. Returns public profile details for a specified Instagram username.
- **Params:** `username` (string, **required**) — Instagram username

### `instagram_reels`

- **HTTP:** `GET /instagram/reels/{id}`
- **What:** Retrieve Instagram Reels for a user. Returns a feed of Instagram Reels for the specified user ID. Supports pagination via `max_id`.
- **Params:** `id` (string, **required**) — Instagram user ID; `max_id` (string, optional) — Pagination cursor for fetching the next page of Reels

## JustWatch (21)

### `justwatch_age_certifications`

- **HTTP:** `GET /justwatch/age-certifications`
- **What:** Get JustWatch age certifications. Returns JustWatch age certification technical names for a country.
- **Params:** `country` (string, optional) — Two-letter country code

### `justwatch_discover`

- **HTTP:** `GET /justwatch/discover`
- **What:** Discover JustWatch titles. Returns popular movies and shows filtered by optional genre short names, provider short names, monetization types, and release year bounds. Type accepts only `all`, `movie`, or `show`; monetization_types accepts only `FLATRATE`, `FREE`, `ADS`, `RENT`, or `BUY`.
- **Params:** `country` (string, optional) — Two-letter country code; `language` (string, optional) — Two-letter language code; `limit` (integer, optional) — Maximum results, defaults to 20 and clamps to 50; `type` (string, optional) — Title type: all, movie, show; `genres` (string, optional) — Comma-separated JustWatch genre short names; `providers` (string, optional) — Comma-separated JustWatch provider short names; `monetization_types` (string, optional) — Comma-separated monetization types: FLATRATE, FREE, ADS, RENT, BUY; `year_min` (integer, optional) — Minimum release year; `year_max` (integer, optional) — Maximum release year

### `justwatch_episode_by_id`

- **HTTP:** `GET /justwatch/episode/by-id`
- **What:** Get JustWatch episode by raw id. Looks up an episode by raw JustWatch GraphQL id such as `tse5550494` and returns normalized metadata and offers.
- **Params:** `id` (string, **required**) — Raw JustWatch episode id matching tse[0-9]+; `country` (string, optional) — Two-letter country code; `language` (string, optional) — Two-letter language code

### `justwatch_episode_offers`

- **HTTP:** `GET /justwatch/episode/offers`
- **What:** Get JustWatch episode offers. Returns normalized offers for a raw JustWatch episode id across one to five comma-separated country codes.
- **Params:** `id` (string, **required**) — Raw JustWatch episode id matching tse[0-9]+; `countries` (string, optional) — One to five comma-separated two-letter country codes; `language` (string, optional) — Two-letter language code

### `justwatch_genre_titles`

- **HTTP:** `GET /justwatch/genre/titles`
- **What:** Get JustWatch genre titles. Returns popular titles for one JustWatch genre short name such as `act`. Type accepts only `all`, `movie`, or `show`.
- **Params:** `genre` (string, **required**) — JustWatch genre short name; `country` (string, optional) — Two-letter country code; `language` (string, optional) — Two-letter language code; `limit` (integer, optional) — Maximum results, defaults to 20 and clamps to 50; `type` (string, optional) — Title type: all, movie, show

### `justwatch_genres`

- **HTTP:** `GET /justwatch/genres`
- **What:** Get JustWatch genres. Returns JustWatch genre short names and localized translations.
- **Params:** `language` (string, optional) — Two-letter language code

### `justwatch_monetization_titles`

- **HTTP:** `GET /justwatch/monetization/titles`
- **What:** Get JustWatch monetization titles. Returns popular titles for one monetization type. monetization_type accepts only `FLATRATE`, `FREE`, `ADS`, `RENT`, or `BUY`; type accepts only `all`, `movie`, or `show`.
- **Params:** `monetization_type` (string, **required**) — Monetization type: FLATRATE, FREE, ADS, RENT, BUY; `country` (string, optional) — Two-letter country code; `language` (string, optional) — Two-letter language code; `limit` (integer, optional) — Maximum results, defaults to 20 and clamps to 50; `type` (string, optional) — Title type: all, movie, show

### `justwatch_new`

- **HTTP:** `GET /justwatch/new`
- **What:** Get new JustWatch titles. Returns newly available movies and shows from the public JustWatch website GraphQL endpoint. Type accepts only `all`, `movie`, or `show`; limit defaults to 20 and clamps to 50.
- **Params:** `country` (string, optional) — Two-letter country code; `language` (string, optional) — Two-letter language code; `limit` (integer, optional) — Maximum results, defaults to 20 and clamps to 50; `type` (string, optional) — Title type: all, movie, show

### `justwatch_popular`

- **HTTP:** `GET /justwatch/popular`
- **What:** Get popular JustWatch titles. Returns popular movies and shows from the public JustWatch website GraphQL endpoint. Type accepts only `all`, `movie`, or `show`; limit defaults to 20 and clamps to 50.
- **Params:** `country` (string, optional) — Two-letter country code; `language` (string, optional) — Two-letter language code; `limit` (integer, optional) — Maximum results, defaults to 20 and clamps to 50; `type` (string, optional) — Title type: all, movie, show

### `justwatch_provider_titles`

- **HTTP:** `GET /justwatch/provider/titles`
- **What:** Get JustWatch provider titles. Returns popular movie/show titles available through a JustWatch provider short name such as `nfx`.
- **Params:** `provider` (string, **required**) — JustWatch provider short name; `country` (string, optional) — Two-letter country code; `language` (string, optional) — Two-letter language code; `limit` (integer, optional) — Maximum results, defaults to 20 and clamps to 50; `type` (string, optional) — Title type: all, movie, show

### `justwatch_providers`

- **HTTP:** `GET /justwatch/providers`
- **What:** Get JustWatch providers. Returns the credential-free public JustWatch provider catalog for a country.
- **Params:** `country` (string, optional) — Two-letter country code

### `justwatch_search`

- **HTTP:** `GET /justwatch/search`
- **What:** Search JustWatch titles. Searches JustWatch titles using the public credential-free website GraphQL endpoint. Country must be a two-letter ISO code such as `US`; language must be a two-letter code such as `en`.
- **Params:** `query` (string, **required**) — Search query; `country` (string, optional) — Two-letter country code; `language` (string, optional) — Two-letter language code; `limit` (integer, optional) — Maximum results, defaults to 10 and clamps to 25

### `justwatch_season_by_id`

- **HTTP:** `GET /justwatch/season/by-id`
- **What:** Get JustWatch season by raw id. Looks up a season by raw JustWatch GraphQL id such as `tss297253`.
- **Params:** `id` (string, **required**) — Raw JustWatch season id matching tss[0-9]+; `country` (string, optional) — Two-letter country code; `language` (string, optional) — Two-letter language code

### `justwatch_season_episodes`

- **HTTP:** `GET /justwatch/season/episodes`
- **What:** Get JustWatch season episodes. Returns episodes and normalized episode offers for a raw JustWatch season id such as `tss297253`.
- **Params:** `season_id` (string, **required**) — Raw JustWatch season id matching tss[0-9]+; `country` (string, optional) — Two-letter country code; `language` (string, optional) — Two-letter language code

### `justwatch_show_seasons`

- **HTTP:** `GET /justwatch/show/seasons`
- **What:** Get JustWatch show seasons. Returns seasons for a raw JustWatch show id such as `ts287292`.
- **Params:** `show_id` (string, **required**) — Raw JustWatch show id matching ts[0-9]+; `country` (string, optional) — Two-letter country code; `language` (string, optional) — Two-letter language code

### `justwatch_title`

- **HTTP:** `GET /justwatch/title`
- **What:** Get JustWatch title details. Fetches a JustWatch title page and returns normalized metadata and current offers. Pass exactly one of `path` or `url`.
- **Params:** `path` (string, optional) — JustWatch title path; `url` (string, optional) — Absolute https://www.justwatch.com title URL

### `justwatch_title_analysis`

- **HTTP:** `GET /justwatch/title/analysis`
- **What:** Analyze JustWatch title availability. Fetches a JustWatch title page and summarizes provider availability, monetization buckets, formats, price ranges, and best rent/buy/free/subscription options. Pass exactly one of `path` or `url`.
- **Params:** `path` (string, optional) — JustWatch title path; `url` (string, optional) — Absolute https://www.justwatch.com title URL

### `justwatch_title_by_id`

- **HTTP:** `GET /justwatch/title/by-id`
- **What:** Get JustWatch title by raw id. Looks up a movie or show by raw JustWatch GraphQL id such as `tm92641` or `ts287292`.
- **Params:** `id` (string, **required**) — Raw JustWatch movie/show id matching tm[0-9]+ or ts[0-9]+; `country` (string, optional) — Two-letter country code; `language` (string, optional) — Two-letter language code

### `justwatch_title_media`

- **HTTP:** `GET /justwatch/title/media`
- **What:** Get JustWatch title media. Returns normalized credits, clips, and backdrops for a raw JustWatch movie/show id such as `tm92641`.
- **Params:** `id` (string, **required**) — Raw JustWatch movie/show id matching tm[0-9]+ or ts[0-9]+; `country` (string, optional) — Two-letter country code; `language` (string, optional) — Two-letter language code

### `justwatch_title_offers`

- **HTTP:** `GET /justwatch/title/offers`
- **What:** Get JustWatch title offers. Returns normalized offers for a raw JustWatch movie/show id across one to five comma-separated country codes.
- **Params:** `id` (string, **required**) — Raw JustWatch movie/show id matching tm[0-9]+ or ts[0-9]+; `countries` (string, optional) — One to five comma-separated two-letter country codes; `language` (string, optional) — Two-letter language code

### `justwatch_title_similar`

- **HTTP:** `GET /justwatch/title/similar`
- **What:** Get similar JustWatch titles. Returns similar titles for a raw JustWatch movie/show id such as `tm92641`.
- **Params:** `id` (string, **required**) — Raw JustWatch movie/show id matching tm[0-9]+ or ts[0-9]+; `country` (string, optional) — Two-letter country code; `language` (string, optional) — Two-letter language code; `limit` (integer, optional) — Maximum results, defaults to 10 and clamps to 25

## LinkedIn (3)

### `linkedin_company`

- **HTTP:** `GET /linkedin/company/{id}`
- **What:** Get LinkedIn Company info by ID. Returns detailed company information by LinkedIn ID.
- **Params:** `id` (string, **required**) — LinkedIn Company ID

### `linkedin_product`

- **HTTP:** `GET /linkedin/product/{id}`
- **What:** Get LinkedIn Product info by ID. Returns detailed product information from LinkedIn by product ID.
- **Params:** `id` (string, **required**) — LinkedIn Product ID

### `linkedin_showcase`

- **HTTP:** `GET /linkedin/showcase/{id}`
- **What:** Get Linkedin Showcase Page Info. Returns detailed information about a LinkedIn showcase page by ID.
- **Params:** `id` (string, **required**) — LinkedIn Showcase Page ID

## ProductHunt (11)

### `producthunt_about`

- **HTTP:** `GET /producthunt/product/{id}/about`
- **What:** Retrieve Product Hunt product about page. Returns the richer Product Hunt about-page payload, including launch, forum, review tags, and media data.
- **Params:** `id` (string, **required**) — Product Hunt slug

### `producthunt_alternatives`

- **HTTP:** `GET /producthunt/product/{id}/alternatives`
- **What:** Retrieve Product Hunt product alternatives. Returns paginated alternatives, tags, and related discussions for a Product Hunt product.
- **Params:** `id` (string, **required**) — Product Hunt slug; `first` (integer, optional) — Page size; `cursor` (string, optional) — Pagination cursor; `order` (string, optional) — Sort order; `tags` (string, optional) — Comma-separated tag slugs

### `producthunt_category`

- **HTTP:** `GET /producthunt/category/{slug}`
- **What:** Retrieve Product Hunt category details. Returns the category page payload for a Product Hunt category slug.
- **Params:** `slug` (string, **required**) — Product Hunt category slug

### `producthunt_category_products`

- **HTTP:** `GET /producthunt/category/{slug}/products`
- **What:** Retrieve Product Hunt category products. Returns the paginated category listing payload for a Product Hunt category slug.
- **Params:** `slug` (string, **required**) — Product Hunt category slug; `featured_only` (boolean, optional) — Featured products only; `order` (string, optional) — Sort order; `page` (integer, optional) — Page number (1-based); `page_size` (integer, optional) — Page size; `tags` (string, optional) — Comma-separated category tags

### `producthunt_customers`

- **HTTP:** `GET /producthunt/product/{id}/customers`
- **What:** Retrieve Product Hunt product customers. Returns paginated customer products for a Product Hunt product using Product Hunt's ProductCustomersPage GraphQL operation.
- **Params:** `id` (string, **required**) — Product Hunt slug; `order` (string, optional) — Product Hunt customers order; `page` (integer, optional) — Page number; `page_size` (integer, optional) — Results per page

### `producthunt_launches`

- **HTTP:** `GET /producthunt/product/{id}/launches`
- **What:** Retrieve Product Hunt product launches. Returns paginated launch posts for a Product Hunt product using Product Hunt's ProductPageLaunches GraphQL operation.
- **Params:** `id` (string, **required**) — Product Hunt slug; `cursor` (string, optional) — Pagination cursor; `order` (string, optional) — Product Hunt launch order

### `producthunt_leaderboard`

- **HTTP:** `GET /producthunt/leaderboard`
- **What:** Retrieve Product Hunt leaderboard. Fetches Product Hunt leaderboard data for daily, weekly, monthly, or yearly scopes via Product Hunt GraphQL.
- **Params:** `scope` (string, optional) — Leaderboard scope: daily, weekly, monthly, yearly; `date` (string, optional) — Anchor date in YYYY-MM-DD format. Used to derive missing year/month/day/week values.; `year` (integer, optional) — Leaderboard year override; `month` (integer, optional) — Daily/monthly month override; `day` (integer, optional) — Daily day override; `week` (integer, optional) — Weekly ISO week override; `featured` (boolean, optional) — Featured products only; `order` (string, optional) — Ranking order override. Defaults to scope rank enum.; `cursor` (string, optional) — Pagination cursor

### `producthunt_makers`

- **HTTP:** `GET /producthunt/product/{id}/makers`
- **What:** Retrieve Product Hunt product makers. Returns maker items for a Product Hunt product.
- **Params:** `id` (string, **required**) — Product Hunt slug; `cursor` (string, optional) — Pagination cursor

### `producthunt_product`

- **HTTP:** `GET /producthunt/product/{id}`
- **What:** Retrieve Product Hunt product details. Returns the core Product Hunt product details.
- **Params:** `id` (string, **required**) — Product Hunt slug or numeric ID

### `producthunt_reviews`

- **HTTP:** `GET /producthunt/product/{id}/reviews`
- **What:** Retrieve Product Hunt product detailed reviews. Returns detailed review items for a Product Hunt product.
- **Params:** `id` (string, **required**) — Product Hunt slug

### `producthunt_search`

- **HTTP:** `GET /producthunt/search`
- **What:** Search for products, users, or launches on Product Hunt. Performs a full-text Product Hunt search and returns matching products, users, or launches.
- **Params:** `query` (string, **required**) — Search keywords; `type` (string, optional) — Result type: **product** (default), **user**, or **launch**; `page` (integer, optional) — Page number (1-based); `featured` (boolean, optional) — Launch search only: featured launches only; `topics` (string, optional) — Launch search only: comma-separated topic slugs

## Reddit (4)

### `reddit_comments`

- **HTTP:** `GET /reddit/comments/{id}`
- **What:** Get Reddit post comments. Returns flat public comment entries from a Reddit post.
- **Params:** `id` (string, **required**) — Reddit post id or t3_ id; `sort` (string, optional) — Accepted for compatibility: confidence, top, new, controversial, old, or qa. Public comment data is flat and may ignore sort.; `limit` (integer, optional) — Maximum comments returned, defaults to 25 and clamps to 100; `depth` (integer, optional) — Accepted for compatibility. Public comment data is flat and may ignore depth.

### `reddit_post`

- **HTTP:** `GET /reddit/post/{id}`
- **What:** Get Reddit post. Returns a normalized public Reddit post entry.
- **Params:** `id` (string, **required**) — Reddit post id or t3_ id

### `reddit_search`

- **HTTP:** `GET /reddit/search`
- **What:** Search Reddit posts. Searches public Reddit content and returns normalized public post entries.
- **Params:** `q` (string, **required**) — Search keywords; `subreddit` (string, optional) — Restrict search to a subreddit name, without r/; `sort` (string, optional) — Sort: relevance, hot, new, top, or comments; `time` (string, optional) — Time window for top/comments sorts: hour, day, week, month, year, or all; `limit` (integer, optional) — Maximum posts, defaults to 25 and clamps to 100; `after` (string, optional) — Reddit pagination token

### `reddit_subreddit_posts`

- **HTTP:** `GET /reddit/subreddit/{subreddit}/posts`
- **What:** List Reddit subreddit posts. Returns normalized public posts from a subreddit.
- **Params:** `subreddit` (string, **required**) — Subreddit name, without r/; `sort` (string, optional) — Sort: hot, new, top, or rising; `time` (string, optional) — Time window for top sort: hour, day, week, month, year, or all; `limit` (integer, optional) — Maximum posts, defaults to 25 and clamps to 100; `after` (string, optional) — Reddit pagination token

## Shop.app (16)

### `shop_app_analysis`

- **HTTP:** `GET /shop-app/analysis`
- **What:** Analyze Shop.app query results. Returns a market snapshot derived from Shop.app search results, including price ranges, currencies, sale counts, discounts, and top shops. Limit defaults to 20 and accepts values up to 50.
- **Params:** `query` (string, **required**) — Search query; `limit` (integer, optional) — Maximum products to analyze, defaults to 20 and supports up to 50; `in_stock` (boolean, optional) — Request in-stock products; `on_sale` (boolean, optional) — Request sale products; `deep_search` (boolean, optional) — Enable Shop.app deep search mode

### `shop_app_categories`

- **HTTP:** `GET /shop-app/categories`
- **What:** List Shop.app categories. Returns public Shop.app product categories.
- **Params:** _none_

### `shop_app_collection_products`

- **HTTP:** `GET /shop-app/shops/{handle}/collections/{collection_id}/products`
- **What:** List Shop.app collection products. Returns public product cards from a Shop.app merchant collection. sort_by allowed values: MOST_SALES, PRICE_LOW_TO_HIGH, PRICE_HIGH_TO_LOW, RELEVANCE.
- **Params:** `handle` (string, **required**) — Shop handle; `collection_id` (string, **required**) — Collection id; `limit` (integer, optional) — Maximum products, defaults to 30 and supports up to 60; `sort_by` (string, optional) — Sort mode; `in_stock` (boolean, optional) — Request in-stock products

### `shop_app_product`

- **HTTP:** `GET /shop-app/products/{id}`
- **What:** Get Shop.app product. Returns normalized public product details from Shop.app.
- **Params:** `id` (string, **required**) — Product id; `variant_id` (string, optional) — Variant id

### `shop_app_product_related`

- **HTTP:** `GET /shop-app/products/{id}/related`
- **What:** List Shop.app related products. Returns related product cards from a public Shop.app product page.
- **Params:** `id` (string, **required**) — Product id; `limit` (integer, optional) — Maximum products, defaults to 20 and supports up to 50

### `shop_app_product_reviews`

- **HTTP:** `GET /shop-app/products/{id}/reviews`
- **What:** List Shop.app product reviews. Returns public product reviews from a Shop.app product page.
- **Params:** `id` (string, **required**) — Product id; `limit` (integer, optional) — Maximum reviews, defaults to 20 and supports up to 50

### `shop_app_product_shop`

- **HTTP:** `GET /shop-app/products/{id}/shop`
- **What:** Get the Shop.app shop for a product. Resolves the public Shop.app merchant profile for a product id.
- **Params:** `id` (string, **required**) — Product id

### `shop_app_product_variant`

- **HTTP:** `GET /shop-app/products/{id}/variant`
- **What:** Get a Shop.app product variant by selected options. Returns the exact public product variant matching selected options. selected_options must be a JSON object when provided. Repeated option filters may also be sent as option.Name=value or option[Name]=value.
- **Params:** `id` (string, **required**) — Product id; `selected_options` (string, optional) — Selected options JSON object

### `shop_app_product_variants`

- **HTTP:** `GET /shop-app/products/{id}/variants`
- **What:** List Shop.app product variants. Returns adjacent variants for a Shop.app product. selected_options must be a JSON object when provided. Repeated option filters may also be sent as option.Name=value or option[Name]=value.
- **Params:** `id` (string, **required**) — Product id; `selected_options` (string, optional) — Selected options JSON object; `limit` (integer, optional) — Maximum variants, defaults to 50 and supports up to 100

### `shop_app_search`

- **HTTP:** `GET /shop-app/search`
- **What:** Search Shop.app products. Searches Shop.app product results using the credential-free public web search flow. Limit defaults to 20 and accepts values up to 50.
- **Params:** `query` (string, **required**) — Search query; `limit` (integer, optional) — Maximum products, defaults to 20 and supports up to 50; `in_stock` (boolean, optional) — Request in-stock products; `on_sale` (boolean, optional) — Request sale products; `deep_search` (boolean, optional) — Enable Shop.app deep search mode

### `shop_app_shop`

- **HTTP:** `GET /shop-app/shops/{handle}`
- **What:** Get Shop.app shop. Returns public Shop.app merchant profile details.
- **Params:** `handle` (string, **required**) — Shop handle

### `shop_app_shop_locations`

- **HTTP:** `GET /shop-app/shops/{handle}/locations`
- **What:** List Shop.app shop locations. Returns public retail locations for a Shop.app merchant profile.
- **Params:** `handle` (string, **required**) — Shop handle; `limit` (integer, optional) — Maximum locations, defaults to 10 and supports up to 50

### `shop_app_shop_products`

- **HTTP:** `GET /shop-app/shops/{handle}/products`
- **What:** List Shop.app shop products. Returns public product cards from a Shop.app merchant profile. sort_by allowed values: MOST_SALES, PRICE_LOW_TO_HIGH, PRICE_HIGH_TO_LOW, RELEVANCE.
- **Params:** `handle` (string, **required**) — Shop handle; `limit` (integer, optional) — Maximum products, defaults to 30 and supports up to 60; `sort_by` (string, optional) — Sort mode; `in_stock` (boolean, optional) — Request in-stock products

### `shop_app_shop_reviews`

- **HTTP:** `GET /shop-app/shops/{handle}/reviews`
- **What:** List Shop.app shop reviews. Returns public reviews for a Shop.app merchant profile.
- **Params:** `handle` (string, **required**) — Shop handle; `limit` (integer, optional) — Maximum reviews, defaults to 20 and supports up to 50

### `shop_app_shop_typeahead`

- **HTTP:** `GET /shop-app/shops/{handle}/typeahead`
- **What:** Suggest products and collections inside a Shop.app shop. Returns public store typeahead suggestions for a Shop.app merchant profile.
- **Params:** `handle` (string, **required**) — Shop handle; `query` (string, **required**) — Typeahead query; `limit` (integer, optional) — Maximum suggestions, defaults to 20 and supports up to 20

### `shop_app_suggestions`

- **HTTP:** `GET /shop-app/suggestions`
- **What:** Suggest Shop.app searches. Returns Shop.app autocomplete suggestions. Limit defaults to 10 and supports up to 20.
- **Params:** `query` (string, **required**) — Search query; `limit` (integer, optional) — Maximum suggestions, defaults to 10 and supports up to 20

## Shopify (11)

### `shopify_collection_products`

- **HTTP:** `GET /shopify/collections/{handle}/products`
- **What:** List Shopify collection products. Returns normalized products from a public Shopify collection `/products.json` endpoint.
- **Params:** `handle` (string, **required**) — Collection handle; `url` (string, **required**) — Shopify storefront URL; `page` (integer, optional) — 1-based page, defaults to 1; `limit` (integer, optional) — Maximum products, defaults to 50 and supports up to 250

### `shopify_collections`

- **HTTP:** `GET /shopify/collections`
- **What:** List Shopify collections. Returns normalized collections from a public Shopify `/collections.json` endpoint. Valid empty result pages return `200` with an empty collections array.
- **Params:** `url` (string, **required**) — Shopify storefront URL; `page` (integer, optional) — 1-based page, defaults to 1; `limit` (integer, optional) — Maximum collections, defaults to 50 and supports up to 250

### `shopify_page`

- **HTTP:** `GET /shopify/pages/{handle}`
- **What:** Get Shopify page. Returns normalized page detail from Shopify's credential-free `/pages/{handle}.json` endpoint. Page body HTML is returned as cleaned text only.
- **Params:** `handle` (string, **required**) — Page handle; `url` (string, **required**) — Shopify storefront URL

### `shopify_pages`

- **HTTP:** `GET /shopify/pages`
- **What:** List Shopify pages. Returns normalized static pages from a public Shopify `/pages.json` endpoint. Page body HTML is returned as cleaned text only.
- **Params:** `url` (string, **required**) — Shopify storefront URL; `page` (integer, optional) — 1-based page, defaults to 1; `limit` (integer, optional) — Maximum pages, defaults to 50 and supports up to 250

### `shopify_product`

- **HTTP:** `GET /shopify/products/{handle}`
- **What:** Get Shopify product. Returns normalized product detail from Shopify's credential-free product handle `.js` endpoint.
- **Params:** `handle` (string, **required**) — Product handle; `url` (string, **required**) — Shopify storefront URL

### `shopify_product_recommendations`

- **HTTP:** `GET /shopify/products/{handle}/recommendations`
- **What:** List Shopify product recommendations. Returns normalized recommended products from Shopify's credential-free recommendations Ajax endpoint. The route handle is resolved to a Shopify product id before fetching recommendations.
- **Params:** `handle` (string, **required**) — Product handle; `url` (string, **required**) — Shopify storefront URL; `limit` (integer, optional) — Maximum products, defaults to 10 and supports up to 20; `intent` (string, optional) — Recommendation intent. Allowed values: related, complementary

### `shopify_products`

- **HTTP:** `GET /shopify/products`
- **What:** List Shopify products. Returns normalized products from a public Shopify `/products.json` endpoint. Valid empty result pages return `200` with an empty products array.
- **Params:** `url` (string, **required**) — Shopify storefront URL; `page` (integer, optional) — 1-based page, defaults to 1; `limit` (integer, optional) — Maximum products, defaults to 50 and supports up to 250

### `shopify_search_suggest`

- **HTTP:** `GET /shopify/search/suggest`
- **What:** Get Shopify search suggestions. Returns products, collections, and query suggestions from Shopify's credential-free predictive search Ajax endpoint.
- **Params:** `url` (string, **required**) — Shopify storefront URL; `q` (string, **required**) — Search query; `types` (string, optional) — Comma-separated suggestion types. Allowed values: product, collection, query; `limit` (integer, optional) — Maximum results per type, defaults to 10 and supports up to 20

### `shopify_sitemap_urls`

- **HTTP:** `GET /shopify/sitemap/urls`
- **What:** List Shopify sitemap URLs. Fetches capped URL entries from Shopify child sitemaps matching the requested type.
- **Params:** `url` (string, **required**) — Shopify storefront URL; `type` (string, optional) — Sitemap type. Allowed values: all, products, collections, pages, blogs, agentic_discovery, other; `limit` (integer, optional) — Maximum URL entries, defaults to 50 and supports up to 250

### `shopify_sitemaps`

- **HTTP:** `GET /shopify/sitemaps`
- **What:** List Shopify sitemaps. Returns child sitemap URLs from a public Shopify `/sitemap.xml` index with inferred sitemap types.
- **Params:** `url` (string, **required**) — Shopify storefront URL

### `shopify_store`

- **HTTP:** `GET /shopify/store`
- **What:** Get Shopify store metadata. Resolves a public Shopify storefront and returns normalized metadata from credential-free storefront JSON. If the vanity domain blocks `/products.json`, the service may fall back to a public `*.myshopify.com` domain discovered from the storefront page.
- **Params:** `url` (string, **required**) — Shopify storefront URL

## SimilarWeb (2)

### `similarweb_search`

- **HTTP:** `GET /similarweb/search`
- **What:** Search SimilarWeb Info. Returns SimilarWeb data for a given query (typically a domain).
- **Params:** `q` (string, **required**) — Domain or keyword to search

### `similarweb_web`

- **HTTP:** `GET /similarweb/web/{domain}`
- **What:** Get SimilarWeb Web Info. Returns traffic and engagement data from SimilarWeb for a specific domain.
- **Params:** `domain` (string, **required**) — Domain to fetch SimilarWeb data for

## Spotify (30)

### `spotify_album`

- **HTTP:** `GET /spotify/album`
- **What:** Retrieve Spotify album details. Returns normalized Spotify Web Player album metadata and tracks from private Pathfinder responses.
- **Params:** `uri` (string, optional) — Spotify album URI or open.spotify.com album URL; `id` (string, optional) — Spotify album ID; `offset` (integer, optional) — Track offset; `limit` (integer, optional) — Track limit, clamped to 1-50

### `spotify_album_tracks`

- **HTTP:** `GET /spotify/album/tracks`
- **What:** Retrieve Spotify album tracks. Returns normalized Spotify Web Player album tracks from private Pathfinder responses.
- **Params:** `uri` (string, optional) — Spotify album URI or open.spotify.com album URL; `id` (string, optional) — Spotify album ID; `offset` (integer, optional) — Track offset; `limit` (integer, optional) — Track limit, clamped to 1-50

### `spotify_albums_search`

- **HTTP:** `GET /spotify/albums/search`
- **What:** Search Spotify albums. Returns normalized Spotify Web Player album search results for a search term. The endpoint fetches anonymous Spotify credentials at request time; caller-supplied Spotify bearer or client tokens are not required.
- **Params:** `q` (string, **required**) — Search term; `offset` (integer, optional) — Search offset; `limit` (integer, optional) — Album result limit, clamped to 1-50; `number_of_top_results` (integer, optional) — Top result limit, clamped to 1-50; `include_audiobooks` (boolean, optional) — Include audiobook context where available; `include_pre_releases` (boolean, optional) — Include pre-release results; `include_album_pre_releases` (boolean, optional) — Include album pre-release results; `include_authors` (boolean, optional) — Include authors; `include_episode_content_ratings_v2` (boolean, optional) — Include Spotify episode content ratings v2

### `spotify_artist`

- **HTTP:** `GET /spotify/artist`
- **What:** Retrieve Spotify artist details. Returns normalized Spotify Web Player artist overview data from private Pathfinder responses.
- **Params:** `uri` (string, optional) — Spotify artist URI or open.spotify.com artist URL; `id` (string, optional) — Spotify artist ID

### `spotify_artist_albums`

- **HTTP:** `GET /spotify/artist/albums`
- **What:** Retrieve Spotify artist albums. Returns artist discography items from Spotify Web Player private Pathfinder responses.
- **Params:** `uri` (string, optional) — Spotify artist URI or open.spotify.com artist URL; `id` (string, optional) — Spotify artist ID; `type` (string, optional) — album, single, compilation, appears_on, or all; `order` (string, optional) — date_desc, date_asc, name_asc, or name_desc; `offset` (integer, optional) — Offset; `limit` (integer, optional) — Limit, clamped to 1-50

### `spotify_artist_playlists`

- **HTTP:** `GET /spotify/artist/playlists`
- **What:** Retrieve Spotify artist playlists. Returns artist playlists from Spotify Web Player private Pathfinder responses.
- **Params:** `uri` (string, optional) — Spotify artist URI or open.spotify.com artist URL; `id` (string, optional) — Spotify artist ID

### `spotify_artist_related`

- **HTTP:** `GET /spotify/artist/related`
- **What:** Retrieve Spotify related artists. Returns related artists from Spotify Web Player private Pathfinder responses.
- **Params:** `uri` (string, optional) — Spotify artist URI or open.spotify.com artist URL; `id` (string, optional) — Spotify artist ID

### `spotify_artists_search`

- **HTTP:** `GET /spotify/artists/search`
- **What:** Search Spotify artists. Returns normalized Spotify Web Player artist search results for a search term.
- **Params:** `q` (string, **required**) — Search term; `offset` (integer, optional) — Search offset; `limit` (integer, optional) — Result limit, clamped to 1-50

### `spotify_audiobook`

- **HTTP:** `GET /spotify/audiobook`
- **What:** Retrieve Spotify audiobook details. Returns Spotify Web Player audiobook metadata from private Pathfinder responses. Spotify exposes audiobooks through show URIs.
- **Params:** `uri` (string, optional) — Spotify audiobook/show URI or open.spotify.com show URL; `id` (string, optional) — Spotify show ID

### `spotify_audiobook_chapters`

- **HTTP:** `GET /spotify/audiobook/chapters`
- **What:** Retrieve Spotify audiobook chapters. Returns audiobook chapters from Spotify Web Player private Pathfinder responses.
- **Params:** `uri` (string, optional) — Spotify audiobook/show URI or open.spotify.com show URL; `id` (string, optional) — Spotify show ID; `offset` (integer, optional) — Chapter offset; `limit` (integer, optional) — Chapter limit, clamped to 1-50

### `spotify_audiobooks_search`

- **HTTP:** `GET /spotify/audiobooks/search`
- **What:** Search Spotify audiobooks. Returns normalized Spotify Web Player audiobook search results for a search term. The endpoint fetches anonymous Spotify credentials at request time; caller-supplied Spotify bearer or client tokens are not required.
- **Params:** `q` (string, **required**) — Search term; `offset` (integer, optional) — Search offset; `limit` (integer, optional) — Audiobook result limit, clamped to 1-50; `number_of_top_results` (integer, optional) — Top result limit, clamped to 1-50; `include_audiobooks` (boolean, optional) — Include audiobook results; `include_pre_releases` (boolean, optional) — Include pre-release results; `include_album_pre_releases` (boolean, optional) — Include album pre-release results; `include_authors` (boolean, optional) — Include authors; `include_episode_content_ratings_v2` (boolean, optional) — Include Spotify episode content ratings v2

### `spotify_chapter`

- **HTTP:** `GET /spotify/chapter`
- **What:** Retrieve Spotify audiobook chapter details. Returns a Spotify chapter from the same private Pathfinder operation used for episodes and chapters.
- **Params:** `uri` (string, optional) — Spotify chapter or episode URI/URL; `id` (string, optional) — Spotify chapter/episode ID

### `spotify_episodes_search`

- **HTTP:** `GET /spotify/episodes/search`
- **What:** Search Spotify episodes. Returns normalized Spotify Web Player episode search results for a search term.
- **Params:** `q` (string, **required**) — Search term; `offset` (integer, optional) — Search offset; `limit` (integer, optional) — Result limit, clamped to 1-50

### `spotify_featured_charts_by_country`

- **HTTP:** `GET /spotify/featured-charts-by-country`
- **What:** Retrieve Spotify featured charts by country. Returns normalized Spotify country hub content from Spotify's countryHubContent Pathfinder response. Defaults to the CHARTS content shelf for the requested country.
- **Params:** `country_code` (string, optional) — Two-letter Spotify popular-in country code; `content_id` (string, optional) — Country hub content ID. Allowed: CHARTS, POPULAR_ALBUMS, POPULAR_ARTISTS, TRENDING_SONGS

### `spotify_genre`

- **HTTP:** `GET /spotify/genre`
- **What:** Retrieve Spotify genre page. Returns normalized sections and items from Spotify's browsePage Pathfinder response for a Spotify genre or page URI.
- **Params:** `uri` (string, optional) — Spotify genre or page URI; `page_offset` (integer, optional) — Page pagination offset; `page_limit` (integer, optional) — Page pagination limit, clamped to 1-50; `section_offset` (integer, optional) — Section pagination offset; `section_limit` (integer, optional) — Section pagination limit, clamped to 1-50; `include_episode_content_ratings_v2` (boolean, optional) — Include Spotify episode content ratings v2

### `spotify_home`

- **HTTP:** `GET /spotify/home`
- **What:** Retrieve Spotify home sections. Returns normalized shelves and items from Spotify's Web Player home Pathfinder response. The endpoint fetches anonymous Spotify credentials at request time; caller-supplied Spotify bearer or client tokens are not required.
- **Params:** `time_zone` (string, optional) — IANA time zone used by Spotify home personalization; `sp_t` (string, optional) — Optional Spotify session token. A random UUID is generated when omitted; `facet` (string, optional) — Optional Spotify home facet; `section_items_limit` (integer, optional) — Per-section item limit, clamped to 1-50; `include_episode_content_ratings_v2` (boolean, optional) — Include Spotify episode content ratings v2

### `spotify_playlist`

- **HTTP:** `GET /spotify/playlist`
- **What:** Retrieve Spotify playlist details. Returns normalized Spotify Web Player playlist metadata and items from Spotify's fetchPlaylist Pathfinder response. Provide either uri or id; defaults to a known public playlist when omitted.
- **Params:** `uri` (string, optional) — Spotify playlist URI or open.spotify.com playlist URL; `id` (string, optional) — Spotify playlist ID. Used when uri is omitted; `offset` (integer, optional) — Playlist item offset; `limit` (integer, optional) — Playlist item limit, clamped to 1-50; `enable_watch_feed_entrypoint` (boolean, optional) — Enable watch feed entrypoint; `include_episode_content_ratings_v2` (boolean, optional) — Include Spotify episode content ratings v2

### `spotify_playlists_search`

- **HTTP:** `GET /spotify/playlists/search`
- **What:** Search Spotify playlists. Returns normalized Spotify Web Player playlist search results for a search term. The endpoint fetches anonymous Spotify credentials at request time; caller-supplied Spotify bearer or client tokens are not required.
- **Params:** `q` (string, **required**) — Search term; `offset` (integer, optional) — Search offset; `limit` (integer, optional) — Playlist result limit, clamped to 1-50; `number_of_top_results` (integer, optional) — Top result limit, clamped to 1-50; `include_audiobooks` (boolean, optional) — Include audiobook context where available; `include_pre_releases` (boolean, optional) — Include pre-release results; `include_album_pre_releases` (boolean, optional) — Include album pre-release results; `include_authors` (boolean, optional) — Include authors; `include_episode_content_ratings_v2` (boolean, optional) — Include Spotify episode content ratings v2

### `spotify_popular_by_country`

- **HTTP:** `GET /spotify/popular-by-country`
- **What:** Retrieve Spotify popular by country. Returns normalized Spotify country hub shelves from Spotify's countryHubsPage Pathfinder response. The country_code parameter accepts Spotify popular-in country codes from open.spotify.com/popular-in/us.
- **Params:** `country_code` (string, optional) — Two-letter Spotify popular-in country code

### `spotify_profile`

- **HTTP:** `GET /spotify/profile`
- **What:** Retrieve Spotify public profile. Returns normalized public profile metadata and preview playlists from Spotify's Web Player user-profile service. Provide username, uri, or url; defaults to Spotify's official profile.
- **Params:** `username` (string, optional) — Spotify username; `uri` (string, optional) — Spotify user URI; `url` (string, optional) — open.spotify.com user URL; `playlist_limit` (integer, optional) — Embedded public playlist limit, clamped to 0-50; `artist_limit` (integer, optional) — Recently played artist limit, clamped to 0-50; `episode_limit` (integer, optional) — Embedded episode limit, clamped to 0-50

### `spotify_profile_followers`

- **HTTP:** `GET /spotify/profile/followers`
- **What:** Retrieve Spotify public profile followers. Returns normalized public follower profiles from Spotify's Web Player user-profile service. Spotify exposes this as a public anonymous response for some profiles; private or restricted profiles may return an upstream error.
- **Params:** `username` (string, optional) — Spotify username; `uri` (string, optional) — Spotify user URI; `url` (string, optional) — open.spotify.com user URL; `offset` (integer, optional) — Follower offset applied locally; `limit` (integer, optional) — Follower limit, clamped to 1-200

### `spotify_profile_playlists`

- **HTTP:** `GET /spotify/profile/playlists`
- **What:** Retrieve Spotify public profile playlists. Returns normalized public playlists from Spotify's Web Player user-profile service. Provide username, uri, or url; defaults to Spotify's official profile.
- **Params:** `username` (string, optional) — Spotify username; `uri` (string, optional) — Spotify user URI; `url` (string, optional) — open.spotify.com user URL; `offset` (integer, optional) — Playlist offset; `limit` (integer, optional) — Playlist limit, clamped to 1-50

### `spotify_profiles_search`

- **HTTP:** `GET /spotify/profiles/search`
- **What:** Search Spotify profiles. Returns normalized Spotify Web Player profile search results for a search term. The endpoint fetches anonymous Spotify credentials at request time; caller-supplied Spotify bearer or client tokens are not required.
- **Params:** `q` (string, **required**) — Search term; `offset` (integer, optional) — Search offset; `limit` (integer, optional) — Profile result limit, clamped to 1-50; `number_of_top_results` (integer, optional) — Top result limit, clamped to 1-50; `include_audiobooks` (boolean, optional) — Include audiobook context where available; `include_pre_releases` (boolean, optional) — Include pre-release results; `include_album_pre_releases` (boolean, optional) — Include album pre-release results; `include_authors` (boolean, optional) — Include authors; `include_episode_content_ratings_v2` (boolean, optional) — Include Spotify episode content ratings v2

### `spotify_search`

- **HTTP:** `GET /spotify/search`
- **What:** Search Spotify catalog. Returns normalized Spotify Web Player catalog search results across tracks, artists, albums, playlists, shows, episodes, audiobooks, and top results. The endpoint fetches anonymous Spotify credentials at request time; caller-supplied Spotify bearer or client tokens are not required.
- **Params:** `q` (string, **required**) — Search term; `offset` (integer, optional) — Search offset; `limit` (integer, optional) — Result limit per section, clamped to 1-50; `number_of_top_results` (integer, optional) — Top result limit, clamped to 1-50; `include_audiobooks` (boolean, optional) — Include audiobook results; `include_artist_has_concerts_field` (boolean, optional) — Include artist concert availability fields; `include_pre_releases` (boolean, optional) — Include pre-release results; `include_album_pre_releases` (boolean, optional) — Include album pre-release results; `include_authors` (boolean, optional) — Include authors; `include_episode_content_ratings_v2` (boolean, optional) — Include Spotify episode content ratings v2; `is_prefix` (boolean, optional) — Treat the search term as a prefix

### `spotify_section`

- **HTTP:** `GET /spotify/section`
- **What:** Retrieve Spotify browse section. Returns normalized items from Spotify's browseSection Pathfinder response for a Spotify section URI.
- **Params:** `uri` (string, optional) — Spotify section URI; `offset` (integer, optional) — Section item offset; `limit` (integer, optional) — Section item limit, clamped to 1-50; `include_episode_content_ratings_v2` (boolean, optional) — Include Spotify episode content ratings v2

### `spotify_shows_search`

- **HTTP:** `GET /spotify/shows/search`
- **What:** Search Spotify shows. Returns normalized Spotify Web Player show search results for a search term.
- **Params:** `q` (string, **required**) — Search term; `offset` (integer, optional) — Search offset; `limit` (integer, optional) — Result limit, clamped to 1-50

### `spotify_track`

- **HTTP:** `GET /spotify/track`
- **What:** Retrieve Spotify track details. Returns normalized Spotify Web Player track metadata from Spotify's getTrack Pathfinder response. Provide either uri or id; defaults to a known public track when omitted.
- **Params:** `uri` (string, optional) — Spotify track URI or open.spotify.com track URL; `id` (string, optional) — Spotify track ID. Used when uri is omitted

### `spotify_track_recommended`

- **HTTP:** `GET /spotify/track/recommended`
- **What:** Retrieve Spotify recommended tracks. Returns normalized recommended Spotify entities from the internalLinkRecommenderTrack Pathfinder response.
- **Params:** `uri` (string, optional) — Spotify track URI or open.spotify.com track URL; `id` (string, optional) — Spotify track ID. Used when uri is omitted; `limit` (integer, optional) — Recommendation limit, clamped to 1-50

### `spotify_track_similar_albums`

- **HTTP:** `GET /spotify/track/similar-albums`
- **What:** Retrieve Spotify track similar albums. Returns normalized albums from the similarAlbumsBasedOnThisTrack Pathfinder response.
- **Params:** `uri` (string, optional) — Spotify track URI or open.spotify.com track URL; `id` (string, optional) — Spotify track ID. Used when uri is omitted; `limit` (integer, optional) — Album limit, clamped to 1-50; `albums_only` (boolean, optional) — Request albums-only recommendations

### `spotify_tracks_search`

- **HTTP:** `GET /spotify/tracks/search`
- **What:** Search Spotify tracks. Returns normalized Spotify Web Player track search results for a search term. The endpoint fetches anonymous Spotify credentials at request time; caller-supplied Spotify bearer or client tokens are not required.
- **Params:** `q` (string, **required**) — Search term; `offset` (integer, optional) — Search offset; `limit` (integer, optional) — Track result limit, clamped to 1-50; `number_of_top_results` (integer, optional) — Top result limit, clamped to 1-50; `include_audiobooks` (boolean, optional) — Include audiobook context where available; `include_pre_releases` (boolean, optional) — Include pre-release results; `include_album_pre_releases` (boolean, optional) — Include album pre-release results; `include_authors` (boolean, optional) — Include authors; `include_episode_content_ratings_v2` (boolean, optional) — Include Spotify episode content ratings v2

## SpotifyPodcasts (8)

### `spotify_podcasts_categories`

- **HTTP:** `GET /spotify-podcasts/categories`
- **What:** Retrieve Spotify Podcasts categories. Returns normalized Spotify podcast category sections and items from Spotify's all-categories browsePage Pathfinder response.
- **Params:** `uri` (string, optional) — Spotify podcast categories page URI; `page_offset` (integer, optional) — Page pagination offset; `page_limit` (integer, optional) — Page pagination limit, clamped to 1-50; `section_offset` (integer, optional) — Section pagination offset; `section_limit` (integer, optional) — Section pagination limit, clamped to 1-50; `include_episode_content_ratings_v2` (boolean, optional) — Include Spotify episode content ratings v2

### `spotify_podcasts_charts`

- **HTTP:** `GET /spotify-podcasts/charts`
- **What:** Retrieve Spotify podcast charts. Returns normalized Spotify podcast chart rankings from podcastcharts.byspotify.com. The chart and region parameters are validated against Spotify's supported podcast chart slugs and countries. Category charts are available only in au, br, de, gb, mx, se, and us.
- **Params:** `chart` (string, optional) — Chart slug. Allowed: top-podcasts, top-episodes, trending, arts, business, comedy, education, fiction, health-fitness, history, leisure, music, news, religion-spirituality, science, society-culture, sports, technology, true-crime, tv-film; `region` (string, optional) — Two-letter region code. Allowed: ar, au, at, br, ca, cl, co, dk, fi, fr, de, in, id, ie, it, jp, mx, nz, no, ph, pl, es, se, nl, gb, us; `limit` (integer, optional) — Result limit, clamped to 1-100

### `spotify_podcasts_episode`

- **HTTP:** `GET /spotify-podcasts/episode`
- **What:** Retrieve Spotify podcast episode details. Returns normalized public episode metadata from Spotify's getEpisodeOrChapter Pathfinder response, with episode page, embed page, and anonymous oEmbed fallbacks when Pathfinder is unavailable. Provide either uri or id; defaults to a known public episode when omitted.
- **Params:** `uri` (string, optional) — Spotify episode URI or open.spotify.com episode URL; `id` (string, optional) — Spotify episode ID. Used when uri is omitted

### `spotify_podcasts_home`

- **HTTP:** `GET /spotify-podcasts/home`
- **What:** Retrieve Spotify Podcasts home. Returns normalized sections and items from Spotify's podcast home browsePage Pathfinder response.
- **Params:** `uri` (string, optional) — Spotify page or genre URI; `page_offset` (integer, optional) — Page pagination offset; `page_limit` (integer, optional) — Page pagination limit, clamped to 1-50; `section_offset` (integer, optional) — Section pagination offset; `section_limit` (integer, optional) — Section pagination limit, clamped to 1-50; `include_episode_content_ratings_v2` (boolean, optional) — Include Spotify episode content ratings v2

### `spotify_podcasts_search`

- **HTTP:** `GET /spotify-podcasts/search`
- **What:** Search Spotify Podcasts. Returns normalized Spotify podcast shows, episodes, and top results for a search term.
- **Params:** `q` (string, **required**) — Podcast search term; `offset` (integer, optional) — Search offset; `limit` (integer, optional) — Result limit, clamped to 1-50; `number_of_top_results` (integer, optional) — Top result limit, clamped to 1-50; `include_pre_releases` (boolean, optional) — Include pre-release results; `include_album_pre_releases` (boolean, optional) — Include album pre-release results; `include_audiobooks` (boolean, optional) — Include audiobooks; `include_authors` (boolean, optional) — Include authors; `include_episode_content_ratings_v2` (boolean, optional) — Include Spotify episode content ratings v2

### `spotify_podcasts_show`

- **HTTP:** `GET /spotify-podcasts/show`
- **What:** Retrieve Spotify podcast show metadata. Returns normalized podcast show metadata from Spotify Pathfinder.
- **Params:** `uri` (string, optional) — Spotify show URI; `include_content_capability_trait` (boolean, optional) — Include content capability trait; `include_episode_content_ratings_v2` (boolean, optional) — Include Spotify episode content ratings v2

### `spotify_podcasts_show_episodes`

- **HTTP:** `GET /spotify-podcasts/show/episodes`
- **What:** Retrieve Spotify podcast show episodes. Returns normalized podcast episodes for a Spotify show URI.
- **Params:** `uri` (string, optional) — Spotify show URI; `offset` (integer, optional) — Episode offset; `limit` (integer, optional) — Episode limit, clamped to 1-50; `include_episode_content_ratings_v2` (boolean, optional) — Include Spotify episode content ratings v2

### `spotify_podcasts_show_recommendations`

- **HTTP:** `GET /spotify-podcasts/show/recommendations`
- **What:** Retrieve Spotify podcast recommendations. Returns normalized related Spotify shows and episodes from Spotify's show recommendations response.
- **Params:** `uri` (string, optional) — Spotify show URI

## TikTok (24)

### `tiktok_category`

- **HTTP:** `GET /tiktok/category`
- **What:** List TikTok explore categories. Returns the category list exposed by the TikTok Explore page.
- **Params:** _none_

### `tiktok_challenge`

- **HTTP:** `GET /tiktok/hashtag/{name}`
- **What:** Retrieve TikTok hashtag details. Returns the metadata payload for a TikTok hashtag page.
- **Params:** `name` (string, **required**) — Hashtag name (e.g., 'christmas')

### `tiktok_challenge_list`

- **HTTP:** `GET /tiktok/hashtags`
- **What:** Retrieve TikTok hashtag posts. Returns the videos listed for a TikTok hashtag id with cursor-based pagination.
- **Params:** `id` (string, **required**) — Hashtag id returned by the hashtag detail endpoint; `cursor` (integer, optional) — Pagination cursor

### `tiktok_explore`

- **HTTP:** `GET /tiktok/explore/{id}`
- **What:** Retrieve the TikTok explore feed for a category. Returns explore videos for a TikTok category id from the category endpoint.
- **Params:** `id` (integer, **required**) — Category type id returned by the category endpoint

### `tiktok_popular_trend_country_industry_meta`

- **HTTP:** `GET /tiktok/popular-trend/country-industry-meta`
- **What:** Retrieve TikTok popular-trend country and industry metadata. Returns the country and industry metadata used by the TikTok Creative Center popular-trend endpoints.
- **Params:** _none_

### `tiktok_popular_trend_creator`

- **HTTP:** `GET /tiktok/popular-trend/creator`
- **What:** Retrieve TikTok popular-trend creators. Returns trending creators from TikTok Creative Center. The service clamps `page` to 1-10 and `limit` to at most 100.
- **Params:** `page` (integer, optional) — Page number; `limit` (integer, optional) — Maximum number of creators to return; `sort_by` (string, optional) — Sort order; `creator_country` (string, optional) — Creator country code; `audience_count` (integer, optional) — Accepted for compatibility but currently ignored by the upstream request

### `tiktok_post`

- **HTTP:** `GET /tiktok/post/{id}`
- **What:** Retrieve TikTok video details. Returns the TikTok video detail payload for a video id.
- **Params:** `id` (string, **required**) — TikTok video id

### `tiktok_profile`

- **HTTP:** `GET /tiktok/profile/{handler}`
- **What:** Retrieve a TikTok profile. Returns the TikTok profile payload for a public handle.
- **Params:** `handler` (string, **required**) — TikTok handle without the leading @

### `tiktok_profile_post`

- **HTTP:** `GET /tiktok/posts`
- **What:** Retrieve posts from a TikTok profile. Returns posts from a TikTok profile by `secUid`, with optional cursor pagination and sort mode.
- **Params:** `secUid` (string, **required**) — TikTok secUid for the profile; `cursor` (integer, optional) — Pagination cursor; `sort_type` (integer, optional) — Sort mode: 0 latest, 1 popular, 2 oldest

### `tiktok_search`

- **HTTP:** `GET /tiktok/search`
- **What:** Search TikTok videos. Searches TikTok videos by keyword with cursor-based pagination.
- **Params:** `keyword` (string, **required**) — Search keyword; `cursor` (integer, optional) — Pagination cursor; `count` (integer, optional) — Result count, clamped to 50

### `tiktok_search_hashtag`

- **HTTP:** `GET /tiktok/search/hashtag`
- **What:** Search TikTok hashtags. Searches TikTok hashtags/challenges by keyword with cursor-based pagination.
- **Params:** `keyword` (string, **required**) — Search keyword; `cursor` (integer, optional) — Pagination cursor; `count` (integer, optional) — Result count, clamped to 50

### `tiktok_search_user`

- **HTTP:** `GET /tiktok/search/user`
- **What:** Search TikTok users. Searches TikTok users by keyword with cursor-based pagination.
- **Params:** `keyword` (string, **required**) — Search keyword; `cursor` (integer, optional) — Pagination cursor

### `tiktok_top_ads_analysis`

- **HTTP:** `GET /tiktok/top-ads/analysis`
- **What:** Retrieve TikTok Top Ads interactive time analysis. Returns the detail-page interactive time analysis chart and percentile for a Top Ads material. Metric values are `retain_ctr` (CTR), `retain_cvr` (CVR), `click_cnt` (Clicks), `convert_cnt` (Conversion), and `play_retain_cnt` (Remain).
- **Params:** `material_id` (string, **required**) — Top Ads material id; `metric` (string, optional) — Interactive time analysis metric; `period_type` (integer, optional) — Percentile lookback period in days

### `tiktok_top_ads_detail`

- **HTTP:** `GET /tiktok/top-ads/detail`
- **What:** Retrieve TikTok Top Ads detail. Returns detail for one TikTok Creative Center Top Ads material. Use `material_id`; the upstream does not accept `id` or `materialId`.
- **Params:** `material_id` (string, **required**) — Top Ads material id

### `tiktok_top_ads_filters`

- **HTTP:** `GET /tiktok/top-ads/filters`
- **What:** Retrieve TikTok Top Ads filters. Returns filter metadata for TikTok Creative Center Top Ads. Dynamic values come from TikTok; static UI enums are included for `order_by`, `duration`, `like`, and `ad_format`.
- **Params:** _none_

### `tiktok_top_ads_list`

- **HTTP:** `GET /tiktok/top-ads/list`
- **What:** Retrieve TikTok Top Ads. Returns high-performing auction ads from TikTok Creative Center. The service defaults `period` to 30, `page` to 1, `limit` to 20, and `order_by` to `for_you`. Use `/tiktok/top-ads/filters` for dynamic enum values and static enums for order, duration, likes, and ad format.
- **Params:** `period` (integer, optional) — Lookback period in days; `page` (integer, optional) — Page number; `limit` (integer, optional) — Maximum number of ads to return; `order_by` (string, optional) — Sort order; `country_code` (string, optional) — Country code or comma-separated country codes from /tiktok/top-ads/filters; `keyword` (string, optional) — Brand or product keyword search; `industry` (string, optional) — Industry filter id or comma-separated ids from /tiktok/top-ads/filters; `objective` (string, optional) — Objective filter id or comma-separated ids from /tiktok/top-ads/filters; `ad_language` (string, optional) — Ad language id or comma-separated ids from /tiktok/top-ads/filters; `pattern_label` (string, optional) — Pattern label id or comma-separated ids from /tiktok/top-ads/filters; `duration` (string, optional) — Video duration bucket; `like` (string, optional) — Like percentile bucket id or comma-separated ids; `ad_format` (string, optional) — Ad format id

### `tiktok_top_ads_location_info`

- **HTTP:** `GET /tiktok/top-ads/location-info`
- **What:** Retrieve TikTok Top Ads location info. Returns the initial location and industry context used by TikTok Creative Center Top Ads.
- **Params:** `module` (integer, optional) — Creative Center module id

### `tiktok_top_ads_locations`

- **HTTP:** `GET /tiktok/top-ads/locations`
- **What:** Retrieve TikTok Top Ads locations. Returns available Top Ads location filters from TikTok Creative Center.
- **Params:** _none_

### `tiktok_top_ads_recommend`

- **HTTP:** `GET /tiktok/top-ads/recommend`
- **What:** Retrieve TikTok Top Ads recommendations. Returns recommended Top Ads materials related to a material id.
- **Params:** `material_id` (string, **required**) — Top Ads material id; `page` (integer, optional) — Page number; `limit` (integer, optional) — Maximum number of ads to return

### `tiktok_top_ads_safety`

- **HTTP:** `GET /tiktok/top-ads/safety`
- **What:** Retrieve TikTok Top Ads safety configuration. Returns public Creative Center safety configuration flags related to search surfaces.
- **Params:** _none_

### `tiktok_top_ads_spotlight`

- **HTTP:** `GET /tiktok/top-ads/spotlight`
- **What:** Retrieve TikTok Top Ads Spotlight. Returns Top Ads Spotlight materials handpicked by TikTok Creative Center.
- **Params:** `page` (integer, optional) — Page number; `limit` (integer, optional) — Maximum number of ads to return

### `tiktok_top_ads_suggestions`

- **HTTP:** `GET /tiktok/top-ads/suggestions`
- **What:** Retrieve TikTok Top Ads suggestions. Returns Top Ads search suggestions from TikTok Creative Center.
- **Params:** `count` (integer, optional) — Maximum number of suggestions to return; `scenario` (integer, optional) — Suggestion scenario id

### `tiktok_trending`

- **HTTP:** `GET /tiktok/trending`
- **What:** Retrieve TikTok trending posts. Returns the current TikTok trending feed.
- **Params:** _none_

### `tiktok_video_comments`

- **HTTP:** `GET /tiktok/comments`
- **What:** Retrieve TikTok video comments. Returns top-level TikTok video comments with cursor-based pagination.
- **Params:** `aweme_id` (string, **required**) — TikTok video id from the video URL; `cursor` (integer, optional) — Pagination cursor

## TripAdvisor (6)

### `tripadvisor_autocomplete`

- **HTTP:** `GET /tripadvisor/autocomplete`
- **What:** Autocomplete TripAdvisor locations and places. Returns normalized TripAdvisor public typeahead candidates from the credential-free GraphQL endpoint.
- **Params:** `q` (string, **required**) — Autocomplete query; `limit` (integer, optional) — Maximum results; `locale` (string, optional) — TripAdvisor locale; `scope_geo_id` (integer, optional) — Optional scoped geo id; `type` (string, optional) — Optional result type hint; `search_session_id` (string, optional) — Optional captured search session id; `typeahead_id` (string, optional) — Optional captured typeahead id; `route_uid` (string, optional) — Optional captured route uid

### `tripadvisor_enums`

- **HTTP:** `GET /tripadvisor/enums`
- **What:** Get TripAdvisor enum metadata. Returns supported TripAdvisor enum values for place/listing filters, including locales, currencies, languages, listing types, filters, amenities, and category ids.
- **Params:** _none_

### `tripadvisor_hotels`

- **HTTP:** `GET /tripadvisor/hotels`
- **What:** Search TripAdvisor hotels. Returns normalized TripAdvisor hotel listing results from public credential-free GraphQL listing data.
- **Params:** `geo_id` (integer, **required**) — TripAdvisor geo id; `filter_id` (string, optional) — Optional filter id such as class or ufe; `class` (integer, optional) — Hotel class filter; `amenities` (array, optional) — Amenity filter ids; `price_min` (integer, optional) — Minimum price filter; `price_max` (integer, optional) — Maximum price filter; `pricing_mode` (string, optional) — Pricing mode; `travelers_choice` (boolean, optional) — Filter Travelers' Choice properties; `travelers_choice_botb` (boolean, optional) — Filter Best of the Best properties; `currency` (string, optional) — Currency code; `offset` (integer, optional) — Zero-based result offset; `limit` (integer, optional) — Maximum results; `sort` (string, optional) — Sort value

### `tripadvisor_place`

- **HTTP:** `GET /tripadvisor/place`
- **What:** Get TripAdvisor place. Returns a rich normalized TripAdvisor place profile from public place HTML, using configured browser fallbacks when direct HTML is blocked.
- **Params:** `url` (string, optional) — TripAdvisor place URL; `id` (string, optional) — TripAdvisor location id fallback

### `tripadvisor_reviews`

- **HTTP:** `GET /tripadvisor/reviews`
- **What:** Get TripAdvisor reviews. Returns normalized TripAdvisor public reviews from credential-free GraphQL review data. Pass either id or url.
- **Params:** `id` (string, optional) — TripAdvisor location id; `url` (string, optional) — TripAdvisor place URL; `page` (integer, optional) — 1-based review page; `limit` (integer, optional) — Maximum reviews; `language` (string, optional) — Review language; `sort_type` (string, optional) — Review sort type; `sort_by` (string, optional) — Review sort field; `ratings` (array, optional) — Rating filters; `do_machine_translation` (boolean, optional) — Enable upstream machine translation; `photos_per_review_limit` (integer, optional) — Maximum photos per review

### `tripadvisor_search`

- **HTTP:** `GET /tripadvisor/search`
- **What:** Search TripAdvisor places. Returns normalized TripAdvisor place listings for hotels, restaurants, attractions, and supported attraction category types.
- **Params:** `geo_id` (integer, **required**) — TripAdvisor geo id; `type` (string, **required**) — Listing type; `filter_id` (string, optional) — Optional hotel filter id; `class` (integer, optional) — Hotel class filter; `amenities` (array, optional) — Hotel amenity filter ids; `price_min` (integer, optional) — Minimum hotel price filter; `price_max` (integer, optional) — Maximum hotel price filter; `pricing_mode` (string, optional) — Hotel pricing mode; `travelers_choice` (boolean, optional) — Filter Travelers' Choice hotels; `travelers_choice_botb` (boolean, optional) — Filter Best of the Best hotels; `restaurant_date` (string, optional) — Restaurant availability date; `restaurant_time` (string, optional) — Restaurant availability time; `restaurant_guests` (integer, optional) — Restaurant guest count; `establishment_types` (array, optional) — Restaurant establishment type ids; `online_options` (array, optional) — Restaurant online option ids; `offset` (integer, optional) — Zero-based result offset; `limit` (integer, optional) — Maximum results; `locale` (string, optional) — TripAdvisor locale; `currency` (string, optional) — Currency code; `sort` (string, optional) — Sort value

## Trustpilot (7)

### `trustpilot_business`

- **HTTP:** `GET /trustpilot/business/{slug}`
- **What:** Get Trustpilot business profile. Returns a summary Trustpilot business profile parsed from the public business page.
- **Params:** `slug` (string, **required**) — Trustpilot business slug

### `trustpilot_business_related`

- **HTTP:** `GET /trustpilot/business/{slug}/related`
- **What:** Get Trustpilot related businesses. Returns related company cards from Trustpilot's public business page rails.
- **Params:** `slug` (string, **required**) — Trustpilot business slug

### `trustpilot_business_reviews`

- **HTTP:** `GET /trustpilot/business/{slug}/reviews`
- **What:** Get Trustpilot business reviews. Returns paginated Trustpilot business reviews parsed from the public review page.
- **Params:** `slug` (string, **required**) — Trustpilot business slug; `page` (integer, optional) — 1-based page number; defaults to 1; `stars` (integer, optional) — Filter by star rating from 1 to 5; `verified` (boolean, optional) — Filter to verified reviews; `replied` (boolean, optional) — Filter to reviews with business replies; `language` (string, optional) — Review language code used by Trustpilot; `q` (string, optional) — Text search within reviews; `date_from` (string, optional) — Date range start in YYYY-MM-DD; currently rejected by upstream; `date_to` (string, optional) — Date range end in YYYY-MM-DD; currently rejected by upstream

### `trustpilot_business_search`

- **HTTP:** `GET /trustpilot/business-units/search`
- **What:** Search Trustpilot business units. Returns normalized business-unit search results from Trustpilot's JSON business-unit search API.
- **Params:** `q` (string, **required**) — Search query; `country` (string, optional) — Two-letter country code; defaults to US; `page` (integer, optional) — 1-based page number; defaults to 1; `page_size` (integer, optional) — Results per page; defaults to 20, maximum 100

### `trustpilot_categories`

- **HTTP:** `GET /trustpilot/categories`
- **What:** Get Trustpilot categories. Returns the Trustpilot public category index grouped by top-level category.
- **Params:** _none_

### `trustpilot_category`

- **HTTP:** `GET /trustpilot/category/{slug}`
- **What:** Get Trustpilot category detail. Returns category metadata, company cards, and side rails from Trustpilot's public category page.
- **Params:** `slug` (string, **required**) — Trustpilot category slug; `page` (integer, optional) — 1-based page number; defaults to 1

### `trustpilot_category_search`

- **HTTP:** `GET /trustpilot/categories/search`
- **What:** Search Trustpilot categories. Returns normalized category search results from Trustpilot's JSON category search API.
- **Params:** `q` (string, **required**) — Search query; `country` (string, optional) — Two-letter country code; defaults to US; `locale` (string, optional) — Locale in ll-CC format; defaults to en-US; `size` (integer, optional) — Maximum number of categories; defaults to 20

## Usage (4)

### `usage_me_endpoints`

- **HTTP:** `GET /usage/me/endpoints`
- **What:** Get current user's endpoint usage breakdown. Returns per-endpoint request and credit totals for the selected UTC time range, ordered by request volume.
- **Params:** `range` (string, optional) — Time range preset. Defaults to the current billing period.; `limit` (integer, optional) — Maximum endpoints to return. Defaults to 20 and clamps to 100.; `from` (string, optional) — Custom lower bound in RFC3339 format when range=custom; `to` (string, optional) — Custom upper bound in RFC3339 format when range=custom

### `usage_me_overview`

- **HTTP:** `GET /usage/me/overview`
- **What:** Get current user's usage overview. Returns a JWT-authenticated user's current billing snapshot plus recent request and credit consumption metrics for the selected UTC time range. The `requests` summary is limited to product API traffic and excludes console, billing, usage, and user-management endpoints.
- **Params:** `range` (string, optional) — Time range preset. Defaults to the current billing period.; `from` (string, optional) — Custom lower bound in RFC3339 format when range=custom; `to` (string, optional) — Custom upper bound in RFC3339 format when range=custom

### `usage_me_recent_ips`

- **HTTP:** `GET /usage/me/recent-ips`
- **What:** Get current user's recent API client IPs. Returns recent client IP addresses observed for the JWT-authenticated user's product API traffic, ordered by last seen time. Console, billing, usage, and user-management endpoints are excluded.
- **Params:** `range` (string, optional) — Time range preset. Defaults to the current billing period.; `limit` (integer, optional) — Maximum IPs to return. Defaults to 20 and clamps to 100.; `from` (string, optional) — Custom lower bound in RFC3339 format when range=custom; `to` (string, optional) — Custom upper bound in RFC3339 format when range=custom

### `usage_me_timeseries`

- **HTTP:** `GET /usage/me/timeseries`
- **What:** Get current user's usage timeseries. Returns JWT-authenticated request and credit consumption buckets for chart rendering. Results use UTC buckets.
- **Params:** `range` (string, optional) — Time range preset. Defaults to the current billing period.; `bucket` (string, optional) — Bucket size. Defaults to hour for day range and day otherwise.; `endpoint` (string, optional) — Optional endpoint filter; `from` (string, optional) — Custom lower bound in RFC3339 format when range=custom; `to` (string, optional) — Custom upper bound in RFC3339 format when range=custom

## Yahoo Finance (39)

### `yahoo_finance_calendar`

- **HTTP:** `GET /yahoo-finance/calendars/{type}`
- **What:** Yahoo Finance calendar results. Returns global Yahoo Finance calendar rows for earnings, IPOs, economic events, or splits.
- **Params:** `type` (string, **required**) — Calendar type: earnings, ipo, economic-events, or splits; `start` (string, optional) — Start date as YYYY-MM-DD, RFC3339, or Unix seconds; `end` (string, optional) — End date as YYYY-MM-DD, RFC3339, or Unix seconds; `limit` (integer, optional) — Result count, max 100; `offset` (integer, optional) — Result offset; `market_cap` (number, optional) — Earnings-only market cap minimum; `filter_most_active` (boolean, optional) — Earnings-only most-active filter, default true

### `yahoo_finance_calendars`

- **HTTP:** `GET /yahoo-finance/calendars`
- **What:** Lists global Yahoo Finance calendar types supported by this integration.
- **Params:** _none_

### `yahoo_finance_download`

- **HTTP:** `POST /yahoo-finance/download`
- **What:** Yahoo Finance batch historical prices. Returns historical price data for up to 25 symbols.
- **Params:** `request` (object, **required**) — Batch download request

### `yahoo_finance_industries`

- **HTTP:** `GET /yahoo-finance/industries`
- **What:** Yahoo Finance industries. Lists Yahoo Finance industry keys that can be queried with the industry endpoint.
- **Params:** _none_

### `yahoo_finance_industry`

- **HTTP:** `GET /yahoo-finance/industries/{key}`
- **What:** Yahoo Finance industry detail. Returns overview, sector linkage, top companies, growth companies, and research reports for an industry key.
- **Params:** `key` (string, **required**) — Industry key such as semiconductors

### `yahoo_finance_lookup`

- **HTTP:** `GET /yahoo-finance/lookup`
- **What:** Yahoo Finance lookup. Returns Yahoo Finance instrument matches for a query, optionally filtered by instrument type.
- **Params:** `query` (string, **required**) — Ticker symbol or company name; `type` (string, optional) — Instrument type filter; `count` (integer, optional) — Result count; `start` (integer, optional) — Result offset

### `yahoo_finance_market_status`

- **HTTP:** `GET /yahoo-finance/market/{market}/status`
- **What:** Yahoo Finance market status. Returns Yahoo Finance open/close status for a market such as US.
- **Params:** `market` (string, **required**) — Market such as US

### `yahoo_finance_market_summary`

- **HTTP:** `GET /yahoo-finance/market/{market}/summary`
- **What:** Returns Yahoo Finance market summary rows for a market such as US.
- **Params:** `market` (string, **required**) — Market such as US

### `yahoo_finance_screener`

- **HTTP:** `GET /yahoo-finance/screener/{id}`
- **What:** Yahoo Finance predefined screener results. Runs a predefined Yahoo Finance screener such as day_gainers or most_actives.
- **Params:** `id` (string, **required**) — Predefined screener id; `count` (integer, optional) — Result count; `offset` (integer, optional) — Result offset; `sort_field` (string, optional) — Sort field for offset/customized runs; `sort_asc` (boolean, optional) — Sort ascending

### `yahoo_finance_screener_custom`

- **HTTP:** `POST /yahoo-finance/screener`
- **What:** Runs a constrained Yahoo Finance custom screener query using Yahoo's public screener JSON shape.
- **Params:** `request` (object, **required**) — Custom screener request

### `yahoo_finance_screeners`

- **HTTP:** `GET /yahoo-finance/screeners`
- **What:** Yahoo Finance predefined screeners. Lists the predefined screeners supported by the Yahoo Finance integration.
- **Params:** _none_

### `yahoo_finance_search`

- **HTTP:** `GET /yahoo-finance/search`
- **What:** Yahoo Finance search. Returns normalized Yahoo Finance quotes, news, lists, and optional research reports for a query.
- **Params:** `q` (string, **required**) — Ticker symbol or company name; `quotes_count` (integer, optional) — Quote result count; `news_count` (integer, optional) — News result count; `lists_count` (integer, optional) — List result count; `include_research` (boolean, optional) — Include research reports when Yahoo returns them; `enable_fuzzy_query` (boolean, optional) — Enable fuzzy matching

### `yahoo_finance_sector`

- **HTTP:** `GET /yahoo-finance/sectors/{key}`
- **What:** Yahoo Finance sector detail. Returns overview, top companies, ETFs, mutual funds, industries, and research reports for a sector key.
- **Params:** `key` (string, **required**) — Sector key such as technology

### `yahoo_finance_sectors`

- **HTTP:** `GET /yahoo-finance/sectors`
- **What:** Yahoo Finance sectors. Lists Yahoo Finance sector keys that can be queried with the sector endpoint.
- **Params:** _none_

### `yahoo_finance_ticker_actions`

- **HTTP:** `GET /yahoo-finance/ticker/{symbol}/actions`
- **What:** Yahoo Finance corporate actions. Returns dividends, splits, and capital gains for a symbol.
- **Params:** `symbol` (string, **required**) — Yahoo Finance symbol such as AAPL

### `yahoo_finance_ticker_analysts`

- **HTTP:** `GET /yahoo-finance/ticker/{symbol}/analysts`
- **What:** Yahoo Finance analyst data. Returns recommendations, upgrades/downgrades, price targets, and estimate modules where Yahoo provides them.
- **Params:** `symbol` (string, **required**) — Yahoo Finance symbol such as AAPL

### `yahoo_finance_ticker_calendar`

- **HTTP:** `GET /yahoo-finance/ticker/{symbol}/calendar`
- **What:** Returns Yahoo Finance calendar events for a symbol.
- **Params:** `symbol` (string, **required**) — Yahoo Finance symbol such as AAPL

### `yahoo_finance_ticker_capital_gains`

- **HTTP:** `GET /yahoo-finance/ticker/{symbol}/capital-gains`
- **What:** Yahoo Finance capital gains. Returns capital gain events for ETF or mutual fund symbols when Yahoo provides them.
- **Params:** `symbol` (string, **required**) — Yahoo Finance symbol such as SPY

### `yahoo_finance_ticker_dividends`

- **HTTP:** `GET /yahoo-finance/ticker/{symbol}/dividends`
- **What:** Yahoo Finance dividends. Returns dividend events for a symbol.
- **Params:** `symbol` (string, **required**) — Yahoo Finance symbol such as AAPL

### `yahoo_finance_ticker_earnings`

- **HTTP:** `GET /yahoo-finance/ticker/{symbol}/earnings`
- **What:** Returns Yahoo Finance earnings modules for a symbol.
- **Params:** `symbol` (string, **required**) — Yahoo Finance symbol such as AAPL

### `yahoo_finance_ticker_earnings_dates`

- **HTTP:** `GET /yahoo-finance/ticker/{symbol}/earnings-dates`
- **What:** Yahoo Finance earnings dates. Returns standalone earnings-date rows from Yahoo Finance calendar HTML when Yahoo serves the table.
- **Params:** `symbol` (string, **required**) — Yahoo Finance symbol such as AAPL; `limit` (integer, optional) — Result count, max 100; `offset` (integer, optional) — Result offset

### `yahoo_finance_ticker_financials`

- **HTTP:** `GET /yahoo-finance/ticker/{symbol}/financials`
- **What:** Yahoo Finance financial statements. Returns annual, quarterly, or supported trailing income, balance sheet, or cash flow statement data.
- **Params:** `symbol` (string, **required**) — Yahoo Finance symbol such as AAPL; `statement` (string, optional) — income, balance-sheet, or cash-flow; `period` (string, optional) — annual, quarterly, or trailing

### `yahoo_finance_ticker_funds`

- **HTTP:** `GET /yahoo-finance/ticker/{symbol}/funds`
- **What:** Yahoo Finance fund data. Returns fund profile, top holdings, equity/bond holdings, and sector weighting modules for ETF and mutual fund symbols.
- **Params:** `symbol` (string, **required**) — Yahoo Finance symbol such as SPY

### `yahoo_finance_ticker_history`

- **HTTP:** `GET /yahoo-finance/ticker/{symbol}/history`
- **What:** Yahoo Finance historical prices. Returns normalized OHLCV points for a symbol. Use either period or start/end.
- **Params:** `symbol` (string, **required**) — Yahoo Finance symbol such as AAPL; `period` (string, optional) — Range such as 1d, 1mo, 1y, max; `start` (string, optional) — Unix seconds, RFC3339, or YYYY-MM-DD; `end` (string, optional) — Unix seconds, RFC3339, or YYYY-MM-DD; `interval` (string, optional) — Interval such as 1d, 1h, 5m; `include_prepost` (boolean, optional) — Include pre/post market data; `include_actions` (boolean, optional) — Include dividends, splits, and capital gains; `auto_adjust` (boolean, optional) — Adjust OHLC prices with adjusted close; `back_adjust` (boolean, optional) — Back-adjust OHLC prices while keeping close; `keepna` (boolean, optional) — Keep fully empty chart rows; `rounding` (boolean, optional) — Round prices to two decimals

### `yahoo_finance_ticker_history_metadata`

- **HTTP:** `GET /yahoo-finance/ticker/{symbol}/history-metadata`
- **What:** Yahoo Finance history metadata. Returns Yahoo Finance chart metadata for a symbol.
- **Params:** `symbol` (string, **required**) — Yahoo Finance symbol such as AAPL

### `yahoo_finance_ticker_holders`

- **HTTP:** `GET /yahoo-finance/ticker/{symbol}/holders`
- **What:** Yahoo Finance holders. Returns major, institutional, fund, and insider holder modules for a symbol.
- **Params:** `symbol` (string, **required**) — Yahoo Finance symbol such as AAPL

### `yahoo_finance_ticker_info`

- **HTTP:** `GET /yahoo-finance/ticker/{symbol}/info`
- **What:** Yahoo Finance ticker info. Returns normalized profile, quote type, price, statistics, and summary modules for a symbol.
- **Params:** `symbol` (string, **required**) — Yahoo Finance symbol such as AAPL

### `yahoo_finance_ticker_isin`

- **HTTP:** `GET /yahoo-finance/ticker/{symbol}/isin`
- **What:** Yahoo Finance ticker ISIN. Returns the experimental yfinance-compatible ISIN lookup result for a symbol.
- **Params:** `symbol` (string, **required**) — Yahoo Finance symbol such as AAPL

### `yahoo_finance_ticker_news`

- **HTTP:** `GET /yahoo-finance/ticker/{symbol}/news`
- **What:** Yahoo Finance ticker news. Returns Yahoo Finance news search results for a symbol.
- **Params:** `symbol` (string, **required**) — Yahoo Finance symbol such as AAPL; `count` (integer, optional) — News result count; `tab` (string, optional) — News tab: news, all, or press_releases

### `yahoo_finance_ticker_options`

- **HTTP:** `GET /yahoo-finance/ticker/{symbol}/options`
- **What:** Yahoo Finance options chain. Returns option expiration dates and the current option chain for a symbol.
- **Params:** `symbol` (string, **required**) — Yahoo Finance symbol such as AAPL

### `yahoo_finance_ticker_options_expiration`

- **HTTP:** `GET /yahoo-finance/ticker/{symbol}/options/{expiration}`
- **What:** Yahoo Finance options chain by expiration. Returns calls and puts for a specific Unix expiration timestamp.
- **Params:** `symbol` (string, **required**) — Yahoo Finance symbol such as AAPL; `expiration` (string, **required**) — Unix expiration timestamp

### `yahoo_finance_ticker_quote`

- **HTTP:** `GET /yahoo-finance/ticker/{symbol}/quote`
- **What:** Yahoo Finance ticker quote. Returns normalized fast quote fields for one Yahoo Finance symbol.
- **Params:** `symbol` (string, **required**) — Yahoo Finance symbol such as AAPL

### `yahoo_finance_ticker_sec_filings`

- **HTTP:** `GET /yahoo-finance/ticker/{symbol}/sec-filings`
- **What:** Yahoo Finance SEC filings. Returns Yahoo Finance SEC filing summaries for a symbol.
- **Params:** `symbol` (string, **required**) — Yahoo Finance symbol such as AAPL

### `yahoo_finance_ticker_shares`

- **HTTP:** `GET /yahoo-finance/ticker/{symbol}/shares`
- **What:** Yahoo Finance share counts. Returns current share-count fields from Yahoo key statistics.
- **Params:** `symbol` (string, **required**) — Yahoo Finance symbol such as AAPL

### `yahoo_finance_ticker_shares_full`

- **HTTP:** `GET /yahoo-finance/ticker/{symbol}/shares-full`
- **What:** Yahoo Finance historical share counts. Returns historical shares-out rows from Yahoo fundamentals timeseries.
- **Params:** `symbol` (string, **required**) — Yahoo Finance symbol such as AAPL; `start` (string, optional) — Start date as YYYY-MM-DD, RFC3339, or Unix seconds; `end` (string, optional) — End date as YYYY-MM-DD, RFC3339, or Unix seconds

### `yahoo_finance_ticker_splits`

- **HTTP:** `GET /yahoo-finance/ticker/{symbol}/splits`
- **What:** Yahoo Finance splits. Returns split events for a symbol.
- **Params:** `symbol` (string, **required**) — Yahoo Finance symbol such as AAPL

### `yahoo_finance_ticker_sustainability`

- **HTTP:** `GET /yahoo-finance/ticker/{symbol}/sustainability`
- **What:** Yahoo Finance sustainability. Returns ESG and sustainability modules for a symbol.
- **Params:** `symbol` (string, **required**) — Yahoo Finance symbol such as AAPL

### `yahoo_finance_ticker_valuation`

- **HTTP:** `GET /yahoo-finance/ticker/{symbol}/valuation`
- **What:** Yahoo Finance valuation measures. Returns the valuation table from the Yahoo Finance key statistics page when Yahoo serves the table.
- **Params:** `symbol` (string, **required**) — Yahoo Finance symbol such as AAPL

### `yahoo_finance_trending`

- **HTTP:** `GET /yahoo-finance/trending/{region}`
- **What:** Yahoo Finance trending symbols. Returns trending Yahoo Finance symbols for a region.
- **Params:** `region` (string, **required**) — Region such as US; `count` (integer, optional) — Symbol count

## YouTube (13)

### `youtube_captions`

- **HTTP:** `GET /youtube/captions/{id}`
- **What:** Retrieve auto-generated or human captions. Returns the caption cues for a specific YouTube video.
- **Params:** `id` (string, **required**) — YouTube video ID (11-character code); `lang` (string, optional) — Caption language code (ISO 639-1), defaults to **en**

### `youtube_channel_playlists`

- **HTTP:** `GET /youtube/channel/{id}/playlists`
- **What:** Retrieve the playlists tab for a YouTube channel. Returns normalized playlist items from a channel's Playlists tab and an optional continuation token.
- **Params:** `id` (string, **required**) — Channel ID, @handle, /c path, /user path, or full YouTube channel URL; `continuation_token` (string, optional) — Pagination token returned by a previous request

### `youtube_channel_search`

- **HTTP:** `GET /youtube/channel/{id}/search`
- **What:** Search within a YouTube channel. Returns normalized video search items scoped to a specific channel, including the resolved top-level `query`.
- **Params:** `id` (string, **required**) — Channel ID, @handle, /c path, /user path, or full YouTube channel URL; `q` (string, **required**) — Search query; `continuation_token` (string, optional) — Pagination token returned by a previous request

### `youtube_channel_shorts`

- **HTTP:** `GET /youtube/channel/{id}/shorts`
- **What:** Retrieve the shorts tab for a YouTube channel. Returns normalized short-form video entries from a channel's Shorts tab.
- **Params:** `id` (string, **required**) — Channel ID, @handle, /c path, /user path, or full YouTube channel URL

### `youtube_channel_videos`

- **HTTP:** `GET /youtube/channel/{id}/videos`
- **What:** Retrieve the videos tab for a YouTube channel. Returns normalized video items from a channel's Videos tab and an optional continuation token.
- **Params:** `id` (string, **required**) — Channel ID, @handle, /c path, /user path, or full YouTube channel URL; `continuation_token` (string, optional) — Pagination token returned by a previous request

### `youtube_comments`

- **HTTP:** `GET /youtube/comments/{id}`
- **What:** Retrieve video comments (top-level & replies). Returns a page of comments for a specific YouTube video.
- **Params:** `id` (string, **required**) — YouTube video ID (11-character code); `continuation_token` (string, optional) — Pagination token returned by a previous request, first page if empty

### `youtube_playlist`

- **HTTP:** `GET /youtube/playlist/{id}`
- **What:** Retrieve playlist metadata and items. Returns playlist metadata, normalized video items, and an optional continuation token for pagination.
- **Params:** `id` (string, **required**) — YouTube playlist ID or full playlist URL; `continuation_token` (string, optional) — Pagination token returned by a previous request

### `youtube_profile`

- **HTTP:** `GET /youtube/profile/{id}`
- **What:** Retrieve channel profile. Returns full profile details for a YouTube channel.
- **Params:** `id` (string, **required**) — Channel ID, @handle, /c path, /user path, bare username, or full YouTube channel URL

### `youtube_search`

- **HTTP:** `GET /youtube/search`
- **What:** Search YouTube. Returns normalized YouTube search results using YouTube's InnerTube search API. Pass `continuation_token` from a previous response to retrieve the next page. Use `q` as the primary query parameter; `search_query` is accepted as an alias.
- **Params:** `q` (string, optional) — Search query; `search_query` (string, optional) — Alias for q; `continuation_token` (string, optional) — Pagination token returned by a previous request; `type` (string, optional) — Filter by type; `sort_by` (string, optional) — Sort results; `upload_date` (string, optional) — Filter by upload date; `duration` (string, optional) — Filter by duration; `features` (string, optional) — Comma-separated feature filters; `params` (string, optional) — Raw protobuf-encoded search filter (base64)

### `youtube_tag`

- **HTTP:** `GET /youtube/tag/{tag}`
- **What:** Retrieve YouTube videos by tag. Returns normalized videos from the public YouTube hashtag page for the supplied tag. Set `type=shorts` to use the Shorts tab, or pass `continuation_token` from a previous response to fetch the next page.
- **Params:** `tag` (string, **required**) — Tag to filter videos; `type` (string, optional) — Result tab to load; `continuation_token` (string, optional) — Continuation token for pagination, first page if empty

### `youtube_transcript`

- **HTTP:** `GET /youtube/transcript/{id}`
- **What:** Retrieve transcript for a YouTube video. Returns transcript segments for a YouTube video using YouTube's native player captions. Set `format=text`, `format=srt`, or `format=vtt` to receive plain-text output instead of the standard response envelope.
- **Params:** `id` (string, **required**) — YouTube video ID (11-character code); `lang` (string, optional) — Preferred transcript language; `translate_to` (string, optional) — Translate transcript to this language code; `format` (string, optional) — Response format; `timestamps` (boolean, optional) — Include timestamps in the JSON response

### `youtube_transcript_languages`

- **HTTP:** `GET /youtube/transcript/{id}/languages`
- **What:** List transcript languages for a YouTube video. Returns the transcript languages exposed by YouTube for a specific video.
- **Params:** `id` (string, **required**) — YouTube video ID (11-character code)

### `youtube_video`

- **HTTP:** `GET /youtube/video/{id}`
- **What:** Retrieve video metadata & captions. Returns title, description, stats, and captions for a YouTube video ID.
- **Params:** `id` (string, **required**) — YouTube video ID (11-char code)

## Zillow (3)

### `zillow_autocomplete`

- **HTTP:** `GET /zillow/autocomplete`
- **What:** Autocomplete Zillow locations. Returns normalized Zillow public web autocomplete candidates. Semantic candidates may include region_id/region_type compatibility aliases plus region_ids/region_types arrays; prefer complete bounds metadata for Zillow search when present.
- **Params:** `query` (string, **required**) — Location query; `limit` (integer, optional) — Maximum results, clamped to 20; `status` (string, optional) — Search context: for_sale, for_rent, or sold

### `zillow_property`

- **HTTP:** `GET /zillow/property/{zpid}`
- **What:** Get Zillow property. Returns normalized Zillow public property details using Zillow's public persisted GraphQL property payload, including optional typed sections for address parts, listing attribution, pricing, history, media, facts, schools, and nearby homes when present.
- **Params:** `zpid` (string, **required**) — Zillow property id

### `zillow_search`

- **HTTP:** `GET /zillow/search`
- **What:** Search Zillow listings. Returns normalized Zillow public listing search results. Callers must pass complete map bounds from autocomplete when available, or a region id fallback.
- **Params:** `location` (string, **required**) — Display location; `page` (integer, optional) — 1-based page; `status` (string, optional) — Search context: for_sale, for_rent, or sold; `region_id` (integer, optional) — Zillow region id from autocomplete, used when complete bounds are not provided; `region_type` (integer, optional) — Zillow region type from autocomplete, used with region_id fallback; `west` (number, optional) — Map west bound from autocomplete; `east` (number, optional) — Map east bound from autocomplete; `south` (number, optional) — Map south bound from autocomplete; `north` (number, optional) — Map north bound from autocomplete
