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
        <Stack direction={"row"} width={'100%'} height={'100%'} display={"flex"} border={4} borderColor={'tomato'}>
            <NavDrawer openNav={openNav} onToggleDrawer={onToggleDrawer}/>
            <Stack
                display={"flex"}
                direction={"column"}
                flex={1}
                height={'100%'}
                border={4}
                borderColor={'blue'}

                sx={{
                    marginLeft: openNav ? `${NAV.WIDTH}px` : 0, transition: '.3s all',
                }}
            >
                <Header openNav={openNav} onToggleDrawer={onToggleDrawer}/>
                <Stack
                    flex={1}
                    width={'100%'}
                    sx={{marginTop: '50px'}}
                    border={4}
                    borderColor={'green'}
                >
                    <Main>
                        {children}
                    </Main>
                </Stack>
            </Stack>
        </Stack>
    );
}

DashboardLayout.propTypes = {
    children: PropTypes.node,
};
