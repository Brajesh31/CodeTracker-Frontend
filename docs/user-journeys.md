# 🧭 User Journeys

## Journey 1: New account

1. Visitor opens the landing page.
2. Visitor chooses the signup path.
3. Visitor enters name, email, and password.
4. Frontend submits the credentials to Firebase Authentication.
5. On successful account creation, the signup flow updates the profile display name.
6. Current implementation navigates back to the landing page.
7. User can then navigate to login and sign in.

~~~mermaid
sequenceDiagram
    actor Visitor
    participant UI as React Signup
    participant Auth as Firebase Authentication
    Visitor->>UI: Open signup and enter details
    UI->>Auth: createUserWithEmailAndPassword
    Auth-->>UI: User credential
    UI->>Auth: updateProfile(displayName)
    Auth-->>UI: Profile updated
    UI-->>Visitor: Navigate to landing page
~~~

**Review points:** invalid email, weak password, duplicate account, network interruption, clear error feedback, and whether automatic sign-in after registration should be added.

## Journey 2: Returning user reviews questions

1. User opens /login.
2. User enters email and password.
3. Firebase Authentication validates the credentials.
4. The app's auth-state listener receives the active user.
5. The user navigates to /dashboard.
6. AllQuestions queries the questions collection with uid equal to the signed-in user's UID.
7. Firestore Security Rules evaluate the request.
8. The browser renders the returned rows.

~~~mermaid
flowchart TD
    A[Open login] --> B[Enter email and password]
    B --> C[Firebase Auth]
    C -->|Success| D[Auth state updated]
    C -->|Failure| E[Current error handling]
    D --> F[Open dashboard]
    F --> G[Read questions where uid matches]
    G --> H{Rules allow request?}
    H -->|Yes| I[Render question table]
    H -->|No| J[Show query error]
~~~

**Review points:** loading feedback, no-record empty state, invalid timestamps, missing topic arrays, malformed external links, and unauthorized requests.

## Journey 3: Sign out

1. Authenticated user activates Sign out.
2. Dashboard calls Firebase signOut.
3. On success, the app navigates to the landing page.
4. The auth-state subscription receives the signed-out state.

**Review points:** sign-out failure should be communicated inline; shared-device users should be able to confirm the session has ended.

## Future journey: Add a question

This journey is not implemented. Before building it, define the authorized writer (frontend, extension, or trusted backend), the Firestore document schema, validation rules, ownership rules, and compatibility strategy. Do not infer the process from the current read-only table.
