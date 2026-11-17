# ✨ Feature Inventory

This inventory separates shipped behavior from future ideas. It should be updated whenever a visible feature changes.

## ✅ Implemented in the checked-in source

| Feature | User outcome | Implementation boundary |
| --- | --- | --- |
| Public landing page | Visitor sees the product entry point and external links | LandingPage component |
| Email/password registration | User creates a Firebase account | Signup component and Firebase Auth |
| Profile display name | Signup flow updates the Firebase profile display name | updateProfile call |
| Email/password sign-in | Existing user starts a session | Login component and Firebase Auth |
| Authentication state | App reacts to current Firebase session | onAuthStateChanged in App |
| Conditional dashboard route | Dashboard route is added when a user is present | App route configuration |
| Question list read | User sees existing question metadata matching their UID query | AllQuestions component and Firestore |
| External question link | User can open a question link in a new tab | Link column with noopener/noreferrer |
| Sign out | User ends the current Firebase session | Dashboard component |

## ⚠️ Present but not exposed as a user feature

- Google popup sign-in handler functions exist in Login and Signup, but no Google sign-in buttons are rendered.
- Firebase Storage is initialized in the client config, but no current screen uses it.
- A Realtime Database URL value is included in environment configuration, but the visible application queries Cloud Firestore.

## 🧭 Not implemented

- Add, edit, or delete question records.
- Search, filtering, sorting, pagination, or topic aggregation.
- Difficulty and topic analytics.
- Submission tracking or code execution.
- Password reset or email verification UX.
- Account deletion and data export.
- Notifications, reminders, or spaced-repetition scheduling.
- Offline-first data synchronization.
- Administrative dashboard or role-based admin interface.
- API server, webhooks, or background processing.

## Feature change checklist

Before adding a feature, document its user problem, route and state changes, data requirements, security impact, error states, accessibility behavior, testing approach, and deployment implications. Use [feature-specification-template.md](templates/feature-specification-template.md) for substantial proposals.
