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
      {value <= 1023 && (
        <div className={`border-2 fixed w-full bottom-0 left-0`}>
          <Navber />
        </div>
      )}
      <AboutSection />
      <TeamSection teamMembers={teamMembers} />
      <Footer />
    </div>
  );
};
