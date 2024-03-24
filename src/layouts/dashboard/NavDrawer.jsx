import PropTypes from "prop-types";
import {Drawer} from "@mui/material";
import {NAV} from "./config-layout.js";
import {DrawerHeader} from "./component/DrawerHeader.jsx";


export const NavDrawer = ({openNav, onCloseNav}) => {
    openNav = true
    return (
        <>
            <Drawer
                variant={"persistent"}
                anchor={"left"}
                open={openNav}
                onClose={onCloseNav}
                sx={{width: NAV.WIDTH}}
                PaperProps={{
                    sx: {
                        width: NAV.WIDTH,
                        p: 1,
                    },
                }}
            >
                <DrawerHeader />
            </Drawer>
        </>
    )
}

NavDrawer.propTypes = {
    openNav: PropTypes.bool,
    onCloseNav: PropTypes.func,
};