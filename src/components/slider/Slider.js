/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect} from 'react'
import './Slider.css'
import infoTwo from "../../assets/gifs/info-two.gif";
import firstInfo from "../../assets/gifs/first-info.gif";

import {RiArrowLeftLine, RiArrowRightLine} from "react-icons/ri";

function Slider(  ) {
    const [currentSlide, setCurrentSlide] = useState(1)
    // const { length } = slides


    const slides = [

        {
            title: 'Klik op een regio',
            image: firstInfo
        },
        {
            title: 'Klik op een booster',
            image: infoTwo
        }
    ]

    const goToNext = () => {
        setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1)
    }

    const goToPrevious = () => {
        setCurrentSlide(currentSlide <= 0 ? 0 : currentSlide - 1)
    }

    useEffect(() =>{
            setCurrentSlide(goToNext)
    }, [])

    useEffect(() =>{
        setCurrentSlide(goToPrevious)
    }, [])

    if(!Array.isArray(slides) || slides.length <= 0){
        return null;
    }
    console.log('currentSlide?', currentSlide)

    return <div className="slider">
        <button type="button" className="slider-button" onClick={goToPrevious}><RiArrowLeftLine/></button>
        {slides.map((slide, index) =>(

            <div  className={index === currentSlide ? "slide active" : "slide"} key={slide.title}>
                <div>
                    <h2>{slide.title}</h2>
                </div>
                {slide &&(
                    <img className="gif" src={slide.image} alt="slider"/>
                )}
            </div>
        ))}
        <button type="button" className="slider-button" onClick={goToNext}><RiArrowRightLine/></button>
    </div>
}
export default Slider