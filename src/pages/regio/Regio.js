
import React, { useState} from 'react';

import './Regio.css';



function Regio({name, temp, clouds, wind}) {
// const[score, setScore] = useState(0);

    // console.log(name)
    // console.log(clouds)
    return <div className="wadden">
        <p>{name}</p>
        <p>{temp} C</p>
        <p>{clouds}% bewolking</p>
        <p>Windkracht {wind}</p>



    </div>
}
export default Regio