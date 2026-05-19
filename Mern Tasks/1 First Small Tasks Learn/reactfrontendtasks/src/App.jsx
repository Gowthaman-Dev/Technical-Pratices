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
    <div style={{ textAlign: "center", marginTop: "50px" }}>

      <h1>Modal Popup</h1>

      <button onClick={openModal}>
        Open Modal
      </button>

      {/* MODAL */}
      {showModal && (

        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100vh",
            backgroundColor: "rgba(0,0,0,0.5)"
          }}
        >

          <div
            style={{
              backgroundColor: "white",
              width: "300px",
              margin: "100px auto",
              padding: "20px",
              borderRadius: "10px"
            }}
          >

            <h2>Hello Rocky 👋</h2>

            <p>This is a modal popup.</p>

            <button onClick={closeModal}>
              Close
            </button>

          </div>

        </div>

      )}

    </div>
  );
};

export default App;