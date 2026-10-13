# Installation

## Prerequisites

- Git.
- Node.js and npm compatible with the versions of Vite and its plugins in leetcode/package-lock.json.
- A Firebase project for development.
- A Firebase Web App registered in that project.

Use a dedicated development Firebase project and synthetic accounts. Before storing user data, configure and test Firestore Security Rules; see [Database](database.md) and [Security](../SECURITY.md).

## Clone and install

From a terminal:

~~~sh
git clone https://github.com/Brajesh31/CodeTracker-Frontend.git
cd CodeTracker-Frontend/leetcode
npm ci
~~~

npm ci installs the exact dependency tree recorded in package-lock.json. Do not run app commands from the repository root: package.json is in leetcode/.

## Configure Firebase

1. In Firebase Console, create or select a development project.
2. Register a Web App and copy its web app configuration values.
3. At the repository root, copy .env.example to leetcode/.env.local.
4. Fill the variables below with values from that web app. Keep .env.local untracked.
5. Enable Email/Password in Firebase Authentication and create a Cloud Firestore database.

| Variable | Used for |
| --- | --- |
| VITE_FIREBASE_API_KEY | Firebase web app client configuration. |
| VITE_FIREBASE_AUTH_DOMAIN | Firebase Authentication domain. |
| VITE_FIREBASE_DATABASE_URL | Realtime Database URL field in the Firebase app config. The visible dashboard uses Firestore. |
| VITE_FIREBASE_PROJECT_ID | Firebase project identifier. |
| VITE_FIREBASE_STORAGE_BUCKET | Firebase Storage bucket field in the app config. |
| VITE_FIREBASE_MESSAGING_SENDER_ID | Firebase web app client configuration. |
| VITE_FIREBASE_APP_ID | Firebase web app identifier. |
| VITE_FIREBASE_MEASUREMENT_ID | Optional analytics identifier where configured. |

The app reads these values through Vite's import.meta.env in leetcode/src/config/firebase.jsx. VITE_ variables used by browser code become part of the client bundle. They are not suitable for secrets or service-account credentials. Firebase authorization must be enforced by Firebase Security Rules. See [Vite environment variables](https://vite.dev/guide/env-and-mode) and [Firebase Authentication with Security Rules](https://firebase.google.com/docs/rules/rules-and-auth).

Restart the dev server after editing environment files so Vite reloads configuration.

## Start the app

From leetcode/:

~~~sh
npm run dev
~~~

Open the local address printed by Vite. Register using the email/password form and sign in. To inspect a dashboard with questions, the development Firestore database must contain documents in questions authorized by its rules for that account's UID.

## Production build and preview

~~~sh
npm run lint
npm run build
npm run preview
~~~

The build output is leetcode/dist/. If a command fails, record its actual output; a successful install alone does not mean lint or build passed.
