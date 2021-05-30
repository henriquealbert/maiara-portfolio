import { AppProps } from 'next/app'

import { ChakraProvider } from '@chakra-ui/react'
import customTheme from 'theme'

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={customTheme} resetCSS>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default App
