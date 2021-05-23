import React from 'react'
import  './PopUpInfo.css'
import {RiStarLine} from "react-icons/all";
import firstInfo from '../../assets/gifs/first-info.gif'
import infoTwo from '../../assets/gifs/info-two.gif'
import Slider from 'react-slick'

import "./slick-theme.css";
import "./slick.css";



function PopUpInfo(){

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        // adaptiveHeight: true
    };

    return <div className="popup-wrapper">
        <h3>
            Klik op een regio of op <RiStarLine/>
        </h3>
        {/*<img className="first-gif" src={"https://media.giphy.com/media/RVmErCMMvnlpkzA5iC/giphy.gif"} alt="first gif"/>*/}



        <Slider {...settings}>
            <div>
                <img src={firstInfo} alt="frist gif" className="first-gif"/>
            </div>
            <div>
                <img src={infoTwo} alt="frist gif" className="first-gif"/>

            </div>
        </Slider>





    </div>
}
export default PopUpInfo