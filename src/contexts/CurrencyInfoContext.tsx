import { ReactNode, useEffect, createContext, useContext, useState } from "react";

import { bitcoinApi, dolarApi } from "../services/api";
import { getFormattedDate } from "../utils/Functions";

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

      let date = new Date();
      const dayOfTheWeek = date.getDay()
      const currentHour = date.getHours()

      if (dayOfTheWeek === 1 && currentHour <= 13) {
        date = new Date(Date.now() - (72 * 60 * 60 * 1000))
      }
      
      if (dayOfTheWeek === 0) {
        date = new Date(Date.now() - (48 * 60 * 60 * 1000))  
      } 
      
      if (dayOfTheWeek === 6) {
        date = new Date(Date.now() - (24 * 60 * 60 * 1000))
      }
      
      const dateDolarApi = getFormattedDate(date)
      
      console.log(dateDolarApi)

      try {
        bitcoinApi.get('BTC/ticker/').then(response => {
          setBitcoinPrice(parseFloat(response.data.ticker.buy))
          // console.log(parseFloat(response.data.ticker.buy))
        })
    
        dolarApi.get(`CotacaoDolarDia(dataCotacao='${dateDolarApi}')`).then(response => {
          setDolar(response.data.value[0].cotacaoCompra)
          // console.log(response.data.value[0].cotacaoCompra)
          // console.log(dateDolarApi)
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