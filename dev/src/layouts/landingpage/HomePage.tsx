import RotatingWords from "../../components/RotatingWords.tsx";
import {Spacer, Switch} from "@nextui-org/react";
import React, {useContext} from "react";
import {ThemeContext} from "../../ThemeContext.tsx";

export const HomePage = () => {

    const {setLightTheme, setDarkTheme} = useContext(ThemeContext);

    const changeThemeSwitch = (e) => {
        if (e.target.checked) {
            setDarkTheme()
        } else {
            setLightTheme()
        }
    }
    return (
        <div className="flex-grow flex md:flex-row flex-col justify-evenly items-center  h-screen">
            <div className="font-bold text-3xl">
                {/*<TypeAnimation*/}
                {/*    sequence={[*/}
                {/*        `Sadə və sürətli\n rezervasiya!`,*/}
                {/*        100*/}
                {/*    ]}*/}
                {/*    speed={50}*/}
                {/*    style={{ fontSize: '1.25em' }}*/}
                {/*/>*/}
                <RotatingWords/>
                <Spacer y={3}/>
                <Switch aria-label="Automatic updates" onChange={changeThemeSwitch}/>
                <Spacer y={6}/>
            </div>
            <img
                src="/assets/img_phones.png"
                className="h-18 sm:h-8 md:h-10 lg:h-12 xl:h-96"
                alt="asd"/>

        </div>
    );
}