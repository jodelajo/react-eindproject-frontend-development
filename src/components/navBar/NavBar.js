import React from 'react';
import './NavBar.css';
import { RiMenuFill} from "react-icons/ri";
import { Link } from 'react-router-dom';


function NavBar(){
    return <div className="navbar">
        <Link to="/dashboard">
        <p className="hamburger"><RiMenuFill/></p>
        </Link>
    </div>
}
export default NavBar