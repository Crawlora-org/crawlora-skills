# tiktok-research — endpoint reference

> Generated from `scripts/tools.json` by `scripts/generate.mjs` — do not edit by hand.

Endpoints this skill uses, grouped by platform. Call them via `scripts/crawlora.sh` (see SKILL.md).

All paths are relative to the API base `https://api.crawlora.net/api/v1` and require the header `x-api-key: $CRAWLORA_API_KEY`. Path params like `{id}` are substituted into the URL; `GET` params go in the query string; `POST` params go in a JSON body.

**68 endpoints across 1 platform group(s).**

## TikTok (68)

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

### `tiktok_mobile_anchor_list`

- **HTTP:** `GET /tiktok/mobile/anchor/list`
- **What:** Anchor catalogue used by the video composer. Returns the anchor catalogue TikTok exposes for attaching a tag, product or place to a video. Entry shapes vary by anchor type, so each entry is returned as raw JSON rather than coerced into one schema.
- **Params:** _none_

### `tiktok_mobile_comment_replies`

- **HTTP:** `GET /tiktok/mobile/comment/replies`
- **What:** Retrieve replies to a TikTok comment. Returns the replies to one comment as the mobile app returns them, with `cursor`, `has_more` and `total`. The measured call sends both the video id and the comment id; this route answers even in windows where the top-level comment list is degraded.
- **Params:** `aweme_id` (string, **required**) — Video id the comment belongs to; `comment_id` (string, **required**) — Comment id to list replies for; `count` (integer, optional) — Replies per page (max 50); `cursor` (integer, optional) — Pagination cursor

### `tiktok_mobile_comments`

- **HTTP:** `GET /tiktok/mobile/comments`
- **What:** Retrieve comments for a TikTok video. Returns the top-level comments of one video as the mobile app returns them: each comment has its full `user` projection, `text`, `digg_count` and `reply_comment_total`, plus `cursor`, `has_more` and `total`. This route needs a signed-in app session and throttles independently of the replies route. A page with no comments (including an empty body) is returned as an empty result, because that is the documented degraded shape in a throttle window.
- **Params:** `aweme_id` (string, **required**) — Video id to list comments for; `count` (integer, optional) — Comments per page (max 50); `cursor` (integer, optional) — Pagination cursor

### `tiktok_mobile_feed`

- **HTTP:** `GET /tiktok/mobile/feed`
- **What:** Retrieve the TikTok mobile For You feed. Returns one page of videos from TikTok's mobile For You feed, signed with well-formed mobile signature headers (no device or account needed). Each item carries `aweme_id`, `create_time`, `author_id`, `share_url` and the verified statistics block (`play_count`, `digg_count`, `comment_count`, `share_count`, `collect_count`, `download_count`, `forward_count`, `lose_count`, `lose_comment_count`, `whatsapp_share_count`, `repost_count`). A zero `count` uses the app's default page size; `count` is capped at 50.
- **Params:** `count` (integer, optional) — Videos to request (0 = app default, max 50); `cursor` (integer, optional) — Pagination cursor

### `tiktok_mobile_feed_post`

- **HTTP:** `GET /tiktok/mobile/feed/post`
- **What:** Fetch the app's primary feed call (POST, protobuf) decoded without a schema. Calls the app's primary feed route - `POST /aweme/v2/feed/`, which the Android client sends with a protobuf request body and answers with protobuf - and returns a schema-free decode: field numbers become keys, length-delimited fields become strings when printable, nested messages when they parse and base64 otherwise, plus a flat list of every string leaf. Field numbering is inferred because TikTok publishes no schema for this message; use the JSON `GET /tiktok/mobile/feed` route when you need the stable structured contract.
- **Params:** _none_

### `tiktok_mobile_hashtag`

- **HTTP:** `GET /tiktok/mobile/hashtag`
- **What:** Retrieve a TikTok hashtag. Returns one hashtag's detail by name: `challenge_info` (cid, hashtag_name, desc, ...) and `stats` (view and video counts), exactly as the mobile API returns them. Hashtags are addressed by name; an internal id is rejected upstream.
- **Params:** `name` (string, **required**) — Hashtag name without the leading #

### `tiktok_mobile_hashtag_posts`

