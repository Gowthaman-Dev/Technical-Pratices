import React, { useState } from "react";

const App = () => {
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  // ADD + UPDATE
  const handleSubmit = () => {
    if (input === "") return;

    if (editIndex !== null) {
      const updatedData = data.map((item, index) =>
        index === editIndex ? input : item
      );

      setData(updatedData);
      setEditIndex(null);
    } else {
      setData([...data, input]);
    }

    setInput("");
  };

  // DELETE
  const deleteItem = (index) => {
    const newData = data.filter((_, i) => i !== index);
    setData(newData);
  };

  // EDIT
  const editItem = (index) => {
    setInput(data[index]);
    setEditIndex(index);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>CRUD App</h2>

      <input
        type="text"
        placeholder="Enter value"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={handleSubmit}>
        {editIndex !== null ? "Update" : "Add"}
      </button>

      {data.map((item, index) => (
        <div key={index} style={{ marginTop: "10px" }}>
          <span>{item}</span>

          <button onClick={() => editItem(index)}>
            Edit
          </button>

          <button onClick={() => deleteItem(index)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default App;


// Mind la vachika vendiya main points
// 1️⃣ CRUD na enna
// Create → add
// Read → show
// Update → edit
// Delete → remove

// 👉 English: CRUD means Add, Show, Edit, Delete.

// 2️⃣ 3 state dhaan main
// const [data, setData]

// 👉 full items store

// const [input, setInput]

// 👉 input value store

// const [editIndex, setEditIndex]

// 👉 which item editing nu remember

// 3️⃣ Add logic
// setData([...data, input])

// 👉 old data + new input add

// Memory line:

// 👉 "spread old data, add new data"

// 4️⃣ Empty check
// if(input === "") return;

// 👉 empty value add ஆகாததுக்கு

// Memory line:

// 👉 "emptyனா stop"

// 5️⃣ Edit mode check
// if(editIndex !== null)

// 👉 edit modeனா update run

// 👉 இல்லனா add run

// Memory line:

// 👉 "index இருந்தா update"

// 6️⃣ Update logic
// data.map()

// 👉 loop through all items

// index === editIndex ? input : item

// 👉 matching item மட்டும் change

// Memory line:

// 👉 "same indexனா replace"

// 7️⃣ Update state
// setData(updatedData)

// 👉 new updated array save

// Memory line:

// 👉 "new array set pannina UI change agum"

// 8️⃣ Edit close
// setEditIndex(null)

// 👉 update முடிஞ்சதும் edit mode off

// Memory line:

// 👉 "null means normal mode"

// 9️⃣ Delete logic
// data.filter()

// 👉 unwanted item remove

// Memory line:

// 👉 "filter remove pannum"

// 🔟 Edit button work
// setInput(data[index])

// 👉 clicked item input boxக்கு வரும்

// setEditIndex(index)

// 👉 which item editing save ஆகும்

// Memory line:

// 👉 "edit click → input fill + index save"