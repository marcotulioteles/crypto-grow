import { Flex, Icon, Text } from "@chakra-ui/react";
import { ElementType } from "react";

interface CardCoinsProps {
  icon: ElementType;
  _marginTop?: string;
  _marginLeft?: string;
  _bgColor?: string;
  brand: string;
  amount: string;
  letters_brand: string
}

export function CardCoins({ icon, _marginLeft, _marginTop, amount, brand, letters_brand, _bgColor}: CardCoinsProps) {
  return (
    <Flex
      width="320px"
      height="160px"
      backgroundColor={_bgColor}
      borderRadius="16px"
      flexDirection="column"
      position="relative"
      marginTop={_marginTop}
      marginLeft={_marginLeft}
    >
      <Icon
        as={icon}
        width={7}
        height={7}
        color="white"
        marginTop="12px"
        marginLeft="22px"
      />
      <Flex
        color="white"
        flexDirection="column"
        marginTop="36px"
        marginLeft="22px"
      >
        <Text fontSize="1.125rem">{brand}</Text>
        <Text fontSize="1.75rem" fontWeight="semibold">{amount}</Text>
      </Flex>
      <Text
        position="absolute"
        color="white"
        left="235px"
        top="112px"
      >{letters_brand}</Text>
    </Flex>
  )
}