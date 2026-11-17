#!/usr/bin/env python3
"""Validate local Markdown links and image paths without network access."""

from __future__ import annotations

import re
import sys
from pathlib import Path
from urllib.parse import unquote, urlsplit

ROOT = Path(__file__).resolve().parents[1]
MARKDOWN_FILES = [
    ROOT / "README.md",
    ROOT / "CONTRIBUTING.md",
    ROOT / "SECURITY.md",
    ROOT / "SUPPORT.md",
    *sorted((ROOT / "docs").rglob("*.md")),
]
LINK_RE = re.compile(r"!?[[^]]*\]\((?:<([^>]+)>|([^\s)]+))(?:\s+[^)]*)?\)")
REFERENCE_RE = re.compile(r"^\s*\[[^\]]+\]:\s*(?:<([^>]+)>|(\S+))", re.MULTILINE)


def without_code_fences(text: str) -> str:
    result: list[str] = []
    fenced = False
    for line in text.splitlines():
        stripped = line.lstrip()
        if stripped.startswith("~~~") or stripped.startswith(chr(96) * 3):
            fenced = not fenced
            continue
        if not fenced:
            result.append(line)
    return "\n".join(result)


def local_target(source: Path, raw_url: str) -> Path | None:
    parsed = urlsplit(raw_url.strip())
    if parsed.scheme or parsed.netloc:
        return None
    target_text = unquote(parsed.path)
    if not target_text:
        return None
    if target_text.startswith("/"):
        return ROOT / target_text.lstrip("/")
    return source.parent / target_text


def main() -> int:
    errors: list[str] = []
    checked = 0

    for source in MARKDOWN_FILES:
        if not source.is_file():
            continue
        content = without_code_fences(source.read_text(encoding="utf-8"))
        candidates: list[str] = []
        for match in LINK_RE.finditer(content):
            candidates.append(match.group(1) or match.group(2))
        for match in REFERENCE_RE.finditer(content):
            candidates.append(match.group(1) or match.group(2))

        for raw_url in candidates:
            raw_url = raw_url.strip()
            if raw_url.startswith("#"):
                continue
            target = local_target(source, raw_url)
            if target is None:
                continue
            checked += 1
            if not target.exists():
                errors.append(f"{source.relative_to(ROOT)} -> {raw_url} (expected {target})")

    if errors:
        print(f"Found {len(errors)} broken local Markdown link(s):")
        for error in errors:
            print(f"  - {error}")
        return 1

    print(f"Validated {checked} local Markdown link target(s).")
    return 0


if __name__ == "__main__":
    sys.exit(main())
