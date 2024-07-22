import { ComputerDesktopIcon, MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

interface ThemeButtonsProps {
    setTheme: (theme: 'light' | 'dark' | 'auto') => void;
}

const ThemeButtons: React.FC<ThemeButtonsProps> = ({ setTheme }) => {
    const [currentIcon, setCurrentIcon] = useState<'sun' | 'moon' | 'computer'>('sun');

    const handleIconClick = (icon: 'sun' | 'moon' | 'computer') => {
        setCurrentIcon(icon);
        setTheme(icon === 'sun' ? 'light' : 'dark');
    }

    return (
        <div className="max-w-24 flex bg-gpt-gray-btn-light dark:bg-black gap-x-0 rounded-lg items-center justify-center h-7 px-0.5 mt-1">
            <div onClick={() => handleIconClick('sun')}
                 className={`cursor-pointer ${currentIcon === 'sun' ? 'bg-white text-gpt-green-hover' : 'text-gpt-gray-500 hover:text-gpt-gray-btn-light'} rounded-lg pb-1 pt-1 pr-0.5 pl-0.5`}>
                <SunIcon className="h-4 w-7" />
            </div>
            <div onClick={() => handleIconClick('moon')}
                 className={`cursor-pointer ${currentIcon === 'moon' ? 'text-gpt-green-hover bg-gpt-gray-txt-light' : 'text-gpt-gray-500 hover:text-black hover:dark:text-gpt-gray-btn-light'} rounded-lg pb-1 pt-1 pr-0.5 pl-0.5`}>
                <MoonIcon className="h-4 w-7" />
            </div>
            <div onClick={() => handleIconClick('computer')}
                 className={`cursor-pointer ${currentIcon === 'computer' ? 'text-gpt-green-hover bg-gpt-gray-txt-light' : 'text-gpt-gray-500 hover:text-black hover:dark:text-gpt-gray-btn-light'} rounded-lg pb-1 pt-1 pr-0.5 pl-0.5`}>
                <ComputerDesktopIcon className="h-4 w-7" />
            </div>
        </div>
    );
};

export default ThemeButtons;
