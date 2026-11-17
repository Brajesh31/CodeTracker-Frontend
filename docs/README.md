# 📚 CodeTracker Documentation Hub

Welcome to the technical and product documentation for **CodeTracker**. This folder describes the implementation that is actually present in this repository: a React single-page frontend built with Vite, Firebase Authentication, and a browser-side Cloud Firestore read path.

> **Documentation rule:** A documented capability is not automatically an implemented capability. Where a behavior is proposed, externally configured, or absent from the repository, the document labels it accordingly.

## 🧭 Start here

| Need | Read |
| --- | --- |
| Understand the product and its boundaries | [Product overview](product-overview.md), [project objectives](project-objectives.md), [scope and limitations](scope-and-limitations.md) |
| Understand the current frontend architecture | [Architecture](architecture.md), [system design](system-design.md), [application lifecycle](application-lifecycle.md) |
| Install and run locally | [Installation](installation.md), [development](development.md), [configuration](configuration.md) |
| Understand Firebase and records | [Application API](api.md), [database](database.md), [data dictionary](data-dictionary.md), [data flow](data-flow.md) |
| Review security and privacy boundaries | [Security architecture](security-architecture.md), [threat model](threat-model.md), [privacy](privacy.md) |
| Improve UI quality | [UI/UX guidelines](ui-ux-guidelines.md), [accessibility](accessibility.md), [responsive design](responsive-design.md) |
| Test, build, and deploy | [Testing strategy](testing-strategy.md), [CI/CD](ci-cd.md), [deployment](deployment.md) |
| Diagnose a problem | [Troubleshooting](troubleshooting.md), [FAQ](faq.md), [known issues](known-issues.md) |
| Propose or review a change | [Contributing](../CONTRIBUTING.md), [templates](templates/README.md), [decision log](decision-log.md) |

## 🗂️ Documentation map

- Product and requirements: product overview, background, objectives, problem statement, solution overview, feature inventory, requirements, personas, journeys, use cases, scope, glossary.
- Engineering: architecture, system design, lifecycle, component architecture, module boundaries, dependencies, technology stack, configuration, coding standards, error handling, performance, compatibility.
- Data and integration: application routes, Firebase operations, current Firestore document shape, data dictionary, data validation, external services, and data-flow boundaries.
- Quality: test strategy, QA, test plan, manual test cases, defect reporting, accessibility, security, and documentation validation.
- Operations: local setup, CI, Firebase Hosting, release checks, rollback guidance, monitoring boundaries, maintenance, known issues, and risk registers.
- Reusable artifacts: architecture decisions, feature specifications, QA cases, threat assessments, audit reports, incident reports, deployment plans, and release checklists in templates/.

## 🧱 Applicability and truthfulness

The project is currently a frontend-only repository with direct Firebase client SDK access. It does not contain a server API, a relational database, Firestore Security Rules, Firebase Emulator configuration, server-side authorization code, or the source of the separately published browser extension. Therefore:

- API documentation describes browser routes and Firebase SDK operations, not fictitious REST endpoints.
- Data documentation describes the observed Firestore questions collection and labels the shape as source-derived, not a formally enforced schema.
- Security documents distinguish frontend safeguards from provider-enforced Firestore rules.
- Deployment documentation distinguishes configured Firebase Hosting from a deployment that has actually been verified.
- Accessibility and performance guides define review targets; they do not claim conformance or benchmark results.

## 🔄 Maintenance

Update the relevant document in the same change that updates routes, Firebase calls, environment variables, data fields, workflow behavior, or deployment configuration. Verify internal links with scripts/validate-links.py and review Mermaid diagrams after architecture changes.

Last reviewed: 2026-11-18
