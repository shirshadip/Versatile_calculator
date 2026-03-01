import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/p&c.css"; // uncomment when ready

// ── Math helpers ──────────────────────────────────────────────────────────────

function fact(n) {
    n = BigInt(n);
    if (n < 0n) return null;
    let result = 1n;
    for (let i = 2n; i <= n; i++) result *= i;
    return result;
}

function calcPermutations(n, r) {
    n = BigInt(n); r = BigInt(r);
    if (r > n || r < 0n) return null;
    let result = 1n;
    for (let i = 0n; i < r; i++) result *= (n - i);
    return result;
}

function calcCombinations(n, r) {
    n = BigInt(n); r = BigInt(r);
    if (r > n || r < 0n) return null;
    r = r > n - r ? n - r : r;
    let result = 1n;
    for (let i = 1n; i <= r; i++) result = result * (n - r + i) / i;
    return result;
}

// ── Component ─────────────────────────────────────────────────────────────────

function PermComb() {
    const navigate = useNavigate();

    // refs for every input & output
    const factInputRef  = useRef(null);
    const factDisplayRef = useRef(null);

    const nForPRef = useRef(null);
    const rForPRef = useRef(null);
    const displayPRef = useRef(null);

    const nForCRef = useRef(null);
    const rForCRef = useRef(null);
    const displayCRef = useRef(null);

    // ── Handlers ────────────────────────────────────────────────────────────

    const showFact = () => {
        const number = Number(factInputRef.current.value);

        if (isNaN(number) || number < 0 || !Number.isInteger(number)) {
            factDisplayRef.current.innerText = "Please enter a valid non-negative integer";
            return;
        }
        if (Math.abs(number).toString().length >= 6) {
            factDisplayRef.current.innerHTML = "<p>Input is too large to calculate</p>";
            return;
        }

        const result = fact(number);
        factDisplayRef.current.innerText = `${number}! = ${result.toString()}`;
    };

    const showPermutations = () => {
        const n = Number(nForPRef.current.value);
        const r = Number(rForPRef.current.value);

        if (isNaN(n) || isNaN(r) || n < r || n < 0 || r < 0) {
            displayPRef.current.innerHTML = "<p>Invalid input: n ≥ r ≥ 0 required</p>";
            return;
        }

        const result = calcPermutations(n, r);
        displayPRef.current.innerHTML =
            `<p><sup>${n}</sup>P<sub>${r}</sub> = ${result.toString()}</p>`;
    };

    const showCombinations = () => {
        const n = Number(nForCRef.current.value);
        const r = Number(rForCRef.current.value);

        if (isNaN(n) || isNaN(r) || n < r || n < 0 || r < 0) {
            displayCRef.current.innerHTML = "<p>Invalid input: n ≥ r ≥ 0 required</p>";
            return;
        }

        const result = calcCombinations(n, r);
        displayCRef.current.innerHTML =
            `<p><sup>${n}</sup>C<sub>${r}</sub> = ${result.toString()}</p>`;
    };

    // ── JSX ─────────────────────────────────────────────────────────────────

    return (
        <>
            {/* ── Factorial ── */}
            <div className="head">Calculate Factorial</div>
            <div className="input">
                <input
                    ref={factInputRef}
                    type="text"
                    className="number"
                    placeholder="Enter a number to evaluate the factorial"
                />
                <button onClick={showFact}>Show result</button>
                <div className="output" ref={factDisplayRef}></div>
            </div>

            {/* ── Permutations ── */}
            <div className="head">Calculate Permutations</div>
            <div className="input">
                <p>Expression = <sup>n</sup>p<sub>r</sub></p>
                <input ref={nForPRef} type="text" className="number" placeholder="Enter the n" />
                <input ref={rForPRef} type="text" className="number" placeholder="Enter the r" />
                <button onClick={showPermutations}>Show result</button>
                <div className="output" ref={displayPRef}></div>
            </div>

            {/* ── Combinations ── */}
            <div className="head">Calculate Combinations</div>
            <div className="input">
                <p>Expression = <sup>n</sup>c<sub>r</sub></p>
                <input ref={nForCRef} type="text" className="number" placeholder="Enter the n" />
                <input ref={rForCRef} type="text" className="number" placeholder="Enter the r" />
                <button onClick={showCombinations}>Show result</button>
                <div className="output" ref={displayCRef}></div>
            </div>

            <div id="homenav">
                <button onClick={() => navigate("/")}>← Home Page</button>
            </div>

            <div id="footer">
                <p>&copy; 2026 Calculator App • Made by shirshadip</p>
            </div>
        </>
    );
}

export default PermComb;