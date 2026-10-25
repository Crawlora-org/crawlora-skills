# reddit-research — endpoint reference

> Generated from `scripts/tools.json` by `scripts/generate.mjs` — do not edit by hand.

Endpoints this skill uses, grouped by platform. Call them via `scripts/crawlora.sh` (see SKILL.md).

All paths are relative to the API base `https://api.crawlora.net/api/v1` and require the header `x-api-key: $CRAWLORA_API_KEY`. Path params like `{id}` are substituted into the URL; `GET` params go in the query string; `POST` params go in a JSON body.

**19 endpoints across 1 platform group(s).**

## Reddit (19)

### `reddit_archive_comments_ids`

- **HTTP:** `GET /reddit/archive/comments/ids`
- **What:** Look up archived Reddit comments by ids. Looks up known Reddit comment ids in Arctic Shift's historical archive. Supply 1 to 1,000 comma-separated ids; duplicates are removed, results follow input order, and missing ids are listed separately. The service sends at most two upstream requests of up to 500 ids each. Archived scores are snapshots, and removed_by_category is included when available.
- **Params:** `ids` (string, **required**) — Comma-separated Reddit comment ids (1-1,000); optional t1_ prefixes are accepted

### `reddit_archive_comments_search`

- **HTTP:** `GET /reddit/archive/comments/search`
- **What:** Search archived Reddit comments. Searches Arctic Shift's public historical comment archive. Supply at least one of query, author, subreddit, link_id, or parent_id; date bounds can further narrow that search. query searches comment body text and must be combined with author, subreddit, link_id, or parent_id; it maps to Arctic Shift's body parameter. Arctic Shift may time out or throttle broad searches, which return 503 with Retry-After. created_after/created_before are time boundaries, not Reddit listing cursors. Each comment includes created_utc and retrieved_on; archived scores can lag changes for roughly 36 hours. A valid query with no matches returns an empty comments array.
- **Params:** `author` (string, optional) — Public Reddit username filter; `created_after` (string, optional) — Creation-time lower bound; accepts epoch seconds or milliseconds, ISO 8601 dates, or relative offsets such as 1year, 2d, or 5min; `created_before` (string, optional) — Creation-time upper bound; accepts epoch seconds or milliseconds, ISO 8601 dates, or relative offsets such as 1year, 2d, or 5min; `limit` (integer, optional) — Maximum comments, defaults to 25 and clamps to 100; `link_id` (string, optional) — Reddit post id to scope comments; `parent_id` (string, optional) — Parent comment id; an explicitly empty value selects top-level comments; `query` (string, optional) — Full-text search within comment bodies; requires author, subreddit, link_id, or parent_id; `sort` (string, optional) — Sort by creation time; `subreddit` (string, optional) — Subreddit name filter

### `reddit_archive_comments_tree`

- **HTTP:** `GET /reddit/archive/comments/{id}/tree`
- **What:** Get an archived Reddit comment tree. Returns a bounded nested comment tree from Arctic Shift's public archive. `t1` entries contain comments and their replies; `more` entries mark collapsed branches and include child ids/counts. Omitted parent_id requests the whole tree, while an explicitly empty parent_id requests top-level comments only. Empty archived trees return 200 with an empty comments array. Archived scores can lag changes for roughly 36 hours; slow or throttled upstream requests return 503 with Retry-After.
- **Params:** `id` (string, **required**) — Reddit post id or t3_ id; `limit` (integer, optional) — Maximum archive comment nodes to expand, defaults to 50 and clamps to 100; `parent_id` (string, optional) — Parent comment id; an explicitly empty value selects top-level comments; `start_breadth` (integer, optional) — Initial breadth, defaults to 2 and must be between 0 and 8; `start_depth` (integer, optional) — Initial depth, defaults to 3 and must be between 0 and 8

### `reddit_archive_posts_ids`

- **HTTP:** `GET /reddit/archive/posts/ids`
- **What:** Look up archived Reddit posts by ids. Looks up known Reddit post ids in Arctic Shift's historical archive. Supply 1 to 1,000 comma-separated ids; duplicates are removed, results follow input order, and missing ids are listed separately. The service sends at most two upstream requests of up to 500 ids each. Archived scores and comment counts are snapshots, and removed_by_category is included when available.
- **Params:** `ids` (string, **required**) — Comma-separated Reddit post ids (1-1,000); optional t3_ prefixes are accepted

