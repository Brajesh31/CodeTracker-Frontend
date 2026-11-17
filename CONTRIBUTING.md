# Contributing to CodeTracker

CodeTracker is a React 18 + Vite frontend that uses Firebase Authentication and Cloud
Firestore from the browser. Contributions should reflect the architecture that exists
and should not imply server-side capabilities that are not implemented.

## Before starting

1. Read [README.md](README.md), [docs/architecture/README.md](docs/architecture/README.md),
   and the relevant implementation notes.
2. Search existing issues and pull requests before starting duplicate work.
3. For substantial behavior changes, open an issue describing the user problem and proposal.
4. Never include production credentials, Firebase exports, personal user records,
   access tokens, or private keys in a contribution.

## Development setup

The package is inside `leetcode/`, not at the repository root.

```bash
cd leetcode
npm ci
cp ../.env.example .env.local
# Configure a dedicated development Firebase project.
npm run dev
```

Use synthetic data and a non-production Firebase project. Configure restrictive Firestore
Security Rules separately; no rules file is currently tracked.

## Change expectations

- Preserve existing behavior unless a change intentionally updates it.
- Keep React components focused and avoid duplicating Firebase initialization.
- Validate Firestore fields before rendering or using array/date methods.
- Treat browser-provided values and Firestore content as untrusted.
- Never treat a UID filter or hidden route as authorization. Security Rules enforce access.
- Keep VITE_ settings limited to public Firebase web-app configuration.
- Add loading, empty, error, and invalid-data states for asynchronous UI.
- Maintain keyboard usability, semantic HTML, labels, and visible focus.
- Update documentation and diagrams when routes, data shape, or behavior changes.

## Checks

From `leetcode/`:

```bash
npm run lint
npm run build
```

Repository checks:

```bash
python3 scripts/check_repository.py
```

Report the checks you actually ran. Do not claim a workflow, test suite, or accessibility
audit passed unless it was executed.

## Pull request checklist

- [ ] The problem and proposed change are explained.
- [ ] Changes preserve unrelated source files.
- [ ] Local lint/build results are reported accurately.
- [ ] UI changes include genuine screenshots where practical.
- [ ] Firebase rules, indexes, or console changes are documented where needed.
- [ ] Documentation and diagrams match the resulting code.
- [ ] No secrets, production data, or generated build output are committed.
- [ ] Known limitations and follow-up work are recorded.
