import { LOGO_URL } from "./util/constant"
import name from "./util/constant"

const Header = () => {
    return (
        <div className='header'>
            <div className="logoContainer">
                <img className='logo' src = {LOGO_URL}></img>
                <p>{name}</p>
            </div>
            <div className="navBar">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>cart</li>
                </ul>
            </div>

        </div>
    )
}

export default Header