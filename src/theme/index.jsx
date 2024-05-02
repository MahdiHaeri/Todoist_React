import {useContext, useMemo} from 'react';
import PropTypes from 'prop-types';

import CssBaseline from '@mui/material/CssBaseline';
import {createTheme, ThemeProvider as MUIThemeProvider} from '@mui/material/styles';

import {palette} from './palette';
import {shadows} from './shadows';
import {overrides} from './overrides';
import {typography} from './typography';
import {customShadows} from './custom-shadows';
import {ThemeContext} from "/src/hook/context/ThemeContext.jsx";

// ----------------------------------------------------------------------

export default function ThemeProvider({children}) {
    const {darkMode} = useContext(ThemeContext);

    const memoizedValue = useMemo(
        () => ({
            palette: palette(darkMode ? 'dark' : 'light'),
            typography,
            // shadows: shadows(),
            // customShadows: customShadows(),
            // shape: { borderRadius: 8 },
        }), [darkMode]
    );

    const theme = createTheme(memoizedValue);

    // theme.components = overrides(theme);

    return (
        <MUIThemeProvider theme={theme}>
            <CssBaseline/>
            {children}
        </MUIThemeProvider>
    );
}

ThemeProvider.propTypes = {
    children: PropTypes.node,
};
