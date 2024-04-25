import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import {Container, Stack} from "@mui/material";

export const Main = ({children, ...other}) => {

    return (
        <Stack
            component="main"
            width={'100%'}
            height={'100%'}
            padding={2}
            overflow={'auto'}
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
