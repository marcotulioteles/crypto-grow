import { Flex, Text } from "@chakra-ui/react";
import { ReactNode } from "react";
import { useSelector } from "react-redux";
import { IState } from "../store";
import { ITransaction } from "../store/modules/transactions_report/types";
import { useRouter } from "next/router"

interface PanelProps {
  title: string;
  children: ReactNode
}

export function Panel({ title, children }: PanelProps) {
  const myTransactions = useSelector<IState, ITransaction[]>(state => state.transactions_report.transactions)
  const { asPath } = useRouter()

  return (
    <Flex
      flexDirection="column"
      width="100%"
      alignItems={{ base: "center", lg:"inherit" }}
    >
      <Text
        fontSize={{ base: "2.25rem", lg: "3rem" }}
        color="white"
        letterSpacing="0.15rem"
        textAlign={{ base: "center", lg: "left" }}
      >
        { title }
      </Text>
      <Flex
        width={{ base:"95%" , lg: "850px" }}
        height={{ base:"auto", lg: "500px" }}
        backgroundColor="gray.900"
        borderRadius="18px"
        overflowY={(myTransactions.length > 8 && asPath === "/userpanel-transactions") ? "scroll" : "inherit"}
        overflowX={{base: "scroll", lg: "hidden"}}
        flexDirection={{ base: "column", lg: "row" }}
        alignItems={{ base: "center", lg:"center" }}
        justifyContent={{ base: "center", lg:"space-around" }}
        css={{
          '&::-webkit-scrollbar': {
            width: '0.55rem',
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#4B4D9F',
            borderRadius: '0.25rem',
          },
          '&::-webkit-scrollbar-track': {
            backgroundColor: '#212245'
          }
          }}
      >
        { children }
      </Flex>
    </Flex>
  )
}