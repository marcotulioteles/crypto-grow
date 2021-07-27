import { Flex, Icon, Text } from "@chakra-ui/react";
import { FaBitcoin } from "react-icons/fa";

type LogoProps = {
  logoColor: string;
  __marginTop: string;
}

export function Logo({ logoColor, __marginTop }: LogoProps) {
  return (
    <Flex
      alignItems="center"
      marginTop={__marginTop}
      flexDirection={{ base: "column", md: "row" }}
    >
      <Icon
        as={FaBitcoin}
        width={14}
        height={14}
        color={logoColor}
      />
      <Text
        as="h1"
        fontSize={{ base: "1.5rem", md: "2rem"}}
        fontWeight="semibold"
        color="purple.400"
        marginLeft="1rem"
      >
        CryptoGROW
      </Text>
    </Flex>
  )
}