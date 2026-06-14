import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../App.css'

export default function SequenceSeries() {
    const [a, setA] = useState("");
    const [n, setN] = useState("");
    const [d, setD] = useState("");
    const [r, setR] = useState("");

    const [result, setResult] = useState("");
    const navigate = useNavigate();

    // AP Functions
    function tn_ap(a, n, d) {
        return a + (n - 1) * d;
    }

    function sn_ap(a, n, d) {
        return (n / 2) * (2 * a + (n - 1) * d);
    }

    // GP Functions
    function tn_gp(a, n, r) {
        return a * Math.pow(r, n - 1);
    }

    function sn_gp(a, n, r) {
        if (r === 1) return a * n;

        return (a * (Math.pow(r, n) - 1)) / (r - 1);
    }

    function infinite_gp(a, r) {
        if (Math.abs(r) >= 1) {
            return "Infinite sum does not exist";
        }

        return (a / (1 - r)).toFixed(4);
    }

    return (
        <div className="input">
            <h1>Sequence & Series Calculator</h1>

            <details>
                <summary>Arithmetic Progression (AP)</summary>

                <p>
                    Formula:
                    <strong> tₙ = a + (n - 1)d</strong>
                </p>

                <p>
                    Formula:
                    <strong> Sₙ = n/2 × (2a + (n - 1)d)</strong>
                </p>

                <input
                    type="number"
                    className="number"
                    placeholder="Enter a"
                    value={a}
                    onChange={(e) => setA(e.target.value)}
                />

                <input
                    type="number"
                    className="number"
                    placeholder="Enter n"
                    value={n}
                    onChange={(e) => setN(e.target.value)}
                />

                <input
                    type="number"
                    className="number"
                    placeholder="Enter d"
                    value={d}
                    onChange={(e) => setD(e.target.value)}
                />

                <h3>
                    n-th Term:{" "}
                    {a && n && d
                        ? tn_ap(
                            parseFloat(a),
                            parseFloat(n),
                            parseFloat(d)
                        ).toFixed(4)
                        : "Enter values"}
                </h3>

                <h3>
                    Sum of n Terms:{" "}
                    {a && n && d
                        ? sn_ap(
                            parseFloat(a),
                            parseFloat(n),
                            parseFloat(d)
                        ).toFixed(4)
                        : "Enter values"}
                </h3>
            </details>

            <details>
                <summary>Geometric Progression (GP)</summary>

                <p>
                    Formula:
                    <strong> tₙ = arⁿ⁻¹</strong>
                </p>

                <p>
                    Formula:
                    <strong> Sₙ = a(rⁿ − 1)/(r − 1)</strong>
                </p>

                <p>
                    Formula:
                    <strong> S∞ = a/(1-r)</strong>
                </p>

                <input
                    type="number"
                    className="number"
                    placeholder="Enter a"
                    value={a}
                    onChange={(e) => setA(e.target.value)}
                />

                <input
                    type="number"
                    className="number"
                    placeholder="Enter n"
                    value={n}
                    onChange={(e) => setN(e.target.value)}
                />

                <input
                    type="number"
                    className="number"
                    placeholder="Enter r"
                    value={r}
                    onChange={(e) => setR(e.target.value)}
                />

                <h3>
                    n-th Term:{" "}
                    {a && n && r
                        ? tn_gp(
                            parseFloat(a),
                            parseFloat(n),
                            parseFloat(r)
                        ).toFixed(4)
                        : "Enter values"}
                </h3>

                <h3>
                    Sum of n Terms:{" "}
                    {a && n && r
                        ? sn_gp(
                            parseFloat(a),
                            parseFloat(n),
                            parseFloat(r)
                        ).toFixed(4)
                        : "Enter values"}
                </h3>

                <h3>
                    Infinite GP Sum:{" "}
                    {a && r
                        ? infinite_gp(
                            parseFloat(a),
                            parseFloat(r)
                        )
                        : "Enter values"}
                </h3>
            </details>

            <h2>{result}</h2>
            <div id="homenav">
                <button onClick={() => navigate("/")}>← Home Page</button>
            </div>
        </div>
    );
}