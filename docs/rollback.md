# ↩️ Rollback Procedure

## Important distinction

Rolling back Git history does not automatically roll back a Firebase Hosting release, Firebase Security Rules, Auth provider settings, or Firestore documents. Treat source rollback and provider configuration rollback as separate operations.

## Pre-release readiness

- Know the previous stable Hosting release.
- Record the Firebase project and Hosting site.
- Keep a copy of the deployment commit SHA.
- Confirm who can deploy or restore releases.
- Keep data schema and Security Rules changes separately documented.
- Avoid destructive data migrations without a tested recovery plan.

## Hosting rollback outline

1. Confirm the incident and affected site.
2. Open Firebase Hosting release history for the correct project.
3. Identify the last known-good release.
4. Use the provider's current supported rollback procedure.
5. Confirm the release is active.
6. Test landing, login, signup, dashboard, and direct route refresh.
7. Verify Firestore access remains appropriately restricted.
8. Record the incident, restored release ID, and follow-up actions.

## Source rollback

Use a reviewed revert commit rather than force-pushing shared history. Re-run CI and ensure the reverted application remains compatible with the current Firebase configuration.

## Data rollback

Do not roll back question records or Rules blindly. Confirm backup coverage and coordinate with the Firebase project owner. Use the [Backup and Restore](backup-and-restore.md) procedure.

## Evidence

Record the incident time, commit SHA, Hosting release ID, action taken, validation results, and residual impact.
