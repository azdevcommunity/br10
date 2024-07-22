import React, {createContext, useContext, useEffect, useState} from 'react';

interface ThemeContextType {
    theme: string;
    setLightTheme: () => void;
    setDarkTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
    theme: 'light',
    setLightTheme: () => {},
    setDarkTheme: () => {},
});

interface ThemeProviderProps {
    children: React.ReactNode;

}


const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {

    const [theme, setTheme] = useState('dark');
    // const [theme, setTheme] = useState('light');

    const setLightTheme = () => setTheme('light');
    const setDarkTheme = () => setTheme('dark');

    useEffect(() => {
        const root = document.documentElement;
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
            root.style.setProperty('--background-color', '#000');
        } else {
            document.documentElement.classList.remove('dark');
            root.style.setProperty('--background-color', '#fff');
        }
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, setLightTheme, setDarkTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);

export { ThemeProvider, ThemeContext };