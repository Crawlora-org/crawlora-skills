# Crawlora endpoint catalog

> Generated from `scripts/tools.json` by `scripts/generate.mjs` — do not edit by hand.

The complete Crawlora public-web-data API surface, grouped by platform. Use this to pick the right endpoint for any job, then call it via `scripts/crawlora.sh` (see SKILL.md).

All paths are relative to the API base `https://api.crawlora.net/api/v1` and require the header `x-api-key: $CRAWLORA_API_KEY`. Path params like `{id}` are substituted into the URL; `GET` params go in the query string; `POST` params go in a JSON body.

**467 endpoints across 40 platform group(s).**

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
- **Params:** `adults` (integer, optional) — Adult guests; `check_in` (string, optional) — Check-in date; `check_out` (string, optional) — Check-out date; `currency` (string, optional) — Currency for bounded map search; `location` (string, **required**) — Location; `ne_lat` (number, optional) — Northeast latitude for bounded map search; `ne_lng` (number, optional) — Northeast longitude for bounded map search; `page` (integer, optional) — 1-based page; `sw_lat` (number, optional) — Southwest latitude for bounded map search; `sw_lng` (number, optional) — Southwest longitude for bounded map search; `zoom` (integer, optional) — Map zoom for bounded map search

## Amazon (3)

### `amazon_product`

- **HTTP:** `GET /amazon/product/{asin}`
- **What:** Retrieve Amazon product details. Returns normalized product details for an Amazon ASIN on `amazon.com`, including pricing, availability, overview data, inline review samples, and descriptive content.
- **Params:** `asin` (string, **required**) — Amazon ASIN; `currency` (string, optional) — Amazon currency; `language` (string, optional) — Amazon language

### `amazon_search`

- **HTTP:** `GET /amazon/search`
- **What:** Search Amazon products. Returns normalized Amazon search result cards for `amazon.com`.
- **Params:** `k` (string, **required**) — Search keyword; `page` (integer, optional) — 1-based page number; `s` (string, optional) — Sort order

### `amazon_suggest`

- **HTTP:** `GET /amazon/suggest/{keyword}`
- **What:** Retrieve Amazon search suggestions. Returns typeahead keyword suggestions from Amazon's public suggestion API for `amazon.com`.
- **Params:** `keyword` (string, **required**) — Suggestion prefix

## ApplePodcasts (5)

### `apple_podcasts_charts`

- **HTTP:** `GET /apple-podcasts/charts`
- **What:** Retrieve Apple Podcasts chart rankings. Returns Apple Podcasts show chart rankings from public iTunes RSS JSON feeds. Supported collections are `toppodcasts` and `topaudiopodcasts`.
- **Params:** `category` (integer, optional) — Numeric Apple podcast genre ID; `collection` (string, optional) — Chart collection; `country` (string, optional) — Two-letter storefront country code; `limit` (integer, optional) — Number of chart items to return

### `apple_podcasts_episodes_search`

- **HTTP:** `GET /apple-podcasts/episodes/search`
- **What:** Search Apple Podcasts episodes. Returns normalized Apple Podcasts episodes from Apple's public iTunes Search API.
- **Params:** `country` (string, optional) — Two-letter storefront country code; `lang` (string, optional) — Result language tag; `limit` (integer, optional) — Number of episodes per page; `page` (integer, optional) — Search page number (1-based); `term` (string, **required**) — Search term

### `apple_podcasts_search`

- **HTTP:** `GET /apple-podcasts/search`
- **What:** Search Apple Podcasts shows. Returns normalized Apple Podcasts shows from Apple's public iTunes Search API.
- **Params:** `country` (string, optional) — Two-letter storefront country code; `lang` (string, optional) — Result language tag; `limit` (integer, optional) — Number of shows per page; `page` (integer, optional) — Search page number (1-based); `term` (string, **required**) — Search term

### `apple_podcasts_show`

- **HTTP:** `GET /apple-podcasts/show/{id}`
- **What:** Retrieve Apple Podcasts show details. Returns normalized show metadata from Apple's public iTunes Lookup API.
- **Params:** `country` (string, optional) — Two-letter storefront country code; `id` (string, **required**) — Apple Podcasts show ID; `lang` (string, optional) — Result language tag

### `apple_podcasts_show_episodes`

- **HTTP:** `GET /apple-podcasts/show/{id}/episodes`
- **What:** Retrieve Apple Podcasts show episodes. Returns a show and its public Apple Podcasts episodes from Apple's iTunes Lookup API.
- **Params:** `country` (string, optional) — Two-letter storefront country code; `id` (string, **required**) — Apple Podcasts show ID; `lang` (string, optional) — Result language tag; `limit` (integer, optional) — Number of episodes to return

## AppStore (10)

### `appstore_app`

- **HTTP:** `GET /appstore/app`
- **What:** Retrieve full App Store app details. Returns normalized app metadata from the App Store lookup API. Provide either `id` or `app_id`.
- **Params:** `app_id` (string, optional) — App Store bundle ID; `country` (string, optional) — Two-letter storefront country code; `id` (string, optional) — App Store track ID; `lang` (string, optional) — Result language tag; `ratings` (boolean, optional) — Include ratings histogram

### `appstore_developer`

- **HTTP:** `GET /appstore/developer/{dev_id}`
- **What:** Retrieve apps by developer ID. Returns App Store apps associated with a specific developer artist ID.
- **Params:** `country` (string, optional) — Two-letter storefront country code; `dev_id` (string, **required**) — Developer artist ID; `lang` (string, optional) — Result language tag

### `appstore_list`

- **HTTP:** `GET /appstore/list`
- **What:** Retrieve App Store collection rankings. Returns ranked App Store apps from an iTunes RSS collection, optionally expanded to full lookup details.
- **Params:** `category` (integer, optional) — Numeric App Store category ID; `collection` (string, optional) — Collection slug; `country` (string, optional) — Two-letter storefront country code; `full_detail` (boolean, optional) — Expand each app via lookup API; `lang` (string, optional) — Result language tag; `num` (integer, optional) — Number of apps to return

### `appstore_privacy`

- **HTTP:** `GET /appstore/privacy/{id}`
- **What:** Retrieve App Store privacy disclosures. Returns the app privacy cards shown on the App Store page, including data categories and purposes.
- **Params:** `country` (string, optional) — Two-letter storefront country code; `id` (string, **required**) — App Store track ID; `lang` (string, optional) — Result language tag

### `appstore_ratings`

- **HTTP:** `GET /appstore/ratings`
- **What:** Retrieve App Store ratings histogram. Returns total ratings count and the 1-5 star histogram shown on the App Store product page.
- **Params:** `app_id` (string, optional) — App Store bundle ID; `country` (string, optional) — Two-letter storefront country code; `id` (string, optional) — App Store track ID; `lang` (string, optional) — Result language tag

### `appstore_reviews`

- **HTTP:** `GET /appstore/reviews`
- **What:** Retrieve App Store reviews. Returns one page of customer reviews for an app. Provide either `id` or `app_id`.
- **Params:** `app_id` (string, optional) — App Store bundle ID; `country` (string, optional) — Two-letter storefront country code; `id` (string, optional) — App Store track ID; `lang` (string, optional) — Result language tag; `page` (integer, optional) — Review page number (1-10); `sort` (string, optional) — Sort order

### `appstore_search`

- **HTTP:** `GET /appstore/search`
- **What:** Search the App Store. Returns App Store search results for a term. Set `ids_only=true` to return only app IDs.
- **Params:** `country` (string, optional) — Two-letter storefront country code; `ids_only` (boolean, optional) — Return only app IDs; `lang` (string, optional) — Result language tag; `num` (integer, optional) — Number of apps per page; `page` (integer, optional) — Search page number (1-based); `term` (string, **required**) — Search term

### `appstore_similar`

- **HTTP:** `GET /appstore/similar`
- **What:** Retrieve "You Might Also Like" apps. Returns the related apps shown on the App Store product page. Provide either `id` or `app_id`.
- **Params:** `app_id` (string, optional) — App Store bundle ID; `country` (string, optional) — Two-letter storefront country code; `id` (string, optional) — App Store track ID; `lang` (string, optional) — Result language tag

### `appstore_suggest`

- **HTTP:** `GET /appstore/suggest/{term}`
- **What:** Retrieve App Store search suggestions. Returns suggested search terms for the given partial keyword.
- **Params:** `country` (string, optional) — Two-letter storefront country code; `term` (string, **required**) — Partial search term

### `appstore_version_history`

- **HTTP:** `GET /appstore/version-history/{id}`
- **What:** Retrieve App Store version history. Returns the version history entries shown in the App Store "What's New" section.
- **Params:** `country` (string, optional) — Two-letter storefront country code; `id` (string, **required**) — App Store track ID; `lang` (string, optional) — Result language tag

## Bing (5)

### `bing_images`

- **HTTP:** `GET /bing/images`
- **What:** Search Bing image results. Returns normalized Bing image search results for a query string. Locale defaults to country=us and lang=en-us. Results are fetched from public Bing image HTML/async pages and return 503 when Bing serves a challenge page or unusable HTML.
- **Params:** `count` (integer, optional) — Results per page; defaults to 10, clamped to 1..50; `country` (string, optional) — Two-letter country code; defaults to us; `lang` (string, optional) — Bing UI language; defaults to en-us; `page` (integer, optional) — 1-based page number; defaults to 1; `q` (string, **required**) — Search query

### `bing_news`

- **HTTP:** `GET /bing/news`
- **What:** Search Bing news results. Returns normalized Bing news search results for a query string. Locale defaults to country=us and lang=en-us. Results are fetched from public Bing news HTML/async pages and return 503 when Bing serves a challenge page or unusable HTML.
- **Params:** `count` (integer, optional) — Results per page; defaults to 10, clamped to 1..50; `country` (string, optional) — Two-letter country code; defaults to us; `lang` (string, optional) — Bing UI language; defaults to en-us; `page` (integer, optional) — 1-based page number; defaults to 1; `q` (string, **required**) — Search query

### `bing_search`

- **HTTP:** `GET /bing/search`
- **What:** Search Bing web results. Returns normalized Bing web search results for a query string, including organic results, optional context panel data, related queries, people-also-ask questions, news modules, video modules, and page-based pagination. Empty optional blocks are omitted from the JSON response. Locale defaults to country=us and lang=en-us. Results are fetched with the repo's Chrome-impersonated request client and return 503 when Bing serves a challenge page or unusable HTML.
- **Params:** `count` (integer, optional) — Results per page; defaults to 10, clamped to 1..50; `country` (string, optional) — Two-letter country code; defaults to us; `lang` (string, optional) — Bing UI language; defaults to en-us; `page` (integer, optional) — 1-based page number; defaults to 1; `q` (string, **required**) — Search query

### `bing_suggest`

- **HTTP:** `GET /bing/suggest`
- **What:** Suggest Bing search queries. Returns Bing autosuggest query completions for a query prefix. Locale defaults to country=us and lang=en-us. Suggestions are fetched from public Bing suggest endpoints and trimmed to the requested count.
- **Params:** `count` (integer, optional) — Suggestions to return; defaults to 10, clamped to 1..12; `country` (string, optional) — Two-letter country code; defaults to us; `lang` (string, optional) — Bing UI language; defaults to en-us; `q` (string, **required**) — Search query prefix

### `bing_videos`

- **HTTP:** `GET /bing/videos`
- **What:** Search Bing video results. Returns normalized Bing video search results for a query string. Locale defaults to country=us and lang=en-us. Results are fetched from public Bing video HTML/async pages and return 503 when Bing serves a challenge page or unusable HTML.
- **Params:** `count` (integer, optional) — Results per page; defaults to 10, clamped to 1..50; `country` (string, optional) — Two-letter country code; defaults to us; `lang` (string, optional) — Bing UI language; defaults to en-us; `page` (integer, optional) — 1-based page number; defaults to 1; `q` (string, **required**) — Search query

## Box Office Mojo (21)

### `boxofficemojo_brand`

- **HTTP:** `GET /boxofficemojo/brand`
- **What:** Box Office Mojo brand detail. Returns normalized release rows from a public Box Office Mojo brand page. Pass exactly one of `id`, `path`, or `url`.
- **Params:** `id` (string, optional) — Box Office Mojo brand id; `path` (string, optional) — Box Office Mojo brand path; `url` (string, optional) — Absolute https://www.boxofficemojo.com brand URL

### `boxofficemojo_brands`

- **HTTP:** `GET /boxofficemojo/brands`
- **What:** Box Office Mojo brand chart. Returns normalized rows from Box Office Mojo's public brand chart.
- **Params:** _none_

### `boxofficemojo_calendar`

- **HTTP:** `GET /boxofficemojo/calendar`
- **What:** Box Office Mojo domestic release schedule. Returns normalized grouped rows from Box Office Mojo's public domestic release schedule. Provide `year` and `month`.
- **Params:** `month` (integer, **required**) — Calendar month, 1 through 12; `year` (integer, **required**) — Calendar year, from 1921 through 2100

### `boxofficemojo_calendar_changes`

- **HTTP:** `GET /boxofficemojo/calendar/changes`
- **What:** Box Office Mojo domestic release schedule changes. Returns normalized grouped rows from Box Office Mojo's public domestic release-schedule changes page.
- **Params:** `offset` (integer, optional) — Changes page offset. Allowed values: 0, 30, 60, ... 780

### `boxofficemojo_calendar_date`

- **HTTP:** `GET /boxofficemojo/calendar/date`
- **What:** Box Office Mojo domestic release schedule date. Returns normalized release rows for one public Box Office Mojo domestic release-schedule date.
- **Params:** `date` (string, **required**) — Calendar date in YYYY-MM-DD format

### `boxofficemojo_date_domestic`

- **HTTP:** `GET /boxofficemojo/date/domestic`
- **What:** Box Office Mojo domestic daily box office. Returns normalized rows from Box Office Mojo's public domestic daily chart. Empty upstream daily pages return a typed not-found error rather than an empty success.
- **Params:** `date` (string, **required**) — Domestic box office date in YYYY-MM-DD format

### `boxofficemojo_franchise`

- **HTTP:** `GET /boxofficemojo/franchise`
- **What:** Box Office Mojo franchise detail. Returns normalized release rows from a public Box Office Mojo franchise page. Pass exactly one of `id`, `path`, or `url`.
- **Params:** `id` (string, optional) — Box Office Mojo franchise id; `path` (string, optional) — Box Office Mojo franchise path; `url` (string, optional) — Absolute https://www.boxofficemojo.com franchise URL

### `boxofficemojo_franchises`

- **HTTP:** `GET /boxofficemojo/franchises`
- **What:** Box Office Mojo franchise chart. Returns normalized rows from Box Office Mojo's public franchise chart.
- **Params:** _none_

### `boxofficemojo_genre`

- **HTTP:** `GET /boxofficemojo/genre`
- **What:** Box Office Mojo genre detail. Returns normalized release rows from a public Box Office Mojo genre page. Pass exactly one of `id`, `path`, or `url`.
- **Params:** `id` (string, optional) — Box Office Mojo genre id; `path` (string, optional) — Box Office Mojo genre path; `url` (string, optional) — Absolute https://www.boxofficemojo.com genre URL

### `boxofficemojo_genres`

- **HTTP:** `GET /boxofficemojo/genres`
- **What:** Box Office Mojo genre chart. Returns normalized rows from Box Office Mojo's public genre chart.
- **Params:** _none_

### `boxofficemojo_lifetime_grosses`

- **HTTP:** `GET /boxofficemojo/lifetime-grosses`
- **What:** Box Office Mojo lifetime gross chart. Returns normalized rows from Box Office Mojo's credential-free lifetime gross chart. `area` values: `worldwide`, `domestic`.
- **Params:** `area` (string, optional) — Chart area. Allowed values: worldwide, domestic; `offset` (integer, optional) — Chart page offset. Allowed values: 0, 200, 400, 600, 800

### `boxofficemojo_release`

- **HTTP:** `GET /boxofficemojo/release`
- **What:** Box Office Mojo release detail. Returns normalized Box Office Mojo release summary fields and domestic daily rows from a public release page. Pass exactly one of `id`, `path`, or `url`.
- **Params:** `id` (string, optional) — Box Office Mojo release id; `path` (string, optional) — Box Office Mojo release path; `url` (string, optional) — Absolute https://www.boxofficemojo.com release URL

### `boxofficemojo_release_group`

- **HTTP:** `GET /boxofficemojo/release-group`
- **What:** Box Office Mojo release group detail. Returns normalized market release rows grouped by region from a public Box Office Mojo release-group page. Pass exactly one of `id`, `path`, or `url`.
- **Params:** `id` (string, optional) — Box Office Mojo release-group id; `path` (string, optional) — Box Office Mojo release-group path; `url` (string, optional) — Absolute https://www.boxofficemojo.com release-group URL

### `boxofficemojo_showdown`

- **HTTP:** `GET /boxofficemojo/showdown`
- **What:** Box Office Mojo showdown detail. Returns normalized release comparison metrics from a public Box Office Mojo showdown page. Pass exactly one of `id`, `path`, or `url`.
- **Params:** `id` (string, optional) — Box Office Mojo showdown id; `path` (string, optional) — Box Office Mojo showdown path; `url` (string, optional) — Absolute https://www.boxofficemojo.com showdown URL

### `boxofficemojo_showdowns`

- **HTTP:** `GET /boxofficemojo/showdowns`
- **What:** Box Office Mojo showdowns. Returns normalized comparison rows from Box Office Mojo's public showdowns page.
- **Params:** _none_

### `boxofficemojo_title`

- **HTTP:** `GET /boxofficemojo/title`
- **What:** Box Office Mojo title detail. Returns normalized Box Office Mojo title release-group and market-gross tables from a public title page. Pass exactly one of `id`, `path`, or `url`.
- **Params:** `id` (string, optional) — Box Office Mojo title id; `path` (string, optional) — Box Office Mojo title path; `url` (string, optional) — Absolute https://www.boxofficemojo.com title URL

### `boxofficemojo_weekend_domestic`

- **HTTP:** `GET /boxofficemojo/weekend/domestic`
- **What:** Box Office Mojo domestic weekend box office. Returns normalized rows from Box Office Mojo's public domestic weekend chart. Empty upstream weekend pages return a typed not-found error rather than an empty success.
- **Params:** `week` (integer, **required**) — Weekend number, 1 through 53; `year` (integer, **required**) — Domestic weekend year, from 1982 through 2100

### `boxofficemojo_weekend_domestic_by_distributor`

- **HTTP:** `GET /boxofficemojo/weekend/domestic/by-distributor`
- **What:** Box Office Mojo domestic weekend by distributor. Returns normalized distributor rows from Box Office Mojo's public domestic weekend by-distributor chart. Empty upstream weekend pages return a typed not-found error rather than an empty success.
- **Params:** `week` (integer, **required**) — Weekend number, 1 through 53; `year` (integer, **required**) — Domestic weekend year, from 1982 through 2100

### `boxofficemojo_weekend_domestic_estimates`

- **HTTP:** `GET /boxofficemojo/weekend/domestic/estimates`
- **What:** Box Office Mojo domestic weekend estimates. Returns normalized estimate-vs-actual rows from Box Office Mojo's public domestic weekend estimates chart. Empty upstream weekend pages return a typed not-found error rather than an empty success.
- **Params:** `week` (integer, **required**) — Weekend number, 1 through 53; `year` (integer, **required**) — Domestic weekend year, from 1982 through 2100

### `boxofficemojo_year_domestic`

- **HTTP:** `GET /boxofficemojo/year/domestic`
- **What:** Box Office Mojo domestic yearly box office. Returns normalized release rows from Box Office Mojo's public domestic yearly calendar-grosses chart.
- **Params:** `year` (integer, **required**) — Domestic box office year, from 1977 through 2100

### `boxofficemojo_year_worldwide`

- **HTTP:** `GET /boxofficemojo/year/worldwide`
- **What:** Box Office Mojo worldwide yearly box office. Returns normalized release-group rows from Box Office Mojo's public worldwide yearly chart.
- **Params:** `year` (integer, **required**) — Box office year, from 1977 through 2100

## Brand (1)

### `brand_retrieve`

- **HTTP:** `GET /brand/retrieve`
- **What:** Retrieve brand data by domain. Fetches a domain's homepage and Web App Manifest and extracts a normalized brand profile (title, description, brand colors normalized to hex, logos and icons ranked best-first, backdrops, socials, links, and any schema.org organization data). Enrichment-only fields that are not present in the page markup are returned as null.
- **Params:** `domain` (string, **required**) — Domain to retrieve brand data for, e.g. context.dev; `force_language` (string, optional) — Accepted for compatibility; not applied in HTML-only mode; `maxAgeMs` (integer, optional) — Cache freshness window in milliseconds, clamps to 1 day..1 year; `maxSpeed` (boolean, optional) — Optimize for speed by skipping schema.org and footer-link extraction; `timeoutMS` (integer, optional) — Upstream fetch timeout in milliseconds, clamps to 1000..300000

## Brave (5)

### `brave_images`

- **HTTP:** `GET /brave/images`
- **What:** Search Brave image results. Returns normalized Brave image search results for a query string. Locale defaults to country=us and lang=en-us. Results are fetched from public Brave Search image HTML and return 503 when Brave serves a challenge page or unusable HTML.
- **Params:** `count` (integer, optional) — Results to return; defaults to 10, clamped to 1..50; `country` (string, optional) — Brave result country; defaults to us; `lang` (string, optional) — Brave UI language; defaults to en-us; `offset` (integer, optional) — Zero-based Brave result page; defaults to 0; `q` (string, **required**) — Search query

### `brave_news`

