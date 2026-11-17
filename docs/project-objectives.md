# 🥅 Project Objectives

## Current objectives

The objectives below describe the purpose of the checked-in application, not a promise that every adjacent capability has been implemented.

1. Provide a simple public landing page that explains the CodeTracker entry point and links to relevant external resources.
2. Support email/password account creation and sign-in through Firebase Authentication.
3. Observe the active authentication session and expose the dashboard only when a user is present in the app's auth state.
4. Read question records from the Firestore questions collection using the authenticated user's UID as a query condition.
5. Present question title, difficulty, associated email, external link, time, and topics in a readable table.
6. Let the active user end their session through Firebase sign-out.
7. Keep Firebase client configuration external to source code through Vite environment variables.
8. Publish the built single-page application using the configured Firebase Hosting target.

## Engineering objectives

- Make local setup reproducible from the committed npm lockfile.
- Keep the documented command working directory aligned with the nested leetcode package.
- Ensure CI installs from leetcode/package-lock.json and runs real package scripts.
- Use restrictive Firebase Security Rules for all user data, configured and tested in the Firebase project.
- Prevent secrets, personal records, and generated artifacts from entering Git history.
- Keep the documentation and diagrams consistent with the actual source.

## Proposed objectives requiring implementation

The following are future improvements, not current capabilities:

- Robust loading, empty, and retry states.
- Defensive validation of question documents before rendering.
- Accessible form errors and inline authentication feedback.
- A question-entry workflow with a defined writer and ownership model.
- Search, filtering, sorting, and pagination for larger collections.
- An account recovery and account-deletion process.
- Automated Firebase Security Rules tests in an emulator environment.

## Prioritization

Security and reliability foundations take precedence over adding more UI features. Do not implement data writes until authorization rules and the extension/backend ownership contract are agreed.

## Acceptance criteria for an objective

Every new objective should have a testable outcome, an owner, dependencies, and a review date. A document update alone does not satisfy an objective that requires code or Firebase Console configuration.
