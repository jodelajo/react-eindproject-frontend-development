import React, {useState} from 'react';
import Switch from "../switch/Switch";
import Slider from "../slider/Slider";

function MoreInfo() {
    const [popUp, togglePopUp] = useState(false)

    return <div className="more-info-wrapper">
        {popUp && <div className="popup-more-info"><Slider/>
        </div>}
        <Switch
            popUp={popUp}
            togglePopUp={togglePopUp}
            Name='mobSwitch'
        />
    </div>
}

export default MoreInfo