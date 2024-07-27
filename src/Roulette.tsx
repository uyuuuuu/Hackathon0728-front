import { DeleteIcon } from '@chakra-ui/icons';
import {
    Box,
    Button,
    Editable,
    EditableInput,
    EditablePreview,
    Flex,
    VStack
} from '@chakra-ui/react';
import { useState } from 'react';

function Roulette() {
    const [items, setItems] = useState<string[]>(['お題1', 'お題2', 'お題3', 'お題4', 'お題5']);
    // 項目を追加ボタン -> お題◯っていうEditableが追加
    function onClick() {
        const newItemNumber = items.length + 1;
        setItems([...items, `お題${newItemNumber}`]);
        console.log(`新しい項目 "お題${newItemNumber}" が追加されました。`);
    }
    // 削除ボタン -> 項目を削除
    function onDelete(index: number) {
        const newItems = items.filter((_, i) => i !== index);
        setItems(newItems);
        for(let str of newItems){
            console.log(str);
        }
        console.log(`index${index}のお題が削除されました。`);
    }
    // 項目のテキストが変更されたら -> コンソール出力(仮)
    function onChange(index: number, newValue: string) {
        const newItems = [...items];
        newItems[index] = newValue;
        setItems(newItems);
        console.log(`value changed to "${newValue}".`);
    }
    return (
        <Box width="1280px" height="800px">
            <Flex>
                <VStack background={'teal.50'} w='50%' p={4}>
                    ルーレットゾーン
                </VStack>

                <VStack background={'blue.50'} w='50%' p={4}>
                    <div>お題一覧</div>
                    {items.map((item, index) => (
                        <Flex key={index} width="100%" alignItems="center">
                            <Editable
                                defaultValue={item}
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
                    <Button onClick={onClick} colorScheme='blue' variant='outline'>
                        項目を追加
                    </Button>
                </VStack>
            </Flex>
        </Box>
    )
}

export default Roulette