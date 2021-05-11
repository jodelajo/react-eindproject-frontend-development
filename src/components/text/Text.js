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
            <p className="alinea"><RiArrowRightLine/>Maak snel een <Link to="/sign-up">account</Link> aan, of <Link
                to="log-in">log in</Link>.</p>}
            <p className="alinea"><RiArrowRightLine/>Klik op de <RiStarLine id="star-button"/> voor de
                Top 5 locaties in Friesland </p>

            <p className="alinea">of</p>
            <p className="alinea"><RiArrowRightLine/>Klik op een regio</p>
            <p className="alinea"><RiArrowRightLine/>Klik op een locatie voor het dichtstbijzijnde terras!</p>
        </div>

    </div>
}

export default Text