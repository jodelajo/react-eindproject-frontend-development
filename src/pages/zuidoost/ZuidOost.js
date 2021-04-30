import React, {useContext} from 'react';
import {LocationContext} from "../../context/LocationContext";
import Counter from "../../components/counter/Counter";

function ZuidOost() {
    const { locationsZuidOost} = useContext(LocationContext)
    return <div>
        <h2>TOP 5 Zuidoost</h2>
        <ul>
            {locationsZuidOost && locationsZuidOost.sort((a,b)=>
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
export default ZuidOost