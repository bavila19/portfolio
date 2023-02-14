import { useState } from "react";

const useMediaQuery = (query) => {
    const [matches, setMatchees] = useState(false);

    useEffect (()=>{
        const media = window.matchMedia(query);
        if (media.matches !== matches){
            setMatchees(media.matches);
        }
        const listener = () => setMatchees(media.matches);
        window.addEventListener("resize", listener);
        return ()=> window.removeEventListener("resize", listener);
    }, [matches, query]);

    return matches
}

export default useMediaQuery