import '../styles/home.css'
import '../App.css'
function Placeholder({ title }) {
    return (
        <>
            <div id="header">
                <header>
                    <h1>{title}</h1>
                </header>
            </div>

            <div id="nav">
                <p>This is a placeholder page for {title}.</p>
            </div>

          
        </>
    )
}

export default Placeholder
