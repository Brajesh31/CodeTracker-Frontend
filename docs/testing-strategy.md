# 🧪 Testing Strategy

## Current test maturity

The reviewed package manifest contains lint and production-build scripts. It does not declare a dedicated unit-test, component-test, E2E, or Firebase Emulator test suite. Do not report test coverage or claim behavior has passed tests until an executable test suite exists and runs.

## Test layers

| Layer | Purpose | Candidate coverage |
| --- | --- | --- |
| Static validation | Catch syntax, unused variables, and lint issues | ESLint in leetcode/ |
| Production build | Verify Vite can bundle the application | npm run build |
| Unit tests | Test pure record-normalization and URL-validation helpers | Missing fields, invalid dates, topic normalization, unsafe URLs |
| Component tests | Verify UI state and accessible interactions | Login/signup, question loading/empty/error states |
| Integration tests | Verify Firebase SDK interactions | Auth state, Firestore query, permission denial |
| Security Rules tests | Verify real access policy | User A cannot read or write User B's records |
| E2E tests | Verify real user journeys | Sign up, sign in, dashboard, sign out |
| Manual accessibility | Verify assistive technology and keyboard behavior | Forms, table, menu, focus, zoom |

## Test environment

- Use a dedicated Firebase development project or emulator.
- Use synthetic accounts and question documents.
- Never run destructive tests against production.
- Keep test credentials in protected CI secrets only when unavoidable.
- Do not include real personal data in fixtures or snapshots.

## High-priority cases

1. Auth state initially unresolved, signed out, and signed in.
2. Invalid login and signup responses.
3. Dashboard query allowed and denied by Rules.
4. Empty questions collection.
5. Missing or wrong-type title, difficulty, email, link, time, and topics values.
6. A document whose uid does not match the signed-in user.
7. Sign-out success and failure.
8. Direct route refresh on /dashboard.
9. Narrow viewport and keyboard-only navigation.
10. Production build from the correct leetcode/ working directory.

## Exit criteria

A change is ready for review when relevant checks pass, security-sensitive behavior has explicit evidence, user-visible states have been inspected, and documentation matches the new behavior. A skipped test must be listed with its reason.
