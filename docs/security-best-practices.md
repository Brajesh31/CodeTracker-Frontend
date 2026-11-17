# 🔒 Security Best Practices

## Frontend practices

- Treat browser JavaScript and VITE_ variables as public.
- Never ship Firebase Admin SDK credentials or service-account keys in the bundle.
- Do not treat hidden routes, disabled buttons, or query filters as authorization.
- Avoid rendering stored HTML. Render text values and validate URLs before creating anchors.
- Do not log passwords, access tokens, refresh tokens, or raw private records.
- Use safe external-link attributes when opening a new tab.
- Keep error messages useful without exposing sensitive internal details.

## Firebase practices

- Enforce user ownership in Firestore Security Rules.
- Deny access by default and explicitly allow the minimum required operations.
- Validate allowed document fields and types in Rules where appropriate.
- Test read and write permissions using Firebase Emulator Suite or a dedicated test project.
- Keep production and development projects separate.
- Review Storage Rules if a real Storage feature is added.
- Rotate credentials after suspected exposure.

## GitHub practices

- Require review for changes to workflows and security policy.
- Keep workflow permissions minimal.
- Pin or update third-party actions deliberately and review upstream changes.
- Do not run untrusted pull-request code with deployment secrets.
- Use Dependabot and dependency review for the npm package and GitHub Actions.
- Protect main and use a documented release/deployment procedure.

## Incident basics

1. Stop the affected deployment or workflow when practical.
2. Revoke or rotate the exposed credential in the provider console.
3. Identify affected commits, workflow runs, Firebase project, and records.
4. Preserve evidence without publishing secrets.
5. Patch the cause and verify the fix.
6. Notify affected parties where required.
7. Record lessons and preventive controls in an incident report.

This guide supports, but does not replace, [SECURITY.md](../SECURITY.md) or a review of the deployed Firebase configuration.
