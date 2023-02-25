import { ChakraProvider } from '@chakra-ui/react'
import WalletConnectionProvider from 'components/WalletContextProvider'
import { extendTheme } from '@chakra-ui/react'

const colors = {
  background: "#1F1F1F",
  accent: "#833BBE",
  bodyText: "rgba(255, 255, 255, 0.75)",
}

const theme = extendTheme({ colors })

export default function App({ Component, pageProps }) {
  return (
  <ChakraProvider theme={theme}>
    <WalletConnectionProvider>
      <Component {...pageProps} />
    </WalletConnectionProvider>
  </ChakraProvider>
  )
}
