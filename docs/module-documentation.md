# 🧩 Module Documentation

## leetcode/src/main.jsx

**Role:** Browser application entry point. Creates the React root, loads the global stylesheet, and wraps App in BrowserRouter.

**Contract:** Expects a root element with id root in index.html.

**Important constraint:** BrowserRouter depends on Firebase Hosting rewriting application routes to index.html.

## leetcode/src/App.jsx

**Role:** Observes Firebase Authentication state and defines public and conditional dashboard routes.

**Current route map:** /, /login, /signup, and /dashboard when user state is truthy.

**Known limitation:** No explicit auth-loading guard, unauthenticated redirect, or catch-all not-found route is present.

## leetcode/src/Auth/Login.jsx

**Role:** Captures email and password and calls Firebase email/password sign-in.

**Current behavior:** On success, navigates to /dashboard when the current user has an email. On failure, displays an alert.

**Known limitation:** Inputs are not wrapped in a semantic form with associated visible labels in the current source. Google popup handler code exists but is not rendered as a button.

## leetcode/src/Auth/Signup.jsx

**Role:** Captures name, email, and password, creates a Firebase user, updates display name, and navigates to /.

**Known limitation:** Uses alert-based feedback and does not expose a Google sign-in button, although a handler exists.

## leetcode/src/components/Dashboard.jsx

**Role:** Shows the dashboard navigation, signed-in user's display name, external study-resource link, sign-out action, and AllQuestions component.

**Known limitation:** The mobile menu button is not wired to toggle menu visibility.

## leetcode/src/components/AllQuestions.jsx

**Role:** Queries Firestore questions using uid equality and renders the result set as a table.

**Expected data:** uid, title, difficulty, email, link, time, and topics.

**Known limitation:** The component assumes topics supports join and time supports Date conversion. There is no explicit empty state, result limit, pagination, or retry action.

## leetcode/src/config/firebase.jsx

**Role:** Initializes the Firebase app and exports Auth, Google Auth provider, Firestore, and Storage client instances.

**Security constraint:** Every VITE_ variable is public browser configuration. No privileged Firebase credentials belong here. Storage is initialized but no visible feature currently uses it.

## Change ownership

Update module documentation, [architecture](architecture.md), [API](api.md), and relevant tests when responsibilities or cross-module data flow change.
