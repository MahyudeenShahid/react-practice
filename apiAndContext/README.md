# apiAndContext

This project demonstrates fetching data from an API and sharing state across components using React Context (or other context-based patterns). It is useful for practicing data fetching, global state, and context providers.

## Purpose

Use this project to learn how to fetch remote data, handle loading/error states, and make that data available to many components using Context.

## What you'll learn

- Fetching data with `fetch` / async functions and handling loading/error states
- Using `useEffect` to trigger data fetching
- Creating a Context and Provider to share data/state across components
- `useContext` to consume shared state
- Basic separation of concerns: hooks for API logic, components for display

## Files to look at

- `src/App.jsx` — app entry and provider wiring (look for Context provider)
- `src/` — components that consume context and present API data
- `src/hooks/` — any custom hooks used to fetch or manage API data

## Run locally

```powershell
cd apiAndContext
npm install
npm run dev
```

## Implementation notes & exercises

- Add caching or state persistence to avoid re-fetching on every mount
- Add error boundary or better error UI for failed requests
- Extract API logic into a reusable custom hook (`useApi` or similar)
- Add tests for the hook using msw (Mock Service Worker) or jest mocking

---

developed by Mahyudeen Shahid with ❤