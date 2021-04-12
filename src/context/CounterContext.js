//DIT IS NOG NIKS

import React, {createContext, useEffect, useState} from 'react';

export const CounterContext = createContext({})

function CounterContextProvider({ children }) {
    // const [pointsClouds, setPointsClouds] = useState(0)
    // const [pointsTemp, setPointsTemp] = useState(0)
    // const [pointsWind, setPointsWind] =useState(0)
    // // const [clouds, setClouds] = useState(0)
    // // const [wind, setWind] = useState(0)
    // // const [temp, setTemp] = useState(0)
    //
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
    //
    // useEffect(()=>{
    //
    //     getPointsClouds();
    //     getPointsTemp();
    //     getPointsWind();
    // },[])
    // const data = {
    //     activeLanguage: language,
    //     getNlFunction: getlanguageDutch,
    //     getESFunction: getlanguageSpanish,
    // }
    //


    return (
        <CounterContext.Provider value={data}>
            { children }
        </CounterContext.Provider>
    )
}
export default CounterContextProvider;