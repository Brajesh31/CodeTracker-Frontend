# 🎨 Color System

## Current visual observations

The reviewed JSX uses Tailwind utility classes with a blue-to-indigo gradient for primary navigation and buttons, white surfaces, and neutral gray text and borders. A separately versioned token system is not currently present.

## Proposed semantic color roles

| Role | Proposed token | Existing visual direction | Use |
| --- | --- | --- | --- |
| Primary brand | brand-primary | Blue | Main action and identity |
| Secondary brand | brand-secondary | Indigo | Gradient and secondary action |
| Main surface | surface-default | White | Cards and tables |
| Muted surface | surface-muted | Light neutral | Hover and secondary regions |
| Primary text | text-primary | Dark neutral | Headings and body |
| Secondary text | text-secondary | Mid neutral | Hints and metadata |
| Border | border-subtle | Light neutral | Separators and inputs |
| Focus | focus-visible | High-contrast blue/indigo | Keyboard focus |
| Error | status-error | Dark red with sufficient contrast | Validation and failure |
| Success | status-success | Dark green with sufficient contrast | Confirmed action |

## Contrast requirements

Use WCAG 2.2 AA contrast targets for applicable text and non-text UI:
- Normal text: at least 4.5:1.
- Large text: at least 3:1.
- Meaningful UI boundaries and focus indicators: evaluate at least 3:1 against adjacent colors where the criterion applies.

A gradient must be checked at its weakest contrast point, not only at the start or end.

## Implementation guidance

- Prefer semantic tokens over arbitrary one-off color values once repeated use justifies them.
- Do not use color alone to indicate question difficulty, success, or errors.
- Preserve visible focus in all themes and on gradient surfaces.
- Test light/dark or high-contrast adaptations before claiming support.
- Document token values and actual implementation together; this file currently defines design intent only.
