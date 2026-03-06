import { useNavigate } from "react-router-dom";

export default function App() {
  const navigate = useNavigate();

  return (
    <div>
      <div id="header">
        <header>
          <h1>Physics Calculator</h1>
        </header>
      </div>

      <div id="nav">
        <h2>Choose a calculator to get started</h2>
        <ul>
          <li>
            <a onClick={() => navigate("/physics/force")} href="#">
              <span style={{ display: "flex", alignItems: "center" }}>
                <span className="icon"></span>
                Calculate Force
              </span>
            </a>
          </li>
          <li>
            <a onClick={()=>navigate("/physics/work-done")} href="#">
              <span style={{ display: "flex", alignItems: "center" }}>
                <span className="icon"></span>
                Calculate Work Done 
              </span>
            </a>
          </li>
          <li></li>
        </ul>
      </div>
    </div>
  );
}