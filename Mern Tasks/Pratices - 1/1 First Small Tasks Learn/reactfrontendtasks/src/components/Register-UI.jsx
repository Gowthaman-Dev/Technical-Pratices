import React, { useState } from "react";

const App = () => {

  const [isLogin, setIsLogin] = useState(true);

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

    alert(isLogin ? "Login Success" : "Register Success");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">

      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md">

        <h1 className="text-3xl font-bold text-center mb-6">
          {isLogin ? "Login Form" : "Register Form"}
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* REGISTER ONLY */}
          {!isLogin && (
            <input
              type="text"
              name="name"
              placeholder="Enter Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          )}

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
            {isLogin ? "Login" : "Register"}
          </button>

        </form>

        <div className="text-center mt-5">

          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-blue-500 hover:text-blue-700 font-medium"
          >
            {isLogin
              ? "Create New Account"
              : "Already Have Account"}
          </button>

        </div>

      </div>

    </div>
  );
};

export default App;





// Mind la vachika vendiya main points

// 1️⃣ Login/Register State
// const [isLogin, setIsLogin] = useState(true)

// 👉 current mode track pannum

// true = login
// false = register

// Memory line:

// 👉 "boolean for form switch"

// 2️⃣ Form State
// const [formData, setFormData] = useState({})

// 👉 all input values store pannum

// Memory line:

// 👉 "multiple inputs = object state"

// 3️⃣ handleChange
// const { name, value } = e.target

// 👉 current input value edukkum

// Memory line:

// 👉 "target la current input"

// 4️⃣ Update Form Data
// setFormData({
//   ...formData,
//   [name]: value
// })

// 👉 old data keep pannum
// 👉 current field update pannum

// Memory line:

// 👉 "copy old + update current"

// 5️⃣ Spread Operator
// ...formData

// 👉 existing values copy pannum

// Memory line:

// 👉 "spread = copy old object"

// 6️⃣ Dynamic Key
// [name]: value

// 👉 input name based update ஆகும்

// Memory line:

// 👉 "dynamic field update"

// 7️⃣ preventDefault()
// e.preventDefault()

// 👉 page refresh stop pannum

// Memory line:

// 👉 "prevent refresh"

// 8️⃣ Conditional Alert
// isLogin ? "Login Success" : "Register Success"

// 👉 mode based message show pannum

// Memory line:

// 👉 "condition based text"

// 9️⃣ Conditional Heading
// {isLogin ? "Login Form" : "Register Form"}

// 👉 heading change ஆகும்

// Memory line:

// 👉 "state change → text change"

// 🔟 Conditional Rendering
// {!isLogin && (...)}

// 👉 register mode la மட்டும் name input show ஆகும்

// true && value → show
// false && value → hide

// Memory line:

// 👉 "&& trueனா render"

// 1️⃣1️⃣ Toggle Form
// setIsLogin(!isLogin)

// 👉 login ↔ register switch pannum

// Memory line:

// 👉 "toggle opposite value"

// 1️⃣2️⃣ Button Text Change
// {isLogin ? "Login" : "Register"}

// 👉 button text mode based change

// Memory line:

// 👉 "UI depends on state"

// 1️⃣3️⃣ Controlled Inputs
// value + onChange

// 👉 React controls input values

// Memory line:

// 👉 "React controlled form"

// 1️⃣4️⃣ Full Flow
// User Typing
// ↓
// onChange run
// ↓
// setFormData()
// ↓
// state update

// Toggle Click
// ↓
// setIsLogin(!isLogin)
// ↓
// login/register switch

// Submit
// ↓
// handleSubmit()
// ↓
// alert message

// Memory line:

// 👉 "state update → UI update"

// 1️⃣5️⃣ Main Concept
// One component
// Two forms

// 👉 condition use panni switch pannrom

// Memory line:

// 👉 "conditional rendering for forms"
