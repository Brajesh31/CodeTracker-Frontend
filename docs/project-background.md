# 🧩 Project Background

## Context

Coding-practice learners often revisit previously solved questions to refresh patterns, revisit difficult topics, and prepare for interviews. CodeTracker is a lightweight frontend intended to make a learner's existing question records visible in one authenticated dashboard.

The current implementation is deliberately narrower than a complete study-management platform. The React application does not solve problems, execute submitted code, grade answers, or provide a question-authoring workflow. It renders metadata records that already exist in Firebase.

## Repository context

The codebase is organized as a repository root containing project governance, documentation, and GitHub automation, with the browser application nested in leetcode/. The application uses React 18, React Router, Vite, Tailwind CSS, and the Firebase JavaScript SDK.

Firebase Authentication supplies the current identity. Cloud Firestore is queried directly from the browser. The companion extension mentioned by the landing page is distributed separately, and this repository does not contain its source or a versioned integration contract.

## Current implementation evidence

- React is mounted from leetcode/src/main.jsx.
- Route definitions and auth-state subscription are in leetcode/src/App.jsx.
- Email/password forms are in leetcode/src/Auth/.
- Dashboard and question list components are in leetcode/src/components/.
- Firebase is initialized in leetcode/src/config/firebase.jsx.
- Firebase Hosting serves dist and rewrites paths to index.html through leetcode/firebase.json.

## Why this document exists

This background prevents future contributors from assuming that external services or linked products are implemented inside this repository. Any expansion to question creation, browser-extension synchronization, account deletion, or analytics should first define data ownership, security rules, failure behavior, and migration implications.

## Open questions

- Where is the source repository for the companion extension, and who maintains it?
- What exact process writes documents into the questions collection?
- Is email intended to be stored per question, or can it be derived from the authenticated user?
- What retention and account-deletion behavior should apply to Firestore records?
- Which Firebase project and Hosting site are the approved production targets?

Answers should be recorded in an architecture decision record rather than inferred from the UI.
