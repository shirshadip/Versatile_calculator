import { useState } from "react";
import "../styles/scientific.css";
import { useNavigate } from "react-router-dom";

function Scientific() {
    const navigate = useNavigate();
    const [display, setDisplay] = useState("");
    const [isDegrees, setIsDegrees] = useState(true);

    const appendValue = (value) => {
        setDisplay((prev) => prev + value);
    };

    const clearDisplay = () => {
        setDisplay("");
    };

    const deleteLast = () => {
        setDisplay((prev) => prev.slice(0, -1));
    };

    const toggleMode = () => {
        setIsDegrees((prev) => !prev);
    };

    const calculate = () => {
        try {
            let expr = display;

            // Replace constants
            expr = expr.replace(/PI/g, Math.PI).replace(/E/g, Math.E);

            // Replace trig functions based on mode
            const toRad = isDegrees ? (x) => (x * Math.PI) / 180 : (x) => x;

            expr = expr
                .replace(/sin\(/g, isDegrees ? "Math.sin(Math.PI/180*(" : "Math.sin(")
                .replace(/cos\(/g, isDegrees ? "Math.cos(Math.PI/180*(" : "Math.cos(")
                .replace(/tan\(/g, isDegrees ? "Math.tan(Math.PI/180*(" : "Math.tan(")
                .replace(/asin\(/g, "Math.asin(")
                .replace(/acos\(/g, "Math.acos(")
                .replace(/atan\(/g, "Math.atan(")
                .replace(/ln\(/g, "Math.log(")
                .replace(/log\(/g, "Math.log10(")
                .replace(/sqrt\(/g, "Math.sqrt(")
                .replace(/\^/g, "**")
                .replace(/fact\((\d+)\)/g, (_, n) => factorial(parseInt(n)));

            // Close any extra parens opened by degree conversion
            if (isDegrees) {
                const sinCosCount = (display.match(/sin\(|cos\(|tan\(/g) || []).length;
                expr += ")".repeat(sinCosCount);
            }

            // eslint-disable-next-line no-eval
            const result = eval(expr);
            setDisplay(String(result));
        } catch {
            setDisplay("Error");
        }
    };

    const factorial = (n) => {
        if (n < 0) return NaN;
        if (n === 0 || n === 1) return 1;
        let result = 1;
        for (let i = 2; i <= n; i++) result *= i;
        return result;
    };

    return (
        <>
            <div className="calculator">
                <input
                    type="text"
                    id="display"
                    value={display}
                    placeholder="0"
                    autoComplete="off"
                    readOnly
                    onChange={() => {}}
                />

                <div className="button-grid">
                    <button onClick={clearDisplay} className="operator">C</button>
                    <button onClick={deleteLast} className="operator">←</button>
                    <button onClick={() => appendValue("(")} className="operator">(</button>
                    <button onClick={() => appendValue(")")} className="operator">)</button>
                </div>

                <div className="button-grid">
                    <button onClick={() => appendValue("sin(")} className="function">sin</button>
                    <button onClick={() => appendValue("cos(")} className="function">cos</button>
                    <button onClick={() => appendValue("tan(")} className="function">tan</button>
                    <button onClick={() => appendValue("ln(")} className="function">ln</button>
                </div>

                <div className="button-grid">
                    <button onClick={() => appendValue("asin(")} className="function">sin⁻¹</button>
                    <button onClick={() => appendValue("acos(")} className="function">cos⁻¹</button>
                    <button onClick={() => appendValue("atan(")} className="function">tan⁻¹</button>
                    <button onClick={() => appendValue("log(")} className="function">log₁₀</button>
                </div>

                <div className="button-grid">
                    <button onClick={() => appendValue("sqrt(")} className="function">√</button>
                    <button onClick={() => appendValue("^")} className="function">^</button>
                    <button onClick={() => appendValue("PI")} className="function">π</button>
                    <button onClick={() => appendValue("E")} className="function">e</button>
                </div>

                <div className="button-grid">
                    <button onClick={() => appendValue("7")}>7</button>
                    <button onClick={() => appendValue("8")}>8</button>
                    <button onClick={() => appendValue("9")}>9</button>
                    <button onClick={() => appendValue("/")} className="operator">÷</button>
                </div>

                <div className="button-grid">
                    <button onClick={() => appendValue("4")}>4</button>
                    <button onClick={() => appendValue("5")}>5</button>
                    <button onClick={() => appendValue("6")}>6</button>
                    <button onClick={() => appendValue("*")} className="operator">×</button>
                </div>

                <div className="button-grid">
                    <button onClick={() => appendValue("1")}>1</button>
                    <button onClick={() => appendValue("2")}>2</button>
                    <button onClick={() => appendValue("3")}>3</button>
                    <button onClick={() => appendValue("-")} className="operator">-</button>
                </div>

                <div className="button-grid">
                    <button onClick={() => appendValue("0")} className="wide">0</button>
                    <button onClick={() => appendValue(".")}>.</button>
                    <button onClick={() => appendValue("+")} className="operator">+</button>
                </div>

                <div className="button-grid">
                    <button onClick={() => appendValue("fact(")} className="function">x!</button>
                    <button onClick={calculate} className="equals">=</button>
                    <button onClick={toggleMode} className="mode-toggle" id="modeBtn">
                        {isDegrees ? "Degrees" : "Radians"}
                    </button>
                </div>

                <div id="homenav">
                    <button onClick={() => navigate("/")}>← Home Page</button>
                </div>

                <div id="footer">
                    <p>&copy; 2026 Calculator App. Made by shirshadip</p>
                </div>
            </div>
        </>
    );
}

export default Scientific;