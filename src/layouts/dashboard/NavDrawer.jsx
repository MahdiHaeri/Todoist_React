import PropTypes from "prop-types";
import {Drawer} from "@mui/material";
import {NAV} from "./config-layout.js";
import {DrawerHeader} from "./component/DrawerHeader.jsx";
import {useEffect, useState} from "react";


export const NavDrawer = ({openNav, onToggleDrawer}) => {
    const [drawerWidth, setDrawerWidth] = useState(openNav ? NAV.WIDTH : 0)

    useEffect(() => {
        if (openNav) {
            setDrawerWidth(NAV.WIDTH)
        } else {
            setDrawerWidth(0)
        }
    }, [openNav])

    return (
        <>
            <Drawer
                variant={"persistent"}
                anchor={"left"}
                open={openNav}
                onClose={onToggleDrawer}
                sx={{width: drawerWidth, transition: 'all 0.3s'}}
                PaperProps={{
                    sx: {
                        width: drawerWidth,
                        p: 1,
                    },
                }}
            >
                <DrawerHeader openNav={openNav} onToggleDrawer={onToggleDrawer}/>
            </Drawer>
        </>
    )
}

NavDrawer.propTypes = {
    openNav: PropTypes.bool,
    onToggleDrawer: PropTypes.func,
};