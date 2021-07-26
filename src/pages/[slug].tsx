import { Flex, Text } from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";

import { FaBitcoin } from "react-icons/fa";

import { CardCoins } from "../components/CardCoins";
import { ExchangePanel } from "../components/ExchangePanel";
import { Header } from "../components/Header";
import { Panel } from "../components/Panel";
import { Sidebar } from "../components/Sidebar";
import { TableTransactions } from "../components/TableTransactions";

import { useSelector } from "react-redux";
import { IState } from "../store";

export default function UserPanel() {
  const myWallet = useSelector<IState>(state => state.wallet.coins)

  const { asPath } = useRouter()
  return (
    <>
      <Header />
      <Flex
        marginLeft="240px"
      >
        <Text
          color="white"
          fontSize="2rem"
        >R$ {myWallet[2].amount.toFixed(2)}</Text>
      </Flex>
      <Flex
        as="main"
        width="100vw"
        height="calc(100vh - 100px)"
        alignItems="center"
        justifyContent="center"
      >
        <Flex
          width="1200px"
          height="calc(100vh - 100px)"
          alignItems="center"
          justifyContent="space-between"
        >
          <Sidebar />
          <Panel title={asPath.split('-')[asPath.split('-').length - 1].replace(/_/g, ' ').toUpperCase()}>
            {( (asPath === "/userpanel-wallet") ?
              <>
                <CardCoins
                  icon={FaBitcoin}
                  _marginTop="56px"
                  _marginLeft="105px"
                  amount={myWallet[0].amount}
                  brand={myWallet[0].name}
                  letters_brand={myWallet[0].brand}
                  _bgColor="orange.400"
                />
                <CardCoins
                  icon={FaBitcoin}
                  _marginTop="284px"
                  amount={myWallet[1].amount}
                  brand={myWallet[1].name}
                  letters_brand={myWallet[1].brand}
                  _bgColor="purple.100"
                />
              </> : (asPath === "/userpanel-transactions") ?
                <TableTransactions /> : (asPath === "/userpanel-exchange_and_sale") ?
                <ExchangePanel /> : "" 
            )}
          </Panel>
        </Flex>
      </Flex>
    </>
  )
}