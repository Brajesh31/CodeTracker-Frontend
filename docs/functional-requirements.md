# 📋 Functional Requirements

## Current behavior requirements

| ID | Requirement | Current status | Verification idea |
| --- | --- | --- | --- |
| FR-001 | Visitors can open the public landing page. | Implemented | Load / in a browser |
| FR-002 | A visitor can open the signup form. | Implemented | Navigate to /signup |
| FR-003 | Signup submits name, email, and password to Firebase Authentication. | Implemented | Use a synthetic Firebase test account |
| FR-004 | Signup updates the Firebase profile display name. | Implemented | Inspect test user's profile |
| FR-005 | A visitor can open the login form. | Implemented | Navigate to /login |
| FR-006 | Login submits email and password to Firebase Authentication. | Implemented | Use a synthetic Firebase test account |
| FR-007 | App observes Firebase auth state. | Implemented | Sign in and sign out while app is open |
| FR-008 | App shows a pending state while initial auth state is unresolved. | Implemented | Reload a browser session and observe pending text |
| FR-009 | Signed-out dashboard visits redirect to login. | Implemented | Open /dashboard in a signed-out session |
| FR-010 | Unknown paths render a not-found experience. | Implemented | Open an unknown browser path |
| FR-011 | Dashboard reads matching question documents from Firestore. | Implemented | Seed synthetic records and inspect query |
| FR-012 | Question rows safely display expected fields and fallback values. | Implemented | Test missing and malformed synthetic fields |
| FR-013 | Question links are limited to HTTP(S) URL schemes. | Implemented | Try https, http, javascript, and malformed values |
| FR-014 | Dashboard distinguishes loading, empty, and query-error states. | Implemented | Test delayed, empty, and denied queries |
| FR-015 | Login and signup provide labelled controls and inline generic error feedback. | Implemented | Keyboard test and simulate Firebase auth errors |
| FR-016 | A user can sign out. | Implemented | Activate Sign out and confirm auth state |
| FR-017 | Mobile navigation opens and closes with an accessible expanded state. | Implemented | Test button and aria-expanded at narrow viewport |

## Known gaps in current behavior

- FR-018: Add/edit/delete question records. Not implemented.
- FR-019: Add pagination, ordering, and search/filter controls. Not implemented.
- FR-020: Add password recovery, verification, account deletion, and export workflows. Not implemented.
- FR-021: Add automated component, integration, E2E, and Firebase Rules test suites. Not implemented.

## Acceptance rule

A requirement is implemented when source evidence exists. A verification idea is not a passed test. Firebase-dependent behavior must be tested separately in the intended Firebase development project or Emulator environment.

## Related documents

- [Application API](api.md)
- [Use cases](use-cases.md)
- [Testing strategy](testing-strategy.md)
- [Known issues](known-issues.md)
