import React, {useContext} from 'react';
import './Footer.css';
import {RiHome2Line, RiStarLine, RiArrowLeftLine, RiGithubFill} from "react-icons/ri";
import {Link, useHistory} from 'react-router-dom';
import {LocationContext} from "../../context/LocationContext";

function Footer() {
    const history = useHistory()
    const {goBackHandler} = useContext(LocationContext)

    function onClickHandler() {
        goBackHandler()
        history.goBack()
    }

    return <>
        <div className="footer">
            <p className="icon" onClick={onClickHandler}><RiArrowLeftLine/></p>
            <Link to="/">
                <p className="icon" id="home-button" onClick={goBackHandler}><RiHome2Line/></p>
            </Link>
            <Link to="/friesland">
                <p className="icon" id="star-button" onClick={goBackHandler}><RiStarLine/></p>
            </Link>
        </div>
        <div className="footer-web" data-testid='footer-1'>
            <div>

            </div>
            <div>
                <p>girlPowered by jodelajo 2021</p>
                <a href="https://github.com/jodelajo">
                    <RiGithubFill/>
                </a>
            </div>
        </div>
    </>
}

export default Footer