import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux'

import { theme } from '../styles/theme';
import store from '../store';
import { CurrencyInfoProvider } from '../contexts/CurrencyInfoContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Provider store={store}>
        <CurrencyInfoProvider>
          <Component {...pageProps} />
        </CurrencyInfoProvider>
      </Provider>
    </ChakraProvider>
  )
}

export default MyApp
