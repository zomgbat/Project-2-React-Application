import './Header.css'
import { Link } from "react-router-dom";



function Header(props) {



    return (

        <header>
            <u className="propsTitle"> {props.title}</u>
            <img className="logo" src="src\images\logo.jpg" alt="Fish Photo" />
            <Link className="profileLink" to="/user"> Your Profile </Link>

        </header>
    )
}
export default Header;