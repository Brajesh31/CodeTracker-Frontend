# Development Guide

## Work from the app directory

The repository root contains documentation and GitHub workflows. The React package and lockfile are in leetcode/:

~~~sh
cd leetcode
npm ci
npm run dev
~~~

Use Node and npm compatible with the committed lockfile. Commit source changes, not node_modules/, dist/, .env.local, or local editor state.

## Project structure

- src/main.jsx: React mounting and browser router.
- src/App.jsx: auth-state subscription and routes.
- src/Auth/: login and signup forms.
- src/components/: landing page, dashboard, and question list.
- src/config/firebase.jsx: Firebase client initialization.
- public/: static browser assets.
- firebase.json: Firebase Hosting configuration for the Vite output.

## Existing routes and behavior

| Path | Behavior |
| --- | --- |
| / | Landing page, extension link, and login navigation. |
| /login | Email/password login. |
| /signup | Email/password account creation and profile display-name update. |
| /dashboard | Rendered when auth state contains a user; displays a Firestore question list. |

The login and signup files contain Google popup handlers that are not currently wired to visible buttons. There is no implemented account-recovery flow, question form, or explicit not-found route in the tracked app.

## Firebase and sample data

Configure a non-production Firebase web app using .env.local as described in [Installation](installation.md). Do not use real user records for local development. Synthetic Firestore data should use the fields consumed by AllQuestions.jsx: uid, title, difficulty, email, link, time, and topics.

No Firestore rules or emulator configuration is checked in. Do not test by opening broad production access. Ask the maintainer to review rule changes and use the Firebase Emulator for security-rule validation where possible. Details are in [Database](database.md).

## Code conventions

- Follow nearby React component patterns and keep state local unless shared behavior requires otherwise.
- Keep user-facing text understandable and forms accessible by labels and keyboard.
- Handle loading, empty, and error states explicitly when adding asynchronous flows.
- Validate external links and Firestore records before rendering them.
- Keep secrets and privileged Firebase credentials out of client code and VITE_ variables.
- Update root documentation when behavior, routes, environment variables, or schema changes.

## Local checks

From leetcode/:

~~~sh
npm run lint
npm run build
~~~

These are package scripts, not a guarantee that current source passes. The GitHub workflows do not currently install dependencies or run from leetcode/, so local commands are the reliable starting point until CI is repaired.

## Pull requests

Use the process in [Contributing](../CONTRIBUTING.md). Include verification results, synthetic screenshots for UI work, and any required Firebase console or Security Rules changes.
