import PropTypes from "prop-types";
import {AppBar, IconButton, Toolbar, Typography} from "@mui/material";
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';

export const Header = ({onOpenNav}) => {
    return (
        <AppBar position="static" color="primary" elevation='none' sx={{color: 'white'}}>
            <Toolbar>
                <Typography>Hello</Typography>
                <IconButton>
                    <MoreHorizRoundedIcon/>
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}

Header.propTypes = {
    onOpenNav: PropTypes.func,
};