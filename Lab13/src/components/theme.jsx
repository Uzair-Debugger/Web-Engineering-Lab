import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

const themes = {
    light: { background: "#fff", color: "#000" },
    dark: { background: "#333", color: "#fff" },
};

const ThemeDisplay = () => {
    const { theme } = useContext(ThemeContext);
    return (
        <div style={{ ...themes[theme], padding: "20px", borderRadius: "8px" }}>
            Current theme: <strong>{theme}</strong>
        </div>
    );
};

const ThemeToggle = () => {
    const { theme, setTheme } = useContext(ThemeContext);
    return (
        <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
            Switch to {theme === "light" ? "dark" : "light"} theme
        </button>
    );
};

const ThemeProvider = () => {
    const [theme, setTheme] = useState("light");
    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <ThemeDisplay />
            <ThemeToggle />
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
