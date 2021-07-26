import { Flex, Input } from "@chakra-ui/react";
import { useCallback, useState } from "react";

import { IState } from "../store";
import { FaBitcoin } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { exchangeCurrencyTransaction } from "../store/modules/wallet/actions";

import { CardCoins } from "./CardCoins";
import { IWalletCoin } from "../store/modules/wallet/types";
import { FormTransactions } from "./Form/FormTransactions";
import { useCurrencyInfo } from "../contexts/CurrencyInfoContext";
import { ITransaction } from "../store/modules/transactions_report/types";
import { registerTransaction } from "../store/modules/transactions_report/actions";

export function ExchangePanel() {
  const myWallet = useSelector<IState, IWalletCoin[]>(state => state.wallet.coins)

  const dispatch = useDispatch();
  
  const [bitcoinToBritaValue, setBitcoinToBritaValue] = useState(0);
  const [britaToBitcoinValue, setBritaToBitcoinValue] = useState(0);
  const [bitcoinSaleValue, setBitcoinSaleValue] = useState(0);
  const [britaSaleValue, setBritaSaleValue] = useState(0);
  const [buyBritaValue, setBuyBritaValue] = useState(0);
  const [buyBitcoinValue, setBuyBitcoinValue] = useState(0);

  const [transactionError, setTransactionError] = useState(false)
  const [transactionErrorMessage, setTransactionErrorMessage] = useState("")

  const { bitcoinPrice, dolar } = useCurrencyInfo()

  const handleReset = () => {
    Array.from(document.querySelectorAll("input")).forEach(
      input => (input.value = "")
    );
  }

  const handleExchangeCurrencyTransaction = useCallback((coin1: IWalletCoin, coin2: IWalletCoin) => {
    dispatch(exchangeCurrencyTransaction(coin1, coin2))
  }, [dispatch])
  
  const handleSendTransactionToReport = useCallback((transaction: ITransaction ) => {
    dispatch(registerTransaction(transaction))
  }, [dispatch])

  return (
    <Flex
      width="100%"
      height="100%"
      justifyContent="space-around"
    >
      <Flex
        flexDirection="column"
        justifyContent="space-around"
      >
        <CardCoins
          icon={FaBitcoin}
          amount={myWallet[0].amount.toFixed(6).toString()}
          brand={myWallet[0].name}
          letters_brand={myWallet[0].brand}
          _bgColor="orange.400"
        />
        <CardCoins
          icon={FaBitcoin}
          amount={myWallet[1].amount.toFixed(6).toString()}
          brand={myWallet[1].name}
          letters_brand={myWallet[1].brand}
          _bgColor="purple.100"
        />
      </Flex>
      <Flex
        flexDirection="column"
        justifyContent="space-around"
        alignItems="center"
        width="320px"
      >
        <FormTransactions
          name="EXCHANGE BITCOIN TO BRITA"
          placeholder="BTC"
          onClickFunction={() => {
            handleExchangeCurrencyTransaction({
              id: 1,
              name: "bitcoin",
              brand: "BTC",
              amount: myWallet[0].amount - bitcoinToBritaValue,
            },
              {
                id: 2,
                name: "brita",
                brand: "BRI",
                amount: myWallet[1].amount + (bitcoinToBritaValue * bitcoinPrice),
              })

              handleReset()

              handleSendTransactionToReport({
                id: Date.now(),
                date: Date.now(),
                type: "Exchange",
                currency_debit: "BTC",
                currency_credit: "BRI",
                deposit: bitcoinToBritaValue * bitcoinPrice,
                withdraw: bitcoinToBritaValue,
              })
          }}
          children={<Input
            placeholder="BTC"
            type="number"
            color="white"
            width="120px"
            onChange={event => { 
              setBitcoinToBritaValue(parseFloat(event.target.value)) 
            }}
          />}
        />
        <FormTransactions
          name="EXCHANGE BRITA TO BITCOIN"
          placeholder="BRI"
          onClickFunction={() => {
            handleExchangeCurrencyTransaction({
              id: 1,
              name: "bitcoin",
              brand: "BTC",
              amount: myWallet[0].amount + (britaToBitcoinValue / bitcoinPrice),
            },
              {
                id: 2,
                name: "brita",
                brand: "BRI",
                amount: myWallet[1].amount - britaToBitcoinValue,
              })

            handleReset()

            handleSendTransactionToReport({
              id: Date.now(),
              date: Date.now(),
              type: "Exchange",
              currency_debit: "BRI",
              currency_credit: "BTC",
              deposit: britaToBitcoinValue / bitcoinPrice,
              withdraw: britaToBitcoinValue,
            })
          }}
          children={<Input
            placeholder="BRI"
            type="number"
            color="white"
            width="120px"
            onChange={event => { 
              setBritaToBitcoinValue(parseFloat(event.target.value)) 
            }}
          />}
        />
        <FormTransactions
          name="SALE BITCOIN"
          placeholder="BTC"
          onClickFunction={() => {
            handleExchangeCurrencyTransaction({
              id: 1,
              name: "bitcoin",
              brand: "BTC",
              amount: myWallet[0].amount - bitcoinSaleValue,
            },
              {
                id: 3,
                name: "mywallet",
                brand: "R$",
                amount: myWallet[2].amount + (bitcoinSaleValue * bitcoinPrice) / dolar,
              })

            handleReset()

            handleSendTransactionToReport({
              id: Date.now(),
              date: Date.now(),
              type: "SALE",
              currency_debit: "BTC",
              currency_credit: "R$",
              deposit: (bitcoinSaleValue * bitcoinPrice) / dolar,
              withdraw: bitcoinSaleValue,
            })
          }}
          children={<Input
            placeholder="BTC"
            type="number"
            color="white"
            width="120px"
            onChange={event => { setBitcoinSaleValue(parseFloat(event.target.value)) }}
          />}
        />
        <FormTransactions
          name="SALE BRITA"
          placeholder="BRI"
          onClickFunction={() => {
            handleExchangeCurrencyTransaction({
              id: 2,
              name: "brita",
              brand: "BRI",
              amount: myWallet[1].amount - britaSaleValue,
            },
              {
                id: 3,
                name: "mywallet",
                brand: "R$",
                amount: myWallet[2].amount + (britaSaleValue * dolar),
              })

            handleReset()

            handleSendTransactionToReport({
              id: Date.now(),
              date: Date.now(),
              type: "SALE",
              currency_debit: "BRI",
              currency_credit: "R$",
              deposit: (britaSaleValue * dolar),
              withdraw: britaSaleValue,
            })
          }}
          children={<Input
            placeholder="BRI"
            type="number"
            color="white"
            width="120px"
            onChange={event => { setBritaSaleValue(parseFloat(event.target.value)) }}
          />}
        />
        <FormTransactions
          name="BUY BITCOIN"
          placeholder="R$"
          onClickFunction={() => {
            handleExchangeCurrencyTransaction({
              id: 1,
              name: "bitcoin",
              brand: "BTC",
              amount: myWallet[0].amount + ((buyBitcoinValue / dolar) / bitcoinPrice),
            },
              {
                id: 3,
                name: "mywallet",
                brand: "R$",
                amount: myWallet[2].amount - buyBitcoinValue,
              })

            handleReset()

            handleSendTransactionToReport({
              id: Date.now(),
              date: Date.now(),
              type: "Exchange",
              currency_debit: "R$",
              currency_credit: "BTC",
              deposit: ((buyBitcoinValue / dolar) / bitcoinPrice),
              withdraw: buyBitcoinValue,
            })
          }}
          children={<Input
            placeholder="R$"
            type="number"
            color="white"
            width="120px"
            onChange={event => { setBuyBitcoinValue(parseFloat(event.target.value)) }}
          />}
        />
        <FormTransactions
          name="BUY BRITA"
          placeholder="R$"
          onClickFunction={() => {
            handleExchangeCurrencyTransaction({
              id: 2,
              name: "brita",
              brand: "BRI",
              amount: myWallet[1].amount + (buyBritaValue / dolar),
            },
              {
                id: 3,
                name: "mywallet",
                brand: "R$",
                amount: myWallet[2].amount - buyBritaValue,
              })

            handleReset()

            handleSendTransactionToReport({
              id: Date.now(),
              date: Date.now(),
              type: "Exchange",
              currency_debit: "R$",
              currency_credit: "BRI",
              deposit: (buyBritaValue / dolar),
              withdraw: buyBritaValue,
            })
          }}
          children={<Input
            placeholder="R$"
            type="number"
            color="white"
            width="120px"
            onChange={event => { setBuyBritaValue(parseFloat(event.target.value)) }}
          />}
        />
      </Flex>
    </Flex>
  )
}