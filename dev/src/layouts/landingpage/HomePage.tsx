import RotatingWords from "../../components/RotatingWords.tsx";
import { Spacer, Switch } from "@nextui-org/react";
import React, {useContext, useEffect} from "react";
import { ThemeContext } from "../../ThemeContext.tsx";

export const HomePage: React.FC = () => {
    const { setLightTheme, setDarkTheme } = useContext(ThemeContext);

    useEffect(() => {
        setLightTheme();
    }, []);

    return (
        <div id={"home"} className="flex-grow flex flex-col md:flex-row xl:justify-evenly justify-start items-center xl:h-screen mb-28 xl:mb-10 max-sm:mt-10">
            <div className="font-bold text-3xl flex flex-col items-center md:items-start">
                <RotatingWords />
                {/*<Switch aria-label="Automatic updates" onChange={changeThemeSwitch} />*/}
            </div>
            <div className="flex justify-center items-center md:w-1/2 w-full mt-4 md:mt-0">
                <img
                    src="/assets/img_pc.png"
                    className="w-full h-auto md:max-w-xs lg:max-w-md xl:max-w-lg"
                    alt="Laptop Image"
                />
            </div>
        </div>
    );
};