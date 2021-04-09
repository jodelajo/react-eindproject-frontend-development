import { Link } from "react-router-dom";
import React, { useEffect }from 'react';
import axios from "axios";
import './Wadden.css';


function Wadden(){
    const id = 'id=2749334,2744608,2753887,2750417,2759757'
    const urlGroup = `https://api.openweathermap.org/data/2.5/group?${id}&appid=${process.env.REACT_APP_API_KEY}&lang=nl`


    useEffect(()=>{
        async function fetchData(){
            try {
                const result = await axios.get(urlGroup);
                console.log(result.data)
            } catch (e) {
                console.error(e);
            }
        }
        fetchData();
    },[])
    return <div className="friesland">
        <Link to="/">
            Groetjes uit De Wadden
        </Link>
    </div>
}
export default Wadden