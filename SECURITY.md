# 🔐 Security Policy

## Supported versions

Security fixes are currently considered for the latest version on the main branch. No release or long-term support schedule has been published.

## Reporting a vulnerability

Please report suspected vulnerabilities privately to the maintainer through the private reporting options available on the repository's GitHub Security page. If private vulnerability reporting is unavailable, contact the maintainer through the private contact method listed on the GitHub account [@brajesh31](https://github.com/brajesh31).

Do not open a public issue, discussion, or pull request with exploit details, private data, credentials, or reproduction steps that would expose users.

Include the affected commit or deployment, steps to reproduce, expected and actual behavior, and potential impact. Use synthetic accounts and data. The maintainer will acknowledge a report when practical, investigate it, and coordinate a fix and disclosure timeline with the reporter. Please allow a reasonable period for remediation before public disclosure.

## Application security notes

- The app runs Firebase client SDKs in the browser. Values prefixed with VITE_ are compiled into client code and must be treated as public configuration, not secrets.
- Firebase web configuration does not replace authorization. Enforce user ownership and permitted operations in Cloud Firestore Security Rules.
- This repository contains no Firestore rules or Firebase Storage rules. The Firebase project owner must configure and test restrictive Rules before storing real user information.
- The dashboard's uid query is not an authorization boundary. Anyone can modify browser code and issue direct Firebase requests; Rules must reject unauthorized reads and writes.
- Do not put service-account JSON, Admin SDK credentials, private keys, passwords, or production data in the frontend, .env.example, commits, or issue attachments.
- The GitHub deployment workflow references a service-account secret. Keep the credential in GitHub Actions secrets or a protected environment and grant it only the permissions needed for Hosting.
- The preview deployment workflow is manual. Do not make deployment secrets available to untrusted fork pull requests.
- Review dependency updates, workflow permissions, and external GitHub Actions before merging.

## Response expectations

The maintainer should record acknowledgement, severity, affected versions, remediation, and coordinated disclosure status. No fixed response-time or service-level commitment is currently published.

## Security references

- [Database and Firebase](docs/database.md)
- [Security architecture](docs/security-architecture.md)
- [Threat model](docs/threat-model.md)
- [Security risk register](docs/security-risk-register.md)
- [Incident response](docs/incident-response.md)
- [Firebase Security Rules and Authentication](https://firebase.google.com/docs/rules/rules-and-auth)
- [Firestore Security Rules conditions](https://firebase.google.com/docs/firestore/security/rules-conditions)
