# 🧰 Documentation and Engineering Templates

Use these templates to standardize project decisions, testing, security reviews, incident records, and releases. Copy the relevant template into the appropriate issue, pull request, or documentation path. Replace every instruction placeholder and remove sections that genuinely do not apply.

## Template selection

| Work type | Template |
| --- | --- |
| Material architecture or technology choice | adr-template.md |
| System or component design change | architecture-template.md |
| New or changed Firebase/browser API behavior | api-documentation-template.md |
| Firestore field or collection change | database-schema-template.md |
| User-facing product change | feature-specification-template.md |
| Reproducible defect | bug-report-template.md |
| Individual manual or automated scenario | qa-test-case-template.md |
| Release validation scope | test-plan-template.md |
| Record of completed validation | test-report-template.md |
| Security design review | threat-assessment-template.md |
| Security control review | security-audit-template.md |
| Accessibility review | accessibility-audit-template.md |
| Production or security incident | incident-report-template.md |
| Build and publish a version | release-checklist.md |
| Firebase Hosting release | deployment-checklist.md |
| Restore a previous version | rollback-checklist.md |
| Firestore data contract migration | migration-template.md |
| Product or technical risk | risk-assessment-template.md |
| Proposed scope or behavior change | change-request-template.md |
| Review a code change | code-review-template.md |
| Communicate repository state | project-status-template.md |
| Capture coordination decisions | meeting-notes-template.md |
| Recurring upkeep | maintenance-checklist.md |

## Working rules

- Templates do not imply that the associated feature or control exists.
- Use synthetic data and sanitized logs.
- Identify the exact commit, environment, route, or Firebase project when evidence matters.
- Mark unexecuted checks as Not run, Blocked, or Not applicable, never as Pass.
- Link related decisions, issues, test results, and source changes.
- Remove all placeholder instructions before publishing a completed record.
