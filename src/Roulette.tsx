import {
    Box,
    Flex
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import RouletteItemList from './component/RouletteItemList';
import RouletteView from './component/RouletteView';

interface RouletteItemStyle {
    option: string;
    style: {
        backgroundColor: string;
        textColor: string;
        fontSize: number;
        textDistance: number;
    };
}

function Roulette() {
    useEffect(() => {
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = "auto"; // クリーンアップ時に戻す
        };
    }, []);

    // お題リスト
    const [items, setItems] = useState<string[]>(['お題1', 'お題2', 'お題3', 'お題4', 'お題5']);
    // ルーレットに表示するデータ
    const [rouletteData, setRouletteData] = useState<RouletteItemStyle[]>([
        { option: 'お題1', style: { backgroundColor: 'white', textColor: 'black', fontSize: 20, textDistance: 60 } },
        { option: 'お題2', style: { backgroundColor: 'white', textColor: 'black', fontSize: 20, textDistance: 60 } },
        { option: 'お題3', style: { backgroundColor: 'white', textColor: 'black', fontSize: 20, textDistance: 60 } },
        { option: 'お題4', style: { backgroundColor: 'white', textColor: 'black', fontSize: 20, textDistance: 60 } },
        { option: 'お題5', style: { backgroundColor: 'white', textColor: 'black', fontSize: 20, textDistance: 60 } }
    ]);

    // itemsが更新されたらルーレットのデータも更新
    useEffect(() => {
        const newItems = items.map(item => ({
            option: item,
            style: {
                backgroundColor: 'white',
                textColor: 'black',
                fontSize: 20,
                textDistance: 60
            }
        }));
        setRouletteData(newItems);
    }, [items]);

    return (
        <Box width="1280px" height="900px">
            <Flex>
                {/* ルーレット盤 */}
                <RouletteView
                    items={items}
                    setItems={setItems}
                    rouletteData={rouletteData}
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