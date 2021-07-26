import { ReactNode, useEffect, createContext, useContext, useState } from "react";

import { bitcoinApi, dolarApi } from "../services/api";

interface CurrencyInfoProviderProps {
  children: ReactNode;
}

interface CurrencyInfoContextData {
  bitcoinPrice: number,
  dolar: number
}

const CurrencyInfoContext = createContext({} as CurrencyInfoContextData);

export function CurrencyInfoProvider({ children }: CurrencyInfoProviderProps) {
  const [loading, setLoading] = useState(false);
  const [bitcoinPrice, setBitcoinPrice] = useState(0);
  const [dolar, setDolar] = useState(0);

  useEffect(() => {
    async function loadCurrencies() {
      setLoading(true)
      try {
        bitcoinApi.get('BTC/ticker/').then(response => {
          setBitcoinPrice(parseFloat(response.data.ticker.buy))
          console.log(parseFloat(response.data.ticker.buy))
        })
    
        dolarApi.get("CotacaoDolarDia(dataCotacao='07-23-2021')").then(response => {
          setDolar(response.data.value[0].cotacaoCompra)
          console.log(response.data.value[0].cotacaoCompra)
        })
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }
    loadCurrencies()
  }, [])

  return (
    <CurrencyInfoContext.Provider value={{ bitcoinPrice, dolar }}>
      { children }
    </CurrencyInfoContext.Provider>
  )
}

export const useCurrencyInfo = () => useContext(CurrencyInfoContext)