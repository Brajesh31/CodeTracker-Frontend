# 🔀 Data Flow

## Current authentication and read flow

~~~mermaid
flowchart TD
    UI[React screen] --> AUTH[Firebase Authentication SDK]
    AUTH --> IDP[Firebase Authentication service]
    IDP -->|Session identity| APP[App auth-state listener]
    APP --> DASH[Dashboard]
    DASH --> LIST[AllQuestions]
    LIST --> QUERY[Firestore query: questions where uid equals current UID]
    QUERY --> RULES[Cloud Firestore Security Rules]
    RULES -->|Allowed| DOCS[Matching question documents]
    RULES -->|Denied| ERR[Query error]
    DOCS --> TABLE[Question table in browser]
~~~

## Data read contract

The current dashboard requests records from the top-level questions collection. It uses a where condition on uid and maps each returned Firestore document into an object containing the document ID and document data.

The component reads the following fields:

- uid: ownership filter value.
- title: question label.
- difficulty: difficulty label.
- email: email displayed in the table.
- link: external question destination.
- time: value passed to JavaScript Date.
- topics: array passed to join.

This is a source-derived contract. The repository does not include a schema validator, a versioned schema, or the code that writes these documents.

## Trust boundaries

- The browser is an untrusted environment. Anyone can inspect or modify frontend JavaScript.
- Firebase Authentication establishes a user identity, but it does not by itself define which Firestore documents that user can access.
- Cloud Firestore Security Rules are the authoritative data-access boundary.
- VITE_ variables are public client configuration.
- The browser extension is an external component whose source and write contract are not included here.

## Failure paths

- Missing or invalid client configuration can prevent Firebase initialization.
- Authentication failure can prevent a signed-in user from being established.
- Firestore Rules may reject a query.
- Network failures may interrupt reads.
- Documents may omit or mis-type fields expected by the UI.
- An empty result can currently render an empty table body without a dedicated explanation.

## Future write flow

Do not add client-side document writes until the product chooses a trusted writer and a validated ownership policy. For every proposed write, document field validation, allowed transitions, user ownership, abuse controls, and extension compatibility.
