import { memo, useContext } from "react";

import Menu from "../components/Menu";
import { Navber } from "../components/Menu";
import { Footer } from "../components/Footer";
import LoginSection from "../components/LoginSection";

const LoginPage = () => {

  return (
    <>
      <Menu />

      <div className={`h-[100dvh]`}>
        <LoginSection />
        <Footer />
      </div>
    </>
  );
};

export default memo(LoginPage);
