import { LOGO_URL } from "./util/constant"
import name from "./util/constant"
import {Link} from 'react-router-dom'
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className='header'>
            <div className="logoContainer">
                <img className='logo' src = {LOGO_URL}></img>
                <p>{name}</p>
            </div>
            <div className="navBar">
                <ul className="headerNav">
                    <li><Link to='/'>Home</Link></li>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                    <li><Link to='/cart'>Cart</Link></li>
                    <li><Link to='/contact'>Contact Us</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Header