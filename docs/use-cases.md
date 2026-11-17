# 🧪 Use Cases

## UC-01: Register an account

- **Primary actor:** First-time visitor.
- **Preconditions:** Firebase project is configured and Email/Password Authentication is enabled.
- **Trigger:** Visitor opens the signup route.
- **Main flow:** Enter name, email, and password; submit; Firebase creates the account; profile display name is updated; app navigates to the landing page.
- **Alternate flows:** Firebase rejects duplicate email, invalid email, weak password, or unavailable network.
- **Postcondition:** An account exists in Firebase Authentication if the operation succeeds.
- **Current gap:** User feedback relies on alert-based handling; no formal verification flow is included.

## UC-02: Sign in

- **Primary actor:** Returning user.
- **Preconditions:** User has an account; Firebase Auth is enabled.
- **Main flow:** Enter email/password; Firebase validates; auth-state listener updates the app state; user opens dashboard.
- **Alternate flows:** Invalid credentials, disabled account, network failure, or unauthorized domain.
- **Postcondition:** A Firebase Auth session is active on success.

## UC-03: Review saved questions

- **Primary actor:** Authenticated user.
- **Preconditions:** User is signed in; Firestore is configured; applicable Security Rules permit the query.
- **Main flow:** Dashboard renders; AllQuestions queries questions where uid equals auth UID; matching records are rendered in a table.
- **Alternate flows:** Query rejected, empty result set, missing fields, malformed timestamp, or topics not represented as an array.
- **Postcondition:** The user can inspect available question metadata.
- **Current gaps:** No explicit empty state, retry, pagination, or defensive record validation.

## UC-04: Sign out

- **Primary actor:** Authenticated user.
- **Main flow:** Activate Sign out; Firebase ends the session; app returns to the landing route.
- **Alternate flow:** Firebase sign-out request fails.
- **Postcondition:** User is signed out when the Firebase call succeeds.

## UC-05: Report a defect

- **Primary actor:** User or contributor.
- **Preconditions:** Issue does not disclose secrets or private user data.
- **Main flow:** Search existing issues; create a reproducible bug report with environment, steps, expected behavior, and actual behavior.
- **Security alternative:** Send vulnerability details privately using [SECURITY.md](../SECURITY.md), not a public issue.

## Acceptance criteria

Each use case should have at least one normal-path test and relevant failure-path tests. Firebase-dependent tests should use synthetic accounts and a dedicated development project or emulator.
