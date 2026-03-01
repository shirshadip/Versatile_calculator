import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/s&s.css";

// ── Math helpers ──────────────────────────────────────────────────────────────

function tn_ap(a, n, d) {
    return a + (n - 1) * d;
}

function sn_ap(a, n, d) {
    // Sn = n/2 × (2a + (n−1)d)  ← fixed from original copy-paste bug
    return (n / 2) * (2 * a + (n - 1) * d);
}

// ── Shared validator ─────────────────────────────────────────────────────────

function validate(a, n, d, output) {
    if (Number.isNaN(a) || Number.isNaN(n) || Number.isNaN(d)) {
        output.innerHTML = "❌ Please enter valid numeric values.";
        return false;
    }
    if (!Number.isInteger(n) || n < 1) {
        output.innerHTML = "❌ n must be a positive integer (n ≥ 1).";
        return false;
    }
    return true;
}

// ── Component ─────────────────────────────────────────────────────────────────

function SequenceSeries() {
    const navigate = useNavigate();

    // shared inputs for AP
    const aRef = useRef(null);
    const nRef = useRef(null);
    const dRef = useRef(null);

    // separate output refs
    const tnOutputRef = useRef(null);
    const snOutputRef = useRef(null);

    // ── Handlers ────────────────────────────────────────────────────────────

    const showTn = () => {
        const a = Number(aRef.current.value);
        const n = Number(nRef.current.value);
        const d = Number(dRef.current.value);
        const output = tnOutputRef.current;

        if (!validate(a, n, d, output)) return;

        const result = tn_ap(a, n, d);
        output.innerHTML = `
            <p>
                t<sub>${n}</sub> = ${a} + (${n} − 1) × ${d}<br/>
                <strong>= ${result}</strong>
            </p>
        `;
    };

    const showSn = () => {
        const a = Number(aRef.current.value);
        const n = Number(nRef.current.value);
        const d = Number(dRef.current.value);
        const output = snOutputRef.current;

        if (!validate(a, n, d, output)) return;

        const result = sn_ap(a, n, d);
        output.innerHTML = `
            <p>
                S<sub>${n}</sub> = ${n}/2 × (2 × ${a} + (${n} − 1) × ${d})<br/>
                <strong>= ${result}</strong>
            </p>
        `;
    };

    // ── JSX ─────────────────────────────────────────────────────────────────

    return (
        <>
            <div className="head">Arithmetic Progressions</div>

            <div className="input">
                <p>Formula (term): <strong>t<sub>n</sub> = a + (n−1)d</strong></p>
                <p>Formula (sum): <strong>S<sub>n</sub> = n/2 × (2a + (n−1)d)</strong></p>

                <input ref={aRef} type="text" className="number" placeholder="Enter a" />
                <input ref={nRef} type="text" className="number" placeholder="Enter n" />
                <input ref={dRef} type="text" className="number" placeholder="Enter d" />

                {/* ── n-th Term ── */}
                <h2>Evaluate n-th Term</h2>
                <button onClick={showTn}>Show the term</button>
                <div className="output" ref={tnOutputRef}></div>

                {/* ── Sum ── */}
                <h2>Evaluate Sum of n Terms</h2>
                <button onClick={showSn}>Show the sum</button>
                <div className="output" ref={snOutputRef}></div>
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

export default SequenceSeries;