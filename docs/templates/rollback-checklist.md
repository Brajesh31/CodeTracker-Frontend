# ↩️ Rollback Checklist

## Decision and scope

- [ ] Incident or defect is documented.
- [ ] Severity and user impact are assessed.
- [ ] Rollback scope is identified: frontend Hosting, source branch, Rules, or data.
- [ ] Accountable maintainer and Firebase project owner are notified.

## Before rollback

- [ ] Capture current commit and Hosting release identifiers.
- [ ] Identify the last known-good Hosting release.
- [ ] Preserve sanitized logs and evidence.
- [ ] Confirm whether Firestore schema or Security Rules changed.
- [ ] Confirm whether a data restore is required and whether a verified backup exists.

## Execute

- [ ] Restore the intended Hosting release using Firebase's supported procedure.
- [ ] Use a reviewed Git revert for source history if needed.
- [ ] Do not force-push shared history.
- [ ] Do not blindly revert Firestore Rules or delete/restore records.
- [ ] Record every provider operation and its result.

## Verify

- [ ] Landing and public routes load.
- [ ] Login and signup work with a synthetic account.
- [ ] Authenticated dashboard loads.
- [ ] Firestore access remains restricted.
- [ ] Sign-out works.
- [ ] Browser and Hosting logs show no new critical errors.
- [ ] Restored release matches expected commit/artifacts.

## Closeout

- [ ] Root cause documented.
- [ ] Follow-up issue created.
- [ ] CHANGELOG or incident record updated where relevant.
- [ ] Stakeholders informed.
- [ ] Residual risks assigned an owner.
