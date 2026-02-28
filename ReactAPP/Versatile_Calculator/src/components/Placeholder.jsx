import '../styles/home.css'

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

            <div id="footer">
                <p>&copy; 2026 Calculator App. Made by Shirshadip</p>
            </div>
        </>
    )
}

export default Placeholder
