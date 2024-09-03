import React, {useState} from 'react';
import {WobbleCard} from "@/components/WobbleCard.tsx";
import {Image} from "@nextui-org/react";

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
        <div className={"mx-auto w-full px-11 max-sm:px-4 max-sm:mt-10 mt-28 text-center max-sm:text-start"}>
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
            <div className={" w-full"}>
                <WobbleCard
                    containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[200px] lg:min-h-[600px] xl:min-h-[300px]">
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
                        className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
                    />
                </WobbleCard>
            </div>
        </div>
    );
};