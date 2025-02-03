import { useContext } from "react";
import Menu, { Navber } from "../components/Menu";
import { MenuContext } from "../App";
import { AboutSection } from "../components/AboutSection";
import { TeamSection } from "../components/TeamSection";
import { Footer } from "../components/Footer";

export const AboutPage = () => {
  const teamMembers = [
    { name: "John Doe", role: "CEO" },
    { name: "Jane Smith", role: "CTO" },
    // Add more team members dynamically
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
        <div className={`relative left-0 top-[60px]`}>
          <AboutSection />
          <TeamSection teamMembers={teamMembers} />
        </div>
      </div>
      <Footer />
    </div>
  );
};