- **HTTP:** `GET /brave/news`
- **What:** Search Brave news results. Returns normalized Brave news search results for a query string. Locale defaults to country=us and lang=en-us. Results are fetched from public Brave Search news HTML and return 503 when Brave serves a challenge page or unusable HTML.
- **Params:** `count` (integer, optional) — Results to return; defaults to 10, clamped to 1..50; `country` (string, optional) — Brave result country; defaults to us; `date_from` (string, optional) — Custom start date in YYYY-MM-DD; requires date_to; `date_to` (string, optional) — Custom end date in YYYY-MM-DD; requires date_from; `lang` (string, optional) — Brave UI language; defaults to en-us; `offset` (integer, optional) — Zero-based Brave result page; defaults to 0; `q` (string, **required**) — Search query; `time_range` (string, optional) — Preset time filter: any, day, week, month, year, or custom

### `brave_search`

- **HTTP:** `GET /brave/search`
- **What:** Search Brave. Returns normalized web search results from Brave Search for a query string, along with offset-based pagination, related queries, discussions, videos, and the right-side knowledge card when Brave includes one. Use time_range for preset ranges or date_from/date_to for a custom YYYY-MM-DD range. Locale defaults to country=us and lang=en-us.
- **Params:** `country` (string, optional) — Brave result country; defaults to us; `date_from` (string, optional) — Custom start date in YYYY-MM-DD; requires date_to; `date_to` (string, optional) — Custom end date in YYYY-MM-DD; requires date_from; `lang` (string, optional) — Brave UI language; defaults to en-us; `offset` (integer, optional) — Zero-based Brave result page; `q` (string, **required**) — Search query; `time_range` (string, optional) — Preset time filter: any, day, week, month, year, or custom

### `brave_suggest`

- **HTTP:** `GET /brave/suggest`
- **What:** Suggest Brave search queries. Returns Brave autosuggest query completions for a query prefix. Locale defaults to country=us and lang=en-us. Suggestions are fetched from public Brave Search suggest JSON and trimmed to the requested count.
- **Params:** `count` (integer, optional) — Suggestions to return; defaults to 10, clamped to 1..12; `country` (string, optional) — Brave result country; defaults to us; `lang` (string, optional) — Brave UI language; defaults to en-us; `q` (string, **required**) — Search query prefix

### `brave_videos`

- **HTTP:** `GET /brave/videos`
- **What:** Search Brave video results. Returns normalized Brave video search results for a query string. Locale defaults to country=us and lang=en-us. Results are fetched from public Brave Search video HTML and return 503 when Brave serves a challenge page or unusable HTML.
- **Params:** `count` (integer, optional) — Results to return; defaults to 10, clamped to 1..50; `country` (string, optional) — Brave result country; defaults to us; `date_from` (string, optional) — Custom start date in YYYY-MM-DD; requires date_to; `date_to` (string, optional) — Custom end date in YYYY-MM-DD; requires date_from; `lang` (string, optional) — Brave UI language; defaults to en-us; `offset` (integer, optional) — Zero-based Brave result page; defaults to 0; `q` (string, **required**) — Search query; `time_range` (string, optional) — Preset time filter: any, day, week, month, year, or custom

## CoinGecko (21)

### `coingecko_categories`

- **HTTP:** `GET /coingecko/categories`
- **What:** CoinGecko categories. Returns normalized CoinGecko category rows from the public categories page. This endpoint supports the documented `vs_currency` enum.
- **Params:** `limit` (integer, optional) — Rows to return, default 100, max 100; `vs_currency` (string, optional) — Quote currency

### `coingecko_category_coins`

- **HTTP:** `GET /coingecko/category/{slug}/coins`
- **What:** CoinGecko category coins. Returns normalized coin rows from a CoinGecko public category page. This endpoint supports the documented `vs_currency` enum.
- **Params:** `limit` (integer, optional) — Rows to return, default 100, max 100; `page` (integer, optional) — Page number, default 1; `slug` (string, **required**) — CoinGecko category slug such as stablecoins; `vs_currency` (string, optional) — Quote currency

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
- **Params:** `id` (string, **required**) — CoinGecko coin id such as bitcoin; `include_annotations` (boolean, optional) — Fetch optional CoinGecko chart annotations; `range` (string, optional) — Chart range; `vs_currency` (string, optional) — Quote currency

### `coingecko_exchange`

- **HTTP:** `GET /coingecko/exchange/{id}`
- **What:** CoinGecko exchange detail. Returns normalized profile stats and market rows from a CoinGecko public exchange page. This endpoint supports the documented `vs_currency` enum.
- **Params:** `id` (string, **required**) — CoinGecko exchange id such as binance; `limit` (integer, optional) — Rows to return, default 100, max 100; `vs_currency` (string, optional) — Quote currency

### `coingecko_exchanges`

- **HTTP:** `GET /coingecko/exchanges`
- **What:** CoinGecko exchanges. Returns normalized exchange rows from CoinGecko public website exchange tables. This endpoint supports the documented `vs_currency` enum.
- **Params:** `kind` (string, optional) — Exchange table kind, default spot; `limit` (integer, optional) — Rows to return, default 100, max 100; `page` (integer, optional) — Page number, default 1; `vs_currency` (string, optional) — Quote currency

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
- **Params:** `kind` (string, optional) — Chart kind, default total_market_cap; `limit` (integer, optional) — Rows per series to return, default 120, max 500; `range` (string, optional) — Chart range, default 90d

### `coingecko_learn_articles`

- **HTTP:** `GET /coingecko/learn/articles`
- **What:** CoinGecko Learn articles. Returns normalized article cards from CoinGecko Learn public pages.
- **Params:** `category` (string, optional) — Learn category, default all; `limit` (integer, optional) — Rows to return, default 20, max 50

### `coingecko_markets`

- **HTTP:** `GET /coingecko/markets`
- **What:** CoinGecko markets. Returns normalized cryptocurrency market rows from CoinGecko public pages. This endpoint supports the documented `vs_currency` enum and is not intended for real-time trading.
- **Params:** `limit` (integer, optional) — Rows to return, default 100, max 100; `page` (integer, optional) — Page number, default 1; `vs_currency` (string, optional) — Quote currency

### `coingecko_new_coins`

- **HTTP:** `GET /coingecko/new-coins`
- **What:** CoinGecko new cryptocurrencies. Returns normalized rows from CoinGecko's public new cryptocurrencies table. This endpoint supports the documented `vs_currency` enum.
- **Params:** `limit` (integer, optional) — Rows to return, default 100, max 100; `page` (integer, optional) — Page number, default 1; `vs_currency` (string, optional) — Quote currency

### `coingecko_news`

- **HTTP:** `GET /coingecko/news`
- **What:** CoinGecko news cards. Returns normalized article cards from CoinGecko's public news page.
- **Params:** `limit` (integer, optional) — Rows to return, default 20, max 50

### `coingecko_nft_category`

- **HTTP:** `GET /coingecko/nft/category/{slug}`
- **What:** CoinGecko NFT category. Returns normalized NFT collection rows from a CoinGecko public NFT category page. This endpoint supports the documented `vs_currency` enum.
- **Params:** `limit` (integer, optional) — Rows to return, default 100, max 100; `page` (integer, optional) — Page number, default 1; `slug` (string, **required**) — CoinGecko NFT category slug such as metaverse; `vs_currency` (string, optional) — Quote currency

### `coingecko_nfts`

- **HTTP:** `GET /coingecko/nfts`
- **What:** CoinGecko NFT collections. Returns normalized NFT collection rows from the CoinGecko public website NFT table. This endpoint supports the documented `vs_currency` enum.
- **Params:** `limit` (integer, optional) — Rows to return, default 100, max 100; `page` (integer, optional) — Page number, default 1; `vs_currency` (string, optional) — Quote currency

### `coingecko_search`

- **HTTP:** `GET /coingecko/search`
- **What:** CoinGecko discovery search. Returns normalized CoinGecko search sections from the public website search JSON. Empty valid searches return empty arrays.
- **Params:** `limit` (integer, optional) — Rows per section to return, default 10, max 50; `q` (string, **required**) — Search query

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

## Datasets (9)

### `datasets_github_users_facets`

- **HTTP:** `GET /datasets/github-users/facets`
- **What:** Facet the GitHub users dataset. Returns terms aggregation counts for the GitHub users dataset. Facet enum: `influence_tier`, `type`, `country`, `country_code`, `state`, `city`, `domains`, `company`, `reachable`, `has_email`, `has_twitter`, `has_blog`, `active_90d`, `is_org`, `is_bot`. influence_tier enum: `nano`, `micro`, `mid`, `macro`, `mega`.
- **Params:** `active_90d` (boolean, optional) — Filter by activity within the last 90 days; `city` (string, optional) — Exact geocoded city filter, max 128 characters; `company` (string, optional) — Exact normalized-company filter, max 128 characters; `country` (string, optional) — Exact geocoded country filter, max 128 characters; `country_code` (string, optional) — Exact ISO country-code filter, max 128 characters; `domain` (string, optional) — Interest-domain tag filter, max 128 characters; `facet` (string, **required**) — Facet enum: influence_tier, type, country, country_code, state, city, domains, company, reachable, has_email, has_twitter, has_blog, active_90d, is_org, is_bot; `has_blog` (boolean, optional) — Filter by public blog/website presence; `has_email` (boolean, optional) — Filter by public email presence; `has_twitter` (boolean, optional) — Filter by public Twitter/X handle presence; `hireable` (boolean, optional) — Filter by the GitHub available-for-hire flag; `influence_tier` (string, optional) — Follower-tier enum: nano, micro, mid, macro, mega; `is_bot` (boolean, optional) — Bot filter; `is_org` (boolean, optional) — Organization filter; `lat` (number, optional) — Latitude for radius filtering; `login` (string, optional) — Exact login filter, max 128 characters; `lon` (number, optional) — Longitude for radius filtering; `max_account_age_years` (number, optional) — Maximum account age in years; `max_followers` (integer, optional) — Maximum follower count; `min_account_age_years` (number, optional) — Minimum account age in years; `min_followers` (integer, optional) — Minimum follower count; `min_rank_score` (integer, optional) — Minimum composite rank score; `min_repos` (integer, optional) — Minimum public repository count; `q` (string, optional) — Full-text query over login, name, company, bio and location, max 256 characters; `radius_m` (integer, optional) — Radius in meters, 1 through 50000; requires lat and lon when supplied; `reachable` (boolean, optional) — Filter by any public contact channel; `sort` (string, optional) — Sort enum: relevance, rank_score_desc, followers_desc, account_age_desc, account_age_asc, distance_asc; `state` (string, optional) — Exact geocoded state filter, max 128 characters

### `datasets_github_users_item`

- **HTTP:** `GET /datasets/github-users/items/{login}`
- **What:** Get a GitHub user from the dataset. Returns one enriched GitHub user record by login from dataset id enum value `github-users`.
- **Params:** `login` (string, **required**) — GitHub login, max 128 characters

### `datasets_github_users_nearby`

- **HTTP:** `GET /datasets/github-users/nearby`
- **What:** Search nearby GitHub users. Searches enriched GitHub users near a coordinate, sorted by distance, in dataset id enum value `github-users`. influence_tier enum: `nano`, `micro`, `mid`, `macro`, `mega`.
- **Params:** `influence_tier` (string, optional) — Follower-tier enum: nano, micro, mid, macro, mega; `lat` (number, **required**) — Latitude; `lon` (number, **required**) — Longitude; `min_followers` (integer, optional) — Minimum follower count; `page` (integer, optional) — Page number, defaults to 1; `page_size` (integer, optional) — Page size, defaults to 20 and maxes at 100; page * page_size must be <= 10000; `radius_m` (integer, **required**) — Radius in meters, max 50000; `reachable` (boolean, optional) — Filter by any public contact channel

### `datasets_github_users_search`

- **HTTP:** `GET /datasets/github-users/search`
- **What:** Search the GitHub users dataset. Searches enriched public GitHub user profiles stored in a search index. influence_tier enum: `nano`, `micro`, `mid`, `macro`, `mega`. Sort enum: `relevance`, `rank_score_desc`, `followers_desc`, `account_age_desc`, `account_age_asc`, `distance_asc`.
- **Params:** `active_90d` (boolean, optional) — Filter by activity within the last 90 days; `city` (string, optional) — Exact geocoded city filter, max 128 characters; `company` (string, optional) — Exact normalized-company filter, max 128 characters; `country` (string, optional) — Exact geocoded country filter, max 128 characters; `country_code` (string, optional) — Exact ISO country-code filter, max 128 characters; `domain` (string, optional) — Interest-domain tag filter (e.g. ml-ai, web, devops), max 128 characters; `has_blog` (boolean, optional) — Filter by public blog/website presence; `has_email` (boolean, optional) — Filter by public email presence; `has_twitter` (boolean, optional) — Filter by public Twitter/X handle presence; `hireable` (boolean, optional) — Filter by the GitHub available-for-hire flag; `influence_tier` (string, optional) — Follower-tier enum: nano, micro, mid, macro, mega; `is_bot` (boolean, optional) — Bot filter (normally false; the crawl skips bots); `is_org` (boolean, optional) — Organization filter (normally false; the crawl indexes individuals); `lat` (number, optional) — Latitude for radius filtering or distance sort; `login` (string, optional) — Exact login filter, max 128 characters; `lon` (number, optional) — Longitude for radius filtering or distance sort; `max_account_age_years` (number, optional) — Maximum account age in years; `max_followers` (integer, optional) — Maximum follower count; `min_account_age_years` (number, optional) — Minimum account age in years; `min_followers` (integer, optional) — Minimum follower count; `min_rank_score` (integer, optional) — Minimum composite rank score; `min_repos` (integer, optional) — Minimum public repository count; `page` (integer, optional) — Page number, defaults to 1; `page_size` (integer, optional) — Page size, defaults to 20 and maxes at 100; page * page_size must be <= 10000; `q` (string, optional) — Full-text query over login, name, company, bio and location, max 256 characters; `radius_m` (integer, optional) — Radius in meters, 1 through 50000; requires lat and lon when supplied; `reachable` (boolean, optional) — Filter by any public contact channel; `sort` (string, optional) — Sort enum: relevance, rank_score_desc, followers_desc, account_age_desc, account_age_asc, distance_asc; `state` (string, optional) — Exact geocoded state filter, max 128 characters

### `datasets_google_map_facets`

- **HTTP:** `GET /datasets/google-map-businesses/facets`
- **What:** Facet stored Google Maps businesses. Returns terms aggregation counts for Google Maps businesses. Facet enum: `category`, `country`, `state`, `county`, `city`, `town`, `website_status`. `category` values (as a facet or filter) are Google Maps type tokens in lower-case snake_case (e.g. `dentist`, `bus_stop`, `atm`).
- **Params:** `category` (string, optional) — Exact category filter: a Google Maps type token in lower-case snake_case (e.g. dentist, bus_stop), max 128 characters; `city` (string, optional) — Exact city filter, max 128 characters; `country` (string, optional) — Exact country filter, max 128 characters; `county` (string, optional) — Exact county filter, max 128 characters; `facet` (string, **required**) — Facet enum: category, country, state, county, city, town, website_status; `has_phone` (boolean, optional) — Filter by phone presence; `has_website` (boolean, optional) — Filter by website presence; `lat` (number, optional) — Latitude for radius filtering; `lon` (number, optional) — Longitude for radius filtering; `min_rating` (number, optional) — Minimum rating, 0 through 5. Businesses with no aggregate Google rating are stored as rating 0, so any min_rating above 0 excludes them.; `min_review_count` (integer, optional) — Minimum review count; `q` (string, optional) — Full-text business search query, max 256 characters; `radius_m` (integer, optional) — Radius in meters, 1 through 50000; requires lat and lon when supplied; `sort` (string, optional) — Sort enum: relevance, updated_at_desc, rating_desc, review_count_desc, distance_asc; `state` (string, optional) — Exact state filter, max 128 characters; `town` (string, optional) — Exact town filter, max 128 characters

### `datasets_google_map_item`

- **HTTP:** `GET /datasets/google-map-businesses/items/{place_id}`
- **What:** Get a stored Google Maps business. Returns one stored Google Maps business by Google place_id from dataset id enum value `google-map-businesses`. The `category` field is a Google Maps type token in lower-case snake_case (e.g. `dentist`, `bus_stop`, `atm`). A `rating` of `0` means no aggregate rating is available for that business (not a literal zero-star score); read it together with `review_count`.
- **Params:** `place_id` (string, **required**) — Google Place ID, max 256 characters

### `datasets_google_map_nearby`

- **HTTP:** `GET /datasets/google-map-businesses/nearby`
- **What:** Search nearby stored Google Maps businesses. Searches stored Google Maps businesses near a coordinate in dataset id enum value `google-map-businesses`. `category` is a Google Maps type token in lower-case snake_case (e.g. `dentist`, `bus_stop`, `atm`), both as the `category` filter and in each result's `category` field. A `rating` of `0` means no aggregate rating is available for that business (not a literal zero-star score); read it together with `review_count`, and note that `min_rating` above 0 excludes unrated businesses.
- **Params:** `category` (string, optional) — Exact category filter: a Google Maps type token in lower-case snake_case (e.g. dentist, bus_stop), max 128 characters; `lat` (number, **required**) — Latitude; `lon` (number, **required**) — Longitude; `min_rating` (number, optional) — Minimum rating, 0 through 5. Businesses with no aggregate Google rating are stored as rating 0, so any min_rating above 0 excludes them.; `min_review_count` (integer, optional) — Minimum review count; `page` (integer, optional) — Page number, defaults to 1; `page_size` (integer, optional) — Page size, defaults to 20 and maxes at 100; page * page_size must be <= 10000; `radius_m` (integer, **required**) — Radius in meters, max 50000

### `datasets_google_map_search`

- **HTTP:** `GET /datasets/google-map-businesses/search`
- **What:** Search stored Google Maps businesses. Searches Google Maps business records stored in a search index. Sort enum: `relevance`, `updated_at_desc`, `rating_desc`, `review_count_desc`, `distance_asc`. `category` is a Google Maps type token in lower-case snake_case (e.g. `dentist`, `bus_stop`, `atm`), both as the `category` filter and in each result's `category` field. A `rating` of `0` means no aggregate rating is available for that business (too few reviews, or a place type Google does not rate) — it is not a literal zero-star score; read it together with `review_count`, and note that `rating_desc` sorts unrated businesses last and `min_rating` above 0 excludes them.
- **Params:** `category` (string, optional) — Exact category filter: a Google Maps type token in lower-case snake_case (e.g. dentist, bus_stop), max 128 characters; `city` (string, optional) — Exact city filter, max 128 characters; `country` (string, optional) — Exact country filter, max 128 characters; `county` (string, optional) — Exact county filter, max 128 characters; `has_phone` (boolean, optional) — Filter by phone presence; `has_website` (boolean, optional) — Filter by website presence; `lat` (number, optional) — Latitude for radius filtering or distance sort; `lon` (number, optional) — Longitude for radius filtering or distance sort; `min_rating` (number, optional) — Minimum rating, 0 through 5. Businesses with no aggregate Google rating are stored as rating 0, so any min_rating above 0 excludes them.; `min_review_count` (integer, optional) — Minimum review count; `page` (integer, optional) — Page number, defaults to 1; `page_size` (integer, optional) — Page size, defaults to 20 and maxes at 100; page * page_size must be <= 10000; `q` (string, optional) — Full-text business search query, max 256 characters; `radius_m` (integer, optional) — Radius in meters, 1 through 50000; requires lat and lon when supplied; `sort` (string, optional) — Sort enum: relevance, updated_at_desc, rating_desc, review_count_desc, distance_asc; `state` (string, optional) — Exact state filter, max 128 characters; `town` (string, optional) — Exact town filter, max 128 characters

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
- **Params:** `page` (integer, optional) — Feedback page number; `per_page` (integer, optional) — Reviews per page; `seller` (string, **required**) — eBay seller username

### `ebay_seller_shop`

- **HTTP:** `GET /ebay/seller/{seller}/shop`
- **What:** Get eBay seller shop listings. Returns normalized listings from the public eBay seller shop tab, with pagination backed by the store odtRefresh response.
- **Params:** `page` (integer, optional) — Shop page number; `seller` (string, **required**) — eBay seller username

## Geocoding (3)

### `geocoding_lookup`

- **HTTP:** `GET /geocoding/lookup`
- **What:** Lookup Nominatim OSM ids. Returns typed Nominatim JSONv2 places for comma-separated OSM ids such as W34633854,N123,R456.
- **Params:** `accept_language` (string, optional) — Preferred result language, forwarded to Nominatim; `addressdetails` (boolean, optional) — Include address details, defaults to true; `extratags` (boolean, optional) — Include OSM extra tags; `namedetails` (boolean, optional) — Include multilingual name details; `osm_ids` (string, **required**) — Comma-separated OSM ids such as W34633854,N123,R456

### `geocoding_reverse`

- **HTTP:** `GET /geocoding/reverse`
- **What:** Reverse geocode coordinates. Returns the nearest typed Nominatim JSONv2 place for latitude and longitude.
- **Params:** `accept_language` (string, optional) — Preferred result language, forwarded to Nominatim; `addressdetails` (boolean, optional) — Include address details, defaults to true; `extratags` (boolean, optional) — Include OSM extra tags; `lat` (number, **required**) — Latitude; `lon` (number, **required**) — Longitude; `namedetails` (boolean, optional) — Include multilingual name details; `zoom` (integer, optional) — Nominatim address zoom, defaults to 18

### `geocoding_search`

