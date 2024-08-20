import { useState, useEffect } from "react";

export function useIsMobile() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 640px)");

        const handleChange = (e: MediaQueryListEvent) => {
            setIsMobile(e.matches);
        };

        setIsMobile(mediaQuery.matches);

        mediaQuery.addEventListener("change", handleChange);
        return () => {
            mediaQuery.removeEventListener("change", handleChange);
        };
    }, []);

    return isMobile;
}