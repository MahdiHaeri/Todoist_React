import {useState} from 'react';
import PropTypes from 'prop-types';

import {Header} from "./Header.jsx";
import {Divider, Stack} from "@mui/material";
import {NavDrawer} from "./NavDrawer.jsx";
import {Main} from "./Main.jsx";


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
            <Stack direction={"column"} flexGrow={1}>
                <Header openNav={openNav} onToggleDrawer={onToggleDrawer}/>
                <Divider variant={'fullWidth'} />
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
