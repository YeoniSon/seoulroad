import React from "react";
import { Route } from "react-router-dom";
import CultureListPage from "../pages/CultureListPage";
import HealingListPage from "../pages/HealingListPage";
import FoodListPage from "../pages/FoodListPage";
import MyPage from "../pages/Mypage";
import HomePage from "../pages/HomePage";

function ElseRoute() {
  return (
    <>
      <Route index element={<HomePage />} />
      <Route path="food" element={<FoodListPage />} />
      <Route path="culture" element={<CultureListPage />} />
      <Route path="healing" element={<HealingListPage />} />
      <Route path="mypage" element={<MyPage />} />
    </>
  );
}
export default ElseRoute;
