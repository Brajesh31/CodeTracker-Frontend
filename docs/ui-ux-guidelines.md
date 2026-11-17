# 🎨 UI/UX Guidelines

## Product interaction model

CodeTracker currently has a public landing view, login and signup forms, and an authenticated dashboard. The dashboard displays a table of existing question records. Design changes must respect this narrow feature set and avoid advertising functionality that is not implemented.

## Visual hierarchy

- Keep CodeTracker identity and primary account actions easy to locate.
- Use clear headings and concise explanatory copy.
- Make the question title and difficulty scannable.
- Keep secondary metadata visually subordinate.
- Use a consistent spacing scale and avoid decorative elements that reduce content contrast.

## Forms

- Provide persistent labels, not placeholders alone.
- Use semantic form elements and correct input types.
- Associate errors with their controls and announce them accessibly.
- Preserve entered values after recoverable errors.
- Prevent accidental duplicate submission while a request is in progress.
- Do not reveal whether an email address is registered unless the product's account-security policy allows it.

## Dashboard

- Represent loading, empty, populated, and error states distinctly.
- Provide a useful message when no question records exist.
- Validate link destinations before rendering them.
- Handle missing or malformed values without a full-screen failure.
- Use a responsive table wrapper and meaningful column headers.
- Keep sign-out discoverable and keyboard accessible.

## Navigation

- Every navigation control must have a real action.
- A mobile menu button must expose and update aria-expanded.
- Indicate the current route where useful.
- Support direct navigation and refresh for each public route through Firebase Hosting rewrites.
- Provide a not-found page once route coverage is expanded.

## Feedback

Use inline status and error messaging for predictable authentication and data failures. Console logging may help development but is not a user-facing error strategy. Never display stack traces, tokens, or raw sensitive payloads.

## Design review

Review at 320 CSS pixels, 200% zoom, keyboard-only input, high-contrast mode, and at least one screen reader. Test the real browser build, not only a static mock-up.
