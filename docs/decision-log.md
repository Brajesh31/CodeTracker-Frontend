# 🗒️ Decision Log

This log records material technical decisions that affect the CodeTracker implementation. Add a link to a full ADR when a decision is substantial.

## Existing decisions inferred from source

| Date / status | Decision | Rationale visible in repository | Consequence |
| --- | --- | --- | --- |
| Current | Use React with Vite for the browser app | Vite config and React entry point exist in leetcode/ | Static SPA build |
| Current | Use React Router for client routing | BrowserRouter wraps App | Hosting must rewrite routes to index.html |
| Current | Use Firebase Authentication for identity | Auth SDK is initialized and used by forms | Firebase provider/domain setup required |
| Current | Read question metadata from Cloud Firestore | AllQuestions queries questions by uid | Rules must enforce owner access |
| Current | Keep the web app under leetcode/ | package.json, lockfile, source and firebase.json are nested | CI/deployment must set working directory |
| Current | Keep extension implementation external | Landing page links to separate Edge distribution | No source-level extension contract here |

## Proposed decisions awaiting review

- Establish a canonical question document schema and writer ownership.
- Determine whether Firebase Rules should be tracked in this repository.
- Add an explicit auth-loading and route-guard model.
- Select a testing approach for components and Firebase behavior.
- Define whether a formal browser support matrix is required.
- Decide how user account deletion and question retention should work.

## Decision hygiene

Do not change an inferred decision into a formal approval without maintainer review. For new decisions, use [ADR template](templates/adr-template.md) and record alternatives, security impacts, migration needs, and review date.
