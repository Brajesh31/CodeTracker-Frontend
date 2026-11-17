# 🧩 Design System

## Current styling foundation

The frontend uses Tailwind CSS and utility classes in JSX. There is no separately versioned design-token package or component library in the reviewed source. The dashboard and auth pages use blue-to-indigo gradients, white surfaces, rounded corners, and neutral text.

## Proposed semantic tokens

The following names are a documentation convention. They are not currently defined as CSS custom properties in the application.

| Token | Intended use | Current visual reference |
| --- | --- | --- |
| brand-primary | Primary actions and focusable brand elements | Blue |
| brand-secondary | Gradient or secondary emphasis | Indigo |
| surface | Main card and table surface | White |
| surface-muted | Hover and subdued background | Light neutral gray |
| text-primary | Main content | Dark gray |
| text-secondary | Supporting labels | Mid gray |
| border-subtle | Separators and form boundaries | Light gray |
| focus-ring | Visible keyboard focus | High-contrast blue/indigo ring |
| status-error | Form and query errors | Accessible error treatment |
| status-success | Confirmed actions | Accessible success treatment |

## Component patterns

- Buttons: semantic button elements, visible focus, clear action label, disabled state when a request is pending.
- Links: real href destinations, distinguishable from body text, safe external-link attributes.
- Inputs: label, type, autocomplete, validation, and associated error description.
- Cards: consistent padding, border/radius, and heading hierarchy.
- Tables: caption or accessible context, column headers, responsive overflow, empty state.

## Typography and spacing

Retain readable body sizing, predictable heading levels, and Tailwind spacing consistency. Avoid using font size or color alone to communicate status.

## Theme and branding

The current interface leans blue and indigo. Any rebrand should update the landing, auth, and dashboard components together, preserve contrast, and avoid claiming a design system has been implemented until tokens and shared primitives exist.

## Adoption plan

1. Audit current class usage.
2. Agree the small token set needed by real screens.
3. Add CSS variables or Tailwind theme extensions only when multiple components use the same semantic value.
4. Create shared components for repeated patterns.
5. Test color contrast and focus styles.
6. Capture screenshots from the actual application for documentation.
