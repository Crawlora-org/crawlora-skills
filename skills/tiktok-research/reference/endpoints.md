# tiktok-research — endpoint reference

> Generated from `scripts/tools.json` by `scripts/generate.mjs` — do not edit by hand.

Endpoints this skill uses, grouped by platform. Call them via `scripts/crawlora.sh` (see SKILL.md).

All paths are relative to the API base `https://api.crawlora.net/api/v1` and require the header `x-api-key: $CRAWLORA_API_KEY`. Path params like `{id}` are substituted into the URL; `GET` params go in the query string; `POST` params go in a JSON body.

**27 endpoints across 1 platform group(s).**

## TikTok (27)

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

### `tiktok_comments`

- **HTTP:** `GET /tiktok/comments`
- **What:** Retrieve TikTok video comments. Returns the top-level comments on a TikTok video, by the video id from its URL (`aweme_id`). Results are paged by cursor: pass the `cursor` from one response to get the next page, and read `has_more` to see whether more remain. The response also carries the total comment count.
- **Params:** `aweme_id` (string, **required**) — TikTok video id from the video URL; `cursor` (integer, optional) — Pagination cursor

### `tiktok_creative_center_filters`

- **HTTP:** `GET /tiktok/creative-center/filters`
- **What:** Retrieve TikTok Creative Center filter taxonomy. Returns the complete filter taxonomy for the Creative Center trend endpoints: the countries each trend tab reports, the industry ids and video content tags the filters accept, the supported lookback periods, and the video sort metrics. Use it to discover valid values for the hashtags endpoint's country_code, period, and industry_id parameters and the videos endpoint's country_code, period, sort_by, and content_label_ids parameters. This endpoint performs no upstream request and has no parameters.
- **Params:** _none_

### `tiktok_creative_center_hashtags`

- **HTTP:** `GET /tiktok/creative-center/hashtags`
- **What:** Retrieve TikTok Creative Center trending hashtags. Returns TikTok Creative Center's ranked trending hashtags for a country, period, and optional industry. TikTok gates this endpoint's full result set behind a logged-in TikTok One account: an anonymous request always receives at most 3 hashtags per filter combination regardless of country, period, or industry, so selecting an industry returns that industry's own ranked top three. See the filters endpoint for the complete country, period, and industry value lists.
- **Params:** `country_code` (string, **required**) — ISO-2 country code; `industry_id` (string, optional) — Creative Center industry id to restrict the ranking to; `period` (integer, optional) — Lookback window in days

### `tiktok_creative_center_top_content`

- **HTTP:** `GET /tiktok/creative-center/top-content`
- **What:** Retrieve TikTok Creative Center top content. Returns TikTok Creative Center's current Top Content set: four top-performing branded videos, each with the video object (anonymous MP4 and cover URLs), engagement metrics, the author profile and follower count, and (by default) the video's top comments plus keyword mention counts derived from them. The set is a daily snapshot and there is no pagination or historical query; the four titles rotate when the snapshot changes. Set include_comments=false for a smaller response with only video, author, and metrics.
- **Params:** `include_comments` (boolean, optional) — Include each object's top comments and comment-keyword counts

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

### `tiktok_posts`

- **HTTP:** `GET /tiktok/posts`
- **What:** Retrieve posts from a TikTok profile. Lists posts from a TikTok profile identified by `secUid`. `sort_type` is `0` latest (default), `1` popular or `2` oldest. `cursor` defaults to 0. The response has `itemList`, `hasMore` and a `cursor` to pass back to fetch the next page.
- **Params:** `cursor` (integer, optional) — Pagination cursor; `secUid` (string, **required**) — TikTok secUid for the profile; `sort_type` (integer, optional) — Sort mode: 0 latest, 1 popular, 2 oldest

### `tiktok_profile`

- **HTTP:** `GET /tiktok/profile/{handler}`
- **What:** Retrieve a TikTok profile. Returns a public TikTok profile by `handler`, the username without the leading `@`. The `user` object has the id, `uniqueId`, nickname, signature, verified and private flags, region, language, avatar, bio link and `secUid`; `stats` has follower, following, heart, video and friend counts. A missing, deleted or banned handle returns 404.
- **Params:** `handler` (string, **required**) — TikTok handle without the leading @

### `tiktok_search`

