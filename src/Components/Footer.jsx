import './Footer.css'
import { Link } from "react-router-dom";

function Footer () {
    return (
        <div className='footer'>
        <Link className='footerHome' to="/"> Home </Link>
        <a className='footerGit' href="https://github.com/zomgbat/Project-2-React-Application"> GitHub </a>
        <Link className='footerNew' to="/custom-meal"> New Meal </Link>
        <Link className="infoButton" to="/info">Info Page!</Link>

        </div>
    )
}
export default Footer;