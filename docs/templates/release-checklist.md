# 🚀 CodeTracker Release Checklist

## Release identity

- [ ] Release version or identifier recorded.
- [ ] Target commit on main recorded.
- [ ] Release notes drafted from actual merged changes.
- [ ] Known issues and migrations documented.

## Source and dependency review

- [ ] Pull requests reviewed and required checks passed.
- [ ] package.json and package-lock.json are synchronized.
- [ ] Major framework upgrades have migration review.
- [ ] Third-party package licenses and advisories reviewed.
- [ ] No secrets, production data, build output, or local environment files committed.

## Validation

- [ ] npm ci completed in leetcode/.
- [ ] npm run lint completed in leetcode/.
- [ ] npm run build completed in leetcode/.
- [ ] Documentation link and structure validators passed.
- [ ] Relevant unit/component/integration tests passed, or their absence is disclosed.
- [ ] Firebase Rules tests passed for data-access changes.
- [ ] Accessibility review completed for changed UI.
- [ ] Synthetic end-to-end smoke test passed.

## Deployment readiness

- [ ] Correct Firebase project and Hosting site confirmed.
- [ ] Deployment secret is available only in a trusted workflow context.
- [ ] Hosting configuration points to leetcode/dist/.
- [ ] Previous good Hosting release is known.
- [ ] Data and Rules changes have separate rollback plans.

## Post-release

- [ ] Landing page loads.
- [ ] Login and signup routes load directly.
- [ ] Dashboard loads for a test user.
- [ ] User data isolation verified.
- [ ] Sign-out works.
- [ ] Hosting release and workflow run recorded.
- [ ] CHANGELOG.md updated.
- [ ] Monitoring and support owner informed.

## Release decision

- **Decision:** Go / No-Go / Go with explicitly accepted limitations
- **Approver:** <maintainer>
- **Date:** YYYY-MM-DD
- **Unresolved blockers:** <list>
