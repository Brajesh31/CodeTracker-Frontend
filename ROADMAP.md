# Roadmap

This is a set of possible next steps based on the current checked-in frontend. Items are proposals, not release promises or scheduled commitments. Priorities may change with maintainer and contributor feedback.

## Near-term foundations

- Add automated checks that install dependencies in leetcode/, then run lint and production build.
- Correct the Firebase Hosting GitHub Actions working directory, dependency installation, and Firebase configuration path; validate preview and production deploys in a development project.
- Add and review Firestore Security Rules with the Firebase Emulator, including checks that a user can only read and write their own records.
- Add empty, loading, and recoverable error states to the dashboard and authentication flows.
- Explain which repository contains the companion browser extension source if that source becomes available.

## Product improvements

- Provide a supported workflow for adding, editing, and deleting a tracked question, with server-enforced ownership.
- Validate Firestore data before rendering, including missing fields, malformed links, and non-array topic values.
- Add search, filtering, sorting, pagination, and accessible table behavior as the dataset grows.
- Clarify supported sign-in providers and either expose or remove the unused Google sign-in handlers.
- Add account recovery, form validation, and clear authentication feedback.

## Longer-term considerations

- Define data retention, account deletion, and privacy expectations before collecting more user information.
- Evaluate automated accessibility and security-rule coverage.
- Publish versioned releases and maintain this changelog if a release process is introduced.

## Suggesting work

Open an issue with the user problem, proposed behavior, and relevant constraints. Security-rule and data-model changes should describe migration and compatibility implications. See [Contributing](CONTRIBUTING.md).
