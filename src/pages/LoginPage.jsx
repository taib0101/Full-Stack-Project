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
      <div>
        <Menu />
        {value.width <= 1023 && (
          <div className={`border-2 fixed w-full bottom-0 left-0 z-[99]`}>
            <Navber />
          </div>
        )}
      </div>

      <div className={`relative top-16 left-0 h-[100dvh] border-8`}>
        <LoginSection />
        <Footer />
      </div>
    </>
  );
};

export default memo(LoginPage);
