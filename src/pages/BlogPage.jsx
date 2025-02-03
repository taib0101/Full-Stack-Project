import { useContext } from "react";
import Menu, { Navber } from "../components/Menu";
import { MenuContext } from "../App";
import { BlogSection } from "../components/BlogSection";
import { Footer } from "../components/Footer";

export const BlogPage = () => {
  const blogs = [
    { title: "Blog Post 1", description: "Short description of blog post 1." },
    { title: "Blog Post 2", description: "Short description of blog post 2." },
    { title: "Blog Post 3", description: "Short description of blog post 3." },
    { title: "Blog Post 4", description: "Short description of blog post 4." },
    { title: "Blog Post 5", description: "Short description of blog post 5." },
    { title: "Blog Post 6", description: "Short description of blog post 6." },
  ];

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

      <div className={`flex flex-wrap items-center h-[100dvh]`}>
        <BlogSection blogs={blogs} />
      </div>
      <Footer />
    </div>
  );
};