### `reddit_archive_posts_search`

- **HTTP:** `GET /reddit/archive/posts/search`
- **What:** Search archived Reddit posts. Searches Arctic Shift's public historical post archive. Supply at least one of query, author, subreddit, or url; date bounds can further narrow that search. This is separate from the live Reddit search endpoint. created_after/created_before are time boundaries, not Reddit listing cursors; posts include created_utc and retrieved_on so callers can see when the archive captured each record. Archived scores and comment counts can lag changes for roughly 36 hours. A valid query with no matches returns an empty posts array. Slow or throttled upstream searches return 503 with Retry-After.
- **Params:** `author` (string, optional) — Public Reddit username filter; `created_after` (string, optional) — Creation-time lower bound; accepts epoch seconds or milliseconds, ISO 8601 dates, or relative offsets such as 1year, 2d, or 5min; `created_before` (string, optional) — Creation-time upper bound; accepts epoch seconds or milliseconds, ISO 8601 dates, or relative offsets such as 1year, 2d, or 5min; `limit` (integer, optional) — Maximum posts, defaults to 25 and clamps to 100; `query` (string, optional) — Text search across archived post titles and selftext; `sort` (string, optional) — Sort by creation time; `subreddit` (string, optional) — Subreddit name filter; `url` (string, optional) — Linked URL prefix filter; `url_exact` (boolean, optional) — Require an exact URL match; requires url

### `reddit_archive_subreddits_search`

- **HTTP:** `GET /reddit/archive/subreddits/search`
- **What:** Search Reddit's archived subreddit directory. Searches Arctic Shift's native subreddit directory by name prefix. Directory metadata is updated infrequently; subscriber counts are archived snapshots and retrieved_on indicates when the source captured the entry. The selectable fields are limited to the verified public directory fields.
- **Params:** `limit` (integer, optional) — Maximum subreddits, defaults to 25 and clamps to 100; `max_subscribers` (integer, optional) — Maximum archived subscriber count; `min_subscribers` (integer, optional) — Minimum archived subscriber count; `over_18` (boolean, optional) — Filter by archived NSFW status; `query` (string, **required**) — Subreddit name prefix, with or without r/; `sort` (string, optional) — Sort direction; `sort_by` (string, optional) — Sort field

### `reddit_archive_time_series`

- **HTTP:** `GET /reddit/archive/time-series`
- **What:** Get historical Reddit archive time series. Returns Arctic Shift's native time-series values. Supply an absolute creation-time range and a precision; ranges that could exceed 1,000 points are rejected. Counts, score sums, and retrieval-delay sums are archive metrics, not current Reddit totals. Arctic Shift says time-series data may be approximate and take hours or days to update.
- **Params:** `created_after` (string, **required**) — Absolute start time: epoch seconds/milliseconds or ISO 8601; `created_before` (string, **required**) — Absolute end time: epoch seconds/milliseconds or ISO 8601; `metric` (string, **required**) — Archive metric; `precision` (string, **required**) — Time bucket precision; `subreddit` (string, optional) — Optional subreddit scope; required for subreddit_subscribers, and unsupported for retrieval-delay metrics

### `reddit_comments`

- **HTTP:** `GET /reddit/comments/{id}`
- **What:** Get Reddit post comments. Returns a Reddit post with its public comments. The default mode is 1 credit. Set `include_metrics=true` to return the comments with public net score and award count plus post engagement metrics for 3 credits. Large threads may expose only an initial comment subset. Reddit does not expose per-comment upvote ratios or exact upvote/downvote totals anonymously. A post that exists but has no comments yet returns a 200 response with an empty comments list; a post that does not exist returns 404, and a temporary block or upstream failure returns 503 (retryable) rather than 404. If source.type is redlib, public fields and credit weights are preserved.
- **Params:** `depth` (integer, optional) — Maximum flat comment depth returned in metrics mode.; `id` (string, **required**) — Reddit post id or t3_ id; `include_metrics` (boolean, optional) — Include public post and per-comment engagement metrics; costs 3 credits instead of 1; `limit` (integer, optional) — Maximum comments returned, defaults to 25 and clamps to 100; `sort` (string, optional) — Comment order: confidence, top, new, controversial, old, or qa. Applied to the anonymous HTML request when metrics are enabled.

