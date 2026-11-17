# 🛡️ Threat Assessment: <Feature or change>

- **Assessment ID:** TA-XXX
- **Scope:** <component/service/flow>
- **Assessor:** <owner>
- **Date:** YYYY-MM-DD
- **Related ADR/issue:** <links>

## 1. System context

Describe data, routes, Firebase services, external integrations, and the trust boundaries. Attach an architecture diagram.

## 2. Assets and security objectives

| Asset | Confidentiality need | Integrity need | Availability need |
| --- | --- | --- | --- |
| Auth identity | <level> | <level> | <level> |
| Question records | <level> | <level> | <level> |
| Deployment credential | <level> | <level> | <level> |

## 3. Threat actors and assumptions

List unauthenticated users, authenticated users, malicious clients, compromised dependencies, contributors, and external integration actors as relevant.

## 4. Threat scenarios

| ID | Entry point | Threat | Impact | Likelihood | Mitigation | Evidence |
| --- | --- | --- | --- | --- | --- | --- |
| T-01 | <surface> | <scenario> | <impact> | Low/Med/High | <control> | <test> |

## 5. Firebase authorization review

- How is identity established?
- Which Firestore Rules enforce ownership?
- Are reads, creates, updates, and deletes tested?
- Can uid be changed by a client?
- Are queries compatible with Rules?
- Are Storage Rules in scope?

## 6. Input and output risks

Review document fields, external URLs, user text, HTML rendering, logging, and error messages.

## 7. Secrets and supply chain

Review VITE_ variables, GitHub Actions secrets, workflow permissions, dependencies, install scripts, and token exposure.

## 8. Residual risk and remediation

Prioritize findings, assign owners, and define release blockers.

## 9. Approval

Record assessor, maintainer, date, accepted residual risks, and review expiry.
