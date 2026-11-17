# ✨ Feature Inventory

This inventory separates shipped behavior from future ideas. It reflects the frontend hardening changes committed on 2026-11-18 and must be rechecked after subsequent code changes.

## ✅ Implemented in the checked-in source

| Feature | User outcome | Implementation boundary |
| --- | --- | --- |
| Public landing page | Visitor sees the product entry point and external links | LandingPage component |
| Email/password registration | User creates a Firebase account | Signup component and Firebase Auth |
| Profile display name | Signup updates the Firebase profile display name | updateProfile call |
| Email/password sign-in | Existing user starts a session | Login component and Firebase Auth |
| Inline auth errors | User receives a generic, non-sensitive failure message | Login and Signup forms |
| Authentication lifecycle | App waits for the initial Firebase auth-state callback | App auth observer |
| Protected dashboard route | Signed-out dashboard visits are redirected to login | App route configuration |
| Not-found route | Unknown paths show a useful return link | App catch-all route |
| Conditional dashboard | Signed-in user sees dashboard content | Dashboard route |
| Question list read | User sees existing records matching the current UID query | AllQuestions and Firestore |
| Loading, empty, and error states | User can distinguish pending, no records, and failed reads | AllQuestions component |
| Defensive field rendering | Missing or unexpected values use safe display fallbacks | AllQuestions normalization helpers |
| External question link validation | Only HTTP(S) links render as external anchors | AllQuestions safeExternalUrl |
| Responsive navigation disclosure | Mobile menu opens and closes with an updated accessible state | Dashboard component |
| Sign out | User ends the Firebase session | Dashboard component |

## ⚠️ Configured but not currently used by a visible feature

- Firebase Storage client is initialized, but no visible screen uses Storage.
- A Realtime Database URL is included in the Firebase configuration object, but the visible application uses Cloud Firestore.

## 🧭 Not implemented

- Add, edit, or delete question records.
- Search, filtering, sorting, pagination, or topic aggregation.
- Difficulty and topic analytics.
- Submission tracking or code execution.
- Password reset or email verification UX.
- Account deletion and data export.
- Notifications, reminders, or spaced-repetition scheduling.
- Offline-first synchronization.
- Administrative dashboard or role-based admin interface.
- API server, webhooks, or background processing.
- Google sign-in UI.

## Feature change checklist

Before adding a feature, document its user problem, route and state changes, data requirements, security impact, error states, accessibility behavior, testing approach, and deployment implications. Use [feature-specification-template.md](templates/feature-specification-template.md) for substantial proposals.
