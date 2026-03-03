import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ForceCalculator() {
  const navigate = useNavigate();

  const [mass, setMass] = useState("");
  const [acceleration, setAcceleration] = useState("");
  const [result, setResult] = useState(null);
  const [converteButton, setButton] = useState(false);
  const [convertedresult, setConverted] = useState("");

  function showForce() {
    const m = Number(mass);
    const a = Number(acceleration);

    if (isNaN(m) || isNaN(a)) {
      setResult("Enter valid numbers");
      return;
    }

    const force = m * a;
    
    setResult(force);
    setButton(true);
    return force;

  }
  function convertSI() {
    const ForceEvaluated = showForce();
    const converted = ForceEvaluated / 100000;
    
    setConverted(converted+"N");

  }
  function convertCGS() {
    const ForceEvaluated = showForce();
    const converted = ForceEvaluated * 100000;
    setConverted(converted +"dyne");
  }

  return (
    <div>
      <div className="head">Select the Expression to evaluate value</div>

      <div className="nav">
        <ul>
          <li>
            <a href="#fma">
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

      <div className="head" id="fma">
        For F = ma
      </div>

      <div className="input">
        <input
          type="number"
          className="number"
          placeholder="Enter the mass (m)"
          value={mass}
          onChange={(e) => setMass(e.target.value)}
        />

        <input
          type="number"
          className="number"
          placeholder="Enter the acceleration (a)"
          value={acceleration}
          onChange={(e) => setAcceleration(e.target.value)}
        />

        <h3>Note: put 9.8 instead of a to calculate F = mg</h3>

        <button onClick={showForce}>Show result</button>

        <div className="output">
          {result !== null && (
            <p>
              F = {mass} × {acceleration} = {result} Newton
            </p>
          )}
        </div>
        {converteButton &&
          <div><button onClick={convertSI}>
            convert into SI
          </button>
            <button onClick={convertCGS}>
              convert into CGS
            </button></div>}
        <div className="output">
          {convertedresult !== null && (
            <p>{convertedresult}</p>
          )}
        </div>
      </div>

      <div id="homenav">
        <button onClick={() => navigate("/")}>← Home Page</button>
      </div>
    </div>
  );
}

export default ForceCalculator;