# 🔤 Typography

## Current implementation

The reviewed JSX uses Tailwind text-size, weight, and color utilities. A formal type scale or custom font asset is not currently documented.

## Recommended hierarchy

| Semantic role | Use | Guidance |
| --- | --- | --- |
| Page title | Landing and dashboard heading | Clear, short, strongest hierarchy |
| Section heading | Sign-in, signup, question list | Describes the task or content |
| Body | Instructions and explanatory text | Comfortable reading size and line height |
| Label | Form controls and table headings | Persistent, unambiguous |
| Supporting text | Hints and metadata | Smaller but still legible |
| Status | Loading, validation, success, errors | Clear wording and appropriate emphasis |

## Rules

- Use semantic heading levels in document order.
- Do not choose heading levels only for visual size.
- Avoid long uppercase blocks and overly condensed type.
- Ensure text remains readable at 200% zoom and when users increase browser font settings.
- Do not encode meaning solely through weight, color, or italics.
- Keep line lengths reasonable for help text and documentation-like copy.

## Font selection

Prefer a system font stack unless a bundled font is necessary for product identity. Any third-party font must have its license and source reviewed and should not block first meaningful content unnecessarily.
