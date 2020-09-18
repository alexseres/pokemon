
import React,{useContext} from 'react';
import ThemeContext from "C:/Users/Alex/OneDrive/Desktop/React/pokemon/src/components/ThemeContext"

const themeTogglerStyle = {
    cursor: "pointer"
}

const ThemeToggler =() => {
    const[themeMode, setThemeMode] = useContext(ThemeContext);

    return (
        <div style = {themeTogglerStyle} onClick= {() => {setThemeMode(themeMode === "light" ? "dark" : "light")}}>
            <span title= "switch theme">
                {themeMode === "light" ?  "☀️" : "🌙" }
            </span>
        </div>
    )
}

export default ThemeToggler; 