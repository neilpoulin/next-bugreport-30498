// eslint-disable-next-line @typescript-eslint/no-var-requires
const colors = require('tailwindcss/colors');

const themeColors = {
    text: {
        default: '#6b7180',
        dark: '#333333',
        error: '#994D4D',
        success: '#14B8A6',
    },
    border: {
        error: '#FF8080',
    },
    bg: {
        error: '#FFE0DF',
        success: '#e7f7f6',
    },
    appBackground: '#F9F9F9',
};

module.exports = {
    mode: 'jit',
    purge: ['./src/**/*.tsx', './src/**/*.ts', './src/components/**/*.tsx', './src/pages/**/*.tsx'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        boxShadow: {
            sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
            DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
            md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
            lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
            xl: '0 20px 34px -15px rgba(0, 0, 0, 0.1)', //custom
            '2xl': '0 20px 68px -32px rgba(0, 0, 0, 0.25)', //custom
            '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
            inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
            none: 'none',
        },
        container: {
            center: true,
        },
        fontFamily: {
            sans: [
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
            ],
        },
        extend: {
            animation: {
                fadeIn: 'fadeIn 1s ease',
                fadeInBottom: 'fadeInBottom .5s ease',
                fadeInLeft: 'fadeInLeft .5s ease',
                fadeInRight: 'fadeInRight .5s ease',
                fadeInTop: 'fadeInTop .5s ease',
                scaleDown: 'scaleDown .5s ease',
            },
            transitionProperty: {
                width: 'width',
            },
            strokeWidth: {
                3: '3',
                4: '4',
                5: '5',
                6: '6',
            },
            keyframes: {
                scaleDown: {
                    '0%': { transform: 'scale(1)', opacity: 1 },
                    '100%': { transform: 'scale(.5)', opacity: 1 },
                },
                fadeIn: {
                    '0%': { opacity: 0 },
                    '100%': { opacity: 1 },
                },
                fadeInBottom: {
                    from: {
                        opacity: 0,
                        transform: 'translate3d(0, 50px, 0)',
                    },
                    to: {
                        opacity: 1,
                        transform: 'translate3d(0, 0, 0)',
                    },
                },
                fadeInLeft: {
                    from: {
                        opacity: 0,
                        transform: 'translate3d(-50px, 0, 0)',
                    },
                    to: {
                        opacity: 1,
                        transform: 'translate3d(0, 0, 0)',
                    },
                },
                fadeInRight: {
                    from: {
                        opacity: 0,
                        transform: 'translate3d(50px, 0, 0)',
                    },
                    to: {
                        opacity: 1,
                        transform: 'translate3d(0, 0, 0)',
                    },
                },
                fadeInTop: {
                    from: {
                        opacity: 0,
                        transform: 'translate3d(0, -50px, 0)',
                    },
                    to: {
                        opacity: 1,
                        transform: 'translate3d(0, 0, 0)',
                    },
                },
            },
            colors: {
                primary: '#3343AB',
                secondary: '#616ECF',
                'gray-dark': '#333333',
                'app-bg': themeColors.appBackground,
                blueGray: colors.blueGray,
                cyan: colors.cyan,
                violet: colors.violet,
                teal: colors.teal,
                green: colors.green,
                sky: colors.sky,
                amber: colors.amber,
                orange: colors.orange,
                purple: colors.purple,
            },
            textColor: {
                error: themeColors.text.error,
                'error-light': themeColors.border.error,
                default: themeColors.text.default,
                dark: themeColors.text.dark,
                success: themeColors.text.success,
            },
            borderColor: {
                error: '#FF8080',
            },
            backgroundColor: {
                error: themeColors.bg.error,
                success: themeColors.bg.success,
            },
            maxHeight: {
                'screen-75': '75vh',
            },
            minHeight: {
                xxs: '18rem',
                'screen-75': '80vh',
            },
            maxWidth: {
                xxs: '18rem',
                fit: 'fit-content',
            },
            gridTemplateColumns: {
                'fit-300': 'repeat(auto-fit, 17rem)',
                'fit-400': 'repeat(auto-fit, 26rem)',
            },
            scale: {
                175: '1.75',
            },
        },
    },
    plugins: [require('@tailwindcss/forms'), require('@tailwindcss/line-clamp')],
};
