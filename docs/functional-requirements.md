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
| FR-008 | Dashboard route is included when a user is present. | Implemented | Inspect routes after auth settles |
| FR-009 | Dashboard requests matching question documents from Firestore. | Implemented | Seed synthetic records and inspect query |
| FR-010 | Question rows display title, difficulty, email, link, time, and topics. | Implemented for expected data | Verify all expected fields |
| FR-011 | A user can sign out. | Implemented | Activate Sign out and confirm auth state |

## Known gaps in current behavior

- FR-012: Define a visible empty state when no question documents match. Not implemented.
- FR-013: Validate and normalize each question document before rendering. Not implemented.
- FR-014: Provide user-friendly inline authentication errors. Current forms use alert/logging behavior.
- FR-015: Define an explicit unauthenticated dashboard redirect or guard. Not implemented.
- FR-016: Provide accessible mobile navigation state. The current menu button is not wired to toggle the menu.
- FR-017: Define a not-found route. Not implemented.
- FR-018: Define account recovery and deletion behavior. Not implemented.

## Acceptance rule

Do not mark a requirement implemented because it appears in a roadmap or design. Require source evidence and a repeatable verification step. When behavior is dependent on Firebase Console configuration, identify that dependency and test it separately from the frontend.

## Related documents

- [Application API](api.md)
- [Use cases](use-cases.md)
- [Testing strategy](testing-strategy.md)
- [Known issues](known-issues.md)
