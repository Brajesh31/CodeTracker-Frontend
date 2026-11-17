# 🔎 Problem Statement

## Problem

Learners may have solved-question metadata distributed across practice sessions or external tools. A learner who wants to revisit those questions needs a dependable view of the records already associated with their account.

CodeTracker's current frontend addresses only the viewing portion of this problem. It provides an authenticated React dashboard that reads matching Firestore documents and displays selected fields in a table.

## User impact addressed

- A signed-in learner can review saved question metadata in one browser view.
- The displayed external link provides a direct path back to a question.
- Difficulty, time, and topics help the learner identify a record for revision.

## What is not solved yet

The repository does not establish how all question records are created or synchronized. It does not include the companion extension source. It does not provide question CRUD forms, progress analytics, reminders, code execution, submissions, spaced repetition, or an integrated editor.

## Constraints

- The app depends on a correctly configured Firebase project.
- Firestore access depends on external Security Rules that are not tracked in this repository.
- The UI currently assumes particular document fields exist and that topics is an array.
- The browser query filter is not an authorization boundary.
- No backend API or schema migration tool is included.

## Problem validation to pursue

Before expanding the product, validate the workflow with learners using synthetic or consented test data. Identify the source of question records, common missing fields, expected topic vocabulary, and the most useful revision actions. Do not collect real account or study history data without an appropriate privacy notice and access controls.

## Problem-to-solution trace

| Problem | Existing response | Gap |
| --- | --- | --- |
| Need a personalized view | UID-filtered Firestore read | Rules must enforce ownership |
| Need to scan saved questions | Table of metadata | Sorting, search, and pagination are absent |
| Need a path to original question | External link column | URL validation and empty-link handling need strengthening |
| Need dependable rendering | Loading and error branches | Empty state and malformed-field handling need improvement |
| Need account boundary | Firebase Auth state | Direct route behavior and provider rules need verification |
