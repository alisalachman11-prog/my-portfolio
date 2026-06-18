#!/usr/bin/env bash
# PreToolUse hook: before any `git commit`, run `npm run build`.
# If the build fails, block the commit (exit 2) so broken markup / className
# typos / missing assets never land in a PR.
set -uo pipefail

# Read the tool-call JSON from stdin and pull out the bash command.
input="$(cat)"
command="$(printf '%s' "$input" | node -e 'let d="";process.stdin.on("data",c=>d+=c).on("end",()=>{try{process.stdout.write((JSON.parse(d).tool_input&&JSON.parse(d).tool_input.command)||"")}catch(e){}})')"

# Only gate actual commits — let every other bash command through untouched.
case "$command" in
  *"git commit"*)
    cd "${CLAUDE_PROJECT_DIR:-.}" || exit 0
    if ! npm run build >/tmp/precommit-build.log 2>&1; then
      echo "Pre-commit build FAILED — commit blocked. Fix the build before committing." >&2
      echo "--- last 20 lines of build output ---" >&2
      tail -n 20 /tmp/precommit-build.log >&2
      exit 2   # exit 2 => block the tool call, feed stderr back to Claude
    fi
    ;;
esac

exit 0
