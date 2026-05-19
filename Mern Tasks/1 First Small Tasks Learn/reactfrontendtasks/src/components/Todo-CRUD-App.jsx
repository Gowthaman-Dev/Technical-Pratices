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
    <div style={{ textAlign: "center", marginTop: "30px" }}>

      <h1>Todo CRUD App</h1>

      <input
        type="text"
        placeholder="Enter Todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={handleSubmit}>
        {editIndex !== null ? "Update" : "Add"}
      </button>

      {todos.map((todo, index) => (
        <div key={index} style={{ marginTop: "10px" }}>

          {todo}

          <button
            onClick={() => handleEdit(index)}
            style={{ marginLeft: "10px" }}
          >
            Edit
          </button>

          <button
            onClick={() => handleDelete(index)}
            style={{ marginLeft: "10px" }}
          >
            Delete
          </button>

        </div>
      ))}

    </div>
  );
};

export default App;