import React,{useState} from "react";
import ReactDOM from "react-dom";

import App from  "C:/Users/Alex/OneDrive/Desktop/React/pokemon/src/App"


function Text({theme}) {
    return(
        <h1 style ={{color: `${theme}`}}>
            {theme}
        </h1>
    )
}



export default Text;