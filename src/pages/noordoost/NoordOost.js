import React, {useContext} from 'react';
import {LocationContext} from "../../context/LocationContext";
import Counter from "../../components/counter/Counter";

function NoordOost() {
    const { locationsNoordOost} = useContext(LocationContext)
    return <div>
        <h1>TOP 5 Noordoost</h1>
        <ul>
            {locationsNoordOost && locationsNoordOost.sort((a,b)=>
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
};
export default NoordOost