import { useState } from "react";
import WelcomePage from "./pages/WelcomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [user, setUser] = useState("");

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<WelcomePage />} />
        <Route
          exact
          path="/login"
          element={<LoginPage setUserProp={setUser} />}
        />
        <Route
          exact
          path="/register"
          element={<RegisterPage setUserProp={setUser} />}
        />
        <Route
          exact
          path="/home"
          element={<HomePage userProp={user} setUserProp={setUser} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
