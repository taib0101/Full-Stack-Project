import { memo, useContext } from "react";
import { NavLink } from "react-router-dom";
import { MenuContext } from "../App";

export const Navber = () => {
  return (
    <>
      <ul className={`flex flex-wrap h-full justify-between`}>
        <li className={`flex flex-col justify-center`}>
          <NavLink to="/">Home</NavLink>
        </li>

        <li className={`flex flex-col justify-center`}>
          <NavLink to="/about">About</NavLink>
        </li>

        <li className={`flex flex-col justify-center`}>
          <NavLink to="/blog">Blog</NavLink>
        </li>

        <li className={`flex flex-col justify-center`}>
          <NavLink to="/service">Service</NavLink>
        </li>

        <li className={`flex flex-col justify-center`}>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </>
  );
};

const Menu = () => {
  const value = useContext(MenuContext);

  // console.log("window :", value);

  const handleLoginOut = () => {
    if (value.authentication.login)
      value.handleParent({ login: false, username: "" });
  };

  return (
    <div
      className={`fixed left-0 top-0 z-[99] w-full grid grid-cols-2 lg:grid-cols-3 justify-evenly border-4`}
    >
      <div className={`ml-5 sm:ml-8`}>
        <img
          src="https://cdn-icons-png.flaticon.com/128/1183/1183621.png"
          alt=""
          className={`w-[50px] h-[50px]`}
        />
      </div>

      {value.width >= 1024 && (
        <nav>
          <Navber />
        </nav>
      )}

      <div className={`flex flex-wrap justify-between mr-5 sm:mr-8`}>
        <div></div>

        <NavLink to="/dashboard">
          <button
            className={`bg-[#1F2937] text-white font-bold h-full py-2 px-[5.2px] sm:px-4 rounded-full cursor-pointer`}
          >
            Dash-Board
          </button>
        </NavLink>

        <NavLink to="/login">
          <button
            onClick={handleLoginOut}
            className={`bg-[#DC2626] text-white font-bold h-full py-2 px-[5.2px] sm:px-4 rounded-full cursor-pointer`}
          >
            {value.authentication.login ? "LogOut" : "LogIn"}
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default memo(Menu);
