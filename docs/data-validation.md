# ✅ Data Validation

## Current frontend behavior

The dashboard normalizes display values before rendering Firestore question records:

- Title: non-empty strings are displayed; missing or invalid values use "Untitled question".
- Difficulty: non-empty strings are displayed; missing or invalid values use "Not specified".
- Email: string values are displayed; other types use "Not specified".
- Link: only successfully parsed HTTP(S) URLs become clickable anchors; malformed, empty, and unsupported schemes display as unavailable.
- Time: Firestore Timestamp values using toDate(), JavaScript Date values, and string/number date inputs are handled; invalid or unsupported values display as "Date unavailable".
- Topics: only string entries from an array are joined; missing or malformed values display as "Not specified".

This client-side normalization is a rendering safeguard, not a trusted write validator or a replacement for Firestore Security Rules.

## Data contract still requiring formal agreement

The source-derived question fields are uid, title, difficulty, email, link, time, and topics. The repository does not include the writer that creates these documents. Agree a canonical schema with every writer, including the external extension if it writes to the same collection.

## Required validation responsibilities

| Layer | Responsibility |
| --- | --- |
| Firestore Security Rules | Enforce ownership and validate allowed fields/types for permitted operations |
| Trusted writer | Validate data before creation or mutation |
| Frontend normalization | Protect UI rendering from missing, malformed, or legacy values |
| Test suite | Exercise absent, null, wrong-type, invalid-date, and unsafe-link cases |

## Link safety

- Parse candidate URLs with the browser URL parser.
- Only allow HTTP and HTTPS schemes in the dashboard.
- Reject javascript:, data:, file:, and other unexpected schemes.
- Use rel="noopener noreferrer" when opening a new tab.
- Render stored values as text; do not inject HTML.

## Timestamp safety

Prefer Firestore Timestamp or a documented ISO 8601 representation for future records. Current display code supports Timestamp, Date, string, and number inputs, but a canonical storage contract is still needed.

## Remaining work

- Bound text lengths according to an agreed product contract.
- Establish allowed difficulty values.
- Decide whether per-document email is needed.
- Add unit tests for normalization helpers.
- Add Rules validation for actual reads and writes.
- Plan migration compatibility before changing stored fields.

Do not infer or silently delete records that fail validation.
