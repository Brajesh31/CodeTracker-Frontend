# 🚀 Deployment

## Current Hosting configuration

leetcode/firebase.json configures Firebase Hosting with dist as its public directory and an SPA rewrite to index.html. The config path and package are nested inside leetcode/. Run app install/build commands from that directory.

## Manual deployment

1. Confirm the selected Firebase project is the intended environment.
2. Confirm Authentication providers and authorized domains.
3. Confirm Firestore Security Rules restrict access to the intended user-owned records.
4. Install and authenticate the Firebase CLI using Firebase's current official instructions.
5. From leetcode/, install and build:

   ~~~sh
   npm ci
   npm run lint
   npm run build
   ~~~

6. From leetcode/, deploy Hosting using the configured Firebase project:

   ~~~sh
   firebase deploy --only hosting
   ~~~

7. Smoke-test the landing page, direct route refresh, sign-in, dashboard data, and sign-out using a synthetic account.

Follow current [Firebase Hosting documentation](https://firebase.google.com/docs/hosting) for CLI setup and project selection. Confirm the correct target project before deploying.

## GitHub Actions workflows

The following workflow files are now configured:

| Workflow | Trigger | Responsibility |
| --- | --- | --- |
| .github/workflows/ci.yml | Pull request, push to main, manual | npm ci, lint, and production build in leetcode/ |
| .github/workflows/docs-validation.yml | Pull request, push to main, manual | Validate Markdown links, required docs, SVG XML, structure, and tracked secret patterns |
| .github/workflows/firebase-hosting-merge.yml | Push to main, manual | Install, lint, build, then deploy to production Hosting |
| .github/workflows/firebase-hosting-pull-request.yml | Manual dispatch only | Build and publish a protected preview channel |
| .github/workflows/dependency-review.yml | Pull request, manual | Review dependency changes |
| .github/workflows/codeql.yml | Pull request, push to main, weekly schedule | Static analysis for JavaScript/TypeScript |
| .github/workflows/secret-scan.yml | Pull request, push to main, manual | Gitleaks secret scanning |

The application package and lockfile are in leetcode/. The workflows explicitly use that directory for npm commands. The Firebase Hosting action uses leetcode as its entry point.

The preview workflow is intentionally manual. It does not run on arbitrary pull requests and therefore does not give untrusted fork code access to the Firebase deployment service account. Use a trusted commit and review the generated preview before sharing it.

## Required GitHub secret

The production and manual preview workflows reference:

- FIREBASE_SERVICE_ACCOUNT_LEETCODE_TRACKER_6F022

Store the service-account JSON as an encrypted GitHub Actions secret or a protected environment secret. Grant only the permissions needed to deploy Hosting. Never commit the JSON file or copy its contents into issues, logs, or documentation.

The configured Firebase project ID is leetcode-tracker-6f022. Confirm that this is the intended project before running the workflow. The repository documentation does not contain the secret value.

## Environment configuration

Vite variables are read at build time. Provide the Firebase web app values to the local ignored leetcode/.env.local file or the intended build environment. Since these variables have the VITE_ prefix, their values are visible in the browser bundle. Never inject service-account or admin credentials into the frontend.

## Rollback

Use Firebase Hosting release history in the Firebase console or Firebase CLI to restore a known-good Hosting release, following Firebase's current rollback instructions. A Git rollback alone does not revert a deployed Hosting release. After rollback, verify authentication, app routes, and Firestore rule behavior. See [Rollback](rollback.md) and [Backup and Restore](backup-and-restore.md).

## Deployment references

- [Firebase Hosting](https://firebase.google.com/docs/hosting)
- [Deploy to Firebase Hosting using GitHub Actions](https://firebase.google.com/docs/hosting/github-integration)
- [Vite environment variables](https://vite.dev/guide/env-and-mode)
