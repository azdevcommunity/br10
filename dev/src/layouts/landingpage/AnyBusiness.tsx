import React, {useState} from 'react';
import {WobbleCard} from "@/components/WobbleCard.tsx";
import {Image} from "@nextui-org/react";
import {AnimatedListDemo} from "@/components/Notification.tsx";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar.tsx";

const ButtonComponent = ({isSelected, onClick, text}) => {
    // Common styles for the button
    const baseStyles = `rounded-3xl font-matter flex h-[54px] items-center justify-center py-4 
        font-semibold uppercase [&_svg]:ml-[8px] text-md border-[2px] leading-none
        transition-all duration-[250ms] ease-in-out hover:rounded-2xl min-w-[278px] !px-5
        md:flex md:min-w-0 md:place-items-center md:px-0`;

    // Styles when the button is selected
    const selectedStyles = `bg-primary-700 border-black border-dashed !bg-transparent bg-opacity-0 text-black`;

    // Styles when the button is unselected
    const unselectedStyles = `bg-black text-white border-black [&_svg]:mt-[1px]`;

    return (
        <button
            onClick={onClick}
            className={`${baseStyles} ${isSelected ? unselectedStyles : selectedStyles}`}
            va-auto-track="1"
        >
            {text}
        </button>
    );
};

