import { Button, Text, VStack } from "@chakra-ui/react";
import { useMemo, useState } from "react";
import { Wheel } from "react-custom-roulette";
import pinImage from "../assets/pin.png";
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
    };

    // テキストスタイル
    const RouletteCustomData = useMemo(() => {
        return rouletteData.map((item: { option: string | any[]; style: any }) => {
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
                },
            };
        });
    }, [rouletteData]);

    return (
        <>
            <div className="px-4 py-4">
                <Back />
            </div>
            <VStack w="50%" p={4} h="100vh">
                <header className="w-full p-4 flex justify-center items-center relative">
                    <Text fontSize="2xl" fontWeight="bold" mb={4}>
                        ルーレット
                    </Text>
                </header>
                <VStack
                    flex="1"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    h="100%"
                >
                    <Wheel
                        mustStartSpinning={mustSpin}
                        prizeNumber={prizeNumber}
                        data={RouletteCustomData}
                        onStopSpinning={() => {
                            setMustSpin(false);
                        }}
                        pointerProps={{
                            src: pinImage,
                            style: {
                                width: '150px',  // ポインターのサイズを調整
                                height: '150px',
                                top: '-30px',     // 上方向への移動（負の値）
                                right: '-30px',   // 右方向への移動（負の値）
                                position: 'absolute',  // 絶対位置指定
                            },
                        }}
                    />
                    <Button mt={10} onClick={handleSpinClick} colorScheme="blue">
                        回す！
                    </Button>
                </VStack>
            </VStack>
        </>
    );
};

export default RouletteView;
