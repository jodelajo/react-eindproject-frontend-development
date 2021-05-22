import React from 'react'
import  './PopUpInfo.css'
import {RiStarLine} from "react-icons/all";

function PopUpInfo(){
    return <div className="popup-wrapper">
        <h1>
            Klik op een regio of op <RiStarLine/>
        </h1>
        <img className="first-gif" src={"https://media.giphy.com/media/RVmErCMMvnlpkzA5iC/giphy.gif"} alt="first gif"/>

    </div>
}
export default PopUpInfo