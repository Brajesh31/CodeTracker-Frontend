# 🔐 Security Architecture

## Security model

CodeTracker is a browser application. The browser is controlled by the end user and must be treated as untrusted. Firebase Authentication provides identity, but authorization for Firestore records must be enforced by Firebase Security Rules in the Firebase project.

~~~mermaid
flowchart TD
    B[Untrusted browser] --> SDK[Firebase client SDK]
    SDK --> AUTH[Firebase Authentication]
    SDK --> RULES[Cloud Firestore Security Rules]
    RULES -->|Validate identity and ownership| DATA[(Questions collection)]
    RULES -->|Reject invalid access| DENY[Permission denied]
    CFG[VITE_FIREBASE_* build variables] --> B
    SECRET[Service-account credentials] -. never embed .-> B
~~~

## Trust boundaries

1. **Browser boundary:** React state, route visibility, JavaScript filters, and client validation are not security controls.
2. **Identity boundary:** Firebase Auth identifies the user to Firebase services.
3. **Data authorization boundary:** Firestore Security Rules must authorize each read and write.
4. **Deployment boundary:** GitHub Actions secrets authorize deployment and must be protected with least privilege.
5. **External integration boundary:** The linked browser extension and external resource site are not maintained in this repository.

## Current gaps

- No Firestore Rules file is checked in.
- No Firebase Emulator or rules test configuration is checked in.
- The dashboard filters by uid, but the filter is not an access-control policy.
- The app initializes Firebase Storage, but no Storage Rules or visible storage feature are present.
- No backend or trusted write service is present.
- Account deletion and data-retention behavior are not defined.

## Required Firebase policy intent

The Firebase project owner must configure Rules that:
- Reject unauthenticated access to private question records.
- Verify the authenticated UID matches the record owner.
- Restrict fields and types on any permitted create/update operations.
- Prevent users from changing ownership fields to another UID.
- Deny access to documents outside the user's authorized scope.
- Apply the same standard to any external writer.

These are policy requirements, not a substitute for concrete, tested Rules. Do not paste untested rules into production.

## Deployment secrets

Keep the Firebase deployment service account in GitHub Actions secrets or an appropriately protected environment. Limit it to Hosting deployment, protect changes to main, and do not expose the secret to untrusted fork pull requests.
