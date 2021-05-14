import React, {useState, useContext}  from 'react'
import './Booster.css'
import {LocationContext} from "../../context/LocationContext";

function Booster(){
    const { boosterCloud } = useContext(LocationContext)
    const [checked, toggleChecked] = useState(false);


    function handleSubmit() {
        localStorage.setItem('checked', checked)
        toggleChecked(!checked)
        boosterCloud()
        console.log('hoi')
    }

    console.log(checked)
    return (
        <div className="switch-wrapper">

        <input
            type="checkbox"
            className="switch"
            id="metric-system"

            onClick={()=> {
                handleSubmit()
            }}
        />

        <label
            htmlFor="metric-system"
            className="switch-btn"
        />

        </div>
    );
};
export default Booster