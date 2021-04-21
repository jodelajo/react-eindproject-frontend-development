import React, {createContext, useEffect, useState,} from 'react';
import axios from 'axios';

function getPointsClouds(clouds) {
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

function getPointsWind(wind) {
    if (wind < 2) {
        return 10;
    }
    if (wind >= 2 && wind < 4) {
        return 8;
    }
    if (wind >= 4 && wind < 6) {
        return 4;
    }
    if (wind > 6 && wind < 8) {
        return 2;
    }
    if (wind > 8) {
        return 1;
    }
}

function getPointsTemp(temp) {
    if (temp < 0) {
        return 1;
    }
    if (temp >= 0 && temp < 4) {
        return 3;
    }
    if (temp >= 4 && temp < 6) {
        return 4;
    }
    if (temp >= 6 && temp < 8) {
        return 5;
    }
    if (temp >= 8 && temp < 10) {
        return 6;
    }
    if (temp >= 10 && temp < 13) {
        return 8;
    }
    if (temp >= 13 && temp < 20) {
        return 10;
    }
    if (temp >= 20 && temp < 25) {
        return 12;
    }
    if (temp >= 25) {
        return 15;
    }
}


export const LocationContext = createContext({})

function LocationContextProvider({children}) {
    const [locationsWadden, setLocationsWadden] = useState([])
    const [locationsZuidOost, setLocationsZuidOost] = useState([])
    const [locationsNoordWest, setLocationsNoordWest] = useState([])

    async function fetchLocations() {
        try {
            const resWadden = await Promise.all([
                axios.get(`https://api.openweathermap.org/data/2.5/weather?id=2749334&appid=${process.env.REACT_APP_API_KEY}&lang=nl`),
                axios.get(`https://api.openweathermap.org/data/2.5/weather?id=2744608&appid=${process.env.REACT_APP_API_KEY}&lang=nl`),
                axios.get(`https://api.openweathermap.org/data/2.5/weather?id=2753887&appid=${process.env.REACT_APP_API_KEY}&lang=nl`),
                axios.get(`https://api.openweathermap.org/data/2.5/weather?id=2750417&appid=${process.env.REACT_APP_API_KEY}&lang=nl`),
                axios.get(`https://api.openweathermap.org/data/2.5/weather?id=2745944&appid=${process.env.REACT_APP_API_KEY}&lang=nl`)
            ]);
            // const id = 'id=2754669,2756644,2755429,2759633,2744194'
            const resZuidOost = await Promise.all([
                axios.get(`https://api.openweathermap.org/data/2.5/weather?id=2754669&appid=${process.env.REACT_APP_API_KEY}&lang=nl`),
                axios.get(`https://api.openweathermap.org/data/2.5/weather?id=2756644&appid=${process.env.REACT_APP_API_KEY}&lang=nl`),
                axios.get(`https://api.openweathermap.org/data/2.5/weather?id=2755429&appid=${process.env.REACT_APP_API_KEY}&lang=nl`),
                axios.get(`https://api.openweathermap.org/data/2.5/weather?id=2759633&appid=${process.env.REACT_APP_API_KEY}&lang=nl`),
                axios.get(`https://api.openweathermap.org/data/2.5/weather?id=2744194&appid=${process.env.REACT_APP_API_KEY}&lang=nl`)
            ]);
            const resNoordWest = await Promise.all([
                axios.get(`https://api.openweathermap.org/data/2.5/weather?id=4696233&appid=${process.env.REACT_APP_API_KEY}&lang=nl`),
                axios.get(`https://api.openweathermap.org/data/2.5/weather?id=2746023&appid=${process.env.REACT_APP_API_KEY}&lang=nl`),
                axios.get(`https://api.openweathermap.org/data/2.5/weather?id=2759057&appid=${process.env.REACT_APP_API_KEY}&lang=nl`),
                axios.get(`https://api.openweathermap.org/data/2.5/weather?id=2751792&appid=${process.env.REACT_APP_API_KEY}&lang=nl`),
                axios.get(`https://api.openweathermap.org/data/2.5/weather?id=2755812&appid=${process.env.REACT_APP_API_KEY}&lang=nl`)
            ]);

            const dataWadden = resWadden.map((res) => res.data);
            console.log('data Wadden', dataWadden)
            const dataZuidOost = resZuidOost.map((res) => res.data);
            const dataNoordWest = resNoordWest.map((res) => res.data);


            const locationsWaddenWithPoints = dataWadden.map((location, index) => {

                return {
                    locationName: location.name,
                    locationTemp: location.main.temp,
                    locationClouds: location.clouds.all,
                    locationWind: location.wind.speed,
                    locationID: location.id,
                    locationIcon: location.weather[0].icon,
                    region: 'wadden',
                    totalPoints: getPointsClouds(location.clouds.all) + getPointsWind(location.wind.speed) + getPointsTemp(location.main.temp),
                }
            })
            setLocationsWadden(locationsWaddenWithPoints)
            console.log('wadden', locationsWaddenWithPoints)

            const locationsZuidOostWithPoints = dataZuidOost.map((location, index) => {

                return {
                    locationName: location.name,
                    locationTemp: location.main.temp,
                    locationClouds: location.clouds.all,
                    locationWind: location.wind.speed,
                    locationID: location.id,
                    locationIcon: location.weather[0].icon,
                    region: 'zuidoost',
                    totalPoints: getPointsClouds(location.clouds.all) + getPointsWind(location.wind.speed) + getPointsTemp(location.main.temp),
                }
            })

            setLocationsZuidOost(locationsZuidOostWithPoints)
            console.log('ZuidOost', locationsZuidOostWithPoints)

            const locationsNoordWestWithPoints = dataNoordWest.map((location, index) => {

                return {
                    locationName: location.name,
                    locationTemp: location.main.temp,
                    locationClouds: location.clouds.all,
                    locationWind: location.wind.speed,
                    locationID: location.id,
                    locationIcon: location.weather[0].icon,
                    region: 'noordwest',
                    totalPoints: getPointsClouds(location.clouds.all) + getPointsWind(location.wind.speed) + getPointsTemp(location.main.temp),
                }
            })

            setLocationsNoordWest(locationsNoordWestWithPoints)
            console.log('Noordwest', locationsNoordWestWithPoints)

        } catch {
            throw Error("Promise failed");
        }
    }

    useEffect(() => {

        fetchLocations();

    }, [])

    const data = {
        locationsWadden: locationsWadden,
        locationsZuidOost: locationsZuidOost,
        locationsNoordWest: locationsNoordWest,

    }

    return (
        <LocationContext.Provider value={data}>
            {children}

        </LocationContext.Provider>
    )
}

export default LocationContextProvider