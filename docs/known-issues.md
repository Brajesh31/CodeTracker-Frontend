# 🐛 Known Issues and Limitations

This list reflects the source and configuration inspected on 2026-11-18. Re-check before closing an item because code may change.

## Application behavior

- **No explicit loading state for initial authentication:** App initializes user state as null and does not distinguish unresolved auth state from a signed-out session.
- **Unauthenticated dashboard URL:** The /dashboard route is conditionally omitted, but a clear redirect or guard is not defined.
- **No catch-all route:** Unknown paths do not have a dedicated not-found experience.
- **No question CRUD UI:** The dashboard reads records but does not create, edit, or delete them.
- **No explicit empty state:** A successful query with zero results does not show explanatory guidance.
- **Fragile record assumptions:** topics is called with join, and time is passed directly to Date. Missing or malformed fields may break display.
- **No pagination or query limit:** All matching records are fetched in one call.
- **Alert/console-based feedback:** Auth and sign-out errors are not consistently presented inline.
- **Mobile menu control is inert:** The dashboard menu button does not update the menu's expanded state.
- **Google sign-in not exposed:** Handler functions exist, but visible buttons are absent.

## Repository and operations

- Firebase Hosting workflows were configured to run npm from the repository root, but the package.json and firebase.json are in leetcode/.
- Existing workflow deployment runs did not provide a confirmed passing CI result in the inspected pull-request commits.
- Firestore Security Rules and Firebase Emulator configuration are not checked in.
- No formal unit, integration, or E2E test suite is declared in the package manifest.
- Screenshots of real application screens are not currently included in the reviewed documentation assets.

## Handling

Do not close an issue because the limitation is documented. Close it only after implementation and relevant verification. Record workarounds and remaining risk in the issue or changelog.
