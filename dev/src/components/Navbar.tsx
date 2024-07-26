import React, {useState, useRef, useEffect} from 'react';
import {HamburgerButton} from "./HamburgerButton.tsx";
import {HamburgerButtonClose} from "./HamburgerButtonClose.tsx";
import {Button} from "@/components/ui/button.tsx";
import {useNavigate} from "react-router-dom";

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [height, setHeight] = useState('0px');
    const mobileMenuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (isOpen) {
            const scrollHeight = mobileMenuRef.current ? mobileMenuRef.current.scrollHeight : 0;
            setHeight(`${scrollHeight}px`);
        } else {
            setHeight('0px');
        }
    }, [isOpen]);

    const navigate = useNavigate();

    return (
        <nav className="px-4 sm:px-6 lg:px-8 backdrop-blur-[10px] fixed w-full z-50 bg-white/80">
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <img
                        src="/assets/img.png"
                        className="h-14 sm:h-8 md:h-10 lg:h-12 xl:h-16"
                        alt="asd"/>
                    <span
                        className="ml-2 text-3xl font-semibold text-custom-gray-900 dark:text-custom-gray-050 dark:hover:text-custom-gray-200">br10</span>
                </div>
                <div className="max-sm:hidden md:flex items-center space-x-10 font-medium">
                    <a href="#home"
                       className="text-gray-700 hover:text-gray-900 dark:text-custom-gray-050 dark:hover:text-custom-gray-200">Home</a>
                    <a href="#about"
                       className="text-gray-700 hover:text-gray-900 dark:text-custom-gray-050 dark:hover:text-custom-gray-200">About
                        us</a>
                    <a href="#features"
                       className="text-gray-700 hover:text-gray-900 dark:text-custom-gray-050 dark:hover:text-custom-gray-200">Features</a>

                    <Button variant={"default"} className={"w-28"}  onClick={() => navigate('login')}>Log in</Button>
                </div>
                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        type="button"
                        className="text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-900"
                        aria-controls="mobile-menu"
                        aria-expanded={isOpen}
                    >
                        <span className="sr-only">Open main menu</span>
                        {isOpen ? (
                            // <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            //     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            // </svg>
                            <HamburgerButtonClose/>
                        ) : (
                            // <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            //     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                            // </svg>
                            <HamburgerButton/>
                        )}
                    </button>
                </div>
            </div>
            <div
                ref={mobileMenuRef}
                className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out`}
                style={{maxHeight: height}}
                id="mobile-menu"
            >
                <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
                    <a href="#home"
                       className="block text-gray-700 hover:text-gray-900 dark:text-custom-gray-050 dark:hover:text-custom-gray-200">home</a>
                    <a href="#features"
                       className="block text-gray-700 hover:text-gray-900 dark:text-custom-gray-050 dark:hover:text-custom-gray-200">Features</a>
                    <a href="#about"
                       className="block text-gray-700 hover:text-gray-900 dark:text-custom-gray-050 dark:hover:text-custom-gray-200">About
                        us</a>
                    <Button variant={"default"}>Log in</Button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;