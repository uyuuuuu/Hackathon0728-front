import {
    Box,
    Flex
} from '@chakra-ui/react';
import { useState } from 'react';
import RouletteItemList from './component/RouletteItemList';
import RouletteView from './component/RouletteView';


function Roulette() {
    const [items, setItems] = useState<string[]>(['お題1', 'お題2', 'お題3', 'お題4', 'お題5']);

    return (
        <Box width="1280px" height="800px">
            <Flex>
                {/* ルーレット盤 */}
                <RouletteView
                    items={items}
                    setItems={setItems}
                />
                {/* 項目リスト */}
                <RouletteItemList
                    items={items}
                    setItems={setItems}
                />
            </Flex>
        </Box>
    )
}

export default Roulette