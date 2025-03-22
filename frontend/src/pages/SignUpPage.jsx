import { memo, useContext } from "react";
import Menu, { Navber } from "../components/Menu";
import { Footer } from "../components/Footer";
import SignUpSection from "../components/SignUpSection";

const SignUpPage = () => {
  return (
    <>
      <Menu />

      <div className={`h-[100dvh]`}>
        <SignUpSection />
        <Footer />
      </div>
    </>
  );
};

export default memo(SignUpPage);
