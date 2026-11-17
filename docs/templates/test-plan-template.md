# 📝 Test Plan: <Change>

- **Plan ID:** TP-XXX
- **Owner:** <owner>
- **Commit range:** <base...head>
- **Target date:** YYYY-MM-DD
- **Related change:** <issue/PR/ADR>

## 1. Objectives

What must be verified before the change can be accepted?

## 2. Scope

- In scope routes/modules:
- Firebase services:
- Browser matrix:
- Documentation/workflows:
- Out of scope:

## 3. Risks

| Risk | Severity | Test that addresses it | Owner |
| --- | --- | --- | --- |

## 4. Environments and prerequisites

Record Node/npm versions, test browser, Firebase project/emulator, synthetic users, Rules version, secrets required, and reset procedure.

## 5. Test coverage matrix

| Area | Test type | Cases | Owner | Status |
| --- | --- | --- | --- | --- |
| Auth | Component / integration | <IDs> | <owner> | Not run |
| Firestore access | Rules | <IDs> | <owner> | Not run |
| Dashboard data | Unit / component | <IDs> | <owner> | Not run |
| Navigation | E2E / manual | <IDs> | <owner> | Not run |
| Accessibility | Manual / automated | <IDs> | <owner> | Not run |
| Build/deploy | CI / smoke | <IDs> | <owner> | Not run |

## 6. Test execution commands

~~~sh
cd leetcode
npm ci
npm run lint
npm run build
~~~

Add other commands only when the corresponding scripts or tools exist.

## 7. Entry and exit criteria

Define prerequisites, minimum pass rate, severity thresholds, and required approvals. Never waive a security or data-ownership test without a documented decision.

## 8. Results and defects

Link reports, evidence, blocked cases, known issues, and retest records.

## 9. Sign-off

- QA:
- Engineering:
- Security / Rules owner:
- Product / maintainer:
- Date:
