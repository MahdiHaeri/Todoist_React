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
        <Stack
            width={'100%'}
            height={'100%'}
            sx={{
                paddingLeft: openNav ? `${NAV.WIDTH}px` : 0, transition: '.3s padding',
            }}
        >
            <NavDrawer openNav={openNav} onToggleDrawer={onToggleDrawer}/>
            <Header openNav={openNav} onToggleDrawer={onToggleDrawer}/>
            <Stack
                height={'100%'}
                width={'100%'}
            >
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
