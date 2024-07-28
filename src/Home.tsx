import Menu from "./component/Menu";
import SE from "./component/SE";
import Exit from "./component/Exit";
import UserAvators from "./component/UserAvatars";
import backgroundImage from "./assets/homedesk.jpg";
import flagImage from "./assets/flag.png";
import { useEffect } from "react";
import axios from "axios";

function Home() {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    // 入室
    const enterServer = async () => {
      try {
        const response = await axios.post('/server/enter', {
          groupID: 'exampleGroupID', // 必要に応じて適切な値に変更
          userID: 'exampleUserID', // 必要に応じて適切な値に変更
          userAvatar: 'exampleAvatar' // 必要に応じて適切な値に変更
        });
        console.log(response.data); // サーバーからの応答をコンソールに表示
        // エンドポイントが成功したらenterSeatを呼び出す
        enterSeat();
      } catch (error) {
        console.error('Error entering server:', error);
      }
    };
    const enterSeat = async () => {
      const seatNum = 1; // 使用するseatNumを指定
      try {
        const response = await axios.post(`/ws/enter/${seatNum}`);
        console.log(response.data); // サーバーからの応答をコンソールに表示
      } catch (error) {
        console.error('Error entering seat:', error);
      }
    };

    const isFirstVisit = localStorage.getItem('hasVisitedHome') === null;

    if (isFirstVisit) {
      enterServer();
      localStorage.setItem('hasVisitedHome', 'true');
    }

    return () => {
      document.body.style.overflow = "auto"; // クリーンアップ時に戻す
    };
  }, []);

  return (
    <div
      className="w-[1280px] h-[900px]  bg-cover bg-center relative"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <img
        src={flagImage}
        alt="Flag"
        className="absolute inset-0 w-full h-full object-cover" // 画像を全画面に広げる
      />
      <header className="w-full p-4 flex justify-between items-center">
        <Exit />
        <div className="">
          <Menu />
        </div>
      </header>

      <UserAvators />

      <footer className="absolute bottom-4 left-4">
        <SE />
      </footer>
    </div>
  );
}

export default Home;
