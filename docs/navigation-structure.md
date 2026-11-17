# 🧭 Navigation Structure

## Current route map

| Path | Route type | Component | Expected access |
| --- | --- | --- | --- |
| / | Public | LandingPage | Visitor |
| /login | Public | Login | Visitor or signed-out user |
| /signup | Public | Signup | Visitor or signed-out user |
| /dashboard | Conditional | Dashboard | Rendered when App has a truthy user state |

## Navigation diagram

~~~mermaid
flowchart TD
    Root["/ LandingPage"] --> Login["/login"]
    Root --> Signup["/signup"]
    Login --> Dashboard["/dashboard after sign-in"]
    Signup --> Root
    Dashboard --> Root["/ after sign-out"]
~~~

## Current limitations

- There is no explicit catch-all route.
- The app conditionally declares /dashboard but does not define a clear redirect for an unauthenticated direct visit.
- Auth state initially starts as null, so the app does not distinguish unresolved auth state from signed-out state.
- The mobile menu button in Dashboard is not wired to control menu visibility.

## Navigation requirements for future work

- Add an explicit auth-loading state before route access decisions.
- Redirect signed-out visits to /login with a safe return path only if the product requires it.
- Add a not-found route.
- Keep sign-out behavior consistent with the auth-state listener.
- Make active navigation state and mobile menu state accessible.
- Test browser back/forward and direct refresh on every route using Hosting rewrites.
