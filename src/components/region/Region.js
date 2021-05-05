import React from 'react'
import Counter from "../counter/Counter"
import './Region.css'
import {NavLink} from 'react-router-dom'
import Booster from "../booster/Booster";

function Region({locationsRegion, regionName}) {

    return <div className="region">
        <h2>Top 5 {regionName}</h2>
        <ul className="region-ul">
            {locationsRegion && locationsRegion.sort((a, b) =>
                b.totalPoints - a.totalPoints).slice(0, 5)
                .map((location) => {
                    return <NavLink
                        to={`/location/${location.locationName}`}
                        key={location.locationID}
                    >
                        <li>
                            <Counter
                                key={location.locationID}
                                location={location}
                                clouds={location.locationClouds}
                                wind={location.locationWind}
                                temp={location.locationTemp}
                                description={location.locationDescription}
                                // rain={location.locationRain}
                                totalPointsClouds={location.totalPointsClouds}
                                totalPointsWind={location.totalPointsWind}
                                totalPointsTemp={location.totalPointsTemp}
                                totalPoints={location.totalPoints}
                            />
                        </li>
                    </NavLink>
                })}
        </ul>
    </div>
}

export default Region