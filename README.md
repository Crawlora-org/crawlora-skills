# Crawlora Agent Skills

[![Website](https://img.shields.io/badge/website-crawlora.net-2563eb)](https://crawlora.net?utm_source=github&utm_medium=referral&utm_campaign=crawlora-skills)
[![Docs](https://img.shields.io/badge/docs-crawlora.net%2Fdocs-555)](https://crawlora.net/docs?utm_source=github&utm_medium=referral&utm_campaign=crawlora-skills)
[![Skills](https://img.shields.io/badge/Agent-Skills-7c3aed)](https://docs.claude.com/en/docs/agents-and-tools/agent-skills/overview)
[![License: MIT](https://img.shields.io/badge/License-MIT-green)](LICENSE)

**Crawlora Agent Skills** are ready-to-install [Agent Skills](https://docs.claude.com/en/docs/agents-and-tools/agent-skills/overview)
that teach any coding agent (Claude Code, Codex, Cursor, Copilot, …) how to fetch
**structured public web data** with the [Crawlora](https://crawlora.net?utm_source=github&utm_medium=referral&utm_campaign=crawlora-skills) REST API —
search engines, marketplaces, social, finance, maps, app stores, media, and reviews —
getting clean JSON instead of HTML to parse.

Each skill is **standalone REST**: a tiny `curl` helper hitting
`https://api.crawlora.net/api/v1` with your `CRAWLORA_API_KEY`. **No MCP setup
required** — install one skill and go. (If you'd rather use agent-native MCP tools,
see [`crawlora-mcp`](https://github.com/Crawlora-org/crawlora-mcp).)

> Get a free Crawlora API key — **2,000 credits/mo, no card** — at
> **[crawlora.net](https://crawlora.net?utm_source=github&utm_medium=referral&utm_campaign=crawlora-skills)**. Billing is **pay-on-success** (only `2xx`
> responses are charged).

## The skills

| Skill | What it does | Platforms |
|---|---|---|
| [`crawlora`](skills/crawlora) | Umbrella catalog skill — fetch structured data from **any** of the 987 Crawlora endpoints; teaches auth, credits, and the full catalog. | all 101 |
| [`crawlora-datasets`](skills/crawlora-datasets) | Search/facet/fetch Crawlora's pre-built hosted datasets in bulk (jobs, apps, GitHub/Instagram/X users, housing markets, SEC companies, Steam, TrustMRR, and more) instead of live-crawling one record at a time. | Datasets (109 endpoints) |
| [`product-price-research`](skills/product-price-research) | Find products, compare prices/sellers, pull marketplace/retailer reviews. | Amazon, eBay, Shopify, Shop.app, Target, Costco, Zalando, Walmart |
| [`youtube-research`](skills/youtube-research) | Transcripts, comments, video/channel metadata, search — no `yt-dlp`. | YouTube |
| [`app-review-mining`](skills/app-review-mining) | App details, reviews, ratings, rankings, similar apps (ASO). | App Store, Google Play |
| [`serp-keyword-research`](skills/serp-keyword-research) | SERP snapshots, autocomplete keyword ideas, Google Trends. | Google, Bing, Brave, DuckDuckGo, Yahoo, Google Trends |
| [`finance-markets-research`](skills/finance-markets-research) | Stock quotes/financials, SEC filings & insider trades, congressional stock disclosures, crypto markets, VC/PE profiles. | Yahoo Finance, SEC EDGAR, Congress, CoinGecko, PitchBook |
| [`prediction-markets-research`](skills/prediction-markets-research) | Odds, order books, price history, and forecast questions. | Polymarket, Kalshi, Metaculus |
| [`movie-tv-research`](skills/movie-tv-research) | Cast/crew, ratings/reviews, streaming availability, box-office numbers. | IMDb, TMDB, JustWatch, Letterboxd, Rotten Tomatoes, Metacritic, Box Office Mojo |
| [`job-market-research`](skills/job-market-research) | Search postings, pull any company's ATS board directly, hiring signals, freelance gigs. | Indeed, Google/Amazon/Apple/Meta/Tesla Jobs, 15+ ATS platforms, Upwork, Fiverr |
| [`social-media-research`](skills/social-media-research) | Public profiles, posts, engagement, search, and trending topics. | Instagram, TikTok, Threads, Bluesky, X, Pinterest, LinkedIn, Facebook, Reddit |
| [`travel-hotel-research`](skills/travel-hotel-research) | Hotel/flight/attraction search and reviews, short-term rentals, event tickets. | Booking.com, Expedia, Agoda, TripAdvisor, Trip.com, Airbnb, Ticketmaster |
| [`sports-scores-research`](skills/sports-scores-research) | Live scores, standings, rosters, player/team stats, boxscores, endurance routes. | ESPN, SofaScore, MLB, Strava |
| [`music-podcast-research`](skills/music-podcast-research) | Tracks/albums/artists/playlists, podcast shows/episodes, record pressings. | Spotify, Spotify Podcasts, Apple Podcasts, Discogs |
| [`book-research`](skills/book-research) | Book/author ratings and reviews, reading lists, audiobooks. | Goodreads, Apple Books |
| [`gaming-research`](skills/gaming-research) | Game pricing, reviews, player counts, deals, charts. | Steam, PlayStation Store |
| [`anime-manga-research`](skills/anime-manga-research) | Title detail, characters, staff, rankings, airing schedule. | Anime, Manga |
| [`developer-oss-research`](skills/developer-oss-research) | Repo/user/org profiles, trending, contributors; Chrome extension detail/reviews. | GitHub, Chrome Web Store |
| [`restaurant-food-delivery-research`](skills/restaurant-food-delivery-research) | Restaurant reviews/reservations, delivery search and menus, grocery search. | Yelp, OpenTable, DoorDash, Uber Eats, Instacart |
| [`business-review-trust-research`](skills/business-review-trust-research) | Product launches, business reputation, verified startup revenue, software reviews. | Product Hunt, TrustMRR, Trustpilot, Capterra |
| [`resale-secondhand-research`](skills/resale-secondhand-research) | C2C resale, streetwear/sneaker, and handmade marketplace search. | Poshmark, Etsy, Vinted, StockX, Mercari, Depop, Whatnot |
| [`real-estate-autos-research`](skills/real-estate-autos-research) | Home search/estimates/market trends, used-car search and dealer/listing detail. | Zillow, Redfin, CarMax, Autotrader, Cars.com |
| [`web-utilities-research`](skills/web-utilities-research) | URL scraping/extraction, tech-stack fingerprinting, geocoding, cost of living, trade records, site traffic, brand lookup. | Geocoding, Numbeo, ImportYeti, SimilarWeb, Brand, Web (scrape/extract/techstack) |

### Per-platform skills

The three biggest bundles above (`product-price-research`, `social-media-research`,
`job-market-research`) also ship as **individual per-platform skills** — same
endpoints, narrower scope, for when you only need one platform. The bundled skills
stay available too; both cover the same underlying endpoints.

| Bundle | Per-platform skills |
|---|---|
| `product-price-research` | [`amazon-research`](skills/amazon-research), [`ebay-research`](skills/ebay-research), [`shopify-research`](skills/shopify-research), [`shop-app-research`](skills/shop-app-research), [`target-research`](skills/target-research), [`costco-research`](skills/costco-research), [`zalando-research`](skills/zalando-research), [`walmart-research`](skills/walmart-research) |
| `social-media-research` | [`instagram-research`](skills/instagram-research), [`tiktok-research`](skills/tiktok-research), [`threads-research`](skills/threads-research), [`bluesky-research`](skills/bluesky-research), [`x-research`](skills/x-research), [`pinterest-research`](skills/pinterest-research), [`linkedin-research`](skills/linkedin-research), [`facebook-research`](skills/facebook-research), [`reddit-research`](skills/reddit-research) |
| `job-market-research` | [`indeed-research`](skills/indeed-research), [`google-jobs-research`](skills/google-jobs-research), [`amazon-jobs-research`](skills/amazon-jobs-research), [`apple-jobs-research`](skills/apple-jobs-research), [`meta-jobs-research`](skills/meta-jobs-research), [`tesla-jobs-research`](skills/tesla-jobs-research), [`ats-job-boards-research`](skills/ats-job-boards-research) (Greenhouse, Lever, Workday, Ashby, and 10+ more ATS platforms), [`upwork-research`](skills/upwork-research), [`fiverr-research`](skills/fiverr-research) |

## Install

### With the `skills` CLI (any agent)

Install one skill (or several, or all) straight from this repo:

```bash
# one skill
npx skills add github.com/Crawlora-org/crawlora-skills --skill youtube-research

# several
npx skills add github.com/Crawlora-org/crawlora-skills \
  --skill product-price-research --skill serp-keyword-research

# everything
npx skills add github.com/Crawlora-org/crawlora-skills --all
```

Then set your key once:

```bash
export CRAWLORA_API_KEY=sk_your_key_here
```

### As a Claude Code plugin marketplace

This repo also ships a [`.claude-plugin/marketplace.json`](.claude-plugin/marketplace.json),
so you can add it as a marketplace and install the bundle:

```text
/plugin marketplace add Crawlora-org/crawlora-skills
/plugin install crawlora-skills@crawlora-skills
```

## Usage

Every skill bundles a `scripts/crawlora.sh` helper and a `reference/` file listing
the exact endpoints, methods, and params it uses. The agent reads `SKILL.md`, picks
the right endpoint, and calls it:

```bash
# GET (key=value params)
scripts/crawlora.sh /amazon/search k="standing desk" | jq '.'
scripts/crawlora.sh /youtube/transcript/dQw4w9WgXcQ | jq '.'

# POST (JSON body)
scripts/crawlora.sh -X POST /google/search '{"searchOption":{"q":"web scraping api"}}' | jq '.'
```

## What's inside

```
crawlora-skills/
├── .claude-plugin/marketplace.json   # also a Claude Code plugin marketplace
├── lib/crawlora.sh                   # shared REST helper template (GET + POST)
├── scripts/
│   ├── tools.json                    # endpoint catalog (source of truth, from crawlora-mcp)
│   ├── generate.mjs                  # emits each skill's reference/ + bundled helper
│   └── validate.mjs                  # frontmatter + body-length lint
└── skills/<name>/{SKILL.md, scripts/crawlora.sh, reference/…}
```

The endpoint catalog comes from Crawlora's published API catalog (vendored as
`scripts/tools.json`). Regenerate the per-skill references after a catalog change:

```bash
node scripts/generate.mjs        # write
node scripts/generate.mjs --check  # CI parity check
node scripts/validate.mjs        # lint all SKILL.md
```

## Links

- Website: [https://crawlora.net](https://crawlora.net?utm_source=github&utm_medium=referral&utm_campaign=crawlora-skills) · Docs & Playground: [https://crawlora.net/docs](https://crawlora.net/docs?utm_source=github&utm_medium=referral&utm_campaign=crawlora-skills) · [https://crawlora.net/playground](https://crawlora.net/playground?utm_source=github&utm_medium=referral&utm_campaign=crawlora-skills)
- API base: `https://api.crawlora.net/api/v1` · Pricing: [https://crawlora.net/pricing](https://crawlora.net/pricing?utm_source=github&utm_medium=referral&utm_campaign=crawlora-skills)
- Agent-native MCP server: https://github.com/Crawlora-org/crawlora-mcp
- Agent Skills (Anthropic): https://docs.claude.com/en/docs/agents-and-tools/agent-skills/overview

## License

[MIT](LICENSE). The Crawlora API itself is a hosted SaaS governed by the
[Crawlora terms](https://crawlora.net?utm_source=github&utm_medium=referral&utm_campaign=crawlora-skills); this repository contains the skill
definitions, helper, and manifests.
