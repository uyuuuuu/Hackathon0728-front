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
  HStack,
  Tooltip
} from "@chakra-ui/react";
import {
  FaGamepad,
  FaLaptopCode,
  FaHeadphones,
  FaBook,
  FaWineGlass,
} from "react-icons/fa";
import {
  MdFastfood,
  MdSelfImprovement
} from "react-icons/md";
import { PiOfficeChairFill } from "react-icons/pi";



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
          <HStack>
            <Tooltip label='gaming' placement='top'>
              <IconButton
                icon={<FaGamepad size='27'/>} // ここで表示するアイコンを指定
                colorScheme="teal"
                aria-label="Gamepad"
                size="md"
                mb={4} // アイコンボタンの下にマージンを追加
              />
            </Tooltip>
            <Tooltip label='working' placement='top'>
              <IconButton
                icon={<FaLaptopCode size='25'/>} // ここで表示するアイコンを指定
                colorScheme="teal"
                aria-label="Gamepad"
                size="md"
                mb={4} // アイコンボタンの下にマージンを追加
              />
            </Tooltip>
            <Tooltip label='listening' placement='top'>
              <IconButton
                icon={<FaHeadphones size='22'/>} // ここで表示するアイコンを指定
                colorScheme="teal"
                aria-label="Gamepad"
                size="md"
                mb={4} // アイコンボタンの下にマージンを追加
              />
            </Tooltip>
            <Tooltip label='reading' placement='top'>
              <IconButton
                icon={<FaBook size='20'/>} // ここで表示するアイコンを指定
                colorScheme="teal"
                aria-label="Gamepad"
                size="md"
                mb={4} // アイコンボタンの下にマージンを追加
              />
            </Tooltip>
          </HStack>
          <HStack>
            <Tooltip label='drinking' placement='top'>
              <IconButton
                icon={<FaWineGlass size='21'/>} // ここで表示するアイコンを指定
                colorScheme="teal"
                aria-label="Gamepad"
                size="md"
                mb={4} // アイコンボタンの下にマージンを追加
              />
            </Tooltip>
            <Tooltip label='eating' placement='top'>
              <IconButton
                icon={<MdFastfood size='23'/>} // ここで表示するアイコンを指定
                colorScheme="teal"
                aria-label="Gamepad"
                size="md"
                mb={4} // アイコンボタンの下にマージンを追加
              />
            </Tooltip>
            <Tooltip label='chill' placement='top'>
              <IconButton
                icon={<MdSelfImprovement size='30'/>} // ここで表示するアイコンを指定
                colorScheme="teal"
                aria-label="Gamepad"
                size="md"
                mb={4} // アイコンボタンの下にマージンを追加
              />
            </Tooltip>
            <Tooltip label='AFK' placement='top'>
              <IconButton
                icon={<PiOfficeChairFill size='23'/>} // ここで表示するアイコンを指定
                colorScheme="teal"
                aria-label="Gamepad"
                size="md"
                mb={4} // アイコンボタンの下にマージンを追加
              />
            </Tooltip>
          </HStack>
        </Flex>
        <Box>
          <Input
            fontSize="lg"
            fontWeight="bold"
            placeholder="ステータスの入力"
            name="status"
          />
        </Box>
      </DrawerHeader>
    </>
  );
}

export default Menu;
