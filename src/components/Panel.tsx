import { Flex, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

interface PanelProps {
  title: string;
  children: ReactNode
}

export function Panel({ title, children }: PanelProps) {
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
      >
        { children }
      </Flex>
    </Flex>
  )
}