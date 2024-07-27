import {
    Box,
    Editable,
    EditableInput,
    EditablePreview
} from '@chakra-ui/react'
import './App.css'

function Roulette() {
    //const [items, setItems] = useState<string[]>(['項目1', '項目2', '項目3', '項目4']);
    return (
        <>
            <Box bg='Teal 50' w='100%' p={4}>
                <Editable defaultValue='お題1'>
                    <EditablePreview />
                    <EditableInput />
                </Editable>
                <Editable defaultValue='お題2'>
                    <EditablePreview />
                    <EditableInput />
                </Editable>
                <Editable defaultValue='お題3'>
                    <EditablePreview />
                    <EditableInput />
                </Editable>
                <Editable defaultValue='お題4'>
                    <EditablePreview />
                    <EditableInput />
                </Editable>
                <Editable defaultValue='お題5'>
                    <EditablePreview />
                    <EditableInput />
                </Editable>
            </Box>
        </>
    )
}

export default Roulette