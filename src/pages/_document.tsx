import Document, {Head, Html, Main, NextScript} from "next/document";
import React from "react";
import {ServerStyleSheet} from "styled-components";

class MyDocument extends Document {
    render() {
        return (
            <Html lang="ja">
                <Head>
                    <title>Parse DateTime Tool</title>
                    <meta charSet="utf-8"/>
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
                    <link
                        rel="stylesheet"
                        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
                    />
                    <link href="https://use.fontawesome.com/releases/v5.6.1/css/all.css" rel="stylesheet"/>
                    <link rel="icon" href="/favicon.png"/>
                </Head>
                <body>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        );
    }
}

MyDocument.getInitialProps = async (ctx) => {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    ctx.renderPage = () =>
        originalRenderPage({
            enhanceApp: (App) => (props) =>
                sheet.collectStyles(<App {...props} />),
        });

    const initialProps = await Document.getInitialProps(ctx);

    return {
        ...initialProps,
        styles: (
            <>
                {initialProps.styles}
                {sheet.getStyleElement()}
            </>
        ),
    };
};

export default MyDocument;