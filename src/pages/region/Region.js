import React, {useContext} from 'react'
import {LocationContext} from "../../context/LocationContext";
import Counter from "../../components/counter/Counter";
import './Region.css'
import { NavLink } from 'react-router-dom'
import Location from "../location/Location";


function Region( {locationsRegion, regionName } ){
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


    console.log('friesland-Region', frieslandLocations)

    return <div>
        <h2>Top 5 {regionName}</h2>
        <ul>
            {locationsRegion && locationsRegion.sort((a,b)=>
                b.totalPoints - a.totalPoints)
                .map((location) => {
                    return <NavLink
                        to="/location:slug"
                        key={location.locationID}
                    ><li>

                        <Counter
                            key={location.locationID}
                            location={location}
                            clouds={location.locationClouds}
                            wind={location.locationWind}
                            temp={location.locationTemp}
                            totalPoints={location.totalPoints}
                        />
                        <Location
                        locationName={location.locationName}
                        />
                    </li>
                    </NavLink>
                })}
        </ul>
    </div>
}
export default Region