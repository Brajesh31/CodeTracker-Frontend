# ⚙️ Configuration Guide

## Configuration locations

| Path | Purpose | Commit? |
| --- | --- | --- |
| .env.example | Blank Firebase client variable template | Yes |
| leetcode/.env.local | Local Vite environment overrides | No |
| leetcode/package.json | Scripts and dependency declarations | Yes |
| leetcode/package-lock.json | Resolved npm dependency graph | Yes |
| leetcode/firebase.json | Firebase Hosting public directory and SPA rewrite | Yes |
| .github/workflows/ | CI and deployment automation | Yes |
| GitHub repository secrets | Firebase deployment credentials | No, store only in GitHub settings |

## Local setup

From the repository root:

~~~sh
cp .env.example leetcode/.env.local
~~~

On Windows PowerShell:

~~~powershell
Copy-Item .env.example leetcode/.env.local
~~~

Populate the file with values from the Firebase Web App configuration for the intended development project. Then:

~~~sh
cd leetcode
npm ci
npm run dev
~~~

Restart Vite after changing environment variables.

## Security classification

All variables with the VITE_ prefix are embedded into browser-exposed application code. They may identify the Firebase client app but must never contain passwords, private keys, service-account JSON, Admin SDK credentials, or other secrets.

Firebase API keys for web apps are not a substitute for authorization. Configure Firestore Security Rules in the Firebase project and test access using synthetic accounts.

## Build-time configuration

Vite reads variables at build time. The values used for a production build must refer to the intended Firebase project. Confirm the target project before deployment and avoid building with production variables during local development.

## Validation

- Confirm every required variable is present before starting the app.
- Confirm the Firebase project ID and auth domain match the selected project.
- Confirm no local environment file is tracked by Git.
- Confirm the resulting browser bundle contains only public client configuration.
- Confirm Firebase Rules enforce ownership separately from client-side filtering.

See [Environment Variables](environment-variables.md), [Installation](installation.md), and [Security](../SECURITY.md).
