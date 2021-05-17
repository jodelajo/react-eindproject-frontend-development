import React from "react";
import './Switch.css'

function Switch(){
    return <div className="switch-wrapper">
         <input
                type="checkbox"
                className="switch"
                id="metric-system"
                // value={switchButton}
                // checked={switchButton}
                // disabled={checkedClouds}
                // onClick={handleSubmit}
            />

        <label
            htmlFor="metric-system"
            className="switch-btn"
        />

    </div>
}
export default Switch