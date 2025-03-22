import { memo, useCallback, useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { SubAppContext } from "../SubApp";

let formValue = {};
const SignUpSection = () => {
  const menuContextValue = useContext(SubAppContext);

  const [signUpValue, setSignUpValue] = useState({
    username: "",
    password: "",
  });

  const handleInput = useCallback((event) => {
    event.preventDefault();
    setSignUpValue({
      ...signUpValue,
      [event.target.name]: event.target.value,
    });
    formValue[event.target.name] = event.target.value;
  }, [signUpValue, setSignUpValue]);

  const handleForm = useCallback(async (event) => {
    event.preventDefault();

    const payload = {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formValue),
    };

    const url = `${menuContextValue.url}/signup`;

    try {
      const response = await fetch(url, payload);
      const fetchedData = await response.json();

      if (fetchedData.description.includes("duplicate")) {
        window.alert("Duplicate username");
        throw new Error("Duplicate");
      }
      menuContextValue.handleParent({ login: true, username: signUpValue["username"] });
    } catch (error) {
      console.log(error.message);
    }
  }, [signUpValue, menuContextValue]);

  return (
    <>
      <div
        className="h-screen flex justify-center items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
      >
        <form
          onSubmit={handleForm}
          className="w-full sm:w-[450px] bg-white rounded-xl shadow-lg p-8 space-y-6"
        >
          <h2 className="text-2xl font-semibold text-center text-gray-800">Sign Up</h2>

          <div className="flex flex-col space-y-4">
            <input
              name="username"
              onChange={handleInput}
              value={signUpValue["username"]}
              type="text"
              className="p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="User Name"
              required
            />

            <input
              name="password"
              onChange={handleInput}
              value={signUpValue["password"]}
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
              Sign Up
            </button>
          </div>

          <div className="flex justify-center text-center text-gray-600">
            <p>
              Already have an account?{" "}
              <NavLink to="/login" className="text-indigo-600 hover:text-indigo-700">
                Login
              </NavLink>
            </p>
          </div>

          <div className="text-center text-gray-600 mt-4">
            <NavLink to="/login" className="text-indigo-600 hover:text-indigo-700">
              Back
            </NavLink>
          </div>
        </form>
      </div>
    </>
  );
};

export default memo(SignUpSection);
