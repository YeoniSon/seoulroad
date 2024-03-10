import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./components/App";
import HomePage from "./pages/HomePage";
import FoodListPage from "./pages/FoodListPage";
import CultureListPage from "./pages/CultureListPage";
import HealingListPage from "./pages/HealingListPage";
import MyPage from "./pages/MypagePage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import AdminPage from "./pages/AdminPage";

function Main() {
  return (
    <BrowserRouter>
      <App>
        <Routes>
          <Route path="/">
            <Route index element={<HomePage />} />
            <Route path="food" element={<FoodListPage />} />
            <Route path="culture" element={<CultureListPage />} />
            <Route path="healing" element={<HealingListPage />} />
            <Route path="mypage" element={<MyPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="signup" element={<SignUpPage />} />
            <Route path="admin" element={<AdminPage />} />
          </Route>
        </Routes>
      </App>
    </BrowserRouter>
  );
}
export default Main;
