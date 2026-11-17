# 🛠️ Solution Overview

## Current solution

CodeTracker is implemented as a browser-only single-page application:

1. Vite serves the React application during development and builds static assets for deployment.
2. React Router maps browser paths to the landing, login, signup, and authenticated dashboard views.
3. Firebase Authentication creates and maintains the user session.
4. The dashboard passes the current Firebase user into the question-list component.
5. The question-list component queries Cloud Firestore for documents in questions where uid equals the signed-in user's UID.
6. The browser renders the returned document fields in a table.
7. Firebase Hosting serves the static build and rewrites unknown paths to index.html so the client router can resolve them.

~~~mermaid
flowchart TD
    A[Visitor opens CodeTracker] --> B{Choose an action}
    B -->|Register| C[Email and password signup]
    B -->|Sign in| D[Email and password login]
    C --> E[Firebase Authentication]
    D --> E
    E --> F[Auth state subscription]
    F --> G{Authenticated user?}
    G -->|No| H[Public routes]
    G -->|Yes| I[Dashboard route]
    I --> J[Firestore questions query]
    J --> K[Security Rules evaluate request]
    K --> L[Question records returned]
    L --> M[Table rendered in browser]
~~~

## Data boundary

The app uses the Firebase client SDK from the browser. The client-side UID query narrows the requested records but does not provide security. Firebase Security Rules must verify the authenticated user and enforce ownership for all allowed operations.

## External dependencies

- Firebase Authentication: identity and session state.
- Cloud Firestore: question metadata queried by the app.
- Firebase Hosting: static distribution and SPA rewrites.
- External browser extension and study-resource site: linked from the UI, maintained outside this repository.

## Deliberate exclusions

There is no application server, REST or GraphQL API, server-side job, relational database, question authoring endpoint, or extension implementation in this repository. Diagrams and documentation should not invent those components.

## Improvement sequence

1. Verify and document Firebase rules.
2. Add validation and explicit empty/error/retry UI states.
3. Establish a data contract with any external question writer.
4. Add tests for routes, auth behavior, and data-shape edge cases.
5. Add write operations only after the data contract and authorization model are approved.

See [Architecture](architecture.md), [Data flow](data-flow.md), and [Security architecture](security-architecture.md).
