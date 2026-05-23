import React, { useEffect, useState } from "react";

const App = () => {
  // Form State
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // Users State
  const [users, setUsers] = useState([]);

  // Edit Mode
  const [editId, setEditId] = useState(null);

  // =========================
  // READ (API CALL)
  // =========================
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.slice(0, 1));
      });
  }, []);

  // =========================
  // CREATE + UPDATE
  // =========================
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email) {
      alert("Please fill all fields");
      return;
    }

    // UPDATE
    if (editId !== null) {
      const updatedUsers = users.map((user) =>
        user.id === editId
          ? { ...user, name: name, email: email }
          : user
      );

      setUsers(updatedUsers);
      setEditId(null);
    } else {
      // CREATE
      const newUser = {
        id: Date.now(),
        name,
        email,
      };

      setUsers([...users, newUser]);
    }

    // Clear Inputs
    setName("");
    setEmail("");
  };

  // =========================
  // DELETE
  // =========================
  const handleDelete = (id) => {
    const filteredUsers = users.filter((user) => user.id !== id);

    setUsers(filteredUsers);
  };

  // =========================
  // EDIT
  // =========================
  const handleEdit = (user) => {
    setName(user.name);
    setEmail(user.email);

    setEditId(user.id);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-5">
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-xl p-6">
        
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">
          User Management CRUD App
        </h1>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-4 mb-6">
          
          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-gray-300 p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
          />

          <button
            type="submit"
            className={`w-full py-3 rounded-lg text-white font-semibold ${
              editId !== null
                ? "bg-yellow-500 hover:bg-yellow-600"
                : "bg-blue-500 hover:bg-blue-600"
            }`}
          >
            {editId !== null ? "Update User" : "Add User"}
          </button>
        </form>

        {/* USER LIST */}
        <div className="space-y-4">
          {users.map((user) => (
            <div
              key={user.id}
              className="flex justify-between items-center bg-gray-50 border border-gray-200 p-4 rounded-lg shadow-sm"
            >
              <div>
                <h2 className="text-lg font-semibold">{user.name}</h2>
                <p className="text-gray-600">{user.email}</p>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => handleEdit(user)}
                  className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg"
                >
                  Edit
                </button>

                <button
                  onClick={() => handleDelete(user.id)}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default App;