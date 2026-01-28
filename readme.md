# Versatile Calculator

Versatile Calculator is a lightweight client-side calculator web app that provides Basic, Percentage & Compound, and Scientific modes. It is implemented with simple HTML/CSS/JavaScript so it runs entirely in the browser with no server required.

---

## Features

- Basic arithmetic: `+`, `-`, `*`, `/`, `^` (power)
- Scientific functions: `sin`, `cos`, `tan`, `asin`, `acos`, `atan`, `ln`, `log`, `sqrt`, factorial `!`
- Constants: π and e
- Degree/radian angle mode toggle for trigonometric functions
- Keyboard support (numbers, operators, Enter, Backspace, Escape, and Ctrl-shortcuts)

## Quick Start

1. Clone or download the repository.
2. Open any of the HTML files in a modern browser (Chrome, Edge, Firefox):
   - `basic.html` — Basic calculator UI
   - `p&c.html` — Percentage & Compound calculator UI
   - `scientific.html` — Scientific calculator UI

   Open e.g. `scientific.html` in the browser to use the scientific calculator.

## File Structure

- `basic.html`, `p&c.html`, `scientific.html`, `index.html` — Entry pages
- `css/` — Stylesheets for each view
- `javascript/` — Client-side logic (e.g., `scientific.js`)
- `test.js`, `test.py` — Small test/example files

## Developer Notes

- All calculator logic lives in the JavaScript files under `javascript/`.
- `scientific.js` exposes a `calculate()` routine that evaluates expressions inside a safe scope (predefined math functions and constants). The UI buttons append tokens to the input display and call `calculate()` to evaluate.
- The project intentionally keeps everything client-side to be portable and dependency-free.

## Security Considerations

- The calculator uses the `Function` constructor to evaluate expressions from the UI. To limit risk, it supplies a restricted scope of allowed function names and constants; still, avoid running untrusted code snippets in this app.

## Contributing

See `docs/CONTRIBUTING.md` for contribution guidelines and development setup.

## License

This project does not include a license file. If you intend to publish or share the project, add a `LICENSE` file (for example, MIT) and update this section.

---

Additional docs are available in the `docs/` directory for usage, architecture, and contribution guidance.
