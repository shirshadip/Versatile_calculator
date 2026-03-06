import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Wfs() {

    const navigate = useNavigate();

    // Input states
    const [input1, setInput1] = useState("");
    const [input2, setInput2] = useState("");

    // Output states
    const [result, setResult] = useState(null);
    const [convertedResult, setConvertedResult] = useState("");

    // Main calculation
    const calculate = () => {
        const a = Number(input1);
        const b = Number(input2);

        if (isNaN(a) || isNaN(b)) {
            setResult("Enter valid numbers");
            return;
        }

        const value = a * b; // Replace with required formula
        setResult(value);
        setConvertedResult("");
    };

    // Conversion 1
    const convertOne = () => {
        if (typeof result === "number") {
            const converted = result / 100000; // Replace logic
            setConvertedResult(converted);
        }
    };

    // Conversion 2
    const convertTwo = () => {
        if (typeof result === "number") {
            const converted = result * 100000; // Replace logic
            setConvertedResult(converted);
        }
    };

    return (
        <div>

            <div className="head">
                Calculator
            </div>

            <div className="input">

                <input
                    type="number"
                    className="number"
                    value={input1}
                    onChange={(e) => setInput1(e.target.value)}
                />

                <input
                    type="number"
                    className="number"
                    value={input2}
                    onChange={(e) => setInput2(e.target.value)}
                />

                <button onClick={calculate}>
                    Show result
                </button>

                <div className="output">
                    {result !== null && (
                        <p>{result}</p>
                    )}
                </div>

                {result !== null &&
                    <div>
                        <button onClick={convertOne}>
                            Convert 1
                        </button>

                        <button onClick={convertTwo}>
                            Convert 2
                        </button>
                    </div>
                }

                <div className="output">
                    {convertedResult && (
                        <p>{convertedResult}</p>
                    )}
                </div>

            </div>

        </div>
    );
}

export default Wfs;