- **HTTP:** `GET /tiktok/mobile/hashtag/posts`
- **What:** Retrieve videos for a TikTok hashtag. Lists videos for one hashtag name as the mobile app returns them (`aweme_list` with author, music and statistics), plus `cursor` and `has_more`. `sort=fresh` is the newest list and works from any measured egress; `sort=popular` is the hot list and only answers from a US egress.
- **Params:** `count` (integer, optional) — Videos per page (max 50); `cursor` (integer, optional) — Pagination cursor; `name` (string, **required**) — Hashtag name without the leading #; `sort` (string, optional) — Listing: fresh (newest) or popular (hot)

### `tiktok_mobile_hashtags`

- **HTTP:** `GET /tiktok/mobile/hashtags`
- **What:** Search TikTok hashtags. Searches hashtags by keyword and returns the matching hashtag objects unmodified, with `cursor` and `has_more` for paging.
- **Params:** `count` (integer, optional) — Results per page (max 50); `cursor` (integer, optional) — Pagination cursor; `keyword` (string, **required**) — Keyword to search hashtags for

### `tiktok_mobile_live_effects`

- **HTTP:** `GET /tiktok/mobile/live/effects`
- **What:** Retrieve TikTok LIVE effects. Returns the complete LIVE effects/sticker asset catalogue in one call: `data.assets` (2,032 assets, each with `id`, `name`, `describe`, `resource_url`, `resource_uri`, `md5`, `size`, `resource_type`, `download_type`, `model_requirements`, `sticker_asset_variant` and `video_resource_list`). There are no request parameters and no paging, and the body is large because the catalogue is complete.
- **Params:** _none_

### `tiktok_mobile_live_gifts`

- **HTTP:** `GET /tiktok/mobile/live/gifts`
- **What:** Retrieve TikTok LIVE gifts. Returns the complete LIVE gift catalogue in one call: `data.gifts` (771 gift objects with `diamond_count`, `describe`, `duration`, `gift_resources`, `gift_skins`, `batch_gift_info` and `combo`) plus the gift config and resource maps (`gift_configs`, `gifts_info`, `doodle_templates`, `gift_name_group_map`, `gift_resource_group_map`). There are no request parameters and no paging: the response is a single complete catalogue.
- **Params:** _none_

### `tiktok_mobile_live_hashtags`

- **HTTP:** `GET /tiktok/mobile/live/hashtags`
- **What:** LIVE category/game reference catalogue (hashtags, live-studio/voice/third-party tags, game tags). Returns the reference set the app's "go LIVE" flow uses to tag a stream: the general LIVE hashtags (`hashtags`, measured 18 entries of `{id, image, namespace, title}`, where `id` 0 is the "None" tag), the live-studio/live-voice/third-party hashtag subsets (`live_studio_hashtags` 16, `live_voice_hashtags` 16, `third_party_hashtags` 9), the single `game_hashtag`, and a 1,500-entry game catalogue (`game_tag_list`, `game_tag_count`) where every entry carries the same 12 keys: `id`, `short_name`, `show_name`, `full_name`, `bundle_id`, `package_name`, `game_category` (`[{game_type, title}]` with PC games/Mobile games/Console games/Others), `hashtag_id`, `hashtag_list`, `gar`, `landscape` (0/1/2) and `is_new_game`. The upstream is `/webcast/room/hashtag/list/` on the webcast edge host (no origin header); the measured body is 539,361 B and byte-identical on both working webcast hosts, `language`/`count` do not change it, and there is no cursor/has_more, so it is a one-shot reference dump. Measured 2026-10-22 with the pure-Go (device-free) signer, so it does not need the device-backed signer.
- **Params:** _none_

### `tiktok_mobile_live_room`

- **HTTP:** `GET /tiktok/mobile/live/room`
- **What:** LIVE room detail: status, viewers, owner, stream URLs, cover. Returns one LIVE room's detail, keyed by `room_id` — the numeric id that `/api/v1/tiktok/mobile/live/search` returns under `data[].lives.author.room_id`. The upstream is `/webcast/room/info/` on the webcast edge host (no origin header), captured from the running 47.4.3 app's LIVE surface and reproduced against the live gateway. The response projects the fields callers key on — `title`, `status` (2 = live), `user_count` (concurrent viewers), `create_time`, `owner` (user id, nickname, avatar), `stats` (cumulative `enter_count`/`total_user`, `watch_user_count`, `like_count`, `comment_count`, `share_count`, `follow_count`, `replay_viewers`), `stream` (playable `flv_pull_url` per resolution plus `default_resolution`/`candidate_resolution` and the HLS/RTMP URLs) and `cover` — and keeps the upstream room object unmodified in `data` (it has ~500 keys, so a partial struct would drop fields). Measured 2026-10-22 with the pure-Go (device-free) signer: one room returned 193-198 KB with 1,595-1,600 concurrent viewers, 27,916 cumulative viewers, 27,096 enters and FLV URLs for FULL_HD1/HD1/SD1/SD2. `anchor_id` is deliberately NOT forwarded: it was measured to suppress the audience-only `stats.total_user` (27,916 -> 0 on the same room). A missing, non-numeric or unknown room id answers the webcast envelope's status 10011 and is surfaced as a 400; a finished room (status 30003) is a 400 too. The route is not signature-gated, so it does not need the device-backed signer.
- **Params:** `room_id` (string, **required**) — Numeric LIVE room id from /api/v1/tiktok/mobile/live/search (data[].lives.author.room_id)

