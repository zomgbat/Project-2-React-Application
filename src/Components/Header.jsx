import './Header.css'
import { Link } from "react-router-dom";



function Header(props) {

    return (

        <header>
            <Link className="user" to="/user"> User </Link>
            <u className="title"> {props.title}</u>
            <img className="logo" src="src/assets/logotomato.png" alt="" />
        </header>
    )
}
export default Header;