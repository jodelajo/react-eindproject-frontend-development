import React from 'react'
import  './PopUpInfo.css'
import {RiStarLine} from "react-icons/all";
import firstInfo from '../../assets/gifs/first-info.mp4'

function PopUpInfo(){
    return <div className="popup-wrapper">
        <h3>
            Klik op een regio of op <RiStarLine/>
        </h3>
        {/*<img className="first-gif" src={"https://media.giphy.com/media/RVmErCMMvnlpkzA5iC/giphy.gif"} alt="first gif"/>*/}
        {/*<img src={firstInfo} alt="frist gif" />*/}
        <video  className="video" controls autoPlay>
            <source src={firstInfo} type="video/mp4"/>
        </video>
    </div>
}
export default PopUpInfo