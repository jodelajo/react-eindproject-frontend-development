import React, {useContext} from 'react';
import {LocationContext} from "../../context/LocationContext";
import Counter from "../../components/counter/Counter";
import metricToBeaufort from "../../helpers/metricToBeaufort";
import kelvinToCelsius from "../../helpers/kelvinToCelsius";


function ZuidOost() {
    const { locationsZuidOost} = useContext(LocationContext)
    return <div>
        <h1>TOP 5 beste Plakjes</h1>
        <ul>
            {locationsZuidOost && locationsZuidOost.sort((a,b)=>
                b.totalPoints - a.totalPoints).slice(0,5)
                .map((location) => {
                    return <Counter
                        key={location.locationID}
                        location={location}
                        clouds={location.locationClouds}
                        wind={metricToBeaufort(location.locationWind)}
                        temp={kelvinToCelsius(location.locationTemp)}
                        totalPoints={location.totalPoints}
                    />
                })}
        </ul>
    </div>
}

export default ZuidOost