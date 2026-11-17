# ✅ Data Validation

## Current state

The current question-list component reads Firestore documents and renders fields directly. It assumes topics is an array and passes time to JavaScript Date. There is no shared validation or normalization module in the reviewed source.

## Validation requirements for future changes

| Field | Validation | Safe fallback |
| --- | --- | --- |
| uid | Must match the authenticated owner under Firestore Rules | Reject unauthorized record |
| title | String, trimmed, reasonable display length | "Untitled question" only if product approves |
| difficulty | String from an agreed vocabulary or unknown label | "Unspecified" |
| email | Valid only if it is genuinely required by the feature | Prefer not to display |
| link | URL parse succeeds; protocol allowlist | Render plain text or omit link |
| time | Valid Firestore Timestamp, Date, or documented ISO value | "Date unavailable" |
| topics | Array containing only bounded strings | Empty list |

## Link safety

- Parse the candidate URL using the browser URL parser.
- Prefer https destinations.
- Reject javascript:, data:, file:, and other unexpected schemes.
- Add rel="noopener noreferrer" when opening a new tab.
- Display a safe text label and do not inject HTML from stored values.

## Timestamp safety

Do not assume that every stored time is a valid JavaScript Date. Decide which formats the writer emits, normalize on ingestion, and handle invalid values without throwing. Prefer Firestore Timestamp or a documented ISO 8601 representation for future records.

## Validation location

- Firebase Security Rules: enforce ownership and allowed field types for operations they support.
- Trusted writer: validate before writing or migrating records.
- Frontend normalization: protect rendering from old, missing, or malformed records.
- Tests: cover null, absent, wrong-type, overly long, and adversarial values.

## Rollout

1. Inventory current documents using synthetic or appropriately authorized data.
2. Agree a canonical shape with every writer.
3. Add read compatibility for known legacy formats.
4. Add validation to trusted write paths.
5. Test rules and rendering against malformed data.
6. Migrate records only with an approved backup and rollback plan.

Do not infer or silently delete records that fail validation.
