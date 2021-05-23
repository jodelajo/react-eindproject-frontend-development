/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect} from 'react'
import './Slider.css'

function Slider( { slides } ) {
    const [currentSlide, setCurrentSlide] = useState(0)
    const { length } = slides

    const goToNext = () => {
        setCurrentSlide(currentSlide === length - 1 ? 0 : currentSlide + 1)
    }


    useEffect(() =>{
        setTimeout(() =>{
            setCurrentSlide(goToNext)
        })
    }, [])

    if(!Array.isArray(slides) || slides.lenght <= 0){
        return null;
    }

    return <div className="slider">
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
    </div>
}
export default Slider