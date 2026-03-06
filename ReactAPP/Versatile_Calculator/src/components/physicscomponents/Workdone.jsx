import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Scientific from "../scientific";
import ElectricForce from "./force/Electricforce";
import Fgmmr2 from "./force/fgmmr2";
import Fma from "./force/fma";

function Workdone() {

  const navigate = useNavigate();

  const [showFma, setShowFma] = useState(false);
  const [showFgmmr2, setShowFgmmr2] = useState(false);
  const [showElectricForce, setShowElectricForce] = useState(false);
  const [showScientific, setShowScientific] = useState(false);

  return (
    <div>

      <div className="head">
        Select the Expression to evaluate value
      </div>

      <div className="nav">
        <ul>

          <li>
            <a href="#fma" onClick={() => setShowFma(true)}>
              <span>
                <span className="icon"></span>
                <p>W = F.S</p>
              </span>
            </a>
          </li>

          <li>
            <a href="#fgmmr" onClick={() => setShowFgmmr2(true)}>
              <span>
                <span className="icon"></span>
                <p></p>
              </span>
            </a>
          </li>

          <li>
            <a href="#ElectricForce" onClick={() => setShowElectricForce(true)}>
              <span>
                <span className="icon"></span>
                <p>Electric Force</p>
              </span>
            </a>
          </li>

        </ul>
      </div>

      {showFma && <Fma />}
      {showFgmmr2 && <Fgmmr2 />}
      {showElectricForce && <ElectricForce />}
      {showScientific && <Scientific />}

      <div id="homenav">
        <button onClick={() => navigate("/")}>
          ← Home Page
        </button>
      </div>

      {showScientific ? (
        <button onClick={() => setShowScientific(false)}>
          Hide Calculator
        </button>
      ) : (
        <button onClick={() => setShowScientific(true)}>
          Scientific Calculator
        </button>
      )}

    </div>
  );
}

export default Workdone;