- **HTTP:** `GET /geocoding/search`
- **What:** Search Nominatim places. Returns typed Nominatim JSONv2 forward geocoding results. Use either q or structured fields, not both.
- **Params:** `accept_language` (string, optional) — Preferred result language, forwarded to Nominatim; `addressdetails` (boolean, optional) — Include address details, defaults to true; `city` (string, optional) — Structured city; `country` (string, optional) — Structured country; `countrycodes` (string, optional) — Comma-separated ISO 3166-1 alpha-2 country filters; `county` (string, optional) — Structured county; `extratags` (boolean, optional) — Include OSM extra tags; `limit` (integer, optional) — Maximum results, defaults to 10 and clamps to 20; `namedetails` (boolean, optional) — Include multilingual name details; `postalcode` (string, optional) — Structured postal code; `q` (string, optional) — Free-text search query; `state` (string, optional) — Structured state; `street` (string, optional) — Structured street or house number

## GitHub (16)

### `github_org`

- **HTTP:** `GET /github/org/{org}`
- **What:** Retrieve a GitHub organization profile. Returns a public GitHub organization profile (company-side enrichment).
- **Params:** `org` (string, **required**) — GitHub organization login

### `github_org_repos`

- **HTTP:** `GET /github/org/{org}/repos`
- **What:** List a GitHub organization's public repositories. Returns a page of an organization's public repositories (company tech stack).
- **Params:** `direction` (string, optional) — Sort direction; `org` (string, **required**) — GitHub organization login; `page` (integer, optional) — Page number; `per_page` (integer, optional) — Results per page (max 100); `sort` (string, optional) — Sort field; `type` (string, optional) — Repository type

### `github_repo`

- **HTTP:** `GET /github/repo/{owner}/{repo}`
- **What:** Retrieve a GitHub repository. Returns public detail for a single repository (the core project object).
- **Params:** `owner` (string, **required**) — Repository owner (user or org login); `repo` (string, **required**) — Repository name

### `github_repo_contributors`

- **HTTP:** `GET /github/repo/{owner}/{repo}/contributors`
- **What:** List a repository's contributors. Returns a page of a repository's contributors (who builds a project).
- **Params:** `owner` (string, **required**) — Repository owner (user or org login); `page` (integer, optional) — Page number; `per_page` (integer, optional) — Results per page (max 100); `repo` (string, **required**) — Repository name

### `github_repo_forks`

- **HTTP:** `GET /github/repo/{owner}/{repo}/forks`
- **What:** List a repository's public forks. Returns a page of a repository's public forks (adopter signal).
- **Params:** `owner` (string, **required**) — Repository owner (user or org login); `page` (integer, optional) — Page number; `per_page` (integer, optional) — Results per page (max 100); `repo` (string, **required**) — Repository name; `sort` (string, optional) — Sort order

### `github_repo_languages`

- **HTTP:** `GET /github/repo/{owner}/{repo}/languages`
- **What:** Retrieve a repository's language breakdown. Returns the language byte breakdown for a repository, sorted by bytes descending (tech fingerprint).
- **Params:** `owner` (string, **required**) — Repository owner (user or org login); `repo` (string, **required**) — Repository name

### `github_repo_releases`

- **HTTP:** `GET /github/repo/{owner}/{repo}/releases`
- **What:** List a repository's releases. Returns a page of a repository's releases (momentum/health signal).
- **Params:** `owner` (string, **required**) — Repository owner (user or org login); `page` (integer, optional) — Page number; `per_page` (integer, optional) — Results per page (max 100); `repo` (string, **required**) — Repository name

### `github_repo_stargazers`

- **HTTP:** `GET /github/repo/{owner}/{repo}/stargazers`
- **What:** List users who starred a repository. Returns a page of users who starred a repository (buyer-intent signal).
- **Params:** `owner` (string, **required**) — Repository owner (user or org login); `page` (integer, optional) — Page number; `per_page` (integer, optional) — Results per page (max 100); `repo` (string, **required**) — Repository name

### `github_search_repositories`

- **HTTP:** `GET /github/search/repositories`
- **What:** Search public GitHub repositories. Searches public GitHub repositories (market/competitive discovery). Unauthenticated search is rate limited to roughly 10 requests per minute.
- **Params:** `order` (string, optional) — Sort order; `page` (integer, optional) — Page number; `per_page` (integer, optional) — Results per page (max 100); `q` (string, **required**) — GitHub repository search query; `sort` (string, optional) — Sort field

### `github_search_users`

- **HTTP:** `GET /github/search/users`
- **What:** Search public GitHub users. Searches public GitHub users (developer discovery). Unauthenticated search is rate limited to roughly 10 requests per minute.
- **Params:** `order` (string, optional) — Sort order; `page` (integer, optional) — Page number; `per_page` (integer, optional) — Results per page (max 100); `q` (string, **required**) — GitHub user search query; `sort` (string, optional) — Sort field

### `github_trending`

- **HTTP:** `GET /github/trending`
- **What:** List trending GitHub repositories. Returns the repositories on GitHub's trending page (market discovery).
- **Params:** `language` (string, optional) — Programming language filter (e.g. go, python); `since` (string, optional) — Time window

### `github_trending_developers`

- **HTTP:** `GET /github/trending/developers`
- **What:** List trending GitHub developers. Returns the developers on GitHub's trending developers page (market discovery).
- **Params:** `language` (string, optional) — Programming language filter (e.g. go, python); `since` (string, optional) — Time window

### `github_user`

- **HTTP:** `GET /github/user/{username}`
- **What:** Retrieve a GitHub user profile. Returns a public GitHub user's profile plus user-published social links. Email is included only when the user has made it public on their profile.
- **Params:** `username` (string, **required**) — GitHub username

### `github_user_events`

- **HTTP:** `GET /github/user/{username}/events`
- **What:** List a GitHub user's recent public activity. Returns a page of a user's recent public events, normalized to type, repository, and timestamp (freshness signal).
- **Params:** `page` (integer, optional) — Page number; `per_page` (integer, optional) — Results per page (max 100); `username` (string, **required**) — GitHub username

### `github_user_pinned`

- **HTTP:** `GET /github/user/{username}/pinned`
- **What:** List a GitHub user's pinned repositories. Returns the repositories a user pinned on their public profile (showcase signal). Empty when the user pinned nothing.
- **Params:** `username` (string, **required**) — GitHub username

### `github_user_repos`

- **HTTP:** `GET /github/user/{username}/repos`
- **What:** List a GitHub user's public repositories. Returns a page of a user's public repositories (tech-stack signal).
- **Params:** `direction` (string, optional) — Sort direction; `page` (integer, optional) — Page number; `per_page` (integer, optional) — Results per page (max 100); `sort` (string, optional) — Sort field; `type` (string, optional) — Repository type; `username` (string, **required**) — GitHub username

## Google (38)

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
- **What:** Google Finance context search. Returns normalized Google Finance context search results.
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
- **Params:** `limit` (integer, optional) — Article limit; `quote` (string, **required**) — Quote identifier such as AAPL:NASDAQ

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

### `google_jobs`

- **HTTP:** `POST /google/jobs`
- **What:** Search Google Jobs. Returns normalized Google Jobs results parsed from public Google web responses.
- **Params:** `option` (object, **required**) — Google Jobs search payload

### `google_map_place`

- **HTTP:** `GET /google/map/place/{place_id}`
- **What:** Google Maps place details API. Returns detailed information for a specified place_id. Rate limit is enforced at 1 request per second.
- **Params:** `place_id` (string, **required**) — Google Place ID

### `google_map_search`

- **HTTP:** `POST /google/map/search`
- **What:** Google Maps search API. Returns results from Google Maps based on search options. Rate limit is enforced at 1 request per second.
- **Params:** `mapSearchOption` (object, **required**) — Search options

### `google_news`

- **HTTP:** `GET /google/news`
- **What:** Search Google News. Returns normalized Google News vertical results (title, source, link, age) parsed from the public Google News results page. Locale defaults to country=us and lang=en. Returns 503 when Google serves a challenge page or unusable HTML.
- **Params:** `count` (integer, optional) — Results per page; defaults to 10, clamped to 1..50; `country` (string, optional) — Two-letter country code; defaults to us; `lang` (string, optional) — Google UI language; defaults to en; `page` (integer, optional) — 1-based page number; defaults to 1; `q` (string, **required**) — Search query

### `google_search`

- **HTTP:** `POST /google/search`
- **What:** Google search API. Returns normalized Google web search results. Results are fetched through proxied browser renderers that race several concurrent renders per request and return the first clean result, with stale-cache fallback when available. The endpoint returns 503 when Google serves a challenge page or unusable HTML. Rate limit is enforced at 1 request per second, and if the limit is exceeded a 429 status code is returned with rate limit headers.
- **Params:** `searchOption` (object, **required**) — Search options

### `google_suggest`

- **HTTP:** `GET /google/suggest`
- **What:** Suggest Google search queries. Returns Google autosuggest query completions from the public unauthenticated suggest JSON endpoint.
- **Params:** `count` (integer, optional) — Suggestions to return; defaults to 10, clamped to 1..12; `country` (string, optional) — Google result country; defaults to us; `lang` (string, optional) — Google UI language; defaults to en; `q` (string, **required**) — Search query prefix

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
- **Params:** `category` (integer, optional) — Trending category id; `geo` (string, optional) — Country/territory location code; `hl` (string, optional) — Google Trends UI locale; `limit` (integer, optional) — Maximum rows to return; `sort_by` (string, optional) — Sort mode; `status` (string, optional) — Trend status filter; `time_range` (string, optional) — Alias for window; `tz` (integer, optional) — Timezone offset minutes; `window` (string, optional) — Trend window

### `google_trends_trending_detail`

- **HTTP:** `POST /google/trends/trending/detail`
- **What:** Google Trends trending term detail. Returns the Explore detail widgets for a single trending term, including interest over time, regional interest, top/rising related queries, and related topics when Google returns them.
- **Params:** `request` (object, **required**) — Trending detail request

### `google_videos`

- **HTTP:** `GET /google/videos`
- **What:** Search Google video results. Returns normalized Google video vertical results (title, platform, link, duration, age) parsed from the public Google video results page. Locale defaults to country=us and lang=en. Returns 503 when Google serves a challenge page or unusable HTML.
- **Params:** `count` (integer, optional) — Results per page; defaults to 10, clamped to 1..50; `country` (string, optional) — Two-letter country code; defaults to us; `lang` (string, optional) — Google UI language; defaults to en; `page` (integer, optional) — 1-based page number; defaults to 1; `q` (string, **required**) — Search query

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
- **Params:** `country` (string, optional) — Two-letter country code; `dev_id` (string, **required**) — Developer id or name; `full_detail` (boolean, optional) — Resolve each app to full detail; `lang` (string, optional) — Two-letter language code; `num` (integer, optional) — Number of apps

### `googleplay_list`

- **HTTP:** `GET /googleplay/list`
- **What:** Retrieve apps from a Google Play top collection. Returns apps from a Google Play collection and category.
- **Params:** `age` (string, optional) — Family age range; `category` (string, optional) — Category id; `collection` (string, optional) — Collection: TOP_FREE, TOP_PAID, GROSSING; `country` (string, optional) — Two-letter country code; `full_detail` (boolean, optional) — Resolve each app to full detail; `lang` (string, optional) — Two-letter language code; `num` (integer, optional) — Number of apps

### `googleplay_permissions`

- **HTTP:** `GET /googleplay/permissions`
- **What:** Retrieve Google Play app permissions. Returns Google Play permission groups or a short permission name list.
- **Params:** `app_id` (string, **required**) — Google Play app id; `country` (string, optional) — Two-letter country code; `lang` (string, optional) — Two-letter language code; `short` (boolean, optional) — Return only permission names

### `googleplay_reviews`

- **HTTP:** `GET /googleplay/reviews`
- **What:** Retrieve Google Play reviews. Returns one or more pages of app reviews. Set `paginate=true` to fetch only the requested page.
- **Params:** `app_id` (string, **required**) — Google Play app id; `country` (string, optional) — Two-letter country code; `lang` (string, optional) — Two-letter language code; `next_pagination_token` (string, optional) — Token from a previous response; `num` (integer, optional) — Number of reviews; `paginate` (boolean, optional) — Only fetch the requested page; `sort` (string, optional) — Sort: helpfulness, newest, rating

### `googleplay_search`

- **HTTP:** `GET /googleplay/search`
- **What:** Search Google Play. Returns Google Play search results for a term.
- **Params:** `country` (string, optional) — Two-letter country code; `full_detail` (boolean, optional) — Resolve each app to full detail; `lang` (string, optional) — Two-letter language code; `num` (integer, optional) — Number of apps; `price` (string, optional) — Price filter: all, free, paid; `term` (string, **required**) — Search term

### `googleplay_similar`

- **HTTP:** `GET /googleplay/similar`
- **What:** Retrieve similar Google Play apps. Returns apps from the "Similar apps" cluster on an app details page.
- **Params:** `app_id` (string, **required**) — Google Play app id; `country` (string, optional) — Two-letter country code; `full_detail` (boolean, optional) — Resolve each app to full detail; `lang` (string, optional) — Two-letter language code; `num` (integer, optional) — Number of apps

### `googleplay_suggest`

- **HTTP:** `GET /googleplay/suggest/{term}`
- **What:** Retrieve Google Play query suggestions. Returns up to 10 suggestions for a search term.
- **Params:** `country` (string, optional) — Two-letter country code; `lang` (string, optional) — Two-letter language code; `term` (string, **required**) — Search term prefix

## IMDb (19)

### `imdb_name`

- **HTTP:** `GET /imdb/name`
- **What:** IMDb name detail. Returns normalized public IMDb person metadata and known-for rows. Pass exactly one of `id` or `url`.
- **Params:** `id` (string, optional) — IMDb name id; `url` (string, optional) — Absolute https://www.imdb.com/name/<id>/ URL

### `imdb_name_awards`

- **HTTP:** `GET /imdb/name/awards`
- **What:** IMDb name awards. Returns normalized public IMDb award rows for a person. Pass exactly one of `id` or `url`.
- **Params:** `id` (string, optional) — IMDb name id; `url` (string, optional) — Absolute https://www.imdb.com/name/<id>/ URL

### `imdb_name_credits`

- **HTTP:** `GET /imdb/name/credits`
- **What:** IMDb name credits. Returns normalized public IMDb filmography sections for a person. Pass exactly one of `id` or `url`.
- **Params:** `id` (string, optional) — IMDb name id; `url` (string, optional) — Absolute https://www.imdb.com/name/<id>/ URL

### `imdb_search`

- **HTTP:** `GET /imdb/search`
- **What:** IMDb title search. Returns normalized IMDb title search rows from credential-free public IMDb pages. Limit defaults to 10 and clamps to 20.
- **Params:** `limit` (integer, optional) — Rows to return, default 10, max 20; `query` (string, **required**) — Search query

### `imdb_title`

- **HTTP:** `GET /imdb/title`
- **What:** IMDb title detail. Returns normalized IMDb title metadata from a credential-free public IMDb title page. Pass exactly one of `id` or `url`.
- **Params:** `id` (string, optional) — IMDb title id; `url` (string, optional) — Absolute https://www.imdb.com/title/<id>/ URL

### `imdb_title_awards`

- **HTTP:** `GET /imdb/title/awards`
- **What:** IMDb title awards. Returns normalized public IMDb award rows for a title. Pass exactly one of `id` or `url`.
- **Params:** `id` (string, optional) — IMDb title id; `url` (string, optional) — Absolute https://www.imdb.com/title/<id>/ URL

### `imdb_title_company_credits`

- **HTTP:** `GET /imdb/title/company-credits`
- **What:** IMDb title company credits. Returns normalized public IMDb company-credit sections for a title. Pass exactly one of `id` or `url`.
- **Params:** `id` (string, optional) — IMDb title id; `url` (string, optional) — Absolute https://www.imdb.com/title/<id>/ URL

### `imdb_title_credits`

- **HTTP:** `GET /imdb/title/credits`
- **What:** IMDb title credits. Returns normalized public IMDb full cast and crew sections. Pass exactly one of `id` or `url`.
- **Params:** `id` (string, optional) — IMDb title id; `url` (string, optional) — Absolute https://www.imdb.com/title/<id>/ URL

### `imdb_title_episodes`

- **HTTP:** `GET /imdb/title/episodes`
- **What:** IMDb title episodes. Returns normalized public IMDb episode rows for a series title. Limit defaults to 10 and clamps to 20. Optional `season` filters the upstream episodes page. Pass exactly one of `id` or `url`.
- **Params:** `id` (string, optional) — IMDb title id; `limit` (integer, optional) — Rows to return, default 10, max 20; `season` (integer, optional) — Season number to request; `url` (string, optional) — Absolute https://www.imdb.com/title/<id>/ URL

### `imdb_title_filming_locations`

- **HTTP:** `GET /imdb/title/filming-locations`
- **What:** IMDb title filming locations. Returns normalized public IMDb filming-location rows for a title. Pass exactly one of `id` or `url`.
- **Params:** `id` (string, optional) — IMDb title id; `url` (string, optional) — Absolute https://www.imdb.com/title/<id>/ URL

### `imdb_title_goofs`

- **HTTP:** `GET /imdb/title/goofs`
- **What:** IMDb title goofs. Returns normalized public IMDb goof rows for a title. Pass exactly one of `id` or `url`.
- **Params:** `id` (string, optional) — IMDb title id; `url` (string, optional) — Absolute https://www.imdb.com/title/<id>/ URL

### `imdb_title_keywords`

- **HTTP:** `GET /imdb/title/keywords`
- **What:** IMDb title keywords. Returns normalized public IMDb keyword rows for a title. Pass exactly one of `id` or `url`.
- **Params:** `id` (string, optional) — IMDb title id; `url` (string, optional) — Absolute https://www.imdb.com/title/<id>/ URL

### `imdb_title_parental_guide`

- **HTTP:** `GET /imdb/title/parental-guide`
- **What:** IMDb title parental guide. Returns normalized public IMDb parental-guide categories and severity signals. Pass exactly one of `id` or `url`.
- **Params:** `id` (string, optional) — IMDb title id; `url` (string, optional) — Absolute https://www.imdb.com/title/<id>/ URL

### `imdb_title_public_facts_analysis`

- **HTTP:** `GET /imdb/title/public-facts-analysis`
- **What:** IMDb title public facts analysis. Returns derived public-page summary metrics for IMDb trivia, goofs, quotes, keywords, filming locations, and company credits. This endpoint is not viewing advice. Pass exactly one of `id` or `url`.
- **Params:** `id` (string, optional) — IMDb title id; `url` (string, optional) — Absolute https://www.imdb.com/title/<id>/ URL

### `imdb_title_quotes`

- **HTTP:** `GET /imdb/title/quotes`
- **What:** IMDb title quotes. Returns normalized public IMDb quote rows for a title. Pass exactly one of `id` or `url`.
- **Params:** `id` (string, optional) — IMDb title id; `url` (string, optional) — Absolute https://www.imdb.com/title/<id>/ URL

### `imdb_title_release_info`

- **HTTP:** `GET /imdb/title/release-info`
- **What:** IMDb title release info. Returns normalized public IMDb release date rows and alternate titles. Pass exactly one of `id` or `url`.
- **Params:** `id` (string, optional) — IMDb title id; `url` (string, optional) — Absolute https://www.imdb.com/title/<id>/ URL

### `imdb_title_reviews`

- **HTTP:** `GET /imdb/title/reviews`
- **What:** IMDb title user reviews. Returns normalized public IMDb user review rows. Limit defaults to 10 and clamps to 20. Pass exactly one of `id` or `url`.
- **Params:** `id` (string, optional) — IMDb title id; `limit` (integer, optional) — Rows to return, default 10, max 20; `url` (string, optional) — Absolute https://www.imdb.com/title/<id>/ URL

### `imdb_title_technical_specs`

- **HTTP:** `GET /imdb/title/technical-specs`
- **What:** IMDb title technical specs. Returns normalized public IMDb technical specifications such as runtime, sound mix, color, and aspect ratio. Pass exactly one of `id` or `url`.
- **Params:** `id` (string, optional) — IMDb title id; `url` (string, optional) — Absolute https://www.imdb.com/title/<id>/ URL

### `imdb_title_trivia`

- **HTTP:** `GET /imdb/title/trivia`
- **What:** IMDb title trivia. Returns normalized public IMDb trivia rows for a title. Pass exactly one of `id` or `url`.
- **Params:** `id` (string, optional) — IMDb title id; `url` (string, optional) — Absolute https://www.imdb.com/title/<id>/ URL

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
- **Params:** `country` (string, optional) — Two-letter country code; `genres` (string, optional) — Comma-separated JustWatch genre short names; `language` (string, optional) — Two-letter language code; `limit` (integer, optional) — Maximum results, defaults to 20 and clamps to 50; `monetization_types` (string, optional) — Comma-separated monetization types: FLATRATE, FREE, ADS, RENT, BUY; `providers` (string, optional) — Comma-separated JustWatch provider short names; `type` (string, optional) — Title type: all, movie, show; `year_max` (integer, optional) — Maximum release year; `year_min` (integer, optional) — Minimum release year

### `justwatch_episode_by_id`

- **HTTP:** `GET /justwatch/episode/by-id`
- **What:** Get JustWatch episode by raw id. Looks up an episode by raw JustWatch GraphQL id such as `tse5550494` and returns normalized metadata and offers.
- **Params:** `country` (string, optional) — Two-letter country code; `id` (string, **required**) — Raw JustWatch episode id matching tse[0-9]+; `language` (string, optional) — Two-letter language code

### `justwatch_episode_offers`

- **HTTP:** `GET /justwatch/episode/offers`
- **What:** Get JustWatch episode offers. Returns normalized offers for a raw JustWatch episode id across one to five comma-separated country codes.
- **Params:** `countries` (string, optional) — One to five comma-separated two-letter country codes; `id` (string, **required**) — Raw JustWatch episode id matching tse[0-9]+; `language` (string, optional) — Two-letter language code

### `justwatch_genre_titles`

