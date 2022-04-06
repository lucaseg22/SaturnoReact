import { createContext, useState } from 'react'
const ThemeContext = createContext();

const ThemeProvider = ({children}) => {
    const [ lightTheme, setLightTheme ] = useState(true)

    const data = {lightTheme, setLightTheme}

    return (
        <ThemeContext.Provider value={data}>
            {children}
        </ThemeContext.Provider>
    )
}
export { ThemeProvider }
export default ThemeContext