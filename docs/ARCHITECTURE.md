# Architecture Overview

This repository contains two related implementations of calculator UI/logic:

- Static client demos (legacy): a set of HTML/CSS/JavaScript pages under the `static/` directory. These are simple, self-contained pages intended for teaching and quick experimentation.
- Modern React frontend: a Vite + React app located at `ReactAPP/Versatile_Calculator` that provides a more maintainable component structure and modern dev workflow.

Core responsibilities

- Presentation: static HTML in `static/` for demos; React components in `ReactAPP/Versatile_Calculator/src/components` for the modern app.
- Styling: per-demo CSS in `static/css/`; the React app uses styles under `ReactAPP/Versatile_Calculator/src` (check `styles/` or component-level CSS modules).
- Logic: demo JavaScript lives in `static/javascript/` (for example `static/javascript/scientific.js`). The React app implements the calculator logic inside components and helper modules in the React source tree.

Key implementation notes

- The static scientific demo exposes helpers (sin, cos, ln, sqrt, factorial, etc.) and evaluates expressions in the browser. The evaluator is intentionally minimal and uses a restricted evaluation scope.
- Angle mode (degrees/radians) is a runtime state used by trig helpers in both the demo and React implementations where applicable.
- The React app splits UI and logic into components and modules, improving testability and maintainability compared to the single-file demo scripts.

Design trade-offs and recommendations

- Pros: the static demos are zero-dependency and easy to inspect; the React app provides a modern developer experience and better organization.
- Cons: the legacy demos rely on ad-hoc evaluation (e.g., `Function`) which has security and correctness limitations. Consider migrating expression evaluation to a dedicated parser/evaluator (for example, a small mathematical expression parser library) for safety and correctness.

If you plan to extend the project, prefer adding new features to the React app or factor shared logic into reusable modules that can be tested independently.
