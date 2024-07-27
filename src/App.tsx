import { Button } from '@chakra-ui/react';

function App() {

  const handleButtonClick = () => {
    const newWindow = window.open('/Enter', '_blank', 'width=1280,height=900');

    // 新しいウィンドウが正しく開かれたか確認
    if (newWindow) {
      newWindow.onload = () => {
        // ウィンドウサイズを固定するための設定
        newWindow.resizeTo(1290, 975);
        newWindow.onresize = () => {
          newWindow.resizeTo(1290, 975);
        };
      };
    }
  };

  return (
    <Button
      variant="solid"
      onClick={handleButtonClick}
      className="w-full bg-blue-500 py-2 px-4 rounded-lg text-lg hover:bg-blue-700"
    >
      アプリへ
    </Button>
  );
}

export default App;
