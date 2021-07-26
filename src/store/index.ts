import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import allReducers from './modules/rootReducer';
import { ITransactionsState } from './modules/transactions_report/types';
import { IWalletState } from './modules/wallet/types';

export interface IState {
  wallet: IWalletState;
  transactions_report: ITransactionsState;
}

const persistConfig = {
  key: 'cryptoGrowReduxPersist',
  storage
};

const persistedReducer = persistReducer(persistConfig, allReducers)

const store = createStore(persistedReducer);
const persistor = persistStore(store);

export { store, persistor };