### `tiktok_mobile_live_room_by_user`

- **HTTP:** `GET /tiktok/mobile/live/room-by-user`
- **What:** LIVE room by user: the room a user is currently streaming. Returns the LIVE room a TikTok user is currently streaming, keyed by `user_id`. The upstream is `/webcast/room/info_by_user/` on the webcast edge host (no origin header) and returns the same room payload as `/api/v1/tiktok/mobile/live/room` (title, status, concurrent viewers, owner, cumulative stats, per-resolution FLV URLs, cover and the ~500-key room object in `data`), except that the caller addresses a user and the room id is filled from the payload (both `user_id` and `room_id` are echoed). Measured 2026-10-22 with the pure-Go (device-free) signer: `user_id=6707748031095751686` answered 184,575 B (195,220 B on the second webcast host); `anchor_id` alone answers a 57-byte empty payload, so `user_id` is the address. A user with no live room answers status 30003 "room has finished" and is surfaced as a 400; a non-numeric user id is a 400 (status 10011); a bare call answers a 57-byte empty success envelope, which is why this endpoint requires `user_id`. The route is not signature-gated, so it does not need the device-backed signer.
- **Params:** `user_id` (string, **required**) — Numeric TikTok user id (e.g. the owner id from a profile, video author or live search row)

### `tiktok_mobile_live_search`

- **HTTP:** `GET /tiktok/mobile/live/search`
- **What:** Search TikTok LIVE streams. Searches the mobile app's LIVE surface by keyword: `data` of `{type, anchor}` entries with `feedback_type` set to `live`, plus `cursor` and `has_more`. `keyword` is required; without it the gateway answers a valid but empty envelope. This is the API's first LIVE endpoint.
- **Params:** `count` (integer, optional) — Results to request (0 = app default, max 50); `keyword` (string, **required**) — Search keyword

### `tiktok_mobile_live_tabs`

- **HTTP:** `GET /tiktok/mobile/live/tabs`
- **What:** Fetch the LIVE tab catalogue. Returns the app's LIVE tab catalogue: `data[]` holds one entry per tab with the tab's `id`, `name`, `style`, `enable`/`event` flags and the exact `url`/`inter_url` feed template the client calls for that tab. The measured tab 1 ("live") points at `/webcast/feed/?content_type=0&style=2&channel_id=21&sub_channel_id=0&tab_id=1&type=live&sub_type=live&req_type=0&cate_id=0` on `webcast.tiktokv.com`. This closes the route round 553 could not find a host for; it is served by the webcast edge hosts (non-webcast hosts answer 403) and is one of the few LIVE routes that answers device-free: measured with the pure-Go placeholder signer as well as the real device signer, so it does not need the device-backed signing service.
- **Params:** _none_

### `tiktok_mobile_music_beats`

- **HTTP:** `GET /tiktok/mobile/music/beats`
- **What:** Retrieve TikTok music beats. Returns the mobile app's beats/songs chart unmodified: `music_list` of the same full sound objects the pick chart returns (`id_str`, `title`, `user_count`, `album`, `artists`, `cover_*`), ordered as the app's beats list. The measured envelope carries no paging fields.
- **Params:** `count` (integer, optional) — Accepted for compatibility; not measured to change the page (max 50)

### `tiktok_mobile_music_choices`

