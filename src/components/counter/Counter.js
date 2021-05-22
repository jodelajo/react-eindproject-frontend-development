import React from 'react';
import kelvinToCelsius from "../../helpers/kelvinToCelsius";
import metricToBeaufort from "../../helpers/metricToBeaufort";
import './Counter.css';

function Counter({location, index}) {


    return <div className="counter">
        <div className="weather-left">
            <div className="numbers">
                <p className="index">{index}</p>
                <p className="total-points">{location && location.totalPoints}</p>
            </div>

            <img className="icon-weather"
                 src={location && `https://openweathermap.org/img/wn/${location.locationIcon}.png`} alt="icon"/>

            <div className="name-description">
                <h3>{location && location.locationName}</h3>
                <p>{location && location.locationDescription}</p>
            </div>
        </div>
        <div className="weather-right">
            <p className="celsius">{`${kelvinToCelsius(location && location.locationTemp)} °C`}</p>
            <p className="windkracht">Windkracht {metricToBeaufort(location && location.locationWind)}</p>

        </div>
    </div>
};
export default Counter
