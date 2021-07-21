import { Flex } from '@chakra-ui/react'
import { Logo } from './Logo';
import { NavLink } from './NavLink';

export function Header() {
  return (
    <Flex
      as="header"
      width="100%"
      maxWidth="1200px"
      height="100px"
      marginX="auto"
      alignItems="center"
      justifyContent="space-between"
    >
      <Logo />
      <Flex
        as="nav"
        height={20}
        border="1px solid"
        borderColor="purple.300"
        borderRadius="12px"
      >
        <NavLink href="/">HOME</NavLink>
        <NavLink href="/about" marginLeft={4}>ABOUT US</NavLink>
        <NavLink href="/services" marginLeft={4}>SERVICES</NavLink>
        <NavLink href="/signup" marginLeft={4}>SIGN UP</NavLink>
        <NavLink href="/signin" marginLeft={4}>SIGN IN</NavLink>
      </Flex>
    </Flex>
  );
}