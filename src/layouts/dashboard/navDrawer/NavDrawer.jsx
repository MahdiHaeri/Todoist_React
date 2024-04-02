import PropTypes from "prop-types";
import {Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack, Typography} from "@mui/material";
import {NAV} from "../config-layout.js";
import {DrawerHeader} from "./component/DrawerHeader.jsx";
import {DrawerListItem} from "./component/DrawerListItem.jsx";
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';


export const NavDrawer = ({openNav, onToggleDrawer}) => {
    return (
        <Drawer
            variant={"persistent"}
            anchor={"left"}
            open={openNav}
            onClose={onToggleDrawer}
            PaperProps={{
                sx: {
                    width: NAV.WIDTH,
                    p: 1,
                },
            }}
        >
            <Stack width={'100%'} height={'100%'}>
                <DrawerHeader openNav={openNav} onToggleDrawer={onToggleDrawer}/>
                <List disablePadding >
                    <ListItem disablePadding >
                        <ListItemButton sx={{borderRadius: 1,color: 'primary.main' }}>
                            <ListItemIcon sx={{color: 'primary.main'}}>
                                <AddCircleRoundedIcon/>
                            </ListItemIcon>
                            <ListItemText>
                                <Typography variant={"subtitle2"} fontWeight={"bold"}>
                                    Add task
                                </Typography>
                            </ListItemText>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton sx={{borderRadius: 1}}>
                            <ListItemIcon>
                                <SearchRoundedIcon/>
                            </ListItemIcon>
                            <ListItemText>
                                Search
                            </ListItemText>
                        </ListItemButton>
                    </ListItem>
                </List>
                <DrawerListItem />
            </Stack>
        </Drawer>
    )
}

NavDrawer.propTypes = {
    openNav: PropTypes.bool,
    onToggleDrawer: PropTypes.func,
};