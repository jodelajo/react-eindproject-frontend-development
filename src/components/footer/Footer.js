import React from 'react';
import './Footer.css';
import { RiHome2Line, RiRefreshLine, RiArrowLeftLine } from "react-icons/ri";
import { Link } from 'react-router-dom';

function Footer(){
    return <div className="footer">
        <Link to="/friesland">
        <p className="icon" id="back-button"><RiArrowLeftLine/></p>
        </Link>
        <Link to="/">
        <p className="icon" id="home-button"><RiHome2Line/></p>
        </Link>
        <Link to="/location">
        <p className="icon"><RiRefreshLine/></p>
        </Link>
    </div>
}
export default Footer