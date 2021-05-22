import React, {useState} from 'react'
import PopUpInfo from "../popUpInfo/PopUpInfo";
import Switch from "../switch/Switch";
import './MorInfo.css'

function MoreInfo(){
const [popUp, togglePopUp] = useState(false)


    return <div className="more-info-wrapper">
        {popUp && <div className="popup-more-info"> <PopUpInfo/>
        </div>}

        <Switch
            popup={popUp}
            togglePopup={togglePopUp}
        />
    </div>
};
export default MoreInfo