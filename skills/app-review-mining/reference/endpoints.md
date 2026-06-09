# app-review-mining — endpoint reference

> Generated from `scripts/tools.json` by `scripts/generate.mjs` — do not edit by hand.

Endpoints this skill uses, grouped by platform. Call them via `scripts/crawlora.sh` (see SKILL.md).

All paths are relative to the API base `https://api.crawlora.net/api/v1` and require the header `x-api-key: $CRAWLORA_API_KEY`. Path params like `{id}` are substituted into the URL; `GET` params go in the query string; `POST` params go in a JSON body.

**20 endpoints across 2 platform group(s).**

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
