import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Register = () => {
  const [form, setForm] = useState({ email: "", password: "" })
  const navigate = useNavigate()

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const register = async () => {
    await axios.post("http://localhost:5000/api/auth/register", form)
    alert("Registered ✅")
    navigate("/")
  }

  return (
    <>
      <h2>Register</h2>
      <input name="email" onChange={handleChange} placeholder="Email" />
      <input name="password" onChange={handleChange} placeholder="Password" />
      <button onClick={register}>Register</button>
    </>
  )
}

export default Register