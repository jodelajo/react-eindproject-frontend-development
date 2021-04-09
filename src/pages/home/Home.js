import React from 'react';
import './Home.css';
import plattegrond from "../../assets/images/friesland_map.png";

function Home(){
    return <div>
        <img src={plattegrond} alt="Friesland" className="map"/>
    </div>
}
export default Home