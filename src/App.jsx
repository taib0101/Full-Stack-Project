import { createContext, useEffect, useState, useCallback, memo } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { HomePage } from "./pages/HomePage.jsx";
import { AboutPage } from "./pages/AboutPage.jsx";
import { BlogPage } from "./pages/BlogPage";
import { ServicePage } from "./pages/ServicePage";
import { ContactPage } from "./pages/ContactPage";
import DashBoardPage from "./pages/DashBoardPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";

export const MenuContext = createContext();

const App = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const handleWindow = useCallback(() => {
    setWidth(window.innerWidth);
  }, [setWidth]);

  useEffect(() => {
    window.addEventListener("resize", handleWindow);

    return () => {
      window.removeEventListener("resize", handleWindow);
    };
  }, [handleWindow]);

  const [authentication, setAuthentication] = useState({
    login: false,
    username: "",
  });

  const handleParent = useCallback(({ login, username }) => {
    setAuthentication({ login, username });
  });

  // console.log("App signUp login :", authentication);
  return (
    <>
      <BrowserRouter>
        <MenuContext.Provider value={{ width, authentication, handleParent }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/service" element={<ServicePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/dashboard" element={<DashBoardPage />} />
            {/* <Route
              path="/dashboard"
              element={authentication.login ? <DashBoardPage /> : <LoginPage />}
            /> */}
            <Route
              path="/login"
              element={
                authentication.login ? (
                  <Navigate to="/" element={<HomePage />} replace />
                ) : (
                  <LoginPage />
                )
              }
            />
            <Route path="/signup" element={<SignUpPage />} />
          </Routes>
        </MenuContext.Provider>
      </BrowserRouter>
    </>
  );
};

export default memo(App);
