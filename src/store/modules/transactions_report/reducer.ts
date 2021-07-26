import { Reducer } from "redux";
import produce from 'immer';
import { ITransactionsState } from "./types";

const INITIAL_STATE: ITransactionsState = {
  transactions: []
};

const transactions_report: Reducer<ITransactionsState> = (state = INITIAL_STATE, action) => {
  return produce(state, draft => {
    switch(action.type) {
      case 'REGISTER_TRANSACTION': {
        const { transaction } = action.payload;
        
        draft.transactions.push(transaction)
        
        break;
      }
      default: {
        return draft;
      }
    }
  })
}

export default transactions_report;