# 🧰 Repository Validation Scripts

These scripts validate repository documentation and hygiene. They do not replace application tests, Firebase Security Rules tests, or manual accessibility review.

## Prerequisites

- Python 3.10 or newer.
- Git available for the security check.
- Run commands from the repository root.

## Available scripts

| Script | Purpose | Exit behavior |
| --- | --- | --- |
| validate-docs.py | Checks required documentation and parses SVG XML | Non-zero on missing/empty docs or malformed SVG |
| validate-links.py | Checks local Markdown links and image references | Non-zero when a local target is missing |
| check-project-structure.py | Checks key paths described by the repository contract | Non-zero when a required path is missing |
| security-check.sh | Checks tracked paths and tracked text for high-confidence secret patterns | Non-zero when a likely secret or local env path is tracked |

## Run all repository checks

~~~sh
python scripts/validate-docs.py
python scripts/validate-links.py
python scripts/check-project-structure.py
bash scripts/security-check.sh
~~~

## Safety and scope

- The scripts are offline and use the Python standard library and Git.
- Local link checking does not validate remote website availability.
- SVG validation checks XML well-formedness, not artistic quality or browser rendering.
- The secret scan looks for high-confidence patterns; it is not a substitute for GitHub secret scanning or Gitleaks.
- A passing documentation script does not mean the application builds or Firebase Rules are secure.
