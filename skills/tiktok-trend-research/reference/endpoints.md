# tiktok-trend-research — endpoint reference

> Generated from `scripts/tools.json` by `scripts/generate.mjs` — do not edit by hand.

Only the endpoints used by this workflow. Call them via `scripts/crawlora.sh` (see SKILL.md).

All paths are relative to the API base `https://api.crawlora.net/api/v1` and require the header `x-api-key: $CRAWLORA_API_KEY`. Path params like `{id}` are substituted into the URL; `GET` params go in the query string; `POST` params go in a JSON body.

**11 endpoints across 1 platform group(s).**

## TikTok (11)

### `tiktok_category`

- **HTTP:** `GET /tiktok/category`
- **What:** List TikTok explore categories. Returns the content categories shown on TikTok's Explore page. Each entry has the category name and its numeric type code. Takes no parameters.
- **Params:** _none_

### `tiktok_challenge`

- **HTTP:** `GET /tiktok/hashtag/{name}`
- **What:** Retrieve TikTok hashtag details. Returns the details of a TikTok hashtag page by `name`, for example `christmas`. The response carries `challengeInfo` with the hashtag's metadata, such as cover images, and `shareMeta` with the share title and description. The hashtag id found here feeds `tiktok-challenge-list`.
- **Params:** `name` (string, **required**) — Hashtag name (e.g., 'christmas')

### `tiktok_challenge_list`

- **HTTP:** `GET /tiktok/hashtags`
- **What:** Retrieve TikTok hashtag posts. Lists the videos posted under a TikTok hashtag, identified by the hashtag `id` from the hashtag detail endpoint. `cursor` defaults to 0. The response has `itemList`, `hasMore` and a `cursor`; pass that cursor back to fetch the next page.
- **Params:** `cursor` (integer, optional) — Pagination cursor; `id` (string, **required**) — Hashtag id returned by the hashtag detail endpoint

### `tiktok_creative_center_hashtags`

- **HTTP:** `GET /tiktok/creative-center/hashtags`
- **What:** Retrieve TikTok Creative Center trending hashtags. Returns TikTok Creative Center's ranked trending hashtags for a country, period, and optional industry. TikTok gates this endpoint's full result set behind a logged-in TikTok One account: an anonymous request always receives at most 3 hashtags per filter combination regardless of country, period, or industry, so selecting an industry returns that industry's own ranked top three. See the filters endpoint for the complete country, period, and industry value lists.
- **Params:** `country_code` (string, **required**) — ISO-2 country code; `industry_id` (string, optional) — Creative Center industry id to restrict the ranking to; `period` (integer, optional) — Lookback window in days

### `tiktok_creative_center_videos`

- **HTTP:** `GET /tiktok/creative-center/videos`
- **What:** Retrieve TikTok Creative Center trending videos. Returns TikTok Creative Center's ranked trending videos for a country, period, sort order, and optional content tags. TikTok reports the true result-set size (see total_count/page_count in the response) but gates access to it behind a logged-in TikTok One account: an anonymous request always receives page 1 (4 videos) regardless of sort order or period. Country coverage is uneven: only US, JP, ID, VN, and TH have a regional edge host that returns populated results; other countries return an empty videos array (a genuine no-data response, not an error). See the filters endpoint for the complete country, period, sort, and content tag value lists.
- **Params:** `content_label_id` (string, optional) — Deprecated: single content tag id; use content_label_ids instead; `content_label_ids` (array, optional) — Content tag ids to filter by, repeatable; matches videos carrying any selected tag; `country_code` (string, **required**) — ISO-2 country code; `organic_only` (boolean, optional) — Restrict to organic (non-paid) videos only; `period` (integer, optional) — Lookback window in days; `sort_by` (string, optional) — Sort order

### `tiktok_explore`

- **HTTP:** `GET /tiktok/explore/{id}`
- **What:** Retrieve the TikTok explore feed for a category. Returns the TikTok explore feed for a category, given its category type `id` from the category endpoint. The response has `itemList` with the videos, `hasMore` and a `cursor`. A feed that comes back empty is reported as an upstream error, not as an empty list.
- **Params:** `id` (integer, **required**) — Category type id returned by the category endpoint

### `tiktok_popular_trend_country_industry_meta`

- **HTTP:** `GET /tiktok/popular-trend/country-industry-meta`
- **What:** Retrieve TikTok popular-trend country and industry metadata. Lists the country and industry filter values used by the TikTok Creative Center popular-trend endpoints. Countries have an `id` such as `AR` and a name; industries have a numeric `id` and a name such as Apparel & Accessories. A maintained fallback list is returned if TikTok's own metadata is unavailable.
- **Params:** _none_

### `tiktok_post`

- **HTTP:** `GET /tiktok/post/{id}`
- **What:** Retrieve TikTok video details. Returns TikTok's detail record for one video by video id. `itemInfo.itemStruct` holds the video's description, the author's profile and the author's statistics (such as followers, following and hearts) along with the rest of TikTok's video object; `shareMeta` holds the share title and description.
- **Params:** `id` (string, **required**) — TikTok video id

### `tiktok_search`

- **HTTP:** `GET /tiktok/search`
- **What:** Search TikTok videos. Searches TikTok videos for `keyword`. `cursor` defaults to 0 and `count` defaults to 20, capped at 50. The response has the matching video items, a `cursor` and `has_more` for paging. An empty, blocked or malformed result from TikTok returns an upstream error.
- **Params:** `count` (integer, optional) — Result count, clamped to 50; `cursor` (integer, optional) — Pagination cursor; `keyword` (string, **required**) — Search keyword

### `tiktok_search_hashtag`

- **HTTP:** `GET /tiktok/search/hashtag`
- **What:** Search TikTok hashtags. Searches TikTok hashtags (challenges) for `keyword`. `cursor` defaults to 0 and `count` defaults to 20, capped at 50. The response has `challenge_list` with each hashtag's name and id, plus a `cursor` and `has_more` for paging. An empty, blocked or malformed result returns an upstream error.
- **Params:** `count` (integer, optional) — Result count, clamped to 50; `cursor` (integer, optional) — Pagination cursor; `keyword` (string, **required**) — Search keyword

### `tiktok_trending`

- **HTTP:** `GET /tiktok/trending`
- **What:** Retrieve TikTok trending posts. Returns the current TikTok trending feed: `itemList` holds the videos, and `hasMore` and `cursor` describe paging. The response also has a `trendingTopics` field. Takes no parameters.
- **Params:** _none_
