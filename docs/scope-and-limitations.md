# 🎯 Scope and Limitations

## In scope

- React single-page frontend in leetcode/.
- Landing, login, signup, and conditional dashboard routes.
- Firebase Authentication client integration.
- Cloud Firestore read of question records filtered by current UID.
- Display of existing question metadata.
- Firebase Hosting configuration for the static Vite build.
- Repository documentation, governance, CI, and contribution workflows.

## Out of scope for the current repository

- Source code for the separate browser extension linked from the landing page.
- Online judge, code editor, code execution, or submission evaluation.
- REST, GraphQL, or other application server API.
- Admin dashboard or privileged server operations.
- Question creation, editing, and deletion screens.
- Firestore Security Rules and Firebase Storage Rules. These are external project configuration unless later committed and tested.
- Database migrations or an emulator setup.
- Analytics, notifications, reminders, and spaced repetition.
- Formal privacy certification or WCAG conformance claim.

## Constraints

- The application package and lockfile are nested in leetcode/.
- Firebase browser configuration uses VITE_ variables and is visible in client assets.
- The dashboard assumes a particular Firestore document shape.
- The app currently lacks explicit not-found and unauthenticated-route guard behavior.
- Current deployment workflows must run npm commands from the nested package directory.

## Dependency boundaries

| Dependency | Controlled by this repository? | Required care |
| --- | --- | --- |
| Firebase Authentication | Client integration only | Configure providers and authorized domains in Firebase |
| Cloud Firestore | Client query only | Enforce access through Rules outside the current repository |
| Firebase Hosting | Config and deployment workflow | Verify target project and secret permissions |
| Browser extension | No source here | Treat as an external integration |
| Study-resource site | No source here | Treat as an external link |

## Scope-change procedure

A change that introduces a backend, data writes, analytics, new identity providers, or an extension integration must include a feature proposal, threat assessment, data contract, architecture decision record, and operational plan.
