# 📊 Security Risk Register

Use this register as a working engineering artifact. Risk scores are qualitative until likelihood and impact are assessed against the deployed Firebase project.

| ID | Risk | Impact | Likelihood | Current control | Next action | Status |
| --- | --- | --- | --- | --- | --- | --- |
| SEC-01 | Firestore Rules are not tracked or evidenced here | Potential cross-user data exposure | Unknown | Client query filters by uid, which is not a security control | Obtain and audit deployed Rules; test with two synthetic users | Open |
| SEC-02 | Question data may contain malformed fields | Dashboard rendering failure | Medium | Loading and query error branches | Add normalization and edge-case tests | Open |
| SEC-03 | VITE_ variables misunderstood as secret | Credential exposure | Medium | Security docs and blank env template | Add secret scanning and contributor checks | Mitigated in docs |
| SEC-04 | Firebase deployment credential exposure | Unauthorized Hosting deployment | Unknown | GitHub secret reference | Restrict secret permissions and PR context | Open |
| SEC-05 | External writer contract is undocumented | Ownership/data integrity errors | Unknown | UID query | Identify writer and formalize contract | Open |
| SEC-06 | Unsafe URL in stored record | User redirected to untrusted site | Medium | noopener/noreferrer | Add strict URL validation | Open |
| SEC-07 | Dependency compromise or vulnerable package | Build/runtime compromise | Medium | npm lockfile | Add dependency review, CodeQL, and secret scanning | Open |

## Review process

For each risk, record owner, evidence, mitigation, test result, due date, and residual risk. Reassess after security incidents, Firebase Rules changes, dependency upgrades, and new integration work.

## Risk acceptance

Accepting a high-impact risk requires a documented rationale, named accountable maintainer, expiry/review date, and explicit scope. Do not silently convert a missing control into an accepted risk.
