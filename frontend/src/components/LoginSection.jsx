import { memo, useCallback, useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { SubAppContext } from "../SubApp";

let formValue = {};

const LoginSection = () => {
  const [loginValue, setLoginValue] = useState({
    username: "",
    password: "",
  });
  const [warning, setWarning] = useState(false);

  const SubAppContextValue = useContext(SubAppContext);
  const { url, setAuthentication } = SubAppContextValue;

  const handleInput = useCallback(
    (event) => {
      event.preventDefault();
      setLoginValue({
        ...loginValue,
        [event.target.name]: event.target.value,
      });
      formValue[event.target.name] = event.target.value;
    },
    [loginValue, setLoginValue]
  );

  const handleForm = useCallback(
    async (event) => {
      event.preventDefault();

      const payload = {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(formValue),
      };

      const urll = `${url}/login`;

      try {
        const response = await fetch(urll, payload);
        const fetchedData = await response.json();

        if (fetchedData.status === "error") {
          setWarning(true);
          setTimeout(() => setWarning(false), 2000);
          throw new Error(fetchedData.description);
        }
        console.log("fetchedData :", fetchedData);

        await setAuthentication({ login: true, username: loginValue["username"] });
      } catch (error) {
        console.log(error.message);
      }
    },
    [setAuthentication]
  );

  return (
    <>
      <div className="h-screen flex justify-center items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        <form
          onSubmit={handleForm}
          className="w-full sm:w-[450px] bg-white rounded-xl shadow-lg p-8 space-y-6"
        >
          <h2 className="text-2xl font-semibold text-center text-gray-800">
            Login
          </h2>

          <div className="flex flex-col space-y-4">
            <input
              name="username"
              onChange={handleInput}
              value={loginValue["username"]}
              type="text"
              className="p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="User Name"
              required
            />

            <input
              name="password"
              onChange={handleInput}
              value={loginValue["password"]}
              type="password"
              className="p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Password"
              required
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition duration-300"
            >
              Login
            </button>
          </div>

          {warning && (
            <div className="text-center text-red-500 text-sm">
              <p>Wrong Username or Password</p>
            </div>
          )}

          <div className="text-center">
            <p className="text-gray-600">
              Not Registered?{" "}
              <NavLink
                to="/signup"
                className="text-indigo-600 hover:text-indigo-700"
              >
                Sign Up
              </NavLink>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default memo(LoginSection);
