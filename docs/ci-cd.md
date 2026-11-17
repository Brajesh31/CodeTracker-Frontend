# 🔁 CI/CD

## Application build location

The React package is located in leetcode/. The workflow must install and run commands from this directory because it contains package.json and package-lock.json.

## Expected pipeline

~~~mermaid
flowchart TD
    A[Push to main or pull request] --> B[Checkout repository]
    B --> C[Set up Node.js]
    C --> D[Run npm ci in leetcode/]
    D --> E[Run npm run lint]
    E --> F[Run npm run build]
    F --> G{Target is main push?}
    G -->|No| H[Report CI result]
    G -->|Yes| I[Deploy to Firebase Hosting]
    I --> J[Verify production route and auth flow]
~~~

## Pull request behavior

- Run static checks and production build.
- Do not expose Firebase deployment secrets to forked or untrusted pull requests.
- Preview Hosting deployments should be gated separately and run only in trusted contexts.
- Dependency-review and CodeQL checks may run in separate workflows.

## Main branch behavior

- Install from the committed lockfile.
- Lint and build before deployment.
- Use the Firebase configuration under leetcode/.
- Use the deployment secret stored in GitHub settings.
- Publish only after validation succeeds.

## Permissions

Set permissions at workflow and job level, not broadly at repository level. CI should normally need contents: read. A Hosting action may require narrowly scoped checks or pull-request write permissions to publish deployment status. Review action documentation before granting more.

## Failure handling

Fail fast if install, lint, or build fails. Do not use continue-on-error to hide quality failures. Keep deployment out of the job when validation does not succeed.

## Current limitations

No app test framework or emulator tests are currently configured. The CI pipeline can validate lint/build and documentation, but it cannot yet prove Firebase Rules correctness or end-to-end user journeys.
