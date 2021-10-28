import React from 'react';
import getNextConfig from 'next/config';
import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document';
import { ServerStyleSheets } from '@material-ui/core/styles';

export default class MyDocument extends Document {
    /**
     * Add Material UI style sheets on the server to prevent flashing of styles
     * See [here for more info](https://github.com/mui-org/material-ui/blob/master/examples/nextjs/pages/_document.js)
     */
    static async getInitialProps(ctx: DocumentContext) {
        // Render app and page and get the context of the page with collected side effects.
        const sheets = new ServerStyleSheets();
        const originalRenderPage = ctx.renderPage;

        ctx.renderPage = () =>
            originalRenderPage({
                enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
            });

        const initialProps = await Document.getInitialProps(ctx);

        return {
            ...initialProps,
            // Styles fragment is rendered after the app and page rendering finish.
            styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()],
        };
    }

    render() {
        const Config = getNextConfig();
        const tagManagerId = Config.publicRuntimeConfig.tagManagerID;
        if (!tagManagerId) {
            throw new Error('No Tag Manager ID found.');
        }

        return (
            <Html lang="en">
                <Head>
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap"
                        rel="stylesheet"
                    />

                    <noscript
                        dangerouslySetInnerHTML={{
                            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${tagManagerId}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
                        }}
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
