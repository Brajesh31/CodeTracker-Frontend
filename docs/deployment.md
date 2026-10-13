# Deployment

## Current Hosting configuration

leetcode/firebase.json configures Firebase Hosting with dist as its public directory and an SPA rewrite to index.html. Build the application from leetcode/ so the output directory is leetcode/dist/.

## Manual deployment

1. Ensure the Firebase project has Authentication enabled and Firestore rules configured for the application.
2. Install the Firebase CLI using the official Firebase instructions and authenticate the deploying account.
3. From leetcode/, install dependencies and build:

   ~~~sh
   npm ci
   npm run build
   ~~~

4. From leetcode/, deploy Hosting using the configured Firebase project alias:

   ~~~sh
   firebase deploy --only hosting
   ~~~

5. Confirm the deployed site loads direct SPA routes, sign-in works, and Firestore access is restricted as intended. Use a development project for previews and synthetic data.

Follow current [Firebase Hosting documentation](https://firebase.google.com/docs/hosting) for CLI setup and project selection. Confirm the correct target project before deploying.

## GitHub Actions status

Two workflows exist under .github/workflows/: one for pushes to main and one for pull requests. As currently checked in, they run npm run build from the repository root, but the only package.json and firebase.json are inside leetcode/. They also do not install npm dependencies before building. The workflows are therefore misaligned with the repository layout and likely need correction before they can be relied on.

A working workflow needs to install and build in leetcode/ (or set an equivalent explicit working directory), and the Firebase Hosting action must be given the location of leetcode/firebase.json or run from that directory. Confirm action-specific configuration against its current official documentation. Configure the service-account credential as an encrypted GitHub Actions repository or environment secret with least privilege; never commit the credential file. Keep pull-request deployment permissions restricted and review who can trigger deployments.

The workflow files refer to a Firebase project and a named GitHub secret. Manage those values in repository settings; do not copy credentials into documentation or logs.

## Environment configuration

Vite variables are read at build time. Provide the Firebase web app values to the build environment or an ignored leetcode/.env.local file. Since these variables have the VITE_ prefix, their values are visible in the browser bundle. Never inject service-account or admin credentials into the frontend.

## Rollback

Use Firebase Hosting release history in the Firebase console or Firebase CLI to restore a known-good Hosting release, following Firebase's current rollback instructions. A Git rollback alone does not revert a deployed Hosting release. After rollback, verify authentication, app routes, and Firestore rule behavior.

## Deployment references

- [Firebase Hosting](https://firebase.google.com/docs/hosting)
- [Deploy to Firebase Hosting using GitHub Actions](https://firebase.google.com/docs/hosting/github-integration)
- [Vite environment variables](https://vite.dev/guide/env-and-mode)
