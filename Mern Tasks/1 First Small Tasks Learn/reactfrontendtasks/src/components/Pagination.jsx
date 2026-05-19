import React, { useState } from "react";

const App = () => {

  const data = [
    "Rocky",
    "Ram",
    "Sam",
    "Arun",
    "Kumar",
    "John",
    "David",
    "Alex"
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  // INDEX
  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;

  // CURRENT DATA
  const currentItems = data.slice(firstIndex, lastIndex);

  // TOTAL PAGES
  const totalPages = Math.ceil(data.length / itemsPerPage);   //Math.ceil() → decimal numberயை next full numberஆ மாற்றும்.

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>

      <h1>Pagination</h1>

      {currentItems.map((item, index) => (
        <div key={index}>
          {item}
        </div>
      ))}

      <br />

      {/* PREVIOUS */}
      <button
        onClick={() => setCurrentPage(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Prev
      </button>

      <span style={{ margin: "10px" }}>
        Page {currentPage}
      </span>

      {/* NEXT */}
      <button
        onClick={() => setCurrentPage(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>

    </div>
  );
};

export default App;