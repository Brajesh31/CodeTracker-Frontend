# 🗃️ Data Dictionary

This dictionary records fields consumed by the current dashboard. It is not a Firestore-enforced schema and must not be treated as a guarantee that every stored document is valid.

## Collection: questions

| Field | Current UI use | Expected shape from source | Required for safe rendering? | Privacy / validation note |
| --- | --- | --- | --- | --- |
| Firestore document ID | React list key | String identifier | Yes for stable row identity | Do not expose internal IDs unnecessarily |
| uid | Query equality condition | Firebase UID string | Yes for ownership | Enforce ownership in Firestore Rules |
| title | First table column | String | Recommended | Render as text, not HTML |
| difficulty | Second column | String-like label | Recommended | Define allowed values before adding filters |
| email | Third table column | String | Currently read | Personal information; review whether it is necessary |
| link | External link | URL string | Optional if empty state is supported | Allow only approved web protocols and safe target behavior |
| time | Date display | Date-compatible value | Optional if missing values are handled | Define a consistent timestamp format |
| topics | Topic display | Array of labels | Current implementation assumes array | Normalize malformed and missing values |

## Data provenance

The schema above is inferred from leetcode/src/components/AllQuestions.jsx. The code that creates question documents is not included in this repository. The browser extension linked from the landing page may be related, but its source and contract have not been inspected here.

## Proposed normalized record

A future normalization layer could map the raw Firebase DocumentData into a stable view model. This is a design proposal, not current source code:

| View-model field | Suggested type | Suggested behavior |
| --- | --- | --- |
| id | string | Firestore document ID |
| title | string | Trim and bound length |
| difficulty | string or null | Map known labels; retain unknown as text |
| email | string or null | Omit from UI unless there is a clear user need |
| url | string or null | Accept https only by default |
| occurredAt | Date or null | Validate Timestamp, ISO date, and legacy formats explicitly |
| topics | string[] | Filter non-string entries and default to empty array |

## Change control

Before changing the document shape, record the old and proposed structures, writer compatibility, read compatibility, security-rule changes, migration plan, rollback strategy, and data-retention impact. See [database](database.md), [data validation](data-validation.md), and the migration template.
