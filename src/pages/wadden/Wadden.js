import React, {useContext} from 'react';
import {LocationContext} from "../../context/LocationContext";
import Counter from "../../components/counter/Counter";

function Wadden() {
    const { locationsWadden } = useContext(LocationContext)
    return <div>
        <h1>TOP 5 Wadden</h1>
        <ul>
            {locationsWadden && locationsWadden.sort((a,b)=>
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
export default Wadden