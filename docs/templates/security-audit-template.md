# 🔍 Security Audit: <Scope>

- **Audit ID:** SA-XXX
- **Commit or Rules version:** <identifier>
- **Auditor:** <owner>
- **Date:** YYYY-MM-DD
- **Environment:** Development / Preview / Production

## 1. Audit objective and scope

List reviewed code, Firebase project settings, Rules, workflow files, dependencies, and excluded systems.

## 2. Evidence inventory

| Artifact | Version or reference | Reviewed? | Notes |
| --- | --- | --- | --- |
| Firebase Firestore Rules | <version> | No | <notes> |
| Firebase Auth providers | <project> | No | <notes> |
| GitHub workflows | <commit> | No | <notes> |
| npm dependency tree | <lockfile SHA> | No | <notes> |
| Frontend data flow | <commit> | No | <notes> |

## 3. Control checks

- [ ] Firestore Rules enforce authentication and record ownership.
- [ ] Unauthorized reads and writes are denied in tests.
- [ ] No privileged Firebase credentials are bundled in browser code.
- [ ] VITE_ configuration is documented as public.
- [ ] GitHub Actions permissions are minimal.
- [ ] Secrets are unavailable to fork PRs.
- [ ] Dependencies are reviewed for advisories and license changes.
- [ ] External URLs are safely validated.
- [ ] Logs and error messages avoid sensitive values.
- [ ] Data retention and deletion responsibilities are documented.

## 4. Findings

| ID | Finding | Severity | Evidence | Remediation | Owner | Due date |
| --- | --- | --- | --- | --- | --- | --- |

## 5. Verification and retest

Record commands, Rules test results, workflow runs, and retest commit.

## 6. Residual risk

List controls not tested, external dependencies not assessed, and risk acceptance decisions.

## 7. Approval

Document the accountable maintainer and date. An audit template is not an audit result.