- **HTTP:** `GET /justwatch/genre/titles`
- **What:** Get JustWatch genre titles. Returns popular titles for one JustWatch genre short name such as `act`. Type accepts only `all`, `movie`, or `show`.
- **Params:** `country` (string, optional) — Two-letter country code; `genre` (string, **required**) — JustWatch genre short name; `language` (string, optional) — Two-letter language code; `limit` (integer, optional) — Maximum results, defaults to 20 and clamps to 50; `type` (string, optional) — Title type: all, movie, show

### `justwatch_genres`

- **HTTP:** `GET /justwatch/genres`
- **What:** Get JustWatch genres. Returns JustWatch genre short names and localized translations.
- **Params:** `language` (string, optional) — Two-letter language code

### `justwatch_monetization_titles`

- **HTTP:** `GET /justwatch/monetization/titles`
- **What:** Get JustWatch monetization titles. Returns popular titles for one monetization type. monetization_type accepts only `FLATRATE`, `FREE`, `ADS`, `RENT`, or `BUY`; type accepts only `all`, `movie`, or `show`.
- **Params:** `country` (string, optional) — Two-letter country code; `language` (string, optional) — Two-letter language code; `limit` (integer, optional) — Maximum results, defaults to 20 and clamps to 50; `monetization_type` (string, **required**) — Monetization type: FLATRATE, FREE, ADS, RENT, BUY; `type` (string, optional) — Title type: all, movie, show

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
- **Params:** `country` (string, optional) — Two-letter country code; `language` (string, optional) — Two-letter language code; `limit` (integer, optional) — Maximum results, defaults to 20 and clamps to 50; `provider` (string, **required**) — JustWatch provider short name; `type` (string, optional) — Title type: all, movie, show

### `justwatch_providers`

- **HTTP:** `GET /justwatch/providers`
- **What:** Get JustWatch providers. Returns the credential-free public JustWatch provider catalog for a country.
- **Params:** `country` (string, optional) — Two-letter country code

### `justwatch_search`

- **HTTP:** `GET /justwatch/search`
- **What:** Search JustWatch titles. Searches JustWatch titles using the public credential-free website GraphQL endpoint. Country must be a two-letter ISO code such as `US`; language must be a two-letter code such as `en`.
- **Params:** `country` (string, optional) — Two-letter country code; `language` (string, optional) — Two-letter language code; `limit` (integer, optional) — Maximum results, defaults to 10 and clamps to 25; `query` (string, **required**) — Search query

### `justwatch_season_by_id`

- **HTTP:** `GET /justwatch/season/by-id`
- **What:** Get JustWatch season by raw id. Looks up a season by raw JustWatch GraphQL id such as `tss297253`.
- **Params:** `country` (string, optional) — Two-letter country code; `id` (string, **required**) — Raw JustWatch season id matching tss[0-9]+; `language` (string, optional) — Two-letter language code

### `justwatch_season_episodes`

- **HTTP:** `GET /justwatch/season/episodes`
- **What:** Get JustWatch season episodes. Returns episodes and normalized episode offers for a raw JustWatch season id such as `tss297253`.
- **Params:** `country` (string, optional) — Two-letter country code; `language` (string, optional) — Two-letter language code; `season_id` (string, **required**) — Raw JustWatch season id matching tss[0-9]+

### `justwatch_show_seasons`

- **HTTP:** `GET /justwatch/show/seasons`
- **What:** Get JustWatch show seasons. Returns seasons for a raw JustWatch show id such as `ts287292`.
- **Params:** `country` (string, optional) — Two-letter country code; `language` (string, optional) — Two-letter language code; `show_id` (string, **required**) — Raw JustWatch show id matching ts[0-9]+

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
- **Params:** `country` (string, optional) — Two-letter country code; `id` (string, **required**) — Raw JustWatch movie/show id matching tm[0-9]+ or ts[0-9]+; `language` (string, optional) — Two-letter language code

### `justwatch_title_media`

- **HTTP:** `GET /justwatch/title/media`
- **What:** Get JustWatch title media. Returns normalized credits, clips, and backdrops for a raw JustWatch movie/show id such as `tm92641`.
- **Params:** `country` (string, optional) — Two-letter country code; `id` (string, **required**) — Raw JustWatch movie/show id matching tm[0-9]+ or ts[0-9]+; `language` (string, optional) — Two-letter language code

### `justwatch_title_offers`

- **HTTP:** `GET /justwatch/title/offers`
- **What:** Get JustWatch title offers. Returns normalized offers for a raw JustWatch movie/show id across one to five comma-separated country codes.
- **Params:** `countries` (string, optional) — One to five comma-separated two-letter country codes; `id` (string, **required**) — Raw JustWatch movie/show id matching tm[0-9]+ or ts[0-9]+; `language` (string, optional) — Two-letter language code

### `justwatch_title_similar`

- **HTTP:** `GET /justwatch/title/similar`
- **What:** Get similar JustWatch titles. Returns similar titles for a raw JustWatch movie/show id such as `tm92641`.
- **Params:** `country` (string, optional) — Two-letter country code; `id` (string, **required**) — Raw JustWatch movie/show id matching tm[0-9]+ or ts[0-9]+; `language` (string, optional) — Two-letter language code; `limit` (integer, optional) — Maximum results, defaults to 10 and clamps to 25

## Kalshi (21)

### `kalshi_event`

- **HTTP:** `GET /kalshi/event/{event_ticker}`
- **What:** Kalshi event detail. Returns one normalized Kalshi event row and its normalized markets from credential-free public market-data JSON.
- **Params:** `event_ticker` (string, **required**) — Kalshi event ticker

### `kalshi_event_history`

- **HTTP:** `GET /kalshi/event/{event_ticker}/history`
- **What:** Kalshi event history. Returns normalized Kalshi candlesticks grouped by market for one event from credential-free public market-data JSON.
- **Params:** `end_ts` (integer, optional) — Unix end timestamp in seconds. Defaults to now.; `event_ticker` (string, **required**) — Kalshi event ticker; `include_latest_before_start` (boolean, optional) — Include the latest candle before start_ts when supported upstream.; `period_interval` (integer, optional) — Candlestick interval in minutes. Default: 1440.; `series_ticker` (string, optional) — Kalshi series ticker. Defaults to the event ticker prefix before the last dash.; `start_ts` (integer, optional) — Unix start timestamp in seconds. Defaults to 7 days ago.

### `kalshi_event_metadata`

- **HTTP:** `GET /kalshi/event/{event_ticker}/metadata`
- **What:** Kalshi event metadata. Returns media, market metadata, settlement sources, and optional competition context for one Kalshi event from credential-free public market-data JSON.
- **Params:** `event_ticker` (string, **required**) — Kalshi event ticker

### `kalshi_events`

- **HTTP:** `GET /kalshi/events`
- **What:** Kalshi events. Returns normalized Kalshi event rows from credential-free public market-data JSON.
- **Params:** `category` (string, optional) — Kalshi category filter; `cursor` (string, optional) — Pagination cursor from a previous Kalshi response; `limit` (integer, optional) — Rows to return, default 25, max 200; `min_close_ts` (integer, optional) — Minimum event close Unix timestamp in seconds; `min_updated_ts` (integer, optional) — Minimum event update Unix timestamp in seconds; `series_ticker` (string, optional) — Kalshi series ticker filter; `status` (string, optional) — Event status filter; `with_milestones` (boolean, optional) — Include event milestones when supported upstream; `with_nested_markets` (boolean, optional) — Include nested market rows when supported upstream

### `kalshi_exchange_schedule`

- **HTTP:** `GET /kalshi/exchange/schedule`
- **What:** Kalshi exchange schedule. Returns public exchange standard hours and maintenance windows from Kalshi market-data JSON.
- **Params:** _none_

### `kalshi_exchange_status`

- **HTTP:** `GET /kalshi/exchange/status`
- **What:** Kalshi exchange status. Returns public exchange and trading active flags from Kalshi market-data JSON.
- **Params:** _none_

### `kalshi_historical_cutoff`

- **HTTP:** `GET /kalshi/historical/cutoff`
- **What:** Kalshi historical data cutoff. Returns the cutoff timestamps Kalshi uses for historical market, order, and trade data migration.
- **Params:** _none_

### `kalshi_historical_market`

- **HTTP:** `GET /kalshi/historical/market/{ticker}`
- **What:** Kalshi historical market detail. Returns one normalized settled Kalshi historical market row from credential-free public market-data JSON.
- **Params:** `ticker` (string, **required**) — Kalshi historical market ticker

### `kalshi_historical_market_history`

- **HTTP:** `GET /kalshi/historical/market/{ticker}/history`
- **What:** Kalshi historical market history. Returns normalized Kalshi candlesticks for one settled historical market from credential-free public market-data JSON.
- **Params:** `end_ts` (integer, optional) — Unix end timestamp in seconds. Defaults to now.; `period_interval` (integer, optional) — Candlestick interval in minutes. Default: 1440.; `start_ts` (integer, optional) — Unix start timestamp in seconds. Defaults to 7 days ago.; `ticker` (string, **required**) — Kalshi historical market ticker

### `kalshi_historical_markets`

- **HTTP:** `GET /kalshi/historical/markets`
- **What:** Kalshi historical markets. Returns normalized settled Kalshi historical market rows from credential-free public market-data JSON. `tickers`, `event_ticker`, and `series_ticker` are mutually exclusive. The `mve_filter` enum accepts `exclude`.
- **Params:** `cursor` (string, optional) — Pagination cursor from a previous Kalshi response; `event_ticker` (string, optional) — Kalshi event ticker filter. Mutually exclusive with tickers and series_ticker.; `limit` (integer, optional) — Rows to return, default 25, max 1000; `mve_filter` (string, optional) — Multivariate event filter; `series_ticker` (string, optional) — Kalshi series ticker filter. Mutually exclusive with tickers and event_ticker.; `tickers` (string, optional) — Comma-separated Kalshi market tickers. Mutually exclusive with event_ticker and series_ticker.

### `kalshi_historical_trades`

- **HTTP:** `GET /kalshi/historical/trades`
- **What:** Kalshi historical trades. Returns normalized older Kalshi trades from credential-free historical market-data JSON.
- **Params:** `cursor` (string, optional) — Pagination cursor from a previous Kalshi response; `limit` (integer, optional) — Rows to return, default 25, max 200; `max_ts` (integer, optional) — Maximum created Unix timestamp in seconds; `min_ts` (integer, optional) — Minimum created Unix timestamp in seconds; `ticker` (string, optional) — Kalshi market ticker filter

### `kalshi_market`

- **HTTP:** `GET /kalshi/market/{ticker}`
- **What:** Kalshi market detail. Returns one normalized Kalshi market row from credential-free public market-data JSON.
- **Params:** `ticker` (string, **required**) — Kalshi market ticker

### `kalshi_market_history`

- **HTTP:** `GET /kalshi/market/{ticker}/history`
- **What:** Kalshi market history. Returns normalized Kalshi candlesticks for one market from credential-free public market-data JSON.
- **Params:** `end_ts` (integer, optional) — Unix end timestamp in seconds. Defaults to now.; `include_latest_before_start` (boolean, optional) — Include the latest candle before start_ts when supported upstream.; `period_interval` (integer, optional) — Candlestick interval in minutes. Default: 1440.; `series_ticker` (string, optional) — Kalshi series ticker. Defaults to the market ticker prefix before the last dash.; `start_ts` (integer, optional) — Unix start timestamp in seconds. Defaults to 7 days ago.; `ticker` (string, **required**) — Kalshi market ticker

### `kalshi_market_orderbook`

- **HTTP:** `GET /kalshi/market/{ticker}/orderbook`
- **What:** Kalshi market orderbook. Returns normalized yes/no bid levels for one Kalshi market ticker from public orderbook JSON.
- **Params:** `ticker` (string, **required**) — Kalshi market ticker

### `kalshi_markets`

- **HTTP:** `GET /kalshi/markets`
- **What:** Kalshi markets. Returns normalized Kalshi market rows from credential-free public market-data JSON. The `status` enum accepts `unopened`, `open`, `closed`, and `settled`.
- **Params:** `cursor` (string, optional) — Pagination cursor from a previous Kalshi response; `event_ticker` (string, optional) — Kalshi event ticker filter; `limit` (integer, optional) — Rows to return, default 25, max 200; `series_ticker` (string, optional) — Kalshi series ticker filter; `status` (string, optional) — Market status filter; `ticker` (string, optional) — Kalshi market ticker filter

### `kalshi_markets_history`

- **HTTP:** `GET /kalshi/markets/history`
- **What:** Kalshi batch market history. Returns normalized Kalshi candlesticks for up to 25 market tickers from credential-free public market-data JSON.
- **Params:** `end_ts` (integer, optional) — Unix end timestamp in seconds. Defaults to now.; `include_latest_before_start` (boolean, optional) — Include the latest candle before start_ts when supported upstream.; `market_tickers` (string, **required**) — Comma-separated Kalshi market tickers. Repeated query values are also accepted.; `period_interval` (integer, optional) — Candlestick interval in minutes. Default: 1440.; `start_ts` (integer, optional) — Unix start timestamp in seconds. Defaults to 7 days ago.

### `kalshi_markets_orderbooks`

- **HTTP:** `GET /kalshi/markets/orderbooks`
- **What:** Kalshi batch market orderbooks. Returns normalized yes/no bid levels for up to 25 Kalshi market tickers from public orderbook JSON.
- **Params:** `tickers` (string, **required**) — Comma-separated Kalshi market tickers. Repeated query values are also accepted.

### `kalshi_multivariate_events`

- **HTTP:** `GET /kalshi/events/multivariate`
- **What:** Kalshi multivariate events. Returns normalized Kalshi multivariate event rows from credential-free public market-data JSON. Kalshi's regular events endpoint excludes these MVE rows.
- **Params:** `cursor` (string, optional) — Pagination cursor from a previous Kalshi response; `limit` (integer, optional) — Rows to return, default 25, max 200

### `kalshi_series`

- **HTTP:** `GET /kalshi/series`
- **What:** Kalshi series. Returns normalized Kalshi series rows from credential-free public market-data JSON.
- **Params:** `cursor` (string, optional) — Pagination cursor from a previous Kalshi response; `limit` (integer, optional) — Rows to return, default 25, max 200

### `kalshi_series_detail`

- **HTTP:** `GET /kalshi/series/{series_ticker}`
- **What:** Kalshi series detail. Returns one normalized Kalshi series row from credential-free public market-data JSON.
- **Params:** `series_ticker` (string, **required**) — Kalshi series ticker

### `kalshi_trades`

- **HTTP:** `GET /kalshi/trades`
- **What:** Kalshi trades. Returns normalized recent Kalshi market trades from credential-free public market-data JSON.
- **Params:** `cursor` (string, optional) — Pagination cursor from a previous Kalshi response; `limit` (integer, optional) — Rows to return, default 25, max 200; `max_ts` (integer, optional) — Maximum created Unix timestamp in seconds; `min_ts` (integer, optional) — Minimum created Unix timestamp in seconds; `ticker` (string, optional) — Kalshi market ticker filter

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

## Metaculus (11)

### `metaculus_category_questions`

- **HTTP:** `GET /metaculus/category/{slug}/questions`
- **What:** Metaculus category questions. Returns normalized Metaculus question rows from a credential-free public category feed page. Allowed category slugs: artificial-intelligence, computing-and-math, cryptocurrencies, economy-business, elections, environment-climate, geopolitics, health-pandemics, law, metaculus, natural-sciences, nuclear, politics, social-sciences, space, sports-entertainment, technology.
- **Params:** `limit` (integer, optional) — Rows to return, default 10, max 25; `slug` (string, **required**) — Metaculus category slug

### `metaculus_comments_feed`

- **HTTP:** `GET /metaculus/comments-feed`
- **What:** Metaculus comments feed. Returns normalized Metaculus question rows from the credential-free public comments feed page. Rows represent question cards with comment-related counts; upstream comment bodies are not exposed.
- **Params:** `limit` (integer, optional) — Rows to return, default 10, max 25; `topic` (string, optional) — Optional Metaculus topic slug

### `metaculus_project_questions`

- **HTTP:** `GET /metaculus/project/{slug}/questions`
- **What:** Metaculus project questions. Returns normalized Metaculus question rows from a credential-free public project feed page.
- **Params:** `limit` (integer, optional) — Rows to return, default 10, max 25; `slug` (string, **required**) — Metaculus project slug

### `metaculus_question`

- **HTTP:** `GET /metaculus/question/{id}`
- **What:** Metaculus question detail. Returns one normalized Metaculus question from credential-free public page data.
- **Params:** `id` (string, **required**) — Metaculus question or post id

### `metaculus_question_forecast_history`

- **HTTP:** `GET /metaculus/question/{id}/forecast-history`
- **What:** Metaculus question forecast history. Returns public aggregation forecast history points for one Metaculus question from credential-free public page data. The `method` enum accepts `recency_weighted`, `unweighted`, and `single_aggregation`.
- **Params:** `id` (string, **required**) — Metaculus question or post id; `max_points` (integer, optional) — Maximum history points to return, default 500, max 2000; `method` (string, optional) — Aggregation method

### `metaculus_question_forecasts`

- **HTTP:** `GET /metaculus/question/{id}/forecasts`
- **What:** Metaculus question forecasts. Returns compact public latest forecast summaries by aggregation method for one Metaculus question.
- **Params:** `id` (string, **required**) — Metaculus question or post id

### `metaculus_question_metadata`

- **HTTP:** `GET /metaculus/question/{id}/metadata`
- **What:** Metaculus question metadata. Returns public metadata for one Metaculus question, including option labels, option history, scaling metadata, resolution fields, and timing fields when present.
- **Params:** `id` (string, **required**) — Metaculus question or post id

### `metaculus_question_options`

- **HTTP:** `GET /metaculus/question/{id}/options`
- **What:** Metaculus question options. Returns public multiple-choice option labels and latest option-level forecast values for one Metaculus question. The `method` enum accepts `recency_weighted`, `unweighted`, and `single_aggregation`.
- **Params:** `id` (string, **required**) — Metaculus question or post id; `method` (string, optional) — Aggregation method

### `metaculus_questions`

- **HTTP:** `GET /metaculus/questions`
- **What:** Metaculus questions. Returns normalized Metaculus question rows from credential-free public page data. The endpoint fails closed on authenticated API responses or Cloudflare challenge pages.
- **Params:** `limit` (integer, optional) — Rows to return, default 10, max 25; `topic` (string, optional) — Optional Metaculus topic slug

### `metaculus_top_comments`

- **HTTP:** `GET /metaculus/top-comments`
- **What:** Metaculus top comments feed. Returns normalized Metaculus question rows from the credential-free public weekly top comments page. Rows represent question cards with comment-related counts; upstream comment bodies are not exposed.
- **Params:** `limit` (integer, optional) — Rows to return, default 10, max 25; `topic` (string, optional) — Optional Metaculus topic slug

### `metaculus_tournament_questions`

- **HTTP:** `GET /metaculus/tournament/{slug}/questions`
- **What:** Metaculus tournament questions. Returns normalized Metaculus question rows from a credential-free public tournament feed page.
- **Params:** `limit` (integer, optional) — Rows to return, default 10, max 25; `slug` (string, **required**) — Metaculus tournament slug

## Polymarket (30)

### `polymarket_activity_trades`

- **HTTP:** `GET /polymarket/activity/trades`
- **What:** List Polymarket activity trades. Returns normalized public trade rows used by Polymarket's `/activity` page from credential-free Data API trades JSON. The `taker_only` enum accepts `true` and `false`; the `filter_type` enum accepts `CASH`; the `filter_amount` enum accepts `1`, `5`, `10`, `100`, `1000`, `10000`, and `100000`.
- **Params:** `event_id` (string, optional) — Optional Polymarket event id; `filter_amount` (string, optional) — Minimum filtered amount; `filter_type` (string, optional) — Activity amount filter type; `limit` (integer, optional) — Maximum trades, defaults to 50 and supports up to 100; `market` (string, optional) — Optional market condition id; `offset` (integer, optional) — Result offset, defaults to 0 and supports up to 10000; `taker_only` (string, optional) — Taker-only filter

### `polymarket_clob_market`

- **HTTP:** `GET /polymarket/clob/market/{condition_id}`
- **What:** Get Polymarket CLOB market. Returns one public CLOB market detail row by market condition id, including tokens, reward settings, order acceptance state, tags, and fees.
- **Params:** `condition_id` (string, **required**) — Polymarket market condition id

### `polymarket_dashboard_macro`

- **HTTP:** `GET /polymarket/dashboards/macro`
- **What:** List Polymarket macro dashboard events. Returns normalized macroeconomic event rows for Polymarket's `/dashboards/macro` page using credential-free Gamma `events/keyset` JSON with the `macro` tag.
- **Params:** `cursor` (string, optional) — Optional keyset cursor from a prior macro dashboard response; `limit` (integer, optional) — Maximum macro events, defaults to 20 and supports up to 100

### `polymarket_event_detail`

- **HTTP:** `GET /polymarket/event/{slug}`
- **What:** Get Polymarket event detail. Returns one normalized Polymarket event from credential-free public Gamma event JSON. This endpoint does not require a Polymarket user token, wallet signature, cookies, or personal account authentication.
- **Params:** `slug` (string, **required**) — Polymarket event slug

### `polymarket_event_tags`

- **HTTP:** `GET /polymarket/events/{id}/tags`
- **What:** List tags for a Polymarket event. Returns normalized tag rows attached to one Polymarket event id.
- **Params:** `id` (string, **required**) — Polymarket event id

### `polymarket_events`

