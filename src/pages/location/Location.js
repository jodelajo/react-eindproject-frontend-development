import React, {useContext} from 'react'
import {LocationContext} from "../../context/LocationContext";
import {useParams} from 'react-router-dom'
import terraceData from '../../data/terrace.json'
import './Location.css'
import kelvinToCelsius from "../../helpers/kelvinToCelsius";
import metricToBeaufort from "../../helpers/metricToBeaufort";


function Location() {
    const {slug} = useParams()

    const {
        locationsWadden,
        locationsZuidOost,
        locationsNoordWest,
        locationsNoordOost,
        locationsZuidWest
    } = useContext(LocationContext)

    const frieslandLocations = locationsWadden
        .concat(locationsZuidOost)
        .concat(locationsNoordWest)
        .concat(locationsNoordOost)
        .concat(locationsZuidWest)


    const specificLocation = frieslandLocations.find((loc) => {
        return loc.locationName === slug
    })

    const specificTerrace = terraceData.find((ter) => {
        return ter.id === slug
    })

    return <div>
        <div className="counter">
            <div className="weather-left">
                <div>
                    <p className="location-name-location">{specificLocation && specificLocation.locationName}</p>
                <img className="weather-icon"
                     src={specificLocation && `https://openweathermap.org/img/wn/${specificLocation.locationIcon}.png`} alt="icon"/>
                </div>
            </div>
            <div className="weather-right-location">
                <p>{`${kelvinToCelsius(specificLocation && specificLocation.locationTemp)} °C`}</p>
                <p>Windkracht {metricToBeaufort(specificLocation && specificLocation.locationWind)}</p>
                <p><strong>{specificLocation && specificLocation.totalPoints}</strong></p>
            </div>
        </div>
        <div className="terras">
            <h2>{specificTerrace && specificTerrace.name}</h2>
            <p>{specificTerrace && specificTerrace.address}</p>
            <p>{specificTerrace && specificTerrace.terraceLocation}</p>
            <p>{specificTerrace &&  specificTerrace.website}</p>
            <p>{specificTerrace && specificTerrace.phone}</p>
            <p>{specificTerrace && specificTerrace.email}</p>
        </div>
    </div>
}

export default Location