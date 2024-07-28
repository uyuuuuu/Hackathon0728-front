import { ArrowBackIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function Back() {
  const navigate = useNavigate();

  function onBack() {
    navigate("/Home");
  }

  return (
    <IconButton
      variant="outline" // `variant` プロパティは1つに統一
      colorScheme="blue"
      onClick={onBack} // `onClick` をプロパティとして指定
      aria-label="Go Back" // `aria-label` を「戻る」に変更
      icon={<ArrowBackIcon />}
    />
  );
}

export default Back;
