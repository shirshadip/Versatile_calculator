import { useState } from "react";
import Scientific from "./scientific";
import "../App.css";
import { useNavigate } from "react-router-dom";

export default function Vector() {
    const [sciencalc, Setcalc] = useState(false);
    const navigate = useNavigate();

    const [a, setA] = useState("");
    const [b, setB] = useState("");
    const [theta, setTheta] = useState("");

    // For component dot product 
    const [aidot, setAIdot] = useState("");
    const [bidot, setBIdot] = useState("");
    const [ajdot, setAJdot] = useState("");
    const [bjdod, setBJdot] = useState("");
    const [akdot, setAKdot] = useState("");
    const [bkdot, setBKdot] = useState("");


    function component_dot_product(ai, bi, aj, bj, ak, bk) {
        return ai * bi + aj * bj + ak * bk;
    }

    function dot_product(a, b, theta) {
        return a * b * Math.cos(theta);
    }
    function cross_product(a, b, theta) {
        return a * b * Math.sin(theta);
    }
    function component_cross_product(ai, bi, aj, bj, ak, bk) {
    const i = aj * bk - ak * bj;
    const j = ak * bi - ai * bk;
    const k = ai * bj - aj * bi;

    return `${i.toFixed(4)}î  ${
        j >= 0 ? "+" : "-"
    } ${Math.abs(j).toFixed(4)}ĵ ${
        k >= 0 ? "+" : "-"
    } ${Math.abs(k).toFixed(4)}k̂`;
}
    const result =
        a && b && theta
            ? dot_product(parseFloat(a), parseFloat(b), parseFloat(theta))
            : "";

    return (
        <>
            <div className="head">
                Calculate Dot Product
            </div>

            <details>
                <summary><p>
                    Formula: <strong>a·b = ab cos(θ)</strong>
                </p></summary>


                <div className="input">

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
                        placeholder="Enter b"
                        value={b}
                        onChange={(e) => setB(e.target.value)}
                    />

                    <input
                        type="number"
                        className="number"
                        placeholder="Enter θ (radians)"
                        value={theta}
                        onChange={(e) => setTheta(e.target.value)}
                    />

                    <h3>
                        Dot Product:{" "}
                        {result !== "" ? result.toFixed(4) : "Enter values"}
                    </h3>
                </div>
            </details>
            <details>
                <summary><p>
                    Formula: <strong>a.b</strong>
                </p></summary>
                <div className="input">

                    <input
                        type="number"
                        className="number"
                        placeholder="Enter a i component"
                        value={aidot}
                        onChange={(e) => setAIdot(e.target.value)}

                    />
                    <input
                        type="number"
                        className="number"
                        placeholder="Enter b i component"
                        value={bidot}
                        onChange={(e) => setBIdot(e.target.value)}

                    />
                    <input
                        type="number"
                        className="number"
                        placeholder="Enter a j component"
                        value={ajdot}
                        onChange={(e) => setAJdot(e.target.value)}

                    />
                    <input
                        type="number"
                        className="number"
                        placeholder="Enter b j component"
                        value={bjdod}
                        onChange={(e) => setBJdot(e.target.value)}

                    />
                    <input
                        type="number"
                        className="number"
                        placeholder="Enter a k component"
                        value={akdot}
                        onChange={(e) => setAKdot(e.target.value)}

                    />
                    <input
                        type="number"
                        className="number"
                        placeholder="Enter b k component"
                        value={bkdot}
                        onChange={(e) => setBKdot(e.target.value)}

                    />
                    <h3>
                        Dot Product:{" "}
                        {aidot && bidot && ajdot && bjdod && akdot && bkdot ? component_dot_product(parseFloat(aidot), parseFloat(bidot), parseFloat(ajdot), parseFloat(bjdod), parseFloat(akdot), parseFloat(bkdot)).toFixed(4) : "Enter values"}
                    </h3>
                </div>
            </details>
            <details>
                <summary><p>
                    Formula: <strong>a × b = ab.sin(θ)</strong>
                </p></summary>

                <div className="input">
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
                        placeholder="Enter b"
                        value={b}
                        onChange={(e) => setB(e.target.value)}
                    />
                    <input
                        type="number"
                        className="number"
                        placeholder="Enter θ (radians)"
                        value={theta}
                        onChange={(e) => setTheta(e.target.value)}
                    />
                    <h3>
                        Cross Product:{" "}
                        {a && b && theta ? cross_product(parseFloat(a), parseFloat(b), parseFloat(theta)).toFixed(4) : "Enter values"}
                    </h3>
                </div>
            </details>
            <details>
                <summary>
                    <p>Formula: <strong>a X b </strong>
                    </p>
                </summary>
                <div className="input">

                    <input
                        type="number"
                        className="number"
                        placeholder="Enter a i component"
                        value={aidot}
                        onChange={(e) => setAIdot(e.target.value)}
                    />
                    <input
                        type="number"   
                    className="number"
                        placeholder="Enter b i component"
                        value={bidot}
                        onChange={(e) => setBIdot(e.target.value)}
                    />
                    <input

                        type="number"
                        className="number"
                        placeholder="Enter a j component"
                        value={ajdot}
                        onChange={(e) => setAJdot(e.target.value)}
                    />
                    <input

                        type="number"
                        className="number"
                        placeholder="Enter b j component"
                        value={bjdod}
                        onChange={(e) => setBJdot(e.target.value)}
                    />
                    <input
                        type="number"
                        className="number"
                        placeholder="Enter a k component"
                        value={akdot}
                        onChange={(e) => setAKdot(e.target.value)}
                    />
                    <input
                        type="number"
                        className="number"
                        placeholder="Enter b k component"
                        value={bkdot}
                        onChange={(e) => setBKdot(e.target.value)}
                    />
                    <h3>
                        Cross Product:{" "}
                        {aidot && bidot && ajdot && bjdod && akdot && bkdot ? component_cross_product(parseFloat(aidot), parseFloat(bidot), parseFloat(ajdot), parseFloat(bjdod), parseFloat(akdot), parseFloat(bkdot)) : "Enter values"}
                    </h3>
                </div>
            </details>
            {sciencalc && <Scientific />}

            {sciencalc ? (
                <button onClick={() => Setcalc(false)}>
                    Hide Calculator
                </button>
            ) : (
                <button onClick={() => Setcalc(true)}>
                    Want to use a scientific calculator?
                </button>
            )}
            <div id="homenav">
                <button onClick={() => navigate("/")}>← Home Page</button>
            </div>

        </>
    );
}