# 🔄 Data or Configuration Migration: <Name>

- **Migration ID:** MIG-XXX
- **Status:** Proposed / Approved / Running / Complete / Rolled back
- **Owner:** <owner>
- **Related ADR:** <link>
- **Affected Firebase project:** <non-secret identifier>
- **Affected readers and writers:** <components/services>

## 1. Purpose and scope

Describe why the migration is needed and what user data or configuration it changes.

## 2. Current and target state

| Item | Current state | Target state |
| --- | --- | --- |
| Collection/document | <description> | <description> |
| Fields and types | <shape> | <shape> |
| Security Rules | <behavior/version> | <behavior/version> |
| Writers/readers | <list> | <list> |

## 3. Compatibility plan

- Old client behavior:
- New client behavior:
- External extension compatibility:
- Dual-read/dual-write approach:
- Minimum supported application revision:
- Deprecation date:

## 4. Execution plan

| Step | Operation | Owner | Verification | Stop condition |
| --- | --- | --- | --- | --- |
| 1 | Backup/export | <owner> | <evidence> | Backup unavailable |
| 2 | Deploy compatible Rules | <owner> | Rules tests | Any unauthorized access |
| 3 | Update writer/reader | <owner> | Contract tests | Data mismatch |
| 4 | Backfill or transform | <owner> | Counts and samples | Error threshold reached |
| 5 | Remove legacy behavior | <owner> | Regression suite | Compatibility failure |

## 5. Data safety

Document backup, retention, encryption, permissions, personally identifiable information, and deletion implications. Use synthetic data in test runs.

## 6. Idempotency and recovery

Describe how repeated batches behave, how partial progress is tracked, and how duplicate or corrupt records are detected.

## 7. Rollback

Identify the last known-good code, Rules, and data snapshot. Describe whether rollback is reversible and who approves it.

## 8. Test evidence

Record dry-run results, Rules tests, reader/writer compatibility, malformed data checks, and post-migration verification.

## 9. Completion record

Include actual counts, errors, skipped records, residual risks, approver, and completion timestamp. Do not fabricate metrics.
