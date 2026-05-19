import React, { useState } from "react";

const App = () => {

  const [darkMode, setDarkMode] = useState(false);

  // TOGGLE MODE
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      style={{
        height: "100vh",
        textAlign: "center",
        paddingTop: "50px",
        backgroundColor: darkMode ? "black" : "white",
        color: darkMode ? "white" : "black"
      }}
    >

      <h1>
        {darkMode ? "Dark Mode" : "Light Mode"}
      </h1>

      <button onClick={toggleTheme}>
        Change Theme
      </button>

    </div>
  );
};

export default App;