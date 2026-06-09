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

  const filteredUsers = users.filter((user) =>
    user.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>Search Filter</h1>

      <input
        type="text"
        placeholder="Search Name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {filteredUsers.length > 0 ? (
        filteredUsers.map((user, index) => (
          <p key={index}>{user}</p>
        ))
      ) : (
        <p>No Users Found</p>
      )}
    </div>
  );
};

export default App;