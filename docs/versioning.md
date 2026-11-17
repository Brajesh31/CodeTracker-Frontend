# 🔢 Versioning Policy

## Current repository state

The frontend package declares version 0.0.0 and does not have a formal published release process documented. This is an early-stage repository state, not a semantic release promise.

## Proposed version policy

Adopt Semantic Versioning if the project begins distributing tagged releases:
- MAJOR: breaking changes to supported routes, account behavior, data format, or public integration contract.
- MINOR: backward-compatible product features.
- PATCH: fixes and documentation changes that do not break compatibility.

## Package version changes

Update leetcode/package.json and package-lock.json together. Use npm commands from leetcode/ and commit both files. Do not edit the lockfile by hand for dependency changes.

## Data-contract versioning

If the Firestore question shape changes, version the schema or make the change backward-compatible. Document the writer, migration steps, old/new readers, Security Rules, and rollback plan. The current app does not have a schema migration framework.

## Tags and release notes

Tag only reviewed commits that have passed the configured release gates. Release notes should identify migration requirements, known issues, and the commit being deployed.
