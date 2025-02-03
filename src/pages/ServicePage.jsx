import { useContext } from "react";
import Menu, { Navber } from "../components/Menu";
import { MenuContext } from "../App";
import { ServiceSection } from "../components/ServiceSection";
import { Footer } from "../components/Footer";

export const ServicePage = () => {
  const services = [
    { name: "Web Development", description: "Build modern web applications." },
    { name: "UI/UX Design", description: "Create beautiful user interfaces." },
    { name: "SEO Optimization", description: "Improve website ranking." },
  ];

  const value = useContext(MenuContext);

  return (
    <div>
      <Menu />
      {value.width <= 1023 && (
        <div className={`fixed w-full bottom-0 left-0 z-[99] bg-white h-[50px]`}>
          <Navber />
        </div>
      )}

      <div className={`h-[100dvh]`}>
        <ServiceSection services={services} />
      </div>
      <Footer />
    </div>
  );
};
