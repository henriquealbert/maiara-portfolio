import Head from 'next/head'
import { AppProps } from 'next/app'

import { ChakraProvider } from '@chakra-ui/react'
import customTheme from 'theme'

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={customTheme} resetCSS>
      <Head>
        <title>Maiara Santos</title>
        <meta
          name="description"
          content="Ui/Ux Designer devoted to create functional web & mobile experiences focused in daily solutions."
        />
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default App
