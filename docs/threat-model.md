# 🛡️ Threat Model

## Scope

This threat model covers the browser SPA, Firebase client calls, Firestore question reads, account flows, and GitHub/Firebase Hosting deployment. It does not claim to assess the external browser extension or Firebase project configuration that is not available in this repository.

## Assets

- User account identity and session.
- Question metadata and external question links.
- Email values stored in question documents.
- Firebase project configuration and authorization rules.
- GitHub Actions deployment credential.
- Repository source, package lockfile, workflows, and release artifacts.

## Threat actors

- Unauthenticated visitor probing app routes or public configuration.
- Authenticated user attempting to access another user's records.
- Malicious or compromised browser extension or third-party writer.
- Attacker submitting crafted Firestore documents or malicious URLs.
- Contributor accidentally committing credentials.
- Compromised dependency or GitHub Actions workflow.

## Threat scenarios and mitigations

| Threat | Impact | Required mitigation | Current status |
| --- | --- | --- | --- |
| User changes UID query in browser | Cross-account record exposure if Rules are weak | Enforce owner checks in Firestore Rules | Rules not tracked here |
| Malformed topics or time field | Dashboard rendering failure | Validate and normalize records | Current component assumes expected shape |
| Malicious external URL | Redirect or unsafe navigation | Protocol allowlist and safe link attributes | Link has noopener/noreferrer; validation absent |
| Credential committed to Git | Unauthorized service access | Secret scanning, ignore local env, rotate exposed credentials | Ignore file exists; add automated scanning |
| Workflow secret exposed to fork PR | Deployment compromise | Least privilege, trusted-context conditions, no secrets on forks | Review workflow triggers |
| Dependency compromise | Build or runtime compromise | Lockfile, dependency review, code scanning | Lockfile exists; automation needs strengthening |
| Session mishandled on shared device | Account privacy issue | Clear sign-out, correct route transitions | Sign-out exists; test behavior |

## Security assumptions

- Firebase Auth is enabled for the intended project.
- Firestore Rules are configured outside this repository.
- Hosting and Actions credentials are protected in GitHub settings.
- The extension and any document writers are external until proven otherwise.

## Abuse cases to test

- Attempt a query with a different UID.
- Attempt direct document reads without authentication.
- Attempt writes if any external writer is configured.
- Submit malformed field types.
- Use an external link with a non-HTTPS scheme.
- Trigger auth errors and verify no secrets or tokens appear in the UI or logs.
- Open a pull request from a fork and verify no deployment credentials are made available.

## Residual risk

A frontend-only repository cannot prove the security of a Firebase project whose Rules are not included or independently reviewed. Record a Firebase Rules audit with the exact deployed Rules version and test results before using real user data.
