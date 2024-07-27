import { ArrowBackIcon } from "@chakra-ui/icons";
import {
    Button
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function Back() {
    const navigation = useNavigate()
    function onBack() {
        navigation("/Home");
    }


    return (
        <>
            <Button
                onClick={() => onBack()}
                colorScheme='blue' variant='outline' size='sm' p={1}>
                <ArrowBackIcon boxSize={6} />
            </Button>
        </>
    );
}

export default Back;
