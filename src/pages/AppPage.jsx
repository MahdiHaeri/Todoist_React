import {Outlet} from "react-router";
import {Helmet} from "react-helmet-async";
import DashboardLayout from "../layouts/dashboard/DashboardLayout.jsx";
import {Stack} from "@mui/material";

export const AppPage = () => {
    return (
        <>
            <Helmet>
                <title> Dashboard </title>
            </Helmet>
            <Stack width={'80vw'} height={'80vh'}>
                <DashboardLayout>
                    <Outlet />
                </DashboardLayout>
            </Stack>
        </>
    );
}