- **HTTP:** `GET /polymarket/events`
- **What:** List Polymarket events. Returns normalized event rows from Polymarket's credential-free public Gamma events JSON.
- **Params:** `ascending` (boolean, optional) — Sort ascending when true; `closed` (string, optional) — Closed filter; `limit` (integer, optional) — Maximum events, defaults to 25 and supports up to 100; `offset` (integer, optional) — Result offset, defaults to 0 and supports up to 10000; `order` (string, optional) — Sort field

### `polymarket_events_similar`

- **HTTP:** `GET /polymarket/events/similar`
- **What:** Find similar Polymarket events. Returns normalized similar events from Polymarket's credential-free public Gamma events/similar JSON.
- **Params:** `closed` (string, optional) — Closed filter; `event_slug` (string, optional) — Event slug; `event_title` (string, optional) — Event title; `id` (integer, optional) — Polymarket event id; `limit` (integer, optional) — Maximum events, defaults to 10 and supports up to 50; `market_slug` (string, optional) — Market slug; `market_title` (string, optional) — Market title

### `polymarket_homepage_feed`

- **HTTP:** `GET /polymarket/homepage/feed`
- **What:** List Polymarket homepage feed rows. Returns normalized rows for Polymarket homepage feeds discovered from the public web app and backed by credential-free Gamma JSON. The `feed` enum accepts `trending`, `breaking`, `new`, `politics`, `sports`, `crypto`, `esports`, `iran`, `finance`, `geopolitics`, `tech`, `culture`, `economy`, `weather`, `mentions`, and `elections`. Most feeds return events from Gamma `events/keyset`; `breaking` returns high-movement market rows and `mentions` returns open event search matches.
- **Params:** `cursor` (string, optional) — Optional keyset cursor from a prior event feed response; `feed` (string, optional) — Homepage feed; `limit` (integer, optional) — Maximum rows, defaults to 20 and supports up to 100

### `polymarket_leaderboard`

- **HTTP:** `GET /polymarket/leaderboard`
- **What:** List Polymarket leaderboard rows. Returns normalized trader leaderboard rows from Polymarket's credential-free Data API leaderboard JSON. The `window` enum accepts `1d`, `7d`, `30d`, and `all`; the `sort_by` enum accepts `profit` and `volume`.
- **Params:** `limit` (integer, optional) — Maximum rows, defaults to 20 and supports up to 100; `sort_by` (string, optional) — Leaderboard sort; `window` (string, optional) — Leaderboard time window

### `polymarket_market_detail`

- **HTTP:** `GET /polymarket/market/{id}`
- **What:** Get Polymarket market detail by id. Returns one normalized Polymarket market from credential-free public Gamma market JSON. This endpoint does not require a Polymarket user token, wallet signature, cookies, or personal account authentication.
- **Params:** `id` (string, **required**) — Polymarket market id

### `polymarket_market_liquidity`

- **HTTP:** `GET /polymarket/market/{id}/liquidity`
- **What:** Get Polymarket market liquidity. Returns a public market liquidity snapshot that joins Gamma market detail with credential-free public CLOB market-data reads when token ids are available. This endpoint is not a trading endpoint and does not require a Polymarket user token, wallet signature, cookies, or personal account authentication.
- **Params:** `id` (string, **required**) — Polymarket market id

### `polymarket_market_tags`

- **HTTP:** `GET /polymarket/market/{id}/tags`
- **What:** List tags for a Polymarket market. Returns normalized tag rows attached to one Polymarket market id.
- **Params:** `id` (string, **required**) — Polymarket market id

### `polymarket_markets`

- **HTTP:** `GET /polymarket/markets`
- **What:** List Polymarket markets. Returns normalized market rows from Polymarket's credential-free public Gamma markets JSON.
- **Params:** `ascending` (boolean, optional) — Sort ascending when true; `closed` (string, optional) — Closed filter; `limit` (integer, optional) — Maximum markets, defaults to 25 and supports up to 100; `offset` (integer, optional) — Result offset, defaults to 0 and supports up to 10000; `order` (string, optional) — Sort field

### `polymarket_predictions`

- **HTTP:** `GET /polymarket/predictions`
- **What:** List Polymarket predictions. Returns normalized event rows for the Polymarket `/predictions` page using credential-free Gamma `events/keyset` JSON. The `status` enum accepts `active`, `resolved`, and `all`; the `sort` enum accepts `competitive`, `volume`, `volume_24hr`, `ending_soon`, `liquidity`, `newest`, and `closed_time`; the `recurrence` enum accepts `hourly`, `daily`, `weekly`, `monthly`, and `yearly`.
- **Params:** `cursor` (string, optional) — Optional keyset cursor from a prior predictions response; `limit` (integer, optional) — Maximum events, defaults to 20 and supports up to 100; `recurrence` (string, optional) — Optional recurrence filter; `sort` (string, optional) — Prediction sort; `status` (string, optional) — Prediction status; `tag` (string, optional) — Optional tag slug

### `polymarket_public_data`

- **HTTP:** `GET /polymarket/fee-types`
- **What:** Polymarket fee types. Returns public fee type data from Polymarket Gamma. This is a normalized wrapper around credential-free public JSON.
- **Params:** `active` (string, optional) — Optional upstream active filter; `search` (string, optional) — Optional upstream search filter

### `polymarket_related_tags`

- **HTTP:** `GET /polymarket/tag/{id}/related-tags`
- **What:** Get related Polymarket tags by id. Returns normalized related tag rows from Polymarket's credential-free public Gamma related-tags JSON.
- **Params:** `id` (string, **required**) — Polymarket tag id; `locale` (string, optional) — Optional upstream locale; `omit_empty` (string, optional) — Omit empty related tags; `status` (string, optional) — Optional upstream status filter

### `polymarket_rewards_market`

- **HTTP:** `GET /polymarket/rewards/market/{condition_id}`
- **What:** Get Polymarket rewards market. Returns one public rewards-market row from Polymarket CLOB rewards JSON by market condition id.
- **Params:** `condition_id` (string, **required**) — Polymarket market condition id

### `polymarket_rewards_markets`

- **HTTP:** `GET /polymarket/rewards/markets`
- **What:** List Polymarket rewards markets. Returns normalized public rewards-market rows used by Polymarket's `/rewards` page. The `order_by` enum accepts `market`, `earnings`, `max_spread`, `min_size`, `rate_per_day`, `price`, `earning_percentage`, and `spread`; the `position` enum accepts `asc` and `desc`; the `tag_slug` enum accepts `all`, `politics`, `sports`, `crypto`, `pop-culture`, `middle-east`, `business`, and `science`.
- **Params:** `cursor` (string, optional) — Optional rewards cursor from a prior response; defaults to MA==; `date` (string, optional) — Reward program date in YYYY-MM-DD format; defaults to today in UTC; `limit` (integer, optional) — Maximum rows, defaults to 100 and supports up to 100; `order_by` (string, optional) — Rewards market sort; `position` (string, optional) — Sort direction; `q` (string, optional) — Optional market question search text; `tag_slug` (string, optional) — Rewards category

### `polymarket_search`

- **HTTP:** `GET /polymarket/search`
- **What:** Search Polymarket events. Searches Polymarket's credential-free public search JSON and returns normalized event results. The `status` enum accepts `open`, `closed`, and `all`; the `sort` enum accepts `relevance`, `volume24hr`, `volume`, `liquidity`, and `endDate`.
- **Params:** `ascending` (boolean, optional) — Sort ascending when true; `include_profiles` (boolean, optional) — Include matching profiles; `include_tags` (boolean, optional) — Include matching tags; `limit` (integer, optional) — Maximum events, defaults to 10 and supports up to 50; `q` (string, **required**) — Search query; `sort` (string, optional) — Search sort; `status` (string, optional) — Event status filter

### `polymarket_tag`

- **HTTP:** `GET /polymarket/tag/{id}`
- **What:** Get a Polymarket tag by id. Returns one normalized Polymarket tag from credential-free public Gamma tag JSON.
- **Params:** `id` (string, **required**) — Polymarket tag id; `include_template` (boolean, optional) — Include upstream template data when supported; `locale` (string, optional) — Optional upstream locale

### `polymarket_tags`

- **HTTP:** `GET /polymarket/tags`
- **What:** List Polymarket tags. Returns normalized tag rows from Polymarket's credential-free public Gamma tags JSON.
- **Params:** `ascending` (string, optional) — Sort ascending flag; `limit` (integer, optional) — Maximum tags, defaults to 25 and supports up to 100; `locale` (string, optional) — Optional upstream locale; `offset` (integer, optional) — Result offset, defaults to 0 and supports up to 10000; `order` (string, optional) — Sort field

### `polymarket_token_midpoint`

- **HTTP:** `GET /polymarket/token/{token_id}/midpoint`
- **What:** Get Polymarket token midpoint. Returns the public CLOB midpoint for one Polymarket token id.
- **Params:** `token_id` (string, **required**) — Polymarket CLOB token id

### `polymarket_token_orderbook`

- **HTTP:** `GET /polymarket/token/{token_id}/orderbook`
- **What:** Get Polymarket token order book. Returns public CLOB order-book depth for one Polymarket token id.
- **Params:** `token_id` (string, **required**) — Polymarket CLOB token id

### `polymarket_token_price`

- **HTTP:** `GET /polymarket/token/{token_id}/price`
- **What:** Get Polymarket token price. Returns the public CLOB buy or sell price for one Polymarket token id.
- **Params:** `side` (string, optional) — Order side used for the CLOB price; `token_id` (string, **required**) — Polymarket CLOB token id

### `polymarket_token_price_history`

- **HTTP:** `GET /polymarket/token/{token_id}/price-history`
- **What:** Get Polymarket token price history. Returns public CLOB price-history points for one Polymarket token id.
- **Params:** `end_ts` (integer, optional) — Optional Unix timestamp upper bound; `fidelity` (integer, optional) — Data point resolution in minutes; 0 uses the default 60; maximum 1440; `interval` (string, optional) — History interval; `start_ts` (integer, optional) — Optional Unix timestamp lower bound; `token_id` (string, **required**) — Polymarket CLOB token id

### `polymarket_token_spread`

- **HTTP:** `GET /polymarket/token/{token_id}/spread`
- **What:** Get Polymarket token spread. Returns the public CLOB spread for one Polymarket token id.
- **Params:** `token_id` (string, **required**) — Polymarket CLOB token id

### `polymarket_tokens_midpoints`

- **HTTP:** `POST /polymarket/tokens/midpoints`
- **What:** Get Polymarket token midpoints. Returns public CLOB midpoints for up to 25 Polymarket token ids. This uses credential-free public CLOB market-data JSON and does not require a Polymarket user token, wallet signature, cookies, or personal account authentication.
- **Params:** `body` (object, **required**) — Token ids request body

### `polymarket_tokens_orderbooks`

- **HTTP:** `POST /polymarket/tokens/orderbooks`
- **What:** Get Polymarket token order books. Returns public CLOB order-book depth for up to 25 Polymarket token ids. This uses credential-free public CLOB market-data JSON and does not require a Polymarket user token, wallet signature, cookies, or personal account authentication.
- **Params:** `body` (object, **required**) — Token ids request body

### `polymarket_tokens_prices`

- **HTTP:** `POST /polymarket/tokens/prices`
- **What:** Get Polymarket token prices. Returns public CLOB buy and sell prices for up to 25 Polymarket token ids. The `side` enum accepts `buy` and `sell`; when omitted, both sides are returned. This uses credential-free public CLOB market-data JSON and does not require a Polymarket user token, wallet signature, cookies, or personal account authentication.
- **Params:** `body` (object, **required**) — Token ids request body

### `polymarket_tokens_spreads`

- **HTTP:** `POST /polymarket/tokens/spreads`
- **What:** Get Polymarket token spreads. Returns public CLOB spreads for up to 25 Polymarket token ids. This uses credential-free public CLOB market-data JSON and does not require a Polymarket user token, wallet signature, cookies, or personal account authentication.
- **Params:** `body` (object, **required**) — Token ids request body

## ProductHunt (11)

### `producthunt_about`

- **HTTP:** `GET /producthunt/product/{id}/about`
- **What:** Retrieve Product Hunt product about page. Returns the richer Product Hunt about-page payload, including launch, forum, review tags, and media data.
- **Params:** `id` (string, **required**) — Product Hunt slug

### `producthunt_alternatives`

- **HTTP:** `GET /producthunt/product/{id}/alternatives`
- **What:** Retrieve Product Hunt product alternatives. Returns paginated alternatives, tags, and related discussions for a Product Hunt product.
- **Params:** `cursor` (string, optional) — Pagination cursor; `first` (integer, optional) — Page size; `id` (string, **required**) — Product Hunt slug; `order` (string, optional) — Sort order; `tags` (string, optional) — Comma-separated tag slugs

### `producthunt_category`

- **HTTP:** `GET /producthunt/category/{slug}`
- **What:** Retrieve Product Hunt category details. Returns the category page payload for a Product Hunt category slug.
- **Params:** `slug` (string, **required**) — Product Hunt category slug

### `producthunt_category_products`

- **HTTP:** `GET /producthunt/category/{slug}/products`
- **What:** Retrieve Product Hunt category products. Returns the paginated category listing payload for a Product Hunt category slug.
- **Params:** `featured_only` (boolean, optional) — Featured products only; `order` (string, optional) — Sort order; `page` (integer, optional) — Page number (1-based); `page_size` (integer, optional) — Page size; `slug` (string, **required**) — Product Hunt category slug; `tags` (string, optional) — Comma-separated category tags

### `producthunt_customers`

- **HTTP:** `GET /producthunt/product/{id}/customers`
- **What:** Retrieve Product Hunt product customers. Returns paginated customer products for a Product Hunt product using Product Hunt's ProductCustomersPage GraphQL operation.
- **Params:** `id` (string, **required**) — Product Hunt slug; `order` (string, optional) — Product Hunt customers order; `page` (integer, optional) — Page number; `page_size` (integer, optional) — Results per page

### `producthunt_launches`

- **HTTP:** `GET /producthunt/product/{id}/launches`
- **What:** Retrieve Product Hunt product launches. Returns paginated launch posts for a Product Hunt product using Product Hunt's ProductPageLaunches GraphQL operation.
- **Params:** `cursor` (string, optional) — Pagination cursor; `id` (string, **required**) — Product Hunt slug; `order` (string, optional) — Product Hunt launch order

### `producthunt_leaderboard`

- **HTTP:** `GET /producthunt/leaderboard`
- **What:** Retrieve Product Hunt leaderboard. Fetches Product Hunt leaderboard data for daily, weekly, monthly, or yearly scopes via Product Hunt GraphQL.
- **Params:** `cursor` (string, optional) — Pagination cursor; `date` (string, optional) — Anchor date in YYYY-MM-DD format. Used to derive missing year/month/day/week values.; `day` (integer, optional) — Daily day override; `featured` (boolean, optional) — Featured products only; `month` (integer, optional) — Daily/monthly month override; `order` (string, optional) — Ranking order override. Defaults to scope rank enum.; `scope` (string, optional) — Leaderboard scope: daily, weekly, monthly, yearly; `week` (integer, optional) — Weekly ISO week override; `year` (integer, optional) — Leaderboard year override

### `producthunt_makers`

- **HTTP:** `GET /producthunt/product/{id}/makers`
- **What:** Retrieve Product Hunt product makers. Returns maker items for a Product Hunt product.
- **Params:** `cursor` (string, optional) — Pagination cursor; `id` (string, **required**) — Product Hunt slug

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
- **Params:** `featured` (boolean, optional) — Launch search only: featured launches only; `page` (integer, optional) — Page number (1-based); `query` (string, **required**) — Search keywords; `topics` (string, optional) — Launch search only: comma-separated topic slugs; `type` (string, optional) — Result type: **product** (default), **user**, or **launch**

## Reddit (11)

### `reddit_comments`

- **HTTP:** `GET /reddit/comments/{id}`
- **What:** Get Reddit post comments. Returns flat public comment entries from a Reddit post.
- **Params:** `depth` (integer, optional) — Accepted for compatibility. Public comment data is flat and may ignore depth.; `id` (string, **required**) — Reddit post id or t3_ id; `limit` (integer, optional) — Maximum comments returned, defaults to 25 and clamps to 100; `sort` (string, optional) — Accepted for compatibility: confidence, top, new, controversial, old, or qa. Public comment data is flat and may ignore sort.; `with_scores` (boolean, optional) — When true, source comment scores and nested replies from old.reddit HTML rather than the default (slower)

### `reddit_domain_posts`

- **HTTP:** `GET /reddit/domain/{domain}/posts`
- **What:** List Reddit domain posts. Returns normalized public posts submitted from a linked domain.
- **Params:** `after` (string, optional) — Reddit pagination token; `domain` (string, **required**) — Domain hostname, without scheme or path; `limit` (integer, optional) — Maximum posts, defaults to 25 and clamps to 100; `sort` (string, optional) — Sort: hot, new, top, or rising; `time` (string, optional) — Time window for top sort: hour, day, week, month, year, or all; `with_scores` (boolean, optional) — When true, source score and comment_count from old.reddit HTML rather than the default (slower)

### `reddit_post`

- **HTTP:** `GET /reddit/post/{id}`
- **What:** Get Reddit post. Returns a normalized public Reddit post entry.
- **Params:** `id` (string, **required**) — Reddit post id or t3_ id; `with_scores` (boolean, optional) — When true, source score, upvote_ratio, and comment_count from old.reddit HTML rather than the default (slower)

### `reddit_search`

- **HTTP:** `GET /reddit/search`
- **What:** Search Reddit posts. Searches public Reddit content and returns normalized public post entries.
- **Params:** `after` (string, optional) — Reddit pagination token; `limit` (integer, optional) — Maximum posts, defaults to 25 and clamps to 100; `q` (string, **required**) — Search keywords; `sort` (string, optional) — Sort: relevance, hot, new, top, or comments; `subreddit` (string, optional) — Restrict search to a subreddit name, without r/; `time` (string, optional) — Time window for top/comments sorts: hour, day, week, month, year, or all; `with_scores` (boolean, optional) — When true, source score and comment_count from old.reddit HTML rather than the default (slower)

### `reddit_subreddit_about`

- **HTTP:** `GET /reddit/subreddit/{subreddit}/about`
- **What:** Get Reddit subreddit metadata. Returns public metadata and sample posts for a subreddit. Subscriber counts, icons, and banners are omitted because they are not available on anonymous Reddit pages.
- **Params:** `limit` (integer, optional) — Maximum sample posts inspected, defaults to 25 and clamps to 100; `subreddit` (string, **required**) — Subreddit name, without r/; `with_scores` (boolean, optional) — When true, source the sample posts (with score and comment_count) from old.reddit HTML rather than the default (slower); subscriber counts remain unavailable

### `reddit_subreddit_comments`

- **HTTP:** `GET /reddit/subreddit/{subreddit}/comments`
- **What:** List Reddit subreddit comments. Returns flat public comment entries from a subreddit latest-comments feed.
- **Params:** `after` (string, optional) — Reddit pagination token; `limit` (integer, optional) — Maximum comments, defaults to 25 and clamps to 100; `subreddit` (string, **required**) — Subreddit name, without r/; `with_scores` (boolean, optional) — When true, source comment scores from old.reddit HTML rather than the default (slower)

### `reddit_subreddit_posts`

- **HTTP:** `GET /reddit/subreddit/{subreddit}/posts`
- **What:** List Reddit subreddit posts. Returns normalized public posts from a subreddit.
- **Params:** `after` (string, optional) — Reddit pagination token; `limit` (integer, optional) — Maximum posts, defaults to 25 and clamps to 100; `sort` (string, optional) — Sort: hot, new, top, or rising; `subreddit` (string, **required**) — Subreddit name, without r/; `time` (string, optional) — Time window for top sort: hour, day, week, month, year, or all; `with_scores` (boolean, optional) — When true, source score and comment_count from old.reddit HTML rather than the default (slower)

### `reddit_subreddits_posts`

- **HTTP:** `GET /reddit/subreddits/posts`
- **What:** List Reddit multi-subreddit posts. Returns normalized public posts from a combined multi-subreddit feed.
- **Params:** `after` (string, optional) — Reddit pagination token; `limit` (integer, optional) — Maximum posts, defaults to 25 and clamps to 100; `sort` (string, optional) — Sort: hot, new, top, or rising; `subreddits` (string, **required**) — Comma-separated subreddit names, without r/, maximum 10; `time` (string, optional) — Time window for top sort: hour, day, week, month, year, or all; `with_scores` (boolean, optional) — When true, source score and comment_count from old.reddit HTML rather than the default (slower)

### `reddit_trends`

- **HTTP:** `GET /reddit/trends`
- **What:** List Reddit trends. Returns normalized public posts from broad Reddit hot, new, rising, or top feeds. For subreddit-specific trends, use `/reddit/subreddit/{subreddit}/posts` with `sort=hot`, `sort=new`, `sort=rising`, or `sort=top`.
- **Params:** `after` (string, optional) — Reddit pagination token; `limit` (integer, optional) — Maximum posts, defaults to 25 and clamps to 100; `sort` (string, optional) — Sort: hot, new, rising, or top; `time` (string, optional) — Time window for top sort: hour, day, week, month, year, or all; `with_scores` (boolean, optional) — When true, source score and comment_count from old.reddit HTML rather than the default (slower)

### `reddit_user_comments`

- **HTTP:** `GET /reddit/user/{username}/comments`
- **What:** List Reddit user comments. Returns flat public comment entries from a public Reddit user's comments feed.
- **Params:** `after` (string, optional) — Reddit pagination token; `limit` (integer, optional) — Maximum comments, defaults to 25 and clamps to 100; `username` (string, **required**) — Public Reddit username, without u/; `with_scores` (boolean, optional) — When true, source comment scores from old.reddit HTML rather than the default (slower)

### `reddit_user_posts`

