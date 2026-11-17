# Security Policy

## Supported project surface

This repository contains a browser-based React application and Firebase client SDK
integration. It does not contain an application server, privileged Firebase Admin SDK,
tracked Firestore Security Rules, or a backend API.

## Reporting a vulnerability

Do not open a public issue for an exploitable vulnerability, exposed credential,
authorization bypass, or disclosure of user information. Contact the repository
maintainer privately through [GitHub @brajesh31](https://github.com/brajesh31). If GitHub
offers private vulnerability reporting for this repository, use it. Include the affected
commit, reproducible steps, and impact. Never include tokens, passwords, service-account
keys, or real user records.

## Security boundaries

- The browser bundle is public. All VITE_* values are visible to users.
- Firebase Authentication identifies a user; Firestore Security Rules must authorize
  every read and write.
- The query filter where("uid", "==", user.uid) is not an access-control boundary.
- Never bundle Firebase Admin credentials or private service-account keys in this app.
- External links, Firestore records, and extension data must be treated as untrusted.
- Avoid logging personal information, tokens, or complete user documents.

## Production security checklist

- [ ] Firestore rules enforce authenticated ownership for reads and writes.
- [ ] Rules are tested with Firebase Emulator or an isolated test project.
- [ ] Authentication authorized domains are restricted to known environments.
- [ ] GitHub deployment secrets are scoped and least-privileged.
- [ ] No privileged credential is bundled in Vite assets.
- [ ] User data is not exposed in logs, screenshots, issues, or build artifacts.
- [ ] Dependency alerts and lockfile updates are reviewed.

Triage should assess confidentiality, integrity, availability, affected users, exploit
preconditions, and whether credentials or rules need rotation. Validate fixes in an
isolated project and publish an advisory after remediation where appropriate.
