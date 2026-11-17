# 🏗️ System Design

## Design summary

CodeTracker currently follows a small client-rendered architecture. The browser owns UI rendering and calls Firebase client SDKs directly. Firebase Authentication provides the active identity. Firestore responds to the questions query when Security Rules permit it. Firebase Hosting serves the compiled static assets.

~~~mermaid
flowchart LR
    subgraph Client["Browser client"]
      R[React Router]
      C[React components]
      A[Firebase Auth SDK]
      F[Firestore SDK]
      E[Vite environment config]
      R --> C
      C --> A
      C --> F
      E --> A
      E --> F
    end
    subgraph Provider["Firebase project"]
      IA[Authentication]
      DB[(Cloud Firestore)]
      SR[Firestore Security Rules]
      IA --- SR
      SR --> DB
    end
    H[Firebase Hosting] --> R
    A <--> IA
    F <--> SR
~~~

## Runtime responsibilities

| Component | Responsibility | Trust level |
| --- | --- | --- |
| React UI | Collect input, display state, present records | Untrusted browser code |
| Firebase Auth SDK | Submit authentication operations and observe session | Client SDK, subject to provider validation |
| Firestore SDK | Submit user-scoped read query | Client SDK; Rules must authorize every request |
| Firebase Security Rules | Enforce data access | Trusted policy configured in Firebase |
| Firebase Hosting | Serve the static application | Hosting configuration and deployment permissions |
| Companion extension | External record producer or workflow, if applicable | Not verified from this repository |

## State ownership

- Authentication state is observed in App.jsx through onAuthStateChanged.
- Form values are local React component state in the auth forms.
- Question records, loading state, and query error are local state in AllQuestions.
- No global client state framework is present in the reviewed source.

## Data storage

The current UI reads the top-level Firestore questions collection. Each rendered document is expected to include uid, title, difficulty, email, link, time, and topics. There is no relational database or server-side persistence layer in this repository.

## Scalability constraints

The current component calls getDocs without pagination or an explicit result limit. If the number of questions grows, define ordering, indexing, pagination, and query limits before increasing usage. Measure the query and UI rendering behavior with synthetic data rather than guessing a scale threshold.

## Design decisions requiring explicit review

- Whether question records should be owned by UID only or grouped under user subcollections.
- Whether the extension remains the writer of records.
- Whether the frontend should ever write to questions.
- Whether email belongs on each document or can be derived from Auth.
- How account deletion and data retention are enforced.
- Whether a backend is necessary for trusted writes or third-party integration.
