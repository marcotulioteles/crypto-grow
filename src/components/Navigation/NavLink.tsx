import { Icon, Link as ChakraLink, LinkProps as ChakraLinkProps, Text } from "@chakra-ui/react"
import { ElementType } from "react";
import { ActiveLink } from "./ActiveLink";

interface NavLinkProps extends ChakraLinkProps {
  icon?: ElementType;
  href: string
  _colorText: string;
  _bgColorLink?: string;
  _borderColorLink?: string;
  _borderTypeLink?: string;
  _colorGradient1?: string;
  _colorGradient2?: string;
}

export function NavLink(
  { 
    icon, 
    children, 
    href, 
    _colorText, 
    _bgColorLink, 
    _borderColorLink, 
    _borderTypeLink,
    _colorGradient1,
    _colorGradient2, 
    ...rest 
  }: NavLinkProps) {
  return (
    <ActiveLink 
      href={href} 
      passHref 
      colorText={_colorText}
      bgColorLink={_bgColorLink}
      borderColorLink={_borderColorLink}
      borderTypeLink={_borderTypeLink}
      colorGradient1={_colorGradient1}
      colorGradient2={_colorGradient2}
    >
      <ChakraLink 
        display="flex" 
        alignItems="center"
        justifyContent="center"
        paddingX={{ base: "80px", sm: "96px", lg: "24px" }}
        paddingY={{ base: "24px", lg: "inherit" }}
        {...rest}
      >
        { icon ? <Icon as={icon} fontSize="1.625rem" marginRight="24px"/> : "" }
        { children }
      </ChakraLink>
    </ActiveLink>
  )
}