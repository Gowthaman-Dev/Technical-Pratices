import React, { useEffect, useState } from "react";
import axios from "axios";

import Loading from "./components/Loading";
import Error from "./components/Error";
import UserList from "./components/UserList";

const App = () => {

  // USERS STATE
  const [users, setUsers] = useState([]);

  // LOADING STATE
  const [loading, setLoading] = useState(true);

  // ERROR STATE
  const [error, setError] = useState("");

  // API FETCH
  const fetchUsers = async () => {

    try {

      setLoading(true);

      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );

      setUsers(response.data);

      setError("");

    } catch (err) {

      setError("Failed To Fetch Users");

    } finally {

      setLoading(false);
    }
  };

  // useEffect
  useEffect(() => {

    fetchUsers();

  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">

      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-2xl">

        <h1 className="text-3xl font-bold text-center mb-6">
          API Fetching
        </h1>

        {/* LOADING */}
        {loading && <Loading />}

        {/* ERROR */}
        {error && <Error error={error} />}

        {/* USER LIST */}
        {!loading && !error && (
          <UserList users={users} />
        )}

      </div>

    </div>
  );
};

export default App;