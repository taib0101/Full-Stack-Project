import { memo, useCallback, useContext, useState } from "react";
import { MenuContext } from "../../App";

const CRUDForm = ({ showFormObject, content, readData }) => {
  // console.log(content);

  const valuee = useContext(MenuContext)

  const [value, setValue] = useState({
    name: "",
    description: "",
  });
  const { showForm, setShowForm } = showFormObject;

  const handleCloseForm = useCallback(() => {
    setShowForm({
      formClicked: false,
      addUpdate: "",
    });
  }, [setShowForm]);

  const handleInput = useCallback(
    (event) => {
      setValue({
        ...value,
        [event.target.name]: event.target.value,
      });
    },
    [value, setValue]
  );
  let globalValue = value;
  globalValue.username = valuee.authentication.username;

  // console.log(`${content}`);
  // console.log(value);
  // console.log("global :", globalValue);

  const handleSubmit = useCallback(async (event) => {
    event.preventDefault();
    console.log("Form submitted!");

    let url = "http://127.0.0.1:3000/create/"
    let payload = {
      method: "post",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(globalValue)
    }

    try {
      url += content.toLowerCase();
      console.log("url :", url);
      
      const response = await fetch(url, payload);
      const fetchedDetails = await response.json();

      if(fetchedDetails.status === "error") throw new Error(fetchedDetails.description)
      readData();
    } catch(error) {
      window.alert(error.message);
    }

    handleCloseForm();
    setValue({
      name: "",
      description: "",
    }, [setValue]);
  }, [content, globalValue, handleCloseForm, readData]);

  return (
    <div className="p-4">
      {showForm.formClicked && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center">
          {" "}
          <div className="bg-white p-8 rounded-lg">
            {" "}
            {/* Form container */}
            <h2 className="text-lg font-bold mb-4">
              {`${showForm.addUpdate}`}{" "}
              {showForm.addUpdate === "Add" ? "New" : ""} {`${content}`}
            </h2>
            <form onSubmit={handleSubmit}>
              {/* Form fields */}
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  {`${content}`} Name
                </label>
                <input
                  type="text"
                  name="name"
                  onChange={handleInput}
                  value={value["name"]}
                  className="border border-gray-300 px-3 py-2 rounded w-full"
                  placeholder={`${content} Name`}
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  {`${content}`} Description
                </label>
                <input
                  type="text"
                  name="description"
                  onChange={handleInput}
                  value={value["description"]}
                  className="border border-gray-300 px-3 py-2 rounded w-full"
                  placeholder={`${content} Description`}
                />
              </div>

              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={handleCloseForm}
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded mr-2"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default memo(CRUDForm);
