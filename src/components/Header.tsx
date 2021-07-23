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
      <Logo 
        logoColor="orange.400"
        __marginTop=""
      />
      <Flex
        as="nav"
        height={20}
        border="1px solid"
        borderColor="purple.300"
        borderRadius="12px"
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
          marginLeft={4}
          _colorText='gray.50'
          _bgColorLink='gray.900'
          _borderColorLink='purple.300'
          _borderTypeLink='1px solid'
        >ABOUT US</NavLink>
        <NavLink 
          href="#" 
          marginLeft={4}
          _colorText='gray.50'
          _bgColorLink='gray.900'
          _borderColorLink='purple.300'
          _borderTypeLink='1px solid'
          >SERVICES</NavLink>
        <NavLink 
          href="/signup" 
          marginLeft={4}
          _colorText='gray.50'
          _bgColorLink='gray.900'
          _borderColorLink='purple.300'
          _borderTypeLink='1px solid'
        >SIGN UP</NavLink>
        <NavLink 
          href="/signin" 
          marginLeft={4}
          _colorText='gray.50'
          _bgColorLink='gray.900'
          _borderColorLink='purple.300'
          _borderTypeLink='1px solid'
        >SIGN IN</NavLink>
      </Flex>
    </Flex>
  );
}