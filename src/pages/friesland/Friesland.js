import React, {useContext, useEffect} from 'react';
import './Friesland.css';
import { LocationContext } from "../../context/LocationContext";

import Counter from "../../components/counter/Counter";

function Friesland() {
    const { locations  } = useContext(LocationContext)

    useEffect(() =>{
        console.log('data uit locationcontext', locations)
    },[locations])


    return <div>
        <p>hoi</p>
        <Counter />


    </div>
}

export default Friesland


// function singleLocation(locationArray){
//         let total=``;
//     for (let i = 0; i < locationArray.length; i++) {
//         const element = locationArray[i];
//        total += element;
//         // console.log(total)
//     }
//     return total
//
// }

