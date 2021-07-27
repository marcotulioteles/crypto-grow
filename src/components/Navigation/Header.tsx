import { Flex } from '@chakra-ui/react'
import { Logo } from './Logo';
import { NavBar } from './NavBar';

export function Header() {
 
  return (
    <Flex
      as="header"
      width="100%"
      maxWidth={{base: "100%", lg: "1200px"}}
      height="100px"
      marginX="auto"
      alignItems="center"
      justifyContent="space-between"
    >
      <Logo 
        logoColor="orange.400"
        __marginTop=""
      />
        <NavBar />
    </Flex>
  );
}