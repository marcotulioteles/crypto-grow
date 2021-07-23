import { Box, Button, Flex, Grid } from "@chakra-ui/react";
import { FaBitcoin } from "react-icons/fa";
import { CardCoins } from "./CardCoins";
import { CustomizedInput } from "./Form/Input";

export function ExchangePanel() {
  return (
    <Flex
      width="100%"
      height="100%"
      justifyContent="space-around"
    >
      <Flex
        flexDirection="column"
        justifyContent="space-around"
      >
        <CardCoins
          icon={FaBitcoin}
          amount="128,5616,82"
          brand="Bitcoin"
          letters_brand="BTC"
          _bgColor="orange.400"
        />
        <CardCoins
          icon={FaBitcoin}
          amount="97,1533,82"
          brand="Brita"
          letters_brand="BRI"
          _bgColor="purple.100"
        />
      </Flex>
      <Flex alignItems="center">
        <Flex
          as="form"
          width="420px"
          height="420px"
          backgroundColor="gray.900"
          borderRadius="1.125rem"
          flexDirection="column"
          alignItems="center"
        >
          <CustomizedInput
            __marginTop="36px"
            name="email"
            id="email"
            type="email"
            placeholder="email"
            __color="white"
            __height="60px"
            __width="320px"
          />
          <Grid
            templateColumns="1fr 1fr"
            marginTop="36px"
            columnGap="36px"
          >
            <CustomizedInput
              type="password"
              name="password"
              id="password"
              placeholder="password"
              __color="white"
              __height="60px"
              __width="140px"
            />
            <CustomizedInput
              type="password"
              name="password"
              id="password"
              placeholder="password"
              __color="white"
              __height="60px"
              __width="140px"
            />
          </Grid>
          <Grid
            templateColumns="1fr 1fr"
            marginTop="36px"
            columnGap="36px"
          >
            <CustomizedInput
              type="password"
              name="password"
              id="password"
              placeholder="password"
              __color="white"
              __height="60px"
              __width="140px"
            />
            <CustomizedInput
              type="password"
              name="password"
              id="password"
              placeholder="password"
              __color="white"
              __height="60px"
              __width="140px"
            />
          </Grid>
          <Button
            width="320px"
            height="72px"
            fontSize="1.35rem"
            borderRadius="36px"
            bgGradient="linear(to-r, pink.700, gray.700)"
            color="white"
            marginTop="36px"
            variant="unstyled"
          >
            SUBMIT TRANSACTION
          </Button>
        </Flex>
      </Flex>
    </Flex>
  )
}