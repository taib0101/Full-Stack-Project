import { useContext } from "react";
import Menu, { Navber } from "../components/Menu";
import { ContactForm } from "../components/ContactForm";
import { Footer } from "../components/Footer";

export const ContactPage = () => {

  return (
    <div>
      <Menu />

      <div className={`h-[100dvh] h-fit`}>
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
};
