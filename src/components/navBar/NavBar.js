import React from 'react';
import './NavBar.css';
import { RiMenuFill} from "react-icons/ri";
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext'


function NavBar(){
    const { currentUser } = useAuth()
    return <div className="navbar">
        <Link to="/dashboard">
            <div>
                <RiMenuFill className="hamburger"/>
            </div>
        </Link>
                <div >
                <p className="username">hoi {currentUser.displayName}
                </p>
            </div>

    </div>
}
export default NavBar