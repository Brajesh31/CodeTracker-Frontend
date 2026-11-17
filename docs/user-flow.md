# 🧭 User Flow

## Main current journey

~~~mermaid
flowchart TD
    A[Visitor lands on CodeTracker] --> B{Has an account?}
    B -->|No| C[Signup]
    B -->|Yes| D[Login]
    C --> E[Firebase creates account and updates display name]
    E --> F[Return to landing page]
    F --> D
    D --> G{Credentials valid?}
    G -->|No| H[Current error feedback]
    H --> D
    G -->|Yes| I[Firebase auth state updates]
    I --> J[Dashboard]
    J --> K[Read questions for current UID]
    K --> L{Firestore Rules permit read?}
    L -->|No| M[Query error]
    L -->|Yes| N[Render available question rows]
    N --> O[Sign out]
    M --> O
    O --> P[Return to public landing page]
~~~

## Flow limitations

- Signup does not currently navigate directly to the dashboard after registration.
- Auth-loading state is not separately represented.
- A no-record response does not have a dedicated empty state.
- Firestore Rules are required but are not tracked in the repository.
- No path for creating or editing question records is implemented.

## Future flow changes

When a feature adds password recovery, question writes, account deletion, or extension synchronization, update this flow with normal, failure, cancellation, and unauthorized paths. Use the feature template and security review before adding new data operations.
