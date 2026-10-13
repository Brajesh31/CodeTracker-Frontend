# Architecture

## At a glance

CodeTracker is a browser-only React single-page application. Vite serves it locally and builds static files. Firebase Authentication supplies the current user identity; the Firebase JavaScript SDK reads Cloud Firestore directly from the browser. Firebase Hosting is configured to serve the Vite build and route paths to the SPA entry point.

~~~text
Browser
  ├── React UI + React Router
  ├── Firebase Authentication client ── identity / auth state
  └── Cloud Firestore client ── questions query
          │
          └── Cloud Firestore Security Rules enforce access

Vite source (leetcode/) ── build ──> leetcode/dist/ ──> Firebase Hosting
~~~

Security Rules are an essential external configuration. No Firestore rules file is tracked here. The app's client-side query filter does not enforce authorization.

## Source boundaries

- leetcode/src/main.jsx mounts React, the root App, and BrowserRouter.
- leetcode/src/App.jsx observes Firebase Authentication state and declares /, /login, /signup, and conditional /dashboard routes.
- leetcode/src/Auth/ contains email/password registration and login forms. Google sign-in handlers are defined but not currently exposed as UI buttons.
- leetcode/src/components/LandingPage.jsx links to an independently published Edge extension. The extension implementation is not present here.
- leetcode/src/components/Dashboard.jsx shows the current user's display name and sign-out action.
- leetcode/src/components/AllQuestions.jsx queries Firestore collection questions, filters by uid, and renders a table.
- leetcode/src/config/firebase.jsx initializes the Firebase client app, Authentication, Firestore, and Storage. The current UI uses Authentication and Firestore; no storage feature is apparent in the current routes.
- leetcode/firebase.json configures Hosting to publish dist and rewrite requests to index.html.

## Request and data flow

1. On app mount, App subscribes to Firebase onAuthStateChanged and updates its local user state.
2. A visitor can use the email/password forms to register or sign in.
3. When there is a user, the /dashboard route is rendered.
4. AllQuestions sends a Firestore query for documents in questions whose uid equals the current Firebase UID.
5. The component maps returned document data into a table. It expects fields including title, difficulty, email, link, time, and topics; topics is used as an array.
6. Firebase Security Rules evaluate the request. They must authorize only the intended user's records, regardless of the query sent by the browser.

There is no application server or REST/GraphQL API in the tracked app. The companion extension may be a separate producer of Firestore documents; its code and contract are not included here.

## Deployment flow

The intended static build is created from leetcode/ with npm run build, producing leetcode/dist/. Firebase Hosting uses leetcode/firebase.json. The current repository GitHub workflows invoke npm at the repository root and do not configure the nested app directory, so their build/deployment setup needs correction before it can be relied on. See [Deployment](deployment.md).

## Known design limitations

- App has no catch-all route and no explicit redirect for an unauthenticated /dashboard URL.
- The dashboard provides no empty-state message or CRUD interface in the checked-in code.
- Firebase client configuration is public after bundling; backend rules provide access control.
- A missing or malformed topics field can cause rendering to fail because the UI calls join without validating the value.
- The app routes and document schema are inferred from current source, not a versioned API contract.
