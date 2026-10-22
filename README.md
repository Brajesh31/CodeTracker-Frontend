# CodeTracker

CodeTracker is a browser application for reviewing coding questions associated with a signed-in user. This repository contains a React single-page app in leetcode/, Firebase Authentication and Cloud Firestore client integration, and Firebase Hosting configuration. A separately published Microsoft Edge extension is linked from the landing page; its source is not included here.

> **Project status:** This is an early-stage frontend. The checked-in app supports account creation, sign-in, sign-out, and reading a user's existing questions documents. It does not include question creation or editing screens, a backend API, Firestore security rules, or correctly configured automated lint/test checks in CI.

## Features

- Email/password registration and login through Firebase Authentication.
- A dashboard route for an authenticated user.
- A Firestore query that reads questions documents where uid matches the signed-in user's UID.
- A table showing title, difficulty, email, link, time, and topics.
- Sign-out and links to an independently published browser extension and study resources.

Google sign-in handler functions exist in the auth components, but the current UI does not render buttons for them. The dashboard is read-only in this repository; adding or editing questions is outside the checked-in frontend's current capabilities.

## Repository layout

    .github/workflows/  Firebase Hosting and README automation
    docs/               Architecture, setup, deployment, and support docs
    .env.example        Blank client configuration template
    README.md
    leetcode/           React + Vite app and Firebase Hosting config
      firebase.json
      package.json
      public/
      src/
        Auth/            Registration and login
        components/      Landing page, dashboard, question list
        config/          Firebase client initialization

## Requirements

- Node.js and npm compatible with the Vite version recorded in leetcode/package-lock.json.
- A Firebase project with Email/Password Authentication enabled and Cloud Firestore configured.
- Firestore Security Rules that authenticate each request and enforce per-user data access. A frontend query filter is not an access-control boundary.

## Installation

1. Clone this repository and open a terminal at its root.
2. Copy .env.example to leetcode/.env.local and fill in the Firebase web app configuration values for a development project. VITE_ variables are bundled into browser code; never put service-account credentials or private keys in them.
3. Install dependencies and start Vite:

   ~~~sh
   cd leetcode
   npm ci
   npm run dev
   ~~~

4. Open the local URL printed by Vite. Create an account with the email/password form, then sign in and open the dashboard.

See [Installation](docs/installation.md) for detailed setup. Changing .env.local requires restarting the dev server.

## Common commands

Run these from leetcode/:

| Command | Purpose |
| --- | --- |
| npm run dev | Start the local Vite development server. |
| npm run build | Build the static app into leetcode/dist/. |
| npm run preview | Preview the production build locally. |
| npm run lint | Run the configured ESLint command. |

See [Deployment](docs/deployment.md) for CI and hosting details. The current GitHub Hosting workflows invoke npm from the repository root even though the package and Firebase Hosting configuration live in leetcode/; consult the deployment guide before relying on those workflows.

## Authentication and data safety

The browser initializes Firebase from VITE_FIREBASE_* settings. These values identify a client Firebase app and are visible to users in the built frontend. Protect data with Firebase Authentication and restrictive Firestore Security Rules; never rely on hidden UI, route visibility, or the uid query alone. No Firestore rules file is present here, so configure and review rules in the Firebase project before using real user data. See [Security](SECURITY.md) and [Database](docs/database.md).

Do not commit .env.local, private keys, service-account JSON, production user data, or deployment credentials. If a credential is exposed, revoke or rotate it in the provider console and report the incident privately to the maintainer.

## Documentation

- [Architecture](docs/architecture.md)
- [Installation](docs/installation.md)
- [Development](docs/development.md)
- [Deployment](docs/deployment.md)
- [Application and data API](docs/api.md)
- [Database](docs/database.md)
- [Troubleshooting](docs/troubleshooting.md)
- [FAQ](docs/faq.md)
- [Contributing](CONTRIBUTING.md)
- [Support](SUPPORT.md)
- [Security policy](SECURITY.md)
- [Roadmap](ROADMAP.md)
- [Changelog](CHANGELOG.md)

## License and third-party material

Original CodeTracker source and documentation by Brajesh Kumar are licensed under the MIT License; see [LICENSE](LICENSE). Third-party libraries, generated starter assets, browser-extension distribution, external resources, trademarks, and other material retain their owners' terms. This project is not affiliated with or endorsed by LeetCode or Microsoft.

Last updated: 2026-10-22 01:13 UTC
