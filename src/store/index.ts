import { createStore } from 'redux';
import rootReducer from './modules/rootReducer';
import { IWalletState } from './modules/wallet/types';

export interface IState {
  wallet: IWalletState;
}

const store = createStore(rootReducer);

export default store;