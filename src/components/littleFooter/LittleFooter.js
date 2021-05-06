import React from 'react'
import {RiArrowLeftLine, RiHome2Line, RiStarLine} from "react-icons/ri";
import {Link, useHistory} from "react-router-dom";
import './LittleFooter.css'

function LittleFooter (){
    const history = useHistory()
    return <div className="little-footer">

        <p className="icon" onClick={()=> history.goBack()}><RiArrowLeftLine/></p>
        <Link to="/">
            <p className="icon" id="home-button"><RiHome2Line/></p>
        </Link>
        <Link to="/friesland">
            <p className="icon" id="star-button" ><RiStarLine /></p>
        </Link>
    </div>
}
export default LittleFooter