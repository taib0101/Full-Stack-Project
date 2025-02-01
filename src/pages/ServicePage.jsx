import { useContext } from "react";
import Menu, { Navber } from "../components/Menu";
import { MenuContext } from "../App";
import { ServiceSection } from "../components/ServiceSection";
import { Footer } from "../components/Footer";

export const ServicePage = () => {
  const services = [
    { title: "Service 1", description: "This is the first service." },
    { title: "Service 2", description: "This is the second service." },
    // Add more services dynamically
  ];

  const value = useContext(MenuContext);

  return (
    <div>
      <Menu />
      {value <= 1023 && (
        <div className={`border-2 fixed w-full bottom-0 left-0`}>
          <Navber />
        </div>
      )}
      <ServiceSection services={services} />
      <Footer />
    </div>
  );
};
