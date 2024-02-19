import './Header.css'
import { Link } from "react-router-dom";



function Header(props) {

    return (

        <header>
            <Link className="user" to="/user"> User </Link>
            <u className="title"> {props.title}</u>
           


            <Link to="/about" className="logo">
  <img src="src/assets/logotomato.png" alt="Tomato Photo" />
  </Link>

        </header>
    )
}
export default Header;