# 🚢 Firebase Hosting Deployment Checklist

## Before deployment

- [ ] Confirm branch, commit SHA, and release purpose.
- [ ] Confirm target Firebase project and Hosting site.
- [ ] Confirm Firebase Authentication providers and authorized domains.
- [ ] Confirm Firestore Security Rules are deployed and tested.
- [ ] Confirm GitHub Actions secret is configured as a protected secret.
- [ ] Ensure untrusted pull-request workflows cannot access deployment credentials.
- [ ] Run npm ci, npm run lint, and npm run build from leetcode/.
- [ ] Confirm build output exists at leetcode/dist/.
- [ ] Confirm SPA rewrite configuration in leetcode/firebase.json.
- [ ] Review dependency and security alerts.

## Deployment

- [ ] Trigger the approved main-branch deployment workflow.
- [ ] Confirm CI completed before deploy step.
- [ ] Confirm deployment action targets the intended project.
- [ ] Record workflow run and Hosting release identifiers.
- [ ] Keep secrets out of logs and artifacts.

## Post-deployment verification

- [ ] Open root landing page.
- [ ] Refresh /login and /signup directly.
- [ ] Sign in with a synthetic account.
- [ ] Open /dashboard and verify expected records.
- [ ] Test a denied cross-user access attempt in a safe test environment.
- [ ] Verify sign-out.
- [ ] Review browser console and Hosting logs for unexpected errors.
- [ ] Confirm deployed assets correspond to the intended commit.

## Rollback readiness

- [ ] Previous Hosting release identified.
- [ ] Person with rollback permission identified.
- [ ] Database/Rules changes reviewed independently.
- [ ] Rollback trigger and verification steps understood.

## Deployment record

- Commit:
- Firebase project:
- Hosting site:
- Workflow run:
- Hosting release:
- Verification:
- Deployed by:
- Date/time UTC:
