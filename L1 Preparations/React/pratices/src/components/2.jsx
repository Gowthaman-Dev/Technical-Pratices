import React, { useState } from "react";

const App = () => {

  // எல்லா items-யும் store பண்ணும் state
  const [data, setData] = useState([]);

  // input box value store பண்ணும்
  const [input, setInput] = useState("");

  // எந்த item edit ஆகுது nu store பண்ணும்
  // null means edit mode இல்ல
  const [editIndex, setEditIndex] = useState(null);



  // ADD + UPDATE function
  const handleSubmit = () => {

    // input emptyனா function stop ஆகும்
    // இல்லனா empty item add ஆகிடும்
    if (input === "") return;


    // edit mode check
    // editIndex value இருந்தா update run ஆகும்
    if (editIndex !== null) {

      // selected item மட்டும் update பண்ணும்
      const updatedData = data.map((item, index) =>

        // edit ஆகுற indexனா new input வை
        // இல்லனா old item same வை
        index === editIndex ? input : item
      );

      // updated array stateக்கு set பண்ணும்
      // UI update ஆகும்
      setData(updatedData);

      // edit mode close
      // இல்லனா always update modeல இருக்கும்
      setEditIndex(null);

    } else {

      // new item add பண்ணும்
      // ...data old items copy பண்ணும்
      setData([...data, input]);
    }

    // input clear பண்ணும்
    setInput("");
  };



  // DELETE function
  const deleteItem = (index) => {

    // clicked item remove பண்ணும்
    const newData = data.filter((_, i) => i !== index);

    // delete ஆன data save பண்ணும்
    setData(newData);
  };



  // EDIT function
  const   editItem = (index) => {

    // selected item input boxல show ஆகும்
    setInput(data[index])

    // எந்த item edit ஆகுது nu save பண்ணும்
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

      {/* edit modeனா Update text வரும் */}
      {/* இல்லனா Add வரும் */}
      <button onClick={handleSubmit}>
        {editIndex !== null ? "Update" : "Add"}
      </button>



      {/* READ operation */}
      {data.map((item, index) => (
        <div key={index}>

          {/* item display */}
          <span>{item}</span>

          {/* edit button */}
          <button onClick={() => editItem(index)}>
            Edit
          </button>

          {/* delete button */}
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