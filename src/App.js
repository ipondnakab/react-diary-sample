import HomePage from "./pages/Home";
import CreatePage from "./pages/Create";
import DiaryPage from "./pages/Diary";
import EditPage from "./pages/Edit";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import Layouts from "./layouts";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Auth from "./providers/Auth";

function App() {
  return (
    <BrowserRouter>
      <Auth>
        <Routes>
          <Route
            path="/"
            element={
              <Layouts>
                <HomePage />
              </Layouts>
            }
          />
          <Route
            path="/create"
            element={
              <Layouts>
                <CreatePage />
              </Layouts>
            }
          />
          <Route
            path="/diary/:id"
            element={
              <Layouts>
                <DiaryPage />
              </Layouts>
            }
          />
          <Route
            path="/edit/:id"
            element={
              <Layouts>
                <EditPage />
              </Layouts>
            }
          />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </Auth>
    </BrowserRouter>
  );
}

export default App;
