import {ThemeContext} from "../../ThemeContext.tsx";
import React, {useContext, useEffect} from "react";
import Footer from "../../components/Footer.tsx";
import {HomePage} from "./HomePage.tsx";
import {AboutUs} from "./AboutUs.tsx";
import {FeaturesPage} from "./FeaturesPage.tsx";

const LandingPage = () => {
    const {setLightTheme} = useContext(ThemeContext);

    useEffect(() => {
        setLightTheme()
    }, []);

    return (
        <div className="flex flex-col min-h-screen">
            <HomePage/>
            <AboutUs/>
            <FeaturesPage/>
            <Footer/>
        </div>
    );
}

export default LandingPage;