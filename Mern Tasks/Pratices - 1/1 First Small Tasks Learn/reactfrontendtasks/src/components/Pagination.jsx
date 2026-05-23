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
  const totalPages = Math.ceil(data.length / itemsPerPage);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">

      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md text-center">

        <h1 className="text-4xl font-bold mb-6">
          Pagination
        </h1>

        <div className="space-y-3 mb-6">

          {currentItems.map((item, index) => (
            <div
              key={index}
              className="bg-gray-100 py-3 rounded-lg text-lg font-medium shadow-sm"
            >
              {item}
            </div>
          ))}

        </div>

        {/* BUTTONS */}
        <div className="flex items-center justify-center gap-4">

          {/* PREVIOUS */}
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="bg-blue-500 hover:bg-blue-600 disabled:bg-gray-400 text-white px-5 py-2 rounded-lg transition duration-300"
          >
            Prev
          </button>

          <span className="text-lg font-semibold">
            Page {currentPage}
          </span>

          {/* NEXT */}
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="bg-green-500 hover:bg-green-600 disabled:bg-gray-400 text-white px-5 py-2 rounded-lg transition duration-300"
          >
            Next
          </button>

        </div>

      </div>

    </div>
  );
};

export default App;





// Mind la vachika vendiya main points

// 1️⃣ Data Array
// const data = ["Rocky", "Ram", "Sam"]

// 👉 full items store pannum

// Memory line:

// 👉 "array la all data"

// 2️⃣ Current Page State
// const [currentPage, setCurrentPage] = useState(1)

// 👉 current page track pannum

// page start = 1

// Memory line:

// 👉 "which page now"

// 3️⃣ Items Per Page
// const itemsPerPage = 3

// 👉 one page la evlo items show pannanu

// Memory line:

// 👉 "one page item limit"

// 4️⃣ Last Index
// const lastIndex = currentPage * itemsPerPage

// 👉 current page last item calculate pannum

// Example:
// page 1 → 1 * 3 = 3

// Memory line:

// 👉 "page × limit"

// 5️⃣ First Index
// const firstIndex = lastIndex - itemsPerPage

// 👉 current page first item calculate pannum

// Example:
// 3 - 3 = 0

// Memory line:

// 👉 "last index - limit"

// 6️⃣ slice()
// data.slice(firstIndex, lastIndex)

// 👉 required items மட்டும் edukkum

// Example:
// slice(0,3)

// 👉 first 3 items

// Memory line:

// 👉 "slice means cut portion"

// 7️⃣ Current Items
// const currentItems = data.slice(...)

// 👉 current page data store pannum

// Memory line:

// 👉 "current page items"

// 8️⃣ Total Pages
// Math.ceil(data.length / itemsPerPage)

// 👉 total pages calculate pannum

// Example:
// 8 / 3 = 2.6
// ceil → 3

// Memory line:

// 👉 "ceil means next full number"

// 9️⃣ map()
// currentItems.map()

// 👉 current page items display pannum

// Memory line:

// 👉 "map repeat UI"

// 🔟 Previous Button
// setCurrentPage(currentPage - 1)

// 👉 previous page pogum

// Memory line:

// 👉 "minus means previous"

// 1️⃣1️⃣ Next Button
// setCurrentPage(currentPage + 1)

// 👉 next page pogum

// Memory line:

// 👉 "plus means next"

// 1️⃣2️⃣ disabled
// disabled={currentPage === 1}

// 👉 first page la Prev disable

// disabled={currentPage === totalPages}

// 👉 last page la Next disable

// Memory line:

// 👉 "condition trueனா disable"

// 1️⃣3️⃣ Full Flow
// Button Click
// ↓
// currentPage update
// ↓
// indexes recalculate
// ↓
// slice() new items
// ↓
// UI re-render
// ↓
// new page data show

// Memory line:

// 👉 "page change → new data"

// 1️⃣4️⃣ Main Concept
// Pagination means

// 👉 large data ah small pages ah split pannurathu

// Memory line:

// 👉 "split data into pages"

