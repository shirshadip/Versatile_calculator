import { use, useState } from "react";
import { useNavigate } from "react-router-dom";
import { gravitationalforce ,convertgravitationalforce } from "../javascript/force";




function ElectricForce() {
  const navigate = useNavigate();

 
  //Gravitational variables 
  const [q1,setq1]=useState("");
  const [q2,setq2]=useState("");
  const [distance,setDistance]=useState("");
  const [electricresult,setResultofgrav]=useState(null);
  const [convertedCGS,setConvertedCGS]=useState(null);
  function showgravforce ()
{
  const result = gravitationalforce(mass1,mass2,distance);
  setResultofgrav(result);

}
function showgravforceincgs(){
  const result = convertgravitationalforce(mass1,mass2,distance);
  setConvertedCGS(result)
}
  

  return (
    <div>
      
      <div className="head">
          <h2>F = G.(m<sub>1</sub>m<sub>2</sub>)/r<sup>2</sup> 
          <br />
          Where G= 6.67430x10<sup>11</sup>m<sup>3</sup>kg<sup>-1</sup>s<sup>-2</sup></h2>
      </div>
      <div className="input">
        <p style={{color:'red'}}>Note: The inputs should be in SI Unit</p>
        <input
          type="number"
          className="number"
          placeholder="Enter the mass (m1)"
          value={q1}
          onChange={(e) => setq1(e.target.value)}
        />
        <input
          type="number"
          className="number"
          placeholder="Enter the mass (m2)"
          value={q2}
          onChange={(e) => setq2(e.target.value)}
        />

        <input
          type="number"
          className="number"
          placeholder="Enter the distance (r)"
          value={distance}
          onChange={(e) => setDistance(e.target.value)}
        />
        <button onClick={showgravforce}>Show result in SI</button>
        <div className="output">
          {gravresult !==null&&(
            <p>{gravresult} N</p>
          )}
          
        </div>
      <button onClick={showgravforceincgs}>convert into CGS</button>
      <div className="output">
        {convertedCGS !==null&&(
          <p>{convertedCGS} dyn</p>
        )}
      </div>

      </div>

    </div>
  );
}

export default ElectricForce;