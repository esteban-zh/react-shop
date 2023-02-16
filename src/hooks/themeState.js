import { useState } from "react";

const initialTheme = "light";

const themeState = () => {
    const [stateTheme, setStateTheme]= useState(initialTheme);

    const handleTheme = () => {
        if(stateTheme === "light"){
            setStateTheme("dark")
        }else{
            setStateTheme("light")
        }
    }
    return {
        stateTheme,
        handleTheme
    }
}

export default themeState;