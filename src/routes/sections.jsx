import {createBrowserRouter, Navigate} from "react-router-dom";
import {NotFoundPage} from "../pages/NotFoundPage.jsx";
import {AppPage} from "../pages/AppPage.jsx";
import {LoginPage} from "../pages/LoginPage.jsx";
import {TodayView} from "../ui/section/today/TodayView.jsx";
import {UpcomingView} from "../ui/section/upcoming/UpcomingView.jsx";
import {FilterLabelView} from "../ui/section/filters_labels/FilterLabelView.jsx";
import {InboxView} from "../ui/section/inbox/InboxView.jsx";

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
                path: "inbox",
                element: <InboxView/>,
            },
            {
                path: "today",
                element: <TodayView/>,
            },
            {
                path: "upcoming",
                element: <UpcomingView/>,
            },
            {
                path: "filter-labels",
                element: <FilterLabelView/>,
            }
        ],
    },
    {
        path: "auth/login",
        element: <LoginPage />,
    },
]);

export default router;