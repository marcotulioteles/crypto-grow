import { Flex, Icon, Text } from "@chakra-ui/react";
import { FaBitcoin } from "react-icons/fa";

export function Logo() {
  return (
    <Flex
      alignItems="center"
    >
      <Icon
        as={FaBitcoin}
        width={14}
        height={14}
        color="orange.400"
      />
      <Text
        as="h1"
        fontSize="2rem"
        fontWeight="semibold"
        color="purple.400"
        marginLeft="1rem"
      >
        CryptoGROW
      </Text>
    </Flex>
  )
}