# youtube-research — endpoint reference

> Generated from `scripts/tools.json` by `scripts/generate.mjs` — do not edit by hand.

Endpoints this skill uses, grouped by platform. Call them via `scripts/crawlora.sh` (see SKILL.md).

All paths are relative to the API base `https://api.crawlora.net/api/v1` and require the header `x-api-key: $CRAWLORA_API_KEY`. Path params like `{id}` are substituted into the URL; `GET` params go in the query string; `POST` params go in a JSON body.

**13 endpoints across 1 platform group(s).**

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
