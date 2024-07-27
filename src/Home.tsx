import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Menu from "./component/Menu";

function Home() {
  return (
    <div className="bg-gray-100">
      <Button
        variant="contained"
        color="primary"
        className="fixed left-8"
        as={Link}
        to="/"
      >
        戻る
      </Button>

      <Menu />
    </div>
  );
}

export default Home;
