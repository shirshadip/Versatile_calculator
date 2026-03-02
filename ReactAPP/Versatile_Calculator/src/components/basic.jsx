import { useEffect, useRef } from "react";
import { Link } from 'react-router-dom';
import { appendValue, calculate, clearDisplay, deleteLast, init, initKeyboard } from "../javascript/basic.js";
import "../styles/basic.css";
import '../App.css'

function Basic() {
    const displayRef = useRef(null);

    useEffect(() => {
        init(displayRef.current);
        const cleanupKeyboard = initKeyboard();
        return () => {
            if (typeof cleanupKeyboard === 'function') cleanupKeyboard();
        };
    }, []);

    return (
        <>
            <div className="Calculator">
                <input
                    ref={displayRef}
                    type="text"
                    id="display"
                    placeholder="0"
                    autoComplete="off"
                    readOnly
                />

                <div className="button-row">
                    <button className="btn-clear" onClick={clearDisplay}>C</button>
                    <button className="btn-operator" onClick={() => appendValue("/")}>÷</button>
                    <button className="btn-operator" onClick={() => appendValue("*")}>×</button>
                    <button className="btn-delete" onClick={deleteLast}>←</button>
                </div>

                <div className="button-row">
                    <button onClick={() => appendValue("7")}>7</button>
                    <button onClick={() => appendValue("8")}>8</button>
                    <button onClick={() => appendValue("9")}>9</button>
                    <button className="btn-operator" onClick={() => appendValue("-")}>−</button>
                </div>

                <div className="button-row">
                    <button onClick={() => appendValue("4")}>4</button>
                    <button onClick={() => appendValue("5")}>5</button>
                    <button onClick={() => appendValue("6")}>6</button>
                    <button className="btn-operator" onClick={() => appendValue("+")}>+</button>
                </div>

                <div className="button-row">
                    <button onClick={() => appendValue("1")}>1</button>
                    <button onClick={() => appendValue("2")}>2</button>
                    <button onClick={() => appendValue("3")}>3</button>
                    <button className="btn-equals" onClick={calculate}>=</button>
                </div>

                <div className="button-row">
                    <button className="btn-zero" onClick={() => appendValue("0")}>0</button>
                    <button onClick={() => appendValue(".")}>.</button>
                </div>
            </div>

            <div className="navigation">
                <Link to="/" className="btn-home">🏠 Home Page</Link>
                <Link to="/scientific" className="btn-scientific">🔬 Scientific Calculator</Link>
            </div>

           
        </>
    );
}

export default Basic;