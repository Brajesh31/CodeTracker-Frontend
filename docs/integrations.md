# 🔌 Integrations

## Firebase Authentication

**Purpose:** Account creation, email/password sign-in, current-user state, and sign-out.

**Code boundary:** leetcode/src/config/firebase.jsx and the auth/dashboard components.

**External setup:** Enable Email/Password provider and configure authorized domains in the Firebase project.

**Security:** Auth identity must be combined with Firestore Security Rules. Client-side route visibility is not authorization.

## Cloud Firestore

**Purpose:** Supply question records to the dashboard.

**Code boundary:** leetcode/src/components/AllQuestions.jsx.

**Current operation:** Read from questions where uid equals the current user's UID.

**External setup:** Create the database and configure restrictive Security Rules. No rules file or emulator configuration is currently checked into this repository.

## Firebase Hosting

**Purpose:** Serve the production Vite build as a single-page application.

**Configuration:** leetcode/firebase.json publishes dist and rewrites requests to index.html.

**Operational requirement:** Build from leetcode/ and point the Hosting action to the nested Firebase configuration.

## External browser extension

The landing page links to an independently distributed Edge extension. This repository does not include its source, signing workflow, release process, or data-writing implementation. Treat it as an external dependency until a source repository and contract are explicitly documented.

## External study resources

The dashboard links to an external resource site. Availability, privacy, and content are controlled outside this repository. Re-check the destination before changing the link.

## Integration change checklist

- Identify the data exchanged and the owner of each field.
- Verify current official API and SDK documentation.
- Define authentication and authorization responsibilities.
- Define failure, retry, timeout, and rate-limit behavior.
- Avoid placing secrets in browser variables.
- Add contract tests where possible.
- Document privacy and retention effects.
- Capture the decision in an ADR.
