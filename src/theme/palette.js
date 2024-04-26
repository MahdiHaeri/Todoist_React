import {alpha} from '@mui/material/styles';

// ----------------------------------------------------------------------

// SETUP COLORS

export const grey = {
    0: '#FFFFFF',
    100: '#F9FAFB',
    200: '#F4F6F8',
    300: '#DFE3E8',
    400: '#C4CDD5',
    500: '#919EAB',
    600: '#637381',
    700: '#454F5B',
    800: '#212B36',
    900: '#161C24',
};

export const primary = {
    lighter: '#e36d6c',
    light: '#e05d5c',
    main: '#dd4b4a',
    dark: '#c64342',
    darker: '#b23c3b',
    contrastText: '#FFFFFF',
};

export const secondary = {
    lighter: '#fd9d25',
    light: '#f59723',
    main: '#EE9322',
    dark: '#d98620',
    darker: '#a86818',
    contrastText: '#FFFFFF',
};

export const info = {
    lighter: '#CAFDF5',
    light: '#61F3F3',
    main: '#00B8D9',
    dark: '#006C9C',
    darker: '#003768',
    contrastText: '#FFFFFF',
};

export const success = {
    lighter: '#C8FAD6',
    light: '#5BE49B',
    main: '#00A76F',
    dark: '#007867',
    darker: '#004B50',
    contrastText: '#FFFFFF',
};

export const warning = {
    lighter: '#FFF5CC',
    light: '#FFD666',
    main: '#FFAB00',
    dark: '#B76E00',
    darker: '#7A4100',
    contrastText: grey[800],
};

export const error = {
    lighter: '#FFE9D5',
    light: '#FFAC82',
    main: '#FF5630',
    dark: '#B71D18',
    darker: '#7A0916',
    contrastText: '#FFFFFF',
};

export const background = {
    paper: '#262626',
    default: '#1e1e1e',
    neutral: grey[200],
}

export const common = {
    black: '#000000',
    white: '#FFFFFF',
};

export const action = {
    hover: alpha(grey[500], 0.08),
    selected: alpha('#b23c3b', 0.16),
    disabled: alpha(grey[500], 0.8),
    disabledBackground: alpha(grey[500], 0.24),
    focus: alpha(grey[500], 0.24),
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
};

const base = {
    primary,
    secondary,
    info,
    success,
    warning,
    error,
    grey,
    common,
    divider: alpha(grey[500], 0.2),
    action,
    background,
};

// ----------------------------------------------------------------------

export function palette(mode) {
    return {
        ...base,
        ...(mode === 'light'
                ? {
                    mode: 'light',
                    background: {
                        paper: '#E8E8E8',
                        default: 'white',
                        neutral: grey[200],
                    },
                }
                : {
                    mode: 'dark',
                    background: {
                        paper: '#262626',
                        default: '#1e1e1e',
                        neutral: grey[200],
                    },
                }
        )
        // text: {
        //   primary: grey[800],
        //   secondary: grey[600],
        //   disabled: grey[500],
        // },
        // background: {
        //   paper: '#FFFFFF',
        //   default: grey[100],
        //   neutral: grey[200],
        // },
        // action: {
        //   ...base.action,
        //   active: grey[600],
        // },
    };
}
