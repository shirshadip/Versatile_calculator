# Contributing

Thanks for considering contributing! The project is small and contributions are welcome. Below are recommended steps and a few project-specific notes to help your changes land quickly.

How to contribute

1. Fork the repository and create a descriptive feature branch (e.g. `feature/physics-units`).
2. Make focused changes with clear commit messages and a single purpose per pull request.
3. Open a pull request against `main` with a short description of the change and any manual test steps.

Quick developer workflows

- Static demos (edit + test): edit files under `static/` and open the corresponding HTML in your browser, or serve the `static/` folder with a local HTTP server.
- React app (development): the modern app is in `ReactAPP/Versatile_Calculator`. Use the Vite dev server:

```powershell
cd ReactAPP/Versatile_Calculator
npm install
npm run dev
```

The dev server provides hot-reload and faster iteration for React components.

What to include in PRs

- A short description of the change and the motivation.
- A list of manual steps to test the change (pages to open, inputs to use).
- If the change affects the React app, mention any new npm scripts or dependencies.

Suggestions and areas for help

- Add automated tests or examples. Consider adding a small Jest setup or Node-based tests for shared logic in the React app.
- Replace the naive evaluator used by static demos with a safer expression parser/evaluator.
- Improve accessibility (ARIA attributes, keyboard navigation) across demos and React components.

Style guidelines

- Keep functions small and single-responsibility.
- Avoid global variables in JavaScript; prefer module exports/imports.
- Use clear, descriptive names for components and helper functions.

Communication

- If you open a larger change, create an issue first to discuss the approach.
- Mention any compatibility or browser assumptions in the PR description.

Thank you — your contributions make this project better for everyone.
