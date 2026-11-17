# 🤝 Contributing to CodeTracker

Thanks for considering a contribution. CodeTracker is an early-stage React/Vite frontend with Firebase client integration. Focused changes with a clear user benefit are easiest to review. Read the [Code of Conduct](CODE_OF_CONDUCT.md), [Security Policy](SECURITY.md), and relevant docs before changing code.

## Before you start

- Search existing issues and pull requests to avoid duplicating work.
- For a substantial feature or a change to authentication, data access, or deployment, open an issue first to agree on expected behavior.
- Do not include real user records, personal data, Firebase service-account credentials, private keys, production configuration, or secrets in commits, screenshots, or issues.
- Confirm that each new dependency or asset has a compatible license and identify it in the pull request.
- Use the feature specification and ADR templates for substantial product or architecture changes.

## Development setup

The application is nested in leetcode/. Follow [Installation](docs/installation.md), then run commands from that directory:

~~~sh
npm ci
npm run dev
npm run lint
npm run build
~~~

Use Node.js 22 as declared by .nvmrc. Use a development Firebase project and synthetic accounts. Configure Firestore Security Rules before exercising database access. See [Development](docs/development.md) and [Database](docs/database.md).

## Change expectations

- Keep changes scoped to the issue and match the existing React/JavaScript style.
- Prefer accessible labels, meaningful button text, keyboard-friendly controls, and clear loading/error states.
- Keep Firebase access in the existing client configuration boundary; never add privileged credentials to browser code.
- Treat Firestore Rules as the actual access boundary. A frontend filter or hidden route does not secure records.
- Update documentation when commands, routes, environment variables, data fields, or deployment behavior changes.
- Do not commit generated output such as leetcode/dist/, node_modules/, local environment files, or local IDE state.
- Avoid broad formatting changes that obscure the functional diff.
- Add real tests for new behavior where a suitable test harness exists. Do not add scripts that merely print success.
- Do not fabricate screenshots, metrics, test results, or badges.

## Pull request steps

1. Create a branch from the current main branch with a descriptive name.
2. Make the smallest coherent change and preserve unrelated project files.
3. From leetcode/, run npm ci, npm run lint, and npm run build when your change affects the app.
4. Run the repository validators from the root when documentation or configuration changes.
5. Review the full diff for accidental configuration, generated files, unrelated edits, and sensitive values.
6. Open a pull request against main with a concise summary, motivation, implementation notes, and actual verification results.
7. Include genuine screenshots or a short recording for visible UI changes, using synthetic data only.
8. Mention any Firebase Console, Security Rules, or external extension changes required outside this repository.

A maintainer may request changes or clarification before merging. Do not squash or rewrite another contributor's branch without coordinating with them.

## Commit messages

Use short, descriptive messages, for example: docs: explain Firestore ownership model or fix: show empty question state. Keep unrelated changes in separate commits on your own branch.

## Reporting vulnerabilities

Do not report suspected security issues in a public issue or pull request. Follow [SECURITY.md](SECURITY.md) for private reporting instructions.
