// ルーティングの設定
import { Route, Routes } from "react-router-dom";
import App from "./App";
import Home from "./Home";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Home" element={<Home />} />
    </Routes>
  );
};

export default AppRoutes;
