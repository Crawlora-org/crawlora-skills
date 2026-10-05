import { test } from "node:test";
import assert from "node:assert/strict";
import { mkdtempSync, writeFileSync, readFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";

const root = fileURLToPath(new URL("..", import.meta.url));
const catalog = JSON.parse(readFileSync(join(root, "scripts/tools.json"), "utf8"));
const skills = ["fotmob-research", "multi-sport-match-research", "microsoft-store-research",
  "xbox-research", "deal-discovery-research", "substack-research", "google-finance-research",
  "company-ranking-research", "hiring-demand-analysis", "news-media-research",
  "sports-scores-research", "collectibles-market-research", "health-provider-research",
  "prescription-price-research", "rental-housing-research", "product-price-research",
  "travel-accommodation-research",
  "relocation-cost-comparison", "brand-mention-research", "congressional-disclosure-research",
  "newsletter-topic-landscape", "football-player-comparison", "football-viewing-guide",
  "used-car-price-history-analysis", "investor-fit-research", "developer-talent-discovery",
  "institutional-ownership-research", "patent-landscape-analysis", "flight-itinerary-comparison",
  "book-market-positioning", "film-box-office-comparison", "streaming-availability-comparison",
  "forecast-consensus-comparison", "sec-insider-transaction-analysis", "chain-store-footprint-analysis",
  "app-privacy-disclosure-comparison", "game-price-history-research", "podcast-topic-landscape",
  "broadcast-coverage-comparison", "business-complaint-pattern-analysis", "open-source-project-shortlisting",
  "mlb-statcast-player-comparison", "cricket-player-team-comparison", "twitch-category-opportunity-research",
  "music-release-landscape", "nft-collection-liquidity-research", "creator-membership-comparison",
  "supply-chain-concentration-analysis", "job-posting-comparison", "app-release-feedback-analysis",
  "youtube-content-gap-analysis", "company-identity-reconciliation", "pet-care-provider-shortlisting"];

test("changed workflow examples use allowed methods, routes, and real contract parameters", () => {
  const dir = mkdtempSync(join(tmpdir(), "crawlora-examples-"));
  try {
    // Intercept curl, including POST stdin; no production key or network request.
    writeFileSync(join(dir, "curl"), `#!${process.execPath}\n` +
      'const fs = require("node:fs"); console.log(JSON.stringify({ args: process.argv.slice(2), body: fs.readFileSync(0, "utf8") }));\n', { mode: 0o755 });
    for (const skill of skills) {
      const skillDir = join(root, "skills", skill);
      const source = readFileSync(join(skillDir, "SKILL.md"), "utf8");
      const examples = source.split("\n").filter(line => line.startsWith("scripts/crawlora.sh ") && !line.includes("|"));
      assert.ok(examples.length, `${skill} needs an executable example`);
      for (const example of examples) {
        const result = spawnSync("/bin/bash", ["-c", example], { cwd: skillDir, input: "", encoding: "utf8",
          env: { ...process.env, PATH: `${dir}:${process.env.PATH}`, CRAWLORA_API_KEY: "test-key" } });
        assert.equal(result.status, 0, `${skill}: ${example}: ${result.stderr}`);
        const { args, body } = JSON.parse(result.stdout);
        const path = args.at(-1).replace("https://api.crawlora.net/api/v1", "");
        const method = args.includes("-X") ? args[args.indexOf("-X") + 1] : "GET";
        const tool = catalog.find(tool => tool._http.method === method && tool._http.path === path);
        assert.ok(tool, `${method} ${path} must exist in the published catalog`);
        if (method === "GET") {
          const pairs = args.filter((_, index) => args[index - 1] === "--data-urlencode").map(value => {
            const separator = value.indexOf("=");
            return [value.slice(0, separator), value.slice(separator + 1)];
          });
          const keys = pairs.map(([key]) => key);
          for (const key of keys) assert.ok(tool._http.query.includes(key), `${tool.name}: unknown parameter ${key}`);
          for (const [key, value] of pairs) {
            const values = tool.inputSchema.properties[key]?.enum;
            if (values) assert.ok(values.some(allowed => String(allowed) === value), `${tool.name}: invalid ${key}=${value}`);
          }
          for (const key of tool.inputSchema.required) assert.ok(keys.includes(key), `${tool.name}: missing ${key}`);
        } else {
          const value = JSON.parse(body);
          const schema = tool.inputSchema.properties[tool._http.body];
          for (const key of Object.keys(value)) assert.ok(key in schema.properties, `${tool.name}: unknown body field ${key}`);
          for (const key of schema.required || []) assert.ok(key in value, `${tool.name}: missing ${key}`);
        }
      }
    }
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});
