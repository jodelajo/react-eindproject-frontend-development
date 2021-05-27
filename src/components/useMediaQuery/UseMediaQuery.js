/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect, useState} from "react";

function UseMediaQuery(query) {
    const [matches, setMatches] = useState(false);

    useEffect(
        () => {
            const mediaQuery = window.matchMedia(query);
            setMatches(mediaQuery.matches);
            const handler = (event) => setMatches(event.matches);
            mediaQuery.addEventListener("change", handler);
            return () => mediaQuery.removeEventListener("change", handler);
        },
        []
    );
    return matches;
}

export default UseMediaQuery