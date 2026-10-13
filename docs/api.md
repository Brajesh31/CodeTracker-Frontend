# Application and Data API

## Scope

This repository does not expose a server-side HTTP API, REST endpoint, GraphQL schema, or SDK package. The UI is a client-rendered React application. Browser routing and direct Firebase client SDK calls are the interfaces currently present in the tracked code.

## Browser routes

| Route | Access in current UI | Behavior |
| --- | --- | --- |
| / | Public | Landing page and links. |
| /login | Public | Email/password Firebase Authentication. |
| /signup | Public | Creates an email/password account and sets display name. |
| /dashboard | Added to routes when auth state contains a user | Loads and displays the user's question records. |

The app does not currently define a catch-all route or a clear redirect for an unauthenticated direct visit to /dashboard. Hosting rewrites browser paths to the SPA entry point, but that rewrite does not authorize a user.

## Firebase operations

- Authentication: account creation, profile display-name update, email/password login, auth-state observation, and sign-out are used in the visible application.
- Firestore: AllQuestions reads collection questions with a uid equality filter.
- No question create, update, or delete operation is implemented in the checked-in dashboard.
- Google popup handler functions exist but are not exposed through the current forms.

Firebase Security Rules are the server-enforced authorization contract. A query condition in JavaScript is not a security rule. See [Database](database.md) and [Security](../SECURITY.md).

## Question document shape

The current table reads these properties from each document:

| Field | Expected use in UI | Notes |
| --- | --- | --- |
| uid | Query filter | Firebase user UID that owns the record. Rules must enforce ownership. |
| title | Visible title | Rendered as text. |
| difficulty | Visible difficulty | Rendered as text. |
| email | Visible email | Treat as personal information; avoid unnecessary collection and exposure. |
| link | External question link | Opened in a new tab. Validate acceptable protocols and destinations in future write flows. |
| time | Displayed timestamp | Passed to JavaScript Date; use a consistent valid timestamp representation. |
| topics | Comma-separated topics | The current code calls join, so it expects an array. |

This is a source-derived shape, not a validated or versioned schema. The component does not currently guard against missing fields or malformed data.

## Errors and response behavior

The question component renders a loading label while fetching and displays the Firebase error message if the query fails. It does not define pagination, explicit empty results, retry behavior, or a stable error-code contract.
