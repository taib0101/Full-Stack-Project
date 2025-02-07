import { memo, useContext } from "react";
import Menu, { Navber } from "../components/Menu";
import { MenuContext } from "../App";
import { Footer } from "../components/Footer";
import BlogContent from "../components/DashBoard Component/BlogContent";
import TeamContent from "../components/DashBoard Component/TeamContent";
import ServiceContent from "../components/DashBoard Component/ServiceContent";

const DashBoardPage = () => {
  const menuContextValue = useContext(MenuContext);
  return (
    <>
      <Menu />
      {menuContextValue.width <= 1023 && (
        <div className={`fixed w-full bottom-0 left-0 bg-white h-[50px]`}>
          <Navber />
        </div>
      )}

      <div className={`pt-12`}>
        <div className={`h-[100dvh] h-fit`}>
          <BlogContent />
          <TeamContent />
          <ServiceContent />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default memo(DashBoardPage);
