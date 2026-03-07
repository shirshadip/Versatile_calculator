import { useState } from "react";
import { wfs,convert_FS_in_CGS,convert_FS_in_SI } from "../javascript/workdone";
import { useNavigate } from "react-router-dom";

function Wfs() {

    const navigate = useNavigate();

    // Input states
    const [F, setF] = useState("");
    const [S, setS] = useState("");
    const [result, setResult]=useState(null);
    const [converted,convertedResult]=useState(null);
    function calculateFS(){
        const FS=Wfs(F,S);
        setResult(FS);


    }
    function calculateincgs(){
        const FS=convert_FS_in_CGS(F,S);
         convertedResult(FS);
    }function calculateinsi() {
        const FS=convert_FS_in_SI(F,S);
        convertedResult(FS);
    }


    return (
        <div>

            <div className="head">
                W = F.s
            </div>

            <div className="input">

                <input
                    type="number"
                    className="number"
                    value={F}
                    onChange={(e) => setF(e.target.value)}
                    placeholder="enter the value of Force(F)"
                />

                <input
                    type="number"
                    className="number"
                    value={S}
                    onChange={(e) => setS(e.target.value)}
                    placeholder="enter the value of displacement(s)"
                />

                <button onClick={calculateFS}>
                    Show result
                </button>

                <div className="output">
                    {result !== null && (
                        <p>{result}</p>
                    )}
                </div>

                {result !== null &&
                    <div>
                        <button onClick={calculateinsi}>
                            Convert in SI
                        </button>

                        <button onClick={calculateincgs}>
                            Convert in CGS
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