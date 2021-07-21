import { Flex, Text } from "@chakra-ui/react";
import { Header } from "../components/Header";

export default function SignIn() {
  return (
    <>
      <Header />
      <Flex
        justifyContent="center"
        alignItems="center"
        width="100vw"
        height="calc(100vh - 100px)"
      >
        <Flex>
          <Text>SIGN IN</Text>
        </Flex>
      </Flex>
    </>
  )
}