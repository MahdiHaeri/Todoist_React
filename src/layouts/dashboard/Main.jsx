import PropTypes from 'prop-types';

import Box from '@mui/material/Box';

export const Main = ({children, ...other}) => {

    return (
        <Box
            component="main"
            sx={{
                flexGrow: 1,
                minHeight: 1,
                display: 'flex',
                flexDirection: 'column',
            }}
            {...other}
        >
            {children}
        </Box>
    );
}

Main.propTypes = {
    children: PropTypes.node,
    sx: PropTypes.object,
};
