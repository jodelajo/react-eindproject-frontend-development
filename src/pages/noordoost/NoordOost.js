import React, {useContext} from 'react';
import {LocationContext} from "../../context/LocationContext";
import Region from "../../components/region/Region";

function NoordOost() {
    const {locationsNoordOost} = useContext(LocationContext)
    console.log('noordoost', locationsNoordOost)
    return <div>
        <Region
            locationsRegion={locationsNoordOost}
            regionName="Noordoost"
        />
    </div>
}

export default NoordOost