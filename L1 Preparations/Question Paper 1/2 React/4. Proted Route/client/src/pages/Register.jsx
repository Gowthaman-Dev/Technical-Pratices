import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [msg, setMsg] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/register", form);
      setMsg(res.data.msg);
      navigate("/login");
    } catch (error) {
      setMsg(error.response.data.msg);
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input type="text"     name="name"     placeholder="Name"     onChange={handleChange} /><br />
        <input type="email"    name="email"    placeholder="Email"    onChange={handleChange} /><br />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} /><br />
        <button type="submit">Register</button>
      </form>
      <p>{msg}</p>
      <button onClick={() => navigate("/login")}>Go to Login</button>
    </div>
  );
};

export default Register;