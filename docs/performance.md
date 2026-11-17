# ⚡ Performance

## Current characteristics

The app is a small client-rendered React SPA built by Vite. The dashboard calls getDocs once when the user dependency changes and loads all matching documents into component state. It does not currently paginate, limit, virtualize, or memoize the question list.

## Performance risks

- A large questions collection for one UID can produce a large read and render cost.
- Every row is rendered as a table row in one pass.
- Slow network or Firebase response does not have a timeout or retry UI.
- The current source has no documented bundle-size budget or browser performance measurements.
- Firebase Storage is initialized even though the visible UI does not currently use it.

## Improvement approach

1. Measure build output and browser load with representative synthetic data.
2. Add a Firestore query limit and stable order when the product defines expected sort behavior.
3. Add cursor-based pagination for large result sets.
4. Normalize fields before rendering.
5. Avoid unnecessary data fields, especially personal data not needed in the UI.
6. Consider route-level lazy loading only if bundle measurements justify it.
7. Remove unused client-service initialization only after confirming no external component relies on it.

## Metrics to collect

- Production JS and CSS transfer size.
- First Contentful Paint and Largest Contentful Paint.
- Dashboard query duration and result count.
- JavaScript error rate.
- Number of Firestore documents read per dashboard visit.

Collect only necessary telemetry and disclose analytics. Do not fabricate target numbers or report unmeasured improvements.
