# 👀 Code Review Checklist

## Change clarity

- [ ] Change solves the linked issue or requirement.
- [ ] Scope is focused and unrelated files are not modified.
- [ ] Naming, structure, and control flow are understandable.
- [ ] No generated files or local editor state are committed unnecessarily.

## React and frontend

- [ ] Components have clear responsibilities.
- [ ] State and effects have correct lifecycles and cleanup.
- [ ] Forms use semantic elements and labels.
- [ ] Loading, empty, success, and error states are handled.
- [ ] External links are validated and safely opened.
- [ ] Responsive layout and keyboard access are preserved.

## Firebase and data

- [ ] Firebase client configuration remains centralized.
- [ ] No privileged key or secret is embedded in VITE_ variables.
- [ ] Firestore Rules enforce owner access independently of UI filters.
- [ ] Query shapes and fields match the documented contract.
- [ ] Personal data is minimized.
- [ ] Schema migrations and external writers are considered.

## Reliability and quality

- [ ] npm ci, lint, and build run from leetcode/.
- [ ] Relevant tests are added or test gap is explained.
- [ ] Errors are recoverable and do not leak sensitive details.
- [ ] No fake passing badges, metrics, or test results are added.
- [ ] Documentation and diagrams match the code.

## Security and maintainability

- [ ] Workflow permissions and secrets are least-privilege.
- [ ] Dependencies and licenses are reviewed.
- [ ] No secrets or production data appear in tests, screenshots, or logs.
- [ ] Known risks and limitations are documented.

## Review outcome

- **Decision:** Approve / Request changes / Comment
- **Reviewer:**
- **Commit reviewed:**
- **Required follow-up:**
