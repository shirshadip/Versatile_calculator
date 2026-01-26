/*************************
 * CONFIGURATION
 *************************/
let angleMode = 'degrees'; // DEGREE FIRST
const display = document.getElementById('display');
const EPS = 1e-12;

/*************************
 * BASIC CONTROLS
 *************************/
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
    angleMode = angleMode === 'degrees' ? 'radians' : 'degrees';
    btn.textContent = angleMode === 'degrees' ? 'Degrees' : 'Radians';
}

/*************************
 * ANGLE UTILITIES
 *************************/
function toRad(x) {
    return angleMode === 'degrees' ? x * Math.PI / 180 : x;
}

function toDeg(x) {
    return angleMode === 'degrees' ? x * 180 / Math.PI : x;
}

/*************************
 * TRIG FUNCTIONS
 *************************/
function sin(x) {
    return Math.sin(toRad(x));
}

function cos(x) {
    return Math.cos(toRad(x));
}

function tan(x) {
    const r = toRad(x);
    if (Math.abs(Math.cos(r)) < EPS) {
        throw Error("tan undefined");
    }
    return Math.tan(r);
}

function asin(x) {
    if (x < -1 || x > 1) throw Error("asin domain error");
    return toDeg(Math.asin(x));
}

function acos(x) {
    if (x < -1 || x > 1) throw Error("acos domain error");
    return toDeg(Math.acos(x));
}

function atan(x) {
    return toDeg(Math.atan(x));
}

/*************************
 * SAFE MATH FUNCTIONS
 *************************/
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

/*************************
 * NUMERIC NORMALIZATION
 *************************/
function normalize(x) {
    if (Math.abs(x) < EPS) return 0;
    return +x.toFixed(12);
}

/*************************
 * CALCULATION CORE
 *************************/
function calculate() {
    try {
        const expr = display.value.replace(/\^/g, "**");

        const scope = {
            sin, cos, tan,
            asin, acos, atan,
            ln, log, sqrt,
            PI: Math.PI,
            E: Math.E
        };

        const result = Function(
            ...Object.keys(scope),
            `"use strict"; return (${expr});`
        )(...Object.values(scope));

        if (!Number.isFinite(result)) {
            throw Error("Math error");
        }

        display.value = normalize(result);
    } catch (err) {
        display.value = "Error";
        console.error(err.message);
        setTimeout(clearDisplay, 1200);
    }
}

/*************************
 * KEYBOARD SUPPORT
 *************************/
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
            p: "PI",
            e: "E"
        };
        if (map[key]) appendValue(map[key]);
    }
});

/*************************
 * AUTO FOCUS
 *************************/
window.onload = () => display.focus();
