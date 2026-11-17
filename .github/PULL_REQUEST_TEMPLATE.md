# 🔀 Pull Request

## Summary

Describe the user-visible or engineering change and why it is needed.

## Related issue or decision

Closes #<issue>  
Related ADR: <link or Not applicable>

## Change type

- [ ] Bug fix
- [ ] New feature
- [ ] Documentation
- [ ] Security or privacy
- [ ] Accessibility
- [ ] Performance
- [ ] Dependency update
- [ ] CI/CD or maintenance

## Implementation details

List the important code paths, Firebase operations, configuration changes, and trade-offs.

## Screenshots or diagrams

For UI changes, attach genuine screenshots captured from the running application using synthetic data. Do not fabricate screens or include personal information. For architecture changes, link updated SVG or Mermaid diagrams.

## Verification

- [ ] npm ci from leetcode/
- [ ] npm run lint from leetcode/
- [ ] npm run build from leetcode/
- [ ] Relevant tests executed
- [ ] Firebase Security Rules reviewed/tested where data access changes
- [ ] Documentation links and diagrams checked
- [ ] Accessibility behavior reviewed
- [ ] Secret and generated-file review completed

Record actual commands and outcomes. Mark skipped checks and explain why.

## Security and privacy

- [ ] No secrets or production user records added.
- [ ] VITE_ variables remain public client configuration only.
- [ ] Ownership is enforced by Firebase Rules, not UI filtering.
- [ ] External links and stored data are validated.

## Reviewer checklist

- [ ] Source matches the documented behavior.
- [ ] Tests cover normal and failure paths.
- [ ] No feature, metric, badge, screenshot, or test result is overstated.
- [ ] Known risks and migration impacts are documented.

## Rollout and rollback

Describe deployment impact, external Firebase configuration, data migration, and rollback plan.
