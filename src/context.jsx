import { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext();

const getInitialDarkMode = () => {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme:dark)').matches;
    const storedDarkTheme = localStorage.getItem('darkTheme') === 'true'
    return storedDarkTheme || prefersDarkMode;
}

export const AppProvider = ({ children }) => {

    const [isDarkTheme, setIsDarkTheme] = useState(getInitialDarkMode());
    const [searchTerm, setSearchTerm] = useState('cat');

    const toggleDarkTheme = () => {
        const newDarkTheme = !isDarkTheme;
        setIsDarkTheme(newDarkTheme);
        localStorage.setItem('darkTheme', newDarkTheme);
    }

    useEffect(() =>{
        const body = document.querySelector('body');
        body.classList.toggle('dark-theme', isDarkTheme);
    }, [isDarkTheme]);

    return <AppContext.Provider value={{isDarkTheme, toggleDarkTheme, searchTerm, setSearchTerm}}>{children}</AppContext.Provider>
}

export const useGlobalContext = () => useContext(AppContext);