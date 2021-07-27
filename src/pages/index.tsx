import { Flex, Image, Text } from "@chakra-ui/react";
import { Header } from "../components/Navigation/Header";

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
          width={{base: "100%", xl: "1200px"}}
        >
          <Flex
            width={{base: "100%", xl: "calc(1020px + (100vw - 1200px)/2)"}}
            height="495px"
            marginLeft={{base: "0", xl: "calc((-100vw + 1200px)/2)"}}
            flexDirection="column"
            justifyContent="center"
            bgColor="gray.900"
            borderRadius={{ base: "0", xl: "0 18px 18px 0"}}
            position="relative"
          >
            <Text
              as="h1"
              color="white"
              fontSize={{base:"2.25rem", md: "2.75rem", lg: "3rem"}}
              letterSpacing=".15rem"
              textAlign={{ base: "center", xl: "inherit" }}
              marginLeft={{ base: "0", xl: "360px"}}
            >Manage your bitcoin wallet <br/>is <span style={{ color: "#FF3180" }}>easy peasy</span> with us</Text>
              <Text
                as="h1"
                color="white"
                fontSize={{base:"1rem", md: "1rem", lg: "1rem"}}
                letterSpacing=".10rem"
                textAlign={{ base: "center", xl: "inherit" }}
                marginLeft={{ base: "0", xl: "360px"}}
              >Buy and sell bitcoins and other crypto coins with no efforts like we do with <br/>any other currency.
              </Text>
          </Flex>
          <Image 
            src="/images/bitcoin-coins.png"
            alt="bitcoins"
            position="absolute"
            marginTop="2.25rem"
            right="280"
            display={{ base: "none", xl: "inherit" }}
          />
        </Flex>
      </Flex>
    </>
  )
}
