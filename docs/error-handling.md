# 🚨 Error Handling

## Current error behavior

- Login and signup catch Firebase errors and display alert messages.
- Login's Google popup handler logs errors, but the handler is not exposed by the UI.
- AllQuestions records a Firestore query error, writes it to the console, and displays its message.
- Dashboard sign-out catches an error and writes its message to the console.
- There is no shared error taxonomy or central reporting service.

## Target approach

| Error category | User-facing behavior | Developer detail |
| --- | --- | --- |
| Invalid credentials | Clear, non-sensitive inline message | Firebase error code, no credentials |
| Account already exists | Guidance to sign in or recover account | Error code only |
| Network unavailable | Explain that the request could not complete; offer retry when safe | Browser/network event |
| Permission denied | Explain that data cannot be loaded | Verify Firebase Rules and user context |
| Malformed record | Render safe fallback or skip invalid row with diagnostics | Record ID and field name only, avoid private content |
| Unknown failure | Generic message and support guidance | Sanitized error metadata |

## Handling principles

- Never expose stack traces, tokens, credentials, or raw Firestore objects to users.
- Prefer inline messages connected to the action that failed.
- Do not silently convert a permission failure into an empty list.
- Provide retry only when repeating the operation is safe.
- Preserve form values after recoverable errors.
- Avoid duplicate alert dialogs and console-only failures.
- Log enough information for diagnosis without logging personal records.

## Retry and state model

Future async components should distinguish loading, success with results, success with zero results, recoverable failure, and session expiry. The current question component lacks a dedicated zero-result branch and retry action.

## Testing

Test invalid credentials, permission denial, network interruption, empty result, malformed timestamps, missing topics, and sign-out failure using synthetic data and controlled Firebase test environments.
