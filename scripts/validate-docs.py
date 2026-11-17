#!/usr/bin/env python3
"""Validate required CodeTracker documentation and SVG XML assets."""

from __future__ import annotations

import sys
import xml.etree.ElementTree as ET
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]

REQUIRED_FILES = [
    "README.md",
    "LICENSE",
    "CODE_OF_CONDUCT.md",
    "CONTRIBUTING.md",
    "SECURITY.md",
    "SUPPORT.md",
    "CHANGELOG.md",
    "ROADMAP.md",
    "docs/README.md",
    "docs/architecture.md",
    "docs/project-structure.md",
    "docs/installation.md",
    "docs/deployment.md",
    "docs/database.md",
    "docs/templates/README.md",
    "docs/templates/adr-template.md",
    "docs/templates/feature-specification-template.md",
    "docs/templates/security-audit-template.md",
    "docs/templates/incident-report-template.md",
]


def main() -> int:
    errors: list[str] = []
    for relative in REQUIRED_FILES:
        path = ROOT / relative
        if not path.is_file():
            errors.append(f"Missing required file: {relative}")
        elif not path.read_text(encoding="utf-8").strip():
            errors.append(f"Empty required file: {relative}")

    docs = ROOT / "docs"
    for path in sorted(docs.rglob("*.md")):
        if not path.read_text(encoding="utf-8").strip():
            errors.append(f"Empty Markdown file: {path.relative_to(ROOT)}")

    for path in sorted(docs.rglob("*.svg")):
        try:
            ET.parse(path)
        except (ET.ParseError, OSError) as exc:
            errors.append(f"Invalid SVG XML: {path.relative_to(ROOT)} ({exc})")

    if errors:
        print("Documentation validation failed:")
        for error in errors:
            print(f"  - {error}")
        return 1

    markdown_count = len(list(docs.rglob("*.md")))
    svg_count = len(list(docs.rglob("*.svg")))
    print(f"Validated {markdown_count} Markdown files and {svg_count} SVG assets.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
