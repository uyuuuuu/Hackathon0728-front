import {
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";
import LogoutIcon from "../assets/logout.svg"; // SVGファイルを直接インポート

function Exit() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  // ここに削除確認の処理などを追加
  const handleDeleteConfirm = () => {
    window.close(); // ウィンドウを閉じる
  };

  return (
    <>
      <Button
        variant="solid"
        leftIcon={<img src={LogoutIcon} alt="Logout" />}
        colorScheme="cyan" // Chakra UIのcolorSchemeを使用
        onClick={onOpen}
      />
      <Modal isOpen={isOpen} onClose={onClose} size="lg">
        <ModalOverlay />
        <ModalContent
          my="25%"
        >
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