- **HTTP:** `GET /reddit/user/{username}/posts`
- **What:** List Reddit user posts. Returns normalized public posts from a public Reddit user's submitted feed.
- **Params:** `after` (string, optional) — Reddit pagination token; `limit` (integer, optional) — Maximum posts, defaults to 25 and clamps to 100; `username` (string, **required**) — Public Reddit username, without u/; `with_scores` (boolean, optional) — When true, source score and comment_count from old.reddit HTML rather than the default (slower)

## Redfin (5)

### `redfin_estimate`

- **HTTP:** `GET /redfin/estimate`
- **What:** Get Redfin Estimate. Returns the Redfin Estimate for a property, including the current estimate, property facts, and the monthly estimate history with city/county/postal comparatives. Faithful pass-through of Redfin's public avm + avmHistoricalData resources.
- **Params:** `property_id` (string, **required**) — Redfin property id

### `redfin_property`

- **HTTP:** `GET /redfin/property`
- **What:** Get Redfin property. Returns normalized Redfin public property details. Provide a listing url, or a property_id (optionally with listing_id) to use Redfin's public stingray detail API.
- **Params:** `listing_id` (string, optional) — Redfin listing id, improves completeness with property_id; `property_id` (string, optional) — Redfin property id, used when url is not provided; `url` (string, optional) — Redfin listing URL (primary key)

### `redfin_region_trends`

- **HTTP:** `GET /redfin/region-trends`
- **What:** Get Redfin region market trends. Returns Redfin's aggregate market trends for a region (median list/sale price, sale-to-list, offers, days on market, inventory, year-over-year). Faithful pass-through of Redfin's public aggregate-trends resource.
- **Params:** `region_id` (integer, **required**) — Redfin region id from autocomplete; `region_type` (integer, optional) — Redfin region type from autocomplete (defaults to 6, city)

### `redfin_search`

- **HTTP:** `GET /redfin/search`
- **What:** Search Redfin listings. Returns normalized Redfin public listing search results from Redfin's credential-free region CSV endpoint. Pass region_id/region_type from autocomplete to skip location resolution.
- **Params:** `location` (string, optional) — Display location; resolved via autocomplete when region_id is omitted; `max_price` (integer, optional) — Maximum price filter; `min_baths` (number, optional) — Minimum bathrooms filter; `min_beds` (integer, optional) — Minimum bedrooms filter; `min_price` (integer, optional) — Minimum price filter; `page` (integer, optional) — 1-based page; `region_id` (integer, optional) — Redfin region id from autocomplete; `region_type` (integer, optional) — Redfin region type from autocomplete (defaults to 6, city); `status` (string, optional) — Listing status: for_sale or sold

### `redfin_similar`

- **HTTP:** `GET /redfin/similar`
- **What:** Get Redfin comparable listings. Returns Redfin's comparable ("similar") listings for a property as normalized listing rows. Faithful pass-through of Redfin's public similars resource.
- **Params:** `property_id` (string, **required**) — Redfin property id

## Rotten Tomatoes (9)

### `rottentomatoes_browse_movies`

- **HTTP:** `GET /rottentomatoes/browse/movies`
- **What:** Rotten Tomatoes movie discovery rows. Returns normalized movie rows from Rotten Tomatoes public browse pages using credential-free JSON-LD ItemList data. Supported `list` values are `movies_in_theaters`, `movies_at_home`, and `movies_coming_soon`. Supported `sort` values are `popular`, `newest`, and `top_box_office`; `top_box_office` is only valid with `movies_in_theaters`.
- **Params:** `limit` (integer, optional) — Rows to return, default 10, max 20; `list` (string, optional) — Movie browse list: movies_in_theaters, movies_at_home, movies_coming_soon; `sort` (string, optional) — Sort: popular, newest, top_box_office

### `rottentomatoes_browse_tv`

- **HTTP:** `GET /rottentomatoes/browse/tv`
- **What:** Rotten Tomatoes TV discovery rows. Returns normalized TV series rows from Rotten Tomatoes public browse pages using credential-free JSON-LD ItemList data. Supported `list` value is `tv_series_browse`. Supported `sort` values are `popular` and `newest`.
- **Params:** `limit` (integer, optional) — Rows to return, default 10, max 20; `list` (string, optional) — TV browse list: tv_series_browse; `sort` (string, optional) — Sort: popular, newest

### `rottentomatoes_episode`

- **HTTP:** `GET /rottentomatoes/episode`
- **What:** Rotten Tomatoes episode detail. Returns normalized Rotten Tomatoes TV episode metadata, scorecard data, parent series/season metadata, and public video metadata from a credential-free public episode page. Pass exactly one of `path` or `url`.
- **Params:** `path` (string, optional) — Rotten Tomatoes episode path; `url` (string, optional) — Absolute https://www.rottentomatoes.com episode URL

### `rottentomatoes_movie`

- **HTTP:** `GET /rottentomatoes/movie`
- **What:** Rotten Tomatoes movie detail. Returns normalized Rotten Tomatoes movie metadata, scorecard data, and representative embedded audience reviews. Pass exactly one of `path` or `url`.
- **Params:** `path` (string, optional) — Rotten Tomatoes movie path; `url` (string, optional) — Absolute https://www.rottentomatoes.com movie URL

### `rottentomatoes_movie_reviews`

- **HTTP:** `GET /rottentomatoes/movie/reviews`
- **What:** Rotten Tomatoes movie reviews. Returns normalized critic or audience reviews from Rotten Tomatoes public review JSON hydrated by the movie review page, including pagination metadata. Pass exactly one of `path` or `url`. Supported `type` values are `critics`, `top-critics`, `audience`, and `verified-audience`.
- **Params:** `after` (string, optional) — Pagination cursor from data.page_info.end_cursor; `limit` (integer, optional) — Reviews to return, default 10, max 20; `path` (string, optional) — Rotten Tomatoes movie path; `type` (string, optional) — Review type: critics, top-critics, audience, verified-audience; `url` (string, optional) — Absolute https://www.rottentomatoes.com movie URL

### `rottentomatoes_person`

- **HTTP:** `GET /rottentomatoes/person`
- **What:** Rotten Tomatoes person detail and filmography. Returns normalized Rotten Tomatoes celebrity/person metadata and filmography rows from public Person JSON-LD and the credential-free filmography module. Pass exactly one of `path` or `url`.
- **Params:** `path` (string, optional) — Rotten Tomatoes person path; `url` (string, optional) — Absolute https://www.rottentomatoes.com person URL

### `rottentomatoes_search`

- **HTTP:** `GET /rottentomatoes/search`
- **What:** Rotten Tomatoes movie search. Returns normalized Rotten Tomatoes movie search rows from credential-free server-rendered search HTML.
- **Params:** `limit` (integer, optional) — Rows to return, default 10, max 20; `query` (string, **required**) — Search query

### `rottentomatoes_season`

- **HTTP:** `GET /rottentomatoes/season`
- **What:** Rotten Tomatoes season detail. Returns normalized Rotten Tomatoes TV season metadata, scorecard data, parent series metadata, and episode rows from a credential-free public season page. Pass exactly one of `path` or `url`.
- **Params:** `path` (string, optional) — Rotten Tomatoes season path; `url` (string, optional) — Absolute https://www.rottentomatoes.com season URL

### `rottentomatoes_series`

- **HTTP:** `GET /rottentomatoes/series`
- **What:** Rotten Tomatoes series detail. Returns normalized Rotten Tomatoes TV series metadata and scorecard data from a credential-free public series page. Pass exactly one of `path` or `url`.
- **Params:** `path` (string, optional) — Rotten Tomatoes series path; `url` (string, optional) — Absolute https://www.rottentomatoes.com series URL

## Shop.app (16)

### `shop_app_analysis`

- **HTTP:** `GET /shop-app/analysis`
- **What:** Analyze Shop.app query results. Returns a market snapshot derived from Shop.app search results, including price ranges, currencies, sale counts, discounts, and top shops. Limit defaults to 20 and accepts values up to 50.
- **Params:** `deep_search` (boolean, optional) — Enable Shop.app deep search mode; `in_stock` (boolean, optional) — Request in-stock products; `limit` (integer, optional) — Maximum products to analyze, defaults to 20 and supports up to 50; `on_sale` (boolean, optional) — Request sale products; `query` (string, **required**) — Search query

### `shop_app_categories`

- **HTTP:** `GET /shop-app/categories`
- **What:** List Shop.app categories. Returns public Shop.app product categories.
- **Params:** _none_

### `shop_app_collection_products`

- **HTTP:** `GET /shop-app/shops/{handle}/collections/{collection_id}/products`
- **What:** List Shop.app collection products. Returns public product cards from a Shop.app merchant collection. sort_by allowed values: MOST_SALES, PRICE_LOW_TO_HIGH, PRICE_HIGH_TO_LOW, RELEVANCE.
- **Params:** `collection_id` (string, **required**) — Collection id; `handle` (string, **required**) — Shop handle; `in_stock` (boolean, optional) — Request in-stock products; `limit` (integer, optional) — Maximum products, defaults to 30 and supports up to 60; `sort_by` (string, optional) — Sort mode

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
- **Params:** `id` (string, **required**) — Product id; `limit` (integer, optional) — Maximum variants, defaults to 50 and supports up to 100; `selected_options` (string, optional) — Selected options JSON object

### `shop_app_search`

- **HTTP:** `GET /shop-app/search`
- **What:** Search Shop.app products. Searches Shop.app product results using the credential-free public web search flow. Limit defaults to 20 and accepts values up to 50.
- **Params:** `deep_search` (boolean, optional) — Enable Shop.app deep search mode; `in_stock` (boolean, optional) — Request in-stock products; `limit` (integer, optional) — Maximum products, defaults to 20 and supports up to 50; `on_sale` (boolean, optional) — Request sale products; `query` (string, **required**) — Search query

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
- **Params:** `handle` (string, **required**) — Shop handle; `in_stock` (boolean, optional) — Request in-stock products; `limit` (integer, optional) — Maximum products, defaults to 30 and supports up to 60; `sort_by` (string, optional) — Sort mode

### `shop_app_shop_reviews`

- **HTTP:** `GET /shop-app/shops/{handle}/reviews`
- **What:** List Shop.app shop reviews. Returns public reviews for a Shop.app merchant profile.
- **Params:** `handle` (string, **required**) — Shop handle; `limit` (integer, optional) — Maximum reviews, defaults to 20 and supports up to 50

### `shop_app_shop_typeahead`

- **HTTP:** `GET /shop-app/shops/{handle}/typeahead`
- **What:** Suggest products and collections inside a Shop.app shop. Returns public store typeahead suggestions for a Shop.app merchant profile.
- **Params:** `handle` (string, **required**) — Shop handle; `limit` (integer, optional) — Maximum suggestions, defaults to 20 and supports up to 20; `query` (string, **required**) — Typeahead query

### `shop_app_suggestions`

- **HTTP:** `GET /shop-app/suggestions`
- **What:** Suggest Shop.app searches. Returns Shop.app autocomplete suggestions. Limit defaults to 10 and supports up to 20.
- **Params:** `limit` (integer, optional) — Maximum suggestions, defaults to 10 and supports up to 20; `query` (string, **required**) — Search query

## Shopify (11)

### `shopify_collection_products`

- **HTTP:** `GET /shopify/collections/{handle}/products`
- **What:** List Shopify collection products. Returns normalized products from a public Shopify collection `/products.json` endpoint.
- **Params:** `handle` (string, **required**) — Collection handle; `limit` (integer, optional) — Maximum products, defaults to 50 and supports up to 250; `page` (integer, optional) — 1-based page, defaults to 1; `url` (string, **required**) — Shopify storefront URL

### `shopify_collections`

- **HTTP:** `GET /shopify/collections`
- **What:** List Shopify collections. Returns normalized collections from a public Shopify `/collections.json` endpoint. Valid empty result pages return `200` with an empty collections array.
- **Params:** `limit` (integer, optional) — Maximum collections, defaults to 50 and supports up to 250; `page` (integer, optional) — 1-based page, defaults to 1; `url` (string, **required**) — Shopify storefront URL

### `shopify_page`

- **HTTP:** `GET /shopify/pages/{handle}`
- **What:** Get Shopify page. Returns normalized page detail from Shopify's credential-free `/pages/{handle}.json` endpoint. Page body HTML is returned as cleaned text only.
- **Params:** `handle` (string, **required**) — Page handle; `url` (string, **required**) — Shopify storefront URL

### `shopify_pages`

- **HTTP:** `GET /shopify/pages`
- **What:** List Shopify pages. Returns normalized static pages from a public Shopify `/pages.json` endpoint. Page body HTML is returned as cleaned text only.
- **Params:** `limit` (integer, optional) — Maximum pages, defaults to 50 and supports up to 250; `page` (integer, optional) — 1-based page, defaults to 1; `url` (string, **required**) — Shopify storefront URL

### `shopify_product`

- **HTTP:** `GET /shopify/products/{handle}`
- **What:** Get Shopify product. Returns normalized product detail from Shopify's credential-free product handle `.js` endpoint.
- **Params:** `handle` (string, **required**) — Product handle; `url` (string, **required**) — Shopify storefront URL

### `shopify_product_recommendations`

- **HTTP:** `GET /shopify/products/{handle}/recommendations`
- **What:** List Shopify product recommendations. Returns normalized recommended products from Shopify's credential-free recommendations Ajax endpoint. The route handle is resolved to a Shopify product id before fetching recommendations.
- **Params:** `handle` (string, **required**) — Product handle; `intent` (string, optional) — Recommendation intent. Allowed values: related, complementary; `limit` (integer, optional) — Maximum products, defaults to 10 and supports up to 20; `url` (string, **required**) — Shopify storefront URL

### `shopify_products`

- **HTTP:** `GET /shopify/products`
- **What:** List Shopify products. Returns normalized products from a public Shopify `/products.json` endpoint. Valid empty result pages return `200` with an empty products array.
- **Params:** `limit` (integer, optional) — Maximum products, defaults to 50 and supports up to 250; `page` (integer, optional) — 1-based page, defaults to 1; `url` (string, **required**) — Shopify storefront URL

### `shopify_search_suggest`

- **HTTP:** `GET /shopify/search/suggest`
- **What:** Get Shopify search suggestions. Returns products, collections, and query suggestions from Shopify's credential-free predictive search Ajax endpoint.
- **Params:** `limit` (integer, optional) — Maximum results per type, defaults to 10 and supports up to 20; `q` (string, **required**) — Search query; `types` (string, optional) — Comma-separated suggestion types. Allowed values: product, collection, query; `url` (string, **required**) — Shopify storefront URL

### `shopify_sitemap_urls`

- **HTTP:** `GET /shopify/sitemap/urls`
- **What:** List Shopify sitemap URLs. Fetches capped URL entries from Shopify child sitemaps matching the requested type.
- **Params:** `limit` (integer, optional) — Maximum URL entries, defaults to 50 and supports up to 250; `type` (string, optional) — Sitemap type. Allowed values: all, products, collections, pages, blogs, agentic_discovery, other; `url` (string, **required**) — Shopify storefront URL

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
- **Params:** `id` (string, optional) — Spotify album ID; `limit` (integer, optional) — Track limit, clamped to 1-50; `offset` (integer, optional) — Track offset; `uri` (string, optional) — Spotify album URI or open.spotify.com album URL

### `spotify_album_tracks`

- **HTTP:** `GET /spotify/album/tracks`
- **What:** Retrieve Spotify album tracks. Returns normalized Spotify Web Player album tracks from private Pathfinder responses.
- **Params:** `id` (string, optional) — Spotify album ID; `limit` (integer, optional) — Track limit, clamped to 1-50; `offset` (integer, optional) — Track offset; `uri` (string, optional) — Spotify album URI or open.spotify.com album URL

### `spotify_albums_search`

- **HTTP:** `GET /spotify/albums/search`
- **What:** Search Spotify albums. Returns normalized Spotify Web Player album search results for a search term. The endpoint fetches anonymous Spotify credentials at request time; caller-supplied Spotify bearer or client tokens are not required.
- **Params:** `include_album_pre_releases` (boolean, optional) — Include album pre-release results; `include_audiobooks` (boolean, optional) — Include audiobook context where available; `include_authors` (boolean, optional) — Include authors; `include_episode_content_ratings_v2` (boolean, optional) — Include Spotify episode content ratings v2; `include_pre_releases` (boolean, optional) — Include pre-release results; `limit` (integer, optional) — Album result limit, clamped to 1-50; `number_of_top_results` (integer, optional) — Top result limit, clamped to 1-50; `offset` (integer, optional) — Search offset; `q` (string, **required**) — Search term

### `spotify_artist`

- **HTTP:** `GET /spotify/artist`
- **What:** Retrieve Spotify artist details. Returns normalized Spotify Web Player artist overview data from private Pathfinder responses.
- **Params:** `id` (string, optional) — Spotify artist ID; `uri` (string, optional) — Spotify artist URI or open.spotify.com artist URL

### `spotify_artist_albums`

- **HTTP:** `GET /spotify/artist/albums`
- **What:** Retrieve Spotify artist albums. Returns artist discography items from Spotify Web Player private Pathfinder responses.
- **Params:** `id` (string, optional) — Spotify artist ID; `limit` (integer, optional) — Limit, clamped to 1-50; `offset` (integer, optional) — Offset; `order` (string, optional) — date_desc, date_asc, name_asc, or name_desc; `type` (string, optional) — album, single, compilation, appears_on, or all; `uri` (string, optional) — Spotify artist URI or open.spotify.com artist URL

### `spotify_artist_playlists`

- **HTTP:** `GET /spotify/artist/playlists`
- **What:** Retrieve Spotify artist playlists. Returns artist playlists from Spotify Web Player private Pathfinder responses.
- **Params:** `id` (string, optional) — Spotify artist ID; `uri` (string, optional) — Spotify artist URI or open.spotify.com artist URL

### `spotify_artist_related`

- **HTTP:** `GET /spotify/artist/related`
- **What:** Retrieve Spotify related artists. Returns related artists from Spotify Web Player private Pathfinder responses.
- **Params:** `id` (string, optional) — Spotify artist ID; `uri` (string, optional) — Spotify artist URI or open.spotify.com artist URL

### `spotify_artists_search`

- **HTTP:** `GET /spotify/artists/search`
- **What:** Search Spotify artists. Returns normalized Spotify Web Player artist search results for a search term.
- **Params:** `limit` (integer, optional) — Result limit, clamped to 1-50; `offset` (integer, optional) — Search offset; `q` (string, **required**) — Search term

### `spotify_audiobook`

- **HTTP:** `GET /spotify/audiobook`
- **What:** Retrieve Spotify audiobook details. Returns Spotify Web Player audiobook metadata from private Pathfinder responses. Spotify exposes audiobooks through show URIs.
- **Params:** `id` (string, optional) — Spotify show ID; `uri` (string, optional) — Spotify audiobook/show URI or open.spotify.com show URL

### `spotify_audiobook_chapters`

- **HTTP:** `GET /spotify/audiobook/chapters`
- **What:** Retrieve Spotify audiobook chapters. Returns audiobook chapters from Spotify Web Player private Pathfinder responses.
- **Params:** `id` (string, optional) — Spotify show ID; `limit` (integer, optional) — Chapter limit, clamped to 1-50; `offset` (integer, optional) — Chapter offset; `uri` (string, optional) — Spotify audiobook/show URI or open.spotify.com show URL

### `spotify_audiobooks_search`

- **HTTP:** `GET /spotify/audiobooks/search`
- **What:** Search Spotify audiobooks. Returns normalized Spotify Web Player audiobook search results for a search term. The endpoint fetches anonymous Spotify credentials at request time; caller-supplied Spotify bearer or client tokens are not required.
- **Params:** `include_album_pre_releases` (boolean, optional) — Include album pre-release results; `include_audiobooks` (boolean, optional) — Include audiobook results; `include_authors` (boolean, optional) — Include authors; `include_episode_content_ratings_v2` (boolean, optional) — Include Spotify episode content ratings v2; `include_pre_releases` (boolean, optional) — Include pre-release results; `limit` (integer, optional) — Audiobook result limit, clamped to 1-50; `number_of_top_results` (integer, optional) — Top result limit, clamped to 1-50; `offset` (integer, optional) — Search offset; `q` (string, **required**) — Search term

### `spotify_chapter`

- **HTTP:** `GET /spotify/chapter`
- **What:** Retrieve Spotify audiobook chapter details. Returns a Spotify chapter from the same private Pathfinder operation used for episodes and chapters.
- **Params:** `id` (string, optional) — Spotify chapter/episode ID; `uri` (string, optional) — Spotify chapter or episode URI/URL

### `spotify_episodes_search`

- **HTTP:** `GET /spotify/episodes/search`
- **What:** Search Spotify episodes. Returns normalized Spotify Web Player episode search results for a search term.
- **Params:** `limit` (integer, optional) — Result limit, clamped to 1-50; `offset` (integer, optional) — Search offset; `q` (string, **required**) — Search term

### `spotify_featured_charts_by_country`

- **HTTP:** `GET /spotify/featured-charts-by-country`
- **What:** Retrieve Spotify featured charts by country. Returns normalized Spotify country hub content from Spotify's countryHubContent Pathfinder response. Defaults to the CHARTS content shelf for the requested country.
- **Params:** `content_id` (string, optional) — Country hub content ID. Allowed: CHARTS, POPULAR_ALBUMS, POPULAR_ARTISTS, TRENDING_SONGS; `country_code` (string, optional) — Two-letter Spotify popular-in country code

### `spotify_genre`

