import React, { useState } from "react"

const App = () => {

  const [isLogin, setIsLogin] = useState(true)

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

    alert(isLogin ? "Login Success" : "Register Success");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>

      <h1>
        {isLogin ? "Login Form" : "Register Form"}
      </h1>

      <form onSubmit={handleSubmit}>

        {/* REGISTER ONLY */}
        {!isLogin && (
          <>
            <input
              type="text"
              name="name"
              placeholder="Enter Name"
              value={formData.name}
              onChange={handleChange}
            />

            <br /><br />
          </>
        )}

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
          {isLogin ? "Login" : "Register"}
        </button>

      </form>

      <br />

      <button onClick={() => setIsLogin(!isLogin)}>
        {isLogin
          ? "Create New Account"
          : "Already Have Account"}
      </button>

    </div>
  );
};

export default App;