- **HTTP:** `GET /tiktok/mobile/music/choices`
- **What:** Recommended sounds for video creation. Returns the app's "music choices" list: the recommended sounds it offers on the video-creation page. The upstream is `/aweme/v1/music/choices/`; each `music_list` entry is the same full sound object the chart routes return (title, album, artists, covers, play URL, duration, ...). Measured 2026-10-21 with the pure-Go (device-free) signer: 56,078 B / 6 full sound objects on one call and 7 on later calls (the same six at the front), and the payload carries NO paging fields (no cursor/has_more), so this is a one-shot recommendation list. The measured `item_id`, `music_id`, `count` and `scene` parameters did not deterministically change the list — the recommendations rotate — so none is exposed. The route is not signature-gated, so it does not need the device-backed signer.
- **Params:** _none_

### `tiktok_mobile_music_collection_list`

- **HTTP:** `GET /tiktok/mobile/music/collection-list`
- **What:** Music collection list (paged browse). Returns the app's music-collection LIST (`mc_list` of collection objects with covers), the browse list of curated music collections. This is a different route from `/api/v1/tiktok/mobile/music/collections`, which is the collection FEED (`mcf_list`, with each entry's music inline). The upstream is `/aweme/v1/music/collection/`. Unlike the feed, this route PAGES for real: `count` is honoured (measured 1 -> 1 item with `cursor: 1, has_more: 1`; 5 -> 5 items with `cursor: 5`; 10/100 -> all 8 collections) and `cursor` advances (measured `count=5&cursor=5` -> the remaining 3 with `has_more: 0`). A negative count answers upstream status 5, which is rejected locally. Measured 2026-10-21 with the pure-Go (device-free) signer: 8 collections total. The route is not signature-gated, so it does not need the device-backed signer.
- **Params:** `count` (integer, optional) — Page size: honoured (1-50 measured, capped by the collection set); `cursor` (integer, optional) — Next-page token from the previous response (0 = first page)

### `tiktok_mobile_music_collections`

- **HTTP:** `GET /tiktok/mobile/music/collections`
- **What:** Retrieve TikTok music collections. Returns the mobile app's sound-collection feed unmodified: `mcf_list`, where each entry is `{collection, music_list}` (the measured default page holds 8 entries), plus `cursor` and `has_more`. This route is first-page only: the returned `cursor` is not a reusable page token, so callers should not page with it.
- **Params:** `count` (integer, optional) — Collections to request (0 = app default, max 50); `cursor` (integer, optional) — Accepted for shape compatibility only; not a verified page token

### `tiktok_mobile_music_pick`

- **HTTP:** `GET /tiktok/mobile/music/pick`
- **What:** Retrieve TikTok sound chart picks. Returns the mobile app's sound pick/chart list: `music_list` of full sound objects (id, title, author, user_count, duration, ...) plus the chart list `mc_list` and `radio_cursor`.
- **Params:** `count` (integer, optional) — Sounds per page (max 50); `cursor` (integer, optional) — Pagination cursor

### `tiktok_mobile_music_posts`

- **HTTP:** `GET /tiktok/mobile/music/posts`
- **What:** Retrieve videos for a TikTok sound. Lists the videos that use one sound, as the mobile app returns them: `aweme_list` of full video objects (with `author`, `statistics` and `added_sound_music_info`), plus `cursor` and `has_more`. `music_id` is required. `count` is accepted but ignored upstream - the server returns its own default page, so page with `cursor`.
- **Params:** `count` (integer, optional) — Accepted for compatibility; the server ignores it (max 50); `cursor` (integer, optional) — Pagination cursor; `music_id` (string, **required**) — Sound (music) id; `sort` (string, optional) — Listing: fresh (newest, default) or popular (app canonical music.posts list; requires the device-backed signer)

### `tiktok_mobile_music_related`

- **HTTP:** `GET /tiktok/mobile/music/related`
- **What:** Retrieve sounds related to a TikTok video. Returns sounds related to one video: `music_list` of full sound objects, `recall_info_list` explaining why each was recalled, `similar_song_ids`, plus `cursor` and `has_more`.
- **Params:** `aweme_id` (string, **required**) — Video id to find related sounds for; `count` (integer, optional) — Sounds per page (max 50); `cursor` (integer, optional) — Pagination cursor

### `tiktok_mobile_music_trending`

- **HTTP:** `GET /tiktok/mobile/music/trending`
- **What:** Retrieve TikTok trending sounds. Returns the mobile app's trending sound chart: `music_list` of full sound objects (`id_str`, `title`, `user_count`, `album`, `artists`, `cover_large`/`cover_medium`/`cover_thumb`, `binded_challenge_id`, `collect_stat`, `audition_duration`) unmodified, plus `cursor` and `has_more` for paging. This is the chart behind `music.trending`.
- **Params:** `count` (integer, optional) — Sounds per page (max 50); `cursor` (integer, optional) — Pagination cursor

