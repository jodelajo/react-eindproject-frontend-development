import React, {createContext, useEffect, useState,} from 'react';
import axios from 'axios';


export const LocationContext = createContext({})

function LocationContextProvider ({ children }) {
    const [locations, setLocations] = useState([])

    async function fetchLocations(){
        try {
            const res = await Promise.all([
                axios.get(`https://api.openweathermap.org/data/2.5/weather?id=2749334&appid=${process.env.REACT_APP_API_KEY}&lang=nl`),
                axios.get(`https://api.openweathermap.org/data/2.5/weather?id=2744608&appid=${process.env.REACT_APP_API_KEY}&lang=nl`),
                axios.get(`https://api.openweathermap.org/data/2.5/weather?id=2753887&appid=${process.env.REACT_APP_API_KEY}&lang=nl`)
            ]);
            const data = res.map((res) => res.data);
            // console.log(data)

            const locations = data.map((location, index)=>{
                return {
                    locationName: location.name,
                    locationTemp: location.main.temp,
                    locationClouds: location.clouds.all,
                    locationWind: location.wind.speed,
                    locationID: location.id,
                    region: 'wadden',
                    score: '',
                }
            })
           setLocations(locations)


        } catch {
            throw Error("Promise failed");
        }
    }
    useEffect(() => {
        if (locations) {
            // singleLocation(locations);

            fetchLocations();
        }
    }, [])

    const data = {
        locations: locations,
    }
    // console.log(locations)
    return (
        <LocationContext.Provider value={ data }>
            { children }

        </LocationContext.Provider>
    )
}
export default LocationContextProvider