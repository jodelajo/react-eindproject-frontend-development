import React, { useState} from "react";
import './Switch.css'

const Switch = ({popUp, togglePopUp, gifs, toggleGifs, Name}) => {
const[checked, toggleChecked] = useState(false)

    console.log('mob-slides', popUp)
    console.log('web-slides', gifs)
    console.log(checked)
    console.log(Name)


    function handleParentalStates() {
    if(Name === 'webSwitch') {
        toggleGifs(!gifs)
    }
    if(Name === 'mobSwitch'){
        togglePopUp(!popUp)
    }
    }

    function handleChecked() {
        toggleChecked(!checked)
        handleParentalStates()
    }

    return <div className="switch-wrapper">
        <span className="switch-text">Meer informatie?</span>
        <input
            type="checkbox"
            className="switch"
            id={Name}
            name={Name}
            checked={checked}
            onClick={handleChecked}
        />

        <label
            htmlFor={Name}
            className="switch-btn"
        />
    </div>
}
export default Switch