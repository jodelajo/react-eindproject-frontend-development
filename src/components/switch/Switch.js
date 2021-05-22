import React from "react";
import './Switch.css'

const Switch = ({popup, togglePopup}) => {


    console.log(popup)


    function handleChecked() {

        togglePopup(!popup)
    }

    return <div className="switch-wrapper">
        <span className="switch-text">Meer informatie?</span>
        <input
            type="checkbox"
            className="switch"
            id="more-info"
            onChange={handleChecked}
        />

        <label
            htmlFor="more-info"
            className="switch-btn"
        />
    </div>
}
export default Switch