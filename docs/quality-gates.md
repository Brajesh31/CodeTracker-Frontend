# 🚦 Quality Gates

## Pull request gates

A change should not merge until applicable requirements are met:

- [ ] Code is scoped and reviewed.
- [ ] npm ci completes from leetcode/.
- [ ] npm run lint completes successfully.
- [ ] npm run build completes successfully.
- [ ] Local documentation links resolve.
- [ ] Mermaid diagrams render and reflect current source.
- [ ] No credentials, production data, or generated build output is committed.
- [ ] UI changes have synthetic screenshots or manual verification notes.
- [ ] Accessibility checks cover changed interactions.
- [ ] Firebase Security Rules are reviewed when data access changes.
- [ ] Dependency and license changes are reviewed.

## Release gates

- [ ] Default branch commit is identified.
- [ ] Correct Firebase project/Hosting site is selected.
- [ ] Protected deployment secret is available only to trusted workflow context.
- [ ] Build output corresponds to the intended source and environment.
- [ ] Core auth and dashboard smoke tests pass.
- [ ] Rollback route is known.
- [ ] Release notes describe user-visible changes and limitations.

## Rule for reporting status

A checkbox is complete only when evidence exists. Do not report an unexecuted check as passed. A workflow that ends with action_required, cancelled, skipped, or neutral is not a passing build.
