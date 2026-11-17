# 🧹 Technical Debt Register

## Resolved in the 2026-11-18 frontend hardening commit

| ID | Area | Previous debt | Resolution | Evidence |
| --- | --- | --- | --- | --- |
| TD-03 | Data rendering | Missing or malformed topic, date, title, difficulty, email, and URL values could break or degrade the table | Added field guards, timestamp normalization, safe link protocol checks, and display fallbacks | leetcode/src/components/AllQuestions.jsx |
| TD-04 | Data UX | No explicit empty state or useful retry guidance | Added explicit empty and query-error messages; automatic retry is not implemented | leetcode/src/components/AllQuestions.jsx |
| TD-06 | Forms | Alert-based feedback and missing persistent labels | Replaced with semantic forms, required fields, labels, and inline generic errors | leetcode/src/Auth/Login.jsx and Signup.jsx |
| TD-07 | Dashboard navigation | Mobile menu control did not update its state | Added controlled open/close state and dynamic aria-expanded/accessible name | leetcode/src/components/Dashboard.jsx |

## Open debt

| ID | Area | Current debt | Consequence | Recommended remediation | Priority |
| --- | --- | --- | --- | --- | --- |
| TD-01 | Data access security | Firestore Rules and emulator configuration are not included | Security cannot be verified from this repository alone | Obtain, audit, track, and test the deployed Rules | Critical |
| TD-02 | Query scale | Reads all matching questions without a result limit | Large datasets increase read cost and render time | Agree ordering and implement cursor pagination | Medium |
| TD-03 | Testing | No unit/component/integration/E2E or Rules test suite is declared | Regressions may not be detected automatically | Add a focused test harness and Firebase Emulator Rules tests | High |
| TD-04 | Account lifecycle | Password recovery, verification UX, deletion, and export are absent | Users lack account lifecycle controls | Define product and retention requirements before implementation | Medium |
| TD-05 | External integration | The question writer/extension contract is not in this repository | Schema and ownership changes may break ingestion | Identify writer, schema, compatibility, and owner | High |
| TD-06 | Observability | No frontend error telemetry or performance baseline is configured | Production failures may be difficult to diagnose | Define privacy-safe monitoring and retention | Medium |

## Debt management

- Prioritize security, reliability, and data ownership above cosmetic cleanup.
- Estimate remediation based on code impact and external dependencies.
- Link remediation to issues and pull requests.
- Record any deferred debt and accepted risk with an owner and review date.
- Reassess during release and maintenance reviews.
