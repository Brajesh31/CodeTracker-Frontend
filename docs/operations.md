# 🧰 Operations Guide

## Operational responsibilities

The frontend repository controls source and deployment workflow. Firebase project settings, Firestore Rules, database backups, Authentication providers, authorized domains, and Hosting site configuration may be owned separately. Confirm the accountable project administrator before production changes.

## Pre-deployment checks

- Verify branch and commit.
- Install from the lockfile in leetcode/.
- Run lint and build.
- Inspect generated output and changed files.
- Verify Firebase project target.
- Check secret availability and scope.
- Confirm rollback readiness.
- Review any Rules or data-schema change separately.

## Post-deployment checks

- Load the landing page.
- Refresh login and signup routes directly.
- Sign in with a test account.
- Confirm dashboard query behavior using authorized test records.
- Confirm sign-out.
- Review Hosting release status and error logs.
- Record the deployed commit and result.

## Incident categories

- Authentication outage or configuration drift.
- Firestore query or permission failures.
- Malformed question records.
- Hosting deployment or routing failure.
- Suspected secret exposure.
- Dependency or workflow compromise.
- External integration outage.

## Escalation

Use GitHub issues for non-sensitive operational defects. Report security incidents through the private route in SECURITY.md. Do not include user data or credentials in public tickets.
