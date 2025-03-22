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

export const SubAppContext = createContext();

const SubApp = () => {
  const url = "https://project-backend-gilt-eight.vercel.app";
  const [authentication, setAuthentication] = useState({
    login: false,
    username: "",
  });

  const contextObject = {
    url,
    authentication,
    setAuthentication,
  };
  // console.log("SubApp signUp login :", authentication);
  return (
    <>
      <BrowserRouter>
        <SubAppContext.Provider value={contextObject}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/service" element={<ServicePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route
              path="/dashboard"
              element={authentication.login ? <DashBoardPage /> : <LoginPage />}
            />
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
        </SubAppContext.Provider>
      </BrowserRouter>
    </>
  );
};

export default memo(SubApp);
