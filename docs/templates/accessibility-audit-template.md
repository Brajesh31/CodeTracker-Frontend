# ♿ Accessibility Audit: <Release or feature>

- **Audit ID:** A11Y-XXX
- **Commit SHA:** <full SHA>
- **Auditor:** <name or role>
- **Date:** YYYY-MM-DD
- **Target:** WCAG 2.2 Level AA
- **Browser / device:** <tested environment>
- **Assistive technology:** <screen reader and version, if used>

## 1. Scope

List the routes and UI elements audited: landing, login, signup, dashboard, question table, mobile navigation, errors, and dialogs where applicable.

## 2. Methods

- Keyboard-only walkthrough.
- Screen-reader review.
- 200% zoom and reflow.
- Contrast inspection.
- Automated scan (tool and version).
- Reduced-motion and high-contrast review.

## 3. Findings

| ID | Page / component | WCAG criterion | Severity | Evidence | Remediation | Status |
| --- | --- | --- | --- | --- | --- | --- |
| A11Y-01 | <location> | <criterion> | High/Medium/Low | <link> | <action> | Open |

## 4. Checklist

- [ ] All interactive controls have accessible names.
- [ ] Every form field has a persistent label.
- [ ] Errors are associated with the relevant field.
- [ ] Focus order is logical and visible.
- [ ] Keyboard activation works.
- [ ] Menus and disclosures expose correct expanded state.
- [ ] Table headers and captions provide context.
- [ ] Loading and error messages are announced.
- [ ] Color is not the sole carrier of meaning.
- [ ] Text and controls meet contrast requirements.
- [ ] Layout remains usable at 200% zoom and narrow width.
- [ ] Reduced-motion preferences are respected.

## 5. Results and limitations

Record passed, failed, blocked, and untested scenarios. An automated scan is not proof of WCAG conformance.

## 6. Remediation sign-off

List issues closed, residual issues accepted, accountable owner, and retest commit.
