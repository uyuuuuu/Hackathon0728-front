import {
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalFooter,
  IconButton,
} from "@chakra-ui/react";
import { ImExit } from "react-icons/im";

function Exit() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  // ここに削除確認の処理などを追加
  const handleDeleteConfirm = () => {
    window.close(); // ウィンドウを閉じる
  };

  return (
    <>
      <IconButton
        bg="rgb(153,151,255)"
        onClick={onOpen}
        aria-label="Exit"
        fontSize='20px'
        icon={<ImExit color="white"/>}
      />
      <Modal isOpen={isOpen} onClose={onClose} size="lg">
        <ModalOverlay />
        <ModalContent my="25%">
          <ModalBody>本当に退出しますか？</ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              キャンセル
            </Button>
            <Button colorScheme="red" onClick={handleDeleteConfirm}>
              退出
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Exit;
