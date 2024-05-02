import {Button, Divider, Stack, TextField, Typography} from "@mui/material";
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
                width='35%'
                height={'100%'}
                gap={3}
            >
                <Typography variant='h4' fontWeight='bold'>
                    Log in
                </Typography>
                <Stack direction='column' gap={1}>
                    <Button
                        variant="outlined"
                        size={"large"}
                        startIcon={<GoogleSvgIcon/>}
                        color={'inherit'}
                        sx={{
                            borderColor: 'divider',
                            textTransform: 'none'
                        }}
                    >
                        <Typography variant={"subtitle1"} fontWeight={"bold"}>
                            Continue with Google
                        </Typography>
                    </Button>
                    <Button
                        variant="outlined"
                        size={"large"}
                        startIcon={<FacebookSvgIcon/>}
                        color={'inherit'}
                        sx={{
                            borderColor: 'divider',
                            textTransform: 'none'
                        }}
                    >
                        <Typography variant={"subtitle1"} fontWeight={"bold"}>
                            Continue with FaceBook
                        </Typography>
                    </Button>
                    <Button
                        variant="outlined"
                        size={"large"}
                        startIcon={<AppleSvgIcon/>}
                        color={'inherit'}
                        sx={{
                            borderColor: 'divider',
                            textTransform: 'none'
                        }}
                    >
                        <Typography variant={"subtitle1"} fontWeight={"bold"}>
                            Continue with Apple
                        </Typography>
                    </Button>
                </Stack>

                <Divider flexItem>
                    <Typography variant={"subtitle2"} sx={{color: 'text.secondary'}}>
                        Login with Email
                    </Typography>
                </Divider>

                <Stack direction='column' gap={1}>
                    <TextField
                        variant={'outlined'}
                        size={"small"}
                        label={'Email'}
                        type={'email'}
                    />
                    <TextField
                        variant={'outlined'}
                        size={"small"}
                        label={'Password'}
                        type={'password'}
                    />
                    <Button
                        variant="contained"
                        size={"large"}
                        color='primary'
                        disableElevation
                        sx={{
                            textTransform: 'none'
                        }}
                    >
                        <Typography variant="subtitle1" fontWeight={"bold"}>
                            Log in
                        </Typography>
                    </Button>
                    <Link
                        to={'#'}
                        style={{
                            color: 'inherit',
                        }}
                    >
                        <Typography variant={"subtitle2"}>
                            Forgot your password?
                        </Typography>
                    </Link>
                </Stack>


                <Typography variant="subtitle2">
                    By continuing with Google, Apple, or Email, you agree to Todoist’s <Link to={'#'}>Terms of Service</Link> and <Link to={'#'}>Privacy Policy</Link> .
                </Typography>
                <Typography variant="subtitle2" textAlign={"center"}>
                    Don’t have an account? <Link to={'#'}>Sign up</Link>
                </Typography>
            </Stack>
        </Stack>
    )
}