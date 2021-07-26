import { createStore } from 'redux';
import allReducers from './modules/rootReducer';
import { ITransactionsState } from './modules/transactions_report/types';
import { IWalletState } from './modules/wallet/types';

export interface IState {
  wallet: IWalletState;
  transactions_report: ITransactionsState;
}

const store = createStore(allReducers);

export default store;