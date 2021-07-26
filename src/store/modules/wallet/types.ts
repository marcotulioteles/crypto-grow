export interface IWalletCoin {
  id: number;
  name: string;
  brand: string;
  amount: number;
}

export interface IWalletState {
  coins: IWalletCoin[];
}