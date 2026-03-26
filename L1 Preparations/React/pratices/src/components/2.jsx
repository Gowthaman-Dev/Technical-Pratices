import React, { useState } from "react";

const App = () => {
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  // CREATE & UPDATE
  const handleSubmit = () => {
    if (input === "") return;

    if (editIndex !== null) {
      // UPDATE
      const updatedData = data.map((item, index) =>
        index === editIndex ? input : item
      );
      setData(updatedData);
      setEditIndex(null);
    } else {
      // CREATE
      setData([...data, input]);
    }

    setInput("");
  };

  // DELETE
  const deleteItem = (index) => {
    const newData = data.filter((_, i) => i !== index);
    setData(newData);
  };

  // EDIT (fill input)
  const editItem = (index) => {
    setInput(data[index]);
    setEditIndex(index);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>CRUD App</h2>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter value"
      />
      <button onClick={handleSubmit}>
        {editIndex !== null ? "Update" : "Add"}
      </button>

      {/* READ */}
      {data.map((item, index) => (
        <div key={index}>
          <span>{item}</span>
          <button onClick={() => editItem(index)}>Edit</button>
          <button onClick={() => deleteItem(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default App;