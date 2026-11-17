# 🌍 Compatibility

## Browser support

The project uses modern JavaScript, React, React Router, Vite, and Firebase browser SDKs. A formal minimum browser matrix is not currently recorded. Do not claim support for a browser/version until the built application has been tested there.

## Baseline verification matrix

| Area | Minimum review |
| --- | --- |
| Chromium-based desktop | Landing, login, signup, dashboard, external links |
| Firefox desktop | Auth flow, routing, table overflow, focus |
| Safari desktop | Firebase initialization, routing, date rendering |
| Mobile Safari | Responsive forms, navigation, table access |
| Mobile Chrome | Touch targets, auth flow, horizontal overflow |
| Keyboard-only | All routes and interactive controls |
| Screen reader | Form labels, errors, table headers, navigation |

## Runtime

Use a supported Node.js LTS release compatible with the committed Vite version and install through npm ci. The build should be executed with the same major Node version in local development and CI.

## Known compatibility concerns

- Browser storage and third-party cookie restrictions may affect some external authentication or popup flows, if those are exposed later.
- Firebase Auth authorized domains must include the deployed site and appropriate development origins.
- Locale-dependent Date formatting varies by browser and user settings.
- Table overflow must not prevent keyboard access to external links.

## Change process

When upgrading React, Vite, React Router, or Firebase SDK, inspect official migration notes and test routing, build, authentication, and deployment. Treat major upgrades as explicit migration work, not automatic lockfile refreshes.
