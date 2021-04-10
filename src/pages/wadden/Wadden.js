import { Link } from "react-router-dom";
import React, { useEffect, useState }from 'react';
import axios from "axios";
import './Wadden.css';
import kelvinToCelsius from "../../helpers/kelvinToCelsius";
import metricToBeaufort from "../../helpers/metricToBeaufort";

function Wadden(){
    const [weatherData, setWeatherData] = useState({});
    const [locations, setLocations] = useState('');

    const id = 'id=2749334,2744608,2753887,2750417,2759757'
    const urlGroup = `https://api.openweathermap.org/data/2.5/group?${id}&appid=${process.env.REACT_APP_API_KEY}&lang=nl`


    useEffect(()=>{
        async function fetchData(){
            try {
                const result = await axios.get(urlGroup);
                console.log(result.data)
                setWeatherData(result.data)
                console.log(result.data.list)
                setLocations(result.data.list)


            } catch (e) {
                console.error(e);
            }
        }
        fetchData();
    },[])
    return <div className="wadden">
        <ul>
        {locations && locations.map((location)=>{
            return <li key={location.name}>
                <div className="weather-left">
                    <img src={`https://openweathermap.org/img/wn/${location.weather[0].icon}.png`}/>
                    <div className="name-description">
                <p className="location-name">{location.name}</p>
                <p>{location.weather[0].description}</p>
                    </div>
                </div>
                <div className="weather-right">
                <p>{kelvinToCelsius(location.main.temp)}</p>
                <p>Windkracht {metricToBeaufort(location.wind.speed)}</p>
                </div>
            </li>
        })}
        </ul>
    </div>
};
export default Wadden