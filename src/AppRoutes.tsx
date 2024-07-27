// ルーティングの設定
import { Route, Routes } from "react-router-dom";
import App from "./App";
import Home from "./Home";
import Enter from "./Enter";


export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/Enter" element={<Enter />} />
    </Routes>
  );
};

export default AppRoutes;
