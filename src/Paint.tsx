import Canvas from "./component/Canvas";
import { Button } from '@chakra-ui/react';
import { Link } from "react-router-dom";

function Paint() {
  return (
    <>
      <div>
      <Canvas width={1280} height={600} />
      </div>
      <Button
      variant="contained"
      as={Link}
      to="/Home"
      className=" bg-blue-500 py-2 px-4 rounded-lg text-lg hover:bg-blue-700"
    >
      戻る
    </Button>
    </>
  );
}

export default Paint;
