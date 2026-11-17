# 🧭 Navigation Structure

## Current route map

| Path | Route type | Component | Expected access |
| --- | --- | --- | --- |
| / | Public | LandingPage | Visitor |
| /login | Public | Login | Visitor or signed-out user |
| /signup | Public | Signup | Visitor or signed-out user |
| /dashboard | Protected | Dashboard | Signed-in Firebase user |
| * | Fallback | Not-found content | Any visitor |

## Navigation diagram

~~~mermaid
flowchart TD
    Root["/ LandingPage"] --> Login["/login"]
    Root --> Signup["/signup"]
    Login -->|Auth succeeds| Dashboard["/dashboard"]
    Signup --> Root
    Dashboard -->|Sign out| Root
    Unknown["Unknown path"] --> NotFound["Not found"]
    SignedOut["Signed-out user opens dashboard"] --> Login
~~~

## Authentication and route behavior

- App observes Firebase Auth state and displays a pending status while the initial state is being resolved.
- The dashboard route is protected; a signed-out visit navigates to /login.
- Unknown paths display a not-found message and a link to return to the landing page.
- Sign-out returns the user to the public landing route.

## Mobile navigation

The dashboard menu disclosure is controlled by React state. The menu button updates its accessible label and aria-expanded value. The mobile links remain inside the controlled disclosure.

## Verification still required

Test direct route refresh, browser back/forward, auth state restoration, signed-out dashboard redirects, and the mobile menu at narrow viewports against a running build and Firebase test session.
