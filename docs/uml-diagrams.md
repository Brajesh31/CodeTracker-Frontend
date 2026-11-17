# 📐 UML and Engineering Diagrams

These diagrams describe the current frontend architecture and its verified integration boundaries. They are intentionally limited to real components and services.

## 1. Component diagram

~~~mermaid
flowchart TB
    Main["main.jsx"] --> Router["BrowserRouter"]
    Router --> App["App.jsx"]
    App --> Landing["LandingPage"]
    App --> Login["Login"]
    App --> Signup["Signup"]
    App --> Dashboard["Dashboard"]
    Dashboard --> Questions["AllQuestions"]
    App --> FirebaseConfig["Firebase client config"]
    Login --> FirebaseConfig
    Signup --> FirebaseConfig
    Dashboard --> FirebaseConfig
    Questions --> FirebaseConfig
    FirebaseConfig --> Auth["Firebase Authentication SDK"]
    FirebaseConfig --> Store["Cloud Firestore SDK"]
~~~

## 2. Authentication sequence

~~~mermaid
sequenceDiagram
    actor User
    participant Form as Login component
    participant SDK as Firebase Auth SDK
    participant Service as Firebase Auth service
    participant App as App auth observer
    User->>Form: Submit email and password
    Form->>SDK: signInWithEmailAndPassword
    SDK->>Service: Authenticate
    Service-->>SDK: User credential or error
    SDK-->>Form: Result
    Service-->>App: Auth state change
    App-->>User: Render route tree for current auth state
~~~

## 3. Question read sequence

~~~mermaid
sequenceDiagram
    participant Dashboard
    participant List as AllQuestions
    participant SDK as Firestore client SDK
    participant Rules as Firestore Security Rules
    participant DB as questions collection
    Dashboard->>List: Pass authenticated user
    List->>SDK: Query questions where uid equals current UID
    SDK->>Rules: Send authenticated request
    Rules->>Rules: Evaluate access policy
    alt Rules permit query
      Rules->>DB: Execute query
      DB-->>SDK: Matching documents
      SDK-->>List: QuerySnapshot
      List-->>Dashboard: Render table rows
    else Rules reject query
      Rules-->>SDK: Permission error
      SDK-->>List: Error
      List-->>Dashboard: Render error state
    end
~~~

## 4. Application state diagram

~~~mermaid
stateDiagram-v2
    [*] --> AuthStatePending
    AuthStatePending --> SignedOut: Auth observer returns no user
    AuthStatePending --> SignedIn: Auth observer returns user
    SignedOut --> SigningIn: Submit login
    SigningIn --> SignedIn: Authentication succeeds
    SigningIn --> SignedOut: Authentication fails
    SignedIn --> DashboardLoading: Open dashboard
    DashboardLoading --> DashboardLoaded: Query succeeds
    DashboardLoading --> DashboardError: Query rejected or fails
    DashboardLoaded --> SigningOut: Sign out
    DashboardError --> SigningOut: Sign out
    SigningOut --> SignedOut: Firebase signOut succeeds
~~~

*The state diagram includes pending and signing transitions to explain the lifecycle. The checked-in App does not yet expose all of these as explicit UI states.*

## 5. Conceptual data ownership ER diagram

~~~mermaid
erDiagram
    AUTH_USER ||--o{ QUESTION_DOCUMENT : owns
    AUTH_USER {
      string uid PK
      string email
      string displayName
    }
    QUESTION_DOCUMENT {
      string documentId PK
      string uid FK
      string title
      string difficulty
      string email
      string link
      timestamp time
      array topics
    }
~~~

*This is a conceptual view of UID ownership and a Firestore document shape inferred from field reads. It does not imply relational tables, enforced foreign keys, or a schema validator.*

## 6. Deployment flow

~~~mermaid
flowchart TD
    A[Commit to main] --> B[Checkout]
    B --> C[Set up Node]
    C --> D[npm ci in leetcode]
    D --> E[npm run lint]
    E --> F[npm run build]
    F --> G[Deploy Firebase Hosting]
    G --> H[Smoke test routes and data access]
~~~

## 7. Trust-boundary diagram

~~~mermaid
flowchart LR
    subgraph Untrusted["Untrusted browser"]
      UI[React components]
      ENV[VITE_FIREBASE values]
      SDK[Firebase client SDK]
      UI --> SDK
      ENV --> SDK
    end
    subgraph Firebase["Firebase project"]
      AUTH[Authentication]
      RULES[Firestore Security Rules]
      DATA[(Firestore)]
      SDK <--> AUTH
      SDK <--> RULES
      RULES --> DATA
    end
    SECRET[Deployment service account] -->|GitHub Actions secret only| CI[Trusted deployment workflow]
    CI --> HOST[Firebase Hosting]
~~~

## Review rule

Update these diagrams when routes, modules, Firebase operations, trust boundaries, or deployment steps change. Mark proposed components as proposed. Do not document the external extension as an internal module until its source and interface are verified.
