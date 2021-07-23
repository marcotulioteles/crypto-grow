import { Flex, Text, Input, Icon, Button } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { FiUser, FiMail, FiLock } from "react-icons/fi"
import { CustomizedInput } from "../components/Form/Input";

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
          <CustomizedInput
            __marginTop="42px"
            icon={FiUser}
            name="name"
            id="name"
            type="text"
            placeholder="name"
            __color="white"
            __height="60px"
            __width="320px"
          />
          <CustomizedInput
            __marginTop="42px"
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
            __marginTop="42px"
            __color="white"
            __height="60px"
            __width="320px"
          />
          <CustomizedInput
            type="password"
            name="retype password"
            id="password"
            icon={FiLock}
            placeholder="retype password"
            __marginTop="42px"
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
            marginTop="42px"
            variant="unstyled"
          >
            SIGN UP
          </Button>
        </Flex>
      </Flex>
    </>
  )
}