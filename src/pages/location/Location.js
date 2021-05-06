import React, {useContext} from 'react'
import {LocationContext} from "../../context/LocationContext";
import {useParams, Link, useHistory} from 'react-router-dom'
import terraceData from '../../data/terrace.json'
import './Location.css'
import Counter from "../../components/counter/Counter";
import LittleFooter from "../../components/littleFooter/LittleFooter";
import Map from "../../components/map/Map";
import {RiArrowLeftLine, RiHome2Line, RiStarLine} from "react-icons/ri";


function Location() {
    const {slug} = useParams()
    const history = useHistory()

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

    return <div className="single-location">
        <div className="single-location-mobile">
                <Counter
                    key={specificLocation && specificLocation.locationID}
                    location={specificLocation && specificLocation}
                    clouds={specificLocation && specificLocation.locationClouds}
                    wind={specificLocation && specificLocation.locationWind}
                    temp={specificLocation && specificLocation.locationTemp}
                    totalPoints={specificLocation && specificLocation.totalPoints}
                />

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

        <div className="web-home">
            <div className="web-left">
                <div className="single-location-web">
                    <Counter
                        key={specificLocation && specificLocation.locationID}
                        location={specificLocation && specificLocation}
                        clouds={specificLocation && specificLocation.locationClouds}
                        wind={specificLocation && specificLocation.locationWind}
                        temp={specificLocation && specificLocation.locationTemp}
                        totalPoints={specificLocation && specificLocation.totalPoints}
                    />

                </div>
                <div className="terras-web">
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
                <LittleFooter/>
            </div>
            <div className="web-right">
                <h2>Klik op een regio</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores,
                    consequatur ex fuga impedit optio quisquam saepe. Amet atque, cupiditate
                    doloribus eaque laboriosam magni modi optio quaerat quasi sapiente ullam,
                    vitae?
                </p>
            </div>
        </div>
    </div>
}

export default Location