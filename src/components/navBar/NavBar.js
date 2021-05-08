import React, {useState, useContext} from 'react';
import './NavBar.css';
import {RiRefreshLine} from "react-icons/ri";
import {Link} from 'react-router-dom';
import {useAuth} from '../../context/AuthContext'
import {LocationContext} from "../../context/LocationContext";

function NavBar() {
    const {currentUser} = useAuth()
    const [checked, setChecked] = useState(false)
    const {refresh} = useContext(LocationContext)

    function handleClick() {
        setChecked(!checked)
    }

    return <div id="navbar">

        <label htmlFor="hamburger" className="hamburger-icon">&#9776;</label>

        <input type="checkbox"
               id="hamburger"
               checked={checked}
               onChange={() => {setChecked(!checked)}}
        />

        {checked && <div id="menu">
            <button type="button" className="exit" onClick={handleClick}>X</button>
            <Link to="/" className="menuClass">Home</Link>
            <Link to="/profile" className="menuClass">Settings</Link>
            <Link to="contact" className="menuClass">Contact</Link>
        </div>}

        <div>
            {currentUser && <p className="username">
                Hoi {currentUser && currentUser.displayName}
            </p>}
        </div>

        {!checked && <div id="menu-web">
            <Link to="/" className="menuClass">Home</Link>
            <Link to="/profile" className="menuClass">Settings</Link>
            <Link to="/contact" className="menuClass">Contact</Link>
        </div>}

        <button className="refresh-button" onClick={refresh}>
            <RiRefreshLine className="refresh"/>
        </button>
    </div>

}

export default NavBar