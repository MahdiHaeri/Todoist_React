import {useState} from 'react';
import PropTypes from 'prop-types';

import {Header} from "./Header.jsx";
import {Box} from "@mui/material";
import {NavDrawer} from "./NavDrawer.jsx";
import {Main} from "./Main.jsx";


// ----------------------------------------------------------------------

export default function DashboardLayout({children}) {
    const [openNav, setOpenNav] = useState(false);

    return (
        <>
            <Header onOpenNav={() => setOpenNav(true)}/>

            <Box
                sx={{
                    minHeight: 1,
                    display: 'flex',
                    flexDirection: {xs: 'column', lg: 'row'},
                }}
            >
                <NavDrawer openNav={openNav} onCloseNav={() => setOpenNav(false)}/>

                <Main>
                    {children}
                </Main>
            </Box>
        </>
    );
}

DashboardLayout.propTypes = {
    children: PropTypes.node,
};
