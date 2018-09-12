import * as React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import { colors } from 'styles/variables';

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    );
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <link rel="apple-touch-icon" sizes="180x180" href="/static/icons/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/static/icons/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/static/icons/favicon-16x16.png" />
          <link rel="manifest" href="/static/site.webmanifest" />
          <link rel="mask-icon" href="/static/icons/safari-pinned-tab.svg" color={colors.brand} />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="msapplication-TileColor" content={colors.white} />
          <meta name="theme-color" content={colors.white} />
          <meta property="og:image:width" content="226" />
          <meta property="og:image:height" content="226" />
          <meta property="og:title" content="7plus | Watch TV Shows Live or On Demand" />
          <meta property="og:description" content="Explore with us. Search for your favourite TV shows on 7plus." />
          <meta property="og:url" content="https://7plus.com.au/" />
          <meta property="og:image" content="https://imageproxy.swm.digital/image?u=http:%2F%2Fmediacms.swm.digital%2Fmedia%2F1920%2F7plus_logo_cmyk_aw.jpg&format=jpeg&w=1200&q=80" />
          <title>Coding Test</title>
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
