/* eslint-disable react-hooks/exhaustive-deps */
import React, {createContext, useEffect, useState,} from 'react';
import axios from 'axios';
import kelvinToCelsius from "../helpers/kelvinToCelsius";


export const LocationContext = createContext({})

function LocationContextProvider({children}) {
    const [locationsWadden, setLocationsWadden] = useState([])
    const [locationsZuidOost, setLocationsZuidOost] = useState([])
    const [locationsNoordWest, setLocationsNoordWest] = useState([])
    const [locationsNoordOost, setLocationsNoordOost] = useState([])
    const [locationsZuidWest, setLocationsZuidWest] = useState([])
    const [boosterCloudsSelected, toggleBoosterCloudsSelected] = useState(false)
    const [boosterTempSelected, toggleBoosterTempSelected] = useState(false)
    const [boosterWindSelected, toggleBoosterWindSelected] = useState(false)
    const [multiplierClouds, setMultiplierClouds] = useState(1)
    const [multiplierTemp, setMultiplierTemp] = useState(1)
    const [multiplierWind, setMultiplierWind] = useState(1)

    // const [error, setError] = useState(false)


    function boosterCloud() {
        if (!boosterCloudsSelected) {
            toggleBoosterCloudsSelected(true)
            setMultiplierClouds(2)
        } else {
            toggleBoosterCloudsSelected(false)
            setMultiplierClouds(1)
        }
    }


    function boosterWind() {
        if (!boosterWindSelected) {
            toggleBoosterWindSelected(true)
            setMultiplierWind(2)
        } else {
            toggleBoosterWindSelected(false)
            setMultiplierWind(1)
        }
    }


    function boosterTemp() {
        if (!boosterTempSelected) {
            toggleBoosterTempSelected(true)
            setMultiplierTemp(2)
        } else {
            toggleBoosterTempSelected(false)
            setMultiplierTemp(1)
        }
    }

    function goBackHandler() {
        toggleBoosterCloudsSelected(false)
        toggleBoosterTempSelected(false)
        toggleBoosterWindSelected(false)
        setMultiplierClouds(1)
        setMultiplierWind(1)
        setMultiplierTemp(1)
    }

    useEffect(() => {
        if (multiplierClouds || multiplierTemp || multiplierWind) {
            fetchLocations()
        }
    }, [multiplierClouds, multiplierTemp, multiplierWind])


    console.log('boosterClouds selected', boosterCloudsSelected)
    console.log('boosterTemp selected', boosterTempSelected)
    console.log('boosterWind selected', boosterWindSelected)
    console.log('multiplierClouds', multiplierClouds)
    console.log('multiplierTemp', multiplierTemp)
    console.log('multiplierWind', multiplierWind)

    function getPointsClouds(clouds) {

        if (clouds < 10) {
            return 11 * multiplierClouds;
            // setPointsClouds(pointsClouds + 20);
        }
        if (clouds >= 10 && clouds < 15) {
            return 10 * multiplierClouds;
            // setPointsClouds(pointsClouds + 18);
        }
        if (clouds >= 15 && clouds < 20) {
            return 9 * multiplierClouds;
            // setPointsClouds(pointsClouds + 15);
        }
        if (clouds >= 20 && clouds < 30) {
            return 8 * multiplierClouds;
            // setPointsClouds(pointsClouds + 15);
        }
        if (clouds >= 30 && clouds < 40) {
            return 7 * multiplierClouds;
            // setPointsClouds(pointsClouds + 10);
        }
        if (clouds >= 40 && clouds < 50) {
            return 6 * multiplierClouds;
            // setPointsClouds(pointsClouds + 15);
        }
        if (clouds >= 50 && clouds < 60) {
            return 5 * multiplierClouds;
            // setPointsClouds(pointsClouds + 8);
        }
        if (clouds >= 60 && clouds < 70) {
            return 4 * multiplierClouds;
            // setPointsClouds(pointsClouds + 15);
        }
        if (clouds >= 70 && clouds < 80) {
            return 3 * multiplierClouds;
            // setPointsClouds(pointsClouds + 15);
        }
        if (clouds >= 80 && clouds < 90) {
            return 2 * multiplierClouds;
            // setPointsClouds(pointsClouds + 15);
        }
        if (clouds >= 90 && clouds < 100) {
            return multiplierClouds;
            // setPointsClouds(pointsClouds + 15);
        }
        if (clouds >= 100) {
            return 0;
        }
    }

    function getPointsWind(wind) {
        if (wind < 0.3) {
            return 14 * multiplierWind;
        }
        if (wind >= 0.3 && wind < 1.5) {
            return 13 * multiplierWind;
        }
        if (wind >= 1.5 && wind < 3.3) {
            return 12 * multiplierWind;
        }
        if (wind >= 3.3 && wind < 5.5) {
            return 10 * multiplierWind;
        }
        if (wind >= 5.5 && wind < 8.0) {
            return 8 * multiplierWind;
        }
        if (wind >= 8.0 && wind < 10.8) {
            return 6 * multiplierWind;
        }
        if (wind >= 10.8 && wind < 13.9) {
            return 5 * multiplierWind;
        }
        if (wind >= 13.9 && wind < 17.2) {
            return 4 * multiplierWind;
        }
        if (wind >= 17.2 && wind < 20.7) {
            return 3 * multiplierWind;
        }
        if (wind >= 20.7 && wind < 24.5) {
            return 2 * multiplierWind;
        }
        if (wind > 24.5) {
            return multiplierWind;
        }
    }

    function getPointsTemp(temp) {
        if (temp < 0) {
            return 0;
        }
        if (temp >= 0 && temp < 1) {
            return multiplierTemp;
        }
        if (temp >= 1 && temp < 2) {
            return 2 * multiplierTemp;
        }
        if (temp >= 2 && temp < 3) {
            return 3 * multiplierTemp;
        }
        if (temp >= 3 && temp < 4) {
            return 4 * multiplierTemp;
        }
        if (temp >= 4 && temp < 5) {
            return 5 * multiplierTemp;
        }
        if (temp >= 5 && temp < 6) {
            return 6 * multiplierTemp;
        }
        if (temp >= 6 && temp < 7) {
            return 7 * multiplierTemp;
        }
        if (temp >= 7 && temp < 8) {
            return 8 * multiplierTemp;
        }
        if (temp >= 8 && temp < 9) {
            return 9 * multiplierTemp;
        }
        if (temp >= 9 && temp < 10) {
            return 10 * multiplierTemp;
        }
        if (temp >= 10 && temp < 11) {
            return 11 * multiplierTemp;
        }
        if (temp >= 11 && temp < 12) {
            return 12 * multiplierTemp;
        }
        if (temp >= 12 && temp < 13) {
            return 13 * multiplierTemp;
        }
        if (temp >= 13 && temp < 14) {
            return 14 * multiplierTemp;
        }
        if (temp >= 14 && temp < 15) {
            return 15 * multiplierTemp;
        }
        if (temp >= 15 && temp < 16) {
            return 16 * multiplierTemp;
        }
        if (temp >= 16 && temp < 17) {
            return 17 * multiplierTemp;
        }
        if (temp >= 17 && temp < 18) {
            return 18 * multiplierTemp;
        }
        if (temp >= 18 && temp < 19) {
            return 19 * multiplierTemp;
        }
        if (temp >= 19 && temp < 20) {
            return 20 * multiplierTemp;
        }
        if (temp >= 20 && temp < 21) {
            return 21 * multiplierTemp;
        }
        if (temp >= 21 && temp < 22) {
            return 22 * multiplierTemp;
        }
        if (temp >= 22 && temp < 23) {
            return 23 * multiplierTemp;
        }
        if (temp >= 23 && temp < 24) {
            return 24 * multiplierTemp;
        }
        if (temp >= 24 && temp < 25) {
            return 25 * multiplierTemp;
        }
        if (temp >= 25 && temp < 26) {
            return 26 * multiplierTemp;
        }
        if (temp >= 26 && temp < 27) {
            return 27 * multiplierTemp;
        }
        if (temp >= 27 && temp < 28) {
            return 28 * multiplierTemp;
        }
        if (temp >= 28 && temp < 29) {
            return 29 * multiplierTemp;
        }
        if (temp >= 29 && temp < 30) {
            return 30 * multiplierTemp;
        }
        if (temp >= 30 && temp < 31) {
            return 31 * multiplierTemp;
        }
        if (temp >= 31 && temp < 32) {
            return 32 * multiplierTemp;
        }
        if (temp >= 32 && temp < 33) {
            return 33 * multiplierTemp;
        }
        if (temp >= 33 && temp < 34) {
            return 34 * multiplierTemp;
        }
        if (temp >= 34 && temp < 35) {
            return 35 * multiplierTemp;
        }
        if (temp >= 35) {
            return 36 * multiplierTemp;
        }
    }


    const refresh = () => {
        fetchLocations()
    }

    async function fetchLocations() {


        try {
            const resWadden = await Promise.all([
                axios.get(`https://api.openweathermap.org/data/2.5/weather?id=2749334&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}&lang=nl`),
                axios.get(`https://api.openweathermap.org/data/2.5/weather?id=2744608&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}&lang=nl`),
                axios.get(`https://api.openweathermap.org/data/2.5/weather?id=2753887&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}&lang=nl`),
                axios.get(`https://api.openweathermap.org/data/2.5/weather?id=2750417&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}&lang=nl`),
                axios.get(`https://api.openweathermap.org/data/2.5/weather?id=2745944&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}&lang=nl`)
            ]);
            const resZuidOost = await Promise.all([
                axios.get(`https://api.openweathermap.org/data/2.5/weather?id=2759922&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}&lang=nl`),
                axios.get(`https://api.openweathermap.org/data/2.5/weather?id=2756644&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}&lang=nl`),
                axios.get(`https://api.openweathermap.org/data/2.5/weather?id=2754668&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}&lang=nl`),
                axios.get(`https://api.openweathermap.org/data/2.5/weather?id=2759633&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}&lang=nl`),
                axios.get(`https://api.openweathermap.org/data/2.5/weather?id=2750310&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}&lang=nl`)
            ]);
            const resNoordWest = await Promise.all([
                axios.get(`https://api.openweathermap.org/data/2.5/weather?id=2754817&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}&lang=nl`),
                axios.get(`https://api.openweathermap.org/data/2.5/weather?id=2746023&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}&lang=nl`),
                axios.get(`https://api.openweathermap.org/data/2.5/weather?id=2750965&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}&lang=nl`),
                axios.get(`https://api.openweathermap.org/data/2.5/weather?id=2751792&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}&lang=nl`),
                axios.get(`https://api.openweathermap.org/data/2.5/weather?id=2747297&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}&lang=nl`)
            ]);
            const resNoordOost = await Promise.all([
                axios.get(`https://api.openweathermap.org/data/2.5/weather?id=2756759&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}&lang=nl`),
                axios.get(`https://api.openweathermap.org/data/2.5/weather?id=2759757&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}&lang=nl`),
                axios.get(`https://api.openweathermap.org/data/2.5/weather?id=2758131&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}&lang=nl`),
                axios.get(`https://api.openweathermap.org/data/2.5/weather?id=2755920&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}&lang=nl`),
                axios.get(`https://api.openweathermap.org/data/2.5/weather?id=2759103&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}&lang=nl`)
            ]);
            const resZuidWest = await Promise.all([
                axios.get(`https://api.openweathermap.org/data/2.5/weather?id=2744194&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}&lang=nl`),
                axios.get(`https://api.openweathermap.org/data/2.5/weather?id=2751729&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}&lang=nl`),
                axios.get(`https://api.openweathermap.org/data/2.5/weather?id=2747063&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}&lang=nl`),
                axios.get(`https://api.openweathermap.org/data/2.5/weather?id=2744179&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}&lang=nl`),
                axios.get(`https://api.openweathermap.org/data/2.5/weather?id=2751253&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}&lang=nl`)
            ]);

            const dataWadden = resWadden.map((res) => res.data);
            const dataZuidOost = resZuidOost.map((res) => res.data);
            const dataNoordWest = resNoordWest.map((res) => res.data);
            const dataNoordOost = resNoordOost.map((res) => res.data);
            const dataZuidWest = resZuidWest.map((res) => res.data);
            console.log(dataZuidOost)

            const locationsWaddenWithPoints = dataWadden.map((location, index) => {

                if (location.name === "Ulrum") {

                    return {
                        locationName: 'Schiermonnikoog',
                        locationTemp: location.main.temp,
                        locationClouds: location.clouds.all,
                        locationWind: location.wind.speed,
                        locationDescription: location.weather[0].description,
                        // locationRain: location.rain["1h"],
                        locationID: location.id,
                        locationIcon: location.weather[0].icon,
                        region: 'wadden',
                        // totalBoosterClouds: getPointsClouds(location.clouds.all, 2),
                        // totalBoosterWind: getPointsWind(location.wind.speed, 2),
                        totalPointsClouds: getPointsClouds(location.clouds.all),
                        totalPointsTemp: getPointsTemp(kelvinToCelsius(location.main.temp)),
                        totalPointsWind: getPointsWind(location.wind.speed),
                        totalPoints: getPointsClouds(location.clouds.all) + getPointsWind(location.wind.speed) + getPointsTemp(kelvinToCelsius(location.main.temp)),
                    }
                }


                return {
                    locationName: location.name,
                    locationTemp: location.main.temp,
                    locationClouds: location.clouds.all,
                    locationWind: location.wind.speed,
                    locationDescription: location.weather[0].description,
                    // locationRain: location.rain["1h"],
                    locationID: location.id,
                    locationIcon: location.weather[0].icon,
                    region: 'wadden',
                    // totalBoosterClouds: getPointsClouds(location.clouds.all, 2),
                    // totalBoosterWind: getPointsWind(location.wind.speed, 2),
                    totalPointsClouds: getPointsClouds(location.clouds.all),
                    totalPointsTemp: getPointsTemp(kelvinToCelsius(location.main.temp)),
                    totalPointsWind: getPointsWind(location.wind.speed),
                    totalPoints: getPointsClouds(location.clouds.all) + getPointsWind(location.wind.speed) + getPointsTemp(kelvinToCelsius(location.main.temp)),
                }


            })


            setLocationsWadden(locationsWaddenWithPoints)
            console.log('wadden', locationsWaddenWithPoints)
            console.log('cloudpunten', locationsWaddenWithPoints[0].totalPointsClouds)

            const locationsZuidOostWithPoints = dataZuidOost.map((location, index) => {
                if (location.name === "Assen") {
                    return {
                        locationName: 'Appelscha',
                        locationTemp: location.main.temp,
                        locationClouds: location.clouds.all,
                        locationWind: location.wind.speed,
                        locationDescription: location.weather[0].description,
                        locationID: location.id,
                        locationIcon: location.weather[0].icon,
                        region: 'zuidoost',
                        totalPointsClouds: getPointsClouds(location.clouds.all),
                        totalPointsTemp: getPointsTemp(kelvinToCelsius(location.main.temp)),
                        totalPointsWind: getPointsWind(location.wind.speed),
                        totalPoints: getPointsClouds(location.clouds.all) + getPointsWind(location.wind.speed) + getPointsTemp(kelvinToCelsius(location.main.temp)),
                    }
                }
                if (location.name === "Nieuwehorne") {
                    return {
                        locationName: 'Bontebok',
                        locationTemp: location.main.temp,
                        locationClouds: location.clouds.all,
                        locationWind: location.wind.speed,
                        locationDescription: location.weather[0].description,
                        locationID: location.id,
                        locationIcon: location.weather[0].icon,
                        region: 'zuidoost',
                        totalPointsClouds: getPointsClouds(location.clouds.all),
                        totalPointsTemp: getPointsTemp(kelvinToCelsius(location.main.temp)),
                        totalPointsWind: getPointsWind(location.wind.speed),
                        totalPoints: getPointsClouds(location.clouds.all) + getPointsWind(location.wind.speed) + getPointsTemp(kelvinToCelsius(location.main.temp)),

                    }
                }
                return {
                    locationName: location.name,
                    locationTemp: location.main.temp,
                    locationClouds: location.clouds.all,
                    locationWind: location.wind.speed,
                    locationDescription: location.weather[0].description,
                    locationID: location.id,
                    locationIcon: location.weather[0].icon,
                    region: 'zuidoost',
                    totalPointsClouds: getPointsClouds(location.clouds.all),
                    totalPointsTemp: getPointsTemp(kelvinToCelsius(location.main.temp)),
                    totalPointsWind: getPointsWind(location.wind.speed),
                    totalPoints: getPointsClouds(location.clouds.all) + getPointsWind(location.wind.speed) + getPointsTemp(kelvinToCelsius(location.main.temp)),

                }
            })
            setLocationsZuidOost(locationsZuidOostWithPoints)
            console.log('Zuidoost', locationsZuidOostWithPoints)

            const locationsNoordWestWithPoints = dataNoordWest.map((location, index) => {
                return {
                    locationName: location.name,
                    locationTemp: location.main.temp,
                    locationClouds: location.clouds.all,
                    locationWind: location.wind.speed,
                    locationDescription: location.weather[0].description,
                    locationID: location.id,
                    locationIcon: location.weather[0].icon,
                    region: 'noordwest',
                    totalPointsClouds: getPointsClouds(location.clouds.all),
                    totalPointsTemp: getPointsTemp(kelvinToCelsius(location.main.temp)),
                    totalPointsWind: getPointsWind(location.wind.speed),
                    totalPoints: getPointsClouds(location.clouds.all) + getPointsWind(location.wind.speed) + getPointsTemp(kelvinToCelsius(location.main.temp)),
                }
            })
            setLocationsNoordWest(locationsNoordWestWithPoints)
            console.log('Noordwest', locationsNoordWestWithPoints)

            const locationsNoordOostWithPoints = dataNoordOost.map((location, index) => {
                return {
                    locationName: location.name,
                    locationTemp: location.main.temp,
                    locationClouds: location.clouds.all,
                    locationWind: location.wind.speed,
                    locationDescription: location.weather[0].description,
                    locationID: location.id,
                    locationIcon: location.weather[0].icon,
                    region: 'noordoost',
                    totalPointsClouds: getPointsClouds(location.clouds.all),
                    totalPointsTemp: getPointsTemp(kelvinToCelsius(location.main.temp)),
                    totalPointsWind: getPointsWind(location.wind.speed),
                    totalPoints: getPointsClouds(location.clouds.all) + getPointsWind(location.wind.speed) + getPointsTemp(kelvinToCelsius(location.main.temp)),
                }
            })
            setLocationsNoordOost(locationsNoordOostWithPoints)
            console.log('Noordoost', locationsNoordOostWithPoints)

            const locationsZuidWestWithPoints = dataZuidWest.map((location, index) => {
                return {
                    locationName: location.name,
                    locationTemp: location.main.temp,
                    locationClouds: location.clouds.all,
                    locationWind: location.wind.speed,
                    locationDescription: location.weather[0].description,
                    locationID: location.id,
                    locationIcon: location.weather[0].icon,
                    region: 'zuidwest',
                    totalPointsClouds: getPointsClouds(location.clouds.all),
                    totalPointsTemp: getPointsTemp(kelvinToCelsius(location.main.temp)),
                    totalPointsWind: getPointsWind(location.wind.speed),
                    totalPoints: getPointsClouds(location.clouds.all) + getPointsWind(location.wind.speed) + getPointsTemp(kelvinToCelsius(location.main.temp)),
                }
            })
            setLocationsZuidWest(locationsZuidWestWithPoints)
            console.log('ZuidWest', locationsZuidWestWithPoints)


        } catch (e) {
            // throw Error("Promise failed");

            console.error(e);
            throw Error('oeps');

        }
    }

    useEffect(() => {
        fetchLocations();
    }, [])

    const data = {
        locationsWadden: locationsWadden,
        locationsZuidOost: locationsZuidOost,
        locationsNoordWest: locationsNoordWest,
        locationsNoordOost: locationsNoordOost,
        locationsZuidWest: locationsZuidWest,
        refresh,
        boosterCloud: boosterCloud,
        goBackHandler: goBackHandler,
        boosterTemp: boosterTemp,
        boosterWind: boosterWind,
    }

    return (
        <LocationContext.Provider value={data}>
            {children}
        </LocationContext.Provider>
    )
}

export default LocationContextProvider