- **HTTP:** `GET /tiktok/search`
- **What:** Search TikTok videos. Searches TikTok videos for `keyword`. `cursor` defaults to 0 and `count` defaults to 20, capped at 50. The response has the matching video items, a `cursor` and `has_more` for paging. An empty, blocked or malformed result from TikTok returns an upstream error.
- **Params:** `count` (integer, optional) — Result count, clamped to 50; `cursor` (integer, optional) — Pagination cursor; `keyword` (string, **required**) — Search keyword

### `tiktok_search_hashtag`

- **HTTP:** `GET /tiktok/search/hashtag`
- **What:** Search TikTok hashtags. Searches TikTok hashtags (challenges) for `keyword`. `cursor` defaults to 0 and `count` defaults to 20, capped at 50. The response has `challenge_list` with each hashtag's name and id, plus a `cursor` and `has_more` for paging. An empty, blocked or malformed result returns an upstream error.
- **Params:** `count` (integer, optional) — Result count, clamped to 50; `cursor` (integer, optional) — Pagination cursor; `keyword` (string, **required**) — Search keyword

### `tiktok_search_user`

- **HTTP:** `GET /tiktok/search/user`
- **What:** Search TikTok users. Searches TikTok users for `keyword`, with `cursor` (default 0) for paging. The response has `user_list` with the matching accounts, plus a `cursor` and `has_more` to continue. Pass the returned `cursor` back to fetch the next page.
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
- **What:** Retrieve TikTok Top Ads location info. Returns TikTok's inferred initial country and industry targeting context for Top Ads. Use it when you need starting targeting values; use the locations, filters, and list endpoints to choose criteria and retrieve ads.
- **Params:** `module` (integer, optional) — Optional upstream Creative Center module identifier; omitted or 0 defaults to 1, other nonzero IDs are passed through without local range validation

### `tiktok_top_ads_locations`

- **HTTP:** `GET /tiktok/top-ads/locations`
- **What:** Retrieve TikTok Top Ads locations. Lists the country filters offered by TikTok Creative Center Top Ads. Each country has an `id` such as `US`, a `value` (the country name), a `label` and a `has_conversion` flag. Takes no parameters.
- **Params:** _none_

### `tiktok_top_ads_recommend`

- **HTTP:** `GET /tiktok/top-ads/recommend`
- **What:** Retrieve TikTok Top Ads recommendations. Lists Top Ads materials that TikTok Creative Center recommends as related to the ad with `material_id`. `page` starts at 1; `limit` defaults to 20 and is capped at 100. Each ad has its title, brand, likes, comments, shares, CTR, objectives and video info. The list can be empty for a valid id.
- **Params:** `limit` (integer, optional) — Maximum number of ads to return; `material_id` (string, **required**) — Top Ads material id; `page` (integer, optional) — Page number

### `tiktok_top_ads_safety`

- **HTTP:** `GET /tiktok/top-ads/safety`
- **What:** Retrieve TikTok Top Ads safety configuration. Returns the Creative Center safety configuration flags for search: `top_ads_search`, `keyword_search`, `hashtag_search`, `creator_search`, `sound_search` and `cc_banner_key`. It carries feature flags only, not ad materials. Takes no parameters.
- **Params:** _none_

### `tiktok_top_ads_spotlight`

- **HTTP:** `GET /tiktok/top-ads/spotlight`
- **What:** Retrieve TikTok Top Ads Spotlight. Lists the Top Ads Spotlight materials that TikTok Creative Center hand-picks. `page` starts at 1; `limit` defaults to 20 and is capped at 100. Each ad has its title, brand, likes, comments, shares, CTR, objectives and video info. `data.pagination` gives the page, size, total and `has_more`.
- **Params:** `limit` (integer, optional) — Maximum number of ads to return; `page` (integer, optional) — Page number

### `tiktok_top_ads_suggestions`

- **HTTP:** `GET /tiktok/top-ads/suggestions`
- **What:** Retrieve TikTok Top Ads suggestions. Returns Top Ads search suggestions from TikTok Creative Center. `count` is the maximum number of suggestions (default 50) and `scenario` picks the suggestion scenario id (default 1). The `query` list can be empty for the default scenario.
- **Params:** `count` (integer, optional) — Maximum number of suggestions to return; `scenario` (integer, optional) — Suggestion scenario id

### `tiktok_trending`

- **HTTP:** `GET /tiktok/trending`
- **What:** Retrieve TikTok trending posts. Returns the current TikTok trending feed: `itemList` holds the videos, and `hasMore` and `cursor` describe paging. The response also has a `trendingTopics` field. Takes no parameters.
- **Params:** _none_
