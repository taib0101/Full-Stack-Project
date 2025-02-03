import { useContext } from "react";
import Menu, { Navber } from "../components/Menu";
import { MenuContext } from "../App";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { BlogSection } from "../components/BlogSection";

export const HomePage = () => {
  const value = useContext(MenuContext);
  const blogs = [
    { title: "Blog Post 1", description: "Short description of blog post 1." },
    { title: "Blog Post 2", description: "Short description of blog post 2." },
    { title: "Blog Post 3", description: "Short description of blog post 3." },
    { title: "Blog Post 4", description: "Short description of blog post 4." },
    { title: "Blog Post 5", description: "Short description of blog post 5." },
    { title: "Blog Post 6", description: "Short description of blog post 6." },
  ];

  return (
    <div>
      <Menu />
      {value.width <= 1023 && (
        <div className={`border-2 fixed w-full bottom-0 left-0 z-[99]`}>
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
