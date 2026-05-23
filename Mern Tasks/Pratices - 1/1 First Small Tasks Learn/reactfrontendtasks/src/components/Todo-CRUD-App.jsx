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

// Mind la vachika vendiya main points

// 1️⃣ CRUD Meaning
// Create → Add
// Read → Show
// Update → Edit
// Delete → Remove

// Memory line:

// 👉 "CRUD = Add Show Edit Delete"

// 2️⃣ Main States
// const [todos, setTodos]

// 👉 all todos store pannum

// const [input, setInput]

// 👉 input value store pannum

// const [editIndex, setEditIndex]

// 👉 which todo editing nu remember

// Memory line:

// 👉 "3 state = data input edit"

// 3️⃣ Empty Check
// if(input === "") return;

// 👉 empty todo add ஆகாது

// Memory line:

// 👉 "emptyனா stop"

// 4️⃣ Edit Check
// if(editIndex !== null)

// 👉 edit mode check pannum

// nullனா add mode
// value irundha edit mode

// Memory line:

// 👉 "index irundha update"

// 5️⃣ map()
// todos.map()

// 👉 all todos loop pannum

// Memory line:

// 👉 "map repeat UI"

// 6️⃣ Update Logic
// index === editIndex ? input : todo

// 👉 matching item மட்டும் replace pannum

// Memory line:

// 👉 "same indexனா replace"

// 7️⃣ Updated Array
// const updatedTodos = todos.map(...)

// 👉 updated todos create pannum

// Memory line:

// 👉 "new updated array"

// 8️⃣ setTodos(updatedTodos)
// setTodos(updatedTodos)

// 👉 updated data save pannum

// Memory line:

// 👉 "new array set → UI update"

// 9️⃣ Edit Close
// setEditIndex(null)

// 👉 update முடிஞ்சதும் normal mode

// Memory line:

// 👉 "null = add mode"

// 🔟 Add Logic
// setTodos([...todos, input])

// 👉 old todos + new todo add

// Memory line:

// 👉 "spread old + add new"

// 1️⃣1️⃣ Spread Operator
// ...todos

// 👉 old array copy pannum

// Memory line:

// 👉 "spread copy old array"

// 1️⃣2️⃣ Clear Input
// setInput("")

// 👉 input clear ஆகும்

// Memory line:

// 👉 "after submit clear input"

// 1️⃣3️⃣ Delete Logic
// todos.filter((todo, i) => i !== index)

// 👉 clicked todo remove pannum

// Memory line:

// 👉 "filter remove item"

// 1️⃣4️⃣ setTodos(filteredTodos)
// setTodos(filteredTodos)

// 👉 deleted array save pannum

// Memory line:

// 👉 "save filtered array"

// 1️⃣5️⃣ Edit Logic
// setInput(todos[index])

// 👉 clicked todo input boxக்கு வரும்

// setEditIndex(index)

// 👉 editing index save pannum

// Memory line:

// 👉 "edit click → fill input + save index"

// 1️⃣6️⃣ Conditional Button
// editIndex !== null ? "Update" : "Add"

// 👉 mode based button text change

// Memory line:

// 👉 "edit modeனா update"

// 1️⃣7️⃣ Conditional Color
// edit mode → yellow
// add mode → blue

// Memory line:

// 👉 "state based style"

// 1️⃣8️⃣ Conditional Rendering
// todos.length > 0

// 👉 todos irundha show
// இல்லனா "No Todos Added"

// Memory line:

// 👉 "length check"

// 1️⃣9️⃣ Full Flow
// User Typing
// ↓
// setInput()

// Add Click
// ↓
// handleSubmit()
// ↓
// add/update logic
// ↓
// setTodos()
// ↓
// UI update

// Edit Click
// ↓
// input fill + index save

// Delete Click
// ↓
// filter()
// ↓
// remove item
// ↓
// UI update

// Memory line:

// 👉 "state change → UI change"

// 2️⃣0️⃣ Main Concept
// One app la
// Add + Edit + Delete

// 👉 complete CRUD operations

// Memory line:

// 👉 "CRUD app = real React practice"