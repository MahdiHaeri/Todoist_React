import {Helmet} from "react-helmet-async";
import {LoginView} from "../ui/login/LoginView.jsx";
import {Container} from "@mui/material";

export const LoginPage = () => {
    return (
        <>
            <Helmet>
                <title> Login </title>
            </Helmet>

            <Container>
                <LoginView />
            </Container>
        </>
    );
}