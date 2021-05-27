import React from 'react';
import './Header.css';
import {useAuth} from "../../context/AuthContext";
import SignUpLogInLink from "../signUpLogInLink/SignUpLogInLink";
import screenshot_app from "../../assets/images/screenshot_app2.png";

function Header() {
    const {currentUser} = useAuth()
    return <div className="header">
        <div className="title-map">
            <h1 className="title">It bêste plakje fan Fryslân</h1>
            <img src={screenshot_app} alt="screenshot" className="screenshot"/>

        </div>
        {!currentUser &&
        <SignUpLogInLink/>
        }
    </div>
}

export default Header