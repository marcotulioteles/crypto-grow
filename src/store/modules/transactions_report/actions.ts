import { ITransaction } from "./types";

export function registerTransaction(transaction: ITransaction) {
  return {
    type: 'REGISTER_TRANSACTION',
    payload: { transaction }
  }
}