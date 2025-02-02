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
        <div className={`border-2 fixed w-full bottom-0 left-0 z-[99]`}>
          <Navber />
        </div>
      )}

      <div className={`relative top-16 left-0 h-[150dvh]  border-amber-400`}>
        <ContactForm />
        <Footer />
      </div>
    </div>
  );
};
