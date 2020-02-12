import React,{useContext} from "react";
import ThemeContext from "../Context/ThemeContext";

const themeTogglerStyle = {
    cursor: "pointer"
}
const ThemeToggler = () => {
    const[themeMode, setThemeMode] = useContext(ThemeContext);
    return(
        <div style = {themeTogglerStyle} onClick = {() => {setThemeMode(themeMode === "light"? "dark": "light")}}>
            Theme: {themeMode.toUpperCase()}
        </div>
    );
}

export default ThemeToggler;