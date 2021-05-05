import React from 'react';
import './Footer.css';
import { RiHome2Line,RiStarLine, RiArrowLeftLine } from "react-icons/ri";
import { Link, useHistory } from 'react-router-dom';

function Footer(){
    const history = useHistory()
    return <div className="footer">
        <p className="icon" onClick={()=> history.goBack()}><RiArrowLeftLine/></p>
        <Link to="/">
        <p className="icon" id="home-button"><RiHome2Line/></p>
        </Link>
        <Link to="/friesland">
        <p className="icon" id="star-button" ><RiStarLine /></p>
        </Link>
    </div>
}
export default Footer