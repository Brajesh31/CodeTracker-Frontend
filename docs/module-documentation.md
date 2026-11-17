# 🧩 Module Documentation

## leetcode/src/main.jsx

**Role:** Browser application entry point. Creates the React root, loads the global stylesheet, and wraps App in BrowserRouter.

**Contract:** Expects a root element with id root in index.html.

**Important constraint:** BrowserRouter depends on Firebase Hosting rewriting application routes to index.html.

## leetcode/src/App.jsx

**Role:** Observes Firebase Authentication state, displays an initial pending state, and defines public, protected, and fallback routes.

**Current route map:** /, /login, /signup, protected /dashboard, and a catch-all not-found experience.

**Behavior:** Signed-out direct visits to /dashboard are redirected to /login. The component unsubscribes from onAuthStateChanged on unmount.

## leetcode/src/Auth/Login.jsx

**Role:** Captures email and password and calls Firebase email/password sign-in.

**Current behavior:** Semantic form with required labelled fields, autocomplete hints, inline generic error messages, and navigation to /dashboard after success.

**Known limitation:** Password recovery and Google sign-in UI are not implemented.

## leetcode/src/Auth/Signup.jsx

**Role:** Captures name, email, and password, creates a Firebase user, updates display name, and navigates to /.

**Current behavior:** Semantic form with required labels and inline generic error messages.

**Known limitation:** No email verification, password recovery, or account deletion UX.

## leetcode/src/components/Dashboard.jsx

**Role:** Shows the signed-in user's display name, responsive navigation disclosure, external resource link, sign-out action, and AllQuestions component.

**Current behavior:** Mobile menu open/closed state is controlled by React and reflected in aria-expanded and the button accessible name.

## leetcode/src/components/AllQuestions.jsx

**Role:** Queries Firestore questions using UID equality and renders the result set as a table.

**Expected data:** uid, title, difficulty, email, link, time, and topics.

**Current behavior:** Distinguishes loading, empty, query-error, and populated states; validates external URL schemes; handles Timestamp/Date/string/number time inputs; and applies fallbacks for missing or malformed fields. Query pagination and manual retry are not implemented.

**Props contract:** Receives a Firebase Auth user object with a string uid. PropTypes validates that shape at runtime.

## leetcode/src/components/LandingPage.jsx

**Role:** Public product entry page with extension download and sign-in action.

**Static asset rule:** Vite public assets are referenced from the site root, for example /extension-logo.png, not /public/extension-logo.png.

## leetcode/src/config/firebase.jsx

**Role:** Initializes the Firebase app and exports Auth, Google Auth provider, Firestore, and Storage client instances.

**Security constraint:** Every VITE_ variable is public browser configuration. No privileged Firebase credentials belong here. Storage is initialized but no visible feature currently uses it.

## Change ownership

Update module documentation, [architecture](architecture.md), [API](api.md), and relevant tests when responsibilities or cross-module data flow change.
