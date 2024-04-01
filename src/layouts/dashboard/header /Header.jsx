import PropTypes from "prop-types";
import {AppBar, IconButton, Stack, Toolbar, Typography} from "@mui/material";
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import ViewSidebarRoundedIcon from "@mui/icons-material/ViewSidebarRounded.js";

export const Header = ({openNav, onToggleDrawer}) => {
    const renderNavButton = openNav ?
        <></>
        :
        <IconButton size={"medium"} onClick={onToggleDrawer}>
            <ViewSidebarRoundedIcon fontSize={"small"}/>
        </IconButton>;

    return (
        <AppBar position="static" color="inherit" elevation={'none'}
                sx={{height: '50px', width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'center', p: 1}}>
            <Stack>
                {renderNavButton}
            </Stack>
            <Stack direction={"row"} width={'100%'} alignItems={"center"} justifyContent={"end"}>
                <IconButton>
                    <MoreHorizRoundedIcon/>
                </IconButton>
            </Stack>
        </AppBar>
    );
}

Header.propTypes = {
    onOpenNav: PropTypes.func,
};