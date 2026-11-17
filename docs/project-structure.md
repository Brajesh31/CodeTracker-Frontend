# 🗂️ Project Structure

This tree documents the verified application and repository boundaries visible during the 2026-11-18 review. It is a focused tree of key paths, not a claim that every file is reproduced here.

~~~text
CodeTracker-Frontend/
├── .github/
│   ├── ISSUE_TEMPLATE/              # Bug, feature, docs, accessibility, performance
│   ├── DISCUSSION_TEMPLATE/         # Ideas, questions, announcements
│   ├── workflows/
│   │   ├── ci.yml
│   │   ├── docs-validation.yml
│   │   ├── dependency-review.yml
│   │   ├── codeql.yml
│   │   ├── secret-scan.yml
│   │   ├── firebase-hosting-merge.yml
│   │   ├── firebase-hosting-pull-request.yml
│   │   └── update-readme.yml
│   ├── dependabot.yml
│   └── PULL_REQUEST_TEMPLATE.md
├── docs/
│   ├── assets/
│   │   ├── screenshots/
│   │   │   └── README.md
│   │   ├── logo.svg
│   │   ├── project-banner.svg
│   │   ├── architecture-overview.svg
│   │   ├── workflow-diagram.svg
│   │   ├── data-flow.svg
│   │   ├── deployment-flow.svg
│   │   └── security-architecture.svg
│   ├── templates/                    # Reusable engineering and governance templates
│   ├── architecture.md
│   ├── api.md
│   ├── database.md
│   ├── deployment.md
│   ├── project-structure.md
│   └── ...                           # Product, security, QA, UX, and operations guides
├── leetcode/
│   ├── public/                       # Static public assets
│   ├── src/
│   │   ├── Auth/                     # Signup and login screens
│   │   ├── components/               # Landing, dashboard, and question list
│   │   ├── config/                   # Firebase client initialization
│   │   ├── App.jsx                   # Auth observer and route declarations
│   │   ├── main.jsx                  # React and BrowserRouter entry point
│   │   └── index.css                 # Global styles
│   ├── firebase.json                 # Firebase Hosting public path and SPA rewrite
│   ├── package.json                  # App scripts and dependencies
│   ├── package-lock.json             # npm dependency lockfile
│   ├── index.html                    # Vite HTML entry
│   └── vite.config.js                # Vite configuration
├── scripts/                          # Documentation and repository validators
├── .env.example                      # Blank public Firebase client configuration template
├── .nvmrc
├── .markdownlint.json
├── .gitignore
├── .editorconfig
├── .gitattributes
├── AUTHORS.md
├── CODE_OF_CONDUCT.md
├── CONTRIBUTING.md
├── LICENSE
├── README.md
├── ROADMAP.md
├── SECURITY.md
└── SUPPORT.md
~~~

## Directory responsibilities

| Path | Responsibility | Notes |
| --- | --- | --- |
| .github/workflows/ | CI, docs validation, security analysis, dependency review, Hosting deployments | Least privilege and safe triggers required |
| .github/ISSUE_TEMPLATE/ | Structured bug and change intake | Security issues use private disclosure |
| .github/DISCUSSION_TEMPLATE/ | Structured non-sensitive discussions | Do not post secrets or user records |
| docs/ | Product, engineering, UX, security, quality, and operations documentation | Keep cross-links synchronized |
| docs/assets/ | Original SVG diagrams and verified product imagery | Screenshots are not fabricated |
| docs/templates/ | Repeatable review and planning artifacts | Templates are not evidence of completed audits |
| leetcode/src/Auth/ | Email/password account screens | Firebase Authentication client |
| leetcode/src/components/ | Landing, dashboard, and read-only question table | Firestore question read in AllQuestions |
| leetcode/src/config/ | Firebase client SDK initialization | VITE_ settings are public |
| leetcode/public/ | Static assets copied by Vite | Use Vite public asset path conventions |
| scripts/ | Actual repository validation scripts | Must fail with non-zero exit when checks fail |

## Important entry points

- Browser HTML entry: leetcode/index.html.
- JavaScript bootstrap: leetcode/src/main.jsx.
- Root React component and route tree: leetcode/src/App.jsx.
- Firebase client boundary: leetcode/src/config/firebase.jsx.
- Frontend package scripts: leetcode/package.json.
- Hosting configuration: leetcode/firebase.json.

## Build output

Vite emits a production bundle to leetcode/dist/. This is generated output and should remain ignored by Git. Firebase Hosting uses dist relative to leetcode/firebase.json.

## Accuracy policy

When files move or new modules are introduced, regenerate the tree from the checked-out repository and update this page. Never list a directory simply because it appears in a proposed architecture.
