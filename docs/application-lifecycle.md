# 🔄 Application Lifecycle

## Bootstrap lifecycle

~~~mermaid
sequenceDiagram
    participant Browser
    participant Main as main.jsx
    participant App as App.jsx
    participant Auth as Firebase Auth
    participant Router as React Router
    Browser->>Main: Load index.html module
    Main->>App: Mount React root
    Main->>Router: Wrap app in BrowserRouter
    App->>Auth: Subscribe with onAuthStateChanged
    Auth-->>App: Current user or signed-out state
    App->>Router: Render route tree using auth state
~~~

## Authentication lifecycle

1. A visitor submits credentials through Login or Signup.
2. Firebase Authentication validates the request.
3. The Auth SDK updates its current user state.
4. App's observer receives the updated user.
5. The route tree may include the dashboard when a user exists.
6. Sign-out calls Firebase signOut and the observer receives the signed-out state.

## Dashboard data lifecycle

~~~mermaid
stateDiagram-v2
    [*] --> Loading
    Loading --> Loaded: Firestore query succeeds
    Loading --> Error: Firestore query fails
    Loaded --> [*]
    Error --> [*]
~~~

The state diagram represents the current component's loading, success, and error states. It does not yet include an explicit empty state or retry transition.

## Deployment lifecycle

1. GitHub checks out the repository.
2. npm ci runs from leetcode/ using the package lockfile.
3. Lint and production build execute from leetcode/.
4. The Vite build emits leetcode/dist/.
5. Firebase Hosting action uses leetcode/firebase.json and publishes the configured target.
6. A maintainer verifies routes, authentication, and Firestore access.

## Lifecycle risks

- Auth state can be unresolved during initial render; future route guards should represent a loading state.
- The dashboard route is conditionally added, but there is no explicit redirect for a direct unauthenticated URL.
- A query failure is currently shown as an error message; there is no retry or explicit empty state.
- The current deployment workflow does not install dependencies or run from the nested package directory; it must be corrected before being considered reliable.
