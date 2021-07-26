import { combineReducers } from "redux";
import wallet from './wallet/reducer'
import transactions_report from './transactions_report/reducer'

const allReducers = combineReducers({
  wallet,
  transactions_report
})

export default allReducers