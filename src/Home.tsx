import { Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import Menu from "./component/Menu";

function Home() {
  return (
    <div className="bg-gray-100">
      <Button
        variant="contained"
        color="primary"
        className="fixed left-8"
        as={RouterLink}
        to="/app"
      >
        戻る
      </Button>
      <Menu />
    </div>
  );
}

export default Home;
