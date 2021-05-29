import Head from 'next/head'
import { AppProps } from 'next/app'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Maiara Santos</title>
        <meta
          name="description"
          content="Ui/Ux Designer devoted to create functional web & mobile experiences focused in daily solutions."
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default App
