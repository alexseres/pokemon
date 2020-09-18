import React, {useContext,useState} from 'react';
import ThemeContext from './components/ThemeContext';
import AppTheme from "./components/Colors";
import App from "./App"


const Main = () =>{
    const theme = useContext(ThemeContext)[0];
    const currentTheme = AppTheme[theme];
    return (
        <main style = {{ 
          padding: "1rem",
          backgroundColor: `${currentTheme.backgroundColor}`,
          color : `${currentTheme.textColor}`
          }}>
        <h1>Welcome to Pokemon Page</h1>
        <p>This is a page where you can checkout some Pokemon</p>
        </main>
    )
}    

export default Main;

