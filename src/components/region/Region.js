import React from 'react'
import Counter from "../counter/Counter"
import './Region.css'
import { NavLink } from 'react-router-dom'
import LittleFooter from "../littleFooter/LittleFooter";
import Text from "../text/Text";

function Region({locationsRegion, regionName}) {
    return <div className="region">

        <ul className="region-ul">
            <h2 className="region-title">Top 5 {regionName}</h2>
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
                                totalBoosterClouds={location.totalBoosterClouds}
                            />
                        </li>
                    </NavLink>
                })}
        </ul>
        <div className="web-home">
            <div className="web-left">
                <ul className="region-ul-web">
                    <h2>Top 5 {regionName}</h2>
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
              <LittleFooter />
            </div>
            <div className="web-right">
                <Text/>
            </div>
        </div>
    </div>
}

export default Region