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
  Stack
} from "@chakra-ui/react";
import { BellIcon } from "@chakra-ui/icons";
import BombIcon from "../assets/bomb.svg"; // SVGファイルを直接インポート
import ClapIcon from "../assets/bomb.svg"; // 今拍手の画像がないので爆弾で仮置きしてます
import StarIcon from "../assets/star.svg"; // SVGファイルを直接インポート
import ChickIcon from "../assets/chick.png"; // PNGファイルを直接インポート
import DogIcon from "../assets/dog.svg"; // SVGファイルを直接インポート
import CatIcon from "../assets/cat.png"; // PNGファイルを直接インポート
import BlockIcon from "../assets/block.svg"; // SVGファイルを直接インポート
import CorrectIcon from "../assets/correct.svg"; // SVGファイルを直接インポート
import IncorrectIcon from "../assets/incorrect.svg"; // SVGファイルを直接インポート

import useSound from 'use-sound';
import BombSound from '../assets/爆発1.mp3';
import ClapSound from '../assets/拍手.mp3';
import AnkoSound from '../assets/あんこ.mp3';
import ChickSound from '../assets/ヒヨコの鳴き声.mp3';
import DogSound from '../assets/犬の鳴き声1.mp3';
import CatSound from '../assets/猫の鳴き声1.mp3';
import BlockSound from '../assets/ピー音.mp3';
import CorrectSound from '../assets/クイズ正解1.mp3';
import IncorrectSound from '../assets/クイズ不正解1.mp3';


function SE() {

  const [bombPlay] = useSound(BombSound, { volume: 0.9 });
  const [clapPlay] = useSound(ClapSound);
  const [ankoPlay] = useSound(AnkoSound, {volume: 1.8});
  const [chickPlay] = useSound(ChickSound, { volume: 0.8 });
  const [dogPlay] = useSound(DogSound);
  const [catPlay] = useSound(CatSound, { volume: 0.6 });
  const [blockPlay] = useSound(BlockSound);
  const [correctPlay] = useSound(CorrectSound);
  const [incorrectPlay] = useSound(IncorrectSound);


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
            <HStack>
              <Stack>
                <Button
                  colorScheme="blue"
                  leftIcon={<img src={BombIcon} alt="Bomb" />}
                  onClick={() => bombPlay()}>爆弾</Button>
                <Button
                  colorScheme="blue"
                  leftIcon={<img src={ClapIcon} alt="Clap" />}
                  onClick={() => clapPlay()}>拍手</Button>
                <Button
                  colorScheme="blue"
                  leftIcon={<img src={StarIcon} alt="Star" />}
                  onClick={() => ankoPlay()}>あんこ</Button>
              </Stack>
              <Stack p={1}>
                <Button
                  colorScheme="blue"
                  leftIcon={<img src={ChickIcon} alt="Chick" />}
                  onClick={() => chickPlay()}>ひよこ</Button>
                <Button
                  colorScheme="blue"
                  leftIcon={<img src={DogIcon} alt="Dog" />}
                  onClick={() => dogPlay()}>いぬ</Button>
                <Button
                  colorScheme="blue"
                  leftIcon={<img src={CatIcon} alt="Cat" />}
                  onClick={() => catPlay()}>ねこ</Button>
              </Stack>
              <Stack>
              <Button
                  colorScheme="blue"
                  leftIcon={<img src={BlockIcon} alt="Block" />}
                  onClick={() => blockPlay()}>ピー音</Button>
                <Button
                  colorScheme="blue"
                  leftIcon={<img src={CorrectIcon} alt="Correct" />}
                  onClick={() => correctPlay()}>正解</Button>
                <Button
                  colorScheme="blue"
                  leftIcon={<img src={IncorrectIcon} alt="Incorrect" />}
                  onClick={() => incorrectPlay()}>不正解</Button>
              </Stack>
            </HStack>
          </PopoverBody>
        </PopoverContent>
      </Portal>
    </Popover>
  );
}

export default SE;
