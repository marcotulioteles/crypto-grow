import { Button, Flex } from "@chakra-ui/react";
import { NavLink } from "./NavLink";
import { FiMenu, FiX } from 'react-icons/fi'
import { useState } from "react";

export function NavBar() {
  const [translateXState, setTranslateXState] = useState("320px")

  return (
    <>
      <Button
        display={{ base: "flex", lg: "none" }}
        marginRight="24px"
        variant="unstyled"
        justifyContent="center"
        onClick={() => setTranslateXState("0")}
      >
        <FiMenu size={32} />
      </Button>
      <Flex
        as="nav"
        height={{ base: "100vh", lg: "80px" }}
        border={{ base: "none", lg: "1px solid" }}
        borderColor="purple.300"
        borderRadius={{ base: "0", lg: "12px" }}
        backgroundColor={{ base: "purple.50", lg: "gray.700" }}
        flexDirection={{ base: "column", lg: "row" }}
        position={{ base: "fixed", lg: "relative" }}
        right={{ base: "0", lg: "none" }}
        top={{ base: "0", lg: "none" }}
        zIndex="10"
        transform={{base: `translateX(${translateXState})`, lg: "none"}}
        css={{
          transition: "transform 500ms ease-in-out 25ms"
        }}
      >
        <Button
          display={{ base: "inherit", lg: "none" }}
          position="fixed"
          right="12px"
          top="4px"
          variant="unstyled"
          onClick={() => setTranslateXState("320px")}
        >
          <FiX size={28} />
        </Button>
        <NavLink
          href="/"
          _colorText='gray.50'
          _bgColorLink='gray.900'
          _borderColorLink='purple.300'
          _borderTypeLink='1px solid'
          marginTop={{ base: "48px", lg: "0" }}
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
    </>
  )
}