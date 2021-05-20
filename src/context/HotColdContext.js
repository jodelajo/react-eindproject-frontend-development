import React, {createContext, useState} from 'react';


export const HotColdContext = createContext({})

function HotColdContextProvider({children}) {
    const [winter, setWinter] = useState(true);

    function toggleSeason() {
       setWinter(!winter)
    }

    // function hot() {
    //     if(!season) {
    //         setSeason('hot')
    //     }
    // }
    //
    // function cold() {
    //     if(season) {
    //         setSeason('cold')
    //     }
    // }

    console.log('winter', winter)
    const data = {
        winter,
        toggleSeason,
    }


    return (
        <HotColdContext.Provider value={data}>
            {children}
        </HotColdContext.Provider>
    )
}

export default HotColdContextProvider;