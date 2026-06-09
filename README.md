# Crawlora Agent Skills

[![Website](https://img.shields.io/badge/website-crawlora.net-2563eb)](https://crawlora.net)
[![Docs](https://img.shields.io/badge/docs-crawlora.net%2Fdocs-555)](https://crawlora.net/docs)
[![Skills](https://img.shields.io/badge/Agent-Skills-7c3aed)](https://docs.claude.com/en/docs/agents-and-tools/agent-skills/overview)
[![License: MIT](https://img.shields.io/badge/License-MIT-green)](LICENSE)

**Crawlora Agent Skills** are ready-to-install [Agent Skills](https://docs.claude.com/en/docs/agents-and-tools/agent-skills/overview)
that teach any coding agent (Claude Code, Codex, Cursor, Copilot, …) how to fetch
**structured public web data** with the [Crawlora](https://crawlora.net) REST API —
search engines, marketplaces, social, finance, maps, app stores, media, and reviews —
getting clean JSON instead of HTML to parse.

Each skill is **standalone REST**: a tiny `curl` helper hitting
`https://api.crawlora.net/api/v1` with your `CRAWLORA_API_KEY`. **No MCP setup
required** — install one skill and go. (If you'd rather use agent-native MCP tools,
see [`crawlora-mcp`](https://github.com/Crawlora-org/crawlora-mcp).)

> Get a free Crawlora API key — **2,000 credits/mo, no card** — at
> **[crawlora.net](https://crawlora.net)**. Billing is **pay-on-success** (only `2xx`
> responses are charged).

## The skills

| Skill | What it does | Platforms |
|---|---|---|
| [`crawlora`](skills/crawlora) | Umbrella catalog skill — fetch structured data from **any** of the 321 Crawlora endpoints; teaches auth, credits, and the full catalog. | all 29+ |
| [`product-price-research`](skills/product-price-research) | Find products, compare prices/sellers, pull marketplace reviews. | Amazon, eBay, Shopify, Shop.app |
| [`youtube-research`](skills/youtube-research) | Transcripts, comments, video/channel metadata, search — no `yt-dlp`. | YouTube |
| [`app-review-mining`](skills/app-review-mining) | App details, reviews, ratings, rankings, similar apps (ASO). | App Store, Google Play |
| [`serp-keyword-research`](skills/serp-keyword-research) | SERP snapshots, autocomplete keyword ideas, Google Trends. | Google, Bing, Brave, Google Trends |

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

- Website: https://crawlora.net · Docs & Playground: https://crawlora.net/docs · https://crawlora.net/playground
- API base: `https://api.crawlora.net/api/v1` · Pricing: https://crawlora.net/pricing
- Agent-native MCP server: https://github.com/Crawlora-org/crawlora-mcp
- Agent Skills (Anthropic): https://docs.claude.com/en/docs/agents-and-tools/agent-skills/overview

## License

[MIT](LICENSE). The Crawlora API itself is a hosted SaaS governed by the
[Crawlora terms](https://crawlora.net); this repository contains the skill
definitions, helper, and manifests.
