import './Header.css'
import { Link } from "react-router-dom";


function Header() {

    return (
        <div>
        <h3>   App. Name   </h3>
        <Link to="/user"> Your Profile! </Link>
        <img className="logo" src="src\assets\logo.jpg" alt="Fish Photo" />
        </div>
    )
}
export default Header;