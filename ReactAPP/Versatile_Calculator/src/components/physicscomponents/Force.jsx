import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { gravitationalforce, convertgravitationalforce } from "./javascript/force";
import Scientific from "../scientific";
import ElectricForce from "./force/Electricforce";
import Fgmmr2 from "./force/fgmmr2";
import Fma from "./force/fma";




function ForceCalculator() {
  const navigate = useNavigate();
  const [fma, setButton1] = useState(false);
  const [fgmmr2, setButton2] = useState(false);
  const [Eforce, setButton3] = useState(false);


  // scientific calculator 
  const [sciencalc, Setcalc] = useState(false);


  return (
    <div>
      <div className="head">Select the Expression to evaluate value</div>

      <div className="nav">
        <ul>
          <li>
            <a href="#fma" onClick={() => setButton1(true)}>
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
            <a href="#fgmmr" onClick={() => setButton2(true)}>
              <span>
                <span className="icon"></span>
                <p>F = Gm<sub>1</sub>m<sub>2</sub>/r<sup>2</sup> From Gravitation</p>
              </span>
            </a>
          </li>

          <li>
            <a href="#ElectricForce" onClick={() => setButton3(true)}>
              <span>
                <span className="icon"></span>
                <p>
                  F = (1 / (4πε<sub>0</sub>)) × (q<sub>1</sub> q<sub>2</sub> / r<sup>2</sup>)
                </p>
              </span>
            </a>
          </li>
        </ul>
      </div>



      {fma &&
        <Fma />
      }
      {fgmmr2 &&
        <Fgmmr2 />
      }
      {Eforce &&
        <ElectricForce />
      }
      {
        sciencalc &&
        <Scientific />
      }
      {/* <button onClick={() => setButton1(false)}>Hide The Component F=ma</button> */}






      <div id="homenav">
        <button onClick={() => navigate("/")}>← Home Page</button>
      </div>
      {sciencalc ? (
        <button onClick={() => Setcalc(false)}>Hide Calculator</button>
      ) : (
        <button onClick={() => Setcalc(true)}>Want to use a scientific calculator??</button>
      )}


    </div>

  );
}

export default ForceCalculator;