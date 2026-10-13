# Troubleshooting

## npm reports that no package file exists

Run application commands from leetcode/, not the repository root:

~~~sh
cd leetcode
npm ci
~~~

The current GitHub workflows also invoke npm run build from the root; see [Deployment](deployment.md) for that configuration gap.

## Firebase app fails to initialize

- Confirm .env.local is located at leetcode/.env.local, beside the Vite package.json.
- Check that variable names exactly match those in .env.example and values belong to the intended Firebase web app.
- Restart npm run dev after changing the environment file.
- Do not paste service-account credentials into a VITE_ variable. Browser variables are public.
- Confirm the Firebase project and registered app are the intended development target.

## Login or registration fails

- In Firebase Console, confirm Email/Password Authentication is enabled.
- Inspect the browser console and the Firebase error shown by the form.
- Check that the local origin is permitted by the Firebase Authentication authorized domains configuration.
- Do not post passwords, ID tokens, or personal account data in a public issue.

## Dashboard is blank or shows a Firestore error

- Sign in and confirm the signed-in user has a Firebase UID.
- Confirm Cloud Firestore is enabled in the same project used by the web app config.
- Check that questions contains documents whose uid matches the current UID and that Firestore Security Rules permit the query.
- The source has no add-question UI, so an empty collection produces no rows.
- Inspect document fields. The UI expects title, difficulty, email, link, time, and an array in topics.
- Do not loosen production rules just to hide an authorization error. Test intended access in a development project or emulator.

## Direct refresh of a nested route returns an error

The Firebase Hosting config rewrites paths to index.html. Confirm the deployed Hosting site uses leetcode/firebase.json and serves the build from leetcode/dist/. A root-level workflow that cannot find the nested Firebase config may deploy incorrectly.

## Broken extension logo or external link

The landing page references its asset with a public/ URL. If it fails after deployment, inspect the built asset path and Vite public-file conventions. The Edge extension and external study site are separate services and may change independently of this repository.

## Lint or build failure

From leetcode/, run npm ci before npm run lint or npm run build. Read the first actual error and identify whether it is an existing issue or a regression. Do not claim checks passed if they were not run. Include sanitized output in a support issue.
