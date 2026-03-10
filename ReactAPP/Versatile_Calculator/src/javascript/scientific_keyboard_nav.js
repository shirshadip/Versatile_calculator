export function handleCalculatorKey(
  e,
  appendValue,
  clearDisplay,
  deleteLast,
  calculate
) {
  const key = e.key;

  // Numbers
  if (!isNaN(key)) {
    appendValue(key);
    return;
  }

  // Operators
  if (key === "+") appendValue("+");
  if (key === "-") appendValue("-");
  if (key === "*") appendValue("*");
  if (key === "/") appendValue("/");
  if (key === ".") appendValue(".");

  // Parentheses
  if (key === "(") appendValue("(");
  if (key === ")") appendValue(")");

  // Scientific shortcuts
  if (key === "s") appendValue("sin(");
  if (key === "c") appendValue("cos(");
  if (key === "t") appendValue("tan(");
  if (key === "l") appendValue("ln(");

  // Calculate
  if (key === "Enter") {
    e.preventDefault();
    calculate();
  }

  // Delete last
  if (key === "Backspace") {
    deleteLast();
  }

  // Clear display
  if (key === "Escape") {
    clearDisplay();
  }
}