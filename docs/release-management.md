# 🚀 Release Management

## Current status

The repository has no formal versioned release schedule or tagged release history documented. The app may be deployed to Firebase Hosting through GitHub Actions, but deployment success must be confirmed from the actual workflow run and Hosting release.

## Release flow

1. Select the reviewed commit on main.
2. Confirm PR checks and documentation updates.
3. Run npm ci, npm run lint, and npm run build from leetcode/.
4. Confirm the intended Firebase project and Hosting target.
5. Verify deployment credentials and workflow permissions.
6. Deploy.
7. Run a production smoke test with a safe test account.
8. Record the deployed commit, workflow run, and any known limitations.
9. Update CHANGELOG.md with factual changes.

## Semantic versioning

When formal releases are introduced, use MAJOR.MINOR.PATCH:
- MAJOR for incompatible user-facing behavior or data-contract changes.
- MINOR for backward-compatible features.
- PATCH for backward-compatible fixes.

Do not tag a version merely to create an activity metric. A release should correspond to a reviewed, deployable state.

## Rollback

Firebase Hosting release rollback is separate from reverting Git history. Follow [rollback](rollback.md) and verify the restored build and Firebase project configuration.

## Release checklist

Use docs/templates/release-checklist.md. Record blockers rather than bypassing a gate.