### `tiktok_mobile_mv_videos`

- **HTTP:** `GET /tiktok/mobile/mv/videos`
- **What:** MV channel feed: the app's music-video tab, paged. Returns one page of an MV channel feed, the app's music-video ("MV") tab. The upstream is `/aweme/v1/mv/aweme/`; `mv_id` is a small numeric CHANNEL index, NOT a video id — measured ids 0-10 each returned a 15-video page of full aweme objects (1.05-1.24 MB), while 100 returned a valid empty page and a real aweme id returned an empty list. The server's page size is 15 and `count` was measured IGNORED (`count=5` and `count=10` both returned 15 items), so `count` is not exposed; page with `cursor`. The returned `cursor` is a reusable next-page token (measured page 1 `cursor: 18, has_more: 1`; `cursor=18` returned a fresh page with `cursor: 38, has_more: 1`). The envelope's `top_awemes` (pinned entries), `original_aweme_id`, `page_extra` and `extra`/`log_pb` are kept as measured. Measured 2026-10-22 with the pure-Go (device-free) signer, so it does not need the device-backed signer. A missing or non-numeric `mv_id` is a 400; an unknown numeric channel is a valid empty page.
- **Params:** `cursor` (integer, optional) — Next-page token from the previous response (0 = first page); `mv_id` (string, **required**) — MV channel index (small integer; measured 0-10 populated, 100 empty)

### `tiktok_mobile_place_detail`

- **HTTP:** `GET /tiktok/mobile/place/detail`
- **What:** Place (POI) detail from the mobile app's Places surface. Returns one place detail page, keyed by the `poi_id` that the place search endpoint returns. The upstream is TikTok's server-driven UI (`/tiktok/poi/slash/v1`) frame stream, assembled here into the component map of the place-detail screen: `food_head_info` (place name, formatted address, category, phone, coordinates, opening hours, rating/score with mention count, price range, tags and photo album), `poi_top_videos` (top videos strip), `poi_limited_post` (posts about the place: full video items plus `aweme_cursor`/`has_more_aweme`), `poi_review` (review preview with `has_more`) and `ai_summary` when the place has one. `nodes` is opaque and complete, `frames` keeps the raw ordered frames, and the typed counters (`top_video_count`, `post_count`, `post_cursor`, `has_more_posts`, `review_count`, `has_more_reviews`) are convenience projections. The measured page-size controls are forwarded with the app's defaults but the server applies its own bounds. The route is not signature-gated, so it does not need the device-backed signer.
- **Params:** `enter_from` (string, optional) — Forwarded analytics origin (default search_places); `merged_count` (integer, optional) — Posts page size forwarded upstream (default 9, bounded at 50); `poi_id` (string, **required**) — Place id from the place search endpoint; `review_count` (integer, optional) — Review preview size forwarded upstream (default 20, bounded at 50); `review_cursor` (integer, optional) — Review cursor forwarded upstream (default 0); `video_cursor` (integer, optional) — Top-videos cursor forwarded upstream (default 0)

### `tiktok_mobile_place_info`

- **HTTP:** `GET /tiktok/mobile/place/info`
- **What:** Compact place (POI) record: address, coordinates, rating, hours, counters. Returns one place's compact record, keyed by the `poi_id` that the place search endpoint returns. The upstream is TikTok's POI read (`/tiktok/poi/get/v1`), the record behind a place card: `name`, `address`, `category`, `average_price`, `latitude`/`longitude`, `city_code`/`region_code`, `review_score` with `review_count`/`no_rating`, `video_count`, `favorite_count`, `opening_hours`/`opening_status`, `cover`, `share_url`/`share_desc` and `parent_poi`, plus the upstream POI object unmodified in `place` so a richer field is never lost. This is the cheap lookup to use instead of the ~1 MB slash detail page when only the place record is needed. A nonexistent id answers 400 (the upstream business status 3009009 "poi not exist" is a caller error, not an outage). Measured 2026-10-21 with the pure-Go (device-free) signer: 4,594 B for a coffee shop (score 4.7 / 2 reviews, price "$", hours "8:00 AM – 5:00 PM", 11 videos), 4,623 B for a second location (score 4.8 / 13 reviews). The route is not signature-gated, so it does not need the device-backed signer.
- **Params:** `poi_id` (string, **required**) — Place id from the place search endpoint

