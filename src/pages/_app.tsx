import '@/styles/globals.scss';
import type { AppProps } from 'next/app';
import { SWRConfig } from 'swr';
import { ThemeProvider } from '@material-ui/styles';
import theme from '@/src/theme';
import { CssBaseline } from '@material-ui/core';
import Head from 'next/head';
import Script from 'next/script';
import { PageLayout } from '@components/Layout';
import { Provider, useDispatch } from 'react-redux';
import { createStore } from '@store/store';
import { useEffect } from 'react';
import appSlice from '@store/slices/app';

const store = createStore();
const fetcher = (url: string) => fetch(url);
const googleTagManagerId = 'FAKE_ID';
const MyApp = ({ Component, pageProps }: AppProps) => {
    const getLayout = (Component as PageLayout).getLayout ?? ((page) => page);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(appSlice.actions.setReady({ ready: true }));
    }, []);

    const $page = getLayout(<Component {...pageProps} />);

    return (
        <SWRConfig
            value={{
                revalidateOnFocus: false,
                shouldRetryOnError: false,
                fetcher,
            }}
        >
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Head>
                    <title>Test for #30498</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                </Head>
                <Script
                    id="google-tag-manager-install"
                    dangerouslySetInnerHTML={{
                        __html: `
                      (function(w,d,s,l,i) {
                        w[l]=w[l]||[];
                        w[l].push({
                          'gtm.start': new Date().getTime(),
                          event:'gtm.js'
                        });
                        var f=d.getElementsByTagName(s)[0]
                        ,   j=d.createElement(s)
                        ,   dl=l!='dataLayer'?'&l='+l:'';
                        j.async=true;
                        j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                        f.parentNode.insertBefore(j,f);
                      }
                    )(window,document,'script','dataLayer','${googleTagManagerId}');`,
                    }}
                />
                {$page}
            </ThemeProvider>
        </SWRConfig>
    );
};

const WrappedApp = (props: AppProps) => {
    return (
        <Provider store={store}>
            <MyApp {...props} />
        </Provider>
    );
};

export default WrappedApp;