export const AnyBusiness = () => {
    // State to track which button is selected
    const [selectedButtonIndex, setSelectedButtonIndex] = useState(null);

    const wordArrays = [
        "Bərbər → Müştəri",
        "Müəllim → Tələbə",
        "Həkim → Xəstə"
    ]

    // Function to handle button click
    const handleButtonClick = (index) => {
        setSelectedButtonIndex(index);
    };

    return (
        <div className={"mx-auto w-full max-w-screen-xl px-11 max-sm:px-4 max-sm:mt-10 mt-28 text-center max-sm:text-start"}>
            <span className={"font-bold text-7xl max-sm:text-3xl"}>İstənilən biznesə uyğunlaşan cədvəl</span>
            <div
                className="flex overflow-x-auto space-x-4 w-full p-4 pl-0 mx-auto  justify-center max-sm:justify-start items-center flex-row">
                {[...Array(3)].map((_, index) => (
                    <ButtonComponent
                        key={index}
                        isSelected={selectedButtonIndex === index}
                        onClick={() => handleButtonClick(index)}
                        text={wordArrays[index]}
                    />
                ))}
            </div>
            <div className={"max-w-screen-xl w-full mx-auto"}>
                <WobbleCard
                    containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[200px] lg:min-h-[600px] xl:min-h-[300px] mb-6">
                    <div className="max-w-sm">
                        <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                            Signup for blazing-fast cutting-edge state of the art Gippity AI
                            wrapper today!
                        </h2>
                        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
                            With over 100,000 mothly active bot users, Gippity AI is the most
                            popular AI platform for developers.
                        </p>
                    </div>
                    <Image
                        src="/linear.webp"
                        width={500}
                        height={500}
                        alt="linear demo image"
                        className="absolute -right-10 md:-right-[40%] lg:-right-[20%]
                        -bottom-10 object-contain rounded-2xl"
                    />
                </WobbleCard>
            </div>
            <div
                className="border-black relative w-full max-w-screen-xl overflow-hidden rounded-2xl border-2 border-l-[17px]
                mx-auto mb-6 col-span-2 lg:block"
            >
                <div className="relative h-[276px]  overflow-hidden object-cover duration-500 md:h-[248px]"

                     style={{backgroundImage: "radial-gradient(121.58% 100% at 10%, #8690a6 0%, #d5d5d6 100%)"}}>
                    <div
                        className="absolute bottom-0 top-8 z-10 mx-8 -mb-40 w-[1150px]  !left-0 max-w-[700px]
                        md:top-24 md:ml-6 md:w-[380px] lg:top-8 xl:!left-24"
                    ><img alt="Avoid meeting overload" loading="lazy" width="305" height="196"
                          decoding="async" data-nimg="1"
                          className="rounded-t-4xl border-primary-700 w-full border-[14px]"
                          src="https://cal.com/_next/static/media/feature-06.1952c2b8.svg"
                          style={{color: "transparent"}}/></div>
                </div>
                <div
                    className="border-black flex flex-col place-content-between border-t-2 border-dashed p-5
                    pb-8 pt-5 md:gap-4 md:px-8 md:pb-10 !gap-2 md:flex-col md:gap-6"
                ><span className="font-cal pt-1 md:text-2xl">Avoid meeting overload</span><span
                    className="max-w-[350px] text-base max-w-[320px] md:text-lg">Limit people from overbooking you on
                    a weekly or daily basis. Put breathing room between meetings with buffers either side and prevent
                    surprises with minimum notice periods.</span>
                </div>
                <div
                    className="md:border-black pointer-events-none absolute left-8 top-8 z-30 hidden border-2
                    md:place-content-center md:rounded-full xl:grid left-4 top-4 h-14 w-14 lg:left-7 lg:top-8"
                >
                    <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M29.8556 47.8504C35.0242 47.8504 38.5876 43.9339 38.5876 39.1184V33.3399C38.5876
                                28.5244 35.0242 24.6079 29.8556 24.6079C24.687 24.6079 21.1236 28.5244 21.1236
                                33.3399V39.1184C21.1236 43.9339 24.687 47.8504 29.8556 47.8504ZM25.7785
                                38.6048V33.8856C25.7785 30.6432 27.0948 28.7813 29.8556 28.7813C32.6165 28.7813 33.9327
                                30.6432 33.9327 33.8856V38.6048C33.9327 41.5262 32.6165 43.6771 29.8556 43.6771C27.0948
                                43.6771 25.7785 41.5262 25.7785 38.6048ZM42.9298 47.4331H47.4242V24.961H42.9298L39.0453
                                29.4875V29.9691H42.9298V47.4331Z"
                            fill="#131212"></path>
                    </svg>
                </div>
            </div>
            <div
                className={"flex flex-row max-sm:flex-col max-sm:space-y-6 justify-center  max-sm:space-x-0 space-x-3"}>
                <div
                    className="border-black relative max-sm:w-full w-fit  overflow-hidden rounded-2xl border-2 border-l-[17px]
                col-span-2 lg:block"
                >
                    <div className="relative h-[276px]  overflow-hidden object-cover duration-500 md:h-[248px]"

                         style={{backgroundImage: "radial-gradient(121.58% 100% at 10%, #8690a6 0%, #d5d5d6 100%)"}}>
                        <div
                            className="absolute bottom-0 top-8 z-10 mx-8 -mb-40 w-[1150px] xl:left-32 !left-0 max-w-[700px]
                        md:top-24 md:ml-6 md:w-[380px] lg:top-8 xl:!left-24"
                        ><img alt="Avoid meeting overload" loading="lazy" width="305" height="196"
                              decoding="async" data-nimg="1"
                              className="rounded-t-4xl border-primary-700 w-full border-[14px]"
                              src="https://cal.com/_next/static/media/feature-06.1952c2b8.svg"
                              style={{color: "transparent"}}/></div>
                    </div>
                    <div
                        className="border-black flex flex-col place-content-between border-t-2 border-dashed p-5
                    pb-8 pt-5 md:flex-row md:gap-4 md:px-8 md:pb-10 !gap-2 md:flex-col md:gap-6"
                    ><span className="font-cal pt-1 md:text-2xl">Avoid meeting overload</span><span
                        className="max-w-[350px] text-base max-w-[320px] md:text-lg">Limit people from overbooking you on
                    a weekly or daily basis. Put breathing room between meetings with buffers either side and prevent
                    surprises with minimum notice periods.</span>
                    </div>
                    <div
                        className="md:border-black pointer-events-none absolute left-8 top-8 z-30 hidden border-2
                    md:place-content-center md:rounded-full xl:grid left-4 top-4 h-14 w-14 lg:left-7 lg:top-8"
                    >
                        <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M27.0575 47.416C32.2095 47.416 35.7615 43.512 35.7615 38.712V32.952C35.7615 28.152
                                32.2095 24.248 27.0575 24.248C21.9055 24.248 18.3535 28.152 18.3535 32.952V38.712C18.3535
                                43.512 21.9055 47.416 27.0575 47.416ZM22.9935 38.2V33.496C22.9935 30.264 24.3055 28.408
                                27.0575 28.408C29.8095 28.408 31.1215 30.264 31.1215 33.496V38.2C31.1215 41.112 29.8095
                                43.256 27.0575 43.256C24.3055 43.256 22.9935 41.112 22.9935 38.2ZM37.4338
                                47H53.4018V43.064H45.8498C46.6498 42.488 47.2898 41.72 47.8338 41.016L51.3218
                                36.472C52.7938 34.584 53.2738 33.112 53.2738 31.32C53.2738 27.352 50.0418 24.184 45.4018
                                24.184C40.7938 24.184 37.4338 27.352 37.4338 31.96H42.0738C42.0738 29.656 43.2578 28.344
                                45.3378 28.344C47.4178 28.344 48.6338 29.656 48.6338 31.576C48.6338 32.952 47.7378 34.36
                                46.3938 35.928L37.4338 46.488V47Z"
                                fill="#131212"></path>
                        </svg>
                    </div>
                </div>
                <div
                    className="border-black relative max-sm:w-full w-fit  overflow-hidden rounded-2xl border-2 border-l-[17px]
                col-span-2 lg:block"
                >
                    <div className="relative h-[276px]  overflow-hidden object-cover duration-500 md:h-[248px]"

                         style={{backgroundImage: "radial-gradient(121.58% 100% at 10%, #8690a6 0%, #d5d5d6 100%)"}}>
                        <div
                            className="absolute bottom-0 top-8 z-10 mx-8 -mb-40 w-[1150px] xl:left-32 !left-0 max-w-[700px]
                        md:top-24 md:ml-6 md:w-[380px] lg:top-8 xl:!left-24"
                        ><img alt="Avoid meeting overload" loading="lazy" width="305" height="196"
                              decoding="async" data-nimg="1"
                              className="rounded-t-4xl border-primary-700 w-full border-[14px]"
                              src="https://cal.com/_next/static/media/feature-06.1952c2b8.svg"
                              style={{color: "transparent"}}/></div>
                    </div>
                    <div
                        className="border-black flex flex-col place-content-between border-t-2 border-dashed p-5
                    pb-8 pt-5 md:flex-row md:gap-4 md:px-8 md:pb-10 !gap-2 md:flex-col md:gap-6"
                    ><span className="font-cal pt-1 md:text-2xl">Avoid meeting overload</span><span
                        className="max-w-[350px] text-base max-w-[320px] md:text-lg">Limit people from overbooking you on
                    a weekly or daily basis. Put breathing room between meetings with buffers either side and prevent
                    surprises with minimum notice periods.</span>
                    </div>
                    <div
                        className="md:border-black pointer-events-none absolute left-8 top-8 z-30 hidden border-2
                    md:place-content-center md:rounded-full xl:grid left-4 top-4 h-14 w-14 lg:left-7 lg:top-8"
                    >
                        <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M27.0575 47.416C32.2095 47.416 35.7615 43.512 35.7615 38.712V32.952C35.7615 28.152
                                32.2095 24.248 27.0575 24.248C21.9055 24.248 18.3535 28.152 18.3535 32.952V38.712C18.3535
                                43.512 21.9055 47.416 27.0575 47.416ZM22.9935 38.2V33.496C22.9935 30.264 24.3055 28.408
                                27.0575 28.408C29.8095 28.408 31.1215 30.264 31.1215 33.496V38.2C31.1215 41.112 29.8095
                                43.256 27.0575 43.256C24.3055 43.256 22.9935 41.112 22.9935 38.2ZM37.4338
                                47H53.4018V43.064H45.8498C46.6498 42.488 47.2898 41.72 47.8338 41.016L51.3218
                                36.472C52.7938 34.584 53.2738 33.112 53.2738 31.32C53.2738 27.352 50.0418 24.184 45.4018
                                24.184C40.7938 24.184 37.4338 27.352 37.4338 31.96H42.0738C42.0738 29.656 43.2578 28.344
                                45.3378 28.344C47.4178 28.344 48.6338 29.656 48.6338 31.576C48.6338 32.952 47.7378 34.36
                                46.3938 35.928L37.4338 46.488V47Z"
                                fill="#131212"></path>
                        </svg>
                    </div>
                </div>
                <div
                    className="border-black relative max-sm:w-full w-fit  overflow-hidden rounded-2xl border-2 border-l-[17px]
                col-span-2 lg:block"
                >
                    <div className="relative h-[276px]  overflow-hidden object-cover duration-500 md:h-[248px]"

                         style={{backgroundImage: "radial-gradient(121.58% 100% at 10%, #8690a6 0%, #d5d5d6 100%)"}}>
                        <div
                            className="absolute bottom-0 top-8 z-10 mx-8 -mb-40 w-[1150px] xl:left-32 !left-0 max-w-[700px]
                        md:top-24 md:ml-6 md:w-[380px] lg:top-8 xl:!left-24"
                        ><img alt="Avoid meeting overload" loading="lazy" width="305" height="196"
                              decoding="async" data-nimg="1"
                              className="rounded-t-4xl border-primary-700 w-full border-[14px]"
                              src="https://cal.com/_next/static/media/feature-06.1952c2b8.svg"
                              style={{color: "transparent"}}/></div>
                    </div>
                    <div
                        className="border-black flex flex-col place-content-between border-t-2 border-dashed p-5
                    pb-8 pt-5 md:flex-row md:gap-4 md:px-8 md:pb-10 !gap-2 md:flex-col md:gap-6"
                    ><span className="font-cal pt-1 md:text-2xl">Avoid meeting overload</span><span
                        className="max-w-[350px] text-base max-w-[320px] md:text-lg">Limit people from overbooking you on
                    a weekly or daily basis. Put breathing room between meetings with buffers either side and prevent
                    surprises with minimum notice periods.</span>
                    </div>
                    <div
                        className="md:border-black pointer-events-none absolute left-8 top-8 z-30 hidden border-2
                    md:place-content-center md:rounded-full xl:grid left-4 top-4 h-14 w-14 lg:left-7 lg:top-8"
                    >
                        <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M27.0575 47.416C32.2095 47.416 35.7615 43.512 35.7615 38.712V32.952C35.7615 28.152
                                32.2095 24.248 27.0575 24.248C21.9055 24.248 18.3535 28.152 18.3535 32.952V38.712C18.3535
                                43.512 21.9055 47.416 27.0575 47.416ZM22.9935 38.2V33.496C22.9935 30.264 24.3055 28.408
                                27.0575 28.408C29.8095 28.408 31.1215 30.264 31.1215 33.496V38.2C31.1215 41.112 29.8095
                                43.256 27.0575 43.256C24.3055 43.256 22.9935 41.112 22.9935 38.2ZM37.4338
                                47H53.4018V43.064H45.8498C46.6498 42.488 47.2898 41.72 47.8338 41.016L51.3218
                                36.472C52.7938 34.584 53.2738 33.112 53.2738 31.32C53.2738 27.352 50.0418 24.184 45.4018
                                24.184C40.7938 24.184 37.4338 27.352 37.4338 31.96H42.0738C42.0738 29.656 43.2578 28.344
                                45.3378 28.344C47.4178 28.344 48.6338 29.656 48.6338 31.576C48.6338 32.952 47.7378 34.36
                                46.3938 35.928L37.4338 46.488V47Z"
                                fill="#131212"></path>
                        </svg>
                    </div>
                </div>
            </div>
            <div
                className={"w-full max-sm:flex-col-reverse flex flex-row mt-10 justify-center max-w-screen-xl mx-auto space-x-10 max-sm:space-x-0"}>
                <AnimatedListDemo className={"max-sm:w-full rounded-3xl w-[50%] max-sm:mt-10"} />
                <div className={"flex flex-col text-start space-y-10 max-sm:space-y-4"}>
                    <span className={`text-5xl font-bold max-sm:text-3xl`}>
                        Müştəri rezervasiyası haqqında ani bildiriş – işinizi asanlaşdıran rahatlıq!
                    </span>
                    <span>
                        Bildirişlər vasitəsilə rezervasiyalar dərhal qəbul edilir. Vaxtında hazırlıq görməyə, müştəri axınını
                        səmərəli idarə etməyə və xidmət keyfiyyətini artırmağa imkan yaradır. Qəfil dəyişikliklər və ləğvlər
                        barədə vaxtında məlumat alaraq, vaxt itkisi və gözlənilməz halların qarşısı alınır.
                    </span>
                    <div className={"max-sm:hidden w-full bg-white h-full rounded-3xl select-none"}>
                        <div className={"w-full flex flex-row justify-between items-center pl-7"}>
                            <div className={"flex-col"}>
                                <div className={"flex items-center space-x-5  mb-4"}>
                                    <Avatar
                                        className="h-20 w-20 rounded-[2.4rem] cursor-pointer border-gray-200 border-4">
                                        <AvatarImage src="https://i.hizliresim.com/lt5fqls.jpeg"
                                                     className={"object-cover"}/>
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                    <span className={"font-bold text-3xl"}>Fərid Sadıxzadə</span>
                                </div>
                                <span className={"font-medium text-gray-300"}>Ünvan: Bakı, Nizami rayonu Telefon: +994 55-3169-000</span>
                            </div>

                            <div className={`flex flex-col text-2xl p-7`}>
                                <span className={"font-bold"}>- Saç kəsimi</span>
                                <span className={"font-bold"}>- Saç kəsimi</span>
                                <span className={"font-bold"}>- Saç kəsimi</span>
                                <span className={"font-bold"}>- Saç kəsimi</span>
                            </div>
                        </div>
                        <div className={"w-full h-0.5 border border-black border-dashed"}>
                            <div className={"w-full flex justify-end items-center pr-7 pt-4 space-x-5"}>
                                <span className={"font-medium"}>Cəmi müddət: 1 saat</span>
                                <div
                                    className={"rounded-xl w-24 h-9 bg-cal-primary inline-flex justify-center items-center font-semibold"}>
                                    Bron et
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
};