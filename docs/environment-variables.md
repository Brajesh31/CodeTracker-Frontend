# 🔐 Environment Variables

## Current variables

| Name | Required? | Meaning | Secret? |
| --- | --- | --- | --- |
| VITE_FIREBASE_API_KEY | Firebase app config | Client-side Firebase web API key | No, public client config |
| VITE_FIREBASE_AUTH_DOMAIN | Firebase app config | Firebase Auth domain | No, public client config |
| VITE_FIREBASE_DATABASE_URL | Included in config object | Realtime Database URL field | No, public client config; currently not used by the visible UI |
| VITE_FIREBASE_PROJECT_ID | Firebase app config | Firebase project identifier | No, public client config |
| VITE_FIREBASE_STORAGE_BUCKET | Firebase app config | Storage bucket identifier | No, public client config |
| VITE_FIREBASE_MESSAGING_SENDER_ID | Firebase app config | Firebase messaging sender identifier | No, public client config |
| VITE_FIREBASE_APP_ID | Firebase app config | Firebase Web App identifier | No, public client config |
| VITE_FIREBASE_MEASUREMENT_ID | Optional | Analytics measurement identifier when configured | No, public client config |

The canonical blank template is the root .env.example file. Do not copy real values into documentation.

## Local file placement

Create leetcode/.env.local by copying the root template. The application reads values through import.meta.env in leetcode/src/config/firebase.jsx.

## Rules

1. Never commit .env.local or any file containing actual credentials.
2. Never add VITE_FIREBASE_ADMIN_KEY, service-account JSON, private keys, database passwords, or tokens.
3. Treat every VITE_ value as visible to any visitor who downloads the frontend.
4. Keep GitHub Actions deployment credentials in repository or environment secrets.
5. Rotate any credential that has been accidentally committed or exposed.
6. Keep development, preview, and production Firebase projects distinct where possible.

## Missing configuration behavior

The current Firebase initializer passes the environment values to initializeApp without a dedicated preflight validator. A missing or mismatched value may therefore surface as an initialization or network error. Add a safe configuration check before relying on a production deployment.

## Change procedure

When adding or removing a variable, update .env.example, this document, docs/configuration.md, installation instructions, CI environment mapping, and any Firebase configuration references. Do not record real values or secrets in commits.
