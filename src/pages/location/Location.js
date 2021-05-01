import React, {useContext} from 'react'
import {LocationContext} from "../../context/LocationContext";
import Counter from "../../components/counter/Counter";
import { useParams} from 'react-router-dom'




function Location({location }){
    const { slug } = useParams()
    // const singleLocation = location[{slug}]
    const {
        locationsWadden,
        locationsZuidOost,
        locationsNoordWest,
        locationsNoordOost,
        locationsZuidWest
    } = useContext(LocationContext)

    const frieslandLocations = locationsWadden
        .concat(locationsZuidOost)
        .concat(locationsNoordWest)
        .concat(locationsNoordOost)
        .concat(locationsZuidWest)


    console.log('friesland-Region', frieslandLocations)



    return <div>

    </div>
}
export default Location