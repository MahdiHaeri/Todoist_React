import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import {Container, Stack} from "@mui/material";

export const Main = ({children, ...other}) => {

    return (
        <Stack
            component="main"
            width={'100%'}
            height={'100%'}
            border={4}
            borderColor={"gold"}
            padding={2}
            {...other}
        >
            {/*<Container>*/}
                {children}
            {/*</Container>*/}
        </Stack>
    );
}

Main.propTypes = {
    children: PropTypes.node,
    sx: PropTypes.object,
};
