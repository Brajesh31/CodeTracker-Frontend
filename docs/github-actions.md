# 🐙 GitHub Actions Guide

## Workflow responsibilities

| Workflow | Trigger | Responsibility |
| --- | --- | --- |
| CI | Pull request and push to main | npm install, lint, production build |
| Firebase Hosting PR | Pull request | Validate build; optionally create preview only for trusted internal PRs |
| Firebase Hosting merge | Push to main | Build and deploy the static SPA |
| Documentation validation | Pull request and push to main | Check required docs, local links, and project conventions |
| CodeQL | Push, pull request, scheduled scan | Static code security analysis |
| Dependency review | Pull request | Review new and changed dependencies |
| Secret scanning | Pull request and push | Detect accidental credential patterns |

## Nested package requirements

- Use Node setup cache with leetcode/package-lock.json.
- Set working-directory: leetcode for npm ci, npm run lint, and npm run build.
- Point the Firebase Hosting action at the nested leetcode configuration.
- Do not run npm at the repository root; no root package manifest is present.

## Secrets and fork safety

The Firebase service-account secret must not be available to pull requests from forks or automated bot contexts without explicit approval. The PR workflow should still run CI without secrets. Production deployment should occur only on the protected main branch and after build success.

## Action maintenance

- Prefer official actions and reviewed major versions.
- Pin actions to full commit SHAs where the maintainers' update process supports it.
- Use Dependabot for GitHub Actions version updates.
- Set a concurrency group to avoid racing deployments.
- Use explicit permissions and avoid write access for test-only jobs.
- Review action release notes before updating.

## Operational evidence

For each deployment, retain the commit SHA, workflow run, target project, Hosting release, and verification result. Do not publish credential values in logs or artifacts.
