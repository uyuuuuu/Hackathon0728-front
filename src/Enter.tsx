import { Box, Center, Button ,Text} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import logoImage from "./assets/logo.png";

function Enter() {
  return (
    <>
      <Center>
        <Button
          as={Link}
          to="/Home"
          bg="rgb(232,208,179)"
          w="60%"
          h="100vh"
          px={4}
          py={0}
          color="black"
          _hover={{ bg: "#E8D0B3" }}
        >
          <Box bg="rgb(213,183,147)" w="90%" h="100%" p={4} color="black">
            <img src={logoImage} alt="logo" className="mt-40%" />
            <Center h="10%">
              <Center h="100%" >
                <Text fontSize="40px">
                ふぃ server room!
                </Text>
              </Center>
            </Center>
            <Box
              bg="black"
              w="80px"
              h="35px"
              p={4}
              color="black"
              rounded="full"
              mt="20%"
            ></Box>
          </Box>
        </Button>
      </Center>
    </>
  );
}

export default Enter;
