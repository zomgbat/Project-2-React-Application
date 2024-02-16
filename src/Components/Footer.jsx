import './Footer.css'
import { Link } from "react-router-dom";

function Footer () {
    return (
        <div>
        <Link to="/"> Home </Link>
        <a className="footer1" href="https://github.com/zomgbat/Project-2-React-Application"> GitHub </a>
        <Link to="/custom-meal"> New Meal </Link>
        </div>
    )
}
export default Footer;