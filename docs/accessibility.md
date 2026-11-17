# ♿ Accessibility

## Accessibility target

Use WCAG 2.2 Level AA as the engineering target for applicable user interface content. The repository has not undergone a documented conformance audit, so no compliance claim is made.

## Current implementation improvements

- Login and signup now use semantic forms, persistent labels, required controls, and inline error text announced with role=alert.
- App exposes an initial auth-loading status.
- The dashboard mobile menu now toggles its visibility and updates aria-expanded and its accessible name.
- The question table has a screen-reader caption and scoped column headers.
- Loading and empty states use status semantics; query failures use alert semantics.
- Question records use fallbacks for missing values, and only validated HTTP(S) URLs become clickable anchors.
- Visible focus styles were added to the primary auth actions, navigation links, and question links.

## Remaining review work

- Complete a keyboard-only walkthrough on all routes.
- Review the app with a screen reader.
- Measure actual color contrast, including text on the blue/indigo gradient.
- Test reflow and content at 200% zoom and on narrow viewports.
- Review focus order and touch target sizing on mobile.
- Run automated axe or equivalent scans and manually inspect findings.
- Record actual results in docs/templates/accessibility-audit-template.md.

## Required practices

1. Use semantic HTML for landmarks, headings, forms, buttons, links, and tables.
2. Associate every form control with a persistent label.
3. Keep all actions operable by keyboard.
4. Use visible focus indicators and logical focus order.
5. Ensure text and UI component contrast meet WCAG 2.2 AA thresholds.
6. Do not use color as the only indication of difficulty or error state.
7. Provide accessible names for icon-only controls.
8. Announce asynchronous loading and failure states with suitable live-region semantics.
9. Preserve content under 200% zoom and narrow viewports.
10. Respect reduced-motion preferences for non-essential animation.

## Evidence policy

Record tested commit, browser, assistive technology, pages, issues found, and remediation status. An automated scan alone does not prove WCAG conformance.
