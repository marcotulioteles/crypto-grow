import { Flex } from "@chakra-ui/react";
import { NavLink } from "../NavLink";
import { FiDollarSign, FiActivity, FiBarChart2, FiSettings } from 'react-icons/fi'

export function SidebarNav() {
  return(
    <Flex
      flexDirection="column"
    >
      <NavLink 
        href="/userpanel-wallet" 
        icon={FiDollarSign}
        _colorText='gray.50'
        _colorGradient1='pink.700'
        _colorGradient2='gray.900'
        fontSize="1.375rem"
        height="72px"
        width="280px"
        justifyContent="center"
        variant="unstyled"
      >YOUR WALLET</NavLink>
      <NavLink 
        href="/userpanel-exchange_and_sale" 
        icon={FiActivity}
        _colorText='gray.50'
        _colorGradient1='pink.700'
        _colorGradient2='gray.900'
        fontSize="1.375rem"
        height="72px"
        width="280px"
        justifyContent="center"
        marginTop="2.5rem"
      >EXCHANGE</NavLink>
      <NavLink 
        href="/userpanel-transactions" 
        icon={FiBarChart2}
        _colorText='gray.50'
        _colorGradient1='pink.700'
        _colorGradient2='gray.900'
        fontSize="1.375rem"
        height="72px"
        width="280px"
        justifyContent="center"
        marginTop="2.5rem"
      >TRANSACTIONS</NavLink>
      <NavLink 
        href="/userpanel-settings" 
        icon={FiSettings}
        _colorText='gray.50'
        _colorGradient1='pink.700'
        _colorGradient2='gray.900'
        fontSize="1.375rem"
        height="72px"
        width="280px"
        justifyContent="center"
        marginTop="2.5rem"
      >SETTINGS</NavLink>
    </Flex>
  )
}