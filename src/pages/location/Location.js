import React, {useEffect, useState} from 'react';
import axios from "axios";
import './Location.css';
import kelvinToCelsius from "../../helpers/kelvinToCelsius";
import metricToBeaufort from "../../helpers/metricToBeaufort";
import Counter from "../../components/counter/Counter";

function Location() {
    const [weatherData, setWeatherData] = useState({});
    // const [locations, setLocations] = useState('');
    const [temp, setTemp] = useState([])
    const [clouds, setClouds] = useState([])
    const [wind, setWind] = useState([])
    // const [pointsClouds, setPointsClouds] = useState(0)
    // const [pointsTemp, setPointsTemp] = useState(0)
    // const [pointsWind, setPointsWind] =useState(0)
    //

    // const id = 'id=2749334,2744608,2753887,2750417,2759757'
    // const id = ',184745,524901,5128581,1621177'
    const urlGroup = `https://api.openweathermap.org/data/2.5/weather?q=Bontebok&appid=${process.env.REACT_APP_API_KEY}&lang=nl`


    // function getPointsClouds() {
    //     if (clouds < 30) {
    //         setPointsClouds(pointsClouds + 20);
    //     }
    //     if (clouds >= 30 && clouds < 50) {
    //         setPointsClouds(pointsClouds + 15);
    //     }
    //     if (clouds > 50 && clouds < 99) {
    //         setPointsClouds(pointsClouds + 8);
    //     }
    //     if (clouds > 99) {
    //         setPointsClouds(pointsClouds + 2);
    //     }
    // }
    //
    // function getPointsTemp() {
    //     if (temp < 0) {
    //         setPointsTemp(pointsTemp + 1);
    //     }
    //     if (temp >= 0 && temp < 4) {
    //         setPointsTemp(pointsTemp + 3);
    //     }
    //     if (temp >= 4 && temp < 6) {
    //         setPointsTemp(pointsTemp + 4);
    //     }
    //     if (temp >= 6 && temp < 8) {
    //         setPointsTemp(pointsTemp + 5);
    //     }
    //     if (temp >= 8 && temp < 10) {
    //         setPointsTemp(pointsTemp + 6);
    //     }
    //     if (temp >= 10 && temp < 13) {
    //         setPointsTemp(pointsTemp + 8);
    //     }
    //     if (temp >= 13 && temp < 20) {
    //         setPointsTemp(pointsTemp + 10);
    //     }
    //     if (temp >= 20 && temp < 25) {
    //         setPointsTemp(pointsTemp + 12);
    //     }
    //     if(temp >= 25) {
    //         setPointsTemp(pointsTemp + 15);
    //     }
    // }
    //
    // function getPointsWind() {
    //     if(wind < 2) {
    //         setPointsWind(pointsWind + 10);
    //     }
    //     if(wind >= 2 && wind < 4) {
    //         setPointsWind(pointsWind + 8);
    //     }
    //     if(wind >= 4 && wind < 6) {
    //         setPointsWind(pointsWind + 4);
    //     }
    //     if(wind > 6 && wind < 8) {
    //         setPointsWind(pointsWind + 2);
    //     }
    //     if(wind > 8) {
    //         setPointsWind(pointsWind + 1);
    //     }
    // }


    useEffect(() => {

        async function fetchData() {

            try {
                const result = await axios.get(urlGroup);
                setWeatherData(result.data)
                setTemp(kelvinToCelsius(result.data.main.temp))
                setClouds(result.data.clouds.all)
                setWind(metricToBeaufort(result.data.wind.speed))
                // getPointsClouds();
                // getPointsTemp();
                // getPointsWind();
            } catch (e) {
                console.error(e);
            }
        }

            fetchData();

    }, [])

    return <>
        <span className="bontebok">
            {weatherData &&
            <div>
                {/*<h2>{weatherData.weather[0].description}</h2>*/}
                <h3>{weatherData.name}</h3>
                <h1>{temp} &deg;C</h1>
                <h4>{clouds} % bewolkt</h4>
                <h4>Windkracht {wind}</h4>
            </div>
            }
        </span>
        {/*<Counter*/}
        {/*    clouds={clouds}*/}
        {/*    temp={temp}*/}
        {/*    wind={wind}*/}

        {/*/>*/}
        {/*<Counter pointsClouds={pointsClouds}*/}
        {/*         pointsTemp={pointsTemp}*/}
        {/*         pointsWind={pointsWind}*/}
        {/*/>*/}
    </>


};
export default Location