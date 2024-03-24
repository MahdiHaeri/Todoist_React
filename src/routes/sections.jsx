import {createBrowserRouter, Navigate} from "react-router-dom";
import {NotFoundPage} from "../pages/NotFoundPage.jsx";
import {AppPage} from "../pages/AppPage.jsx";
import {LoginPage} from "../pages/LoginPage.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Navigate replace to="app" />,
        errorElement: <NotFoundPage />,
    },
    {
        path: "app",
        element: <AppPage />,
        errorElement: <NotFoundPage />,
        children: [
            {
                index: true,
                element: <Navigate replace to={'today'} />
            },
            {
                path: "today",
                element: <h1>Today</h1>,
            },
            {
                path: "upcoming",
                element: <h1>Upcoming</h1>,
            },
            {
                path: "filters-labels",
                element: <h1>Filters-Labels</h1>,
            }
        ],
    },
    {
        path: "auth/login",
        element: <LoginPage />,
    },
]);

export default router;