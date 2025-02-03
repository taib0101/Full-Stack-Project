import { useContext } from "react";
import Menu, { Navber } from "../components/Menu";
import { MenuContext } from "../App";
import { AboutSection } from "../components/AboutTeamSection";
import { Footer } from "../components/Footer";

export const AboutPage = () => {
  const teamMembers = [
    { name: "John Doe", role: "CEO" },
    { name: "Jane Smith", role: "CTO" },
    { name: "Alice Johnson", role: "Designer" },
    { name: "Bob Brown", role: "Developer" },
  ];

  const value = useContext(MenuContext);

  return (
    <div>
      <Menu />
      {value.width <= 1023 && (
        <div className={`border-2 fixed w-full bottom-0 left-0 z-[99]`}>
          <Navber />
        </div>
      )}

      <div className={`h-[100dvh]`}>
        <AboutSection  teamMembers={teamMembers} />
      </div>
      <Footer />
    </div>
  );
};
