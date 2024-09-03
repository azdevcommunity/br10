"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface AnimatedSubscribeButtonProps {
    buttonColor: string;
    buttonTextColor?: string;
    subscribeStatus: boolean;
    initialText: React.ReactElement | string;
    changeText: React.ReactElement | string;
}

export const AnimatedSubscribeButton: React.FC<
    AnimatedSubscribeButtonProps
> = ({
         buttonColor,
         subscribeStatus,
         buttonTextColor,
         changeText,
         initialText,
     }) => {
    const [isSubscribed, setIsSubscribed] = useState<boolean>(subscribeStatus);

    return (
        <AnimatePresence mode="wait">
                <motion.button
                    className="rounded-4xl font-matter text-md flex items-center justify-center px-8 py-4 font-semibold uppercase leading-none [&_svg]:ml-[8px] [&_svg]:mt-[1px] shadow-fill hover:shadow-input-grow border-primary-700 active:shadow-input-shrink border-2 transition-all duration-150 ease-in-out will-change-transform hover:translate-y-[-2px] active:translate-y-[2px] active:duration-100 md:h-[90px] text-white min-w-56 group h-full max-h-20 w-full bg-[#242427] !text-white sm:w-auto"
                    style={{ backgroundColor: buttonColor, color: buttonTextColor }}
                    onClick={() => setIsSubscribed(true)}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <motion.span
                        key="reaction"
                        className="relative block font-semibold"
                        initial={{ x: 0 }}
                        exit={{ x: 50, transition: { duration: 0.1 } }}
                    >
                        {initialText}
                    </motion.span>
                </motion.button>

        </AnimatePresence>
    );
};
