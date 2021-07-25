import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux'

import { theme } from '../styles/theme';
import store from '../store';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </ChakraProvider>
  )
}

export default MyApp
