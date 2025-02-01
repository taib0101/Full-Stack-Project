import { memo, useContext } from "react";

import Menu from "../components/Menu";
import { Navber } from "../components/Menu";
import { Footer } from "../components/Footer";
import { MenuContext } from "../App";
import LoginSection from "../components/LoginSection";

const LoginPage = () => {
  const value = useContext(MenuContext);

  return (
    <>
      <Menu />
      {value <= 1023 && (
        <div className={`border-2 fixed w-full bottom-0 left-0`}>
          <Navber />
        </div>
      )}

      <LoginSection />

      <Footer />
    </>
  );
};

export default memo(LoginPage);
