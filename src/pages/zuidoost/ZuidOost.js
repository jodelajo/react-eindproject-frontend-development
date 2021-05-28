import React, {useContext} from 'react';
import {LocationContext} from "../../context/LocationContext";
import Region from "../../components/region/Region";

function ZuidOost() {
    const {locationsZuidOost} = useContext(LocationContext)
    return <div>
        <Region
            locationsRegion={locationsZuidOost}
            regionName="Zuidoost"
        />
    </div>
}

export default ZuidOost