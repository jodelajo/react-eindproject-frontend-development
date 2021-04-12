import React, {useEffect, useState} from 'react';
import './ZuidOost.css';
import axios from "axios";
import kelvinToCelsius from "../../helpers/kelvinToCelsius";
import metricToBeaufort from "../../helpers/metricToBeaufort";
import Counter from "../../components/counter/Counter";

function ZuidOost(){
    const [weatherData, setWeatherData] = useState({});
    const [locations, setLocations] = useState('');

    const id = 'id=2754669,2756644,2755429,2759633,2744194'
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
    return <div className="zuidoost">
        {locations && locations.sort((a, b)=> {
            //sorteren op output <Counter />
            // if (a.key > b.key) return -1;
            // if (a.key < b.key) return -1;
            return a - b
        })
        .map((location)=>{
                return <li key={location.name}>
                    <div className="weather-left">
                        <Counter
                            clouds={location.clouds.all}
                            temp={kelvinToCelsius(location.main.temp)}
                            wind={metricToBeaufort(location.wind.speed)}
                        />
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

    </div>
}
export default ZuidOost