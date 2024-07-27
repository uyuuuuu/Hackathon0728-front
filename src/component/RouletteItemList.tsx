import { DeleteIcon } from "@chakra-ui/icons";
import { Box, Button, Editable, EditableInput, EditablePreview, Flex, VStack } from "@chakra-ui/react";

interface ItemListProps {
    items: string[];
    setItems: React.Dispatch<React.SetStateAction<string[]>>;
}

const RouletteView: React.FC<ItemListProps> = ({ items, setItems }) => {
    // 項目を追加ボタン -> お題◯っていうEditableが追加
    function onAdd() {
        if (items.length < 20) {
            const newItemNumber = items.length + 1;
            setItems([...items, `お題${newItemNumber}`]);
            console.log(`新しい項目 "お題${newItemNumber}" が追加されました。`);
        }
    }
    // 削除ボタン -> 項目を削除
    function onDelete(index: number) {
        const newItems = items.filter((_, i) => i !== index);
        setItems(newItems);
        console.log(`index${index}のお題が削除されました。`);
    }
    // 項目のテキストが変更されたら -> コンソール出力(仮)
    function onChange(index: number, newValue: string) {
        const newItems = [...items];
        newItems[index] = newValue;
        setItems(newItems);
        console.log(`value changed to "${newValue}".`);
        newItems.map(item => console.log(item));
    }


    return (
        <VStack background={'blue.50'} w='50%' p={4}>
            <div>お題一覧</div>
            {items.map((item, index) => (
                <Flex key={index} width="100%" alignItems="center">
                    <Editable
                        defaultValue={item}
                        value={item}
                        onChange={(newValue) => onChange(index, newValue)}
                        flex="1"
                        ml={9}
                    >
                        <EditablePreview
                            width="100%"
                        />
                        <EditableInput
                            maxLength={30}
                            width={`${57}ch`}
                        />
                    </Editable>
                    <Box textAlign="right" mr={9} >
                        <Button
                            onClick={() => onDelete(index)}
                            colorScheme='blue' variant='outline' size='sm' p={1}>
                            <DeleteIcon boxSize={6} />
                        </Button>
                    </Box>
                </Flex>
            ))}
            {/* 追加ボタン */}
            <Button onClick={onAdd} colorScheme='blue' variant='outline'>
                項目を追加
            </Button>
        </VStack>
    )
}

export default RouletteView