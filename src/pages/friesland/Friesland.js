import React, {useContext} from 'react'
import {LocationContext} from '../../context/LocationContext'
import Region from "../../components/region/Region";
import LittleFooter from "../../components/littleFooter/LittleFooter";


function Friesland() {
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


    return <div>
        <Region
            locationsRegion={frieslandLocations}
            regionName="Friesland"
        />

    </div>
};
export default Friesland

