import React from 'react';
import './Wadden.css';
import { Link } from "react-router-dom";

function Wadden(){
    return <div className="friesland">
        <Link to="/">
            Groetjes uit De Wadden
        </Link>
    </div>
}
export default Wadden