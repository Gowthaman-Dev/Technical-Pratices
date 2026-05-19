import React, { useState } from "react";

const App = () => {

  const [count, setCount] = useState(0);

  // INCREMENT
  const increase = () => {
    setCount(count + 1);
  };

  // DECREMENT
  const decrease = () => {
    setCount(count - 1);
  };

  // RESET
  const reset = () => {
    setCount(0);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>

      <h1>Counter App</h1>

      <h2>{count}</h2>

      <button onClick={increase}>
        Increment
      </button>

      <button onClick={decrease} style={{ marginLeft: "10px" }}>
        Decrement
      </button>

      <button onClick={reset} style={{ marginLeft: "10px" }}>
        Reset
      </button>

    </div>
  );
};

export default App;