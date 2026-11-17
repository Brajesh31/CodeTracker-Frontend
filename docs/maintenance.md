# 🛠️ Maintenance Guide

## Routine maintenance

- Keep dependencies and npm lockfile synchronized.
- Review Dependabot updates and major-version migration notes.
- Run npm ci, npm run lint, and npm run build from leetcode/.
- Review Firebase Authentication provider and authorized-domain settings.
- Verify Firestore Security Rules remain restrictive.
- Review GitHub Actions permissions and deployment secret scope.
- Check external links used by the landing page.
- Reconcile this documentation with the actual route, data, and configuration state.

## Suggested cadence

| Cadence | Activity |
| --- | --- |
| Every pull request | CI, diff review, secret scan, documentation link validation |
| Weekly | Review dependency updates and open security alerts |
| Monthly | Review risk register, external links, Firebase access policy evidence |
| Before release | Full build, manual smoke test, Hosting target verification, rollback readiness |
| After incident | Rotate credentials if needed, record root cause and prevention actions |

## Maintenance ownership

The repository maintainer is responsible for deciding when releases and deployment changes are approved. Firebase project configuration may be owned separately; identify that owner before making production changes.

## Safe maintenance rules

- Never store secrets in source files or issue comments.
- Do not test with real user data unless explicitly authorized.
- Do not loosen production rules to work around a UI error.
- Do not auto-merge a major dependency upgrade without a migration review.
- Keep release notes factual and include unverified limitations.
