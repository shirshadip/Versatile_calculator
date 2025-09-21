const display = document.getElementById('display');
const modeBtn = document.getElementById('modeBtn');
let mode = 'RAD'; // 'RAD' or 'DEG'

/* ------------------------
   Helper & UI functions
   ------------------------ */
function appendValue(v) {
  display.value += v;
}
function clearDisplay() {
  display.value = '';
}
function deleteLast() {
  display.value = display.value.slice(0, -1);
}
function toggleMode() {
  mode = (mode === 'RAD') ? 'DEG' : 'RAD';
  modeBtn.innerText = (mode === 'RAD') ? 'Radians' : 'Degrees';
}

/* ------------------------
   Degree-aware trig API
   Define top-level functions so user can type sin(...), cos(...), etc.
   These will be visible to eval() calls.
   ------------------------ */
function toRad(x) { return x * Math.PI / 180; }
function toDeg(x) { return x * 180 / Math.PI; }

function sin(x)  { return mode === 'DEG' ? Math.sin(toRad(x)) : Math.sin(x); }
function cos(x)  { return mode === 'DEG' ? Math.cos(toRad(x)) : Math.cos(x); }
function tan(x)  {
  const val = mode === 'DEG' ? Math.tan(toRad(x)) : Math.tan(x);
  return val;
}

// inverse trigs return results in current mode
function asin(x) { const r = Math.asin(x); return mode === 'DEG' ? toDeg(r) : r; }
function acos(x) { const r = Math.acos(x); return mode === 'DEG' ? toDeg(r) : r; }
function atan(x) { const r = Math.atan(x); return mode === 'DEG' ? toDeg(r) : r; }

// logs and sqrt helpers
function log(x) { return Math.log10(x); } // log base-10 (button labeled log)
function ln(x)  { return Math.log(x); }   // natural log
function sqrt(x){ return Math.sqrt(x); }

// Also expose Math.PI and Math.E are available when user appends Math.PI or Math.E.

/* ------------------------
   Evaluate expression safely-ish
   - converts ^ to ** for power
   - does not replace 'e' (avoids breaking 2e3 scientific notation)
   - uses eval (simple), but keep inputs trusted on dev machine.
   ------------------------ */
function calculate() {
  try {
    let expr = display.value.trim();

    // Quick guard: empty
    if (expr === '') return;

    // Replace caret ^ with exponent operator **
    // NOTE: users can also type '**' directly; '^' is common for keyboards.
    expr = expr.replace(/\^/g, '**');

    // Replace the unicode pi character if user pasted it (we also append Math.PI in UI)
    expr = expr.replace(/π/g, 'Math.PI');

    // Evaluate
    const result = eval(expr);

    // handle non-finite results and tiny rounding issues
    if (typeof result === 'number' && Number.isFinite(result)) {
      // round to a reasonable precision for display
      display.value = +parseFloat(result.toPrecision(12));
    } else {
      display.value = String(result);
    }
  } catch (err) {
    console.error('Calc error:', err);
    display.value = 'Error';
  }
}
