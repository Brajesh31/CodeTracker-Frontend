# 🌐 External Dependencies

## Runtime dependencies

The application depends on services configured outside the Git repository:

| Service | Required for | Failure effect | Owner / control |
| --- | --- | --- | --- |
| Firebase Authentication | Login, signup, session state | Users cannot establish or refresh app identity | Firebase project administrator |
| Cloud Firestore | Dashboard question reads | Dashboard data cannot load | Firebase project administrator |
| Firebase Hosting | Production static delivery | Site unavailable or serves stale build | Firebase Hosting administrator |
| npm registry | Installing locked packages | CI/local install may fail | npm registry operators |
| GitHub Actions | CI and deployment automation | Checks or deployment unavailable | Repository settings and GitHub |

## External links

The landing/dashboard source also references independently hosted resources and a separately distributed browser extension. Those services are not vendored in this repository and may change independently.

## Dependency review policy

- Keep direct and transitive dependencies in package-lock.json.
- Review Dependabot changes for major-version migration notes.
- Run npm ci, lint, and build before accepting dependency changes.
- Review package license metadata and known vulnerabilities.
- Investigate packages that execute install scripts or add native binaries.
- Avoid adding a new runtime service where a simpler existing capability is sufficient.

## Outage response

If Firebase is unavailable, do not weaken Firestore Rules or hard-code fallback credentials. Record the time, affected service, visible behavior, and any provider status reference. Restore normal behavior after provider recovery and verify the app against a development account.