### `reddit_domain_posts`

- **HTTP:** `GET /reddit/domain/{domain}/posts`
- **What:** List Reddit domain posts. Returns public posts submitted from a linked domain. A `503` with a `Retry-After` header means Reddit is temporarily throttling the request; wait that many seconds and retry. If source.type is redlib, public fields and credit weights are preserved.
- **Params:** `after` (string, optional) — Reddit pagination token; `domain` (string, **required**) — Domain hostname, without scheme or path; `limit` (integer, optional) — Maximum posts, defaults to 25 and clamps to 100; `sort` (string, optional) — Sort: hot, new, top, or rising; `time` (string, optional) — Time window for top sort: hour, day, week, month, year, or all

### `reddit_leads`

- **HTTP:** `GET /reddit/leads`
- **What:** Find Reddit buying-intent leads. Scans a Reddit search page for people actively asking for a product or service, scores each post 0-10 for buying intent, and returns them ranked highest-first with the signals that fired. Self-promotion, hiring posts, freelancer service adverts, revenue-milestone posts, duplicate reposts, and Title Case article headlines are filtered out before scoring. A deterministic prefilter always runs; when `classifier` resolves to `llm` the surviving candidates are additionally refined in one batched model call. A `503` with a `Retry-After` header means Reddit is temporarily throttling the request; wait that many seconds and retry. The lead-response fields and credit weights are preserved regardless of the underlying Reddit data source.
- **Params:** `classifier` (string, optional) — Classifier: auto uses the model when configured, heuristic skips it, llm requires it; `limit` (integer, optional) — Maximum leads returned, defaults to 25 and clamps to 100; `min_score` (integer, optional) — Minimum buying-intent score to return, 0-10, defaults to 4; `q` (string, **required**) — What you offer, in plain language; `sort` (string, optional) — Sort: relevance, hot, new, top, or comments; `subreddit` (string, optional) — Restrict the search to a subreddit name, without r/; `time` (string, optional) — Time window: hour, day, week, month, year, or all

### `reddit_post`

- **HTTP:** `GET /reddit/post/{id}`
- **What:** Get Reddit post. Returns a public Reddit post. The default mode is 1 credit. Set `include_metrics=true` to return public net score, upvote ratio, comment count, award count, and estimated upvote/downvote totals for 3 credits. Reddit fuzzes voting data, so estimates are approximate; share, repost/crosspost, and view counts are not exposed anonymously. If source.type is redlib, public fields and credit weights are preserved.
- **Params:** `id` (string, **required**) — Reddit post id or t3_ id; `include_metrics` (boolean, optional) — Include public engagement metrics; costs 3 credits instead of 1

### `reddit_search`

- **HTTP:** `GET /reddit/search`
- **What:** Search Reddit posts. Searches public Reddit content and returns public post entries. A `503` with a `Retry-After` header means Reddit is temporarily throttling the request; wait that many seconds and retry. If source.type is redlib, public fields and credit weights are preserved.
- **Params:** `after` (string, optional) — Reddit pagination token; `limit` (integer, optional) — Maximum posts, defaults to 25 and clamps to 100; `q` (string, **required**) — Search keywords; `sort` (string, optional) — Sort: relevance, hot, new, top, or comments; `subreddit` (string, optional) — Restrict search to a subreddit name, without r/; `time` (string, optional) — Time window for top/comments sorts: hour, day, week, month, year, or all

### `reddit_subreddit_about`

- **HTTP:** `GET /reddit/subreddit/{subreddit}/about`
- **What:** Get Reddit subreddit metadata. Returns public metadata and sample posts for a subreddit. Subscriber counts, icons, and banners are omitted because they are not available on anonymous Reddit pages. A `503` with a `Retry-After` header means Reddit is temporarily throttling the request; wait that many seconds and retry. If source.type is redlib, public fields and credit weights are preserved.
- **Params:** `limit` (integer, optional) — Maximum sample posts inspected, defaults to 25 and clamps to 100; `subreddit` (string, **required**) — Subreddit name, without r/

