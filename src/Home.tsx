
import Menu from "./component/Menu";
import SE from "./component/SE";
import Exit from "./component/Exit";
import backgroundImage from "./assets/Home.png"; // 画像のパスを指定

function Home() {
  return (
    <div
      className="w-[1280px] h-[800px]  bg-cover bg-center justify-items-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <header className="w-full p-4 flex justify-between items-center">
        <Exit />
        <div className="">
          <Menu />
        </div>
      </header>

      <footer className="absolute bottom-4 left-4">
        <SE />
      </footer>
    </div>
  );
}

export default Home;
