# Contributing to CodeTracker

Thanks for considering a contribution. This repository is a small React/Vite frontend, so focused changes with a clear user benefit are easiest to review. Read this guide, the [Code of Conduct](CODE_OF_CONDUCT.md), and relevant documentation before opening a pull request.

## Before you start

- Search existing issues and pull requests to avoid duplicating work.
- For a substantial feature or a change to authentication, data access, or deployment, open an issue first to agree on expected behavior.
- Do not include real user records, personal data, Firebase service-account credentials, private keys, production configuration, or secrets in commits, screenshots, or issues.
- Confirm that each new dependency or asset has a compatible license and identify it in the pull request.

## Development setup

The application is nested in leetcode/. Follow [Installation](docs/installation.md), then run commands from that directory:

~~~sh
npm ci
npm run dev
npm run lint
npm run build
~~~

Use a development Firebase project and test accounts. Configure Firestore Security Rules before exercising database access. See [Development](docs/development.md) and [Security](SECURITY.md).

## Change expectations

- Keep changes scoped to the issue and match the existing React/JavaScript style.
- Prefer accessible labels, meaningful button text, keyboard-friendly controls, and clear loading/error states.
- Keep Firebase access in the existing client configuration boundary; never add privileged credentials to browser code.
- Treat Firestore rules as the actual access boundary. A frontend filter or hidden route does not secure records.
- Update documentation when commands, routes, environment variables, data fields, or deployment behavior changes.
- Do not commit generated output such as leetcode/dist/, node_modules/, local environment files, or local IDE state.
- Avoid broad formatting changes that obscure the functional diff.

## Pull request steps

1. Create a branch from the current main branch with a descriptive name, such as fix/dashboard-empty-state.
2. Make the smallest coherent change and keep secrets and live user data out of the branch.
3. From leetcode/, run npm run lint and npm run build when your change affects the app. Record commands and outcomes honestly; if a command cannot run, state why.
4. Review git diff for accidental configuration, generated files, unrelated edits, and sensitive values.
5. Open a pull request against main with a concise summary, motivation, implementation notes, and verification results. Link related issues.
6. Include screenshots or a short recording for visible UI changes, using synthetic data only. Mention any Firebase console or rules changes required outside this repository.

A maintainer may request changes or clarification before merging. Do not squash or rewrite another contributor's branch without coordinating with them.

## Commit messages

Use short, descriptive messages that say what changed, for example: docs: explain Firestore ownership model or fix: show empty question state. Keep unrelated changes in separate commits on your own branch.

## Reporting vulnerabilities

Do not report suspected security issues in a public issue or pull request. Follow [SECURITY.md](SECURITY.md) for private reporting instructions.
