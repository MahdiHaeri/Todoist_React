import {useState} from 'react';
import PropTypes from 'prop-types';

import {Header} from "./component/header /Header.jsx";
import {Divider, Stack} from "@mui/material";
import {NavDrawer} from "./component/navDrawer/NavDrawer.jsx";
import {Main} from "./component/main/Main.jsx";
import {NAV} from "./config-layout.js";


// ----------------------------------------------------------------------

export default function DashboardLayout({children}) {
    const [openNav, setOpenNav] = useState(true);

    const onToggleDrawer = () => {
        if (openNav) {
            setOpenNav(false)
        } else {
            setOpenNav(true)
        }
    }

    return (
        <Stack direction={"row"} flexGrow={1}>
            <NavDrawer openNav={openNav} onToggleDrawer={onToggleDrawer}/>
            <Stack direction={"column"} flexGrow={1} sx={{marginLeft: openNav ? `${NAV.WIDTH}px` : 0, transition: '.3s all'}}>
                <Header openNav={openNav} onToggleDrawer={onToggleDrawer}/>
                <Main>
                    {children}
                </Main>
            </Stack>
        </Stack>
    );
}

DashboardLayout.propTypes = {
    children: PropTypes.node,
};
