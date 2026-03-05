import { use, useState } from "react";
import { useNavigate } from "react-router-dom";
import { gravitationalforce, convertgravitationalforce } from "./javascript/force";
import Fma from "./force/fma";
import Fgmmr2 from "./force/fgmmr2"




function ForceCalculator() {
  // const navigate = useNavigate();
  const [fma,setButton1]=useState(false);
  const [fgmmr2,setButton2]=useState(false);
  


  return (
    <div>
      <div className="head">Select the Expression to evaluate value</div>

      <div className="nav">
        <ul>
          <li>
            <a href="#fma" onClick={()=>setButton1(true)}>
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
            <a href="#fgmmr" onClick={()=>setButton2(true)}>
              <span>
                <span className="icon"></span>
                <p>F = Gm<sub>1</sub>m<sub>2</sub>/r<sup>2</sup> From Gravitation</p>
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



      {fma &&
      <Fma />
      }
      {fgmmr2 &&
      <Fgmmr2 />
      }
      {/* <button onClick={() => setButton1(false)}>Hide The Component F=ma</button> */}
      
        
        

      

      <div id="homenav">
        <button onClick={() => navigate("/")}>← Home Page</button>
      </div>
    </div>
  );
}

export default ForceCalculator;