## Usage Guide

This document explains how to use the calculators provided by the project.

## Opening the static demos

- The static demo pages are in the `static/` folder. You can open them directly in a browser or serve the folder from a local HTTP server for consistent behavior (recommended).

- Example pages:
  - `static/index.html` — landing page linking to other calculators
  - `static/basic.html` — basic arithmetic operations
  - `static/p&c.html` — percentage and compound-interest helpers
  - `static/scientific.html` — scientific calculator with trig, logs, etc.



## Using the scientific calculator (static demo)

- Enter numbers and operators using mouse or keyboard.
- Trigonometric functions respect the `Degrees`/`Radians` mode toggle.
- Keyboard shortcuts (static demo):
  - `Enter` or `=`: evaluate expression
  - `Backspace`: delete last character
  - `Escape`: clear display

## Expression syntax (static demo)

- Use `^` for exponentiation (the UI converts to `**` internally).
- Parentheses `(` and `)` are supported for grouping.
- Functions use `fn(` syntax, e.g. `sin(30)`, `sqrt(2)`.
- Factorial is provided as `fact(n)` in the static demo.

Examples:

```
sin(30) + cos(60)
log(100) + ln(2)
fact(5) + 3^2
```

## React app (developer) — Quick start

The modern app is in `ReactAPP/Versatile_Calculator` and uses Vite.

1. Install Node.js (LTS recommended).
2. From the project root:

```powershell
cd ReactAPP/Versatile_Calculator
npm install
npm run dev
```

3. Open the dev URL printed by Vite (commonly http://localhost:5173).

## Troubleshooting

- If the static pages show `Error` on evaluate, try a simpler expression — it may be a domain or syntax error.
- If static buttons are unresponsive, confirm that `static/javascript/` files are present and that JavaScript is enabled in your browser.
- For the React app, if `npm install` fails, ensure you have a supported Node version and that `npm` is available; check `ReactAPP/Versatile_Calculator/package.json` for expected Node engine ranges.
