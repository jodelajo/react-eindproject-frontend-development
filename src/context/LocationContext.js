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
    const [locationsNoordOost, setLocationsNoordOost] = useState([])
    const [locationsZuidWest, setLocationsZuidWest] = useState([])

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

            console.log(dataWadden)
            const locationsWaddenWithPoints = dataWadden.map((location, index) => {
                if (location.name === "Ulrum") {
                    return {
                        locationName: 'Schiermonnikoog',
                        locationTemp: location.main.temp,
                        locationClouds: location.clouds.all,
                        locationWind: location.wind.speed,
                        locationID: location.id,
                        locationIcon: location.weather[0].icon,
                        region: 'wadden',
                        totalPoints: getPointsClouds(location.clouds.all) + getPointsWind(location.wind.speed) + getPointsTemp(location.main.temp),
                    }
                }
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
                if(location.name === "Assen"){
                    return {
                        locationName: 'Appelscha',
                        locationTemp: location.main.temp,
                        locationClouds: location.clouds.all,
                        locationWind: location.wind.speed,
                        locationID: location.id,
                        locationIcon: location.weather[0].icon,
                        region: 'zuidoost',
                        totalPoints: getPointsClouds(location.clouds.all) + getPointsWind(location.wind.speed) + getPointsTemp(location.main.temp),
                    }
                }
                if (location.name === "Nieuwehorne") {
                    return {
                        locationName: 'Bontebok',
                        locationTemp: location.main.temp,
                        locationClouds: location.clouds.all,
                        locationWind: location.wind.speed,
                        locationID: location.id,
                        locationIcon: location.weather[0].icon,
                        region: 'zuidoost',
                        totalPoints: getPointsClouds(location.clouds.all) + getPointsWind(location.wind.speed) + getPointsTemp(location.main.temp),
                    }
                }
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
            console.log('Zuidoost', locationsZuidOostWithPoints)

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

            const locationsNoordOostWithPoints = dataNoordOost.map((location, index) => {
                return {
                    locationName: location.name,
                    locationTemp: location.main.temp,
                    locationClouds: location.clouds.all,
                    locationWind: location.wind.speed,
                    locationID: location.id,
                    locationIcon: location.weather[0].icon,
                    region: 'noordoost',
                    totalPoints: getPointsClouds(location.clouds.all) + getPointsWind(location.wind.speed) + getPointsTemp(location.main.temp),
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
                    locationID: location.id,
                    locationIcon: location.weather[0].icon,
                    region: 'zuidwest',
                    totalPoints: getPointsClouds(location.clouds.all) + getPointsWind(location.wind.speed) + getPointsTemp(location.main.temp),
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
    }

    return (
        <LocationContext.Provider value={data}>
            {children}
        </LocationContext.Provider>
    )
}

export default LocationContextProvider