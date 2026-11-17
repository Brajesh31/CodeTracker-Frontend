# 👩‍💻 Development Guide

## Work from the app directory

The repository root contains governance, documentation, validation scripts, and GitHub workflows. The React package and lockfile are in leetcode/:

~~~sh
cd leetcode
npm ci
npm run dev
~~~

Use Node.js 22 from the repository .nvmrc. Commit source changes, not node_modules/, dist/, .env.local, or local editor state.

## Project structure

- src/main.jsx: React mounting and BrowserRouter.
- src/App.jsx: auth-state subscription and routes.
- src/Auth/: login and signup forms.
- src/components/: landing page, dashboard, and question list.
- src/config/firebase.jsx: Firebase client initialization.
- public/: static browser assets.
- firebase.json: Firebase Hosting configuration for the Vite output.
- package.json and package-lock.json: npm scripts and resolved dependencies.

See [Project Structure](project-structure.md) for the directory guide.

## Existing routes and behavior

| Path | Behavior |
| --- | --- |
| / | Landing page, extension link, and login navigation |
| /login | Email/password login |
| /signup | Email/password account creation and profile display-name update |
| /dashboard | Rendered when auth state contains a user; displays a Firestore question list |

The login and signup files contain Google popup handlers that are not currently wired to visible buttons. There is no implemented account-recovery flow, question form, or explicit not-found route in the tracked app.

## Firebase and sample data

Configure a non-production Firebase web app using .env.local as described in [Installation](installation.md). Do not use real user records for local development. Synthetic Firestore data should use the fields consumed by AllQuestions.jsx: uid, title, difficulty, email, link, time, and topics.

No Firestore Rules or emulator configuration is checked in. Do not test by opening broad production access. Ask the maintainer to review Rule changes and use Firebase Emulator for security-rule validation where possible. Details are in [Database](database.md).

## Code conventions

- Follow nearby React component patterns and keep state local unless shared behavior requires otherwise.
- Keep user-facing text understandable and forms accessible by labels and keyboard.
- Handle loading, empty, and error states explicitly when adding asynchronous flows.
- Validate external links and Firestore records before rendering them.
- Keep secrets and privileged Firebase credentials out of client code and VITE_ variables.
- Update root documentation when behavior, routes, environment variables, or schema changes.
- Use npm and the committed npm lockfile. Do not introduce a second package manager without a documented decision.

## Local checks

From leetcode/:

~~~sh
npm ci
npm run lint
npm run build
~~~

The package currently does not declare dedicated unit, integration, E2E, or Firebase Emulator test scripts. Do not claim coverage that has not been measured. Repository-level checks run from the root:

~~~sh
python scripts/validate-docs.py
python scripts/validate-links.py
python scripts/check-project-structure.py
bash scripts/security-check.sh
~~~

## Pull requests

Use [Contributing](../CONTRIBUTING.md) and the repository pull-request template. Include verification results, synthetic screenshots for UI work, and any required Firebase Console or Security Rules changes. Use the templates directory for feature specs, ADRs, test plans, and audits.
