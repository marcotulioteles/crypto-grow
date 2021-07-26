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
    >
      <Text
        fontSize="3rem"
        color="white"
        letterSpacing="0.15rem"
      >
        { title }
      </Text>
      <Flex
        width="850px"
        height="500px"
        backgroundColor="gray.900"
        borderRadius="18px"
        overflowY={(myTransactions.length > 8 && asPath === "/userpanel-transactions") ? "scroll" : "inherit"}
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