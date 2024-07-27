import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  useDisclosure,
  IconButton,
  Avatar,
  Box,
  Text,
  Flex,
  Divider,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import React from "react";
import { Link } from "react-router-dom";

function Menu() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef(null);

  return (
    <>
      <IconButton
        ref={btnRef}
        colorScheme="teal"
        onClick={onOpen}
        aria-label="Menu"
        icon={<HamburgerIcon />}
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
          <DrawerHeader>
            <Flex align="center">
              <Avatar src="path/to/user1.png" size="md" name="なずな" />
              <Box ml={3}>
                {" "}
                <Text fontSize="lg" fontWeight="bold">
                  なずな
                </Text>
              </Box>
            </Flex>
          </DrawerHeader>
          <Divider />
          <DrawerBody>
            <Flex direction="column">
              <Text
                as={Link}
                to="/Roulette"
                fontSize="xl" // テキストサイズを大きくする
                mb={2}
                _hover={{ color: "teal.500" }} // マウスオーバー時の色変更
              >
                掲示板
              </Text>
              <Text
                as={Link}
                to="/Roulette"
                fontSize="xl" // テキストサイズを大きくする
                mb={2}
                _hover={{ color: "teal.500" }} // マウスオーバー時の色変更
              >
                ルーレット
              </Text>
              <Text
                as={Link}
                to="/Paint"
                fontSize="xl" // テキストサイズを大きくする
                mb={2}
                _hover={{ color: "teal.500" }} // マウスオーバー時の色変更
              >
                ペイント
              </Text>
            </Flex>
          </DrawerBody>
          <Divider />
          <DrawerFooter>
            <Text fontSize="lg" fontWeight="bold">
              設定
            </Text>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default Menu;
