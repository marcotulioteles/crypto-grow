import { IWalletCoin } from "./types";

export function exchangeCurrencyTransaction(coin1: IWalletCoin, coin2: IWalletCoin) {
  return {
    type: 'EXCHANGE_CURRENCY_TRANSACTION',
    payload: [
      coin1,
      coin2
    ]
  }
}