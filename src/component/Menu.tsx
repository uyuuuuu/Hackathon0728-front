import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  IconButton,
  Divider,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import React from "react";
import Header from "./menu/Header";
import Body from "./menu/Body";

function Menu() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef(null);

  return (
    <>
      <IconButton
        ref={btnRef}
        bg="rgb(255,157,51)"
        onClick={onOpen}
        aria-label="Menu"
        fontSize='25px'
        icon={<HamburgerIcon color="white"/>}
      />
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <Header />
          <Divider />
          <Body />
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default Menu;
