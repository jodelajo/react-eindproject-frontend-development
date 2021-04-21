import React from 'react';
import kelvinToCelsius from "../../helpers/kelvinToCelsius";
import metricToBeaufort from "../../helpers/metricToBeaufort";
import './Counter.css';

function Counter({location}) {

    return <div className="counter">
        <div className="weather-left">
            <img className="icon-weather"
                 src={`https://openweathermap.org/img/wn/${location.locationIcon}.png`} alt="icon"/>
            <div className="name-description">
                <p className="location-name">{location.locationName}</p>
                <p>{location.locationClouds}% wolken</p>

            </div>
        </div>
        <div className="weather-right">
            <p>{kelvinToCelsius(location.locationTemp)}</p>
            <p>Windkracht {metricToBeaufort(location.locationWind)}</p>
            <p><strong>{location.totalPoints}</strong></p>
        </div>
    </div>
}

export default Counter

