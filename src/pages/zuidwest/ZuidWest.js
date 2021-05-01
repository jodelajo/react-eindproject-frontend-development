import React, {useContext} from 'react';
import {LocationContext} from "../../context/LocationContext";
import Region from "../../components/region/Region";

function ZuidWest() {
    const { locationsZuidWest} = useContext(LocationContext)
    return <div>
        <Region
            locationsRegion={locationsZuidWest}
            regionName="Zuidwest"
        />
    </div>
};
export default ZuidWest