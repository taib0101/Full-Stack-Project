import { useContext, useEffect, useState } from "react";
import Menu, { Navber } from "../components/Menu";
import { SubAppContext } from "../SubApp";
import { ServiceSection } from "../components/ServiceSection";
import { Footer } from "../components/Footer";

export const ServicePage = () => {
  const menuContextValue = useContext(SubAppContext);

  let [services, setServices] = useState([]);

  useEffect(() => {
    if (menuContextValue.authentication.login) {
      const readService = async () => {
        try {
          const url = `${menuContextValue.url}/read/service?username=${menuContextValue.authentication.username}`;
          const payload = {
            method: "get",
          };
          const response = await fetch(url, payload);
          const fetchedData = await response.json();

          // console.log("fetched data :", fetchedData);
          if (fetchedData.status === "error")
            throw new Error(fetchedData.description);

          console.log("fecthed array :", fetchedData.array);
          setServices(fetchedData.array);
        } catch (error) {
          window.alert(error.message);
        }
      };

      readService();
    } else {
      setServices([
        {
          name: "Web Development",
          description: "Build modern web applications.",
        },
        {
          name: "UI/UX Design",
          description: "Create beautiful user interfaces.",
        },
        { name: "SEO Optimization", description: "Improve website ranking." },
      ]);
    }
  }, [menuContextValue.authentication]);

  return (
    <div>
      <Menu />

      <div className={`h-[100dvh]`}>
        <ServiceSection services={services} />
      </div>
      <Footer />
    </div>
  );
};
