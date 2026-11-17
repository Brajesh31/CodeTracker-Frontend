# 📱 Responsive Design

## Current implementation

Tailwind responsive utility classes appear in the dashboard and landing components. The dashboard wraps the question table in an overflow-x container. A small-screen navigation section is present, but the menu button currently does not toggle its visibility.

## Layout guidance

- Keep forms within a readable maximum width.
- Allow table overflow horizontally on narrow viewports, but keep headers and row content understandable.
- Avoid fixed widths that cause page-level horizontal scrolling.
- Ensure the sign-out action remains visible and reachable.
- Ensure focus indicators are not clipped by card or overflow containers.
- Check long titles and topic lists for wrapping or truncation behavior.

## Breakpoint review matrix

| Viewport | Review focus |
| --- | --- |
| 320–375 px | Form width, navigation, table overflow, long labels |
| 376–767 px | Mobile layout and touch target spacing |
| 768–1023 px | Tablet width, navigation transitions |
| 1024–1439 px | Desktop dashboard proportions |
| 1440 px and above | Avoid overly stretched content; keep a readable max width |

## Interaction requirements

A responsive navigation control must update its expanded/collapsed state and aria-expanded value. Do not leave an inert menu icon in the UI. Verify keyboard operation and touch target size.

## Verification

Use browser device emulation and at least one real narrow-screen device when available. Test zoom, orientation changes, long email addresses, long question titles, empty datasets, and browser text scaling.
