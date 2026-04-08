import { useRef,useState } from "react";
import { useNavigate } from "react-router-dom";
import Scientific from "./scientific";

// ── helpers ──────────────────────────────────────────────────────────────────

const WEIGHT = {
    kilo: 1000,
    mlg: 1,
    centi: 0.01,
    pounds: 453.59237,
};

const WEIGHT_LABEL = { kilo: "kg", mlg: "g", centi: "cg", pounds: "lb" };

const FORCE = {
    newton: 1,
    dyne: 1e-5,
};

const FORCE_LABEL = { newton: "Newton", dyne: "Dyne" };

function parseScientificInput(input) {
    input = input.toLowerCase().replace("×", "x").replace(/\s+/g, "");
    if (input.includes("x10^")) {
        const [base, power] = input.split("x10^");
        return Number(base) * Math.pow(10, Number(power));
    }
    return Number(input);
}

function formatScientific(num) {
    // Edge cases
    if (!isFinite(num)) return "Invalid";
    if (num === 0) return "0";

    const abs = Math.abs(num);

    // Show normal number if it's readable
    if (abs >= 0.001 && abs < 1e7) {
        return parseFloat(num.toPrecision(6)).toString();
    }

    // Scientific conversion
    let [base, exp] = num.toExponential(6).split("e");

    // Clean base (remove trailing zeros)
    base = parseFloat(base).toString();

    // Clean exponent
    exp = parseInt(exp, 10);

    return `${base} × 10<sup>${exp}</sup>`;
}

// ── component ─────────────────────────────────────────────────────────────────

export default function UnitConverter() {
    const navigate = useNavigate();
    // scientific calculator showing 
    const [sciencalc, Setcalc] = useState(false);
    // weight refs
    const weightInputRef = useRef();
    const weightFromRef = useRef();
    const weightToRef = useRef();
    const weightOutputRef = useRef();

    // force refs
    const forceInputRef = useRef();
    const forceFromRef = useRef();
    const forceToRef = useRef();
    const forceOutputRef = useRef();

    function showUnit() {
        const value = parseFloat(weightInputRef.current.value);
        const fromUnit = weightFromRef.current.value;
        const toUnit = weightToRef.current.value;
        const output = weightOutputRef.current;

        if (!value || !fromUnit || !toUnit) {
            output.innerText = "Please fill all fields";
            return;
        }

        if (fromUnit === toUnit) {
            output.innerText = `Result: ${value}`;
            return;
        }

        const valueInGrams = value * WEIGHT[fromUnit];
        const result = valueInGrams / WEIGHT[toUnit];
        output.innerText = `Result: ${parseFloat(result.toPrecision(6))} ${WEIGHT_LABEL[toUnit]}`;
    }

    function showForce() {
        const input = forceInputRef.current.value.trim();
        const fromUnit = forceFromRef.current.value;
        const toUnit = forceToRef.current.value;
        const output = forceOutputRef.current;

        if (!input || !fromUnit || !toUnit) {
            output.innerText = "Please fill all fields";
            return;
        }

        const value = parseScientificInput(input);

        if (isNaN(value)) {
            output.innerText = "Invalid number format";
            return;
        }

        if (fromUnit === toUnit) {
            output.innerText = `Result: ${value} ${FORCE_LABEL[toUnit]}`;
            return;
        }

        const valueInNewton = value * FORCE[fromUnit];
        const result = valueInNewton / FORCE[toUnit];
        output.innerHTML = `Result: ${formatScientific(result)} ${FORCE_LABEL[toUnit]}`;
    }

    return (
        <>
            {/* ── Weight & Mass ── */}
            <div className="head">Convert Weight and Mass</div>
            <div className="input">
                <p>Expression = from → to</p>
                <select ref={weightFromRef}>
                    <option value="">--Select--</option>
                    <option value="kilo">Kilogram</option>
                    <option value="mlg">Gram</option>
                    <option value="centi">Centigram</option>
                    <option value="pounds">Pounds</option>
                </select>
                <input
                    ref={weightInputRef}
                    type="number"
                    className="number"
                    placeholder="Enter value"
                />
                <p>To 👉</p>
                <select ref={weightToRef}>
                    <option value="">--Select--</option>
                    <option value="kilo">Kilogram</option>
                    <option value="mlg">Gram</option>
                    <option value="centi">Centigram</option>
                    <option value="pounds">Pounds</option>
                </select>
                <button onClick={showUnit}>Show result</button>
                <div className="output" ref={weightOutputRef}></div>
            </div>

            {/* ── Force ── */}
            <div className="head">Force Unit Converter</div>
            <div className="input">
                <p>Supports scientific notation: e.g. 1x10^5</p>
                <select ref={forceFromRef}>
                    <option value="">--Select--</option>
                    <option value="newton">Newton</option>
                    <option value="dyne">Dyne</option>
                </select>
                <input
                    ref={forceInputRef}
                    type="text"
                    className="number"
                    placeholder="e.g. 1x10^5 or 100000"
                />
                <p>To 👉</p>
                <select ref={forceToRef}>
                    <option value="">--Select--</option>
                    <option value="newton">Newton</option>
                    <option value="dyne">Dyne</option>
                </select>
                <button onClick={showForce}>Show result</button>
                <div className="output" ref={forceOutputRef}></div>
            </div>
            {
                sciencalc &&
                <Scientific />
            }
            {sciencalc ? (
                <button onClick={() => Setcalc(false)}>Hide Calculator</button>
            ) : (
                <button onClick={() => Setcalc(true)}>Want to use a scientific calculator??</button>
            )}

            <div id="homenav">
                <button onClick={() => navigate("/")}>← Home Page</button>
            </div>
        </>
    );
}