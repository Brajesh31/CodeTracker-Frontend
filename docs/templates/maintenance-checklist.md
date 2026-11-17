# 🛠️ Maintenance Checklist

## Repository hygiene

- [ ] Review open issues and stale proposals.
- [ ] Review dependency and security alerts.
- [ ] Confirm npm lockfile is synchronized with package.json.
- [ ] Check for accidental local environment files or build artifacts.
- [ ] Review GitHub workflow permissions and action versions.
- [ ] Check documentation links and diagrams.

## Application health

- [ ] Run npm ci from leetcode/.
- [ ] Run npm run lint.
- [ ] Run npm run build.
- [ ] Smoke-test landing, login, signup, dashboard, and sign-out with a synthetic account.
- [ ] Check direct route refresh and browser console.
- [ ] Review malformed question-record handling and empty state.

## Firebase operations

- [ ] Review Authentication providers and authorized domains.
- [ ] Verify Firestore Rules owner isolation.
- [ ] Review Storage Rules if Storage becomes an implemented feature.
- [ ] Confirm backup and restore configuration with Firebase owner.
- [ ] Confirm data retention and deletion responsibilities.
- [ ] Check project usage and cost signals through authorized provider tools.

## Security

- [ ] Verify deployment secret scope and rotation status.
- [ ] Ensure forked PRs cannot access deploy secrets.
- [ ] Review dependency changes and install scripts.
- [ ] Review secret-scan results.
- [ ] Update risk register and incident notes.

## Documentation and roadmap

- [ ] Update project status and known issues.
- [ ] Update CHANGELOG.md for meaningful merged changes.
- [ ] Reconcile ROADMAP.md with current priorities.
- [ ] Record material decisions as ADRs.
- [ ] Remove obsolete instructions only after replacement is verified.

## Maintenance record

- Date:
- Maintainer:
- Commit:
- Checks run:
- Findings:
- Follow-up issues:
