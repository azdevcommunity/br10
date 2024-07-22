import ThemeButtons from "../components/ThemeButtons.tsx";
import {ThemeContext} from "../ThemeContext.tsx";
import React, {useContext} from "react";
import Footer from "../components/Footer.tsx";
import {Spacer, Switch} from "@nextui-org/react";

const Main = () => {
    const {setLightTheme, setDarkTheme} = useContext(ThemeContext);
    const {theme} = useContext(ThemeContext);

    const changeThemeSwitch = (e) => {
        if (e.target.checked) {
            setDarkTheme();
        } else {
            setLightTheme();
        }
    }

    return (
        <div className="flex flex-col min-h-screen">
            <div className="flex-grow flex md:flex-row flex-col justify-evenly items-center">
                <div className="font-bold text-3xl">
                    Welcome to br10!
                    <Spacer y={3}/>
                    <Switch defaultSelected aria-label="Automatic updates" onChange={changeThemeSwitch}/>
                    <Spacer y={6}/>
                </div>
                <img
                    src="/assets/img_phones.png"
                    className="h-18 sm:h-8 md:h-10 lg:h-12 xl:h-96"
                    alt="asd"/>

            </div>
            <Footer/>
        </div>
    );
}

export default Main;