- **HTTP:** `GET /spotify/genre`
- **What:** Retrieve Spotify genre page. Returns normalized sections and items from Spotify's browsePage Pathfinder response for a Spotify genre or page URI.
- **Params:** `include_episode_content_ratings_v2` (boolean, optional) — Include Spotify episode content ratings v2; `page_limit` (integer, optional) — Page pagination limit, clamped to 1-50; `page_offset` (integer, optional) — Page pagination offset; `section_limit` (integer, optional) — Section pagination limit, clamped to 1-50; `section_offset` (integer, optional) — Section pagination offset; `uri` (string, optional) — Spotify genre or page URI

### `spotify_home`

- **HTTP:** `GET /spotify/home`
- **What:** Retrieve Spotify home sections. Returns normalized shelves and items from Spotify's Web Player home Pathfinder response. The endpoint fetches anonymous Spotify credentials at request time; caller-supplied Spotify bearer or client tokens are not required.
- **Params:** `facet` (string, optional) — Optional Spotify home facet; `include_episode_content_ratings_v2` (boolean, optional) — Include Spotify episode content ratings v2; `section_items_limit` (integer, optional) — Per-section item limit, clamped to 1-50; `sp_t` (string, optional) — Optional Spotify session token. A random UUID is generated when omitted; `time_zone` (string, optional) — IANA time zone used by Spotify home personalization

### `spotify_playlist`

- **HTTP:** `GET /spotify/playlist`
- **What:** Retrieve Spotify playlist details. Returns normalized Spotify Web Player playlist metadata and items from Spotify's fetchPlaylist Pathfinder response. Provide either uri or id; defaults to a known public playlist when omitted.
- **Params:** `enable_watch_feed_entrypoint` (boolean, optional) — Enable watch feed entrypoint; `id` (string, optional) — Spotify playlist ID. Used when uri is omitted; `include_episode_content_ratings_v2` (boolean, optional) — Include Spotify episode content ratings v2; `limit` (integer, optional) — Playlist item limit, clamped to 1-50; `offset` (integer, optional) — Playlist item offset; `uri` (string, optional) — Spotify playlist URI or open.spotify.com playlist URL

### `spotify_playlists_search`

- **HTTP:** `GET /spotify/playlists/search`
- **What:** Search Spotify playlists. Returns normalized Spotify Web Player playlist search results for a search term. The endpoint fetches anonymous Spotify credentials at request time; caller-supplied Spotify bearer or client tokens are not required.
- **Params:** `include_album_pre_releases` (boolean, optional) — Include album pre-release results; `include_audiobooks` (boolean, optional) — Include audiobook context where available; `include_authors` (boolean, optional) — Include authors; `include_episode_content_ratings_v2` (boolean, optional) — Include Spotify episode content ratings v2; `include_pre_releases` (boolean, optional) — Include pre-release results; `limit` (integer, optional) — Playlist result limit, clamped to 1-50; `number_of_top_results` (integer, optional) — Top result limit, clamped to 1-50; `offset` (integer, optional) — Search offset; `q` (string, **required**) — Search term

### `spotify_popular_by_country`

- **HTTP:** `GET /spotify/popular-by-country`
- **What:** Retrieve Spotify popular by country. Returns normalized Spotify country hub shelves from Spotify's countryHubsPage Pathfinder response. The country_code parameter accepts Spotify popular-in country codes from open.spotify.com/popular-in/us.
- **Params:** `country_code` (string, optional) — Two-letter Spotify popular-in country code

### `spotify_profile`

- **HTTP:** `GET /spotify/profile`
- **What:** Retrieve Spotify public profile. Returns normalized public profile metadata and preview playlists from Spotify's Web Player user-profile service. Provide username, uri, or url; defaults to Spotify's official profile.
- **Params:** `artist_limit` (integer, optional) — Recently played artist limit, clamped to 0-50; `episode_limit` (integer, optional) — Embedded episode limit, clamped to 0-50; `playlist_limit` (integer, optional) — Embedded public playlist limit, clamped to 0-50; `uri` (string, optional) — Spotify user URI; `url` (string, optional) — open.spotify.com user URL; `username` (string, optional) — Spotify username

### `spotify_profile_followers`

- **HTTP:** `GET /spotify/profile/followers`
- **What:** Retrieve Spotify public profile followers. Returns normalized public follower profiles from Spotify's Web Player user-profile service. Spotify exposes this as a public anonymous response for some profiles; private or restricted profiles may return an upstream error.
- **Params:** `limit` (integer, optional) — Follower limit, clamped to 1-200; `offset` (integer, optional) — Follower offset applied locally; `uri` (string, optional) — Spotify user URI; `url` (string, optional) — open.spotify.com user URL; `username` (string, optional) — Spotify username

### `spotify_profile_playlists`

- **HTTP:** `GET /spotify/profile/playlists`
- **What:** Retrieve Spotify public profile playlists. Returns normalized public playlists from Spotify's Web Player user-profile service. Provide username, uri, or url; defaults to Spotify's official profile.
- **Params:** `limit` (integer, optional) — Playlist limit, clamped to 1-50; `offset` (integer, optional) — Playlist offset; `uri` (string, optional) — Spotify user URI; `url` (string, optional) — open.spotify.com user URL; `username` (string, optional) — Spotify username

### `spotify_profiles_search`

- **HTTP:** `GET /spotify/profiles/search`
- **What:** Search Spotify profiles. Returns normalized Spotify Web Player profile search results for a search term. The endpoint fetches anonymous Spotify credentials at request time; caller-supplied Spotify bearer or client tokens are not required.
- **Params:** `include_album_pre_releases` (boolean, optional) — Include album pre-release results; `include_audiobooks` (boolean, optional) — Include audiobook context where available; `include_authors` (boolean, optional) — Include authors; `include_episode_content_ratings_v2` (boolean, optional) — Include Spotify episode content ratings v2; `include_pre_releases` (boolean, optional) — Include pre-release results; `limit` (integer, optional) — Profile result limit, clamped to 1-50; `number_of_top_results` (integer, optional) — Top result limit, clamped to 1-50; `offset` (integer, optional) — Search offset; `q` (string, **required**) — Search term

### `spotify_search`

- **HTTP:** `GET /spotify/search`
- **What:** Search Spotify catalog. Returns normalized Spotify Web Player catalog search results across tracks, artists, albums, playlists, shows, episodes, audiobooks, and top results. The endpoint fetches anonymous Spotify credentials at request time; caller-supplied Spotify bearer or client tokens are not required.
- **Params:** `include_album_pre_releases` (boolean, optional) — Include album pre-release results; `include_artist_has_concerts_field` (boolean, optional) — Include artist concert availability fields; `include_audiobooks` (boolean, optional) — Include audiobook results; `include_authors` (boolean, optional) — Include authors; `include_episode_content_ratings_v2` (boolean, optional) — Include Spotify episode content ratings v2; `include_pre_releases` (boolean, optional) — Include pre-release results; `is_prefix` (boolean, optional) — Treat the search term as a prefix; `limit` (integer, optional) — Result limit per section, clamped to 1-50; `number_of_top_results` (integer, optional) — Top result limit, clamped to 1-50; `offset` (integer, optional) — Search offset; `q` (string, **required**) — Search term

### `spotify_section`

- **HTTP:** `GET /spotify/section`
- **What:** Retrieve Spotify browse section. Returns normalized items from Spotify's browseSection Pathfinder response for a Spotify section URI.
- **Params:** `include_episode_content_ratings_v2` (boolean, optional) — Include Spotify episode content ratings v2; `limit` (integer, optional) — Section item limit, clamped to 1-50; `offset` (integer, optional) — Section item offset; `uri` (string, optional) — Spotify section URI

### `spotify_shows_search`

- **HTTP:** `GET /spotify/shows/search`
- **What:** Search Spotify shows. Returns normalized Spotify Web Player show search results for a search term.
- **Params:** `limit` (integer, optional) — Result limit, clamped to 1-50; `offset` (integer, optional) — Search offset; `q` (string, **required**) — Search term

### `spotify_track`

- **HTTP:** `GET /spotify/track`
- **What:** Retrieve Spotify track details. Returns normalized Spotify Web Player track metadata from Spotify's getTrack Pathfinder response. Provide either uri or id; defaults to a known public track when omitted.
- **Params:** `id` (string, optional) — Spotify track ID. Used when uri is omitted; `uri` (string, optional) — Spotify track URI or open.spotify.com track URL

### `spotify_track_recommended`

- **HTTP:** `GET /spotify/track/recommended`
- **What:** Retrieve Spotify recommended tracks. Returns normalized recommended Spotify entities from the internalLinkRecommenderTrack Pathfinder response.
- **Params:** `id` (string, optional) — Spotify track ID. Used when uri is omitted; `limit` (integer, optional) — Recommendation limit, clamped to 1-50; `uri` (string, optional) — Spotify track URI or open.spotify.com track URL

### `spotify_track_similar_albums`

- **HTTP:** `GET /spotify/track/similar-albums`
- **What:** Retrieve Spotify track similar albums. Returns normalized albums from the similarAlbumsBasedOnThisTrack Pathfinder response.
- **Params:** `albums_only` (boolean, optional) — Request albums-only recommendations; `id` (string, optional) — Spotify track ID. Used when uri is omitted; `limit` (integer, optional) — Album limit, clamped to 1-50; `uri` (string, optional) — Spotify track URI or open.spotify.com track URL

### `spotify_tracks_search`

- **HTTP:** `GET /spotify/tracks/search`
- **What:** Search Spotify tracks. Returns normalized Spotify Web Player track search results for a search term. The endpoint fetches anonymous Spotify credentials at request time; caller-supplied Spotify bearer or client tokens are not required.
- **Params:** `include_album_pre_releases` (boolean, optional) — Include album pre-release results; `include_audiobooks` (boolean, optional) — Include audiobook context where available; `include_authors` (boolean, optional) — Include authors; `include_episode_content_ratings_v2` (boolean, optional) — Include Spotify episode content ratings v2; `include_pre_releases` (boolean, optional) — Include pre-release results; `limit` (integer, optional) — Track result limit, clamped to 1-50; `number_of_top_results` (integer, optional) — Top result limit, clamped to 1-50; `offset` (integer, optional) — Search offset; `q` (string, **required**) — Search term

## SpotifyPodcasts (8)

### `spotify_podcasts_categories`

- **HTTP:** `GET /spotify-podcasts/categories`
- **What:** Retrieve Spotify Podcasts categories. Returns normalized Spotify podcast category sections and items from Spotify's all-categories browsePage Pathfinder response.
- **Params:** `include_episode_content_ratings_v2` (boolean, optional) — Include Spotify episode content ratings v2; `page_limit` (integer, optional) — Page pagination limit, clamped to 1-50; `page_offset` (integer, optional) — Page pagination offset; `section_limit` (integer, optional) — Section pagination limit, clamped to 1-50; `section_offset` (integer, optional) — Section pagination offset; `uri` (string, optional) — Spotify podcast categories page URI

### `spotify_podcasts_charts`

- **HTTP:** `GET /spotify-podcasts/charts`
- **What:** Retrieve Spotify podcast charts. Returns normalized Spotify podcast chart rankings from podcastcharts.byspotify.com. The chart and region parameters are validated against Spotify's supported podcast chart slugs and countries. Category charts are available only in au, br, de, gb, mx, se, and us.
- **Params:** `chart` (string, optional) — Chart slug. Allowed: top-podcasts, top-episodes, trending, arts, business, comedy, education, fiction, health-fitness, history, leisure, music, news, religion-spirituality, science, society-culture, sports, technology, true-crime, tv-film; `limit` (integer, optional) — Result limit, clamped to 1-100; `region` (string, optional) — Two-letter region code. Allowed: ar, au, at, br, ca, cl, co, dk, fi, fr, de, in, id, ie, it, jp, mx, nz, no, ph, pl, es, se, nl, gb, us

### `spotify_podcasts_episode`

- **HTTP:** `GET /spotify-podcasts/episode`
- **What:** Retrieve Spotify podcast episode details. Returns normalized public episode metadata from Spotify's getEpisodeOrChapter Pathfinder response, with episode page, embed page, and anonymous oEmbed fallbacks when Pathfinder is unavailable. Provide either uri or id; defaults to a known public episode when omitted.
- **Params:** `id` (string, optional) — Spotify episode ID. Used when uri is omitted; `uri` (string, optional) — Spotify episode URI or open.spotify.com episode URL

### `spotify_podcasts_home`

- **HTTP:** `GET /spotify-podcasts/home`
- **What:** Retrieve Spotify Podcasts home. Returns normalized sections and items from Spotify's podcast home browsePage Pathfinder response.
- **Params:** `include_episode_content_ratings_v2` (boolean, optional) — Include Spotify episode content ratings v2; `page_limit` (integer, optional) — Page pagination limit, clamped to 1-50; `page_offset` (integer, optional) — Page pagination offset; `section_limit` (integer, optional) — Section pagination limit, clamped to 1-50; `section_offset` (integer, optional) — Section pagination offset; `uri` (string, optional) — Spotify page or genre URI

### `spotify_podcasts_search`

- **HTTP:** `GET /spotify-podcasts/search`
- **What:** Search Spotify Podcasts. Returns normalized Spotify podcast shows, episodes, and top results for a search term.
- **Params:** `include_album_pre_releases` (boolean, optional) — Include album pre-release results; `include_audiobooks` (boolean, optional) — Include audiobooks; `include_authors` (boolean, optional) — Include authors; `include_episode_content_ratings_v2` (boolean, optional) — Include Spotify episode content ratings v2; `include_pre_releases` (boolean, optional) — Include pre-release results; `limit` (integer, optional) — Result limit, clamped to 1-50; `number_of_top_results` (integer, optional) — Top result limit, clamped to 1-50; `offset` (integer, optional) — Search offset; `q` (string, **required**) — Podcast search term

### `spotify_podcasts_show`

- **HTTP:** `GET /spotify-podcasts/show`
- **What:** Retrieve Spotify podcast show metadata. Returns normalized podcast show metadata from Spotify Pathfinder.
- **Params:** `include_content_capability_trait` (boolean, optional) — Include content capability trait; `include_episode_content_ratings_v2` (boolean, optional) — Include Spotify episode content ratings v2; `uri` (string, optional) — Spotify show URI

### `spotify_podcasts_show_episodes`

- **HTTP:** `GET /spotify-podcasts/show/episodes`
- **What:** Retrieve Spotify podcast show episodes. Returns normalized podcast episodes for a Spotify show URI.
- **Params:** `include_episode_content_ratings_v2` (boolean, optional) — Include Spotify episode content ratings v2; `limit` (integer, optional) — Episode limit, clamped to 1-50; `offset` (integer, optional) — Episode offset; `uri` (string, optional) — Spotify show URI

### `spotify_podcasts_show_recommendations`

- **HTTP:** `GET /spotify-podcasts/show/recommendations`
- **What:** Retrieve Spotify podcast recommendations. Returns normalized related Spotify shows and episodes from Spotify's show recommendations response.
- **Params:** `uri` (string, optional) — Spotify show URI

## TikTok (23)

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
- **Params:** `cursor` (integer, optional) — Pagination cursor; `id` (string, **required**) — Hashtag id returned by the hashtag detail endpoint

### `tiktok_comments`

- **HTTP:** `GET /tiktok/comments`
- **What:** Retrieve TikTok video comments. Returns top-level TikTok video comments with cursor-based pagination.
- **Params:** `aweme_id` (string, **required**) — TikTok video id from the video URL; `cursor` (integer, optional) — Pagination cursor

### `tiktok_explore`

- **HTTP:** `GET /tiktok/explore/{id}`
- **What:** Retrieve the TikTok explore feed for a category. Returns explore videos for a TikTok category id from the category endpoint.
- **Params:** `id` (integer, **required**) — Category type id returned by the category endpoint

### `tiktok_popular_trend_country_industry_meta`

- **HTTP:** `GET /tiktok/popular-trend/country-industry-meta`
- **What:** Retrieve TikTok popular-trend country and industry metadata. Returns the country and industry metadata used by the TikTok Creative Center popular-trend endpoints.
- **Params:** _none_

### `tiktok_post`

- **HTTP:** `GET /tiktok/post/{id}`
- **What:** Retrieve TikTok video details. Returns the TikTok video detail payload for a video id.
- **Params:** `id` (string, **required**) — TikTok video id

### `tiktok_posts`

- **HTTP:** `GET /tiktok/posts`
- **What:** Retrieve posts from a TikTok profile. Returns posts from a TikTok profile by `secUid`, with optional cursor pagination and sort mode.
- **Params:** `cursor` (integer, optional) — Pagination cursor; `secUid` (string, **required**) — TikTok secUid for the profile; `sort_type` (integer, optional) — Sort mode: 0 latest, 1 popular, 2 oldest

### `tiktok_profile`

- **HTTP:** `GET /tiktok/profile/{handler}`
- **What:** Retrieve a TikTok profile. Returns the TikTok profile payload for a public handle.
- **Params:** `handler` (string, **required**) — TikTok handle without the leading @

### `tiktok_search`

- **HTTP:** `GET /tiktok/search`
- **What:** Search TikTok videos. Searches TikTok videos by keyword with cursor-based pagination.
- **Params:** `count` (integer, optional) — Result count, clamped to 50; `cursor` (integer, optional) — Pagination cursor; `keyword` (string, **required**) — Search keyword

### `tiktok_search_hashtag`

- **HTTP:** `GET /tiktok/search/hashtag`
- **What:** Search TikTok hashtags. Searches TikTok hashtags/challenges by keyword with cursor-based pagination.
- **Params:** `count` (integer, optional) — Result count, clamped to 50; `cursor` (integer, optional) — Pagination cursor; `keyword` (string, **required**) — Search keyword

### `tiktok_search_user`

- **HTTP:** `GET /tiktok/search/user`
- **What:** Search TikTok users. Searches TikTok users by keyword with cursor-based pagination.
- **Params:** `cursor` (integer, optional) — Pagination cursor; `keyword` (string, **required**) — Search keyword

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
- **Params:** `ad_format` (string, optional) — Ad format id; `ad_language` (string, optional) — Ad language id or comma-separated ids from /tiktok/top-ads/filters; `country_code` (string, optional) — Country code or comma-separated country codes from /tiktok/top-ads/filters; `duration` (string, optional) — Video duration bucket; `industry` (string, optional) — Industry filter id or comma-separated ids from /tiktok/top-ads/filters; `keyword` (string, optional) — Brand or product keyword search; `like` (string, optional) — Like percentile bucket id or comma-separated ids; `limit` (integer, optional) — Maximum number of ads to return; `objective` (string, optional) — Objective filter id or comma-separated ids from /tiktok/top-ads/filters; `order_by` (string, optional) — Sort order; `page` (integer, optional) — Page number; `pattern_label` (string, optional) — Pattern label id or comma-separated ids from /tiktok/top-ads/filters; `period` (integer, optional) — Lookback period in days

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
- **Params:** `limit` (integer, optional) — Maximum number of ads to return; `material_id` (string, **required**) — Top Ads material id; `page` (integer, optional) — Page number

### `tiktok_top_ads_safety`

- **HTTP:** `GET /tiktok/top-ads/safety`
- **What:** Retrieve TikTok Top Ads safety configuration. Returns public Creative Center safety configuration flags related to search surfaces.
- **Params:** _none_

### `tiktok_top_ads_spotlight`

- **HTTP:** `GET /tiktok/top-ads/spotlight`
- **What:** Retrieve TikTok Top Ads Spotlight. Returns Top Ads Spotlight materials handpicked by TikTok Creative Center.
- **Params:** `limit` (integer, optional) — Maximum number of ads to return; `page` (integer, optional) — Page number

### `tiktok_top_ads_suggestions`

- **HTTP:** `GET /tiktok/top-ads/suggestions`
- **What:** Retrieve TikTok Top Ads suggestions. Returns Top Ads search suggestions from TikTok Creative Center.
- **Params:** `count` (integer, optional) — Maximum number of suggestions to return; `scenario` (integer, optional) — Suggestion scenario id

### `tiktok_trending`

- **HTTP:** `GET /tiktok/trending`
- **What:** Retrieve TikTok trending posts. Returns the current TikTok trending feed.
- **Params:** _none_

## TripAdvisor (6)

### `tripadvisor_autocomplete`

- **HTTP:** `GET /tripadvisor/autocomplete`
- **What:** Autocomplete TripAdvisor locations and places. Returns normalized TripAdvisor public typeahead candidates from the credential-free GraphQL endpoint.
- **Params:** `limit` (integer, optional) — Maximum results; `locale` (string, optional) — TripAdvisor locale; `q` (string, **required**) — Autocomplete query; `route_uid` (string, optional) — Optional captured route uid; `scope_geo_id` (integer, optional) — Optional scoped geo id; `search_session_id` (string, optional) — Optional captured search session id; `type` (string, optional) — Optional result type hint; `typeahead_id` (string, optional) — Optional captured typeahead id

### `tripadvisor_enums`

- **HTTP:** `GET /tripadvisor/enums`
- **What:** Get TripAdvisor enum metadata. Returns supported TripAdvisor enum values for place/listing filters, including locales, currencies, languages, listing types, filters, amenities, and category ids.
- **Params:** _none_

### `tripadvisor_hotels`

- **HTTP:** `GET /tripadvisor/hotels`
- **What:** Search TripAdvisor hotels. Returns normalized TripAdvisor hotel listing results from public credential-free GraphQL listing data.
- **Params:** `amenities` (array, optional) — Amenity filter ids; `class` (integer, optional) — Hotel class filter; `currency` (string, optional) — Currency code; `filter_id` (string, optional) — Optional filter id such as class or ufe; `geo_id` (integer, **required**) — TripAdvisor geo id; `limit` (integer, optional) — Maximum results; `offset` (integer, optional) — Zero-based result offset; `price_max` (integer, optional) — Maximum price filter; `price_min` (integer, optional) — Minimum price filter; `pricing_mode` (string, optional) — Pricing mode; `sort` (string, optional) — Sort value; `travelers_choice` (boolean, optional) — Filter Travelers' Choice properties; `travelers_choice_botb` (boolean, optional) — Filter Best of the Best properties

