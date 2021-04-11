import React from 'react';
import './Footer.css';
import {RiHome2Line, RiRefreshLine, RiArrowLeftLine, RiMenuFill} from "react-icons/ri";
import { Link } from 'react-router-dom';

function Footer(){
    return <div className="footer">
        <p className="icon" id="back-button"><RiArrowLeftLine/></p>
        <Link to="/">
        <p className="icon" id="home-button"><RiHome2Line/></p>
        </Link>
        <Link to="/bontebok">
        <p className="icon"><RiRefreshLine/></p>
        </Link>
    </div>
}
export default Footer