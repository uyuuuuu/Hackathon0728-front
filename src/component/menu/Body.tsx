import { DrawerBody, Text, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Body() {
  return (
    <>
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
    </>
  );
}

export default Body;
