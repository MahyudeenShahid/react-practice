
# passwordGenerator — Project summary

This small React + Vite project generates secure passwords with configurable options. It is meant for practicing controlled inputs, state management, hooks, and simple browser APIs.

## Files and structure

- `index.html` — app HTML entry
- `package.json` / `package-lock.json` — scripts and dependencies
- `vite.config.js` — Vite configuration
- `src/`
	- `main.jsx` — React entry: mounts `<App />`
	- `App.jsx` — main UI and password generation logic
	- `index.css` — styling (Tailwind / custom utilities)

## What you'll learn by building/reading this project

- Functional components and JSX
- Local state with `useState` (password, length, toggles for uppercase/numbers/symbols)
- Side effects with `useEffect` (auto-regeneration when inputs change)
- Stable callbacks with `useCallback` (password generation function)
- DOM refs with `useRef` (selecting and copying the generated password)
- Event handling and controlled inputs (range and checkboxes)
- Interacting with browser APIs (Clipboard API)

## Quick run

```powershell
cd passwordGenerator
npm install
npm run dev
```

Open the URL printed by Vite (usually `http://localhost:5173/`).
---

developed by Mahyudeen Shahid with ❤