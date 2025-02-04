import { memo, useContext } from "react";
import Menu, { Navber } from "../components/Menu";
import { MenuContext } from "../App";
import { Footer } from "../components/Footer";
import BlogContent from "../components/DashBoard Component/BlogContent";
import TeamContent from "../components/DashBoard Component/TeamContent";


const DashBoardPage = () => {
  const value = useContext(MenuContext);
  return (
    <>
      {/* <Menu /> */}
      {value.width <= 1023 && (
        <div className={`fixed w-full bottom-0 left-0 bg-white h-[50px]`}>
          <Navber />
        </div>
      )}

      <div className={`h-[100dvh] h-fit border-4`}>
        <BlogContent />
        <TeamContent />
      </div>
      <Footer />
    </>
  );
};

export default memo(DashBoardPage);
