import React, { useState } from "react";

const App = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  // HANDLE INPUT
  const handleChange = (e) => {

    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  // SUBMIT
  const handleSubmit = (e) => {

    e.preventDefault();

    console.log(formData);

    alert("Form Submitted");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>

      <h1>Form Handling</h1>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={formData.name}
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={formData.password}
          onChange={handleChange}
        />

        <br /><br />

        <button type="submit">
          Submit
        </button>

      </form>

    </div>
  );
};

export default App;