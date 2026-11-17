#!/usr/bin/env python3
"""Check that key CodeTracker directories and entry points exist."""

from __future__ import annotations

import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
REQUIRED_PATHS = [
    "docs",
    "docs/assets",
    "docs/templates",
    "leetcode/src",
    "leetcode/src/Auth",
    "leetcode/src/components",
    "leetcode/src/config",
    "leetcode/public",
    "leetcode/package.json",
    "leetcode/package-lock.json",
    "leetcode/firebase.json",
    "leetcode/src/main.jsx",
    "leetcode/src/App.jsx",
    "leetcode/src/config/firebase.jsx",
    "leetcode/src/components/AllQuestions.jsx",
    ".github/workflows",
    ".env.example",
    "LICENSE",
    "README.md",
]


def main() -> int:
    missing = [item for item in REQUIRED_PATHS if not (ROOT / item).exists()]
    if missing:
        print("Project structure check failed. Missing paths:")
        for item in missing:
            print(f"  - {item}")
        return 1

    print(f"Verified {len(REQUIRED_PATHS)} required project paths.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
