import { useContext, useEffect, useState } from "react";
import Menu, { Navber } from "../components/Menu";
import { SubAppContext } from "../SubApp";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { BlogSection } from "../components/BlogSection";

export const HomePage = () => {
  const SubAppContextValue = useContext(SubAppContext);
  const { authentication, url } = SubAppContextValue;
  let [blogs, setBlogs] = useState([]);

  useEffect(() => {
    if (authentication.login) {
      const readBlog = async () => {
        try {
          const urll = `${url}/read/blog?username=${authentication.username}`;
          const payload = {
            method: "get",
          };
          const response = await fetch(urll, payload);
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
    } else {
      setBlogs([
        {
          name: "Blog Post 1",
          description: "Short description of blog post 1.",
        },
        {
          name: "Blog Post 2",
          description: "Short description of blog post 2.",
        },
        {
          name: "Blog Post 3",
          description: "Short description of blog post 3.",
        },
        {
          name: "Blog Post 4",
          description: "Short description of blog post 4.",
        },
        {
          name: "Blog Post 5",
          description: "Short description of blog post 5.",
        },
        {
          name: "Blog Post 6",
          description: "Short description of blog post 6.",
        },
      ]);
    }
  }, [authentication]);

  return (
    <div>
      <Menu />
      <div className={`h-[100dvh]`}>
        <Hero />
      </div>
      <BlogSection blogs={blogs} />
      <Footer />
    </div>
  );
};
