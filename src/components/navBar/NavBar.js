import React from 'react';
import './NavBar.css';
import {RiRefreshLine, RiSettings5Line} from "react-icons/ri";
import {Link} from 'react-router-dom';
import {useAuth} from '../../context/AuthContext'


function NavBar() {
    const {currentUser} = useAuth()

    return <div className="navbar">
        <Link to="/profile">
                <RiSettings5Line className="settings"/>
        </Link>
        <div>
            {currentUser ? <p className="username">
                Hoi {currentUser && currentUser.displayName}
            </p> : <p></p>}
        </div>
        <Link to="/">
            <RiRefreshLine className="refresh"/>
        </Link>

    </div>
}

export default NavBar