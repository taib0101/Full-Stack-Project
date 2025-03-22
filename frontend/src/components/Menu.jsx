import { memo, useContext } from "react";
import { NavLink } from "react-router-dom";
import { SubAppContext } from "../SubApp";

export const Navber = () => (
  <ul className="flex flex-wrap h-full items-center justify-around space-x-6 text-gray-800 font-semibold">
    <li>
      <NavLink to="/" className="hover:text-indigo-600 transition duration-300">
        Home
      </NavLink>
    </li>

    <li>
      <NavLink
        to="/about"
        className="hover:text-indigo-600 transition duration-300"
      >
        About
      </NavLink>
    </li>

    <li>
      <NavLink
        to="/blog"
        className="hover:text-indigo-600 transition duration-300"
      >
        Blog
      </NavLink>
    </li>

    <li>
      <NavLink
        to="/service"
        className="hover:text-indigo-600 transition duration-300"
      >
        Service
      </NavLink>
    </li>

    <li>
      <NavLink
        to="/contact"
        className="hover:text-indigo-600 transition duration-300"
      >
        Contact
      </NavLink>
    </li>
  </ul>
);

const Menu = () => {
  const SubAppContextValue = useContext(SubAppContext);
  const { authentication, setAuthentication } = SubAppContextValue;

  const handleLoginOut = () => {
    if (authentication.login) setAuthentication({ login: false, username: "" });
  };

  return (
    <div className="fixed top-0 left-0 w-full bg-white shadow-md z-[99]">
      <div className="grid grid-cols-3 md:grid-cols-3 items-center justify-between p-4 sm:p-6">
        <div className="flex items-center space-x-2">
          <img
            src="https://cdn-icons-png.flaticon.com/128/1183/1183621.png"
            alt="Logo"
            className="w-10 h-10"
          />
          <span className="hidden sm:flex font-bold text-xl text-indigo-600">
            BrandName
          </span>
        </div>

        <div>
          <div
            className={`fixed w-full bottom-0 left-0 [@media(min-width:1100px)]:relative [@media(min-width:1100px)]:h-fit z-[99] bg-white h-[50px]`}
          >
            <Navber />
          </div>
        </div>

        <div className="flex items-center justify-end space-x-4">
          <NavLink to="/dashboard">
            <button className="bg-indigo-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-indigo-700 transition duration-300">
              Dashboard
            </button>
          </NavLink>

          <NavLink to="/login">
            <button
              onClick={handleLoginOut}
              className={`${
                authentication.login ? "bg-red-600" : "bg-green-600"
              } text-white font-semibold py-2 px-6 rounded-lg hover:bg-red-700 transition duration-300`}
            >
              {authentication.login ? "LogOut" : "LogIn"}
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default memo(Menu);
