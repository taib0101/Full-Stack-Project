import { memo, useContext } from "react";
import Menu, { Navber } from "../components/Menu";
import { Footer } from "../components/Footer";
import BlogContent from "../components/DashBoard Component/BlogContent";
import TeamContent from "../components/DashBoard Component/TeamContent";
import ServiceContent from "../components/DashBoard Component/ServiceContent";

const DashBoardPage = () => {
  return (
    <>
      <Menu />

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
