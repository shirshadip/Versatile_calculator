# Versatile Calculator

Versatile Calculator is a collection of client-side calculator demos and a modern React-based calculator UI. The repository contains static HTML/CSS/JavaScript demo pages (legacy) and a Vite + React app under `ReactAPP/Versatile_Calculator`.

---

## What you'll find here

- Static demo pages (client-side HTML/CSS/JS) in the `static/` directory:
  - Basic, Percentage & Compound, Scientific, physics demos and supporting assets.
- A modern React frontend in `ReactAPP/Versatile_Calculator` (Vite + React).
- Documentation and contribution guidelines in the `docs/` directory.

## Features (high level)

- Basic arithmetic and scientific functions (sin, cos, tan, ln, log, sqrt, factorial, etc.)
- Constants such as π and e
- Degree/radian toggle for trig functions in applicable pages
- Keyboard support on static pages

## Quick Start — Static demo pages

- Open a static demo directly in your browser by opening a file from the `static/` folder, for example:

- `static/index.html` — open in Chrome, Edge or Firefox



## Quick Start — React app (development)

The modern React application is located at `ReactAPP/Versatile_Calculator` and uses Vite.

1. Install Node.js (LTS recommended).
2. From the repository root run:

   ```powershell
   cd ReactAPP/Versatile_Calculator
   npm install
   npm run dev
   ```

3. Open the local dev URL printed by Vite (usually http://localhost:5173).

Notes:

- There is also a `package.json` at `ReactAPP` for other front-end tooling — check that folder if you work across the broader React project.

## Developer notes

- Static client logic and styles live under `static/javascript` and `static/css`.
- The React app source is under `ReactAPP/Versatile_Calculator/src` and component files are under `src/components`.
- A small set of educational physics pages and assets are available in `physicspages/`, `images/` and `videos/`.

## Tests and examples

- There are small example/test files such as `static/test.js` and `static/test.py` for experimentation.

## Documentation

- See the `docs/` folder for detailed documents:
  - `docs/USAGE.md` — usage notes and examples
  - `docs/ARCHITECTURE.md` — project layout and implementation notes
  - `docs/CONTRIBUTING.md` — how to contribute

## Security

- The static pages evaluate mathematical expressions in the browser; some pages use `Function` or similar evaluation techniques. Do not paste or run untrusted code in the calculator input.

## License

This repository currently does not include a `LICENSE` file. If you plan to publish or distribute the project, add an appropriate license (for example, MIT) to the repository root.

---

If you'd like, I can also:

- Add a short `CONTRIBUTING` summary into this `README`.
- Create a minimal `LICENSE` file (MIT) and commit it.
- Add a short `run` script to `ReactAPP/Versatile_Calculator` to simplify dev start-up.
