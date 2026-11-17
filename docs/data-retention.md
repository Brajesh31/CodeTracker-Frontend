# 🗓️ Data Retention

## Current status

This repository does not implement data retention, automatic cleanup, user export, or account deletion for Firestore questions. Firebase Authentication account management and the Firestore collection are separate data concerns.

## Policy decisions required

Before collecting additional data, define:
- Which data categories are stored.
- Purpose and lawful basis as reviewed by the responsible project owner.
- Retention duration for account and question records.
- What happens when a user closes an account.
- Whether question records are retained, anonymized, or deleted.
- How backups and provider retention affect deletion.
- How a user requests export or deletion.
- Who verifies completion.

## Recommended data minimization

- Do not store duplicate personal fields unless a product requirement needs them.
- Avoid retaining tokens, passwords, or service credentials in Firestore.
- Use synthetic data for development.
- Remove abandoned test records from dedicated development projects.
- Avoid logging complete question documents where only an error code is needed.

## Operational checklist

1. Inventory Auth profiles and Firestore collections.
2. Identify every writer, including external clients.
3. Define retention and deletion rules with the responsible owner.
4. Implement and test deletion workflows using synthetic users.
5. Document backup and restore implications.
6. Confirm no inaccessible records remain after a test deletion.
7. Publish the verified policy to users.

Do not state that user data is deleted merely because the Authentication account has been removed.
