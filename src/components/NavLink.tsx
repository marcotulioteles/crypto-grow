import { Icon, Link as ChakraLink, LinkProps as ChakraLinkProps, Text } from "@chakra-ui/react"
import { ElementType } from "react";
import { ActiveLink } from "./ActiveLink";

interface NavLinkProps extends ChakraLinkProps {
  icon?: ElementType;
  children: string;
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
        paddingX={6} 
        {...rest}
      >
        { icon ? <Icon as={icon} fontSize="1.625rem"/> : "" }
        <Text marginLeft={icon ? "4" : ""} fontWeight="medium" letterSpacing="5%">
          { children }
        </Text>
      </ChakraLink>
    </ActiveLink>
  )
}