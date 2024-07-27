//参加している人のアイコンと名前の取得
//

import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
  IconButton,
  Avatar,
  Box,
  Text,
  Flex,
  Divider,
  Input,
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
            <Flex direction="column" align="center" p={4}>
              <Avatar src="path/to/user1.png" size="md" />
              <Box mt={4} mb={4}>
                <Text fontSize="lg" fontWeight="bold">
                  なずな
                </Text>
              </Box>
              <Box>
                <Input
                  fontSize="lg"
                  fontWeight="bold"
                  placeholder="ステータスの入力"
                  name="status"
                />
              </Box>
            </Flex>
          </DrawerHeader>
          <Divider />
          <DrawerBody>
            <Flex direction="column">
              <Text
                as={Link}
                to="/Board"
                fontSize="xl" // テキストサイズを大きくする
                mb={4}
                _hover={{ color: "teal.500" }} // マウスオーバー時の色変更
              >
                掲示板
              </Text>
              <Text
                as={Link}
                to="/Roulette"
                fontSize="xl" // テキストサイズを大きくする
                mb={4}
                _hover={{ color: "teal.500" }} // マウスオーバー時の色変更
              >
                ルーレット
              </Text>
              <Text
                as={Link}
                to="/Paint"
                fontSize="xl" // テキストサイズを大きくする
                mb={4}
                _hover={{ color: "teal.500" }} // マウスオーバー時の色変更
              >
                ペイント
              </Text>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default Menu;
