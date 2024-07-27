import { Button, VStack } from "@chakra-ui/react";
import { useMemo, useState } from "react";
import { Wheel } from 'react-custom-roulette';
interface ItemListProps {
    items: string[];
    setItems: React.Dispatch<React.SetStateAction<string[]>>;
    rouletteData: any;
}

const RouletteView: React.FC<ItemListProps> = ({ rouletteData }) => {


    const [mustSpin, setMustSpin] = useState(false);
    const [prizeNumber, setPrizeNumber] = useState(0);

    const handleSpinClick = () => {
        if (!mustSpin) {
            const newPrizeNumber = Math.floor(Math.random() * rouletteData.length);
            setPrizeNumber(newPrizeNumber);
            setMustSpin(true);
        }
    }

    // テキストスタイル
    const RouletteCustomData = useMemo(() => {
        return rouletteData.map((item: { option: string | any[]; style: any; }) => {
            const l = item.option.length;
            let fontSize, textDistance;
            if (l < 10) {
                fontSize = 20;
                textDistance = 60; // 外側に配置
            } else if (l < 14) {
                fontSize = 14;
                textDistance = 40; // やや内側に配置
            } else if (l < 30) {
                fontSize = 12;
                textDistance = 35; // さらに内側に配置
            } else {
                fontSize = 10;
                textDistance = 20; // 最も内側に配置
            }
            return {
                ...item,
                style: {
                    ...item.style,
                    fontSize: fontSize,
                    textDistance: 100
                }
            };
        });
    }, [rouletteData]);

    return (
        <VStack background={'teal.50'} w='50%' p={4}>
            <div>ルーレット</div>
            <Wheel
                mustStartSpinning={mustSpin}
                prizeNumber={prizeNumber}
                data={RouletteCustomData}
                onStopSpinning={() => {
                    setMustSpin(false);
                }}
            />
            <Button
                onClick={handleSpinClick}
                colorScheme='blue'>
                spin
            </Button>
        </VStack>
    )
}

export default RouletteView