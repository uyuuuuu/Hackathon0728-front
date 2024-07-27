import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  Button,
  Portal,
  HStack,
  VStack
} from "@chakra-ui/react";
import { BellIcon } from "@chakra-ui/icons";
import BombIcon from "../assets/bomb.svg"; // SVGファイルを直接インポート
import DogIcon from "../assets/dog.svg"; // SVGファイルを直接インポート
import CatIcon from "../assets/cat.svg"; // SVGファイルを直接インポート

import useSound from 'use-sound';
import BombSound from '../assets/爆発1.mp3';
import DogSound from '../assets/犬の鳴き声1.mp3';
import CatSound from '../assets/猫の鳴き声1.mp3';


function SE() {

  const [bombPlay] = useSound(BombSound,{ volume: 0.7 });
  const [dogPlay] = useSound(DogSound);
  const [catPlay] = useSound(CatSound);


  return (
    <Popover placement="top"> {/* ポップオーバーをボタンの上に表示 */}
      <PopoverTrigger>
        <Button
          variant="solid"
          colorScheme="blue"
          className="py-2 px-4 rounded-lg text-lg flex items-center" // Tailwind CSSのクラス
        >
          <BellIcon />
        </Button>
      </PopoverTrigger>
      <Portal>
        <PopoverContent>
          <PopoverArrow />
          <PopoverHeader>SEを鳴らす</PopoverHeader>
          <PopoverCloseButton />
          <PopoverBody>
            <VStack p={2}>
              <HStack>
                <Button
                  colorScheme="blue"
                  leftIcon={<img src={BombIcon} alt="Bomb" />}
                  onClick={() => bombPlay()}>爆弾</Button>
                <Button colorScheme="blue">Button</Button>
                <Button colorScheme="blue">Button</Button>
              </HStack>
              <HStack>
                <Button colorScheme="blue">Button</Button>
                <Button
                  colorScheme="blue"
                  leftIcon={<img src={DogIcon} alt="Dog" />}
                  onClick={() => dogPlay()}>いぬ</Button>
                <Button
                  colorScheme="blue"
                  leftIcon={<img src={CatIcon} alt="Cat" />}
                  onClick={() => catPlay()}>ねこ</Button>

              </HStack>
              <HStack>
                <Button colorScheme="blue">Button</Button>
                <Button colorScheme="blue">Button</Button>
                <Button colorScheme="blue">Button</Button>
              </HStack>
            </VStack>
          </PopoverBody>
        </PopoverContent>
      </Portal>
    </Popover>
  );
}

export default SE;
