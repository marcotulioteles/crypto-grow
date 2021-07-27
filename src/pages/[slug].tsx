import { Flex, Text } from "@chakra-ui/react";
import  { useRouter } from "next/router";

import { FaBitcoin } from "react-icons/fa";

import { CardCoins } from "../components/CardCoins";
import { ExchangePanel } from "../components/ExchangePanel";
import { Header } from "../components/Navigation/Header";
import { Panel } from "../components/Panel";
import { SidebarNav } from "../components/Sidebar/SidebarNav";
import { TableTransactions } from "../components/TableTransactions";

import { useSelector } from "react-redux";
import { IState } from "../store";
import { useCurrencyInfo } from "../contexts/CurrencyInfoContext";

export default function UserPanel() {
  const myWallet = useSelector<IState>(state => state.wallet.coins)
  const { bitcoinPrice, dolar } = useCurrencyInfo()

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
        marginTop={{ base:"120px", xl: "0" }}
        marginBottom={{ base:"120px", xl: "0" }}
      >
        <Flex
          width={{ base: "100%", xl: "1200px"}}
          height="auto"
          flexDirection={{ base: "column", lg: "row" }}
          justifyContent={{ base: "center", lg: "space-between" }}
          alignItems="center"
          marginTop={{ base: "180px", lg: "0" }}
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
              marginBottom="28px"
            >YOUR BALLANCE <br/>ACCOUNT</Text>
            <Flex
              width="240px"
              height="40px"
              borderRadius="20px"
              backgroundColor="gray.900"
              alignItems="center"
              justifyContent="center"
            >
              <Text
                color="green.400"
                fontSize="1.125rem"
              >R$ {myWallet[2].amount.toFixed(2)}</Text>
            </Flex>
          </Flex>
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
            <Flex
              width="240px"
              height="40px"
              borderRadius="20px"
              backgroundColor="gray.900"
              alignItems="center"
              justifyContent="center"
            >
              <Text
                color="green.400"
                fontSize="1rem"
                paddingX="12px"
              ><span style={{color: "white"}}>Cotação Dolar:</span> {dolar}</Text>
            </Flex>
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
                fontSize="1rem"
                paddingX="12px"
              ><span style={{color: "white"}}>Bitcoin:</span> R$ {bitcoinPrice.toFixed(2)}</Text>
            </Flex>
          </Flex>
        </Flex>
        <Flex
          width={{ base: "100%", xl: "1200px" }}
          height="calc(100vh - 100px)"
          alignItems={{ base: "center", lg: "center" }}
          justifyContent={{base: "space-between", lg:"space-between"}}
          flexDirection={{ base: "column", xl: "row" }}
        >
          <SidebarNav />
          <Panel title={asPath.split('-')[asPath.split('-').length - 1].replace(/_/g, ' ').toUpperCase()}>
            {( (asPath === "/userpanel-wallet") ?
              <>
                <CardCoins
                  icon={FaBitcoin}
                  amount={myWallet[0].amount.toFixed(6)}
                  brand={myWallet[0].name}
                  letters_brand={myWallet[0].brand}
                  _bgColor="orange.400"
                />
                <CardCoins
                  icon={FaBitcoin}
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