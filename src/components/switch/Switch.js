import React from "react";
import './Switch.css'

const Switch = ({popup, togglePopup}) => {


    console.log(popup)


    function handleChecked() {

        togglePopup(!popup)
    }

    return <div className="switch-wrapper">
        <span className="season">Meer informatie?</span>
        <input
            type="checkbox"
            className="switch"
            id="metric-system"
            onChange={handleChecked}
        />

        <label
            htmlFor="metric-system"
            className="switch-btn"
        />
    </div>
}
export default Switch