### `tiktok_mobile_place_photos`

- **HTTP:** `GET /tiktok/mobile/place/photos`
- **What:** Place photo album with per-photo attribution. Returns one place's photo album, keyed by the `poi_id` that the place search endpoint returns. The upstream is `/tiktok/poi/picture_album/v1`: `categories` holds each album tab (`name`, `pic_tab_typecode`, `pictures` of bare image URL lists and `pictures_v2`, the same photos with `author` attribution, `pic_id`, `source` and origin/compressed URL info), `photo_count` sums the categories' pictures, and `title` is the app's own header. Measured 2026-10-21 with the pure-Go (device-free) signer: one place answered 5,368 B, title "Gallery (3)", 1 category with 3 photos whose `pictures_v2` entries name the Google-places contributor; another answered 24,196 B with more photos. The album is one-shot: `count` and `pic_tab_typecode` were measured and did not change the page. A nonexistent id answers 500 (the upstream answers status 4 "Server is currently unavailable" on this route, unlike the poi-not-exist code the other place routes use). The route is not signature-gated, so it does not need the device-backed signer.
- **Params:** `poi_id` (string, **required**) — Place id from the place search endpoint

### `tiktok_mobile_place_videos`

- **HTTP:** `GET /tiktok/mobile/place/videos`
- **What:** Videos posted at one place (paged). Returns one page of the videos posted at a place, keyed by the `poi_id` that the place search endpoint returns. The upstream is `/tiktok/poi/video/list/v1`: `aweme_list` holds the app's full video objects (id, description, author, statistics, media URLs, music, anchors, ...) and `item_count` is this page's size. Page with `cursor`: the returned `cursor` is a reusable next-page token (measured page 1 `cursor: 20` with `has_more: 1`, page 2 `cursor: 40`), never with arithmetic on `count`. `count` is a page-size hint, not a strict size: 1/2/5 returned exactly that many items on the first page, a later page returned 8 for count=5, and 10/20/50 were all server-capped at 17. Measured 2026-10-21 with the pure-Go (device-free) signer: 11 videos (940-944 KB) on one place, 17 videos (1.4 MB) on another. The route exposes no sort control: `sort_type` and `order` were measured and did not change the page or its order. The upstream throttles bursts, so paced clients are expected. The route is not signature-gated, so it does not need the device-backed signer.
- **Params:** `count` (integer, optional) — Page-size hint: 1-50 measured, server caps larger pages (default is the app default); `cursor` (integer, optional) — Next-page token from the previous response (0 = first page); `poi_id` (string, **required**) — Place id from the place search endpoint

### `tiktok_mobile_search`

- **HTTP:** `GET /tiktok/mobile/search`
- **What:** Search TikTok videos on the mobile API. Keyword search returning the mobile API result documents unmodified: each entry has `aweme_info` (a full video object with statistics), `card_profile` and search metadata, plus `cursor` and `has_more`. Keep `count` small (20 already exceeds one megabyte of upstream JSON). Requires the device-backed signing service; without it the endpoint returns a generic service-unavailable error instead of an empty page.
- **Params:** `count` (integer, optional) — Results per page (max 20); `keyword` (string, **required**) — Search keyword; `offset` (integer, optional) — Result offset; pass search_id with a non-zero offset; `search_id` (string, optional) — search_id returned by a previous page of the same search

### `tiktok_mobile_search_effects`

- **HTTP:** `GET /tiktok/mobile/search/effects`
- **What:** Search TikTok effects/stickers by keyword. Searches TikTok's effect catalogue by `keyword`, returning the app's full effect objects (`name`, `hint`, `icon_url`, `file_url`, `effect_id`, `types`, `tags`, `parent`/`children`, `effect_type`, `music`, `source`, `designer_id`, `schema`). The upstream is `/aweme/v1/search/effect/`; the page is unfolded to the top level (`effects`, `cursor`, `has_more`, `search_id`, `use_hot`, plus `bind_effects`/`collection` on some queries). Paging is real but needs BOTH halves of the token: pass the previous response's `cursor` and `search_id` together (measured: page 1 `cursor: 100`, page 2 with `cursor=100&search_id=...` returned the final effect with `has_more: false`; a cursor without its `search_id` returns an empty page, which the service rejects as a 400). `count` and `offset` were measured as no-ops. Measured 2026-10-21 with the pure-Go (device-free) signer: `keyword=green screen` -> 6 effects (11,831 B) + 1 on page 2, `green` -> 2, `字幕` -> 4; a keyword with no matches is a valid empty page. The route is not signature-gated, so it does not need the device-backed signer.
- **Params:** `count` (integer, optional) — Accepted for shape parity; the server was measured to ignore it; `cursor` (integer, optional) — Next-page token from the previous response (0 = first page); `keyword` (string, **required**) — Effect name or text, e.g. green screen; `search_id` (string, optional) — Search-session token from the previous response; required together with cursor

