import { Reducer } from "redux";
import produce from 'immer';
import { IWalletState } from "./types";

const INITIAL_STATE: IWalletState = {
  coins: [
    {
      id: 1,
      name: "bitcoin",
      brand: "BTC",
      amount: 0,
    },
    {
      id: 2,
      name: "brita",
      brand: "BRI",
      amount: 0,
    },
    {
      id: 3,
      name: "mywallet",
      brand: "R$",
      amount: 100000,
    }
  ]
};

const wallet: Reducer<IWalletState> = (state = INITIAL_STATE, action) => {
  return produce(state, draft => {
    switch(action.type) {
      case 'EXCHANGE_CURRENCY_TRANSACTION': {
        
        const updatedCoins = state.coins.map(coin => {
          const found = action.payload.find((element: { id: number; }) => element.id === coin.id);
          return found ? found : coin;
        })

        return {
          ...state,
          coins: updatedCoins
        }
      }
      default: {
        return state;
      }
    }
  })
}

export default wallet;