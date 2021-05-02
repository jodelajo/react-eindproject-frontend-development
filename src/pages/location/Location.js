import React, {useContext} from 'react'
import {LocationContext} from "../../context/LocationContext";
import {useParams, Link} from 'react-router-dom'
import terraceData from '../../data/terrace.json'
import './Location.css'
import Counter from "../../components/counter/Counter";


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
        <div>
            <div >
                <Counter
                    key={specificLocation && specificLocation.locationID}
                    location={specificLocation && specificLocation}
                    clouds={specificLocation && specificLocation.locationClouds}
                    wind={specificLocation && specificLocation.locationWind}
                    temp={specificLocation && specificLocation.locationTemp}
                    totalPoints={specificLocation && specificLocation.totalPoints}
                />
            </div>
        </div>
        <div className="terras">
            <img
                className="terrace-image"
                src={specificTerrace && specificTerrace.image} alt="terras"/>
            <h2>{specificTerrace && specificTerrace.name}</h2>
            <p>{specificTerrace && specificTerrace.address}</p>
            <p>{specificTerrace && specificTerrace.terraceLocation}</p>
            <Link to={specificTerrace.website}>Website</Link>
            <p>{specificTerrace && specificTerrace.phone}</p>
            <p>{specificTerrace && specificTerrace.email}</p>
        </div>
    </div>
}

export default Location