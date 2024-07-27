import { Button, VStack } from "@chakra-ui/react";
import { useMemo, useState } from "react";
import { Wheel } from 'react-custom-roulette';
import Back from "../component/Back";
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
                    fontSize: fontSize
                }
            };
        });
    }, [rouletteData]);

    return (
        <VStack w='50%' p={4} h="100vh" >
            <header className="w-full p-4 flex justify-center items-center relative">
                <div className="absolute left-0">
                    <Back />
                </div>
                <div>ルーレット</div>
            </header>
            <VStack flex="1" display="flex" justifyContent="center" alignItems="center" h="100%">
                    <Wheel
                    mustStartSpinning={mustSpin}
                    prizeNumber={prizeNumber}
                    data={RouletteCustomData}
                    onStopSpinning={() => {
                        setMustSpin(false);
                    }}
                />
                <Button
                    mt={10}
                    onClick={handleSpinClick}
                    colorScheme='blue'>
                    spin
                </Button>
            </VStack>
        </VStack>
    )
}

export default RouletteView