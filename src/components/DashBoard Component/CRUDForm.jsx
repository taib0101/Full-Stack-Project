import { memo, useCallback } from "react";

const CRUDForm = ({ showFormObject, content }) => {
  // console.log(content);

  const { showForm, setShowForm } = showFormObject;
  const handleCloseForm = useCallback(() => {
    setShowForm({
      formClicked: false,
      addUpdate: ""
    });
  }, [setShowForm]);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted!");
    handleCloseForm();
  };

  return (
    <div className="p-4">
      {showForm.formClicked && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center">
          {" "}
          <div className="bg-white p-8 rounded-lg">
            {" "}
            {/* Form container */}
            <h2 className="text-lg font-bold mb-4">{`${showForm.addUpdate}`} {showForm.addUpdate === "Add" ? "New" : ""} {`${content}`}</h2>
            <form onSubmit={handleSubmit}>
              {/* Form fields */}
              <div className="mb-4">

                <label className="block text-gray-700 font-bold mb-2">
                  {`${content}`} Name
                </label>
                <input
                  type="text"
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
