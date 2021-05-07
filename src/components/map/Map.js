import React from 'react'
import './Map.css'
import {Link} from "react-router-dom";
import wadden from "../../assets/plattegrond/wadden_roze.png";
import noordwest from "../../assets/plattegrond/noordwest_roze.png";
import noordoost from "../../assets/plattegrond/noordoost_roze.png";
import zuidwest from "../../assets/plattegrond/zuidwest_roze.png";
import zuidoost from "../../assets/plattegrond/zuidoost_roze.png";

function Map(){
    return <div className="map">
        <Link to="/wadden">
            <img src={wadden} id="wadden" alt="wadden"/>
        </Link>
        <Link to="/noordwest">
            <img src={noordwest} id="noordwest" alt="noordwest"/>
        </Link>
        <Link to="/noordoost">
            <img src={noordoost} id="noordoost" alt="noordoost"/>
        </Link>
        <Link to="/zuidwest">
            <img src={zuidwest} id="zuidwest" alt="zuidwest"/>
        </Link>
        <Link to="/zuidoost">
            <img src={zuidoost} id="zuidoost" alt="zuidoost"/>
        </Link>
    </div>
}
export default Map