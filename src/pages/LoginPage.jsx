import {Helmet} from "react-helmet-async";
import {LoginView} from "../ui/login/LoginView.jsx";

export const LoginPage = () => {
    return (
        <>
            <Helmet>
                <title> Login </title>
            </Helmet>

            <LoginView />
        </>
    );
}