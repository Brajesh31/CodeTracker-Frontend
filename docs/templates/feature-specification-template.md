# ✨ Feature Specification: <Feature name>

- **Status:** Proposed / Accepted / In progress / Shipped
- **Product owner:** <owner>
- **Engineering owner:** <owner>
- **Target milestone:** <milestone or Unscheduled>
- **Related issue:** <link>

## 1. Summary

Explain the feature in plain language and identify the user task it enables.

## 2. Problem and evidence

Describe the problem, affected persona, user feedback or evidence, and why existing CodeTracker behavior is insufficient.

## 3. Goals and non-goals

**Goals**
- <specific, testable goal>

**Non-goals**
- <explicit exclusions>

## 4. User stories

- As a <persona>, I want <capability>, so that <outcome>.

## 5. User journey

~~~mermaid
flowchart TD
    A[User starts task] --> B[Feature interaction]
    B --> C[Success or recoverable error]
~~~

Replace with the full journey, including cancellation and failure paths.

## 6. Functional requirements

| ID | Requirement | Priority | Acceptance criteria |
| --- | --- | --- | --- |
| FEAT-001 | <requirement> | Must / Should / Could | <observable result> |

## 7. UX and accessibility

Define routes, copy, forms, focus, keyboard use, screen-reader announcements, loading/empty/error states, responsive behavior, color contrast, and reduced motion.

## 8. Data and architecture

List changed components, Firebase calls, fields, ownership, external dependencies, Security Rules, migrations, and diagrams. State explicitly when no backend/API/database change is needed.

## 9. Security and privacy

Threats, abuse cases, data minimization, retention, consent or notice, safe links, logging, and secrets handling.

## 10. Testing and rollout

Unit, component, integration, Rules, E2E, manual accessibility, deployment checks, feature flags if any, rollback, and monitoring.

## 11. Open questions and risks

| Question or risk | Owner | Resolution or mitigation | Due date |
| --- | --- | --- | --- |

## 12. Definition of done

- [ ] Acceptance criteria pass.
- [ ] Relevant tests pass and evidence is attached.
- [ ] Security and accessibility reviews are complete.
- [ ] Documentation and diagrams are updated.
- [ ] No secrets or production data are committed.
- [ ] Known limitations and release notes are recorded.
