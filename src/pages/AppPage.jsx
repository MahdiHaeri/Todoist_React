import {Outlet} from "react-router";
import {Helmet} from "react-helmet-async";
import DashboardLayout from "../layouts/dashboard/DashboardLayout.jsx";

export const AppPage = () => {
    return (
        <>
            <Helmet>
                <title> Dashboard </title>
            </Helmet>
            <DashboardLayout>
                <Outlet />
            </DashboardLayout>
        </>
    );
}