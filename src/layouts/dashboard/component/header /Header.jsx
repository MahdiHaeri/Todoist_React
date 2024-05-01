import PropTypes from "prop-types";
import {AppBar, IconButton, Stack, Toolbar, Typography} from "@mui/material";
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import ViewSidebarRoundedIcon from "@mui/icons-material/ViewSidebarRounded.js";

export const Header = ({openNav, onToggleDrawer}) => {
    const renderNavButton = openNav ?
        <></>
        :
        <IconButton
            size={"medium"}
            onClick={onToggleDrawer}
            sx={{
                width: 32,
                height: 32,
                borderRadius: 2,
                color: 'text.secondary',
                "& .MuiTouchRipple-root .MuiTouchRipple-child": {
                    borderRadius: 2
                }
            }}
        >
            <ViewSidebarRoundedIcon fontSize={"small"}/>
        </IconButton>;

    return (
        <AppBar
            position={'static'}
            color="inherit"
            elevation={0}
            sx={{
                height: '50px',
                width: '100%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                p: 1,
                backgroundColor: 'background.default'
            }}
        >
            <Stack>
                {renderNavButton}
            </Stack>
            <Stack direction={"row"} width={'100%'} alignItems={"center"} justifyContent={"end"}>
                <IconButton
                    sx={{
                        width: 32,
                        height: 32,
                        borderRadius: 2,
                        color: 'text.secondary',
                        "& .MuiTouchRipple-root .MuiTouchRipple-child": {
                            borderRadius: 2
                        }
                    }}
                >
                    <MoreHorizRoundedIcon/>
                </IconButton>
            </Stack>
        </AppBar>
    );
}

Header.propTypes = {
    onOpenNav: PropTypes.func,
};