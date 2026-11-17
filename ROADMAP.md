# Roadmap

This roadmap separates verified current behavior from proposed future work. Priority is
based on user impact and security.

## P0: production safety and deploy reliability

- [ ] Add and review Firestore Security Rules enforcing per-user ownership.
- [ ] Add Firebase Emulator tests for allowed and denied reads/writes.
- [ ] Repair GitHub Actions to install dependencies and build from leetcode/.
- [ ] Verify Firebase Hosting uses leetcode/firebase.json and publishes leetcode/dist/.
- [ ] Scope deployment credentials to least privilege and protected environments.

**Acceptance:** unauthenticated users cannot read private questions, one user cannot
read or modify another user's documents, and the production workflow builds the nested app.

## P1: application correctness

- [ ] Validate Firestore fields, including topics arrays, timestamps, and link protocols.
- [ ] Add empty, retry, and recoverable error states.
- [ ] Implement protected-route redirects and a useful not-found route.
- [ ] Make the mobile navigation control functional or remove it.
- [ ] Fix Vite public asset path usage in the landing page.
- [ ] Add accessible labels, autocomplete hints, and visible form validation.

## P2: test and maintenance quality

- [ ] Add unit/component tests for auth state, forms, dashboard, and question list.
- [ ] Add a browser smoke test with Firebase Emulator or isolated test project.
- [ ] Add dependency update review and vulnerability scanning.
- [ ] Add build, lint, docs-link, and tracked-tree checks to CI.
- [ ] Define supported Node/npm versions and an update cadence.

## P3: product capabilities

- [ ] Define a versioned question-record contract shared with the companion extension.
- [ ] Add create/edit/delete only after the data model and Security Rules are reviewed.
- [ ] Add search, filtering, sorting, pagination, and progress summaries.
- [ ] Add account recovery and expose Google sign-in after end-to-end testing.
- [ ] Evaluate offline and performance requirements before adding caching.

A backend API, social features, leaderboards, payments, analytics, or mobile apps are not
assumed. Add them only when there is a clear product requirement and reviewed architecture.
