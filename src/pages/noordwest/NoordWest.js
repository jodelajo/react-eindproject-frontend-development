import React, {useContext} from 'react';
import {LocationContext} from "../../context/LocationContext";
import Region from "../../components/region/Region";

function NoordWest() {
    const {locationsNoordWest} = useContext(LocationContext)
    return <div>
        <Region
            locationsRegion={locationsNoordWest}
            regionName="Noordwest"
        />
    </div>
}

export default NoordWest