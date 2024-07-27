import {Button} from '@chakra-ui/react'
import { Link  } from "react-router-dom";

function App() {

  return (
    <Button
    variant="contained"
    as={Link}
    to="/Enter"
    className="w-full bg-blue-500 py-2 px-4 rounded-lg text-lg hover:bg-blue-700"
  >
    アプリへ
  </Button>
  )
}

export default App
