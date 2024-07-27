import { Box, AbsoluteCenter } from '@chakra-ui/react'
import './App.css'

function Enter() {

    return (
        <>
            <Box bg='rgb(232,208,179)' w='100%' h='100vh' p={4} color='black' >

                <Box bg='rgb(213,183,147)' w='100%' h='100vh' p={4} color='black' >

                    <AbsoluteCenter bg='white' w='50%' p={5} color='black' >
                        Welcome to<br />
                        ふぃ server room!
                    </AbsoluteCenter >
                </Box>
            </Box>
        </>
    )
}

export default Enter
