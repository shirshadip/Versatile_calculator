# Usage Guide

This document explains how to use the calculators provided by the project.

## Opening the app

- No build or server is required. Open the HTML files directly in your browser:
  - `index.html` — landing page linking to other calculators
  - `basic.html` — basic arithmetic operations
  - `p&c.html` — percentage and compound-interest helpers
  - `scientific.html` — scientific calculator with trig, logs, etc.

## Scientific calculator (example)

- Type numbers and operators with the mouse or keyboard.
- Trigonometric functions accept input either in degrees or radians depending on the mode toggle labeled `Degrees`/`Radians`.
- Common keyboard shortcuts:
  - `Enter` or `=`: evaluate expression
  - `Backspace`: delete last character
  - `Escape`: clear display
  - `Ctrl` (or `Cmd`) + `s/c/t/l/r/p/e/f`: append `sin(`, `cos(`, `tan(`, `ln(`, `sqrt(`, `PI`, `E`, `fact(` respectively

## Expression syntax

- Use `^` for exponentiation (the UI converts to `**` internally).
- Use parentheses `(` and `)` to group expressions.
- Functions are invoked using a trailing `(` (e.g. `sin(30)` or `sqrt(2)`).
- Factorial uses `fact(n)` in the expression (the UI button inserts `fact(`).

Examples:

```
sin(30) + cos(60)
log(100) + ln(2)
fact(5) + 3^2
```

## Troubleshooting

- If the display shows `Error`, the input either caused a math domain error or a syntax error. Clear the input and try a simpler expression.
- If buttons do not respond, ensure JavaScript is enabled in the browser and that `javascript/scientific.js` is present.
