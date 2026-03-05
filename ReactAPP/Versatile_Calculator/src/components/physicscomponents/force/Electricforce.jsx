import { use, useState } from "react";
import { useNavigate } from "react-router-dom";
import { electricforce, convertelectricforce } from "../javascript/force";




export function ElectricForce() {
  // const navigate = useNavigate();


  //Electric variables 
  const [q1, setq1] = useState("");
  const [q2, setq2] = useState("");
  const [distance, setDistance] = useState("");
  const [electricresult, setResultofElectricforce] = useState(null);
  const [convertedCGS, setConvertedCGS] = useState(null);
  function showgravforce() {
    const result = electricforce(q1, q2, distance);
    setResultofElectricforce(result);

  }
  function showelectricforceincgs() {
    const result = convertelectricforce(q1, q2, distance);
    setConvertedCGS(result)
  }


  return (
    <div>

      <div className="head" id="ElectricForce">
        <h2>F = (1 / (4πε<sub>0</sub>)) × (q<sub>1</sub> q<sub>2</sub> / r<sup>2</sup>)
          <br />
          Where (1 / (4πε<sub>0</sub>))= 10<sup>9</sup>N.m<sup>2</sup>.C<sup>-2</sup></h2>
      </div>
      <div className="input">
        <p style={{color:'red'}}>
          This F = (1 / (4πε<sub>0</sub>)) × (q<sub>1</sub> q<sub>2</sub> / r<sup>2</sup>) Should be input as SI unit
        </p>
        <input
          type="number"
          className="number"
          placeholder="Enter the charge (q1)C"
          value={q1}
          onChange={(e) => setq1(e.target.value)}
        />
        <input
          type="number"
          className="number"
          placeholder="Enter the charge (q2)C"
          value={q2}
          onChange={(e) => setq2(e.target.value)}
        />

        <input
          type="number"
          className="number"
          placeholder="Enter the distance (r)m"
          value={distance}
          onChange={(e) => setDistance(e.target.value)}
        />
        <button onClick={showgravforce}>Show result in SI</button>
        <div className="output">
          {electricresult !== null && (
            <p>{electricresult} C</p>
          )}

        </div>
        <button onClick={showelectricforceincgs}>convert into CGS</button>
        <div className="output">
          {convertedCGS !== null && (
            <p>{convertedCGS} esu</p>
          )}
        </div>

      </div>

    </div>
  );
}

export default ElectricForce;