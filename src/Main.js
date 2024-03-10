import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./components/App";
import HomePage from "./pages/HomePage";
import FoodPage from "./pages/FoodPage";
import CulturePage from "./pages/CulturePage";
import HealingPage from "./pages/HealingPage";
import MyPage from "./pages/MypagePage";
import LoginPage from "./pages/LoginPage";

function Main() {
  return (
    <BrowserRouter>
      <App>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/food" element={<FoodPage />} />
          <Route path="/culture" element={<CulturePage />} />
          <Route path="/healing" element={<HealingPage />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </App>
    </BrowserRouter>
  );
}
export default Main;
