import { useContext, useEffect, useState } from "react";
import Menu, { Navber } from "../components/Menu";
import { MenuContext } from "../App";
import { AboutSection } from "../components/AboutTeamSection";
import { Footer } from "../components/Footer";

export const AboutPage = () => {
  const menuContextValue = useContext(MenuContext);

  let [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    if (menuContextValue.authentication.login) {
      const readBlog = async () => {
        try {
          const url = `https://projectbackendos-phi.vercel.app/read/team?username=${menuContextValue.authentication.username}`;
          const payload = {
            method: "get",
          };
          const response = await fetch(url, payload);
          const fetchedData = await response.json();

          // console.log("fetched data :", fetchedData);
          if (fetchedData.status === "error")
            throw new Error(fetchedData.description);

          console.log("fecthed array :", fetchedData.array);
          setTeamMembers(fetchedData.array);
        } catch (error) {
          window.alert(error.message);
        }
      };

      readBlog();
    } else {
      setTeamMembers([
        { name: "John Doe", description: "CEO" },
        { name: "Jane Smith", description: "CTO" },
        { name: "Alice Johnson", description: "Designer" },
        { name: "Bob Brown", description: "Developer" },
      ]);
    }
  }, [menuContextValue.authentication]);

  const value = useContext(MenuContext);

  return (
    <div>
      <Menu />
      {value.width <= 1023 && (
        <div
          className={`fixed w-full bottom-0 left-0 z-[99] bg-white h-[50px]`}
        >
          <Navber />
        </div>
      )}

      <div className={`h-[100dvh] h-fit mt-12`}>
        <AboutSection teamMembers={teamMembers} />
      </div>
      <Footer />
    </div>
  );
};
