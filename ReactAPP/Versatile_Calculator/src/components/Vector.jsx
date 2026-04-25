import { useState } from "react";
import Scientific from "./scientific";
import { useNavigate } from "react-router-dom";
import '../App.css'



export default function Vector() {
const navigate = useNavigate();
const [sciencalc, Setcalc] = useState(false);

    return(<>
        
        <div className="head">
            Calculate dot product 
        </div>
        <div className="input">
            <p>Formula:<strong>a.b=abcos(θ)</strong></p>
            {/* <input type="text" classname="number" placeholder="Enter a" /> */}
        </div>

        {
                sciencalc &&
                <Scientific />
            }
            {sciencalc ? (
                <button onClick={() => Setcalc(false)}>Hide Calculator</button>
            ) : (
                <button onClick={() => Setcalc(true)}>Want to use a scientific calculator??</button>
            )}
        
        </>);
}