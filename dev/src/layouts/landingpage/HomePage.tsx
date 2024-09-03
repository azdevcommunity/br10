import RotatingWords from "../../components/RotatingWords.tsx";
import {Spacer, Switch} from "@nextui-org/react";
import React, {useContext, useEffect} from "react";
import {ThemeContext} from "../../ThemeContext.tsx";
import {AnimatedSubscribeButton} from "@/components/AnimatedSubscribeButton.tsx";
import {CheckIcon, ChevronRightIcon} from "lucide-react";
import {useNavigate} from "react-router-dom";

export const HomePage: React.FC = () => {
    const {setLightTheme, setDarkTheme} = useContext(ThemeContext);
    const navigate = useNavigate();


    useEffect(() => {
        setLightTheme();
    }, []);


    return (
        <div id={"home"}
             className="mt-24 flex-grow flex flex-col md:flex-row justify-around min-[1720px]:justify-center items-start xl:h-full mb-28 xl:mb-10 max-sm:mt-10 w-full">
            <div className="font-bold text-3xl flex flex-col items-start">
                {/*<RotatingWords />*/}
                <div className={""}>
                    <div className={"font-bold text-8xl max-sm:text-6xl max-[320px]:text-5xl leading-[6rem] max-sm:px-5"}
                         style={{textShadow: "0px 3px #DCDCDC", fontFamily: "CalSans"}}>
                        Rezervasiya
                    </div>
                    <div className={"font-bold text-8xl max-sm:text-6xl max-[320px]:text-5xl leading-[5rem] max-sm:px-5"}
                         style={{textShadow: "0px 3px #DCDCDC", fontFamily: "CalSans"}}>
                        artıq daha
                    </div>
                    <div className={"font-bold text-8xl max-sm:text-6xl max-[320px]:text-5xl text-stroke-2 text-white max-sm:px-5"}
                         style={{textShadow: "0px 5px #000", fontFamily: "CalSans"}}>
                        asan.
                    </div>
                </div>
                <div
                    className={"font-normal text-[1.3rem] max-sm:px-5 max-sm:text[0.5rem] max-[320px]:text-[1rem] max-[320px]:leading-5 leading-8 max-w-[36rem] mt-5 mb-9 "}>
                    <span className={"font-bold"}>BR10</span> ilə tanış olun, hər peşəkar üçün nəzərdə tutulmuş rahat
                    cədvəl qurma həlli. İşinizə fokuslanın,
                    cədvəlinizə deyil. Hər kəs üçün əlçatan, istənilən vaxt istifadəyə hazır.
                </div>
                <div className="mb-4 text-center max-sm:w-full max-sm:px-5 "><a
                    className="rounded-3xl text-[1rem] flex items-center justify-center px-8 py-4 font-semibold uppercase
                    shadow-[0_4px_0px_0px_rgb(0_0_0)] hover:shadow-[0_6px_0px_0px_rgb(0_0_0)] max-sm:w-full
                    leading-none [&amp;_svg]:ml-[8px] [&amp;_svg]:mt-[1px] shadow-fill
                    border-black border-2 transition-all duration-150 ease-in-out
                    will-change-transform hover:translate-y-[-2px] active:translate-y-[2px] active:duration-100 md:h-[90px]
                     min-w-56 group h-full max-h-20 w-full bg-[#242427] !text-white sm:w-auto"
                    onClick={() => navigate('register')}>Başla
                    <div className="ml-2 scale-150">
                        <svg className="stroke-white stroke-2" fill="none" width="10" height="10" viewBox="0 0 10 10"
                             aria-hidden="true">
                            <path className="opacity-0 transition group-hover:opacity-100" d="M0 5h7"></path>
                            <path className="transition group-hover:translate-x-[3px]" d="M1 1l4 4-4 4"></path>
                        </svg>
                    </div>
                </a><small className="text-sm font-normal opacity-50">30 saniyədən daha az</small></div>
                {/*        <AnimatedSubscribeButton*/}
                {/*            buttonColor="#000000"*/}
                {/*            buttonTextColor="#ffffff"*/}
                {/*            subscribeStatus={false}*/}
                {/*            initialText={*/}
                {/*                <span className="group inline-flex items-center">*/}
                {/*                GET STARTED*/}
                {/*                    <ChevronRightIcon*/}
                {/*                        className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"/>*/}
                {/*</span>*/}
                {/*            }*/}
                {/*            changeText={*/}
                {/*                <span className="group inline-flex items-center">*/}
                {/*</span>*/}
                {/*            }*/}
                {/*        />*/}

                {/*<Switch aria-label="Automatic updates" onChange={changeThemeSwitch} />*/}
            </div>
            <div className="flex justify-center items-center ">
                <img
                    src="/assets/landingpage_img_1.png"
                    className="w-full h-auto md:max-w-xs lg:max-w-md xl:max-w-lg"
                    alt="Laptop Image"
                />
            </div>
        </div>
    );
};