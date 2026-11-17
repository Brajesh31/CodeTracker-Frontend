# 🚑 Incident Response

## Objectives

Contain security and availability incidents, protect user data, restore a known-good service, and preserve enough evidence to prevent recurrence.

## Severity model

- **SEV-1:** Confirmed cross-user data exposure, leaked deployment credential, or major production outage.
- **SEV-2:** Core authentication or dashboard unavailable for a significant part of users.
- **SEV-3:** Partial degradation, isolated data rendering failure, or non-critical feature regression.
- **SEV-4:** Cosmetic issue or documentation defect without user data impact.

## Response steps

~~~mermaid
flowchart TD
    A[Detect and report] --> B[Classify severity]
    B --> C[Contain affected workflow or service]
    C --> D[Preserve sanitized evidence]
    D --> E[Investigate root cause]
    E --> F[Implement and review fix]
    F --> G[Restore service]
    G --> H[Verify auth, data access, and routes]
    H --> I[Post-incident review]
~~~

## Credential incident

1. Identify credential type and exposure window.
2. Revoke or rotate it in the owning provider.
3. Disable affected workflow or deployment access if necessary.
4. Search Git history and workflow logs for further exposure.
5. Replace with protected secrets and verify least privilege.
6. Re-run secret scanning.
7. Document the incident without reproducing the secret.

## Data-access incident

1. Notify the Firebase project owner.
2. Review deployed Firestore Rules and access logs where available.
3. Restrict access without making broad unreviewed changes.
4. Identify affected collection and time range.
5. Preserve sanitized evidence.
6. Test the corrected Rules with separate synthetic users.
7. Follow applicable notification and legal obligations.

## Review and record

Use docs/templates/incident-report-template.md. Record facts, timeline, impact, root cause, remediation, and prevention actions. Do not speculate about affected users or data.
