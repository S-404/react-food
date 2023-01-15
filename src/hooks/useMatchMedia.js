import {useEffect, useState} from "react";

export default function useMatchMedia(px) {

    const [matches, setMatches] = useState(
        window.matchMedia(`(max-width: ${px}px)`).matches
    )

    useEffect(() => {
        window
            .matchMedia(`(max-width: ${px}px)`)
            .addEventListener('change', e => setMatches( e.matches ));
    }, []);

    return matches
}