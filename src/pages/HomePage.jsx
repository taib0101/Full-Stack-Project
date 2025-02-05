import { useContext, useEffect, useState } from "react";
import Menu, { Navber } from "../components/Menu";
import { MenuContext } from "../App";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { BlogSection } from "../components/BlogSection";

export const HomePage = () => {

  const menuContextValue = useContext(MenuContext);
    let [blogs, setBlogs] = useState([
      { name: "Blog Post 1", description: "Short description of blog post 1." },
      { name: "Blog Post 2", description: "Short description of blog post 2." },
      { name: "Blog Post 3", description: "Short description of blog post 3." },
      { name: "Blog Post 4", description: "Short description of blog post 4." },
      { name: "Blog Post 5", description: "Short description of blog post 5." },
      { name: "Blog Post 6", description: "Short description of blog post 6." },
    ]);
  
    useEffect(() => {
      if (menuContextValue.authentication.login) {
        const readBlog = async () => {
          try {
            const url = `http://127.0.0.1:3000/read/blog?username=${menuContextValue.authentication.username}`;
            const payload = {
              method: "get",
            };
            const response = await fetch(url, payload);
            const fetchedData = await response.json();
  
            // console.log("fetched data :", fetchedData);
            if (fetchedData.status === "error")
              throw new Error(fetchedData.description);
  
            console.log("fecthed array :", fetchedData.array);
            setBlogs(fetchedData.array);
          } catch (error) {
            window.alert(error.message);
          }
        };
  
        readBlog();
      }
    }, []);

  return (
    <div>
      <Menu />
      {menuContextValue.width <= 1023 && (
        <div
          className={`fixed w-full bottom-0 left-0 z-[99] bg-white h-[50px]`}
        >
          <Navber />
        </div>
      )}

      <div className={`h-[100dvh]`}>
        <Hero />
      </div>
      <BlogSection blogs={blogs} />
      <Footer />
    </div>
  );
};
