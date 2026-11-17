# 🏗️ Architecture Design: <Change or subsystem>

- **Status:** Draft / In review / Accepted / Implemented
- **Owner:** <owner>
- **Date:** YYYY-MM-DD
- **Related ADR:** <link or None>
- **Related issue:** <link>

## 1. Problem and goals

Describe the user or engineering problem, expected outcome, measurable acceptance criteria, and scope boundaries.

## 2. Existing architecture

List the source modules, Firebase services, workflows, and external systems affected. Link to docs/architecture.md and docs/system-design.md.

## 3. Proposed architecture

~~~mermaid
flowchart LR
    Client[Browser UI] --> Service[Client service boundary]
    Service --> Provider[External provider]
~~~

Replace every example node and edge with components that actually exist or are proposed. Label proposed elements.

## 4. Component responsibilities

| Component | Responsibility | Inputs | Outputs | Trust boundary |
| --- | --- | --- | --- | --- |
| <component> | <role> | <input> | <output> | <trusted/untrusted> |

## 5. Data contract

- Data source:
- Collection / route:
- Field definitions:
- Validation:
- Ownership:
- Compatibility:
- Retention:
- Migration:

## 6. API or event contracts

Describe browser routes, Firebase SDK operations, external calls, payloads, error handling, and versioning. Write "Not applicable" for server APIs that are not part of this design.

## 7. Security and privacy

Identify threats, authentication, authorization, secrets, data minimization, encryption responsibilities, logging, and abuse limits.

## 8. Reliability and performance

Describe failure modes, retries, fallback behavior, query limits, expected volume, and how the design will be measured.

## 9. Accessibility and UX

Describe focus order, labels, responsive behavior, announcements, empty/loading/error states, and target WCAG criteria.

## 10. Deployment and operations

List build commands, environment variables by name only, workflow changes, deployment target, rollback approach, and monitoring.

## 11. Alternatives and trade-offs

Compare at least two reasonable options, including retaining the current implementation.

## 12. Test and acceptance plan

| Scenario | Expected result | Evidence |
| --- | --- | --- |
| Normal path | <result> | <test reference> |
| Failure path | <result> | <test reference> |
| Unauthorized path | <result> | <Rules test reference> |

## 13. Risks, open questions, and approval

Record unresolved concerns, accountable owner, approval status, and decision date.
