import React, {useState} from 'react';
import {RiStarLine, RiArrowRightLine} from "react-icons/ri";
import './Text.css'
import {useAuth} from "../../context/AuthContext";
import {Link} from 'react-router-dom'

import Slider from "../slider/Slider";
import Switch from "../switch/Switch";



function Text() {
    const [gifs, toggleGifs] = useState(false)
    const {currentUser} = useAuth()

    console.log(gifs)

    return <div className="text">

        {!gifs && <h2 className="text-h2">Wil je weten waar je op dit moment het beste weer hebt in Friesland?</h2>}
        {!gifs ? <div className="alinea-text">


            {!currentUser && <div>
                <p id="een" className="alinea"><span className="arrow"><RiArrowRightLine/> </span>Maak snel een <span
                    className="text-link"><Link to="/sign-up">account</Link></span> aan, of <span className="text-link"><Link
                    to="log-in">log in</Link></span>.</p></div>}


            <p id="twee" className="alinea"><span className="arrow"><RiArrowRightLine/> </span>Klik op
                de <RiStarLine id="star-button-text"/> voor de
                Top 5 locaties in Friesland </p>
            <p id="drie" className="alinea">of</p>
            <p id="vier" className="alinea"><span className="arrow"><RiArrowRightLine/> </span>Klik op een regio</p>
            <p id="vier" className="alinea"><span className="arrow"><RiArrowRightLine/> </span>Kies voor een Booster</p>

            <p id="vijf" className="alinea"><span className="arrow"><RiArrowRightLine/> </span>Klik op een locatie
                voor het dichtstbijzijnde terras!</p>

        </div>
        :
            <div className="slider-text">
                <Slider/>
            </div>

        }

<Switch
Name='webSwitch'
gifs={gifs}
toggleGifs={toggleGifs}
/>
    </div>
}

export default Text