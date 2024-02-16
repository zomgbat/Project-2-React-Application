import './Footer.css'
import { Link } from "react-router-dom";

function Footer () {
    return (
        <div>
        <Link to="/"> Back to Dash! </Link>
        <a className="footer1" href="https://github.com/zomgbat/Project-2-React-Application"> Link to the GitHub Repo.! </a>
        <Link to="/custom-meal"> Custom Meal Creator! </Link>
        </div>
    )
}
export default Footer;