import React, {useContext} from 'react';
import {LocationContext} from "../../context/LocationContext";
import Region from "../../components/region/Region";

function Wadden() {
    const {locationsWadden} = useContext(LocationContext)
    return <div>
        <Region
            locationsRegion={locationsWadden}
            regionName="Wadden"
        />

    </div>
}

export default Wadden