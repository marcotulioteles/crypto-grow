import { Icon, Link as ChakraLink, LinkProps as ChakraLinkProps, Text } from "@chakra-ui/react"
import { ElementType } from "react";
import { ActiveLink } from "./ActiveLink";

interface NavLinkProps extends ChakraLinkProps {
  icon?: ElementType;
  children: string;
  href: string
}

export function NavLink({ icon, children, href, ...rest }: NavLinkProps) {
  return (
    <ActiveLink 
      href={href} 
      passHref 
      colorText={'gray.50'}
      bgColorLink={'gray.900'}
      borderColorLink={'purple.300'}
      borderTypeLink={'1px solid'}
    >
      <ChakraLink 
        display="flex" 
        alignItems="center" 
        paddingX={6} 
        {...rest}
      >
        { icon ? <Icon as={icon} fontSize={5}/> : "" }
        <Text marginLeft={icon ? "4" : ""} fontWeight="medium" letterSpacing="5%">
          { children }
        </Text>
      </ChakraLink>
    </ActiveLink>
  )
}