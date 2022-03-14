import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="preload"
            href="/fonts/inter-v2-latin-regular.woff2"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/inter-v2-latin-700.woff2"
            as="font"
            crossOrigin=""
          />
          <meta title="Blog made with CMS" />
          <link rel="manifest" href="/manifest.json" />
          <meta name="theme-color" content="#fafafa" />
          <link rel="icon" href="/favicons/favicon.ico" />
          <meta name="application-name" content="&nbsp;" />
          <link
            rel="icon"
            type="image/png"
            href="/favicons/favicon-32x32.png"
            sizes="32x32"
          />
          <link
            rel="icon"
            type="image/png"
            href="/favicons/favicon-16x16.png"
            sizes="16x16"
          />
          <link
            rel="apple-touch-icon-precomposed"
            sizes="180x180"
            href="/favicons/apple-touch-icon-180x180.png"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>

        {/* <div
          dangerouslySetInnerHTML={{
            __html: `
            <script>
              window.NuVidioId = "rafael.nuvidio.test";
              window.NuVidioConfigs = {
                fabButton: true,
              }
            </script>

            <script type="text/javascript" src="https://hmlwidget.nuvidio.com/init.js" async></script>
          `
          }}
        /> */}

        <div
          dangerouslySetInnerHTML={{
            __html: `
            <script type="text/javascript">window.$crisp=[];window.CRISP_WEBSITE_ID="dc8ae365-5602-4692-8174-333d69a515c9";(function(){d = document;s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();</script>
          `
          }}
        />
      </Html>
    )
  }
}

export default MyDocument
