import { Table, Tbody, Td, Tfoot, Th, Thead, Tr } from "@chakra-ui/react";

export function TableTransactions() {
  const typeTransaction = 'Exchange'

  return (
    <Table 
      variant="unstyled" 
      width="90%" 
      marginLeft="50px"
      marginTop="50px"
    > 
      <Thead>
        <Tr color="white">
          <Th fontSize="1.125rem">DATE</Th>
          <Th fontSize="1.125rem">TYPE</Th>
          <Th fontSize="1.125rem">CURRENCY</Th>
          <Th fontSize="1.125rem">AMOUNT</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>16 July 2021</Td>
          <Td color={(typeTransaction == 'Exchange') ? "pink.500" : "green.500"}>Exchange</Td>
          <Td>581.22 BTC --- 73.84 BRI</Td>
          <Td color={(typeTransaction == 'Exchange') ? "pink.500" : "green.500"}>$ 9,541.88</Td>
        </Tr>
        <Tr>
          <Td>16 July 2021</Td>
          <Td color={(typeTransaction == 'Exchange') ? "pink.500" : "green.500"}>Exchange</Td>
          <Td>581.22 BTC --- 73.84 BRI</Td>
          <Td color={(typeTransaction == 'Exchange') ? "pink.500" : "green.500"}>$ 9,541.88</Td>
        </Tr>
        <Tr>
          <Td>16 July 2021</Td>
          <Td>Exchange</Td>
          <Td>581.22 BTC --- 73.84 BRI</Td>
          <Td>$ 9,541.88</Td>
        </Tr>
        <Tr>
          <Td>16 July 2021</Td>
          <Td>Exchange</Td>
          <Td>581.22 BTC --- 73.84 BRI</Td>
          <Td>$ 9,541.88</Td>
        </Tr>
        <Tr>
          <Td>16 July 2021</Td>
          <Td>Exchange</Td>
          <Td>581.22 BTC --- 73.84 BRI</Td>
          <Td>$ 9,541.88</Td>
        </Tr>
        <Tr>
          <Td>16 July 2021</Td>
          <Td>Exchange</Td>
          <Td>581.22 BTC --- 73.84 BRI</Td>
          <Td>$ 9,541.88</Td>
        </Tr>
        <Tr>
          <Td>16 July 2021</Td>
          <Td>Exchange</Td>
          <Td>581.22 BTC --- 73.84 BRI</Td>
          <Td>$ 9,541.88</Td>
        </Tr>
      </Tbody>
    </Table>
  )
}