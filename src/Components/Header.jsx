import './Header.css'
import { Link } from "react-router-dom";



function Header(props) {

    return (

        <header>
            <Link className="user" to="/user"> <img src="./src/assets/userLogo.png" alt="" /> </Link>
            <u className="title"> {props.title}</u>
            <Link to="/about" >
                <img className="logo" src="src/assets/logotomato.png" alt="Tomato Photo" />
            </Link>

        </header>
    )
}
export default Header;