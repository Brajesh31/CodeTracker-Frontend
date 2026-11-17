# 🧱 Component Architecture

## Component map

~~~mermaid
flowchart TD
    Main["main.jsx"] --> Router["BrowserRouter"]
    Router --> App["App.jsx"]
    App --> Landing["LandingPage"]
    App --> Login["Login"]
    App --> Signup["Signup"]
    App --> Dashboard["Dashboard"]
    Dashboard --> Questions["AllQuestions"]
    Login --> Firebase["config/firebase.jsx"]
    Signup --> Firebase
    App --> Firebase
    Questions --> Firebase
    Dashboard --> Firebase
~~~

## Responsibilities

| Module | Responsibility | Firebase interaction |
| --- | --- | --- |
| main.jsx | Mount React and BrowserRouter | None directly |
| App.jsx | Subscribe to authentication changes and declare routes | Auth state observation |
| Auth/Login.jsx | Render email/password login form | signInWithEmailAndPassword |
| Auth/Signup.jsx | Render registration form and update display name | createUserWithEmailAndPassword, updateProfile |
| components/LandingPage.jsx | Public product landing and external links | None verified in current source |
| components/Dashboard.jsx | Dashboard shell, user greeting, sign-out, resource link | signOut |
| components/AllQuestions.jsx | Read and render question metadata | Firestore query |
| config/firebase.jsx | Initialize Firebase app and export client services | Firebase client initialization |

## Import and dependency direction

- Entry point mounts the app.
- App composes route-level screens.
- Screens use shared Firebase client exports.
- AllQuestions receives the authenticated user as a prop.
- Firebase initialization remains centralized in config/firebase.jsx.

## Component contracts

The current contracts are lightweight React props rather than TypeScript interfaces or a formal component library. Dashboard expects a user prop. AllQuestions expects user.uid to be present. The project is JavaScript and does not currently include dedicated unit tests for these components.

## Refactoring guidance

- Keep Firebase initialization centralized.
- Keep UI components free of service-account or privileged credentials.
- Introduce an explicit auth-loading state before building route guards.
- Extract record normalization into a small, testable function before adding advanced table behavior.
- Add reusable accessible form controls only when there are multiple real use cases.
- Do not introduce a state-management library without evidence that local state is insufficient.