### `tripadvisor_place`

- **HTTP:** `GET /tripadvisor/place`
- **What:** Get TripAdvisor place. Returns a rich normalized TripAdvisor place profile from public place HTML, using configured browser fallbacks when direct HTML is blocked.
- **Params:** `id` (string, optional) — TripAdvisor location id fallback; `url` (string, optional) — TripAdvisor place URL

### `tripadvisor_reviews`

- **HTTP:** `GET /tripadvisor/reviews`
- **What:** Get TripAdvisor reviews. Returns normalized TripAdvisor public reviews from credential-free GraphQL review data. Pass either id or url.
- **Params:** `do_machine_translation` (boolean, optional) — Enable upstream machine translation; `id` (string, optional) — TripAdvisor location id; `language` (string, optional) — Review language; `limit` (integer, optional) — Maximum reviews; `page` (integer, optional) — 1-based review page; `photos_per_review_limit` (integer, optional) — Maximum photos per review; `ratings` (array, optional) — Rating filters; `sort_by` (string, optional) — Review sort field; `sort_type` (string, optional) — Review sort type; `url` (string, optional) — TripAdvisor place URL

### `tripadvisor_search`

- **HTTP:** `GET /tripadvisor/search`
- **What:** Search TripAdvisor places. Returns normalized TripAdvisor place listings for hotels, restaurants, attractions, and supported attraction category types.
- **Params:** `amenities` (array, optional) — Hotel amenity filter ids; `class` (integer, optional) — Hotel class filter; `currency` (string, optional) — Currency code; `establishment_types` (array, optional) — Restaurant establishment type ids; `filter_id` (string, optional) — Optional hotel filter id; `geo_id` (integer, **required**) — TripAdvisor geo id; `limit` (integer, optional) — Maximum results; `locale` (string, optional) — TripAdvisor locale; `offset` (integer, optional) — Zero-based result offset; `online_options` (array, optional) — Restaurant online option ids; `price_max` (integer, optional) — Maximum hotel price filter; `price_min` (integer, optional) — Minimum hotel price filter; `pricing_mode` (string, optional) — Hotel pricing mode; `restaurant_date` (string, optional) — Restaurant availability date; `restaurant_guests` (integer, optional) — Restaurant guest count; `restaurant_time` (string, optional) — Restaurant availability time; `sort` (string, optional) — Sort value; `travelers_choice` (boolean, optional) — Filter Travelers' Choice hotels; `travelers_choice_botb` (boolean, optional) — Filter Best of the Best hotels; `type` (string, **required**) — Listing type

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
- **Params:** `date_from` (string, optional) — Date range start in YYYY-MM-DD; currently rejected by upstream; `date_to` (string, optional) — Date range end in YYYY-MM-DD; currently rejected by upstream; `language` (string, optional) — Review language code used by Trustpilot; `page` (integer, optional) — 1-based page number; defaults to 1; `q` (string, optional) — Text search within reviews; `replied` (boolean, optional) — Filter to reviews with business replies; `slug` (string, **required**) — Trustpilot business slug; `stars` (integer, optional) — Filter by star rating from 1 to 5; `verified` (boolean, optional) — Filter to verified reviews

### `trustpilot_business_search`

- **HTTP:** `GET /trustpilot/business-units/search`
- **What:** Search Trustpilot business units. Returns normalized business-unit search results from Trustpilot's JSON business-unit search API.
- **Params:** `country` (string, optional) — Two-letter country code; defaults to US; `page` (integer, optional) — 1-based page number; defaults to 1; `page_size` (integer, optional) — Results per page; defaults to 20, maximum 100; `q` (string, **required**) — Search query

### `trustpilot_categories`

- **HTTP:** `GET /trustpilot/categories`
- **What:** Get Trustpilot categories. Returns the Trustpilot public category index grouped by top-level category.
- **Params:** _none_

### `trustpilot_category`

- **HTTP:** `GET /trustpilot/category/{slug}`
- **What:** Get Trustpilot category detail. Returns category metadata, company cards, and side rails from Trustpilot's public category page.
- **Params:** `page` (integer, optional) — 1-based page number; defaults to 1; `slug` (string, **required**) — Trustpilot category slug

### `trustpilot_category_search`

- **HTTP:** `GET /trustpilot/categories/search`
- **What:** Search Trustpilot categories. Returns normalized category search results from Trustpilot's JSON category search API.
- **Params:** `country` (string, optional) — Two-letter country code; defaults to US; `locale` (string, optional) — Locale in ll-CC format; defaults to en-US; `q` (string, **required**) — Search query; `size` (integer, optional) — Maximum number of categories; defaults to 20

## Usage (4)

### `usage_endpoints`

- **HTTP:** `GET /usage/me/endpoints`
- **What:** Get current user's endpoint usage breakdown. Returns per-endpoint request and credit totals for the selected UTC time range, ordered by request volume.
- **Params:** `from` (string, optional) — Custom lower bound in RFC3339 format when range=custom; `limit` (integer, optional) — Maximum endpoints to return. Defaults to 20 and clamps to 100.; `range` (string, optional) — Time range preset. Defaults to the current billing period.; `to` (string, optional) — Custom upper bound in RFC3339 format when range=custom

### `usage_overview`

- **HTTP:** `GET /usage/me/overview`
- **What:** Get current user's usage overview. Returns a JWT-authenticated user's current billing snapshot plus recent request and credit consumption metrics for the selected UTC time range. The `requests` summary is limited to product API traffic and excludes console, billing, usage, and user-management endpoints.
- **Params:** `from` (string, optional) — Custom lower bound in RFC3339 format when range=custom; `range` (string, optional) — Time range preset. Defaults to the current billing period.; `to` (string, optional) — Custom upper bound in RFC3339 format when range=custom

### `usage_recent_ips`

- **HTTP:** `GET /usage/me/recent-ips`
- **What:** Get current user's recent API client IPs. Returns recent client IP addresses observed for the JWT-authenticated user's product API traffic, ordered by last seen time. Console, billing, usage, and user-management endpoints are excluded.
- **Params:** `from` (string, optional) — Custom lower bound in RFC3339 format when range=custom; `limit` (integer, optional) — Maximum IPs to return. Defaults to 20 and clamps to 100.; `range` (string, optional) — Time range preset. Defaults to the current billing period.; `to` (string, optional) — Custom upper bound in RFC3339 format when range=custom

### `usage_timeseries`

- **HTTP:** `GET /usage/me/timeseries`
- **What:** Get current user's usage timeseries. Returns JWT-authenticated request and credit consumption buckets for chart rendering. Results use UTC buckets.
- **Params:** `bucket` (string, optional) — Bucket size. Defaults to hour for day range and day otherwise.; `endpoint` (string, optional) — Optional endpoint filter; `from` (string, optional) — Custom lower bound in RFC3339 format when range=custom; `range` (string, optional) — Time range preset. Defaults to the current billing period.; `to` (string, optional) — Custom upper bound in RFC3339 format when range=custom

## Web (1)

### `web_scrape`

- **HTTP:** `POST /web/scrape`
- **What:** Scrape a URL into markdown, HTML, links or metadata. Fetches a single public URL and returns clean content in the requested formats (markdown, html, raw_html, links, metadata). With render=auto the request starts as a fast HTTP fetch and escalates to a real browser when the page is blocked or rendered with JavaScript. only_main_content (default true) strips navigation, headers, footers and other boilerplate before conversion. Only public pages are supported; respect each site's terms of use and robots directives.
- **Params:** `scrapeOption` (object, **required**) — Scrape options

## X (3)

### `x_post`

- **HTTP:** `GET /x/post/{id}`
- **What:** Retrieve an X post. Returns a public X post by numeric post id, including author, text, visible metrics, and a quoted post preview when present.
- **Params:** `id` (string, **required**) — X post id; `username` (string, optional) — Expected author username. When provided, mismatched authors return 404.

### `x_profile`

- **HTTP:** `GET /x/profile/{username}`
- **What:** Retrieve an X profile. Returns public profile details for an X username, including visible counts and profile media when available.
- **Params:** `username` (string, **required**) — X username

### `x_profile_posts`

- **HTTP:** `GET /x/profile/{username}/posts`
- **What:** List public X profile posts. Returns posts present in the first public profile page payload for an X username. The endpoint does not paginate replies, media-only tabs, or search results.
- **Params:** `limit` (integer, optional) — Maximum posts returned from the first page payload. Defaults to 20 and must be 1-50.; `username` (string, **required**) — X username

## Yahoo Finance (39)

### `yahoo_finance_calendar_results`

- **HTTP:** `GET /yahoo-finance/calendars/{type}`
- **What:** Yahoo Finance calendar results. Returns global Yahoo Finance calendar rows for earnings, IPOs, economic events, or splits.
- **Params:** `end` (string, optional) — End date as YYYY-MM-DD, RFC3339, or Unix seconds; `filter_most_active` (boolean, optional) — Earnings-only most-active filter, default true; `limit` (integer, optional) — Result count, max 100; `market_cap` (number, optional) — Earnings-only market cap minimum; `offset` (integer, optional) — Result offset; `start` (string, optional) — Start date as YYYY-MM-DD, RFC3339, or Unix seconds; `type` (string, **required**) — Calendar type: earnings, ipo, economic-events, or splits

### `yahoo_finance_calendars`

- **HTTP:** `GET /yahoo-finance/calendars`
- **What:** Yahoo Finance calendar types. Lists global Yahoo Finance calendar types supported by this integration.
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
- **Params:** `count` (integer, optional) — Result count; `query` (string, **required**) — Ticker symbol or company name; `start` (integer, optional) — Result offset; `type` (string, optional) — Instrument type filter

### `yahoo_finance_market_status`

- **HTTP:** `GET /yahoo-finance/market/{market}/status`
- **What:** Yahoo Finance market status. Returns Yahoo Finance open/close status for a market such as US.
- **Params:** `market` (string, **required**) — Market such as US

### `yahoo_finance_market_summary`

- **HTTP:** `GET /yahoo-finance/market/{market}/summary`
- **What:** Yahoo Finance market summary. Returns Yahoo Finance market summary rows for a market such as US.
- **Params:** `market` (string, **required**) — Market such as US

### `yahoo_finance_screener`

- **HTTP:** `GET /yahoo-finance/screener/{id}`
- **What:** Yahoo Finance predefined screener results. Runs a predefined Yahoo Finance screener such as day_gainers or most_actives.
- **Params:** `count` (integer, optional) — Result count; `id` (string, **required**) — Predefined screener id; `offset` (integer, optional) — Result offset; `sort_asc` (boolean, optional) — Sort ascending; `sort_field` (string, optional) — Sort field for offset/customized runs

### `yahoo_finance_screener_custom`

- **HTTP:** `POST /yahoo-finance/screener`
- **What:** Yahoo Finance custom screener. Runs a constrained Yahoo Finance custom screener query using Yahoo's public screener JSON shape.
- **Params:** `request` (object, **required**) — Custom screener request

### `yahoo_finance_screeners`

- **HTTP:** `GET /yahoo-finance/screeners`
- **What:** Yahoo Finance predefined screeners. Lists the predefined screeners supported by the Yahoo Finance integration.
- **Params:** _none_

### `yahoo_finance_search`

- **HTTP:** `GET /yahoo-finance/search`
- **What:** Yahoo Finance search. Returns normalized Yahoo Finance quotes, news, lists, and optional research reports for a query.
- **Params:** `enable_fuzzy_query` (boolean, optional) — Enable fuzzy matching; `include_research` (boolean, optional) — Include research reports when Yahoo returns them; `lists_count` (integer, optional) — List result count; `news_count` (integer, optional) — News result count; `q` (string, **required**) — Ticker symbol or company name; `quotes_count` (integer, optional) — Quote result count

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
- **What:** Yahoo Finance calendar. Returns Yahoo Finance calendar events for a symbol.
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
- **What:** Yahoo Finance earnings. Returns Yahoo Finance earnings modules for a symbol.
- **Params:** `symbol` (string, **required**) — Yahoo Finance symbol such as AAPL

### `yahoo_finance_ticker_earnings_dates`

- **HTTP:** `GET /yahoo-finance/ticker/{symbol}/earnings-dates`
- **What:** Yahoo Finance earnings dates. Returns standalone earnings-date rows from Yahoo Finance calendar HTML when Yahoo serves the table.
- **Params:** `limit` (integer, optional) — Result count, max 100; `offset` (integer, optional) — Result offset; `symbol` (string, **required**) — Yahoo Finance symbol such as AAPL

### `yahoo_finance_ticker_financials`

- **HTTP:** `GET /yahoo-finance/ticker/{symbol}/financials`
- **What:** Yahoo Finance financial statements. Returns annual, quarterly, or supported trailing income, balance sheet, or cash flow statement data.
- **Params:** `period` (string, optional) — annual, quarterly, or trailing; `statement` (string, optional) — income, balance-sheet, or cash-flow; `symbol` (string, **required**) — Yahoo Finance symbol such as AAPL

### `yahoo_finance_ticker_funds`

- **HTTP:** `GET /yahoo-finance/ticker/{symbol}/funds`
- **What:** Yahoo Finance fund data. Returns fund profile, top holdings, equity/bond holdings, and sector weighting modules for ETF and mutual fund symbols.
- **Params:** `symbol` (string, **required**) — Yahoo Finance symbol such as SPY

### `yahoo_finance_ticker_history`

- **HTTP:** `GET /yahoo-finance/ticker/{symbol}/history`
- **What:** Yahoo Finance historical prices. Returns normalized OHLCV points for a symbol. Use either period or start/end.
- **Params:** `auto_adjust` (boolean, optional) — Adjust OHLC prices with adjusted close; `back_adjust` (boolean, optional) — Back-adjust OHLC prices while keeping close; `end` (string, optional) — Unix seconds, RFC3339, or YYYY-MM-DD; `include_actions` (boolean, optional) — Include dividends, splits, and capital gains; `include_prepost` (boolean, optional) — Include pre/post market data; `interval` (string, optional) — Interval such as 1d, 1h, 5m; `keepna` (boolean, optional) — Keep fully empty chart rows; `period` (string, optional) — Range such as 1d, 1mo, 1y, max; `rounding` (boolean, optional) — Round prices to two decimals; `start` (string, optional) — Unix seconds, RFC3339, or YYYY-MM-DD; `symbol` (string, **required**) — Yahoo Finance symbol such as AAPL

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
- **Params:** `count` (integer, optional) — News result count; `symbol` (string, **required**) — Yahoo Finance symbol such as AAPL; `tab` (string, optional) — News tab: news, all, or press_releases

### `yahoo_finance_ticker_options`

- **HTTP:** `GET /yahoo-finance/ticker/{symbol}/options`
- **What:** Yahoo Finance options chain. Returns option expiration dates and the current option chain for a symbol.
- **Params:** `symbol` (string, **required**) — Yahoo Finance symbol such as AAPL

### `yahoo_finance_ticker_options_expiration`

- **HTTP:** `GET /yahoo-finance/ticker/{symbol}/options/{expiration}`
- **What:** Yahoo Finance options chain by expiration. Returns calls and puts for a specific Unix expiration timestamp.
- **Params:** `expiration` (string, **required**) — Unix expiration timestamp; `symbol` (string, **required**) — Yahoo Finance symbol such as AAPL

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
- **Params:** `end` (string, optional) — End date as YYYY-MM-DD, RFC3339, or Unix seconds; `start` (string, optional) — Start date as YYYY-MM-DD, RFC3339, or Unix seconds; `symbol` (string, **required**) — Yahoo Finance symbol such as AAPL

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
- **Params:** `count` (integer, optional) — Symbol count; `region` (string, **required**) — Region such as US

## YouTube (13)

### `youtube_captions`

- **HTTP:** `GET /youtube/captions/{id}`
- **What:** Retrieve auto-generated or human captions. Returns the caption cues for a specific YouTube video.
- **Params:** `id` (string, **required**) — YouTube video ID (11-character code); `lang` (string, optional) — Caption language code (ISO 639-1), defaults to **en**

### `youtube_channel_playlists`

- **HTTP:** `GET /youtube/channel/{id}/playlists`
- **What:** Retrieve the playlists tab for a YouTube channel. Returns normalized playlist items from a channel's Playlists tab and an optional continuation token.
- **Params:** `continuation_token` (string, optional) — Pagination token returned by a previous request; `id` (string, **required**) — Channel ID, @handle, /c path, /user path, or full YouTube channel URL

### `youtube_channel_search`

- **HTTP:** `GET /youtube/channel/{id}/search`
- **What:** Search within a YouTube channel. Returns normalized video search items scoped to a specific channel, including the resolved top-level `query`.
- **Params:** `continuation_token` (string, optional) — Pagination token returned by a previous request; `id` (string, **required**) — Channel ID, @handle, /c path, /user path, or full YouTube channel URL; `q` (string, **required**) — Search query

### `youtube_channel_shorts`

- **HTTP:** `GET /youtube/channel/{id}/shorts`
- **What:** Retrieve the shorts tab for a YouTube channel. Returns normalized short-form video entries from a channel's Shorts tab.
- **Params:** `id` (string, **required**) — Channel ID, @handle, /c path, /user path, or full YouTube channel URL

### `youtube_channel_videos`

- **HTTP:** `GET /youtube/channel/{id}/videos`
- **What:** Retrieve the videos tab for a YouTube channel. Returns normalized video items from a channel's Videos tab and an optional continuation token.
- **Params:** `continuation_token` (string, optional) — Pagination token returned by a previous request; `id` (string, **required**) — Channel ID, @handle, /c path, /user path, or full YouTube channel URL

### `youtube_comments`

- **HTTP:** `GET /youtube/comments/{id}`
- **What:** Retrieve video comments (top-level & replies). Returns a page of comments for a specific YouTube video.
- **Params:** `continuation_token` (string, optional) — Pagination token returned by a previous request, first page if empty; `id` (string, **required**) — YouTube video ID (11-character code)

### `youtube_playlist`

- **HTTP:** `GET /youtube/playlist/{id}`
- **What:** Retrieve playlist metadata and items. Returns playlist metadata, normalized video items, and an optional continuation token for pagination.
- **Params:** `continuation_token` (string, optional) — Pagination token returned by a previous request; `id` (string, **required**) — YouTube playlist ID or full playlist URL

### `youtube_profile`

- **HTTP:** `GET /youtube/profile/{id}`
- **What:** Retrieve channel profile. Returns full profile details for a YouTube channel.
- **Params:** `id` (string, **required**) — Channel ID, @handle, /c path, /user path, bare username, or full YouTube channel URL

### `youtube_search`

- **HTTP:** `GET /youtube/search`
- **What:** Search YouTube. Returns normalized YouTube search results using YouTube's InnerTube search API. Pass `continuation_token` from a previous response to retrieve the next page. Use `q` as the primary query parameter; `search_query` is accepted as an alias.
- **Params:** `continuation_token` (string, optional) — Pagination token returned by a previous request; `duration` (string, optional) — Filter by duration; `features` (string, optional) — Comma-separated feature filters; `params` (string, optional) — Raw protobuf-encoded search filter (base64); `q` (string, optional) — Search query; `search_query` (string, optional) — Alias for q; `sort_by` (string, optional) — Sort results; `type` (string, optional) — Filter by type; `upload_date` (string, optional) — Filter by upload date

### `youtube_tag`

- **HTTP:** `GET /youtube/tag/{tag}`
- **What:** Retrieve YouTube videos by tag. Returns normalized videos from the public YouTube hashtag page for the supplied tag. Set `type=shorts` to use the Shorts tab, or pass `continuation_token` from a previous response to fetch the next page.
- **Params:** `continuation_token` (string, optional) — Continuation token for pagination, first page if empty; `tag` (string, **required**) — Tag to filter videos; `type` (string, optional) — Result tab to load

### `youtube_transcript`

- **HTTP:** `GET /youtube/transcript/{id}`
- **What:** Retrieve transcript for a YouTube video. Returns transcript segments for a YouTube video using YouTube's native player captions. Set `format=text`, `format=srt`, or `format=vtt` to receive plain-text output instead of the standard response envelope.
- **Params:** `format` (string, optional) — Response format; `id` (string, **required**) — YouTube video ID (11-character code); `lang` (string, optional) — Preferred transcript language; `timestamps` (boolean, optional) — Include timestamps in the JSON response; `translate_to` (string, optional) — Translate transcript to this language code

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
- **Params:** `limit` (integer, optional) — Maximum results, clamped to 20; `query` (string, **required**) — Location query; `status` (string, optional) — Search context: for_sale, for_rent, or sold

### `zillow_property`

- **HTTP:** `GET /zillow/property/{zpid}`
- **What:** Get Zillow property. Returns normalized Zillow public property details using Zillow's public persisted GraphQL property payload, including optional typed sections for address parts, listing attribution, pricing, history, media, facts, schools, and nearby homes when present.
- **Params:** `zpid` (string, **required**) — Zillow property id

### `zillow_search`

- **HTTP:** `GET /zillow/search`
- **What:** Search Zillow listings. Returns normalized Zillow public listing search results. Callers must pass complete map bounds from autocomplete when available, or a region id fallback.
- **Params:** `east` (number, optional) — Map east bound from autocomplete; `location` (string, **required**) — Display location; `north` (number, optional) — Map north bound from autocomplete; `page` (integer, optional) — 1-based page; `region_id` (integer, optional) — Zillow region id from autocomplete, used when complete bounds are not provided; `region_type` (integer, optional) — Zillow region type from autocomplete, used with region_id fallback; `south` (number, optional) — Map south bound from autocomplete; `status` (string, optional) — Search context: for_sale, for_rent, or sold; `west` (number, optional) — Map west bound from autocomplete
