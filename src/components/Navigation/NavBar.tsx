import { Flex } from "@chakra-ui/react";
import { NavLink } from "./NavLink";

export function NavBar() {
  return (
    <Flex
      as="nav"
      height={{ base: "100vh", lg: "80px" }}
      border={{base: "none", lg: "1px solid"}}
      borderColor="purple.300"
      borderRadius={{base: "0", lg: "12px"}}
      backgroundColor={{ base: "purple.50", lg: "gray.700" }}
      flexDirection={{ base: "column", lg: "row" }}
      position={{ base: "fixed", lg: "inherit" }}
      right={{ base: "0", lg: "inherit" }}
      top={{ base: "80px", lg: "inherit" }}
      zIndex="10"
    >
      <NavLink
        href="/"
        _colorText='gray.50'
        _bgColorLink='gray.900'
        _borderColorLink='purple.300'
        _borderTypeLink='1px solid'
      >HOME</NavLink>
      <NavLink
        href="#"
        marginLeft={{ base: "0", lg: "16px" }}
        _colorText='gray.50'
        _bgColorLink='gray.900'
        _borderColorLink='purple.300'
        _borderTypeLink='1px solid'
      >ABOUT US</NavLink>
      <NavLink
        href="#"
        marginLeft={{ base: "0", lg: "16px" }}
        _colorText='gray.50'
        _bgColorLink='gray.900'
        _borderColorLink='purple.300'
        _borderTypeLink='1px solid'
      >SERVICES</NavLink>
      <NavLink
        href="/signup"
        marginLeft={{ base: "0", lg: "16px" }}
        _colorText='gray.50'
        _bgColorLink='gray.900'
        _borderColorLink='purple.300'
        _borderTypeLink='1px solid'
      >SIGN UP</NavLink>
      <NavLink
        href="/signin"
        marginLeft={{ base: "0", lg: "16px" }}
        _colorText='gray.50'
        _bgColorLink='gray.900'
        _borderColorLink='purple.300'
        _borderTypeLink='1px solid'
      >SIGN IN</NavLink>
    </Flex>
  )
}