import { Button, Flex, Text } from "@chakra-ui/react";
import { FiLock, FiMail } from "react-icons/fi";
import { CustomizedInput } from "../components/Form/Input";
import { Header } from "../components/Header";
import { Logo } from "../components/Logo";

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
        <Flex
          as="form"
          width="420px"
          height="600px"
          backgroundColor="gray.900"
          borderRadius="1.125rem"
          flexDirection="column"
          alignItems="center"
        >
          <Logo 
            logoColor=""
            __marginTop="76px"
          />
          <CustomizedInput
            __marginTop="54px"
            icon={FiMail}
            name="email"
            id="email"
            type="email"
            placeholder="email"
            __color="white"
            __height="60px"
            __width="320px"
          />
          <CustomizedInput
            type="password"
            name="password"
            id="password"
            icon={FiLock}
            placeholder="password"
            __marginTop="54px"
            __color="white"
            __height="60px"
            __width="320px"
          />
          <Button
            width="320px"
            height="72px"
            fontSize="1.5rem"
            borderRadius="36px"
            bgGradient="linear(to-r, pink.700, gray.700)"
            color="white"
            marginTop="54px"
            variant="unstyled"
          >
            SIGN IN
          </Button>
        </Flex>
      </Flex>
    </>
  )
}