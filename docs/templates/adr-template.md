# ADR-NNN: <Decision title>

- **Status:** Proposed / Accepted / Rejected / Superseded
- **Date:** YYYY-MM-DD
- **Decision owner:** <role or maintainer>
- **Reviewers:** <reviewers>
- **Related issue or PR:** <links>
- **Supersedes:** <ADR ID or None>

## 1. Context

Describe the problem, why a decision is needed now, the affected CodeTracker route/module/service, and the constraints. Include current source evidence and distinguish known facts from assumptions.

## 2. Decision drivers

| Driver | Importance | Evidence or reason |
| --- | --- | --- |
| Security and ownership | High / Medium / Low | <explain> |
| User experience | High / Medium / Low | <explain> |
| Maintainability | High / Medium / Low | <explain> |
| Operational cost | High / Medium / Low | <explain> |
| Compatibility | High / Medium / Low | <explain> |

## 3. Options considered

### Option A: <name>

- Description:
- Benefits:
- Drawbacks:
- Security implications:
- Migration or compatibility impact:

### Option B: <name>

- Description:
- Benefits:
- Drawbacks:
- Security implications:
- Migration or compatibility impact:

### Option C: Keep current behavior

- What remains unchanged:
- Risks of doing nothing:

## 4. Decision

State the selected option in one unambiguous paragraph. Describe what changes and what explicitly does not change.

## 5. Architecture and workflow

~~~mermaid
flowchart TD
    A[Trigger or input] --> B[Selected design]
    B --> C[Expected outcome]
~~~

Replace this example with a diagram of the real decision.

## 6. Security and privacy review

- Trust boundaries:
- Identity and authorization:
- Secrets or credentials:
- Personal data:
- Abuse cases:
- Logging and retention:
- Required external configuration:

## 7. Implementation plan

| Step | Owner | Dependency | Acceptance evidence |
| --- | --- | --- | --- |
| 1 | <owner> | <dependency> | <test or artifact> |
| 2 | <owner> | <dependency> | <test or artifact> |

## 8. Consequences

List positive consequences, trade-offs, new risks, and ongoing maintenance requirements.

## 9. Verification

- Commands run:
- Unit/integration/E2E evidence:
- Firebase Rules evidence:
- Accessibility evidence:
- Manual checks:
- Known gaps:

## 10. Follow-up and review

- Follow-up issues:
- Review date:
- Conditions that would cause this decision to be revisited:
