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
      {value <= 1023 && (
        <div className={`border-2 fixed w-full bottom-0 left-0`}>
          <Navber />
        </div>
      )}
      <ContactForm />
      <Footer />
    </div>
  );
};
