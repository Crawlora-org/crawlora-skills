#!/bin/zsh
# Re-sync crawlora-skills to the directories that support CLI automation:
#   1. skills.sh / agentskill.sh install telemetry (via `npx skills add`)
#   2. ClawHub (via `npx clawhub skill publish`, with real categories set)
#
# Run this after adding/changing skills in this repo. Safe to re-run any time
# — already-published, unchanged skills just no-op with a harmless
# "Version X already exists" message from ClawHub.
#
# Usage:
#   ./scripts/sync-directories.sh            # run from anywhere; clones/uses
#                                             # this checkout for ClawHub
#
# Requires: `clawhub login` already run once (device-flow auth persists).
#
# CRITICAL — do not "simplify" this by running `npx skills add` or
# `npx clawhub` directly from this repo's own working directory. Both
# installer CLIs write local install artifacts (.agents/, .claude/,
# skills-lock.json) into the CURRENT directory, and `skills add` specifically
# REPLACES skills/<name>/ with a symlink into .agents/skills/<name>/ — which
# collides with and destroys this repo's own real skills/<name>/ directories.
# That's why step 1 below always runs from a throwaway scratch directory.
# See the team's internal incident writeup for the full history.

set -e

REPO_URL="github.com/Crawlora-org/crawlora-skills"
REPO_ROOT="$(cd "$(dirname "$0")/.." && pwd)"

echo "=== 1/2: skills.sh + agentskill.sh telemetry ==="
echo "(npx skills add's install telemetry feeds skills.sh directly; this is"
echo " NOT the same as agentskill.sh's own web-form import — see the runbook"
echo " for that manual step.)"
SCRATCH=$(mktemp -d)
(
  cd "$SCRATCH"
  npx -y skills add "$REPO_URL" --all
)
rm -rf "$SCRATCH"

echo ""
echo "=== 2/2: ClawHub — publish every skill with real categories ==="
echo "(default: research,integrations — override table below for anything"
echo " domain-specific; add new skill slugs to CATS as they're created)"

cd "$REPO_ROOT"

declare -A CATS
for d in skills/*/; do
  name=$(basename "$d")
  CATS[$name]="research,integrations"
done

# Domain-specific overrides — a 3rd category slot where it's clearly relevant.
# Valid slugs (max 3 per skill): integrations, automation, research,
# development, productivity, communication, creative, knowledge, agents,
# operations, security, finance, lifestyle, other.
CATS[crawlora]="research,integrations,automation"
CATS[finance-markets-research]="research,finance,integrations"
CATS[prediction-markets-research]="research,finance,integrations"
CATS[developer-oss-research]="research,development,integrations"
CATS[social-media-research]="research,communication,integrations"
CATS[instagram-research]="research,communication,integrations"
CATS[tiktok-research]="research,communication,integrations"
CATS[threads-research]="research,communication,integrations"
CATS[bluesky-research]="research,communication,integrations"
CATS[x-research]="research,communication,integrations"
CATS[pinterest-research]="research,communication,integrations"
CATS[linkedin-research]="research,communication,integrations"
CATS[facebook-research]="research,communication,integrations"
CATS[reddit-research]="research,communication,integrations"

for name in "${(@k)CATS}"; do
  echo "--- $name (${CATS[$name]}) ---"
  npx -y clawhub@latest skill publish "skills/$name" \
    --categories "${CATS[$name]}" \
    --changelog "Sync via scripts/sync-directories.sh" || true
done

echo ""
echo "Done. Web-only steps (agentskill.sh import, skillsdirectory.com,"
echo "claudeskills.club, awesomeclaude.ai PR) are NOT covered by this script"
echo "— see the team's internal submission runbook for those steps."
