# Unexpected Re-renders in Next.js 15 App

This repository demonstrates an issue with unexpected re-renders in a Next.js 15 application when navigating between pages using `next/link` and utilizing the `useState` and `useEffect` hooks.  The About page re-renders multiple times, leading to repeated console logs.

## Steps to Reproduce

1. Clone the repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Navigate to the About page via the link on the Home page.
5. Observe the console logs, noting that 'About page mounted' and 'About page unmounted' are printed more than once.

## Expected Behavior

The 'About page mounted' log should appear only once upon initial render, and the 'About page unmounted' log should appear only once when navigating away from the page.

## Actual Behavior

The logs appear multiple times, indicating unnecessary re-renders.

## Solution

The solution involves identifying and addressing the root cause of the unnecessary re-renders.  This could involve examining data fetching or state management within the components to pinpoint the source of the unexpected updates.