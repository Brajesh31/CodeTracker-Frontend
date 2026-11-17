# ♿ Accessibility Testing

## Test coverage

Accessibility testing should combine automated tools with manual checks. Automated checks can detect common markup problems but cannot establish full WCAG conformance.

## Manual scenarios

### Keyboard

- Reach every control by Tab and Shift+Tab.
- Activate buttons and links with Enter or Space as appropriate.
- Confirm focus is visible, logical, and not trapped.
- Verify mobile navigation can be opened and closed by keyboard once implemented.

### Forms

- Confirm every control has a persistent accessible label.
- Confirm autocomplete and input types are appropriate.
- Submit invalid values and verify error messages are announced and associated.
- Confirm success/error feedback does not rely on color only.

### Dashboard

- Confirm table headers are announced with their cells.
- Confirm loading and query failure status is communicated.
- Confirm empty data is understandable.
- Confirm question links have meaningful accessible names.

### Responsive and visual

- Test 200% zoom and narrow viewport reflow.
- Review text and component contrast.
- Check high-contrast modes and reduced-motion preferences.
- Confirm no clipped focus outline.

## Automated scan

When an accessibility scanner is introduced, record the tool, version, route, browser, commit, and findings. Resolve false positives with evidence. Do not treat an empty scanner report as proof of accessibility.

## Results

Record findings with docs/templates/accessibility-audit-template.md and link remediation issues.
