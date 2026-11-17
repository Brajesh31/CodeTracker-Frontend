# 🗃️ Database Schema Change: <Collection or document>

- **Status:** Proposed / Approved / Implemented / Retired
- **Owner:** <owner>
- **Date:** YYYY-MM-DD
- **Related ADR:** <link>
- **Affected writers/readers:** <modules and external systems>

## 1. Motivation

Describe the user need, current schema limitation, and reason for changing the stored data.

## 2. Current shape

| Field | Type | Required | Current readers/writers | Example with synthetic value |
| --- | --- | --- | --- | --- |
| <field> | <type> | Yes/No | <module> | <value> |

## 3. Proposed shape

| Field | Type | Required | Constraints | Privacy classification |
| --- | --- | --- | --- | --- |
| <field> | <type> | Yes/No | <validation> | Public / Personal / Sensitive |

## 4. Ownership and access

Define the document owner, UID binding, permitted operations, and Firestore Rules expressions. Explain how the Rules prevent owner spoofing and cross-user reads.

## 5. Relationships and data flow

~~~mermaid
erDiagram
    USER ||--o{ QUESTION : owns
    USER {
      string uid PK
    }
    QUESTION {
      string documentId PK
      string uid FK
      string title
      string difficulty
    }
~~~

This is a conceptual ownership model. Adapt it to the actual Firestore document layout; do not imply relational tables or foreign-key enforcement if the implementation is Firestore.

## 6. Migration and compatibility

- Old format:
- New format:
- Dual-read or dual-write period:
- Backfill process:
- Batch limits:
- Idempotency:
- Validation:
- Rollback:
- Backup reference:

## 7. Security and privacy review

Document field-level validation, access, retention, deletion, sensitive data, and logging.

## 8. Test evidence

Include synthetic test records, positive and negative Rules tests, malformed data tests, and reader/writer compatibility.

## 9. Deployment and operations

Describe the order of Rules, writer, reader, migration, and cleanup deployment. Include a stop/rollback condition.
