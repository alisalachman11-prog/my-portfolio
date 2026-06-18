---
name: dev
description: Start the Vite dev server cleanly — kill any stale instances, launch fresh, confirm the port, and remind to hard-refresh. Use when the user says "/dev", "start the dev server", "run the site locally", or "spin up localhost".
---

# Dev

Start this portfolio's Vite dev server reliably, avoiding the stale-server / stale-browser-tab confusion that wastes debugging time.

## 1. Kill stale instances

- Check for anything already on the default Vite port: `lsof -i:5173 -sTCP:LISTEN`
- Kill any stale Vite/node dev server processes before starting a new one, so you don't end up serving outdated content or guessing which tab is live.

## 2. Start fresh

- Run `npm run dev` (in the background so it keeps serving).
- Vite serves at `http://localhost:5173/`. If 5173 is taken it picks the next free port — read the actual port from Vite's startup output, don't assume.
- This project uses a base path of `/my-portfolio/`, so the live local URL is typically `http://localhost:5173/my-portfolio/`.

## 3. Confirm + report

- Confirm the server is up by checking the real port from the startup log (optionally `curl -s -o /dev/null -w "HTTP %{http_code}\n" http://localhost:5173/my-portfolio/`).
- Report the exact URL the user should open.

## 4. Remind

- If a change isn't showing up, suspect **browser caching or a stale tab first** before debugging the code — tell the user to hard-refresh (Cmd+Shift+R) or open a fresh tab.
