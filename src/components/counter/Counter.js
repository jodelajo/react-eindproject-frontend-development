import React from 'react';
import kelvinToCelsius from "../../helpers/kelvinToCelsius";
import metricToBeaufort from "../../helpers/metricToBeaufort";
import './Counter.css';

function Counter({location}) {
    return <div className="counter">
        <div className="weather-left">
            <img className="icon-weather"
                 src={location && `https://openweathermap.org/img/wn/${location.locationIcon}.png`} alt="icon"/>
            <div className="name-description">
                <p className="location-name">{location && location.locationName}</p>
                <p>{location && location.locationClouds}% wolken</p>
            </div>
        </div>
        <div className="weather-right">
            <p>{`${kelvinToCelsius(location && location.locationTemp)} °C`}</p>
            <p>Windkracht {metricToBeaufort(location && location.locationWind)}</p>
            <p><strong>{location && location.totalPoints}</strong></p>
        </div>
    </div>
};
export default Counter
