import React, { useMemo, useState } from "react";

const App = () => {

  const [search, setSearch] = useState("");

  const users = [
    "Rocky",
    "Ram",
    "Sam",
    "Kumar",
    "Arun"
  ];

  // Optimized filtering
  const filteredUsers = useMemo(() => {

    console.log("Filtering...");

    return users.filter((user) =>
      user.toLowerCase().includes(search.toLowerCase())
    );

  }, [search]);

  return (
    <div>

      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {filteredUsers.map((user, index) => (
        <h3 key={index}>{user}</h3>
      ))}

    </div>
  );
};

export default App;