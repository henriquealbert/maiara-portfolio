import Document, { Html, Head, Main, NextScript } from 'next/document'
import { Metatags } from 'modules/components/Metatags'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en-US">
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;700&family=Roboto+Slab:wght@500;700;900&display=swap"
            rel="stylesheet"
          />
          <Metatags />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
