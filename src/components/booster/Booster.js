import React, {useState}  from 'react'
import './Booster.css'



function Booster(){
    const [checked, toggleChecked] = useState(false);

    return (
        <div className="switch-wrapper">

        <input
            type="checkbox"
            className="switch"
            id="metric-system"
            checked={checked}
            onClick={() => toggleChecked(!checked)}
        />

        <label
            htmlFor="metric-system"
            className="switch-btn"
        />

        </div>
    );
};
export default Booster