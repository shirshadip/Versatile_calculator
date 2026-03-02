import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import "/App.css"

export default function Force() {
  const navigate = useNavigate();
  const [mass, setMass] = useState("");
  const [acceleration, setAcceleration] = useState("");
  const [siResult, setSiResult] = useState("");
  const [cgsResult, setCgsResult] = useState("");

  const getValues = () => {
    const m = Number(mass);
    const a = acceleration === "g" ? 9.8 : Number(acceleration);
    return { m, a };
  };

  const showfmaSI = () => {
    const { m, a } = getValues();
    const result = m * a;
    setSiResult(`F=${m}x${a} is => ${result} Newton`);
  };

  const showfmaCGS = () => {
    const m = Number(mass);
    const a = acceleration === "g" ? 980 : Number(acceleration);
    const result = m * a;
    setCgsResult(`F=${m}x${a} is => ${result} Dyne`);
  };

  return (
    <div>
      <div className="head">Select the Expression to evaluate value</div>

      <div className="nav">
        <ul>
          <li>
            <a href="#f=ma">
              <span>
                <span className="icon"></span>
                <p>
                  F = m.a According to Newton's Second Law (to evaluate F = mg
                  put 9.8(SI) or 980(CGS) for a)
                </p>
              </span>
            </a>
          </li>
          <li>
            <a href="#">
              <span>
                <span className="icon"></span>
                F = -kx From Spring's Force
              </span>
            </a>
          </li>
          <li>
            <a href="#">
              <span>
                <span className="icon"></span>
                F = G(m₁m₂/r²) from universal Gravitational Law
              </span>
            </a>
          </li>
        </ul>
      </div>

      <div className="head" id="f=ma">
        For F = ma
      </div>

      <div className="input">
        <input
          type="text"
          className="number"
          id="m1"
          placeholder="Enter the mass (m)"
          value={mass}
          onChange={(e) => setMass(e.target.value)}
        />
        <input
          type="text"
          className="number"
          id="a1"
          placeholder="Enter the acceleration (a)"
          value={acceleration}
          onChange={(e) => setAcceleration(e.target.value)}
        />
        <h3>Note: put g instead of a to calculate the force for F = mg</h3>

        <button onClick={showfmaSI}>Get output in SI</button>
        <pre>   </pre>
        <button onClick={showfmaCGS}>Get output in CGS</button>

        {siResult && (
          <div className="output" id="displayfmaSI">
            <p>{siResult}</p>
          </div>
        )}
        {cgsResult && (
          <div className="output" id="displayfmaCGS">
            <p>{cgsResult}</p>
          </div>
        )}
      </div>

      <div id="homenav">
        <button onClick={() => navigate("/")}>← Home Page</button>
      </div>
    </div>
  );
}