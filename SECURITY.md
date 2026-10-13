# Security Policy

## Supported versions

Security fixes are currently considered for the latest version on the main branch. No release or long-term support schedule has been published.

## Reporting a vulnerability

Please report suspected vulnerabilities privately to the maintainer through [GitHub @brajesh31](https://github.com/brajesh31). If GitHub offers a private vulnerability reporting or security advisory option for this repository, use it. Otherwise contact the maintainer through the account's available private contact method. Do not open a public issue or pull request with exploit details, private data, or credentials.

Include the affected commit or deployment, steps to reproduce, expected and actual behavior, and potential impact. Use synthetic accounts and data. The maintainer will acknowledge a report when practical, investigate it, and coordinate a fix and disclosure timeline with the reporter. Please allow a reasonable period for remediation before public disclosure.

## Application security notes

- The app runs Firebase client SDKs in the browser. Values prefixed with VITE_ are compiled into client code and must be treated as public configuration, not secrets.
- Firebase web configuration does not replace authorization. Enforce user ownership and permitted operations in Cloud Firestore Security Rules.
- This repository contains no Firestore rules or Firebase Storage rules. The Firebase project owner must configure and test restrictive rules before storing real user information.
- The dashboard's uid query is not an authorization boundary. Anyone can modify browser code and issue direct Firebase requests; rules must reject unauthorized reads and writes.
- Do not put service-account JSON, admin SDK credentials, private keys, passwords, or production data in the frontend, .env.example, commits, or issue attachments.
- The GitHub deployment workflow references repository secrets. Keep the deployment service account in GitHub Actions secrets and grant it only the permissions needed for Hosting.

For safe configuration and official Firebase guidance, see [Database](docs/database.md), [Deployment](docs/deployment.md), [Firebase Security Rules and Authentication](https://firebase.google.com/docs/rules/rules-and-auth), and [Firestore Security Rules conditions](https://firebase.google.com/docs/firestore/security/rules-conditions).
