import {NotFoundView} from "../ui/error/NotFoundView.jsx";
import {Helmet} from "react-helmet-async";

export const NotFoundPage = () => {
    return (
        <>
            <Helmet>
                <title> 404 Page Not Found </title>
            </Helmet>

            <NotFoundView />
        </>
    );
}