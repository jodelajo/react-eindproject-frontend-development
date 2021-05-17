import React, {useState, useContext} from 'react'
import './BoosterMobile.css'
import {RiSunLine, RiTempHotLine, RiWindyLine} from "react-icons/ri";
import {LocationContext} from "../../context/LocationContext";

function BoosterMobile() {
    const {boosterCloud, boosterTemp, boosterWind} = useContext(LocationContext)
    const [checkedClouds, toggleCheckedClouds] = useState(false);
    const [checkedTemp, toggleCheckedTemp] = useState(false);
    const [checkedWind, toggleCheckedWind] = useState(false);

    function handleSwitchClouds() {
        if (!checkedClouds) {
            toggleCheckedClouds(true)
            boosterCloud()
        }
        if (checkedClouds) {
            toggleCheckedClouds(false)
            boosterCloud()
        }
    }

    function handleSwitchTemp() {
        if (!checkedTemp) {
            toggleCheckedTemp(true)
            boosterTemp()
        }
        if (checkedTemp) {
            toggleCheckedTemp(false)
            boosterTemp()
        }
    }

    function handleSwitchWind() {
        if (!checkedWind) {
            toggleCheckedWind(true)
            boosterWind()
        }
        if (checkedWind) {
            toggleCheckedWind(false)
            boosterWind()
        }
    }

    console.log('checkedClouds', checkedClouds)
    console.log('checkedTemp', checkedTemp)
    console.log('checkedWind', checkedWind)

    return (
        <div className="booster">
            <div className="options">
                <div className="booster-options">

                    {!checkedClouds ? <label htmlFor="clouds" className="booster-button">
                        <span className="clouds">
                        <RiSunLine/>
                    </span>

                            <input type="checkbox"
                                   id="clouds"
                                   className="input-options"
                                   value={checkedClouds}
                                   onChange={handleSwitchClouds}

                            />
                        </label>
                        :
                        <label htmlFor="clouds" className="booster-button-checked">
                        <span className="clouds-checked">
                        <RiSunLine/>
                    </span>

                            <input type="checkbox"
                                   id="clouds"
                                   className="input-options"
                                   value={checkedClouds}
                                   onChange={handleSwitchClouds}
                            />
                        </label>
                    }
                    {!checkedTemp ? <label htmlFor="temp" className="booster-button">
                        <span className="temp">
                             <RiTempHotLine/>
                        </span>
                            <input type="checkbox"
                                   id="temp"
                                   value={checkedTemp}
                                   onChange={handleSwitchTemp}
                            />
                        </label>
                        :
                        <label htmlFor="temp" className="booster-button-checked">
                        <span className="temp-checked">
                             <RiTempHotLine/>
                        </span>
                            <input type="checkbox"
                                   id="temp"
                                   value={checkedTemp}
                                   onChange={handleSwitchTemp}
                            />
                        </label>
                    }
                    {!checkedWind ? <label htmlFor="wind" className="booster-button">
                        <span className="wind">
                              <RiWindyLine/>
                        </span>
                            <input type="checkbox"
                                   id="wind"
                                   value={checkedWind}
                                   onChange={handleSwitchWind}
                            />
                        </label>
                        :
                        <label htmlFor="wind" className="booster-button-checked">
                        <span className="wind-checked">
                              <RiWindyLine/>
                        </span>
                            <input type="checkbox"
                                   id="wind"
                                   value={checkedWind}
                                   onChange={handleSwitchWind}
                            />
                        </label>
                    }
                </div>
            </div>


        </div>
    );
}

export default BoosterMobile
