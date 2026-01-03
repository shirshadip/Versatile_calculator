let angleMode = 'radians';
const display = document.getElementById('display');

/* =====================
   BASIC CONTROLS
===================== */
function appendValue(value) {
    display.value += value;
    display.focus();
}

function clearDisplay() {
    display.value = '';
    display.focus();
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
    display.focus();
}

function toggleMode() {
    const btn = document.getElementById('modeBtn');
    angleMode = angleMode === 'radians' ? 'degrees' : 'radians';
    btn.textContent = angleMode === 'radians' ? 'Radians' : 'Degrees';
}

/* =====================
   ANGLE HELPERS
===================== */
function sin(x) {
    return Math.sin(angleMode === 'degrees' ? x * Math.PI / 180 : x);
}
function cos(x) {
    return Math.cos(angleMode === 'degrees' ? x * Math.PI / 180 : x);
}
function tan(x) {
    const rad = angleMode === 'degrees' ? x * Math.PI / 180 : x;
    if (Math.abs(Math.cos(rad)) < 1e-12) throw Error("tan undefined");
    return Math.tan(rad);
}

function asin(x) {
    if (x < -1 || x > 1) throw Error("asin domain error");
    const r = Math.asin(x);
    return angleMode === 'degrees' ? r * 180 / Math.PI : r;
}
function acos(x) {
    if (x < -1 || x > 1) throw Error("acos domain error");
    const r = Math.acos(x);
    return angleMode === 'degrees' ? r * 180 / Math.PI : r;
}
function atan(x) {
    const r = Math.atan(x);
    return angleMode === 'degrees' ? r * 180 / Math.PI : r;
}

/* =====================
   SAFE MATH FUNCTIONS
===================== */
function ln(x) {
    if (x <= 0) throw Error("ln domain error");
    return Math.log(x);
}
function log(x) {
    if (x <= 0) throw Error("log domain error");
    return Math.log10(x);
}
function sqrt(x) {
    if (x < 0) throw Error("sqrt domain error");
    return Math.sqrt(x);
}

/* =====================
   CALCULATION CORE
===================== */
function calculate() {
    try {
        let expr = display.value
            .replace(/\^/g, "**")
            .replace(/π/g, "Math.PI")
            .replace(/e/g, "Math.E");

        // Evaluate safely
        const result = Function(`
            "use strict";
            return (${expr});
        `)();

        if (!isFinite(result)) throw Error("Math error");

        display.value = result;
    } catch (err) {
        display.value = "Error";
        console.error(err.message);
        setTimeout(clearDisplay, 1200);
    }
}

/* =====================
   KEYBOARD SUPPORT
===================== */
document.addEventListener("keydown", (e) => {
    const key = e.key;

    if (/[0-9+\-*/().]/.test(key)) return;

    if (key === "Enter" || key === "=") {
        e.preventDefault();
        calculate();
    }

    if (key === "Backspace") return;
    if (key === "Escape") {
        e.preventDefault();
        clearDisplay();
    }

    if (e.ctrlKey || e.metaKey) {
        e.preventDefault();
        const map = {
            s: "sin(",
            c: "cos(",
            t: "tan(",
            l: "ln(",
            r: "sqrt(",
            p: "Math.PI",
            e: "Math.E"
        };
        if (map[key]) appendValue(map[key]);
    }
});

/* =====================
   AUTO FOCUS
===================== */
window.onload = () => display.focus();
