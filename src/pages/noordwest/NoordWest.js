import React, {useContext} from 'react';
import {LocationContext} from "../../context/LocationContext";
import Counter from "../../components/counter/Counter";

function NoordWest() {
    const { locationsNoordWest} = useContext(LocationContext)
    return <div>
        <h2>TOP 5 Noordwest</h2>
        <ul>
            {locationsNoordWest && locationsNoordWest.sort((a,b)=>
                b.totalPoints - a.totalPoints)
                .map((location) => {
                    return <Counter
                        key={location.locationID}
                        location={location}
                        clouds={location.locationClouds}
                        wind={location.locationWind}
                        temp={location.locationTemp}
                        totalPoints={location.totalPoints}
                    />
                })}
        </ul>
    </div>
}
export default NoordWest