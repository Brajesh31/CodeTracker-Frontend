# Database and Firebase Data

## Firebase services in the app

The client initializes Firebase Authentication, Cloud Firestore, and Firebase Storage in leetcode/src/config/firebase.jsx. The visible routes use Authentication and Firestore. No Firestore rules, database migration, server API, or emulator configuration is present in this repository.

## Collection currently read

leetcode/src/components/AllQuestions.jsx reads the questions collection and applies a uid equality filter. Each rendered document is expected to contain:

- uid: Firebase Authentication UID associated with the record.
- title: question name.
- difficulty: difficulty label.
- email: email displayed in the table.
- link: link opened from the row.
- time: a value accepted by JavaScript Date.
- topics: an array of topic labels.

The code shown here does not write question documents. The separate browser extension may populate the collection, but its implementation and schema validation are not included. Confirm its data contract before changing fields.

## Security and ownership

A query filter is not an access-control mechanism. Configure Cloud Firestore Security Rules so unauthenticated requests are rejected and each user can only access documents they are authorized to access. Ensure write rules (including any future extension or backend writes) validate both the authenticated owner and submitted document shape. Review rules for reads, creates, updates, deletes, and queries; test them with the Firebase Emulator before release.

Do not use broad rules such as allowing all reads or writes. Do not treat Firebase web app configuration as authorization. Firebase server/Admin SDKs have different trust characteristics from browser clients; privileged server credentials must never be bundled into this Vite application.

Official guidance:

- [Firebase Security Rules and Authentication](https://firebase.google.com/docs/rules/rules-and-auth)
- [Cloud Firestore Security Rules conditions](https://firebase.google.com/docs/firestore/security/rules-conditions)
- [Secure queries with Cloud Firestore](https://firebase.google.com/docs/firestore/security/rules-query)

## Local development and data handling

Use a separate Firebase development project and synthetic records. Avoid importing production data into local development or attaching real records to public issues. .env.local contains client configuration for Vite and must stay out of Git; its VITE_ values are still public to browser users.

Before a production schema change, document the old and new shape, migration or compatibility plan, data-retention effects, and whether the browser extension also needs an update. This repository currently has no migration tooling.

## Data quality gaps

The current table assumes all fields exist and topics is an array. It calls JavaScript Date and array join directly. Future writers should validate these fields, and the UI should handle absent, invalid, or legacy values gracefully.
