// ルーティングの設定
import { Route, Routes } from "react-router-dom";
import App from "./App";
import Enter from "./Enter";
import Home from "./Home";
import Roulette from "./Roulette";


export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/Roulette" element={<Roulette />} />
      <Route path="/Enter" element={<Enter />} />
    </Routes>
  );
};

export default AppRoutes;
