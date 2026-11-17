# ♿ Accessibility

## Accessibility target

Use WCAG 2.2 Level AA as the engineering target for applicable user interface content. The repository has not undergone a documented conformance audit, so no compliance claim is made.

## Current review areas

- Login and signup forms use input controls with IDs, but visible labels and accessible error associations need improvement.
- The dashboard contains a data table; retain semantic table markup and meaningful headers.
- The mobile navigation button currently has aria-controls and a static aria-expanded value, but does not toggle the menu.
- Buttons and links need visible keyboard focus.
- Loading and error messages should be announced without relying on color alone.
- The current table has no explicit empty-state message.

## Required practices

1. Use semantic HTML for landmarks, headings, forms, buttons, links, and tables.
2. Associate every form control with a persistent label.
3. Keep all actions operable by keyboard.
4. Use visible focus indicators and logical focus order.
5. Ensure text and UI component contrast meet WCAG 2.2 AA thresholds.
6. Do not use color as the only indication of difficulty or error state.
7. Provide accessible names for icon-only controls.
8. Announce asynchronous loading and failure states using suitable live-region semantics.
9. Preserve content under 200% zoom and narrow viewports.
10. Respect reduced-motion preferences for non-essential animation.

## Verification

- Keyboard-only pass through landing, login, signup, and dashboard.
- Screen-reader review of forms and the question table.
- Contrast review for blue/indigo gradients and text.
- Zoom and reflow review.
- Automated axe or equivalent scan, followed by manual inspection.

## Evidence policy

Record the tested commit, browser, assistive technology, pages, issues found, and remediation status in an accessibility audit template. An automated scan alone does not prove WCAG conformance.
