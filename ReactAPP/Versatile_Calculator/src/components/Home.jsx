import '../styles/home.css';
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();

    return (
        <>
            <div id="header">
                <header>
                    <h1>Versatile Calculator</h1>
                </header>
            </div>

            <div id="nav">
                <h2>Choose a calculator to get started</h2>
                <ul>
                    <li>
                        <a onClick={() => navigate("/basic")}>
                            <span style={{ display: 'flex', alignItems: 'center' ,cursor:'pointer'}}>
                                <span className="icon"></span>
                                Basic Calculator
                            </span>
                        </a>
                    </li>
                    <li>
                        <a onClick={() => navigate("/scientific")}>
                            <span style={{ display: 'flex', alignItems: 'center',cursor:'pointer' }}>
                                <span className="icon"></span>
                                Scientific Calculator
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href="physics.html">
                            <span>
                                <span className="icon"></span>

                                Physics
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href="unit.html">
                            <span>
                                <span className="icon"></span>

                                Unit converter
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href="p&c.html">
                            <span>
                                <span className="icon"></span>
                                Permutations and combinations

                            </span>
                        </a>
                    </li>
                    <li>
                        <a href="s&s.html">
                            <span>
                                <span className="icon"></span>
                                Sequence and Series
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href="feedback.html">
                            <span>
                                <span className="icon"></span>
                                Give a feedback to improve the website
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/shirshadip/Versatile_calculator" target="_blank">
                            <span>
                                <span className="icon"></span>
                                Explore The Source code on Github
                            </span>
                        </a>
                    </li>


                </ul>

            </div>

            <div id="footer">
                <p>&copy; 2026 Calculator App. Made by shirshadip</p>
            </div>
        </>
    )
}

export default Home;