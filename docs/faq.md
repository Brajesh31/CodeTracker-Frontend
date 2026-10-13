# Frequently Asked Questions

## What does this repository contain?

A React/Vite frontend for account sign-in and viewing Firestore question records, plus Firebase Hosting configuration. It does not include the code for the linked Edge extension or a server-side API.

## How do I start it?

Copy the root .env.example to leetcode/.env.local, fill in development Firebase web app settings, then run npm ci and npm run dev from leetcode/. See [Installation](installation.md).

## Why is the dashboard empty?

The checked-in dashboard only reads existing documents from questions for the signed-in user's UID. This repository does not include a question-entry screen. It also expects the documented fields and an array-valued topics property.

## Does the uid filter protect other users' data?

No. Browser code can be changed and Firebase can be called directly. Cloud Firestore Security Rules must enforce authentication and document ownership for every request. See [Database](database.md) and [Security](../SECURITY.md).

## Are Firebase VITE_ values secret?

No. Vite includes variables with the VITE_ prefix in client-side code. They are public client configuration. Never put service-account credentials, private keys, or passwords there. Secure data with Firebase Security Rules and keep privileged credentials server-side.

## Can I sign in with Google?

The source defines Google popup handlers, but the current visible login and signup screens do not render Google sign-in buttons. Email/password is the exposed flow.

## Why do GitHub deployment actions fail?

The package and Firebase Hosting configuration are nested in leetcode/, but current workflow commands run from the repository root and do not install dependencies. See [Deployment](deployment.md).

## Is this project affiliated with LeetCode or Microsoft?

No. The app links to the LeetCode platform and an independently published Microsoft Edge extension listing. Product names and trademarks belong to their owners; see [LICENSE](../LICENSE).

## How do I report a bug or security issue?

Use GitHub issues for reproducible non-sensitive bugs and follow [SECURITY.md](../SECURITY.md) for private vulnerability reports. Never publish credentials or user data.
