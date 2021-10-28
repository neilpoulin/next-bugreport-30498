import React from 'react';
import { createStyles, createTheme, makeStyles } from '@material-ui/core/styles';

declare module '@material-ui/core/styles/createTheme' {
    interface MenuPaper {
        background: React.CSSProperties['color'];
        hoverBackground: React.CSSProperties['color'];
    }

    interface Theme {
        menuPaper: MenuPaper;
    }

    interface ThemeOptions {
        menuPaper: MenuPaper;
    }
}

const buttonPadding = '0.5rem 1.5rem';

// export const useDarkTooltip = useSt

export const useDarkTooltip = makeStyles(() =>
    createStyles({
        tooltip: {
            fontSize: '14px',
            lineHeight: '19px',
            color: 'white',
            backgroundColor: '#333333',
            opacity: 1,
            padding: '0.75rem',
            borderRadius: '8px',
        },
        arrow: {
            color: '#333333',
        },
    }),
);

const theme = createTheme({
    menuPaper: {
        background: '#444444',
        hoverBackground: '#333333',
    },
    palette: {
        primary: {
            main: '#3343AB',
            light: '#CED4FB',
        },
        secondary: {
            main: '#616ECF',
        },
        error: {
            main: 'rgb(239, 68, 68)',
        },
        warning: {
            main: '#D39437',
        },
        info: {
            main: '#3343AB',
        },
        success: {
            main: '#14B8A6',
        },
        background: {
            default: '#F9F9F9',
        },
        text: {
            primary: '#6b7180',
        },
    },
    typography: {
        fontFamily: [
            '"Open Sans"',
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
    },
    overrides: {
        MuiInputLabel: {
            root: {
                fontSize: 16,
            },
        },
        MuiTooltip: {
            tooltip: {
                fontSize: '14px',
                lineHeight: '19px',
                color: 'white',
                // backgroundColor: '#333333',
            },
            arrow: {
                // color: '#333333',
            },
        },
        MuiDialog: {
            paper: {
                margin: '10px',
            },
            paperFullWidth: {
                width: '100%',
            },
        },
        MuiBackdrop: {
            root: {
                backdropFilter: 'blur(5px)',
            },
        },
        MuiSelect: {
            root: {
                background: 'white',
            },
            outlined: {
                borderWidth: 2,
            },
        },
        MuiStepIcon: {
            root: {
                color: 'transparent',
                border: '1px solid lightgray',
                borderRadius: '50%',
                '&$active': {
                    color: 'transparent',
                },
                '&$completed': {
                    color: 'lightgray !important',
                    border: 'none',
                    opacity: 0.7,
                },
            },
        },
        MuiOutlinedInput: {
            root: {
                borderRadius: 6,
                '&$error $notchedOutline': {
                    borderWidth: 2,
                },
            },
        },
        MuiIconButton: {
            root: {
                '&:focus': {
                    outline: 'none',
                },
            },
            label: {
                lineHeight: 1,
            },
        },
        MuiFab: {
            root: {
                '&:focus': {
                    outline: 'none',
                },
            },
            label: {
                lineHeight: 1,
            },
        },
        MuiButton: {
            root: {
                borderRadius: '5rem',
                fontWeight: 600,
                outlineRadius: '5rem',
                padding: buttonPadding,
                '&:focus': {
                    outline: 'none',
                },
            },
            contained: {
                '&:hover': {
                    color: '#ffffff',
                },
            },
            containedPrimary: {
                boxShadow:
                    '0px 3px 1px -2px rgb(99 102 241 / 20%), 0px 2px 2px 0px rgb(99 102 241 / 14%), 0px 1px 5px 0px rgb(99 102 241 / 12%)',
                '&:hover': {
                    boxShadow:
                        '0px 2px 4px -1px rgb(99 102 241 / 20%), 0px 4px 5px 0px rgb(99 102 241 / 14%), 0px 1px 10px 0px rgb(99 102 241 / 12%)',
                },
            },
            outlined: {
                padding: buttonPadding,
                '&:hover': {
                    color: '#3343AB',
                },
            },
            label: {
                textTransform: 'none',
            },
            startIcon: {
                marginRight: 4,
                opacity: 0.8,
            },
        },
    },
});

const MENU_ITEM_HEIGHT = 48;
const MENU_ITEM_PADDING_TOP = 8;
export const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: MENU_ITEM_HEIGHT * 4.5 + MENU_ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

export default theme;
