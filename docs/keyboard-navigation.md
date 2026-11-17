# ⌨️ Keyboard Navigation

## Expected behavior

Every interactive control in CodeTracker must be reachable and usable without a pointer.

- Tab moves focus through links, inputs, and buttons in a logical order.
- Shift+Tab moves backward through the same sequence.
- Enter activates links and form submission controls.
- Space activates buttons.
- Focus remains visible at all times.
- No keyboard trap is introduced by a menu or dialog.

## Current routes to inspect

- Landing page: download extension and sign-in links.
- Login: email, password, and submit control.
- Signup: name, email, password, and submit control.
- Dashboard: mobile menu disclosure, external resource link, question links, and sign-out.

## Implemented navigation behavior

The dashboard mobile menu uses a controlled React state. Its button updates aria-expanded and its accessible label when opened or closed. The navigation list is hidden when the disclosure is closed.

## Manual test procedure

1. Reload the page and do not use the mouse.
2. Press Tab repeatedly and record the focus order.
3. Confirm each focused control has a visible indicator and accessible name.
4. Submit forms using Enter.
5. Confirm invalid input errors are discoverable and focus is not lost unexpectedly.
6. At a narrow viewport, open and close the mobile menu with Enter or Space.
7. Navigate the question table and external links.
8. Sign out using keyboard only.
9. Repeat at 200% zoom.

Record results in docs/templates/accessibility-audit-template.md. The presence of keyboard-friendly markup is not a completed accessibility audit.
