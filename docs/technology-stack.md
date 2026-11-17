# 🧰 Technology Stack

The list below reflects the reviewed package manifest and source files. It is not a guarantee that each dependency is currently maintained or that the latest release is installed.

## Runtime and framework

| Technology | Observed role | Version evidence |
| --- | --- | --- |
| JavaScript ES modules | Application language and module format | package.json type=module |
| React | UI component framework | package.json range 18.3.1 |
| React DOM | Browser rendering | package.json range 18.3.1 |
| React Router DOM | Client-side routing | package.json range 6.24.1 |
| Vite | Development server and production bundler | package.json range 5.3.1 |
| Tailwind CSS | Utility-first styling | package.json range 3.4.4 |
| Firebase JS SDK | Authentication, Firestore, Storage client SDK | package.json range 10.12.3 |

## Development tooling

| Tool | Purpose |
| --- | --- |
| npm | Dependency installation and scripts |
| package-lock.json | Reproducible dependency resolution |
| ESLint | JavaScript linting through the npm lint script |
| PostCSS and Autoprefixer | CSS processing |
| GitHub Actions | CI and Firebase Hosting automation |
| Firebase Hosting | Static SPA hosting |

## Architecture characteristics

- Frontend-only repository; no Node application server is checked in.
- No REST or GraphQL framework is present.
- No relational database or ORM is present.
- Cloud Firestore is accessed through the browser SDK.
- No dedicated component test, E2E, or performance test framework is declared in the package manifest.
- Firebase Storage is initialized in config but is not used by the currently reviewed UI.

## Dependency policy

- Use npm, not an alternative package manager, for the documented workflow.
- Install with npm ci in leetcode/.
- Review major upgrades as migrations, not routine patches.
- Keep package.json and package-lock.json synchronized.
- Review license, security advisories, transitive dependency changes, and runtime support before merging.
- Do not claim dependency updates passed until CI and an actual install/build confirm them.

## Updating this inventory

Check package.json, package-lock.json, source imports, and workflows after every stack change. Record migration concerns in [decision-log.md](decision-log.md).
