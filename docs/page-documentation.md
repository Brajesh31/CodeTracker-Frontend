# 🖥️ Page and Route Documentation

## Landing page: /

**Component:** leetcode/src/components/LandingPage.jsx

**Purpose:** Public entry point for the CodeTracker experience.

**Observed links and behavior:** The page contains a CodeTracker identity/visual element and links to authentication and external resources, including a separately distributed browser extension. Exact text and layout should be verified against a real running browser when screenshots or a UI specification are added.

**Review requirements:** Explain the product honestly, distinguish the external extension from this repository, provide descriptive links, and avoid claiming that question creation or analytics are available.

## Login page: /login

**Component:** leetcode/src/Auth/Login.jsx

**Purpose:** Email/password login through Firebase Authentication.

**Current interaction:** Local state stores email and password; the Login handler calls signInWithEmailAndPassword. On success, the component navigates to /dashboard when the current user has an email. The failure path uses alert.

**Known gaps:** The controls need persistent labels and semantic form submission. Google sign-in handler code is not exposed as a visible button.

## Signup page: /signup

**Component:** leetcode/src/Auth/Signup.jsx

**Purpose:** Create a Firebase Authentication user and set the profile display name.

**Current interaction:** Captures name, email, and password; calls createUserWithEmailAndPassword and updateProfile; then navigates to /.

**Known gaps:** Alert-based feedback, no password-recovery flow, and no formal email-verification UX.

## Dashboard page: /dashboard

**Component:** leetcode/src/components/Dashboard.jsx

**Purpose:** Show the signed-in user's greeting, sign-out action, external resource link, and question list.

**Data child:** AllQuestions queries the Firestore questions collection by uid.

**Known gaps:** No CRUD actions, no empty state, no pagination, no explicit auth redirect, and a mobile-menu control that does not toggle the menu.

## Page documentation policy

For future pages, document purpose, route/access policy, parent/child components, data sources, user actions, loading/empty/error states, responsive behavior, keyboard behavior, analytics (if any), and tests. Keep actual screenshots separate from diagrams and only add screenshots captured from the real running application.
