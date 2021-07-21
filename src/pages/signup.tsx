import { Flex, Text } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { Input } from "../components/Form/Input"

export default function SignUp() {
  return (
    <>
      <Header />
      <Flex
        justifyContent="center"
        alignItems="center"
        width="100vw"
        height="calc(100vh - 100px)"
      >
        <Flex
          as="form"
          width="420px"
          height="736px"
          backgroundColor="gray.900"
          borderRadius="1.125rem"
          flexDirection="column"
          alignItems="center"
        >
          <Text
            fontSize="2rem"
            fontWeight="600"
            marginTop="36px"
            marginLeft="50px"
          >
            New <br/> Account
          </Text>
          <Flex 
            as="label"
            width="320px"
            height="60px"
            backgroundColor="gray.700"
            borderRadius="12px"
            border="1px solid"
            borderColor="purple.300"
          >
            <Input 
              name={"name"}
              placeholder="name"
              width="320px"
            />  
          </Flex>
        </Flex>
      </Flex>
    </>
  )
}