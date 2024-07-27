//参加している人のアイコンと名前の取得
//

import {
    DrawerHeader,
    IconButton,
    Avatar,
    Box,
    Text,
    Flex,
    Input,
  } from "@chakra-ui/react";
  import {
    FaGamepad,
    FaLaptopCode,
    FaHeadphones,
    FaBook,
    FaWineGlass,
  } from "react-icons/fa";
  
  function Menu() {
    return (
      <>
            <DrawerHeader>
              <Flex direction="column" align="center" p={4}>
                <Avatar src="path/to/user1.png" size="md" />
                <Box mt={4} mb={4}>
                  <Text fontSize="lg" fontWeight="bold">
                    なずな
                  </Text>
                </Box>
                <Flex mb={4} gap={4}>
                  <IconButton
                    icon={<FaGamepad />} // ここで表示するアイコンを指定
                    colorScheme="teal"
                    aria-label="Gamepad"
                    size="md"
                    mb={4} // アイコンボタンの下にマージンを追加
                  />
                  <IconButton
                    icon={<FaLaptopCode />} // ここで表示するアイコンを指定
                    colorScheme="teal"
                    aria-label="Gamepad"
                    size="md"
                    mb={4} // アイコンボタンの下にマージンを追加
                  />
                  <IconButton
                    icon={<FaHeadphones />} // ここで表示するアイコンを指定
                    colorScheme="teal"
                    aria-label="Gamepad"
                    size="md"
                    mb={4} // アイコンボタンの下にマージンを追加
                  />
                  <IconButton
                    icon={<FaBook />} // ここで表示するアイコンを指定
                    colorScheme="teal"
                    aria-label="Gamepad"
                    size="md"
                    mb={4} // アイコンボタンの下にマージンを追加
                  />
                  <IconButton
                    icon={<FaWineGlass />} // ここで表示するアイコンを指定
                    colorScheme="teal"
                    aria-label="Gamepad"
                    size="md"
                    mb={4} // アイコンボタンの下にマージンを追加
                  />
                </Flex>
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
      </>
    );
  }
  
  export default Menu;
  