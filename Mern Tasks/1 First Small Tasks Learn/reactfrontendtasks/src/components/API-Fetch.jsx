import React, { useEffect, useState } from "react";

const App = () => {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // API FETCH
  useEffect(() => {

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {

        setUsers(data);

        setLoading(false);
      });

  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>

      <h1>API Fetch Example</h1>

      {loading ? (

        <h2>Loading...</h2>

      ) : (

        users.map((user) => (
          <div key={user.id}>

            <h3>{user.name}</h3>
            <p>{user.email}</p>

          </div>
        ))

      )}

    </div>
  );
};

export default App;