### `reddit_subreddit_comments`

- **HTTP:** `GET /reddit/subreddit/{subreddit}/comments`
- **What:** List Reddit subreddit comments. Returns flat public comment entries from a subreddit latest-comments feed. A `503` with a `Retry-After` header means Reddit is temporarily throttling the request; wait that many seconds and retry. If source.type is redlib, public fields and credit weights are preserved.
- **Params:** `after` (string, optional) — Reddit pagination token; `limit` (integer, optional) — Maximum comments, defaults to 25 and clamps to 100; `subreddit` (string, **required**) — Subreddit name, without r/

### `reddit_subreddit_posts`

- **HTTP:** `GET /reddit/subreddit/{subreddit}/posts`
- **What:** List Reddit subreddit posts. Returns public posts from a subreddit. A `503` with a `Retry-After` header means Reddit is temporarily throttling the request; wait that many seconds and retry. If source.type is redlib, public fields and credit weights are preserved.
- **Params:** `after` (string, optional) — Reddit pagination token; `limit` (integer, optional) — Maximum posts, defaults to 25 and clamps to 100; `sort` (string, optional) — Sort: hot, new, top, or rising; `subreddit` (string, **required**) — Subreddit name, without r/; `time` (string, optional) — Time window for top sort: hour, day, week, month, year, or all

### `reddit_subreddits_posts`

- **HTTP:** `GET /reddit/subreddits/posts`
- **What:** List Reddit multi-subreddit posts. Returns public posts from a combined multi-subreddit feed. A `503` with a `Retry-After` header means Reddit is temporarily throttling the request; wait that many seconds and retry. If source.type is redlib, public fields and credit weights are preserved.
- **Params:** `after` (string, optional) — Reddit pagination token; `limit` (integer, optional) — Maximum posts, defaults to 25 and clamps to 100; `sort` (string, optional) — Sort: hot, new, top, or rising; `subreddits` (string, **required**) — Comma-separated subreddit names, without r/, maximum 10; `time` (string, optional) — Time window for top sort: hour, day, week, month, year, or all

### `reddit_trends`

- **HTTP:** `GET /reddit/trends`
- **What:** List Reddit trends. Returns public posts from broad Reddit hot, new, rising, or top feeds. For subreddit-specific trends, use `/reddit/subreddit/{subreddit}/posts` with `sort=hot`, `sort=new`, `sort=rising`, or `sort=top`. A `503` with a `Retry-After` header means Reddit is temporarily throttling the request; wait that many seconds and retry. If source.type is redlib, public fields and credit weights are preserved.
- **Params:** `after` (string, optional) — Reddit pagination token; `limit` (integer, optional) — Maximum posts, defaults to 25 and clamps to 100; `sort` (string, optional) — Sort: hot, new, rising, or top; `time` (string, optional) — Time window for top sort: hour, day, week, month, year, or all

### `reddit_user_comments`

- **HTTP:** `GET /reddit/user/{username}/comments`
- **What:** List Reddit user comments. Returns flat public comment entries from a public Reddit user's comments feed. A `503` with a `Retry-After` header means Reddit is temporarily throttling the request; wait that many seconds and retry. If source.type is redlib, public fields and credit weights are preserved.
- **Params:** `after` (string, optional) — Reddit pagination token; `limit` (integer, optional) — Maximum comments, defaults to 25 and clamps to 100; `username` (string, **required**) — Public Reddit username, without u/

### `reddit_user_posts`

- **HTTP:** `GET /reddit/user/{username}/posts`
- **What:** List Reddit user posts. Returns public posts from a public Reddit user's submitted feed. A `503` with a `Retry-After` header means Reddit is temporarily throttling the request; wait that many seconds and retry. If source.type is redlib, public fields and credit weights are preserved.
- **Params:** `after` (string, optional) — Reddit pagination token; `limit` (integer, optional) — Maximum posts, defaults to 25 and clamps to 100; `username` (string, **required**) — Public Reddit username, without u/
