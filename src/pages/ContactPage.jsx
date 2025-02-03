import { useContext } from "react";
import Menu, { Navber } from "../components/Menu";
import { MenuContext } from "../App";
import { ContactForm } from "../components/ContactForm";
import { Footer } from "../components/Footer";

export const ContactPage = () => {
  const value = useContext(MenuContext);

  return (
    <div>
      <Menu />
      {value.width <= 1023 && (
        <div className={`fixed w-full bottom-0 left-0 z-[99] bg-white h-[50px]`}>
          <Navber />
        </div>
      )}

      <div className={`h-[100dvh] h-fit`}>
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
};
