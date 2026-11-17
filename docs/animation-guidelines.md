# ✨ Animation Guidelines

## Current status

The reviewed application does not have a documented motion system. Existing Tailwind classes include hover transitions, but there is no formal animation library or motion specification in the package manifest.

## Motion principles

- Motion should clarify a state change or relationship, not decorate every element.
- Keep interaction feedback immediate and brief.
- Avoid flashing, parallax, large motion, and auto-playing movement that distracts from question content.
- Preserve keyboard focus and screen-reader semantics independently of animation.
- Respect the prefers-reduced-motion user preference.
- Ensure animation does not delay form submission, navigation, or sign-out.

## Appropriate patterns

- Subtle hover/focus transitions on buttons and links.
- Short disclosure motion for a functional mobile navigation menu once it is implemented.
- Lightweight loading indicator paired with an announced textual status.
- No animation is required for static data-table rows.

## Review checklist

- [ ] Motion communicates a real state or action.
- [ ] Reduced-motion mode is supported.
- [ ] No essential information is conveyed only through movement.
- [ ] Focus and pointer states remain visible.
- [ ] Animation does not cause layout shift or block input.
- [ ] Motion is tested on lower-powered mobile devices.

This is design guidance, not a claim that reduced-motion behavior has already been implemented.
