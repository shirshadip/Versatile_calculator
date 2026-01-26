# Architecture Overview

This project is intentionally simple and file-based. The architecture is static-client only:

- Presentation: HTML files (`*.html`) provide layout and markup for each calculator view.
- Styling: CSS files inside `css/` implement visual layout and responsive behavior.
- Logic: JavaScript files inside `javascript/` contain the interactive behavior and computation routines.

Key implementation details:

- `scientific.js` exposes math helper functions (`sin`, `cos`, `ln`, `sqrt`, `fact`, etc.) and a `calculate()` entry point. The evaluator constructs a `Function` with those symbols passed as parameters to keep a narrow evaluation scope.
- Angle mode handling: the script keeps `angleMode` state and converts between degrees/radians as required by trig functions.
- UI bindings: buttons append tokens to the `display` input; the equals button triggers `calculate()`.

Design trade-offs:

- Pros: zero-dependency, portable, easy to inspect and modify.
- Cons: expression evaluation relies on `Function` and token-based appends; adding a full parser would improve security and correctness for complex expressions.
