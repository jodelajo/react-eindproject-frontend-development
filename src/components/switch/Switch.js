import React, { useState} from "react";
import './Switch.css'

const Switch = () => {
    const [checked, toggleChecked] = useState(true)

    function handleChecked() {
        toggleChecked(!checked)
    }
    //
    // useEffect(() => {
    //         toggleSeason();
    // }, [checked])
    // console.log('checked?', checked)

    return <div className="switch-wrapper">
        <span className="season">ZOMER</span>
        <input
            type="checkbox"
            className="switch"
            id="metric-system"
            value={!checked}

            defaultChecked={!checked}
            // disabled={checkedClouds}
            onChange={handleChecked}
        />

        <label
            htmlFor="metric-system"
            className="switch-btn"
        />
        <span className="season">WINTER</span>
    </div>
}
export default Switch