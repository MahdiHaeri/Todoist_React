import PropTypes from "prop-types";
import {
    Drawer,
    List,
    ListItem,
    ListItemButton,
    Stack,
    Typography
} from "@mui/material";
import {NAV} from "../../config-layout.js";
import {DrawerHeader} from "./component/DrawerHeader.jsx";
import {DrawerListItem} from "./component/DrawerListItem.jsx";
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import {AddTaskModal} from "../../../../ui/modal/AddTaskModal/AddTaskModal.jsx";
import {useState} from "react";

export const NavDrawer = ({openNav, onToggleDrawer}) => {
    const [addTaskModalOpen, setAddTaskModalOpen] =  useState(false)

    function onToggleAddTaskModalOpen() {
        setAddTaskModalOpen(!addTaskModalOpen)
    }

    return (
        <Drawer
            variant={"persistent"}
            anchor={"left"}
            open={openNav}
            onClose={onToggleDrawer}
            PaperProps={{
                sx: {
                    border: 0,
                    width: NAV.WIDTH,
                    p: 1,
                },
            }}
        >
            <AddTaskModal open={addTaskModalOpen} onToggleOpen={onToggleAddTaskModalOpen}/>
            <Stack width={'100%'} height={'100%'}>
                <DrawerHeader openNav={openNav} onToggleDrawer={onToggleDrawer}/>
                <List disablePadding>
                    <ListItem disablePadding>
                        <ListItemButton sx={{borderRadius: 1, padding: 1, color: 'primary.main'}} onClick={onToggleAddTaskModalOpen}>
                            <Stack
                                width={'100%'}
                                direction={"row"}
                                justifyContent={"start"}
                                alignItems={"center"}
                                gap={1}
                            >
                                <AddCircleRoundedIcon sx={{fontSize: 28}}/>
                                <Typography variant={"subtitle2"} fontWeight={"bold"} sx={{color: 'primary.lighter'}}>
                                    Add task
                                </Typography>
                            </Stack>
                        </ListItemButton>
                    </ListItem>
                </List>
                <DrawerListItem/>
            </Stack>
        </Drawer>
    )
}

NavDrawer.propTypes = {
    openNav: PropTypes.bool,
    onToggleDrawer: PropTypes.func,
};