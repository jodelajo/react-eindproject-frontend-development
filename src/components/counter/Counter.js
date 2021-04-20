import React, {useContext, useEffect, useState} from 'react';
import {LocationContext} from "../../context/LocationContext";
import kelvinToCelsius from "../../helpers/kelvinToCelsius";
import metricToBeaufort from "../../helpers/metricToBeaufort";
import Friesland from "../../pages/friesland/Friesland";

function Counter() {
    const [points, setPoints] = useState(0)
    const {locations} = useContext(LocationContext)

    const clouds = locations.map((location) => {
        return location.locationClouds;
    })
    console.log('clouds', clouds)

    const wind = locations.map((location) => {
        return metricToBeaufort(location.locationWind);
    })
    console.log('wind', wind)

    const temp = locations.map((location) => {
        return kelvinToCelsius(location.locationTemp);
    })
    console.log('temp', temp)


    function getPointsClouds() {
        if (clouds < 10) {

            setPoints(points + 20);
        }
        if (clouds >= 10 && clouds < 15) {

            setPoints(points + 18);
        }
        if (clouds >= 15 && clouds < 30) {

            setPoints(points + 15);
        }
        if (clouds >= 30 && clouds < 50) {

            setPoints(points + 10);
        }
        if (clouds >= 50 && clouds < 99) {

            setPoints(points + 8);
        }
        if (clouds > 99) {

            setPoints(points + 2);
        }
    }


    useEffect(() => {

        getPointsClouds()

    }, [locations])


    console.log(points)


    return <div className="wadden">
        <ul>
            {locations && locations.map((location) => {
                return <li key={location.locationName}>
                    {/*<Friesland*/}
                    {/*name={location.locationName}*/}
                    {/*/>*/}
                    <div className="weather-left">

                        <div className="name-description">
                            <p className="location-name">{location.name}</p>
                            <p>{location.locationName}</p>
                            <p>{location.locationClouds}</p>
                        </div>
                    </div>
                    <div className="weather-right">
                        {/*<Counter*/}
                        {/*    clouds={location.clouds.all}*/}
                        {/*    temp={kelvinToCelsius(location.main.temp)}*/}
                        {/*    wind={metricToBeaufort(location.wind.speed)}*/}
                        {/*    location={location.name}*/}
                        {/*    weather={location.weather[0].description}*/}
                        {/*    icon={location.weather[0].icon}*/}
                        {/*    key={location.name}*/}
                        {/*/>*/}
                        <p>{`${kelvinToCelsius(location.locationTemp)} C`}</p>

                        <p>Windkracht {metricToBeaufort(location.locationWind)}</p>
                    </div>
                </li>



            })}
        </ul>
    </div>
}

export default Counter