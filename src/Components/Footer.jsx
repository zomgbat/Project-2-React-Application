import '../styles/Footer.css'
import { NavLink } from "react-router-dom";

function Footer () {
    return (
        <div className='footer'>
        <NavLink className='home' to="/"> <img src="./src/assets/logowhite.png" alt="img" /> </NavLink>
        <a className='nav' href="https://github.com/zomgbat/Project-2-React-Application"> GitHub </a>
        <NavLink className='nav' to="/custom-meal"> New Meal </NavLink>
        <NavLink className='nav' to="/info">+Info</NavLink>
        </div>
    )
}
export default Footer;