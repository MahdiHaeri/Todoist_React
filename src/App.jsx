import {RouterProvider} from "react-router-dom";
import router from "./routes/sections.jsx";
import ThemeProvider from "./theme/index.jsx";

export const App = () => {
    return (
        <ThemeProvider>
            <RouterProvider router={router}/>
        </ThemeProvider>
    )
}