import { Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { IState } from "../store";
import { ITransaction } from "../store/modules/transactions_report/types";

export function TableTransactions() {
  const myTransactions = useSelector<IState, ITransaction[]>(state => state.transactions_report.transactions)

  console.log(myTransactions)

  return (
    <Table
      variant="unstyled"
      width="90%"
      marginLeft="50px"
      marginTop="50px"
      size="sm"
    >
      <Thead>
        <Tr color="white">
          <Th fontSize="1rem" textAlign="center">DATE</Th>
          <Th fontSize="1rem" textAlign="center">TYPE</Th>
          <Th fontSize="1rem" textAlign="center">CURRENCY DEBIT</Th>
          <Th fontSize="1rem" textAlign="center">CURRENCY CREDIT</Th>
          <Th fontSize="1rem" textAlign="center">WITHDRAW</Th>
          <Th fontSize="1rem" textAlign="center">DEPOSIT</Th>
        </Tr>
      </Thead>
      <Tbody>
        {myTransactions.map(transaction => (
          <Tr key={transaction.id} height="2rem">
            <Td textAlign="center">{transaction.date}</Td>
            <Td textAlign="center" color="purple.100">{transaction.type}</Td>
            <Td textAlign="center">{transaction.currency_debit}</Td>
            <Td textAlign="center">{transaction.currency_credit}</Td>
            <Td textAlign="center" color="pink.500">{transaction.currency_debit} {transaction.withdraw.toFixed(5)}</Td>
            <Td textAlign="center" color="green.500">{transaction.currency_credit} {transaction.deposit.toFixed(5)}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  )
}