
import "./header.css"

export const Header = ({ handleNavBarWidth }) => {
    return (
        <div className="header">
            <div className="logoHeader">
                <span className="hacked">GN</span>
                <p>Gabriel Nardone</p>
            </div>
            <h1>SUCCESS IS DIGITAL!</h1>
            <button onClick={handleNavBarWidth}><i className="fa-solid fa-bars"></i></button>
        </div>
    )
}
