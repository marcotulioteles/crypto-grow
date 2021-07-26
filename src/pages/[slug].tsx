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
        as="main"
        width="100vw"
        height="calc(100vh - 100px)"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
      >
        <Flex
          width="1200px"
          height="auto"
        >
          <Flex
            width="280px"
            height="180px"
            border="1px solid"
            borderColor="purple.300"
            borderRadius="12px"
            marginTop="32px"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <Text 
              color="white"
              fontSize="1.25rem"
              fontWeight="normal"
              textAlign="center"
            >YOUR BALLANCE <br/>ACCOUNT</Text>
            <Flex
              width="240px"
              height="40px"
              borderRadius="20px"
              backgroundColor="gray.900"
              alignItems="center"
              justifyContent="center"
              marginTop="28px"
            >
              <Text
                color="green.400"
                fontSize="1.125rem"
              >R$ {myWallet[2].amount.toFixed(2)}</Text>
            </Flex>
          </Flex>
        </Flex>
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
                  amount={myWallet[0].amount.toFixed(6)}
                  brand={myWallet[0].name}
                  letters_brand={myWallet[0].brand}
                  _bgColor="orange.400"
                />
                <CardCoins
                  icon={FaBitcoin}
                  _marginTop="284px"
                  amount={myWallet[1].amount.toFixed(6)}
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