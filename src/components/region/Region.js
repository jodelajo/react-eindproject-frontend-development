import React from 'react'
import Counter from "../counter/Counter"
import './Region.css'
import { NavLink } from 'react-router-dom'

function Region( {locationsRegion, regionName } ){

    return <div>
        <h2>Top 5 {regionName}</h2>
        <ul>
            {locationsRegion && locationsRegion.sort((a,b)=>
                b.totalPoints - a.totalPoints).slice(0, 5)
                .map((location) => {
                    return <NavLink
                        to={`/location/${location.locationName}`}
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
                    </li>
                    </NavLink>
                })}
        </ul>
    </div>
}
export default Region