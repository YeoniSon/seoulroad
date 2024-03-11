import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./components/App";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import AdminPage from "./pages/AdminPage";

function Main() {
  return (
    <BrowserRouter>
      <App>
        <Routes>
          <Route path="/">
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
