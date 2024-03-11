import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import App from "./App";
import FoodListPage from "../pages/FoodListPage";
import CultureListPage from "../pages/CultureListPage";
import HealingListPage from "../pages/HealingListPage";
import MyPage from "../pages/MypagePage";

function Route() {
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
          </Route>
        </Routes>
      </App>
    </BrowserRouter>
  );
}
