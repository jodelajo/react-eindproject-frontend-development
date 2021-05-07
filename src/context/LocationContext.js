import React, {createContext, useEffect, useState,} from 'react';
import axios from 'axios';
import kelvinToCelsius from "../helpers/kelvinToCelsius";

function getPointsClouds(clouds) {
    if (clouds < 10) {
        return 11;
        // setPointsClouds(pointsClouds + 20);
    }
    if (clouds >= 10 && clouds < 15) {
        return 10;
        // setPointsClouds(pointsClouds + 18);
    }
    if (clouds >= 15 && clouds < 20) {
        return 9;
        // setPointsClouds(pointsClouds + 15);
    }
    if (clouds >= 20 && clouds < 30) {
        return 8;
        // setPointsClouds(pointsClouds + 15);
    }
    if (clouds >= 30 && clouds < 40) {
        return 7;
        // setPointsClouds(pointsClouds + 10);
    }
    if (clouds >= 40 && clouds < 50) {
        return 6;
        // setPointsClouds(pointsClouds + 15);
    }
    if (clouds >= 50 && clouds < 60) {
        return 5;
        // setPointsClouds(pointsClouds + 8);
    }
    if (clouds >= 60 && clouds < 70) {
        return 4;
        // setPointsClouds(pointsClouds + 15);
    }
    if (clouds >= 70 && clouds < 80) {
        return 3;
        // setPointsClouds(pointsClouds + 15);
    }
    if (clouds >= 80 && clouds < 90) {
        return 2;
        // setPointsClouds(pointsClouds + 15);
    }
    if (clouds >= 90 && clouds < 100) {
        return 1;
        // setPointsClouds(pointsClouds + 15);
    }
    if(clouds >= 100){
        return 0;
    }
}


function getPointsWind(wind) {
    if (wind < 0.3) {
        return 14;
    }
    if (wind >= 0.3 && wind < 1.5) {
        return 13;
    }
    if (wind >= 1.5 && wind < 3.3) {
        return 12;
    }
    if (wind >= 3.3 && wind < 5.5) {
        return 10;
    }
    if (wind >= 5.5 && wind < 8.0) {
        return 8;
    }
    if (wind >= 8.0 && wind < 10.8) {
        return 6;
    }
    if (wind >= 10.8 && wind < 13.9) {
        return 5;
    }
    if (wind >= 13.9 && wind < 17.2) {
        return 4;
    }
    if (wind >= 17.2 && wind < 20.7) {
        return 3;
    }
    if (wind >= 20.7 && wind < 24.5) {
        return 2;
    }
    if (wind > 24.5) {
        return 1;
    }
}

function getPointsTemp(temp) {
    if (temp < 0) {
        return 0;
    }
    if (temp >= 0 && temp < 1) {
        return 1;
    }
    if (temp >= 1 && temp < 2) {
        return 2;
    }
    if (temp >= 2 && temp < 3) {
        return 3;
    }
    if (temp >= 3 && temp < 4) {
        return 4;
    }
    if (temp >= 4 && temp < 5) {
        return 5;
    }
    if (temp >= 5 && temp < 6) {
        return 6;
    }
    if (temp >= 6 && temp < 7) {
        return 7;
    }
    if (temp >= 7 && temp < 8) {
        return 8;
    }
    if (temp >= 8 && temp < 9) {
        return 9;
    }
    if (temp >= 9 && temp < 10) {
        return 10;
    }
    if (temp >= 10 && temp < 11) {
        return 11;
    }
    if (temp >= 11 && temp < 12) {
        return 12;
    }
    if (temp >= 12 && temp < 13) {
        return 13;
    }
    if (temp >= 13 && temp < 14) {
        return 14;
    }
    if (temp >= 14 && temp < 15) {
        return 15;
    }
    if (temp >= 15 && temp < 16) {
        return 16;
    }
    if (temp >= 16 && temp < 17) {
        return 17;
    }
    if (temp >= 17 && temp < 18) {
        return 18;
    }
    if (temp >= 18 && temp < 19) {
        return 19;
    }
    if (temp >= 19 && temp < 20) {
        return 20;
    }
    if (temp >= 20 && temp < 21) {
        return 21;
    }
    if (temp >= 21 && temp < 22) {
        return 22;
    }
    if (temp >= 22 && temp < 23) {
        return 23;
    }
    if (temp >= 23 && temp < 24) {
        return 24;
    }
    if (temp >= 24 && temp < 25) {
        return 25;
    }
    if (temp >= 25 && temp < 26) {
        return 26;
    }
    if (temp >= 26 && temp < 27) {
        return 27;
    }
    if (temp >= 27 && temp < 28) {
        return 28;
    }
    if (temp >= 28 && temp < 29) {
        return 29;
    }
    if (temp >= 29 && temp < 30) {
        return 30;
    }
    if (temp >= 30 && temp < 31) {
        return 31;
    }
    if (temp >= 31 && temp < 32) {
        return 32;
    }
    if (temp >= 32 && temp < 33) {
        return 33;
    }
    if (temp >= 33 && temp < 34) {
        return 34;
    }
    if (temp >= 34 && temp < 35) {
        return 35;
    }
    if (temp >= 35) {
        return 36;
    }
}

export const LocationContext = createContext({})

function LocationContextProvider({children}) {
    const [locationsWadden, setLocationsWadden] = useState([])
    const [locationsZuidOost, setLocationsZuidOost] = useState([])
    const [locationsNoordWest, setLocationsNoordWest] = useState([])
    const [locationsNoordOost, setLocationsNoordOost] = useState([])
    const [locationsZuidWest, setLocationsZuidWest] = useState([])
    // const [boosterSelected, toggleBoosterSelected] = useState(false)

    //
    //
    // function boosterCloud(){
    //     if (boosterSelected === true){
    //       toggleBoosterSelected(false)
    //     }else {
    //         toggleBoosterSelected(true)
    //     }
    // }

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
                    totalPointsClouds: getPointsClouds(location.clouds.all),
                    totalPointsTemp: getPointsTemp(kelvinToCelsius(location.main.temp)),
                    totalPointsWind: getPointsWind(location.wind.speed),
                    totalPoints: getPointsClouds(location.clouds.all) + getPointsWind(location.wind.speed) + getPointsTemp(kelvinToCelsius(location.main.temp)),
                }

            })


            setLocationsWadden(locationsWaddenWithPoints)
            console.log('wadden', locationsWaddenWithPoints)

            const locationsZuidOostWithPoints = dataZuidOost.map((location, index) => {
                if(location.name === "Assen"){
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
        locationsNoordOost: locationsNoordOost,
        locationsZuidWest: locationsZuidWest,
        // boosterCloud: boosterCloud,
    }

    return (
        <LocationContext.Provider value={data}>
            {children}
        </LocationContext.Provider>
    )
}

export default LocationContextProvider