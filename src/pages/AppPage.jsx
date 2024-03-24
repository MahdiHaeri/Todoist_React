import {Outlet} from "react-router";
import {Helmet} from "react-helmet-async";

export const AppPage = () => {
    return (
        <>
            <Helmet>
                <title> Dashboard </title>
            </Helmet>
            App Page
            <Outlet />
        </>
    );
}