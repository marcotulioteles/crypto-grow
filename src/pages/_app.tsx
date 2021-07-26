import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';

import { theme } from '../styles/theme';
import { store, persistor } from '../store';
import { CurrencyInfoProvider } from '../contexts/CurrencyInfoContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <CurrencyInfoProvider>
            <Component {...pageProps} />
          </CurrencyInfoProvider>
        </PersistGate>
      </Provider>
    </ChakraProvider>
  )
}

export default MyApp
