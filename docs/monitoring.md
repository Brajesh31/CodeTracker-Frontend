# 📡 Monitoring and Observability

## Current state

The reviewed frontend has limited console logging for errors. No telemetry SDK, centralized frontend error reporting, uptime probe, performance dashboard, or Firebase monitoring configuration is included in this repository.

## Useful signals to establish

- Frontend unhandled exception rate.
- Auth sign-in and sign-up failures by safe error category.
- Firestore dashboard query failures and latency.
- Hosting availability and deployment status.
- Build and workflow failure rate.
- Bundle size and web performance metrics.

## Privacy and safety

- Do not log passwords, ID tokens, refresh tokens, raw question documents, or unnecessary email values.
- Avoid sending user identifiers to third-party analytics unless there is a clear purpose and proper notice.
- Use sampling and retention limits appropriate to the purpose.
- Restrict access to production logs.

## Operational dashboards

If monitoring is introduced, document metric definitions, collection method, alert thresholds, owner, runbook, and data retention. Alert thresholds should be based on observed baseline behavior, not arbitrary numbers.

## Incident response

Route operational incidents through [operations](operations.md) and [incident response](incident-response.md). Keep a sanitized record of timestamps, affected services, and mitigation.
