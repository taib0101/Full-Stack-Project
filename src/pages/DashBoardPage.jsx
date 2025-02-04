import { memo, useContext } from "react";
import Menu, { Navber } from "../components/Menu";
import { MenuContext } from "../App";
import { Footer } from "../components/Footer";
import ItemList from "../components/ItemList";


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

      <div className={`h-[100dvh] border-4`}>
        <ItemList />
      </div>
      <Footer />
    </>
  );
};

export default memo(DashBoardPage);
