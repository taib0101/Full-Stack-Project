import { memo, useContext } from "react";
import Menu, { Navber } from "../components/Menu";
import { MenuContext } from "../App";


const DashBoardPage = () => {
  const value = useContext(MenuContext);
  return (
    <>
      <Menu />
      {value.width <= 1023 && (
        <div className={`border-2 fixed w-full bottom-0 left-0`}>
          <Navber />
        </div>
      )}

    </>
  );
};

export default memo(DashBoardPage);
