import {useNavigate} from "react-router";
import {Box, Button, Divider, Typography} from "@mui/material";

export const NotFoundView = () => {
    const navigate = useNavigate();

    const onButtonClicked = () => {
        navigate('/')
    }

    return (
        <Box width='100vw' height='100vh' display='flex' flexDirection="column" gap={10} alignItems='center'
             justifyContent='center' bgcolor={'#222'}>
            <Typography variant='h2' color={'error'} fontWeight={'bold'} fontFamily={'fantasy'}>
                404 Page not found
            </Typography>
            <Divider sx={{width: '60%'}} color={'error'}/>
            <Button variant="contained" color='error' sx={{padding: 1.5}} onClick={onButtonClicked}>
                <Typography variant='body1' fontWeight={"bold"} fontFamily={'fantasy'} textAlign={'center'}>
                    Back to Home
                </Typography>
            </Button>
        </Box>
    )
}