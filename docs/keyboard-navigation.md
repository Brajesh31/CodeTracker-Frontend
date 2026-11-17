# ⌨️ Keyboard Navigation

## Expected behavior

Every interactive control in CodeTracker must be reachable and usable without a pointer.

- Tab moves focus through links, inputs, and buttons in a logical order.
- Shift+Tab moves backward through the same sequence.
- Enter activates focused links and form submission controls.
- Space activates buttons.
- Focus remains visible at all times.
- No keyboard trap is introduced by modal, popup, or menu behavior.

## Current routes to inspect

- Landing page: all CTA and external links.
- Login: email, password, and submit control.
- Signup: name, email, password, and submit control.
- Dashboard: menu control, external resource link, question links, and sign-out.

## Known issue

The dashboard includes a mobile menu button with a static aria-expanded value and no state-changing handler. It should either be implemented as an accessible disclosure control or removed until it has a real action.

## Manual test procedure

1. Reload the page and do not use the mouse.
2. Press Tab repeatedly and record the focus order.
3. Confirm each focused control has a visible indicator and accessible name.
4. Submit forms using Enter.
5. Confirm invalid input errors are discoverable and focus is not lost unexpectedly.
6. Navigate the question table and external links.
7. Sign out using keyboard only.
8. Repeat at a narrow viewport and with 200% zoom.

Record results in docs/templates/accessibility-audit-template.md.
