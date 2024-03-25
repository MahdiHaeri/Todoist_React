import PropTypes from "prop-types";
import {Drawer} from "@mui/material";
import {NAV} from "./config-layout.js";
import {DrawerHeader} from "./component/DrawerHeader.jsx";


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
            <DrawerHeader openNav={openNav} onToggleDrawer={onToggleDrawer}/>
        </Drawer>
    )
}

NavDrawer.propTypes = {
    openNav: PropTypes.bool,
    onToggleDrawer: PropTypes.func,
};