import { useMemo, useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const expensiveCalculation = useMemo(() => {
    console.log("Calculating...");
    let total = 0;
    for (let i = 0; i < 10; i++) {
      total += i;
    }
    return total;
  },[text])

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>

      <input value={text} onChange={(e) => setText(e.target.value)} />

      <p>{expensiveCalculation}</p>
    </>
  );
};

export default App;





// import React, { useState, useCallback } from "react";

// // Child component wrapped in React.memo to prevent unnecessary re-renders
// const Child = React.memo(({ onClic }) => {
//   console.log("Child rendered"); // Only logs when Child actually re-renders
//   return <button onClick={onClic}>Click Me</button>;
// });

// const App = () => {
//   const [count, setCount] = useState(0);

//   // useCallback ensures the function reference stays the same across re-renders
//   const handleClick = useCallback(() => {
//     console.log("Button clicked");
//   }, []);

//   return (
//     <>
//       <h1>Count: {count}</h1>
//       <button onClick={() => setCount(count + 1)}>Increment Count</button>

//       {/* Passing the memorized function to Child */}
//       <Child onClic={handleClick} />
//     </>
//   );
// };

// export default App;