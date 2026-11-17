# 🔍 Quality Assurance Guide

## QA objectives

QA verifies that CodeTracker behaves as documented and that a change does not weaken account separation, accessible interaction, or deployment reliability.

## Manual smoke test

Use a non-production Firebase project and synthetic accounts:

1. Load the landing page.
2. Navigate to signup and create a test account.
3. Confirm the Firebase profile display name updates.
4. Sign out or navigate to login as appropriate.
5. Sign in with the test account.
6. Open the dashboard.
7. Confirm only the expected synthetic question records appear.
8. Open a question link and verify the destination.
9. Sign out and confirm the signed-out state.
10. Refresh public routes and verify Hosting routing behavior in a deployed preview.

## Negative tests

- Invalid email/password.
- Duplicate account.
- Network unavailable during auth.
- Firestore permission denied.
- No matching question records.
- Missing topics or malformed timestamp.
- External link with an unsupported URL scheme.
- Direct navigation to dashboard while signed out.

## Accessibility checks

- Keyboard-only navigation.
- Persistent labels and associated errors.
- Visible focus.
- Semantic table headings.
- Screen-reader announcements for loading and errors.
- Contrast and zoom/reflow.
- Touch target and mobile navigation behavior.

## Defect severity

| Severity | Definition | Response |
| --- | --- | --- |
| Critical | Cross-user data exposure, secret leakage, or production-wide outage | Stop release and contain immediately |
| High | Core login/dashboard flow broken or major data integrity issue | Fix before release |
| Medium | Important function degraded with workaround | Prioritize in next patch |
| Low | Cosmetic or limited usability issue | Track and schedule |

## Evidence

Attach only synthetic screenshots and sanitized logs. Record test environment, commit SHA, browser, steps, expected result, actual result, and retest outcome. Never include passwords, access tokens, email inbox content, or production user records.
