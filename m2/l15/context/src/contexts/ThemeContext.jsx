import { useState, createContext } from 'react'

export const ThemeContext = createContext()

const ThemeProvider = ({children}) => {

    const [theme, setTheme] = useState('dark');

    const toggleTheme = () => {
        setTheme(currentTheme=>{
            return currentTheme === 'light' ? 'dark' : 'light';
        });
    }

    return (
        <ThemeContext.Provider value={ {theme, toggleTheme} }>
            {children}
        </ThemeContext.Provider>
    ) 

}

export default ThemeProvider