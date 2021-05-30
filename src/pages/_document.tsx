import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;700&family=Roboto+Slab:wght@500;700;900&display=swap"
            rel="stylesheet"
          />
          <link
            rel="apple-touch-icon"
            sizes="72x72"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff"></meta>

          <title>Maiara Santos</title>
          <meta name="title" content="Maiara Santos" />
          <meta
            name="description"
            content="Ui/Ux Designer devoted to creating functional web & mobile experiences focused on daily solutions."
          />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://maiara-santos.vercel.app/" />
          <meta property="og:title" content="Maiara Santos" />
          <meta
            property="og:description"
            content="Ui/Ux Designer devoted to creating functional web & mobile experiences focused on daily solutions."
          />
          <meta property="og:image" content="/og.jpg" />

          <meta property="twitter:card" content="summary_large_image" />
          <meta
            property="twitter:url"
            content="https://maiara-santos.vercel.app/"
          />
          <meta property="twitter:title" content="Maiara Santos" />
          <meta
            property="twitter:description"
            content="Ui/Ux Designer devoted to creating functional web & mobile experiences focused on daily solutions."
          />
          <meta property="twitter:image" content="/og.jpg" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
