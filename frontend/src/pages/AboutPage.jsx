import { useContext, useEffect, useState } from "react";
import Menu, { Navber } from "../components/Menu";
import { SubAppContext } from "../SubApp";
import { AboutSection } from "../components/AboutTeamSection";
import { Footer } from "../components/Footer";

export const AboutPage = () => {
  const SubAppContextValue = useContext(SubAppContext);
  const { login, url, authentication } = SubAppContextValue;

  let [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    if (login) {
      const readBlog = async () => {
        try {
          const urll = `${url}/read/team?username=${authentication.username}`;
          const payload = {
            method: "get",
          };
          const response = await fetch(urll, payload);
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
  }, [authentication]);

  const value = useContext(SubAppContext);

  return (
    <div>
      <Menu />
      <div className={`h-[100dvh] h-fit mt-12`}>
        <AboutSection teamMembers={teamMembers} />
      </div>
      <Footer />
    </div>
  );
};
