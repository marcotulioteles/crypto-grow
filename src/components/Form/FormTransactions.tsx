import { Button, Flex, Input, Text } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface FormTransactionProps {
  name: string;
  placeholder: string;
  onClickFunction: () => void
  children: ReactNode
}

export function FormTransactions({ name, children, onClickFunction }: FormTransactionProps) {
  return (
    <Flex flexDirection="column" width="100%" textAlign={{base: "center", lg: "inherit"}}>
      <Text>{name}</Text>
      <Flex
        marginTop="0.5rem"
        justifyContent="space-around"
      >
        <>
          {children}
        </>
        <Button
          width="150px"
          textTransform="uppercase"
          fontSize="0.75rem"
          onClick={onClickFunction}
          color="white"
          bgGradient="linear(to-r, pink.700, gray.900)"
          variant="unstyled"
        >
          Submit <br />Transaction
        </Button>
      </Flex>
    </Flex>
  )
}