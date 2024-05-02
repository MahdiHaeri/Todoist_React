import {Button, Stack, TextField, Typography} from "@mui/material";
import {GoogleSvgIcon} from "../../assets/GoogleSvgIcon.jsx";
import {FacebookSvgIcon} from "../../assets/FacebookSvgIcon.jsx";
import {AppleSvgIcon} from "../../assets/AppleSvgIcon.jsx";
import {Link} from "react-router-dom";

export const LoginView = () => {
    return (
        <Stack
            direction='column'
            width='100%'
            height='100vh'
            display={"flex"}
            justifyContent={"start"}
            alignItems={"center"}
            padding={4}
        >
            <Stack
                direction='column'
                width='30%'
                height={'100%'}
                gap={4}
            >
                <Typography variant='h4' fontWeight='bold'>
                    Log in
                </Typography>
                <Stack direction='column' gap={1}>
                    <Button variant="outlined" startIcon={
                        <GoogleSvgIcon/>
                    } color={'inherit'}>
                        Continue with Goggle
                    </Button>
                    <Button variant="outlined" startIcon={
                        <FacebookSvgIcon/>
                    } color={'inherit'}>
                        Continue with FaceBook
                    </Button>
                    <Button variant="outlined" startIcon={
                        <AppleSvgIcon/>
                    } color={'inherit'}>
                        Continue with Apple
                    </Button>
                </Stack>

                <Stack direction='column' gap={1}>
                    <TextField variant={'outlined'} label={'Email'} type={'email'}/>
                    <TextField variant={'outlined'} label={'Password'} type={'password'}/>
                    <Button variant="contained" color='primary' disableElevation>
                        <Typography variant="body1" fontWeight={"bold"}>
                            Log in
                        </Typography>
                    </Button>
                    <Link to={'#'}>
                        Forgot your password?
                        <link/>
                    </Link>
                </Stack>


                <Typography variant="subtitle2">
                    By continuing with Google, Apple, or Email, you agree to Todoist’s
                    Terms of Service and Privacy Policy.
                </Typography>
            </Stack>
        </Stack>
    )
}