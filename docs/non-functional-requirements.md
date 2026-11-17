# ⚙️ Non-Functional Requirements

These requirements describe quality attributes for the browser application. They are targets for engineering and review, not measured claims about the current release.

## Security and privacy

- Firebase Security Rules must enforce authenticated ownership independently of client-side filters.
- No service-account key, Admin SDK credential, password, private key, or production record may be placed in Vite variables or committed files.
- Error messages and logs must not expose access tokens, password values, or unnecessary personal data.
- Dashboard question URLs are validated before becoming clickable links; static external links must remain trusted and intentional.
- Data collection and retention must be documented before analytics or additional personal fields are introduced.

## Reliability

- The app distinguishes initial authentication loading from the resolved signed-in or signed-out state.
- Dashboard data distinguishes loading, empty, populated, and recoverable query-error states.
- Malformed question fields use display fallbacks rather than breaking the table.
- Firebase Auth subscriptions are cleaned up when the app unmounts.
- Deployment should fail when dependency installation, lint, or production build fails.
- A Hosting rollback procedure should be documented and verified in a non-production environment.

## Usability

- Primary flows can be understood without prior knowledge of Firebase.
- Login and signup use visible labels, appropriate input types, and inline generic error feedback.
- Table content remains usable on narrow screens through horizontal overflow.
- The mobile navigation disclosure can be opened and closed with a state reflected by aria-expanded.
- Unknown routes show a not-found page and return link.
- Actions need visible focus and clear accessible names.

## Accessibility

- Target WCAG 2.2 AA for applicable user interface content.
- Test keyboard navigation, focus order, form labels, errors, contrast, zoom, and screen-reader semantics.
- Do not claim WCAG conformance without a documented audit and remediation record.

## Performance

- Keep the initial JavaScript payload proportionate to this small SPA.
- Avoid unnecessary Firestore reads and repeated subscriptions.
- Measure build size and real browser performance before setting numeric budgets.
- Add pagination or query limits before the dataset becomes large.

## Maintainability

- Keep frontend, Firebase client setup, and documentation boundaries clear.
- Use the committed npm lockfile with npm ci.
- Run real validation commands in CI from leetcode/.
- Record architecture and data-contract decisions as they are made.

## Compatibility

The current project targets modern browsers supported by the selected React, Vite, and Firebase versions. Define and test a formal browser support matrix before publishing strict compatibility promises.
