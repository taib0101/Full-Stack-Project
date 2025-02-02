import { memo, useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { MenuContext } from "../App";

let formValue = {};
const LoginSection = () => {
  const [loginValue, setLoginValue] = useState({
    username: "",
    password: "",
  });
  const [warning, setWarning] = useState(false);

  const value = useContext(MenuContext);

  const handleInput = (event) => {
    event.preventDefault();
    setLoginValue({
      ...loginValue,
      [event.target.name]: event.target.value,
    });
    formValue[event.target.name] = event.target.value;
  };

  const handleForm = async (event) => {
    event.preventDefault();

    const payload = {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formValue),
    };

    const url = "http://127.0.0.1:3000/login";

    try {
      const response = await fetch(url, payload);
      const data = await response.json();

      if (data.status === "error") {
        setWarning(true);
        setTimeout(() => setWarning(false), 2000);
        throw new Error(data.description);
      }
      console.log("data :", data);

      value.handleParent({ login: true, username: loginValue["username"] });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <div
        className={`h-full flex flex-wrap justify-center items-center bg-amber-400`}
      >
        <form
          onSubmit={handleForm}
          className={`h-[50%] w-[100%] md:w-[50%] bg-blue-500`}
        >
          <div className={`flex justify-center items-center h-[30%]`}>
            <input
              name="username"
              onChange={handleInput}
              value={loginValue["username"]}
              type="text"
              className={`h-fit border-2 bg-[#F2F2F2]`}
              placeholder="User Name"
              required
            />
          </div>

          <div className={`flex justify-center items-center h-[30%]`}>
            <input
              name="password"
              onChange={handleInput}
              value={loginValue["password"]}
              type="password"
              className={`h-fit border-2 bg-[#F2F2F2]`}
              placeholder="Password"
              required
            />
          </div>

          <div className={`flex justify-center items-center h-[20%]`}>
            <button
              type="submit"
              className={`bg-[#1F2937] text-white font-bold h-fit py-2 px-[5.2px] sm:px-4 rounded-lg w-[40%] cursor-pointer`}
            >
              Login
            </button>
          </div>

          <div className={`flex justify-center items-center h-[10%]`}>
            {warning && <p>Wrong User Name or Password</p>}
          </div>

          <div className={`flex justify-center h-[20%]`}>
            <p>
              Not Registered ! <NavLink to="/signup">SignUp</NavLink>{" "}
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default memo(LoginSection);
