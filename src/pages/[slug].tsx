import { Flex } from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";
import { FaBitcoin } from "react-icons/fa";
import { CardCoins } from "../components/CardCoins";
import { ExchangePanel } from "../components/ExchangePanel";
import { Header } from "../components/Header";
import { Panel } from "../components/Panel";
import { Sidebar } from "../components/Sidebar";
import { TableTransactions } from "../components/TableTransactions";

export default function UserPanel() {
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
                  amount="128,5616,82"
                  brand="Bitcoin"
                  letters_brand="BTC"
                  _bgColor="orange.400"
                />
                <CardCoins
                  icon={FaBitcoin}
                  _marginTop="284px"
                  amount="97,1533,82"
                  brand="Brita"
                  letters_brand="BRI"
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