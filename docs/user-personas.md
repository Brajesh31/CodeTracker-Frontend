# 👥 User Personas

Personas are working assumptions for product and accessibility review. They are not claims based on analytics or formal user research.

## Persona A: Coding-practice learner

**Goal:** Revisit previously solved questions without searching across multiple places.

**Context:** Uses a modern browser and may be studying on a laptop, tablet, or mobile device. Has an account and question metadata already present in the Firebase project.

**Needs:**
- A reliable sign-in flow.
- A readable list of saved question records.
- Clear question links and useful metadata.
- Understandable empty and error states.
- A safe way to sign out on a shared device.

**Current support:** Email/password authentication, conditional dashboard route, Firestore read query, table display, sign-out.

**Current gaps:** Search, filters, sorting, pagination, account recovery, and CRUD are not implemented.

## Persona B: First-time visitor

**Goal:** Understand what CodeTracker is and decide whether to register or sign in.

**Needs:** Clear product explanation, accessible navigation, a trustworthy account flow, and a clear explanation of what information is stored.

**Current support:** Public landing page and signup/login routes.

**Current gaps:** The repository's UI should better explain that questions are read from existing records and that account creation alone does not create question records.

## Persona C: Contributor or maintainer

**Goal:** Change the frontend without weakening security or breaking deployment.

**Needs:** Reproducible npm setup, accurate docs, clear source boundaries, automated checks, safe handling of Firebase configuration, and a review process.

**Current support:** Nested npm package, documentation, contribution guide, and GitHub workflows.

**Current gaps:** Existing Hosting workflows need their working directory and dependency installation corrected; test coverage and Firebase Rules tests are absent.

## Persona review checklist

- Confirm the user task exists in the actual UI.
- Validate the task with synthetic data.
- Include keyboard-only and screen-reader scenarios.
- Avoid collecting extra personally identifiable information.
- Update this document when research changes the user model.
