# 🖥️ Page and Route Documentation

## Landing page: /

**Component:** leetcode/src/components/LandingPage.jsx

**Purpose:** Public entry point for the CodeTracker experience.

**Observed behavior:** Presents the CodeTracker purpose, an extension download link, a sign-in action, and a concise list of current user tasks. The Edge extension is separately distributed; its source and operation are not part of this repository.

**Review requirements:** Explain the product honestly, distinguish the external extension from this repository, use descriptive links, and avoid advertising unimplemented analytics or question-editing features.

## Login page: /login

**Component:** leetcode/src/Auth/Login.jsx

**Purpose:** Email/password authentication through Firebase Authentication.

**Current interaction:** A semantic form captures email and password. Inputs have persistent labels, autocomplete hints, and required validation. Firebase errors are translated into generic inline messages. Successful authentication navigates to /dashboard.

**Known limitations:** Password reset and Google sign-in UI are not implemented. Manual keyboard and screen-reader verification remains necessary.

## Signup page: /signup

**Component:** leetcode/src/Auth/Signup.jsx

**Purpose:** Create a Firebase Authentication user and set the profile display name.

**Current interaction:** A semantic form captures name, email, and password, creates the user, updates displayName, and navigates to /. Errors are shown inline without exposing provider internals.

**Known limitations:** No email-verification UI, password recovery, or account deletion workflow is implemented.

## Dashboard page: /dashboard

**Component:** leetcode/src/components/Dashboard.jsx

**Purpose:** Show the signed-in user's greeting, navigation disclosure, sign-out action, external resource link, and question list.

**Data child:** AllQuestions queries the Firestore questions collection by UID, then renders loading, empty, error, or populated states. Malformed fields receive fallback text and non-HTTP(S) links are not made clickable.

**Known limitations:** No question CRUD actions, search, sorting, or pagination are implemented.

## Not-found route: *

**Component:** Inline fallback in leetcode/src/App.jsx.

**Purpose:** Explain that an unknown path does not exist and provide a link back to CodeTracker.

## Page documentation policy

For future pages, record purpose, access policy, component relationships, data sources, user actions, loading and error states, responsive behavior, keyboard support, and verification. Add only screenshots captured from the real application with synthetic data.
