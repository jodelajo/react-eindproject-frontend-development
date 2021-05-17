import React, {useContext} from 'react'
import {RiArrowLeftLine, RiHome2Line, RiStarLine} from "react-icons/ri";
import {Link, useHistory} from "react-router-dom";
import './LittleFooter.css'
import {LocationContext} from "../../context/LocationContext";


function LittleFooter() {
    const {goBackHandler} = useContext(LocationContext)

    const history = useHistory()

    function onClickHandler() {
        goBackHandler()
        history.goBack()
    }

    return <>

        <div className="little-footer">

            <p className="icon" onClick={onClickHandler}><RiArrowLeftLine/></p>
            <Link to="/">
                <p className="icon" id="home-button" onClick={goBackHandler}><RiHome2Line/></p>
            </Link>
            <Link to="/friesland">
                <p className="icon" id="star-button" onClick={goBackHandler}><RiStarLine/></p>
            </Link>
        </div>
    </>
}

export default LittleFooter