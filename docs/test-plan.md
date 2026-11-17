# 📝 Test Plan

## Objective

Verify the browser application, Firebase client integration, and static Hosting build for a proposed change.

## Scope

Include the modules and routes affected by the change. For authentication or Firestore work, include the related Firebase project configuration and Security Rules test environment. Do not claim to test the external browser extension unless its source and test setup are in scope.

## Environment

| Item | Record |
| --- | --- |
| Commit SHA | Fill in before execution |
| Node version | Record actual version |
| npm version | Record actual version |
| Browser and version | Record tested browser |
| Firebase project | Use non-production project identifier |
| Test accounts | Synthetic accounts only |
| Firestore Rules version | Record deployed test policy or emulator rules commit |

## Test cases

- TC-01: Landing page loads and navigation works.
- TC-02: Signup creates a synthetic Firebase account.
- TC-03: Profile display name is updated.
- TC-04: Login establishes an authenticated session.
- TC-05: Auth state enables the intended dashboard route.
- TC-06: Firestore query returns only the expected user's records.
- TC-07: Rules reject a second user's records.
- TC-08: Dashboard handles zero records.
- TC-09: Dashboard handles malformed or missing fields.
- TC-10: Sign-out returns the user to a public route.
- TC-11: Direct route refresh works on Hosting.
- TC-12: Keyboard and screen-reader checks pass for changed UI.

## Execution record

For each case, record result (Pass/Fail/Blocked/Not run), evidence location, defect ID, and tester. Never pre-fill a test as passed.

## Exit criteria

- No open critical or high-severity issue in the change scope.
- Build and lint results are recorded.
- Firebase authorization tests have evidence for changes affecting data access.
- Known limitations are documented.
