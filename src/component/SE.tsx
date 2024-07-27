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
} from "@chakra-ui/react";
import { BellIcon } from "@chakra-ui/icons";

function SE() {
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
          <PopoverHeader>Header</PopoverHeader>
          <PopoverCloseButton />
          <PopoverBody>
            <Button colorScheme="blue">Button</Button>
          </PopoverBody>
          <PopoverFooter>This is the footer</PopoverFooter>
        </PopoverContent>
      </Portal>
    </Popover>
  );
}

export default SE;
