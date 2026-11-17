# 🐛 Known Issues and Limitations

This list reflects the source and configuration reviewed on 2026-11-18, including the frontend fixes committed in the current enhancement. Re-check before closing or adding items.

## Application limitations

- **No question CRUD UI:** The dashboard reads existing records but does not create, edit, or delete questions.
- **No pagination or query limit:** All records matching the user's UID are read in one query. Large histories may increase Firestore reads and rendering time.
- **No search, filtering, sorting, or analytics:** These are not implemented.
- **No password recovery, email verification UX, account deletion, or data export flow:** These require product, security, and retention decisions.
- **No Google sign-in UI:** The old unused popup handlers were removed; email/password is the current exposed sign-in method.
- **No formal app test suite:** The npm package currently defines lint/build scripts, but no dedicated unit, integration, E2E, or Firebase Emulator test suite is declared.
- **Firebase Security Rules and Emulator configuration are not checked in:** The project owner must configure and independently test restrictive Rules before handling real user data.
- **No backend/API server:** The browser communicates with Firebase client SDKs directly. The external extension source and its writer contract are outside this repository.
- **No formal accessibility audit:** The UI has improved labels, form feedback, state announcements, and menu behavior, but WCAG conformance has not been audited.
- **No genuine UI screenshot set:** SVG assets are architecture/design illustrations, not screenshots of running product screens.

## Routing and application lifecycle

- The app now waits for Firebase auth-state initialization, redirects signed-out visits to /dashboard to /login, and shows a not-found page for unknown routes.
- Firebase Hosting direct-route refresh still needs a post-deployment smoke test against the configured production or preview site.

## Repository and operations

- The GitHub workflows are configured, but their first post-change CI and deployment runs must complete successfully before their badges can be considered verified.
- The Firebase production deploy requires the protected repository secret FIREBASE_SERVICE_ACCOUNT_LEETCODE_TRACKER_6F022 and the intended project ID leetcode-tracker-6f022.
- Dependency PRs #1 and #2 were not mergeable at review time and did not show passing checks; they remain open for maintainer review.

## Handling

Do not close an issue because a limitation is documented. Close it only after implementation and relevant verification. Record workarounds and remaining risk in the issue or changelog.
