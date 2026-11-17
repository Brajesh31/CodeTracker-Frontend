# 💾 Backup and Restore

## Current repository boundary

This repository contains frontend source and Firebase Hosting configuration. It does not configure Firestore backups, export jobs, retention schedules, or restore automation. Those controls are managed in the Firebase/Google Cloud project, not by the React application.

## Backup planning requirements

Before using real user data, the Firebase project owner should document:
- Which Firestore databases and collections are backed up.
- Backup frequency and retention.
- Storage location and access controls.
- Encryption and key ownership.
- Recovery time and recovery point objectives.
- Who can initiate and approve a restore.
- How restored data is checked against current Security Rules and schema.

## Restore procedure outline

1. Declare the incident and identify the affected project and collection.
2. Select an approved backup and confirm its timestamp.
3. Restore to a controlled environment where possible.
4. Verify record counts and representative document structure using authorized test access.
5. Reapply or verify Security Rules.
6. Validate the application with synthetic accounts.
7. Obtain approval before restoring to production.
8. Record the result, data loss window, and follow-up actions.

## Safety

Never use a restore operation to copy real user data into a public test environment. Do not claim backup readiness until the Firebase project's actual backup configuration has been inspected and a restore test has succeeded.
