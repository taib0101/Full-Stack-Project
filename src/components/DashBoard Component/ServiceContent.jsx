import { useState, memo, useCallback, useEffect, useContext } from "react";
import CRUDForm from "./CRUDForm";
import { MenuContext } from "../../App";

const ServiceContent = () => {
  let [items, setItems] = useState([]);
    const valuee = useContext(MenuContext);
  
    const readService = useCallback(async () => {
      try {
        if (valuee.authentication.login) {
          const url = `http://127.0.0.1:3000/read/service?username=${valuee.authentication.username}`;
          const payload = {
            method: "get",
          };
          const response = await fetch(url, payload);
          const fetchedData = await response.json();
  
          console.log("fetched data :", fetchedData);
          if (fetchedData.status === "error")
            throw new Error(fetchedData.description);
  
          setItems(fetchedData.array);
        } else {
          setItems([
            {
              name: "Item 1",
              description: "Description 1",
            },
            { name: "Item 2", description: "Description 2" },
          ]);
        }
      } catch (error) {
        window.alert(error.message);
      }
    }, [valuee]);
  
    useEffect(() => {
      readService();
    }, [readService])
    // console.log("user name :", valuee);

  const [showForm, setShowForm] = useState({
    formClicked: false,
    addUpdate: "",
  });

  const updateItem = useCallback(
    (event) => {
      console.log("update this bro");
      setShowForm({
        formClicked: true,
        addUpdate: "Update",
      });
    },
    [setShowForm]
  );

  const deleteItem = (event) => {
    console.log("delete this bro");
  };

  const addItem = useCallback(
    (event) => {
      // console.log("add bro");
      setShowForm({
        formClicked: true,
        addUpdate: "Add",
      });
    },
    [setShowForm]
  );

  return (
    <div className={`container mx-auto p-4`}>
      <CRUDForm showFormObject={{ showForm, setShowForm }} content={"Service"} readData={readService} />
      <div className={`grid grid-cols-1 lg:grid-cols-2 gap-4`}>
        <div className={`p-4 border rounded-lg shadow-lg`}>
          <h2 className={`text-lg font-semibold mb-2`}>Service Content</h2>
          <div className={`space-y-4`}>
            <div className={`p-4 border rounded-lg shadow`}>
              {items.map((item, index) => (
                <div key={index} className={`grid grid-cols-1 md:grid-cols-2`}>
                  <div>
                    <h3 className={`font-bold break-words`}>{item.name}</h3>
                    <p className={`text-sm text-gray-600 break-words`}>
                      {item.description}
                    </p>
                  </div>
                  <div className={`flex items-center justify-center gap-2`}>
                    <button
                      onClick={updateItem}
                      className={`bg-green-600 hover:bg-green-900 text-white font-bold py-2 px-4 rounded mr-2 h-fit`}
                    >
                      Update
                    </button>
                    <button
                      onClick={deleteItem}
                      className={`bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded h-fit`}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="p-4 border rounded-lg shadow-lg flex flex-col items-center justify-center">
          <h2 className="text-lg font-semibold mb-4">Add New Service</h2>
          <button
            onClick={addItem}
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}
          >
            + Add Service
          </button>
        </div>
      </div>
    </div>
  );
};

export default memo(ServiceContent);
