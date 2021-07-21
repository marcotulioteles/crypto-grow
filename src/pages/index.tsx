import { Flex, Image, Text } from "@chakra-ui/react";
import { Header } from "../components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <Flex
        as="main"
        width="100vw"
        height="calc(100vh - 100px)"
        alignItems="center"
        justifyContent="center"
        position="relative"
      >
        <Flex
          width="1200px"
        >
          <Flex
            width="calc(1020px + (100vw - 1200px)/2)"
            height="495px"
            marginLeft="calc((-100vw + 1200px)/2)"
            alignItems="center"
            justifyContent="center"
            bgColor="gray.900"
            borderRadius="0 18px 18px 0"
            position="relative"
          >
            <Text
              as="h1"
              color="white"
              fontSize="3rem"
              letterSpacing=".15rem"
            >Manage your bitcoin <br />wallet is&nbsp;
              <Text
                as="span"
                color="pink.700"
              >
                easy peasy
              </Text> with us</Text>
          </Flex>
          <Image 
            src="/images/bitcoin-coins.png"
            position="absolute"
            marginTop="2.25rem"
            right="280"
          />
        </Flex>
      </Flex>
    </>
  )
}
