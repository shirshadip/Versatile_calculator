import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Scientific from "../scientific";
import Wfs from "./workdone/wfs";

function Workdone() {

  const navigate = useNavigate();

  const [showwfs, setShowwfs] = useState(false);
  // const [showFgmmr2, setShowFgmmr2] = useState(false);
  // const [showElectricForce, setShowElectricForce] = useState(false);
  const [showScientific, setShowScientific] = useState(false);

  return (
    <div>

      <div className="head">
        Select the Expression to evaluate value
      </div>

      <div className="nav">
        <ul>

          <li>
            <a href="#fma" onClick={() => setShowwfs(true)}>
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

      {showwfs && <Wfs />}
      {/* {showFgmmr2 && <Fgmmr2 />}
      {showElectricForce && <ElectricForce />}
      {showScientific && <Scientific />} */}

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