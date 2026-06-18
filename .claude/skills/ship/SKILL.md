---
name: ship
description: Ship the current change end-to-end — verify the build and markup, commit only task-relevant files, open a PR, merge it, and sync. Use when the user says "ship it", "/ship", or wants to commit/PR/merge/sync the current work.
---

# Ship

Take the current working-tree change from "done editing" to "merged and synced" in one pass. Follow these steps in order. Stop and report if any step fails — never report success on a step you didn't verify.

## 1. Verify before committing

- Run `npm run build`. If it fails, STOP and show the error. Do not commit a broken build.
- Scan the staged/changed files for common breakage before committing:
  - `class=` that should be `className=` in JSX
  - referenced images/assets that don't exist on disk
  - mismatched element types / unclosed JSX tags
- Do NOT trust a piped exit code. Check the real command output, not just "it ran."

## 2. Stage tightly

- **Never run `git add -A`.** Stage only the specific files relevant to the current task.
- Run `git status` and `git diff` first; confirm nothing unrelated (e.g. a stray `tabs.jsx`, an unrequested line-height tweak) is being swept in.
- If you see unrelated changes, surface them and ask before including them.

## 3. Branch + commit

- If on `main`, create a feature branch first (e.g. `feat/...`, `fix/...`).
- Write a concise commit message describing only what this change does.
- End the commit message with:
  `Co-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>`

## 4. PR → merge → sync

- `git push -u origin <branch>`
- `gh pr create` with a clear title and short body.
- `gh pr merge --merge --delete-branch`
- `git checkout main && git pull && git fetch --prune`

## 5. Report

- Confirm the merge landed and the branch was cleaned up.
- This repo auto-deploys to GitHub Pages on push to `main`. Mention the deploy is triggered; don't claim it's live until verified.
