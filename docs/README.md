# 📚 CodeTracker Documentation Hub

This directory is the technical reference for the actual CodeTracker repository. It covers the React single-page app nested in leetcode/, Firebase Authentication, the Firestore question read path, Firebase Hosting, GitHub automation, and project governance.

> **Accuracy rule:** A documented capability is not automatically implemented. Proposed work, external provider configuration, and known gaps are labelled explicitly. No backend API, relational schema, production metric, compliance result, or screenshot is invented.

## 🧭 Start here

| Goal | Recommended reading |
| --- | --- |
| Understand the product | [Product overview](product-overview.md), [features](features.md), [scope](scope-and-limitations.md) |
| Set up development | [Installation](installation.md), [development](development.md), [configuration](configuration.md) |
| Understand architecture | [Architecture](architecture.md), [system design](system-design.md), [UML diagrams](uml-diagrams.md) |
| Understand data | [Application routes and Firebase operations](api.md), [database](database.md), [data dictionary](data-dictionary.md), [data flow](data-flow.md) |
| Improve the interface | [UI/UX guidelines](ui-ux-guidelines.md), [design system](design-system.md), [page documentation](page-documentation.md) |
| Review security | [Security architecture](security-architecture.md), [threat model](threat-model.md), [security risk register](security-risk-register.md) |
| Test and deploy | [Testing strategy](testing-strategy.md), [quality gates](quality-gates.md), [CI/CD](ci-cd.md), [deployment](deployment.md) |
| Operate and maintain | [Operations](operations.md), [incident response](incident-response.md), [maintenance](maintenance.md) |
| Create project artifacts | [Templates](templates/README.md), [decision log](decision-log.md) |

## 🗂️ Full documentation catalogue

### 📦 Product and requirements
- [Product overview](product-overview.md)
- [Project background](project-background.md)
- [Project objectives](project-objectives.md)
- [Problem statement](problem-statement.md)
- [Solution overview](solution-overview.md)
- [Feature inventory](features.md)
- [Functional requirements](functional-requirements.md)
- [Non-functional requirements](non-functional-requirements.md)
- [User personas](user-personas.md)
- [User journeys](user-journeys.md)
- [Use cases](use-cases.md)
- [Scope and limitations](scope-and-limitations.md)
- [Glossary](glossary.md)
- [FAQ](faq.md)
- [Roadmap](../ROADMAP.md)
- [Project status](project-status.md)

### 🏗️ Architecture and technical design
- [Architecture](architecture.md)
- [System design](system-design.md)
- [Application lifecycle](application-lifecycle.md)
- [Component architecture](component-architecture.md)
- [Module documentation](module-documentation.md)
- [Technology stack](technology-stack.md)
- [Project structure](project-structure.md)
- [UML and engineering diagrams](uml-diagrams.md)
- [Navigation structure](navigation-structure.md)
- [Page documentation](page-documentation.md)
- [Configuration](configuration.md)
- [Environment variables](environment-variables.md)
- [Integrations](integrations.md)
- [External dependencies](external-dependencies.md)
- [Error handling](error-handling.md)
- [Performance](performance.md)
- [Compatibility](compatibility.md)
- [Decision log](decision-log.md)
- [Technical debt](technical-debt.md)

### 🗃️ Data and privacy
- [Application routes and data API](api.md)
- [Database and Firebase](database.md)
- [Data dictionary](data-dictionary.md)
- [Data flow](data-flow.md)
- [Data validation](data-validation.md)
- [Privacy](privacy.md)
- [Data retention](data-retention.md)
- [Backup and restore](backup-and-restore.md)

### 🎨 UI/UX and accessibility
- [UI/UX guidelines](ui-ux-guidelines.md)
- [Design system](design-system.md)
- [Color system](color-system.md)
- [Typography](typography.md)
- [Responsive design](responsive-design.md)
- [Animation guidelines](animation-guidelines.md)
- [Accessibility](accessibility.md)
- [Keyboard navigation](keyboard-navigation.md)
- [Accessibility testing](accessibility-testing.md)

### 🔐 Security
- [Security architecture](security-architecture.md)
- [Threat model](threat-model.md)
- [Security best practices](security-best-practices.md)
- [Security risk register](security-risk-register.md)
- [Incident response](incident-response.md)
- [Security policy](../SECURITY.md)

### 🧪 Testing and quality
- [Testing strategy](testing-strategy.md)
- [QA guide](qa.md)
- [Test plan](test-plan.md)
- [Quality gates](quality-gates.md)
- [Known issues](known-issues.md)
- [Troubleshooting](troubleshooting.md)

### 🚀 Delivery and operations
- [Installation](installation.md)
- [Getting started and development](development.md)
- [Deployment](deployment.md)
- [CI/CD](ci-cd.md)
- [GitHub Actions](github-actions.md)
- [Release management](release-management.md)
- [Versioning](versioning.md)
- [Rollback](rollback.md)
- [Monitoring](monitoring.md)
- [Operations](operations.md)
- [Maintenance](maintenance.md)

### 🧰 Reusable templates
See the [template index](templates/README.md) for architecture decisions, feature specs, API and data schema changes, testing, threat assessments, security and accessibility audits, incident reports, releases, deployment, rollback, migrations, risk reviews, change requests, code reviews, status reports, meeting notes, and maintenance.

## 🖼️ Visual assets

Original, repository-specific SVGs are stored in assets/:
- [Logo](assets/logo.svg)
- [Project banner](assets/project-banner.svg)
- [Architecture overview](assets/architecture-overview.svg)
- [User workflow](assets/workflow-diagram.svg)
- [Data flow](assets/data-flow.svg)
- [Deployment flow](assets/deployment-flow.svg)
- [Security architecture](assets/security-architecture.svg)

The screenshots directory is reserved for genuine UI captures. Do not add mockups or generated screenshots as evidence of an implemented application screen.

## 🧱 Project boundaries

The checked-in app is a frontend-only React/Vite application. It has Firebase Authentication and a Firestore read query for existing question records. It does not include a server API, relational database, Firestore Security Rules, Firebase Emulator configuration, or source code for the external Edge extension.

- Browser route documentation describes routes, not fictitious REST endpoints.
- The data dictionary is inferred from the current component's field access.
- The UID query is not an authorization boundary.
- Security guides require real Firebase Rules review and testing.
- Accessibility and performance guides state targets, not audited results.
- Deployment guides describe workflow configuration and require actual run evidence before a successful deployment can be claimed.

## 🔄 Documentation maintenance

Update source, docs, diagrams, templates, and tests together when behavior changes. Run the root-level validators:

~~~sh
python scripts/validate-docs.py
python scripts/validate-links.py
python scripts/check-project-structure.py
~~~

Last reviewed: 2026-11-18
