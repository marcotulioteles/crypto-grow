import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerOverlay, useBreakpointValue, useDisclosure } from "@chakra-ui/react";
import { NavBar } from "./NavBar";
import { FiMenu } from 'react-icons/fi'

export function DrawerNavSideBar() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const isDrawerSidebar = useBreakpointValue({
    base: true,
    lg: false
  })

  if (isDrawerSidebar) {
    return (
      <>
        <Button 
          display="flex"
          onClick={onOpen}
          marginRight="24px"
          variant="unstyled"
          justifyContent="center"
        >
          <FiMenu size={32}/>
        </Button>
        <Drawer isOpen={isOpen} placement="right" onClose={onClose} variant="unstyled">
          <DrawerOverlay>
            <DrawerContent background="purple.50" padding="0">
              <DrawerCloseButton marginTop="6" />
              <DrawerBody>
                <NavBar />
              </DrawerBody>
            </DrawerContent>
          </DrawerOverlay>
        </Drawer>
      </>
    )
  }

  return (
    <NavBar />
  )

}