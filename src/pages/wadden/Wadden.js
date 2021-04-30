import React, {useContext} from 'react';
import {LocationContext} from "../../context/LocationContext";
import Counter from "../../components/counter/Counter";

function Wadden() {
    const { locationsWadden } = useContext(LocationContext)



    return <div>
        <h2>TOP 5 Wadden</h2>
        <ul>
            {locationsWadden && locationsWadden.sort((a,b)=>
                b.totalPoints - a.totalPoints)
                .map((location) => {
                    return <Counter
                        key={location.locationID}
                        name={location.locationName}
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