import { memo, useContext } from "react";
import Menu, { Navber } from "../components/Menu";
import { MenuContext } from "../App";
import { Footer } from "../components/Footer";
import SignUpSection from "../components/SignUpSection";

const SignUpPage = () => {
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

      <div className={`h-[100dvh]`}>
        <SignUpSection />
        <Footer />
      </div>
    </>
  );
};

export default memo(SignUpPage);
