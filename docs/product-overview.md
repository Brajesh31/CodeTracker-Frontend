# 🎯 Product Overview

## 1. Purpose

CodeTracker is a browser application intended to help a signed-in learner review coding-practice questions associated with their account. The checked-in frontend presents a landing page, account registration and sign-in forms, and an authenticated dashboard that reads a user's existing question records from Cloud Firestore.

The repository name and product intent should not be confused with a full coding platform. The current source is a read-oriented tracker interface, not an online judge, code editor, submission engine, or integrated problem-solving environment.

## 2. Current user value

A learner can use the current application to:

- Create an account with an email address and password.
- Sign in and establish a Firebase Authentication session.
- Open a dashboard when an authenticated user is present.
- Review question metadata already stored in the Firestore questions collection for their UID.
- Follow the question link from a rendered row.
- Sign out of the active account.

The visible question table reads title, difficulty, email, link, time, and topics. It does not create, edit, or delete question records.

## 3. System context

The browser runs the React application built by Vite. Firebase Authentication provides identity and Cloud Firestore supplies the question documents. The app uses Firebase client configuration from Vite environment variables. Firebase Hosting is configured to serve the static build and rewrite browser paths to the SPA entry point.

The landing page links to an independently distributed browser extension and an external study-resource site. Their source code and operational behavior are outside this repository.

## 4. Current product boundary

| Capability | Repository status | Evidence boundary |
| --- | --- | --- |
| Email/password registration | Implemented | Signup component and Firebase Auth call |
| Email/password sign-in | Implemented | Login component and Firebase Auth call |
| Auth-state observation | Implemented | App component subscription |
| Dashboard route | Implemented conditionally | Route rendered when auth state contains a user |
| Read current user's question documents | Implemented | Firestore query filters questions by uid |
| Create or edit questions | Not implemented | No dashboard form or write operation found |
| Delete questions | Not implemented | No delete operation found |
| Google sign-in UI | Not exposed | Handler functions exist but are not connected to visible controls |
| Password reset | Not implemented | No reset flow found |
| Server-side API | Not present | No server application or HTTP API in this repository |
| Firestore authorization rules | External setup required | No rules file tracked here |
| Browser extension source | External to repository | Landing page links to a separate distribution |

## 5. Intended audience

The primary audience is a learner who wants a single page to review coding questions already associated with their account. Secondary audiences are contributors maintaining the React interface, and maintainers responsible for Firebase configuration and deployment.

## 6. Product principles

1. **Accurate records:** Display data only when it can be interpreted safely. Missing or malformed values should not crash the page.
2. **User ownership:** Firestore Security Rules, not a UI filter, must enforce access to each user's data.
3. **Transparent limits:** Show clear loading, empty, and recoverable error states as those capabilities are implemented.
4. **Accessible interaction:** Forms, links, navigation, and tables should work by keyboard and assistive technology.
5. **Small, verifiable changes:** A feature is not considered delivered until source, documentation, tests, and deployment implications agree.

## 7. Success measures to establish later

No validated product analytics or usage metrics are included in the repository. Future measurements may include successful sign-in rate, dashboard load success, data-query error rate, empty-state frequency, and accessibility defects. Collect only the minimum data required, disclose any analytics, and do not publish invented figures.

## Related documentation

- [Features](features.md)
- [Project objectives](project-objectives.md)
- [Use cases](use-cases.md)
- [Scope and limitations](scope-and-limitations.md)
- [Architecture](architecture.md)
