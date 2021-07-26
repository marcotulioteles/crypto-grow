export interface ITransaction {
  id: number;
  date: number
  type: string;
  currency_debit: string,
  currency_credit: string,
  deposit: number;
  withdraw: number;
}

export interface ITransactionsState {
  transactions: ITransaction[];
}