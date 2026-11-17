# 🕵️ Privacy

## Data visible in the current UI

The dashboard displays a question title, difficulty, email, external link, time, and topics from Firestore documents. Firebase Authentication also handles account email and profile display name. The browser receives data returned by Firebase for the signed-in session.

## Collection minimization

Before adding a personal field, document why it is necessary, who can read it, how long it is retained, how it is deleted, and whether it can be derived from the authenticated profile instead. In particular, review whether a per-question email field is required.

## Transparency

A production privacy notice should identify:
- The account and question data collected.
- The Firebase services and project region used.
- The purpose of each data field.
- Data sharing with the companion extension and external services, if any.
- Retention and deletion process.
- Contact route for privacy requests.
- Any analytics, cookies, or telemetry added later.

No formal privacy certification or legal compliance assessment is claimed by this repository.

## Development data

Use synthetic accounts and records. Do not attach real question histories, email addresses, Firebase IDs, screenshots, logs, or tokens to public issues or pull requests.

## Third-party services

Firebase services and linked external sites have separate terms and privacy practices. Review their current policies and ensure the product notice accurately explains the actual data flow before production use.

## Change control

Any analytics, tracking, export, account-deletion, or new data field requires privacy review, security review, and documentation updates.
