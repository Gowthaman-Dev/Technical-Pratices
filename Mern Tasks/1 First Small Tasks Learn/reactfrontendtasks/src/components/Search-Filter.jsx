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
    <div style={{ textAlign: "center", marginTop: "30px" }}>

      <h1>Search Filter</h1>

      <input
        type="text"
        placeholder="Search Name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <br /><br />

      {filteredUsers.map((user, index) => (
        <div key={index}>
          {user}
        </div>
      ))}

    </div>
  );
};

export default App;