### `tiktok_mobile_search_hashtags`

- **HTTP:** `GET /tiktok/mobile/search/hashtags`
- **What:** Hashtag suggestions for a keyword (hashtag typeahead). Returns the hashtag suggestions the app shows while typing in the search box, keyed by `keyword`. The upstream is `/aweme/v1/search/challengesug/`; each `sug_list` row carries `cha_name` (hashtag name), `view_count`, `use_count` and `cid` (the numeric hashtag id), so this is the discovery step for the hashtag endpoints (`hashtag info` is name-keyed). Measured 2026-10-21 with the pure-Go (device-free) signer: `keyword=lofi` returned 10 rows (`lofi` 18.2B views / 1.9M uses, then `lofiasmr`, `lofihiphop`, ...), `coffee` and `ラーメン` also returned 10 rows, and a keyword with no suggestions is a valid empty page (`sug_list: []`). `count` is accepted for shape parity but the server was measured to ignore it (5/20/100 all returned 10 rows), and the route has no paging. The route is not signature-gated, so it does not need the device-backed signer.
- **Params:** `count` (integer, optional) — Accepted for shape parity; the server was measured to ignore it (always up to 10 rows); `keyword` (string, **required**) — Text typed so far; the server also accepts prefixes (e.g. lofi -> lofihiphop)

### `tiktok_mobile_search_music`

- **HTTP:** `GET /tiktok/mobile/search/music`
- **What:** Search TikTok sounds on the mobile API. Keyword search over sounds, returning `music_info_list` of full sound objects unmodified with `cursor`, `has_more` and `total`.
- **Params:** `count` (integer, optional) — Sounds per page (max 50); `keyword` (string, **required**) — Search keyword; `offset` (integer, optional) — Result offset

### `tiktok_mobile_search_place`

- **HTTP:** `GET /tiktok/mobile/search/place`
- **What:** Search TikTok places. Returns TikTok's place (POI) search results for a keyword, unmodified: each row carries `poi_name`, `poi_id`, `poi_type`, `video_count`, `poi_rating`, `poi_distance`, `poi_location`, `lat`/`lng`, `img_url`, `opening_time`, `price_level` and `parent_poi`. Useful for mapping a location or category to the places TikTok knows about, and for seeing how many videos each place carries. `keyword` is required. The page holds up to 30 rows (`count` 1-30 measured; a larger count makes the upstream answer an empty page, so the service rejects it) and the route is first-page-only — the returned `cursor` is not a reusable page token.
- **Params:** `count` (integer, optional) — Rows to return, 1-30 measured (a larger count yields an empty upstream page and is rejected); `keyword` (string, **required**) — Place name or category to search for

### `tiktok_mobile_search_pre_info`

- **HTTP:** `GET /tiktok/mobile/search/pre-info`
- **What:** Pre-search info token for a search session. Returns the `pre_info_id` token the app attaches to a search session (with its TTL). The token is short-lived; the app requests one before the search stream and reuses it for the following calls.
- **Params:** `count` (integer, optional) — Suggestion count (max 50); `keyword` (string, optional) — Seed keyword (optional; the app also requests this with an empty keyword)

### `tiktok_mobile_search_suggestions`

- **HTTP:** `GET /tiktok/mobile/search/sug`
- **What:** Retrieve TikTok search suggestions. Returns the mobile app's search typeahead for a seed keyword: `sug_list` of suggestions, each with `content`, `sug_type`, `word_record` (`group_id`, `words_position`, `words_content`, `words_source`) and positional fields, unmodified. Useful for query expansion and for seeing the phrases the app itself associates with a seed term. `keyword` is required; without it the upstream answers a well-formed but empty envelope.
- **Params:** `count` (integer, optional) — Suggestions to return (max 50); `keyword` (string, **required**) — Seed keyword to expand

