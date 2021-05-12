import React from 'react';
import {RiHome2Line, RiStarLine, RiArrowLeftLine, RiArrowRightLine, RiGithubFill} from "react-icons/ri";
import './Text.css'
import {useAuth} from "../../context/AuthContext";
import {Link} from 'react-router-dom'

function Text() {
    const {currentUser} = useAuth()
    return <div className="text">

        <h2 className="text-h2">Wil je weten waar je op dit moment het beste weer hebt in Friesland?</h2>
        <div className="alinea-text">
            {!currentUser &&



            <p id="een" className="alinea"> <span className="arrow"><RiArrowRightLine/> </span>Maak snel een <Link to="/sign-up">account</Link> aan, of <Link
                to="log-in">log in</Link>.</p>}
            <p id="twee" className="alinea"><span className="arrow"><RiArrowRightLine/> </span>Klik op de <RiStarLine id="star-button"/> voor de
                Top 5 locaties in Friesland </p>

            <p id="drie" className="alinea">of</p>
            <p id="vier" className="alinea"><span className="arrow"><RiArrowRightLine/> </span>Klik op een regio</p>
            <p id="vijf" className="alinea"><span className="arrow"><RiArrowRightLine/> </span>Klik op een locatie voor het dichtstbijzijnde terras!</p>


        </div>

    </div>
}

export default Text