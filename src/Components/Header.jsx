import './Header.css'
import { Link } from "react-router-dom";



function Header(props) {

    return (

        <header>
            <Link className="user" to="/user"> User </Link>
            <u className="title"> {props.title}</u>
            <img className="logo" src="https://e7.pngegg.com/pngimages/696/110/png-clipart-logo-brand-line-art-doodles-miscellaneous-angle.png" alt="" />

        </header>
    )
}
export default Header;