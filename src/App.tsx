import { Button } from '@chakra-ui/react';

function App() {

  const handleButtonClick = () => {
    window.open('/Enter', '_blank', 'width=1280,height=900');
  };

  return (
    <Button
      variant="contained"
      onClick={handleButtonClick}
      className="w-full bg-blue-500 py-2 px-4 rounded-lg text-lg hover:bg-blue-700"
    >
      アプリへ
    </Button>
  );
}

export default App;