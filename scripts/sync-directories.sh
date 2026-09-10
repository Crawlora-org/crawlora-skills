#!/bin/zsh
# Sync public GitHub skills to skills.sh and ClawHub. Web directories still
# require their own imports; skills.sh telemetry does not prove those are synced.
# Usage: ./scripts/sync-directories.sh [all|skills-sh|clawhub]
# Requires Node 22+, npx, git, and an authenticated ClawHub CLI.
# Set CRAWLORA_SYNC_METADATA=1 for an intentional categories-only refresh.
# Run installers only in scratch space: their skills/ directory would otherwise
# collide with this repository's source folders. --copy avoids source symlinks.
set -eu

mode="${1:-all}"
case "$mode" in all|skills-sh|clawhub) ;; *) echo "Usage: $0 [all|skills-sh|clawhub]" >&2; exit 2 ;; esac
REPO_URL="github.com/Crawlora-org/crawlora-skills"
REPO_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
SOURCE_COMMIT="$(git -C "$REPO_ROOT" rev-parse HEAD)"
git -C "$REPO_ROOT" diff --quiet HEAD -- skills || { echo "Commit skill changes before syncing." >&2; exit 1; }
REMOTE_COMMIT="$(git -C "$REPO_ROOT" ls-remote origin refs/heads/main | cut -f1)"
[[ "$SOURCE_COMMIT" == "$REMOTE_COMMIT" ]] || { echo "Push the source commit to main before syncing." >&2; exit 1; }
SCRATCH=$(mktemp -d)
trap 'rm -rf "$SCRATCH"' EXIT
cd "$SCRATCH"
failed=0
pending=0

if [[ "$mode" == all || "$mode" == skills-sh ]]; then
  echo "skills.sh: install the public repository in disposable scratch space"
  if ! npx -y skills add "$REPO_URL" --all --copy --agent codex -y; then
    echo "skills.sh install failed; directory indexing is not verified." >&2
    failed=1
  fi
fi
[[ "$mode" != skills-sh ]] || exit "$failed"

declare -A CATS
for d in "$REPO_ROOT"/skills/*/; do
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
CATS[tiktok-trend-research]="research,communication,integrations"
CATS[tiktok-creator-research]="research,communication,integrations"
CATS[threads-research]="research,communication,integrations"
CATS[bluesky-research]="research,communication,integrations"
CATS[x-research]="research,communication,integrations"
CATS[pinterest-research]="research,communication,integrations"
CATS[linkedin-research]="research,communication,integrations"
CATS[facebook-research]="research,communication,integrations"
CATS[reddit-research]="research,communication,integrations"
CATS[influencer-discovery]="research,communication,integrations"
CATS[journalist-media-research]="research,communication,integrations"
CATS[tiktok-ad-research]="research,creative,integrations"
CATS[sec-filings-research]="research,finance,integrations"
CATS[startup-acquisition-research]="research,finance,integrations"
CATS[housing-market-research]="research,finance,integrations"
CATS[podcast-guest-research]="research,communication,integrations"
CATS[chrome-extension-research]="research,development,integrations"
CATS[event-venue-research]="research,lifestyle,integrations"

for name in "${(@ok)CATS}"; do
  echo "ClawHub: $name"
  # Categories force a new release even when bytes match. Compare first without
  # catalog metadata, then attach categories and GitHub provenance on changes.
  if ! npx -y clawhub@latest skill publish "$REPO_ROOT/skills/$name"       --owner crawlora-org --dry-run --json > "$SCRATCH/plan.json"; then
    failed=1
    continue
  fi
  decision=$(node -e 'const p=JSON.parse(require("fs").readFileSync(process.argv[1],"utf8")); console.log(p.status === "unchanged" ? "skip" : "publish")' "$SCRATCH/plan.json")
  if [[ "$decision" == skip && "${CRAWLORA_SYNC_METADATA:-0}" != 1 ]]; then
    echo "Identical content already stored (possibly pending); verify public visibility without republishing."
    continue
  fi
  if ! npx -y clawhub@latest skill publish "$REPO_ROOT/skills/$name"       --owner crawlora-org --categories "${CATS[$name]}"       --source-repo Crawlora-org/crawlora-skills --source-commit "$SOURCE_COMMIT"       --source-ref main --source-path "skills/$name"       --changelog "Sync skill instructions, references, and helper from GitHub $SOURCE_COMMIT"       --json > "$SCRATCH/result.json"; then
    failed=1
    continue
  fi
  result_status=$(node -e 'console.log(JSON.parse(require("fs").readFileSync(process.argv[1],"utf8")).status)' "$SCRATCH/result.json")
  echo "$name: $result_status"
  [[ "$result_status" != pending-publication ]] || pending=$((pending + 1))
done

echo "ClawHub submissions pending publication: $pending. Submission is not proof of public visibility."
echo "Verify live versions/file hashes and complete skillsdirectory.com,"
echo "claudeskills.club, claudeskills.info, skills.pub, and the existing awesome-list PR separately."
exit "$failed"
