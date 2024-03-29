import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./components/App";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import AdminPage from "./pages/AdminPage";
import ElseRoute from "./components/ElseRoute";
import FoodListPage from "./pages/FoodListPage";
import HomePage from "./pages/HomePage";
import CultureListPage from "./pages/CultureListPage";
import HealingListPage from "./pages/HealingListPage";
import FoodDetailPage from "./pages/FoodDetailPage";
import HealingDetailPage from "./pages/HealingDetailPage";
import CultureDetailPage from "./pages/CultureDetailPage";
import MyPage from "./pages/Mypage";

function Main() {
  return (
    <BrowserRouter>
      <App>
        <Routes>
          <Route path="/" element={<ElseRoute />} />
          <Route index element={<HomePage />} />
          <Route path="food" element={<FoodListPage />} />
          <Route path="food/:name" element={<FoodDetailPage />} />
          <Route path="culture" element={<CultureListPage />} />
          <Route path="culture/:name" element={<CultureDetailPage />} />
          <Route path="healing" element={<HealingListPage />} />
          <Route path="healing/:name" element={<HealingDetailPage />} />
          <Route path="mypage" element={<MyPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignUpPage />} />
          <Route path="admin" element={<AdminPage />} />
        </Routes>
      </App>
    </BrowserRouter>
  );
}
export default Main;
