import { Box, Center, Button } from '@chakra-ui/react'
import { Link } from "react-router-dom";

function Enter() {

    return (
        <>
            <Center>
                <Button bg='rgb(232,208,179)' w='60%' h='100vh' px={4} py={0} color='black' _hover={{ bg: '#E8D0B3' }} >

                    <Box bg='rgb(213,183,147)' w='90%' h='100%' p={4} color='black' >
                        <Center h='70%'>
                            <Box bg='white' w='80%' p={5} color='black' fontSize='lg'>
                                <Center>
                                    Welcome to<br />
                                    ふぃ server room!
                                </Center>
                            </Box >
                        </Center>
                    </Box>
                </Button>
            </Center>
        </>
    )
}

export default Enter
