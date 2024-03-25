import {useState} from 'react';
import PropTypes from 'prop-types';

import {Header} from "./Header.jsx";
import {Stack} from "@mui/material";
import {NavDrawer} from "./NavDrawer.jsx";
import {Main} from "./Main.jsx";


// ----------------------------------------------------------------------

export default function DashboardLayout({children}) {
    const [openNav, setOpenNav] = useState(false);

    return (
        <Stack direction={"row"} flexGrow={1}>
            <NavDrawer openNav={openNav} onCloseNav={() => setOpenNav(false)}/>
            <Stack direction={"column"} flexGrow={1}>
                <Header onOpenNav={() => setOpenNav(true)}/>
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
