# 🔌 API or Client Contract: <Name>

- **Status:** Draft / Current / Deprecated
- **Owner:** <owner>
- **Version:** <version or Not versioned>
- **Related routes/modules:** <paths>

## 1. Scope

State whether this describes a browser route, Firebase SDK operation, external integration, or server API. Do not invent HTTP endpoints for the current frontend-only architecture.

## 2. Authentication and authorization

- Identity provider:
- Required signed-in state:
- Authorization enforcement point:
- Required Firestore Rules:
- Public/private data:
- Rate limits or abuse protections:

## 3. Operation summary

| Operation | Method or SDK call | Input | Output | Access |
| --- | --- | --- | --- | --- |
| <name> | <HTTP verb / SDK method> | <shape> | <shape> | <public/authenticated> |

## 4. Request or invocation

Describe route, HTTP method if relevant, SDK method, parameters, query conditions, and any required configuration.

~~~json
{
  "example": "replace with a synthetic, sanitized example"
}
~~~

## 5. Response or result

Document success shape, absent fields, pagination, ordering, and consistency assumptions. Use synthetic data.

## 6. Errors

| Error category | Trigger | User behavior | Diagnostic information |
| --- | --- | --- | --- |
| Authentication | <condition> | <message> | <safe metadata> |
| Permission | <condition> | <message> | <safe metadata> |
| Validation | <condition> | <message> | <safe metadata> |
| Network | <condition> | <message> | <safe metadata> |

## 7. Security and privacy

Describe input validation, ownership, safe URL handling, personal data minimization, and what must never be logged.

## 8. Examples and verification

Include success, empty, unauthorized, and malformed-input scenarios. Link to tests and the relevant source file.

## 9. Compatibility and change history

Describe versioning, breaking-change policy, affected clients (including any external writer), migration, and deprecation plan.
