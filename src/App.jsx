import {RouterProvider} from "react-router-dom";
import router from "./routes/sections.jsx";
import ThemeProvider from "./theme/index.jsx";
import {useState} from "react";
import {ThemeContext} from "./hook/context/ThemeContext.jsx";
import storage from "./util/storage.js";

export const App = () => {
    const storedDarkMode = storage.get('darkMode');
    const [darkMode, setDarkMode] = useState(storedDarkMode !== null ? storedDarkMode : true);

    const toggleDarkMode = () => {
        storage.set('darkMode', !darkMode);
        setDarkMode(!darkMode);
    }

    return (
        <ThemeContext.Provider value={{darkMode, toggleDarkMode}}>
            <ThemeProvider>
                <RouterProvider router={router}/>
            </ThemeProvider>
        </ThemeContext.Provider>
    )
}