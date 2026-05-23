import React, { useState } from "react";

const App = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  // HANDLE INPUT
  const handleChange = (e) => {

    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  // SUBMIT
  const handleSubmit = (e) => {

    e.preventDefault();

    console.log(formData);

    alert("Form Submitted");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">

      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">

        <h1 className="text-3xl font-bold text-center mb-6">
          Form Handling
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">

          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition duration-300"
          >
            Submit
          </button>

        </form>

      </div>

    </div>
  );
};

export default App;


// Mind la vachika vendiya main points

// 1️⃣ useState object
// const [formData, setFormData] = useState({})

// 👉 multiple input values store panna object use pannuvom

// Memory line:

// 👉 "multiple fields = object state"

// 2️⃣ Initial values
// name: ""
// email: ""
// password: ""

// 👉 starting la empty value

// Memory line:

// 👉 "form start empty"

// 3️⃣ handleChange
// const handleChange = (e) => {}

// 👉 input change aana run ஆகும்

// Memory line:

// 👉 "typing na onChange run"

// 4️⃣ e.target
// const { name, value } = e.target

// 👉 current input details edukkum

// name = input name
// value = typed value

// Memory line:

// 👉 "target la current input info"

// 5️⃣ Update object state
// setFormData({
//   ...formData,
//   [name]: value
// })

// 👉 old data keep pannum
// 👉 current field மட்டும் update pannum

// Memory line:

// 👉 "spread old object + update current field"

// 6️⃣ Spread operator
// ...formData

// 👉 existing values copy pannum

// Memory line:

// 👉 "spread means copy old data"

// 7️⃣ Dynamic key
// [name]: value

// 👉 input name based update ஆகும்

// name="email"
// 👉 email field update ஆகும்

// Memory line:

// 👉 "square bracket dynamic key"

// 8️⃣ value={formData.name}

// 👉 state value input la show ஆகும்

// Memory line:

// 👉 "state control pannum input"

// 9️⃣ onChange={handleChange}

// 👉 typing panna function run

// Memory line:

// 👉 "onChange = input update"

// 🔟 onSubmit
// <form onSubmit={handleSubmit}>

// 👉 form submit aana function run

// Memory line:

// 👉 "submit panna handleSubmit"

// 1️⃣1️⃣ preventDefault()
// e.preventDefault()

// 👉 page refresh stop pannum

// Memory line:

// 👉 "prevent refresh"

// 1️⃣2️⃣ console.log(formData)

// 👉 full form data print pannum

// Memory line:

// 👉 "submitted data check"

// 1️⃣3️⃣ Controlled Component
// value + onChange use panna

// 👉 React control pannum input

// Memory line:

// 👉 "React controls input"

// 1️⃣4️⃣ Full Flow
// User Typing
// ↓
// onChange run
// ↓
// handleChange()
// ↓
// setFormData()
// ↓
// state update
// ↓
// UI update

// Submit
// ↓
// handleSubmit()
// ↓
// preventDefault()
// ↓
// form data access

// Memory line:

// 👉 "input change → state update"