### `tiktok_mobile_search_tabs`

- **HTTP:** `GET /tiktok/mobile/search/tabs`
- **What:** Search tabs available for a keyword. Returns the tab keys the mobile search screen offers for a keyword (`general`, `video`, `photos`, `user`, `music`, `live`, `place`, `hashtag`), plus the gateway's `is_failed` flag. Measured on the mobile search edge with a form POST.
- **Params:** `keyword` (string, **required**) — Search keyword

### `tiktok_mobile_search_user`

- **HTTP:** `GET /tiktok/mobile/search/user`
- **What:** Search TikTok users on the mobile API. Keyword search over users, returning `user_list` unmodified. Each `user_info` carries the populated creator statistics (follower_count, following_count, total_favorited, aweme_count, custom_verify). Requires the device-backed signing service; without it the endpoint returns a generic service-unavailable error instead of an empty page.
- **Params:** `count` (integer, optional) — Users per page (max 50); `cursor` (integer, optional) — Pagination cursor; `keyword` (string, **required**) — Search keyword (a username or display name)

### `tiktok_mobile_trending_categories`

- **HTTP:** `GET /tiktok/mobile/trending/categories`
- **What:** Retrieve TikTok trending categories. Returns the discover-category feed unmodified: each `category_list` entry is `{aweme_list, category_type, challenge_info, click_track_url_list, desc, track_url_list}`, with `cursor` and `has_more` for paging.
- **Params:** `count` (integer, optional) — Categories per page (max 50); `cursor` (integer, optional) — Pagination cursor

### `tiktok_mobile_trending_effects`

- **HTTP:** `GET /tiktok/mobile/trending/effects`
- **What:** Retrieve TikTok trending effects. Returns the effect/sticker discovery feed unmodified: `aweme_list` of full video objects, each additionally carrying `stickers` and `sticker_detail`, plus `feed_session_id`, `cursor` and `has_more`.
- **Params:** `count` (integer, optional) — Videos per page (max 50); `cursor` (integer, optional) — Pagination cursor

### `tiktok_mobile_user_recommendations`

- **HTTP:** `GET /tiktok/mobile/user/recommendations`
- **What:** Recommended creators on the mobile app's Following page. Returns the app's suggested creators for the Following page unmodified: `user_list` entries are `{user, aweme_list}` where `user` is the full creator projection (uid, sec_uid, nickname, signature, avatars, follower/following counts, verification and privacy flags) and `aweme_list` holds up to three recent videos, so this is a creator-discovery surface rather than a bare id list. The route has no paging fields and returns one page of 13-17 creators (fresh recommendations differ per call). `count` is accepted for parity but the gateway was measured to ignore it. The route is not signature-value gated, so unlike the profile/posts routes it does not need the device-backed signer.
- **Params:** `count` (integer, optional) — Requested page size; forwarded when set, but the gateway was measured to ignore it

### `tiktok_mobile_video_subtitles`

- **HTTP:** `GET /tiktok/mobile/video/subtitles`
- **What:** Video captions translated into a target language. Returns one video's own captions translated into the requested language, as TikTok's caption/language (`cla`) service serves them. The response carries the track twice: `webvtt` is the upstream WebVTT text verbatim, and `cues` is the same track parsed into `{start_ms, end_ms, start, end, text}` records so a caller does not have to implement WebVTT. `video_id` is the aweme id returned by the feed, search, profile-posts and hashtag endpoints. Measured 2026-10-21 with the pure-Go (device-free) signer: the Korean-caption video 7696141388324293918 answered 11 English cues for `language=en`, and the same video answered Japanese, Chinese, Spanish, French, German, Korean, Portuguese, Russian, Arabic, Hindi, Indonesian, Thai, Vietnamese, Turkish and Italian tracks; a Portuguese-lyrics video answered an 18,494-character English track (240 cues). Track size is a snapshot rather than a contract (the upstream re-translates from a cache), so assert a non-empty track in the requested language, not a byte count. The route is not signature-gated, so it does not need the device-backed signer. A video with no captions answers 400 (upstream status 5); a nonexistent video answers 500 (upstream status 4).
- **Params:** `language` (string, **required**) — Target language code: ar, de, en, es, fr, hi, id, it, ja, ko, pt, ru, th, tr, vi, zh; `video_id` (string, **required**) — Numeric id of the video (aweme id)

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
