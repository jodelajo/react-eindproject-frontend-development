import React, {useContext, useEffect, useState} from 'react';
import kelvinToCelsius from "../../helpers/kelvinToCelsius";
import metricToBeaufort from "../../helpers/metricToBeaufort";
import { LocationContext } from "../../context/LocationContext";
import Friesland from "../../pages/friesland/Friesland";

function Counter() {
    const { locations  } = useContext(LocationContext)
    const [pointsClouds, setPointsClouds] = useState(0)
    const [pointsTemp, setPointsTemp] = useState(0)
    const [pointsWind, setPointsWind] =useState(0)
    const [totalPoints,setTotalPoints] = useState(0)
    const [wind, setWind] = useState(0)
    const [clouds, setClouds] = useState(0)
    const [temp, setTemp] = useState(0)




    function getPointsClouds() {
        if (clouds < 10) {
            return 20;
            // setPointsClouds(pointsClouds + 20);
        }
        if (clouds >= 10 && clouds < 15) {
            return 18;
            // setPointsClouds(pointsClouds + 18);
        }
        if (clouds >= 15 && clouds < 30) {
            return 15;
            // setPointsClouds(pointsClouds + 15);
        }
        if (clouds >= 30 && clouds < 50) {
            return 10;
            // setPointsClouds(pointsClouds + 10);
        }
        if (clouds >= 50 && clouds < 99) {
            return 8;
            // setPointsClouds(pointsClouds + 8);
        }
        if (clouds > 99) {
            return 2;
            // setPointsClouds(pointsClouds + 2);
        }
    }

    function getPointsTemp() {
        if (temp < 0) {
            setPointsTemp(pointsTemp + 1);
        }
        if (temp >= 0 && temp < 4) {
            setPointsTemp(pointsTemp + 3);
        }
        if (temp >= 4 && temp < 6) {
            setPointsTemp(pointsTemp + 4);
        }
        if (temp >= 6 && temp < 8) {
            setPointsTemp(pointsTemp + 5);
        }
        if (temp >= 8 && temp < 10) {
            setPointsTemp(pointsTemp + 6);
        }
        if (temp >= 10 && temp < 13) {
            setPointsTemp(pointsTemp + 8);
        }
        if (temp >= 13 && temp < 20) {
            setPointsTemp(pointsTemp + 10);
        }
        if (temp >= 20 && temp < 25) {
            setPointsTemp(pointsTemp + 12);
        }
        if(temp >= 25) {
            setPointsTemp(pointsTemp + 15);
        }
    }

    function getPointsWind() {
        if(wind < 2) {
            setPointsWind(pointsWind + 10);
        }
        if(wind >= 2 && wind < 4) {
            setPointsWind(pointsWind + 8);
        }
        if(wind >= 4 && wind < 6) {
            setPointsWind(pointsWind + 4);
        }
        if(wind > 6 && wind < 8) {
            setPointsWind(pointsWind + 2);
        }
        if(wind > 8) {
            setPointsWind(pointsWind + 1);
        }
    }

    useEffect(()=>{
        getPointsClouds();
        getPointsTemp();
        getPointsWind();
        setTotalPoints(pointsClouds+pointsWind+pointsTemp);
    },[locations])

    const total = pointsTemp+pointsClouds+pointsWind;



    console.log('total', total)
    // console.log([location, total])
    console.log(wind)
    console.log('pointsTemp',pointsTemp)
    console.log('locations',locations)
    console.log('clouds',clouds)
    console.log(totalPoints)

    return <div>
        <ul>
            {locations &&

            locations.sort((a, b)=> {
                //sorteren op output <Counter />
                // if (a.key > b.key) return -1;
                // if (a.key < b.key) return -1;
                return a - b
            })
                .map((location)=>{
                    return <li key={location.name}>

                        <div className="weather-left">


                            {/*<img src={`https://openweathermap.org/img/wn/${location.weather[0].icon}.png`}/>*/}
                            {/*<div className="name-description">*/}
                            {/*    <p className="location-name">{location.name}</p>*/}
                            {/*    <p>{location.weather[0].description}</p>*/}
                            {/*    <p>{location.clouds.all}</p>*/}
                            {/*</div>*/}

                            {/*<div className="weather-right">*/}

                            {/*    <p>{kelvinToCelsius(location.main.temp)} C</p>*/}
                            {/*    <p>Windkracht {metricToBeaufort(location.wind.speed)}</p>*/}
                            <p> Punten {totalPoints}</p>

                        </div>
                    </li>

                })}
        </ul>
        <Friesland />
    </div>
};
export default Counter

