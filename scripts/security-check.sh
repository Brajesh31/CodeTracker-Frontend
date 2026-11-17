#!/usr/bin/env bash
# Check tracked files for local environment paths and high-confidence secret markers.
set -euo pipefail

if ! git rev-parse --show-toplevel >/dev/null 2>&1; then
  echo "Run this script from inside a Git working tree." >&2
  exit 2
fi

violations=0
while IFS= read -r file; do
  case "$file" in
    .env.local|.env.*.local|leetcode/.env.local|leetcode/.env.*.local|*/.env.local|*/.env.*.local)
      echo "Tracked local environment file: $file" >&2
      violations=1
      ;;
  esac

  if [[ -f "$file" ]] && grep -Iq . "$file"; then
    if grep -nE -- '-----BEGIN (RSA |EC |OPENSSH )?PRIVATE KEY-----|gh[pousr]_[A-Za-z0-9]{30,}|github_pat_[A-Za-z0-9_]{30,}' "$file" >/dev/null; then
      echo "Potential secret pattern in tracked file: $file" >&2
      violations=1
    fi
  fi
done < <(git ls-files)

if [[ "$violations" -ne 0 ]]; then
  echo "Security hygiene check failed. Rotate any exposed credential and remove it from Git history." >&2
  exit 1
fi

echo "No tracked local environment files or high-confidence key/token markers found."
