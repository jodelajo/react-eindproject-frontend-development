import React, {useContext} from 'react'
import Counter from "../counter/Counter"
import './Region.css'
import {NavLink} from 'react-router-dom'
import LittleFooter from "../littleFooter/LittleFooter";
import Text from "../text/Text";
import Booster from "../booster/Booster";
import { HotColdContext} from "../../context/HotColdContext";


function Region({locationsRegion, regionName}) {
const { winter } = useContext(HotColdContext)
    console.log('winter op region', winter)



    return <div className="region-wrapper">
        <ul className="region-ul">
            <h2 className="region-title">Top 5 {regionName}</h2>
            {locationsRegion && locationsRegion.sort((a, b) =>
                b.totalPoints - a.totalPoints).slice(0, 5)
                .map((location, index) => {
                    return <NavLink
                        to={`/location/${location.locationName}`}
                        key={location.locationID}
                    >
                        <li className="region-li">

                            <Counter
                                index={index + 1}
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

            <div className="booster-bar">
                <Booster/>
            </div>

            <LittleFooter/>
        </ul>
        <div className="web-right">
            <Text/>
        </div>


    </div>
}

export default Region