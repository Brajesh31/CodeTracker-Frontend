# 🧹 Technical Debt Register

| ID | Area | Current debt | Consequence | Recommended remediation | Priority |
| --- | --- | --- | --- | --- | --- |
| TD-01 | Authentication | No explicit auth-loading state | Route decisions can treat unresolved state as signed out | Add initial loading state and route guard | High |
| TD-02 | Routing | No not-found route or explicit signed-out dashboard redirect | Unclear direct-navigation behavior | Define route policy and test refresh/back behavior | Medium |
| TD-03 | Data rendering | Directly trusts Firestore field types | Malformed record can break the component | Add typed normalization and validation tests | High |
| TD-04 | Data UX | No explicit empty state or retry behavior | User cannot distinguish empty from confusing UI | Add state model and retry affordance | Medium |
| TD-05 | Query scale | Reads all matching questions without limit | Large datasets increase read cost and render time | Define ordering and cursor pagination | Medium |
| TD-06 | Forms | Alert-based errors and inputs without persistent labels | Lower accessibility and inconsistent feedback | Use semantic forms, labels, and inline errors | High |
| TD-07 | Dashboard navigation | Mobile menu toggle is not wired | UI control has no effect | Implement accessible disclosure or remove button | Medium |
| TD-08 | Firebase policy | No Rules or emulator files in repo | Security cannot be reviewed from this repository | Add approved Rules and emulator tests if maintainable | Critical |
| TD-09 | CI | Hosting workflows install/build from wrong directory | Automation fails or is unreliable | Correct working directory and install steps | High |
| TD-10 | Tests | No test framework or test files declared | Regression risk | Select tests based on component and Firebase boundaries | Medium |

## Debt management

- Do not prioritize cosmetic cleanup above security and build reliability.
- Estimate work based on code impact and external dependencies.
- Link remediation to issues and merge requests.
- Record any debt intentionally deferred and its risk.
- Reassess the register during release and maintenance reviews.
