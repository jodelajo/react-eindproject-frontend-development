/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react'
import './Slider.css'
import uitleg2 from "../../assets/gifs/uitleg2.gif";
import uitleg1 from "../../assets/gifs/uitleg1.gif";
import uitleg3 from "../../assets/gifs/uitleg3.gif"
import {RiArrowLeftLine, RiArrowRightLine} from "react-icons/ri";

function Slider() {
    const [currentSlide, setCurrentSlide] = useState(1)

    const slides = [

        {
            title: `Klik op een regio voor Top 5 locaties`,
            image: `${uitleg1}`
        },
        {
            title: 'Klik op een Booster voor extra punten voor zon, temperatuur en/of wind.',
            image: `${uitleg2}`
        },
        {
            title: 'Maak een account aan of log in.',
            image: `${uitleg3}`
        }
    ]

    const goToNext = () => {
        setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1)
    }

    const goToPrevious = () => {
        setCurrentSlide(currentSlide <= 0 ? 0 : currentSlide - 1)
    }

    useEffect(() => {
        setCurrentSlide(goToNext)
    }, [])

    useEffect(() => {
        setCurrentSlide(goToPrevious)
    }, [])

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }
    console.log('currentSlide?', currentSlide)

    return <div className="slider">
        <button type="button"
                className="slider-button"
                onClick={goToPrevious}
                disabled={currentSlide === 0}
        >
            <RiArrowLeftLine/>
        </button>
        {slides.map((slide, index) => (

            <div className={index === currentSlide ? "slide active" : "slide"} key={slide.title}>
                <div>
                    <h2>{slide.title}</h2>
                </div>
                {slide && (
                    <img className="gif" src={slide.image} alt="slider"/>
                )}
            </div>
        ))}
        <button
            type="button"
            className="slider-button"
            onClick={goToNext}>
            <RiArrowRightLine/>
        </button>
    </div>
}

export default Slider