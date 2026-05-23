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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">

      <h1 className="text-4xl font-bold mb-6">
        Counter App
      </h1>

      <h2 className="text-5xl font-semibold mb-8">
        {count}
      </h2>

      <div className="flex gap-4">

        <button
          onClick={increase}
          className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-lg"
        >
          Increment
        </button>

        <button
          onClick={decrease}
          className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg"
        >
          Decrement
        </button>

        <button
          onClick={reset}
          className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-lg"
        >
          Reset
        </button>

      </div>

    </div>
  );
};

export default App;


// Mind la vachika vendiya main points

// 1️⃣ useState
// const [count, setCount] = useState(0)

// 👉 count = current value
// 👉 setCount = update function
// 👉 0 = initial value

// Memory line:

// 👉 "state store panna useState"

// 2️⃣ Increment logic
// setCount(count + 1)

// 👉 current value + 1

// Memory line:

// 👉 "old value ku 1 add"

// 3️⃣ Decrement logic
// setCount(count - 1)

// 👉 current value - 1

// Memory line:

// 👉 "old value la 1 reduce"

// 4️⃣ Reset logic
// setCount(0)

// 👉 value back to zero

// Memory line:

// 👉 "reset means initial value"

// 5️⃣ Display state
// {count}

// 👉 screen la value show ஆகும்

// Memory line:

// 👉 "curly braces JS display pannum"

// 6️⃣ Button event
// onClick={increase}

// 👉 button click → function run

// Memory line:

// 👉 "onClick means action"

// 7️⃣ Function work
// const increase = () => {}

// 👉 reusable logic block

// Memory line:

// 👉 "function na work"

// 8️⃣ React Flow
// Click
// ↓
// Function run
// ↓
// setCount()
// ↓
// state update
// ↓
// UI re-render

// Memory line:

// 👉 "state change → UI change"