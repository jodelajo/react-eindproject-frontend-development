import React, {useContext, useEffect, useState} from 'react';
import './Friesland.css';
import {LocationContext} from "../../context/LocationContext";

import Counter from "../../components/counter/Counter";
import kelvinToCelsius from "../../helpers/kelvinToCelsius";
import metricToBeaufort from "../../helpers/metricToBeaufort";

function Friesland() {
    const {locationsWadden, locationsZuidOost} = useContext(LocationContext)




    const frieslandLocations = locationsWadden.concat(locationsZuidOost).concat([])

    // useEffect(() => {
    //     console.log('data uit locationcontext', locations)
    //     setFrieslandLocations(locations)
    // }, [locations])

    console.log('friesland', frieslandLocations)
    return <div>
        <ul>
            {frieslandLocations && frieslandLocations.sort((a,b)=>{
                console.log(a,b)
                return b.totalPoints - a.totalPoints

            })
                .map((location) => {
                return <Counter
                    key={location.locationID}
                    location={location}
                    clouds={location.locationClouds}
                    wind={metricToBeaufort(location.locationWind)}
                    temp={kelvinToCelsius(location.locationTemp)}
                    // setScore={setScore}
                    totalPoints={location.totalPoints}

                />
            })}
        </ul>
    </div>
}

export default Friesland

