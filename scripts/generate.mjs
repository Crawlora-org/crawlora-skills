#!/usr/bin/env node
// Generate per-skill reference/ files and sync the bundled helper from tools.json.
//
// Source of truth: scripts/tools.json (vendored from the crawlora-mcp repo, itself
// generated from Crawlora's published API catalog). Each tool carries an `_http`
// block: { method, path, query[], pathParams[], body, group }.
//
// Run:  node scripts/generate.mjs          (writes files)
//       node scripts/generate.mjs --check   (parity check: exit 1 on any diff)
//
// Outputs:
//   skills/crawlora/reference/catalog.md                 (all groups, all endpoints)
//   skills/<skill>/reference/endpoints.md                (that skill's groups)
//   skills/<skill>/scripts/crawlora.sh                   (copy of lib/crawlora.sh)

import { readFileSync, writeFileSync, mkdirSync, readdirSync, chmodSync, statSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const CHECK = process.argv.includes("--check");

const tools = JSON.parse(readFileSync(join(ROOT, "scripts/tools.json"), "utf8"));
const all = Array.isArray(tools) ? tools : tools.tools || Object.values(tools)[0];

// Skill → list of _http.group names it covers. The umbrella skill covers all.
const SKILLS = {
  "product-price-research": [
    "Amazon",
    "eBay",
    "Shopify",
    "Shop.app",
    "Target",
    "Costco",
    "Zalando",
    "Walmart",
    "H&M",
    "Kohl's",
    "Lululemon",
    "Macy's",
    "Nike",
    "Old Navy",
    "Sam's Club",
    "Ulta Beauty",
    "Wayfair",
    "Wish",
    "Zappos",
    "Zara",
    // 2026-08-24 catalog-drift fold: same catalog/search/product shape as the
    // bundle above, just newly-added retail platforms with no dedicated skill.
    "Adidas",
    "Best Buy",
    "Home Depot",
    "Sephora",
    "SHEIN",
    "Walgreens",
    "IKEA",
    "Chewy",
  ],
  "youtube-research": ["YouTube"],
  "app-review-mining": ["AppStore", "GooglePlay"],
  "serp-keyword-research": ["Google", "Bing", "Brave", "Google Trends", "DuckDuckGo Search", "Yahoo Search"],
  "crawlora-datasets": ["Datasets"],
  "finance-markets-research": ["Yahoo Finance", "SEC EDGAR", "Congress", "CoinGecko", "PitchBook"],
  "prediction-markets-research": ["Polymarket", "Kalshi", "Metaculus"],
  "movie-tv-research": [
    "IMDb",
    "TMDB",
    "JustWatch",
    "Letterboxd",
    "Rotten Tomatoes",
    "Metacritic",
    "Box Office Mojo",
  ],
  "job-market-research": [
    "Indeed",
    "Google Jobs",
    "Amazon Jobs",
    "Apple Jobs",
    "Meta Jobs",
    "Tesla Jobs",
    "Jobs",
    "Upwork",
    "Fiverr",
  ],
  "social-media-research": [
    "Instagram",
    "TikTok",
    "Threads",
    "Bluesky",
    "X",
    "Pinterest",
    "LinkedIn",
    "Facebook",
    "Reddit",
  ],
  "travel-hotel-research": [
    "Booking",
    "Expedia",
    "Agoda",
    "TripAdvisor",
    "Trip.com",
    "Airbnb",
    "Ticketmaster",
  ],
  "sports-scores-research": ["ESPN", "SofaScore", "MLB", "Strava", "DraftKings Sportsbook"],
  "music-podcast-research": ["Spotify", "SpotifyPodcasts", "ApplePodcasts", "Discogs", "SoundCloud"],
  "book-research": ["Goodreads", "AppleBooks", "Audible"],
  "gaming-research": ["Steam", "PlayStation"],
  "anime-manga-research": ["Anime", "Manga"],
  "developer-oss-research": ["GitHub", "ChromeWebStore"],
  "restaurant-food-delivery-research": ["DoorDash", "Yelp", "UberEats", "Instacart", "OpenTable"],
  "business-review-trust-research": ["ProductHunt", "TrustMRR", "Trustpilot", "Capterra", "BBB", "Kickstarter"],
  "resale-secondhand-research": [
    "Poshmark",
    "Etsy",
    "Vinted",
    "StockX",
    "Mercari",
    "Depop",
    "Whatnot",
  ],
  "real-estate-autos-research": ["CarMax", "Redfin", "Autotrader", "Zillow", "Cars.com"],
  "web-utilities-research": ["Numbeo", "Geocoding", "Web", "ImportYeti", "SimilarWeb", "Brand"],

  // Per-platform splits of the biggest bundles above (pilot, 2026-08-11) — the bundled
  // umbrella skills stay as-is for backward compat with already-listed directories;
  // these are additive, finer-grained skills for sharper per-platform discovery.
  "amazon-research": ["Amazon"],
  "ebay-research": ["eBay"],
  "shopify-research": [
    "Shopify",
    // 2026-08-24 catalog-drift fold: brand-pinned Shopify storefronts, byte-for-byte
    // the same endpoint shape (*_collection_products/*_product/*_store) as the
    // generic Shopify group above — no dedicated skill of their own existed.
    "Allbirds",
    "Brooklinen",
    "Cole Haan",
    "Everlane",
    "Fashion Nova",
    "Gymshark",
    "J.Crew",
    "Kylie Cosmetics",
    "Oh Polly",
    "Quince",
    "Rothy's",
    "SKIMS",
    "Steve Madden",
    "The Body Shop",
  ],
  "shop-app-research": ["Shop.app"],
  "target-research": ["Target"],
  "costco-research": ["Costco"],
  "zalando-research": ["Zalando"],
  "walmart-research": ["Walmart"],
  "instagram-research": ["Instagram"],
  "tiktok-research": ["TikTok"],
  "threads-research": ["Threads"],
  "bluesky-research": ["Bluesky"],
  "x-research": ["X"],
  "pinterest-research": ["Pinterest"],
  "linkedin-research": ["LinkedIn"],
  "facebook-research": ["Facebook"],
  "reddit-research": ["Reddit"],
  "indeed-research": ["Indeed"],
  "google-jobs-research": ["Google Jobs"],
  "amazon-jobs-research": ["Amazon Jobs"],
  "apple-jobs-research": ["Apple Jobs"],
  "meta-jobs-research": ["Meta Jobs"],
  "tesla-jobs-research": ["Tesla Jobs"],
  "ats-job-boards-research": ["Jobs"],
  "upwork-research": ["Upwork"],
  "fiverr-research": ["Fiverr"],

  // 2026-08-15 catalog sync: 22 platform groups added since the 2026-08-11 split
  // (H&M/Kohl's/Lululemon/Macy's/Nike/Old Navy/Sam's Club/Ulta/Wayfair/Wish/Zappos/Zara
  // also folded into product-price-research above; SoundCloud into music-podcast-research).
  "hm-research": ["H&M"],
  "kohls-research": ["Kohl's"],
  "lululemon-research": ["Lululemon"],
  "macys-research": ["Macy's"],
  "nike-research": ["Nike"],
  "oldnavy-research": ["Old Navy"],
  "samsclub-research": ["Sam's Club"],
  "ulta-research": ["Ulta Beauty"],
  "wayfair-research": ["Wayfair"],
  "wish-research": ["Wish"],
  "zappos-research": ["Zappos"],
  "zara-research": ["Zara"],
  "twitch-research": ["Twitch"],
  "yahoo-network-research": [
    "Yahoo Autos",
    "Yahoo Entertainment",
    "Yahoo Health",
    "Yahoo Life",
    "Yahoo News",
    "Yahoo Shopping",
    "Yahoo Sports",
    "Yahoo Tech",
  ],

  // 2026-08-24 new dedicated skills, per external-demand research:
  // established competitor MCP servers/products exist for all three.
  "website-monitoring": ["Monitors"],
  "patents-research": ["Google Patents", "USPTO Patent Public Search"],
  "gdelt-research": ["GDELT"],
};

const groupsOf = (t) => (t._http && t._http.group) || "Other";
const byGroup = new Map();
for (const t of all) {
  const g = groupsOf(t);
  if (!byGroup.has(g)) byGroup.set(g, []);
  byGroup.get(g).push(t);
}
for (const list of byGroup.values()) list.sort((a, b) => a.name.localeCompare(b.name));

function params(t) {
  const props = (t.inputSchema && t.inputSchema.properties) || {};
  const required = new Set((t.inputSchema && t.inputSchema.required) || []);
  const names = Object.keys(props);
  if (names.length === 0) return "_none_";
  return names
    .map((n) => {
      const p = props[n] || {};
      const req = required.has(n) ? "**required**" : "optional";
      const desc = (p.description || "").replace(/\s+/g, " ").trim();
      return `\`${n}\` (${p.type || "string"}, ${req})${desc ? " — " + desc : ""}`;
    })
    .join("; ");
}

function endpointLine(t) {
  const h = t._http || {};
  const out = [];
  out.push(`### \`${t.name}\``);
  out.push("");
  out.push(`- **HTTP:** \`${h.method || "GET"} ${h.path || ""}\``);
  const desc = (t.description || "").replace(/\s+/g, " ").trim();
  if (desc) out.push(`- **What:** ${desc}`);
  out.push(`- **Params:** ${params(t)}`);
  out.push("");
  return out.join("\n");
}

function renderGroups(groupNames, title, intro) {
  const lines = [];
  lines.push(`# ${title}`);
  lines.push("");
  lines.push("> Generated from `scripts/tools.json` by `scripts/generate.mjs` — do not edit by hand.");
  lines.push("");
  lines.push(intro);
  lines.push("");
  lines.push(
    "All paths are relative to the API base `https://api.crawlora.net/api/v1` and require the header " +
      "`x-api-key: $CRAWLORA_API_KEY`. Path params like `{id}` are substituted into the URL; " +
      "`GET` params go in the query string; `POST` params go in a JSON body."
  );
  lines.push("");
  const total = groupNames.reduce((n, g) => n + (byGroup.get(g)?.length || 0), 0);
  lines.push(`**${total} endpoints across ${groupNames.length} platform group(s).**`);
  lines.push("");
  for (const g of groupNames) {
    const list = byGroup.get(g) || [];
    if (!list.length) continue;
    lines.push(`## ${g} (${list.length})`);
    lines.push("");
    for (const t of list) lines.push(endpointLine(t));
  }
  return lines.join("\n").replace(/\n{3,}/g, "\n\n").trimEnd() + "\n";
}

const outputs = [];

// Umbrella catalog: every group, alphabetized.
const allGroupNames = [...byGroup.keys()].sort((a, b) => a.localeCompare(b));
outputs.push([
  "skills/crawlora/reference/catalog.md",
  renderGroups(
    allGroupNames,
    "Crawlora endpoint catalog",
    "The complete Crawlora public-web-data API surface, grouped by platform. Use this to pick the " +
      "right endpoint for any job, then call it via `scripts/crawlora.sh` (see SKILL.md)."
  ),
]);

// Per-skill endpoint references.
for (const [skill, groups] of Object.entries(SKILLS)) {
  outputs.push([
    `skills/${skill}/reference/endpoints.md`,
    renderGroups(
      groups,
      `${skill} — endpoint reference`,
      `Endpoints this skill uses, grouped by platform. Call them via \`scripts/crawlora.sh\` (see SKILL.md).`
    ),
  ]);
}

// Sync the bundled helper into every skill folder.
const helper = readFileSync(join(ROOT, "lib/crawlora.sh"), "utf8");
// Directories only. A plain readdirSync picks up macOS .DS_Store and any
// other stray file, and the loop below then tries to mkdir inside it —
// ENOTDIR, mid-run, after some reference files have already been
// rewritten. validate.mjs already filters this way; match it.
const skillDirs = readdirSync(join(ROOT, "skills"), { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .map((entry) => entry.name);
for (const s of skillDirs) outputs.push([`skills/${s}/scripts/crawlora.sh`, helper]);

// Executable helper scripts must carry the +x bit — writeFileSync alone
// leaves them at the default umask (non-executable), which git then commits
// as 100644. A user who installs the skill and runs `scripts/crawlora.sh`
// as every SKILL.md example shows gets "permission denied". Enforce +x for
// every generated .sh file, and treat a missing +x as drift in --check too.
const isExecutable = (abs) => {
  try {
    return (statSync(abs).mode & 0o111) !== 0;
  } catch {
    return false;
  }
};

let diffs = 0;
for (const [rel, content] of outputs) {
  const abs = join(ROOT, rel);
  const isScript = rel.endsWith(".sh");
  let current = null;
  try {
    current = readFileSync(abs, "utf8");
  } catch {}
  const contentChanged = current !== content;
  const needsExecFix = isScript && current !== null && !isExecutable(abs);
  if (!contentChanged && !needsExecFix) continue;
  diffs++;
  if (CHECK) {
    if (contentChanged) console.error(`DRIFT: ${rel} is out of date — run \`node scripts/generate.mjs\``);
    else console.error(`DRIFT: ${rel} is missing its executable bit — run \`node scripts/generate.mjs\``);
  } else {
    mkdirSync(dirname(abs), { recursive: true });
    writeFileSync(abs, content);
    if (isScript) chmodSync(abs, 0o755);
    console.log(`wrote ${rel}`);
  }
}

if (CHECK && diffs > 0) {
  console.error(`\n${diffs} generated file(s) out of date.`);
  process.exit(1);
}
if (CHECK) console.log("generator parity OK — all generated files up to date.");
else console.log(`\ndone — ${outputs.length} file(s) checked, ${diffs} written.`);
