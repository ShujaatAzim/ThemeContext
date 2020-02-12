import React, { useContext } from "react";
import ThemeToggler from "./ThemeToggler";
import ThemeContext from "../Context/ThemeContext";
import UserToggler from "./UserToggler";

const headerStyles = {
    padding: "1rem",
    justifyContent: "space-between",
    alignItems: "center",
    display: "inline"
}


const Header = () => {
    const [currentTheme] = useContext(ThemeContext)

    return(
        <header style = {headerStyles}>
            <h1 style={{ padding: "1rem" }}><UserToggler /></h1>
            <h1 style={{ padding: "1rem" }}><ThemeToggler />{currentTheme === "dark" ? "🌙" : "☀️"}</h1>
        </header>
    );
}

export default Header;
