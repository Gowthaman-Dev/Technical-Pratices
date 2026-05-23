import React, { useState } from "react";

const App = () => {

  const [showModal, setShowModal] = useState(false);

  // OPEN MODAL
  const openModal = () => {
    setShowModal(true);
  };

  // CLOSE MODAL
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">

      <h1 className="text-4xl font-bold mb-6">
        Modal Popup
      </h1>

      <button
        onClick={openModal}
        className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition duration-300"
      >
        Open Modal
      </button>

      {/* MODAL */}
      {showModal && (

        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">

          <div className="bg-white w-[300px] p-6 rounded-2xl shadow-xl text-center">

            <h2 className="text-2xl font-bold mb-3">
              Hello Rocky 👋
            </h2>

            <p className="text-gray-600 mb-5">
              This is a modal popup.
            </p>

            <button
              onClick={closeModal}
              className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg transition duration-300"
            >
              Close
            </button>

          </div>

        </div>

      )}

    </div>
  );
};

export default App;


// Mind la vachika vendiya main points

// 1️⃣ useState
// const [showModal, setShowModal] = useState(false)

// 👉 modal open/close state store pannum

// false = hidden
// true = visible

// Memory line:

// 👉 "boolean state for popup"

// 2️⃣ Open Modal
// setShowModal(true)

// 👉 modal show ஆகும்

// Memory line:

// 👉 "true means show"

// 3️⃣ Close Modal
// setShowModal(false)

// 👉 modal hide ஆகும்

// Memory line:

// 👉 "false means hide"

// 4️⃣ onClick
// onClick={openModal}

// 👉 button click → modal open

// Memory line:

// 👉 "click panna action run"

// 5️⃣ Conditional Rendering
// {showModal && (...)}

// 👉 showModal trueனா மட்டும் render ஆகும்

// falseனா render ஆகாது

// Memory line:

// 👉 "&& means condition trueனா show"

// 6️⃣ Modal Overlay
// fixed inset-0

// 👉 full screen cover pannum

// Memory line:

// 👉 "fixed full screen"

// 7️⃣ Background Blur/Dark
// bg-black/50

// 👉 transparent dark background

// Memory line:

// 👉 "50 means opacity"

// 8️⃣ Modal Box
// bg-white p-6 rounded-2xl

// 👉 popup design

// Memory line:

// 👉 "white box = modal content"

// 9️⃣ Close Button
// onClick={closeModal}

// 👉 click panna popup close

// Memory line:

// 👉 "close click → hide modal"

// 🔟 Full Flow
// Open Button Click
// ↓
// openModal()
// ↓
// setShowModal(true)
// ↓
// state update
// ↓
// modal visible

// Close Button Click
// ↓
// closeModal()
// ↓
// setShowModal(false)
// ↓
// modal hidden

// Memory line:

// 👉 "state change → popup change"

// 1️⃣1️⃣ Main Concept
// Conditional Rendering

// true → show component
// false → hide component

// Memory line:

// 👉 "condition based UI"