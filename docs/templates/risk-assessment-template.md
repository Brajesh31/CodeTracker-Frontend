# 📊 Risk Assessment: <Risk area>

- **Risk ID:** RISK-XXX
- **Owner:** <owner>
- **Assessment date:** YYYY-MM-DD
- **Review date:** YYYY-MM-DD
- **Related issue/ADR:** <links>

## 1. Risk statement

Because <cause>, <event> may occur, resulting in <impact>.

## 2. Context and evidence

Describe the affected CodeTracker route, Firebase service, workflow, data field, or external dependency. Identify known facts and assumptions separately.

## 3. Rating

| Dimension | Rating | Rationale |
| --- | --- | --- |
| Likelihood | Low / Medium / High | <evidence> |
| Impact | Low / Medium / High / Critical | <evidence> |
| Detectability | Easy / Moderate / Difficult | <evidence> |
| Overall | <rating> | <method> |

## 4. Existing controls

List source-level controls, Firebase Rules, GitHub settings, CI checks, and operational procedures. Distinguish implemented and externally configured controls.

## 5. Treatment options

- Avoid:
- Reduce:
- Transfer:
- Accept:

## 6. Mitigation plan

| Action | Owner | Due date | Evidence of completion |
| --- | --- | --- | --- |

## 7. Residual risk

Describe what remains after mitigation and who is accountable for accepting it.

## 8. Review trigger

Reassess after an incident, dependency upgrade, new integration, data-model change, or change in Firebase project configuration.
