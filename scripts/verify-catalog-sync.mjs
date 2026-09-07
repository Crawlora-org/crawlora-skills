#!/usr/bin/env node

import { readFile } from "node:fs/promises";

const localPath = process.env.LOCAL_CATALOG || "scripts/tools.json";
const remoteURL = process.env.MCP_TOOLS_URL ||
  `https://raw.githubusercontent.com/Crawlora-org/crawlora-mcp/main/tools.json?drift=${Date.now()}`;

async function fetchWithRetry(url, attempts = 3) {
  let lastError;
  for (let attempt = 1; attempt <= attempts; attempt += 1) {
    try {
      const response = await fetch(url, {
        headers: { "user-agent": "crawlora-skills-catalog-drift-check" },
      });
      if (response.ok) return response;
      lastError = new Error(`HTTP ${response.status}`);
    } catch (error) {
      lastError = error;
    }
    if (attempt < attempts) await new Promise((resolve) => setTimeout(resolve, attempt * 1000));
  }
  throw lastError;
}

const remoteResponse = await fetchWithRetry(remoteURL);
if (!remoteResponse.ok) throw new Error(`MCP catalog fetch failed: HTTP ${remoteResponse.status}`);

const local = JSON.parse(await readFile(localPath, "utf8"));
const remotePayload = await remoteResponse.json();
const remote = Array.isArray(remotePayload) ? remotePayload : remotePayload.tools;
if (!Array.isArray(local) || !Array.isArray(remote) || local.length === 0 || remote.length === 0) {
  throw new Error("local or remote MCP catalog is empty or malformed");
}

const localJSON = JSON.stringify(local);
const remoteJSON = JSON.stringify(remote);
if (localJSON !== remoteJSON) {
  throw new Error(`scripts/tools.json differs from crawlora-mcp/main/tools.json (${local.length} vs ${remote.length} tools)`);
}

const groups = new Set(remote.map((tool) => tool?._http?.group).filter(Boolean));
console.log(`skills catalog matches crawlora-mcp: ${remote.length} tools across ${groups.size} groups`);
