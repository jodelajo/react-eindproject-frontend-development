import React, {useState} from 'react'
import Switch from "../switch/Switch";
import './MoreInfo.css'
import Slider from "../slider/Slider";

function MoreInfo() {
    const [popUp, togglePopUp] = useState(false)

    console.log(popUp)
    return <div className="more-info-wrapper">
        {popUp && <div className="popup-more-info"><Slider/>
        </div>}
        <div className="switch-bar">
            <Switch
                popUp={popUp}
                togglePopUp={togglePopUp}
                Name='mobSwitch'
            />
        </div>

    </div>
};
export default MoreInfo