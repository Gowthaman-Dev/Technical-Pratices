import React, { useState } from "react";

const App = () => {

  const [search, setSearch] = useState("");

  const users = [
    "Rocky",
    "Ram",
    "Sam",
    "Kumar",
    "Arun"
  ];

  // FILTER USERS
  const filteredUsers = users.filter((user) =>
    user.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">

      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md text-center">

        <h1 className="text-3xl font-bold mb-6">
          Search Filter
        </h1>

        <input
          type="text"
          placeholder="Search Name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <div className="mt-6 space-y-3">

          {filteredUsers.length > 0 ? (

            filteredUsers.map((user, index) => (
              <div
                key={index}
                className="bg-gray-100 py-3 rounded-lg shadow-sm text-lg font-medium"
              >
                {user}
              </div>
            ))

          ) : (

            <p className="text-red-500 font-medium">
              No Users Found
            </p>

          )}

        </div>

      </div>

    </div>
  );
};

export default App;

// Mind la vachika vendiya main points

// 1️⃣ Search State
// const [search, setSearch] = useState("")

// 👉 input search value store pannum

// Memory line:

// 👉 "search text store"

// 2️⃣ Users Array
// const users = ["Rocky", "Ram"]

// 👉 all users data store pannum

// Memory line:

// 👉 "array la full data"

// 3️⃣ onChange
// onChange={(e) => setSearch(e.target.value)}

// 👉 typing panna state update ஆகும்

// Memory line:

// 👉 "typing → state update"

// 4️⃣ e.target.value
// e.target.value

// 👉 input typed value edukkum

// Memory line:

// 👉 "current input value"

// 5️⃣ filter()
// users.filter()

// 👉 condition match items மட்டும் return pannum

// Memory line:

// 👉 "filter means select matching data"

// 6️⃣ includes()
// user.includes(search)

// 👉 searched text iruka nu check pannum

// Memory line:

// 👉 "includes means contains"

// 7️⃣ toLowerCase()
// user.toLowerCase()

// 👉 uppercase/lowercase ignore pannum

// ROCKY = rocky

// Memory line:

// 👉 "lowercase for case-insensitive search"

// 8️⃣ Filter Logic
// user.toLowerCase().includes(search.toLowerCase())

// 👉 user text la search text irundha match

// Memory line:

// 👉 "convert + check contains"

// 9️⃣ Filtered Data
// const filteredUsers = users.filter(...)

// 👉 matched users store pannum

// Memory line:

// 👉 "filtered array"

// 🔟 Conditional Rendering
// filteredUsers.length > 0

// 👉 data irundha show
// இல்லனா "No Users Found"

// Memory line:

// 👉 "length check for empty"

// 1️⃣1️⃣ map()
// filteredUsers.map()

// 👉 matched users display pannum

// Memory line:

// 👉 "map repeat UI"

// 1️⃣2️⃣ key={index}
// key={index}

// 👉 unique identify panna

// Memory line:

// 👉 "React unique key"

// 1️⃣3️⃣ Full Flow
// User Typing
// ↓
// setSearch()
// ↓
// search state update
// ↓
// filter() run
// ↓
// matching users get
// ↓
// UI re-render
// ↓
// filtered users show

// Memory line:

// 👉 "search change → filter change"

// 1️⃣4️⃣ Main Concept
// Search Filter means

// 👉 typed value based data filter pannurathu

// Memory line:

// 👉 "type and filter"
