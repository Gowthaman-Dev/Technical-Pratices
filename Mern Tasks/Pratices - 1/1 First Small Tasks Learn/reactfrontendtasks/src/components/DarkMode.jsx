import React, { useState } from "react";

const App = () => {

  const [darkMode, setDarkMode] = useState(false);

  // TOGGLE MODE
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center transition-all duration-500 ${
        darkMode
          ? "bg-black text-white"
          : "bg-white text-black"
      }`}
    >

      <h1 className="text-4xl font-bold mb-6">
        {darkMode ? "Dark Mode" : "Light Mode"}
      </h1>

      <button
        onClick={toggleTheme}
        className={`px-6 py-3 rounded-lg font-semibold transition duration-300 ${
          darkMode
            ? "bg-white text-black hover:bg-gray-300"
            : "bg-black text-white hover:bg-gray-800"
        }`}
      >
        Change Theme
      </button>

    </div>
  );
};

export default App;


// Mind la vachika vendiya main points

// 1️⃣ useState
// const [darkMode, setDarkMode] = useState(false)

// 👉 dark/light mode value store pannum

// false = light mode
// true = dark mode

// Memory line:

// 👉 "boolean state for toggle"

// 2️⃣ Toggle logic
// setDarkMode(!darkMode)

// 👉 opposite value change ஆகும்

// false → true
// true → false

// Memory line:

// 👉 "! means opposite"

// 3️⃣ Function
// const toggleTheme = () => {}

// 👉 theme change logic store pannum

// Memory line:

// 👉 "function = action"

// 4️⃣ onClick
// onClick={toggleTheme}

// 👉 button click → function run

// Memory line:

// 👉 "click panna action"

// 5️⃣ Conditional class
// darkMode ? "bg-black" : "bg-white"

// 👉 condition based class change

// true → dark class
// false → light class

// Memory line:

// 👉 "condition trueனா first value"

// 6️⃣ Template Literal
// className={`....`}

// 👉 dynamic class add panna use pannuvom

// Memory line:

// 👉 "dynamic class = backticks"

// 7️⃣ Conditional text
// darkMode ? "Dark Mode" : "Light Mode"

// 👉 text change based on state

// Memory line:

// 👉 "state change → text change"

// 8️⃣ UI Change
// bg-black text-white

// 👉 dark theme

// bg-white text-black

// 👉 light theme

// Memory line:

// 👉 "class change → UI change"

// 9️⃣ Full Flow
// Button Click
// ↓
// toggleTheme run
// ↓
// setDarkMode(!darkMode)
// ↓
// state update
// ↓
// component re-render
// ↓
// theme change

// Memory line:

// 👉 "state update → UI update"

// 🔟 Main Concept
// Toggle means switch between two values

// true ↔ false

// Memory line:

// 👉 "toggle = opposite value"

