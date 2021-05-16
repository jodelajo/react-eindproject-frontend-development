import React, {useState, useContext} from 'react'
import './Booster.css'
import {RiSunLine, RiTempHotLine, RiWindyLine} from "react-icons/ri";


import {LocationContext} from "../../context/LocationContext";

function Booster() {
    const {boosterCloud} = useContext(LocationContext)
    const [checkedClouds, toggleCheckedClouds] = useState(false);
    const [switchButton, toggleSwitchButton] = useState(false)
    // const [checkedTemp, toggleCheckedTemp] = useState(false);
    // const [checkedWind, toggleCheckedWind] = useState(false);

    function handleSubmit() {
        toggleSwitchButton(!switchButton)
        toggleCheckedClouds(checkedClouds)
        boosterCloud()
    }

    console.log('booster clouds', checkedClouds)
    console.log('switchbutton', switchButton)

    function handleSwitch() {

        toggleCheckedClouds(!checkedClouds)
        toggleSwitchButton(false)
    }

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
                                   onChange={handleSwitch}

                            />
                        </label>
                        :
                        <label htmlFor="clouds" className="booster-button-checked">
                        <span className="clouds">
                        <RiSunLine/>
                    </span>

                            <input type="checkbox"
                                   id="clouds"
                                   className="input-options"
                                   value={checkedClouds}

                                   onChange={handleSwitch}
                            />
                        </label>
                    }
                    <label htmlFor="temp" className="booster-button">
                        <span className="temp">
                             <RiTempHotLine/>
                        </span>


                        <input type="checkbox"
                               id="temp"
                            // checked={checked}
                            // onChange={() => {
                            //     setChecked(!checked)
                            // }}
                        />
                    </label>
                    <label htmlFor="wind" className="booster-button">
                        <span className="wind">
                              <RiWindyLine/>
                        </span>


                        <input type="checkbox"
                               id="wind"
                            // checked={checked}
                            // onChange={() => {
                            //     setChecked(!checked)
                            // }}
                        />
                    </label>
                </div>
            </div>

            <div className="switch-wrapper">
                {checkedClouds ? <input
                        type="checkbox"
                        className="switch"
                        id="metric-system"
                        value={switchButton}
                        checked={switchButton}
                        // disabled={checkedClouds}
                        onClick={handleSubmit}
                    />
                    :
                    <input
                        type="checkbox"
                        className="switch"
                        id="metric-system"
                        value={switchButton}
                        disabled
                        checked={checkedClouds}
                        onClick={handleSubmit}
                    />
                }

                <label
                    htmlFor="metric-system"
                    className="switch-btn"
                />

            </div>

        </div>
    );
}

export default Booster
