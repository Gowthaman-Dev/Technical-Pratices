import React, { useState } from "react";

const App = () => {

  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  // ADD & UPDATE
  const handleSubmit = () => {

    if (input === "") return;

    if (editIndex !== null) {

      const updatedTodos = todos.map((todo, index) =>
        index === editIndex ? input : todo
      );

      setTodos(updatedTodos);
      setEditIndex(null);

    } else {

      setTodos([...todos, input]);
    }

    setInput("");
  };

  // DELETE
  const handleDelete = (index) => {

    const filteredTodos = todos.filter((todo, i) => i !== index);

    setTodos(filteredTodos);
  };

  // EDIT
  const handleEdit = (index) => {

    setInput(todos[index]);
    setEditIndex(index);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">

      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-lg">

        <h1 className="text-4xl font-bold text-center mb-6">
          Todo CRUD App
        </h1>

        {/* INPUT SECTION */}
        <div className="flex gap-3 mb-6">

          <input
            type="text"
            placeholder="Enter Todo"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            onClick={handleSubmit}
            className={`px-5 py-3 rounded-lg text-white font-semibold transition duration-300 ${
              editIndex !== null
                ? "bg-yellow-500 hover:bg-yellow-600"
                : "bg-blue-500 hover:bg-blue-600"
            }`}
          >
            {editIndex !== null ? "Update" : "Add"}
          </button>

        </div>

        {/* TODO LIST */}
        <div className="space-y-4">

          {todos.length > 0 ? (

            todos.map((todo, index) => (
              <div
                key={index}
                className="flex items-center justify-between bg-gray-100 p-4 rounded-xl shadow-sm"
              >

                <p className="text-lg font-medium">
                  {todo}
                </p>

                <div className="flex gap-3">

                  <button
                    onClick={() => handleEdit(index)}
                    className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition duration-300"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => handleDelete(index)}
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition duration-300"
                  >
                    Delete
                  </button>

                </div>

              </div>
            ))

          ) : (

            <p className="text-center text-gray-500">
              No Todos Added
            </p>

          )}

        </div>

      </div>

    </div>
  );
};

export default App;
