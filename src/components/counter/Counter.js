import React, {useContext, useEffect, useState} from 'react';
import {LocationContext} from "../../context/LocationContext";
import kelvinToCelsius from "../../helpers/kelvinToCelsius";
import metricToBeaufort from "../../helpers/metricToBeaufort";

function Counter({location, clouds, wind, temp, }) {


    console.log(location)
    console.log('wolken', clouds)
    console.log('wind', wind)
    console.log('temp', temp)


    return <div className="wadden">
        <p><strong>{location.locationName}</strong></p>
        <p>{kelvinToCelsius(location.locationTemp)} C</p>
        <p>Windkracht {metricToBeaufort(location.locationWind)}</p>
        <p>{location.locationClouds}% wolken</p>
        <p><strong>{location.totalPoints}</strong></p>
    </div>
}

export default Counter