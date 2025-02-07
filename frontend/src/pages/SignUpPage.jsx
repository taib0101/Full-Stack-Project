import { memo, useContext } from "react";
import Menu, { Navber } from "../components/Menu";
import { MenuContext } from "../App";
import { Footer } from "../components/Footer";
import SignUpSection from "../components/SignUpSection";

const SignUpPage = () => {
  const menuContextValue = useContext(MenuContext);
  return (
    <>
      <div>
        <Menu />
        {menuContextValue.width <= 1023 && (
          <div className={`fixed w-full bottom-0 left-0 z-[99] bg-white h-[50px]`}>
            <Navber />
          </div>
        )}
      </div>

      <div className={`h-[100dvh]`}>
        <SignUpSection />
        <Footer />
      </div>
    </>
  );
};

export default memo(SignUpPage);
