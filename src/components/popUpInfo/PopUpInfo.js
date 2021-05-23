import React from 'react'
// import  './PopUpInfo.css'
import firstInfo from '../../assets/gifs/first-info.gif'
import infoTwo from '../../assets/gifs/info-two.gif'
import Slider from "../slider/Slider";
// import defaultSlides from '../slider/defaultSlides'



function PopUpInfo(){
const defaultSlides = [
    {
        title: 'Klik op een booster',
        image: infoTwo
    },
    {
        title: 'Klik op een regio',
        image: firstInfo
    }
]


    return <div className="popup-wrapper">
        {/*<h3>*/}
        {/*    Klik op een regio of op <RiStarLine/>*/}
        {/*</h3>*/}
        {/*<img className="first-gif" src={"https://media.giphy.com/media/RVmErCMMvnlpkzA5iC/giphy.gif"} alt="first gif"/>*/}


        <Slider slides={defaultSlides} />

            {/*<div>*/}
            {/*    <img src={firstInfo} alt="frist gif" className="first-gif"/>*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    <img src={infoTwo} alt="frist gif" className="first-gif"/>*/}

            {/*</div>*/}






    </div>
}
export default PopUpInfo