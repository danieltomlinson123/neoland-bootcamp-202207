// import logo from "./logo.svg";

import { useState } from "react";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import QuickPlayPage from "./pages/QuickPlayPage";
import HomePage from "./pages/HomePage";
import Feedback from "./components/Feedback";
import Loggito from "./utils/Loggito.js";
import Context from "./utils/Context";

import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import Hello from "./components/Hello";

import "./App.css";

function App() {
  // this.state = { view: sessionStorage.token ? "home" : "login" };
  const logger = new Loggito("App");

  const [view, setView] = useState(sessionStorage.token ? "home" : "login");
  const [feedback, setFeedback] = useState({ message: null, level: null });
  const navigate = useNavigate();
  // const [theme, setTheme] = useState("pink");

  const handleNavigationToRegister = () => {
    navigate("register");

    logger.debug("navigate to register");
  };

  const handleNavigationToLogin = () => {
    navigate("login");

    logger.debug("navigate to login");
  };

  const handleNavigationToHome = () => {
    navigate("/");

    logger.debug("navigate to home");
  };

  const handleLogoutClick = () => {
    delete sessionStorage.token;

    handleNavigationToLogin();
  };

  const handleAcceptFeedback = () => {
    const feedback = { message: null, level: null };

    setFeedback(feedback);

    logger.debug("setFeedback", feedback);
  };

  const handleFeedback = (feedback) => {
    setFeedback(feedback);
    logger.debug("setFeedback", feedback);
  };

  logger.info("render");

  // const themes = ["pink", "green", "new"];

  const handleThemeChange = (themeReceived) => {
    // setTheme(themeReceived);
    // document.documentElement.classList.remove(themes.filter(!theme));
    document.documentElement.classList.remove("default");
    document.documentElement.classList.remove("green");
    document.documentElement.classList.remove("earth");
    document.documentElement.classList.remove("contrast");
    document.documentElement.classList.remove("pink");
    // (`${themes.filter(!theme)}`);
    document.documentElement.classList.add(themeReceived);
    // (`${theme}`);
  };

  const handleQuickPlayClick = (view) => {
    // setView(view);
    navigate("quickPlay");
  };

  const level = feedback.level;
  const message = feedback.message;

  return (
    <Context.Provider
      value={{
        handleNavigationToRegister,
        handleNavigationToHome,
        handleNavigationToLogin,
        handleLogoutClick,
        handleFeedback,
        handleAcceptFeedback,
        handleThemeChange,
        handleQuickPlayClick,
        level,
        message,
      }}
    >
      <Routes>
        <Route
          path="login"
          element={sessionStorage.token ? <Navigate to="/" /> : <LoginPage />}
          // handleQuickPlayClick={handleQuickPlayClick}
        />
        <Route
          path="register"
          element={
            sessionStorage.token ? <Navigate to="/" /> : <RegisterPage />
          }
        />
        <Route
          path="quickPlay"
          element={
            sessionStorage.token ? <Navigate to="/" /> : <QuickPlayPage />
          }
        />
        <Route path="hello/:to" element={<Hello />} />
        <Route
          path="/*"
          element={
            sessionStorage.token ? <HomePage /> : <Navigate to="login" />
          }
        />
      </Routes>

      {feedback.message && <Feedback />}
    </Context.Provider>
  );
}

export default App;
