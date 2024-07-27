import Menu from "./component/Menu";
import SE from "./component/SE";
import Exit from "./component/Exit";
import UserAvators from "./component/UserAvatars";
import backgroundImage from "./assets/homedesk.jpg";
import flagImage from "./assets/flag.png";
import { useEffect } from "react";

function Home() {
  useEffect(() => {
    document.body.style.overflow = "hidden";

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
